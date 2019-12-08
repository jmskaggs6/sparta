import { SortDirection, ITableColConfigState, TableColumnConfig } from '../table/table-column-config';

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

