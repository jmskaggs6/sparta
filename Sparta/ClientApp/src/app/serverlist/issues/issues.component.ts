import { Component, OnInit, OnDestroy, Input, Output } from '@angular/core';
import { Repository } from '../repository';
import { CPRIssue, CPRIssueCount } from '../models//CPRIssue.model';

import { SortService } from '../services/sort.service';
import { TableColumnConfig, SortDirection, ITableColConfigState, TableColHepler, DataType, ITableConfigState, TableHelper } from '../table/table-column-config';
import { Subscription, Observable, interval, pipe, of, forkJoin } from 'rxjs';
import { switchMap, startWith, map, tap } from 'rxjs/operators';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

@Component({
    selector: 'issues',
    templateUrl: 'issues.component.html',
    styleUrls: ['issues.component.css']
})
export class IssuesComponent implements OnInit, OnDestroy {
    private _issuesData: CPRIssue[];
    private _issuesDataFilter: CPRIssue[] = [];
    public expanded: boolean = false;

    issueCount: number = 0;

    $issueCount: Subscription = new Subscription();

    @Output()
    issueOpen: boolean = false;

    lastRefresh: number = Date.now();
    isRefreshing: boolean = false;
    selIssues: number[];
    timerSub: Subscription = new Subscription();

    serversWithIssues: string[];
    _serverFilter: string;

    yellowBoxes: any;

    deleteCount: number = 0;

    private _tableConfig: ITableConfigState;

    private _tableHeader: ITableColConfigState[] = [
        //{
        //    sortDir: SortDirection.NONE, visible: true, sorted: false, orderBy: 0, tableColumns:
        //        new TableColumnConfig({ colName: "selected", caption: '', Sortable: false })
        //},
        {
            sortDir: SortDirection.NONE, visible: true, sorted: false, orderBy: 0, tableColumns:
                new TableColumnConfig({ colName: "serverID", caption: 'ServerID', Sortable: true })
        },
        {
            sortDir: SortDirection.NONE, visible: true, sorted: false, orderBy: 1, tableColumns:
                new TableColumnConfig({ colName: "fileName", caption: 'File name', Sortable: true })
        },
        {
            sortDir: SortDirection.DESC, visible: true, sorted: true, orderBy: 2, tableColumns:
                new TableColumnConfig({ colName: "dateReceived", caption: 'Date received', Sortable: true, dataType: DataType.DATE_TIME })
        },
        {
            sortDir: SortDirection.NONE, visible: true, sorted: false, orderBy: 3, tableColumns:
                new TableColumnConfig({ colName: "serverIP", caption: 'ServerIP', Sortable: true })
        }
    ];

    constructor(public sortSrv: SortService, private repo: Repository, private snackBar: MatSnackBar) {
        this._serverFilter = '';
    }

    ngOnInit() {
        this._tableConfig = { tableColConfig: this._tableHeader, currentSortCol: 0, currentSortColName: "serverID" };
        this._refreshIssueCount();
        this._refreshData();
    }
    get tableHeader(): ITableColConfigState[] {
        return this._tableConfig.tableColConfig;
    }
    get serverFilter(): string {
        return this._serverFilter;
    }
    set serverFilter(fil: string) {
        this._serverFilter = fil;
    }

    get issuesData(): CPRIssue[] {
        return this._issuesDataFilter;
    }

    public getHeaderClass(): string {
        if (!this.expanded) {
            return "fa fa-caret-down fa-vc";
        } else {
            return "fa fa-caret-up fa-vc";
        }
    }
    public deleteSelected() {
        
        this.deleteCount = 0;

        let selIssues = this._issuesDataFilter.filter(sel => sel.recordSelected == true)
            .map(val => val.issueID);

        this.deleteCount = selIssues.length;
        if (this.deleteCount > 0) {
            this.timerSub.unsubscribe();

            forkJoin(
                selIssues.map(id => <Observable<any>>this.repo.deleteIssue(id))).pipe(
                    map(val => val),
                    tap(() => this._deleteComplete())
                ).subscribe();
        } else {
            this._openSnackBar("Nothing to delete");
        }
    }

