import { Injectable, OnInit } from '@angular/core';
import { SortDirection, ITableColConfigState, TableColumnConfig } from './table/table-column-config';

@Injectable({
    providedIn: 'root'
})
export class ServerListState implements OnInit {
    currState: IServerListState = INITIAL_STATE;

    ngOnInit() {
    }

    get currentSortColName() {
        return this.currState.currentSortColName;
    }

    set currentSortColName(name: string) {
        this.currState.currentSortColName = name;
    }

    get serverNotFilter() {
        return this.currState.serverNotFilter;
    }

    set serverNotFilter(filterNot) {
        this.currState.serverNotFilter = filterNot;
    }

    get serverFilter() {
        return this.currState.serverFilter;
    }

    set serverFilter(filterSrv) {
        this.currState.serverFilter = filterSrv;
    }
}

export interface IServerListState {
    currentSortColName: string;
    serverFilter: any;
    serverNotFilter: any;
}

export const INITIAL_STATE: IServerListState = {
    currentSortColName: "serverID",
    serverFilter: { serverID: '', catID: '', cprV: '', advantageServerV: '', paServV: '', yellowBox: '' },
    serverNotFilter: { serverID: '' }, 
}

export class ServerListPersist {
    constructor(
        public serverId: string,
        public expanded: boolean
    ) {  }
}

export const ServerListColsDefault: ITableColConfigState[] = [
    {
        sortDir: SortDirection.ASC, visible: true, sorted: true, orderBy: 0, tableColumns:
            new TableColumnConfig({ colName: "serverID", caption: 'ServerID', Sortable: true, nonConfigurable: true })
    },
    {
        sortDir: SortDirection.NONE, visible: true, sorted: false, orderBy: 1, tableColumns:
            new TableColumnConfig({ colName: "cpr", caption: 'cpr', Sortable: true, nonConfigurable: true })
    },
    {
        sortDir: SortDirection.NONE, visible: true, sorted: false, orderBy: 2, tableColumns:
            new TableColumnConfig({ colName: "srv", caption: 'srv', Sortable: true, nonConfigurable: true })
    },
    {
        sortDir: SortDirection.NONE, visible: true, sorted: false, orderBy: 3, tableColumns:
            new TableColumnConfig({ colName: "png", caption: 'png', Sortable: true, nonConfigurable: true })
    },
    {
        sortDir: SortDirection.NONE, visible: false, sorted: false, orderBy: 4, tableColumns:
            new TableColumnConfig({ colName: "serverIP", caption: 'ServerIP', Sortable: true })
    },
    {
        sortDir: SortDirection.NONE, visible: false, sorted: false, orderBy: 5, tableColumns:
            new TableColumnConfig({ colName: "cprV", caption: 'CprV', Sortable: true, sortCol: 'ncprV' })
    },
    {
        sortDir: SortDirection.NONE, visible: false, sorted: false, orderBy: 6, tableColumns:
            new TableColumnConfig({ colName: "advantageServerV", caption: 'AdvServerV', Sortable: true, sortCol: 'nAdvServerV' })
    },
    {
        sortDir: SortDirection.NONE, visible: false, sorted: false, orderBy: 7, tableColumns:
            new TableColumnConfig({ colName: "paServV", caption: 'PaServV', Sortable: true, sortCol: 'nPaServV' })
    },
    {
        sortDir: SortDirection.NONE, visible: false, sorted: false, orderBy: 8, tableColumns:
            new TableColumnConfig({ colName: "vAdvEIS", caption: 'AdvEISv', Sortable: true, sortCol: 'nvAdvEIS' })
    },
    {
        sortDir: SortDirection.NONE, visible: false, sorted: false, orderBy: 9, tableColumns:
            new TableColumnConfig({ colName: "vAWSServ", caption: 'AWSServV', Sortable: true, sortCol: 'nvAWSServ' })
    },
    {
        sortDir: SortDirection.NONE, visible: false, sorted: false, orderBy: 10, tableColumns:
            new TableColumnConfig({ colName: "vAdvOE", caption: 'AdvOEv', Sortable: true, sortCol: 'nvAdvOE' })
    },
    {
        sortDir: SortDirection.NONE, visible: false, sorted: false, orderBy: 11, tableColumns:
            new TableColumnConfig({ colName: "vAdvEIS_l", caption: 'AdvEIS_lv', Sortable: true, sortCol: 'nvAdvEIS_l' })
    },
    {
        sortDir: SortDirection.NONE, visible: false, sorted: false, orderBy: 12, tableColumns:
            new TableColumnConfig({ colName: "vGetData", caption: 'GetDataV', Sortable: true, sortCol: 'nvGetData' })
    },
    {
        sortDir: SortDirection.NONE, visible: false, sorted: false, orderBy: 13, tableColumns:
            new TableColumnConfig({ colName: "vPockAdv", caption: 'PockAdvV', Sortable: true, sortCol: 'nvPockAdv' })
    },
    {
        sortDir: SortDirection.NONE, visible: false, sorted: false, orderBy: 14, tableColumns:
            new TableColumnConfig({ colName: "vOrdApprov", caption: 'OrdApprovV', Sortable: true, sortCol: 'nvOrdApprov' })
    },
    {
        sortDir: SortDirection.NONE, visible: false, sorted: false, orderBy: 15, tableColumns:
            new TableColumnConfig({ colName: "vPauSetup", caption: 'PauSetupV', Sortable: true, sortCol: 'nvPauSetup' })
    },
    {
        sortDir: SortDirection.NONE, visible: false, sorted: false, orderBy: 16, tableColumns:
            new TableColumnConfig({ colName: "vSecAdmin", caption: 'SecAdminV', Sortable: true, sortCol: 'nvSecAdmin' })
    },
    {
        sortDir: SortDirection.NONE, visible: false, sorted: false, orderBy: 17, tableColumns:
            new TableColumnConfig({ colName: "advServV", caption: 'AdvServV', Sortable: true, sortCol: 'nadvServV' })
    },
    {
        sortDir: SortDirection.NONE, visible: false, sorted: false, orderBy: 18, tableColumns:
            new TableColumnConfig({ colName: "daysReboot", caption: 'Rebooted', Sortable: true }),
    }
];

export class ServerColumnState {
    public static saveColumns(cols: ITableColConfigState[]) {
        localStorage.setItem("ServerListColState", JSON.stringify(cols));
    }

    public static getColumns(): ITableColConfigState[] {
        return ServerListColsDefault;
        //localStorage.setItem("ServerListColState", "");
        //let cols = localStorage.getItem("ServerListColState");

        //if (cols) {
        //    if (cols.length == ServerListColsDefault.length) {
        //        return JSON.parse(cols);
        //    } else {
        //        return ServerListColsDefault;
        //    }
            
        //} else {
        //    return ServerListColsDefault;
        //}
    }
}
