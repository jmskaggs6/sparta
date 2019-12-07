import { Component, OnInit } from '@angular/core';
import { Repository } from '../repository';
import { ServerListVersion } from '../models/serverlistversion.model';
import {
    ITableColConfigState, SortDirection,
    TableColumnConfig, TableColHepler, DataType, FilterType, ITableConfigState, TableHelper
} from '../table/table-column-config';
import { SortService } from '../services/sort.service';
import { JsFuncService } from '../services/jsfunc.service';
import { FilterService } from '../services/filter.service';
import { ServerListSrv } from '../services/serverlist.service';
import { Subscription } from 'rxjs';

@Component({
    selector: 'serverversions',
    templateUrl: 'serverversions.component.html',
    styleUrls: ['serverversions.component.css']
})
export class ServerVersionsComponent implements OnInit {
    public expanded: boolean = false;
    public isLoading: boolean = false;

    private _serverVersions: ServerListVersion[] = [];
    private _serverVersionsFiltered: ServerListVersion[] = [];
    private _serverFilter: any = {};
    private _serverFilterId: string;

    public selectedRow: number = 0;
    
    private _tableConfig: ITableConfigState;
    private subFilter: Subscription = new Subscription();

    constructor(private repo: Repository, public sortSrv: SortService, private jsFunc: JsFuncService,
                private filterSrv: FilterService, private serverLstSrv: ServerListSrv) {

    } 

    ngOnDestroy() {
        this.subFilter.unsubscribe();
    }
    ngOnInit() {
        this._tableConfig = { tableColConfig: serverVCols, currentSortCol: 0, currentSortColName: "serverid" };
        this._tableConfig.tableColConfig.forEach(header => {
            this._serverFilter[header.tableColumns.colName] = '';
            
        });
        this._serverFilterId = '';
        this.refreshData();
        this.subFilter = this.serverLstSrv.serverFilter.subscribe(result => {
            this._serverFilterId = result['serverID'];
            this._applyFilter();
        });
    }
    get tableHeader() : ITableColConfigState[] {
        return this._tableConfig.tableColConfig;
    }
    
    get currentSortColName(): string {
        return this._tableConfig.currentSortColName;
    }
    get tableCols(): TableColumnConfig[] {
        return this.tableHeader.filter(cols => cols.visible == true).map(colObj => colObj.tableColumns);
    }
    get isAsc(): boolean {
        return TableColHepler.isAsc(this.tableHeader[this._tableConfig.currentSortCol].sortDir);
    }
    get cardTitle(): string {
        if (this.serverLstSrv.isFiltered) {
            return `Versions (${this._serverVersionsFiltered.length}) *Filtered`;
        } else {
            return `Versions List (${this._serverVersionsFiltered.length})`;
        }
    }
    get serverVersions(): ServerListVersion[] {
        return this._serverVersionsFiltered;
    }
    public clearFilter() {
        this._tableConfig.tableColConfig.forEach(header => {
            this._serverFilter[header.tableColumns.colName] = '';
            header.tableColumns.filterValue = '';
        });
        this._serverVersionsFiltered = this._serverVersions;
    }
    public refreshData() {
        this.isLoading = true;
        this.repo.getServerListVersion().subscribe(versions => {
            this._serverVersions = versions;
            this._serverVersionsFiltered = this._serverVersions;
            this._refreshFilterValues();
            this.isLoading = false;
        });
    }

    public setRow(row: number) {
        this.selectedRow = row;
    }

    public getHeaderClass() {
        if (!this.expanded) {
            return "fa fa-caret-down fa-vc";
        } else {
            return "fa fa-caret-up fa-vc";
        }
    }
    public setSort(col: number) {
        TableHelper.setSort(this._tableConfig, col);
    }

    public getSortClass(colIndex: number): string {
        return TableColHepler.getSortClass(this.tableHeader, colIndex);
    }

    public isComboFilter(col: TableColumnConfig): boolean {
        if (col.filterType === FilterType.Combo)
            return true;
        else
            return false;
    }
    public setFilter() {
        this._applyFilter();
    }
    public trackByFnc(index, item) {
        if (!item) return null;
        return item.serverId;
    }
    private _applyFilter() {
        this.tableHeader.forEach(header => {
            this._serverFilter[header.tableColumns.colName] = header.tableColumns.filterValue;
        });
        this._serverFilter['serverId'] = this._serverFilterId;
        //console.log(this._serverFilterId);
        this._serverVersionsFiltered = this.filterSrv.filterByObject(this._serverVersions, this._serverFilter);
        this._refreshFilterValues();
    }
    private _refreshFilterValues() {
        this.tableHeader.forEach(header => {
            let groups = this.jsFunc.groupBy(this._serverVersionsFiltered, header.tableColumns.colName);
            let values = Object.keys(groups);
            header.tableColumns.filterValues = values.sort();
            
        });
    }
 }

