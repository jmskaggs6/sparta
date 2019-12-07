import { Component, OnInit, ViewChildren, QueryList, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { Repository } from '../models/repository';
import { Router } from '@angular/router';
import { ServerListStartUp } from '../models/serverlist/serverlist.model';
import { FilterService } from '../services/filter.service';
import { SortService } from '../services/sort.service';
import { ITableColConfigState, TableColHepler, TableColumnConfig, TableHelper, ITableConfigState } from '../table/table-column-config';
import { ServerFilterVersion } from './server-filter-version/server-filter-version.component';
import { ServerListConfigDialog } from './dialogs/slconfigdialog.component';
import { ConfirmedDialog } from '../dialogs/confirm/confirmdialog.component';
import { MatDialog, MAT_DIALOG_DATA, MatDialogConfig } from '@angular/material/dialog';
import { ServerListState, ServerListPersist, ServerColumnState } from './serverlist.state';
import { Subscription, timer ,  interval } from 'rxjs';
import { ServerConnectDialog } from './server-connect/server-connect.dialog.component';
import { ServerListSrv } from './services/serverlist.service';

@Component({
    selector: 'serverlist',
    templateUrl: 'serverlist.component.html',
    styleUrls: ['serverlist.component.css'],
    providers: [FilterService]
})
export class ServerListComponent implements OnInit, OnDestroy {
    private _serverTableConfig: ITableConfigState;
    public expanded: boolean = false;

    @ViewChildren(ServerFilterVersion) versionFilters: QueryList<ServerFilterVersion>

    serverListPersist: ServerListPersist[] = [];

    isLoading: boolean = false;
    
    filterYellowBox: boolean = false;
    connectCardOpen: boolean = false;

    selectedRow: number = 0;
    selectedServer: string;
    
    serversFiltered: ServerListStartUp[];

    pollingTimer: Subscription = new Subscription();

    private _lastRefreshSub: Subscription = new Subscription();
    private _lastRefresh: Number;

    refreshOn: boolean = true;
    constructor(private repo: Repository, private router: Router, private filterSrv: FilterService,
        public sortSrv: SortService, private confirmDialog: MatDialog, public serverLstState: ServerListState,
        private configDialog: MatDialog, private connectDialog: MatDialog, public serverLstSrv: ServerListSrv,
        private ref: ChangeDetectorRef) {
       
    }

    ngOnInit() {
        this._serverTableConfig = { tableColConfig: ServerColumnState.getColumns(), currentSortCol: 0, currentSortColName: "serverID" };
        //this._loadState();
        
        this._lastRefreshSub = this.serverLstSrv.lastRefresh.subscribe(result => {
            this._lastRefresh = result;
            this.ref.markForCheck();
        });
        this.serverLstSrv.loadData();
        this.serverLstSrv.serverList.subscribe(result => {
            this.serversFiltered = result;
            this.ref.markForCheck();
        });
        this.pollingTimer = interval(30000).subscribe(() => this._refreshData());
    }

    //set currentSortCol(index: number) {
    //    this._serverTableConfig.currentSortCol = index;
    //}

    get currentSortCol() {
        return this._serverTableConfig.currentSortCol;
    }
    get serverList(): ServerListStartUp[] {
        return this.serversFiltered;
    }

    get currentSortColName(): string {
        return this._serverTableConfig.currentSortColName;
    }
    get serverListColumns(): ITableColConfigState[] {
        return this._serverTableConfig.tableColConfig;
    }

    get isFiltered(): boolean {
        return this.serverLstSrv.isFiltered;
    }

    public getHeaderClass(): string {
        if (!this.expanded) {
            return "fa fa-caret-down fa-vc";
        } else {
            return "fa fa-caret-up fa-vc";
        }
    }

    get cardTitle(): string {
        if (this.serverLstSrv.isFiltered) {
            return `Server List (${this.serversFiltered.length}) *Filtered`;
        } else {
            return `Server List (${this.serversFiltered.length})`;
        }
    }

    get isAsc(): boolean {
        return TableColHepler.isAsc(this.serverListColumns[this.currentSortCol].sortDir);
    }
    //get sortedColumn(): string {
    //    return this.serverListColumns[this.currentSortCol].tableColumns.sortCol;
    //}
    get serverCols(): TableColumnConfig[] {
        return this.serverListColumns.filter(cols => cols.visible == true).map(colObj => colObj.tableColumns);
    }

    get serversWithIssues() {
        return this.serverLstSrv.serversWithIssues;
    }

    get lastRefresh(): Number {
        return this._lastRefresh;
    }

    get issuesClass(): string {
        if (this.serverLstSrv.serversWithIssues > 0) {
            return 'bg-danger text-white';
        } else {
            return 'bg-info text-black';
        }
    }

    public openConnect() {
        this.connectCardOpen = !this.connectCardOpen;
        const config = new MatDialogConfig();
        config.data = { serverId: this.selectedServer };

        this.pollingTimer.unsubscribe();

        const dialogRef = this.configDialog.open(ServerConnectDialog, config);
        

        dialogRef.afterClosed().subscribe(close => {
            this._refreshData();
            this.ref.detectChanges();
            console.log('Connection dialog closed');
        })
    }

    openConfigDialog() {
        this.pollingTimer.unsubscribe();
        const dialogRef = this.configDialog.open(ServerListConfigDialog, { data: this.serverListColumns }
        );

        dialogRef.afterClosed().subscribe(close => {
            
            ServerColumnState.saveColumns(this.serverListColumns);
            this._refreshData();
        })
    }

    //private _loadState() {
    //    this.currentSortColName = this.serverLstState.currentSortColName;
    //    //this.serverFilter = this.serverLstState.serverFilter;
    //    //this.serverNotFilter = this.serverLstState.serverNotFilter;
    //}

    //private _saveState() {
    //    this.serverLstState.currentSortColName = this.currentSortColName;
    //    //this.serverLstState.serverFilter = this.serverFilter;
    //    //this.serverLstState.serverNotFilter = this.serverNotFilter;
    //}

    ngOnDestroy() {
        this.pollingTimer.unsubscribe();
        this._lastRefreshSub.unsubscribe();
    }
    
    private _refreshData() {
        this.serverLstSrv.refreshData();
        this.ref.markForCheck();
    }

    //public sortTable(col: string) {
    //    this.serverListColumns.forEach(s => s.sortDir = SortDirection.NONE);

    //    var colSel = this.serverListColumns[this.serverListColumns.findIndex(c => c.tableColumns.colName === col)];
    //    colSel.sortDir = SortDirection.ASC;
    //    colSel.sorted = true;

    //}

    public setSort(col: number) {
        TableHelper.setSort(this._serverTableConfig, col);
    }

    public isColVisible(colName: string): boolean {
        return this.serverListColumns.find(name => name.tableColumns.colName == colName).visible;
    }

    public setClickedRow(i, serverId) {
        this.selectedRow = i;
        this.selectedServer = serverId;
    }

    public getSortClass(colIndex: number): string {
        return TableColHepler.getSortClass(this._serverTableConfig.tableColConfig, colIndex);
        
    }
    
    public filterByYellowBox() {
        if (this.filterYellowBox === true) {
            this.serverLstSrv.filterByYellowBox(true);
        }
        else {
            this.serverLstSrv.filterByYellowBox(null);
        }
    }

    public timeBGClass(time: number): string {
        if (time > 60) {
            return "bg-danger text-white";
        } else if (time > 30) {
            return 'bg-warning text-white';
        } else {
            return 'bg-success text-white';
        } 
    }

    public postServerCmd(serverId: string, cmd: string) {

        const dialogRef = this.confirmDialog.open(ConfirmedDialog, {
            data: { title: 'Server command', question: `Do you wish to send a ${cmd} to ${serverId}?`, confirmed: false }
        });
        dialogRef.afterClosed().subscribe(result => {
            console.log(result);
            if (result) {
                console.log("Command sent");
                this.repo.postServerCmd(serverId, cmd)
                    .subscribe(result => console.log(result));
            } else {
                console.log("Command not sent");
            }
            
        });
    }

    public trackByFnc(index, item) {
        if (!item) return null;
        return item.serverID;
    }
}