    public loadYellowBox(serverId: string, filePath: string, row: number) {
        this._issuesDataFilter[row].expanded = !this._issuesDataFilter[row].expanded;
        if (!this._issuesDataFilter[row].yellowBox) {
            this.repo.getIssueYB(serverId, filePath).subscribe(val => {
                if (this._issuesDataFilter[row]) {
                    this._issuesDataFilter[row].yellowBox = val.yellowBox;
                }
            })
        }
    }

    public sendContinue(serverId: string) {
        this.repo.postServerCmd(serverId, 'continue')
            .subscribe(result => {
                console.log(result);
                this._openSnackBar(`Continue sent to ${serverId}`);
            })
    }

    private _deleteComplete() {
        this._openSnackBar(`${this.deleteCount} issues deleted`);
        this._refreshData();
        this._refreshIssueCount();
    }

    public selectAll($event) {
        this._issuesDataFilter.forEach(issue => {
            issue.recordSelected = true;

        });
    }

    public refreshIssues() {
        this._refreshData();
    }

    private _refreshData() {
        this.isRefreshing = true;
        this.repo.getIssues().subscribe(data => {
            this._issuesData = data;
            this._issuesDataFilter = data;
            this.serversWithIssues = this._issuesData.filter((obj, pos, arr) => {
                return arr.map(mapObj => mapObj.serverID).indexOf(obj.serverID) === pos;
            }).map(val => val.serverID).sort();

            this.lastRefresh = Date.now();
            this.isRefreshing = false;
        });
      }

    public selectChange(event) {
        this._applyFilter();
    }

    private _applyFilter() {
        if (this.serverFilter) {
            this._issuesDataFilter = this._issuesData.filter(x => x.serverID == this.serverFilter);
        } else {
            this._issuesDataFilter = this._issuesData;
        }
    }

    private _refreshIssueCount() {
        
        this.timerSub = interval(30000)
            .pipe(
                startWith(0),
                switchMap(() => this.repo.getIssueCount())
            ).subscribe(response => 
            this.issueCount = response ? response.issueCount : 0
        );
    
    }

    private _openSnackBar(msg) {
        let config = new MatSnackBarConfig();
        config.duration = 500;
        this.snackBar.open(msg, undefined, config);
    }
    
    isColDateTime(index): boolean {
        if (this.tableHeader[index].tableColumns.dataType === DataType.DATE_TIME) {
            return true;
        } else {
            return false;
        }
    }

    get currentSortColName(): string {
        return this._tableConfig.currentSortColName;
    }

    get tableCols(): TableColumnConfig[] {
        return this.tableHeader
            .filter(cols => cols.visible == true && cols.tableColumns.systemCol === false)
            .sort(col => col.orderBy)
            .map(colObj => colObj.tableColumns);
    }

    openIssueCard() {
        this.issueOpen = !this.issueOpen;
    }

    ngOnDestroy() {
        this.timerSub.unsubscribe();
    }
    
    getSortClass(colIndex: number): string {
        return TableColHepler.getSortClass(this.tableHeader, colIndex);
    }

    setSort(col: number) {
        TableHelper.setSort(this._tableConfig, col);
    }

    get isAsc(): boolean {
        return TableColHepler.isAsc(this.tableHeader[this._tableConfig.currentSortCol].sortDir);
    }

    get sortedColumn(): string {
        return this.tableHeader[this._tableConfig.currentSortCol].tableColumns.sortCol;
    }

    
    getKey(index: number, issue: CPRIssue) {
        return issue.issueID;
    }
    
}

interface IIssueYellowBox {
    issueId: number;
    yellowBox: string;
}
interface IIssueState {
    issueId: number;
    selected: boolean;
}