export const serverVCols: ITableColConfigState[] = [
    {
        sortDir: SortDirection.ASC, visible: true, sorted: true, orderBy: 0, tableColumns:
            new TableColumnConfig({ colName: "serverId", caption: 'ServerId', Sortable: true })
    },
    {
        sortDir: SortDirection.ASC, visible: true, sorted: false, orderBy: 1, tableColumns:
            new TableColumnConfig({ colName: "eisv", caption: 'EISV', Sortable: true, filterType: FilterType.Combo })
    },
    {
        sortDir: SortDirection.ASC, visible: true, sorted: false, orderBy: 2, tableColumns:
            new TableColumnConfig({ colName: "eisLocalV", caption: 'EISLocalV', Sortable: true, filterType: FilterType.Combo })
    },
    {
        sortDir: SortDirection.ASC, visible: true, sorted: false, orderBy: 3, tableColumns:
            new TableColumnConfig({ colName: "getDataV", caption: 'GetDataV', Sortable: true, filterType: FilterType.Combo })
    },
    {
        sortDir: SortDirection.ASC, visible: true, sorted: false, orderBy: 4, tableColumns:
            new TableColumnConfig({ colName: "advantageServerV", caption: 'AdvantageServerV', Sortable: true, filterType: FilterType.Combo })
    },
    {
        sortDir: SortDirection.ASC, visible: true, sorted: false, orderBy: 5, tableColumns:
            new TableColumnConfig({ colName: "cprv", caption: 'CPRV', Sortable: true, filterType: FilterType.Combo })
    },
    {
        sortDir: SortDirection.ASC, visible: true, sorted: false, orderBy: 6, tableColumns:
            new TableColumnConfig({ colName: "paServV", caption: 'PaServV', Sortable: true, filterType: FilterType.Combo })
    },
    {
        sortDir: SortDirection.ASC, visible: true, sorted: false, orderBy: 7, tableColumns:
            new TableColumnConfig({ colName: "advOEV", caption: 'AdvOEV', Sortable: true, filterType: FilterType.Combo })
    },
    {
        sortDir: SortDirection.ASC, visible: true, sorted: false, orderBy: 8, tableColumns:
            new TableColumnConfig({ colName: "orderApprovalV", caption: 'OrderApprovalV', Sortable: true, filterType: FilterType.Combo })
    },
    {
        sortDir: SortDirection.ASC, visible: true, sorted: false, orderBy: 9, tableColumns:
            new TableColumnConfig({ colName: "pauSetupV", caption: 'PAUSetupV', Sortable: true, filterType: FilterType.Combo })
    },
    {
        sortDir: SortDirection.ASC, visible: true, sorted: false, orderBy: 10, tableColumns:
            new TableColumnConfig({ colName: "securityAdminV", caption: 'SecurityAdminV', Sortable: true, filterType: FilterType.Combo })
    },
    {
        sortDir: SortDirection.ASC, visible: true, sorted: false, orderBy: 11, tableColumns:
            new TableColumnConfig({ colName: "pockAdvV", caption: 'PockAdvV', Sortable: true, filterType: FilterType.Combo })
    },
    {
        sortDir: SortDirection.ASC, visible: true, sorted: false, orderBy: 12, tableColumns:
            new TableColumnConfig({ colName: "advServV", caption: 'AdvServV', Sortable: true, filterType: FilterType.Combo })
    },
    {
        sortDir: SortDirection.ASC, visible: true, sorted: false, orderBy: 13, tableColumns:
            new TableColumnConfig({ colName: "invMonitorServV", caption: 'InvMonitorServV', Sortable: true, filterType: FilterType.Combo })
    },
    {
        sortDir: SortDirection.ASC, visible: true, sorted: false, orderBy: 14, tableColumns:
            new TableColumnConfig({ colName: "awsServV", caption: 'AWSServV', Sortable: true, filterType: FilterType.Combo })
    },
    {
        sortDir: SortDirection.ASC, visible: true, sorted: false, orderBy: 15, tableColumns:
            new TableColumnConfig({ colName: "lastUpdated", caption: 'Updated', Sortable: true, dataType: DataType.DATE_TIME })
    }
];
