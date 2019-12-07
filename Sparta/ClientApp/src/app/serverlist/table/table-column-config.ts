
export interface ITableConfigState {
    tableColConfig: ITableColConfigState[];
    currentSortCol: number;
    currentSortColName: string;
}

export interface ITableColConfigState {
    tableColumns: TableColumnConfig; //Column meta data
    sorted: boolean; //Is this column currently sorted?
    sortDir: SortDirection; //What direction is it sorted?
    visible: boolean; //Is it visible on the screen?
    orderBy: number; //Order of column on screen
};

export class TableColumnConfig {
    colName: string; //Unique name of column
    sortCol: string; //name of column, some columns use a different column to sort, eg vCPR might use nvCPR
    toolTip: string; //tooltip shown on col header
    Sortable: boolean; //Is this column sortable
    nonConfigurable: boolean; //Can this column be turned visible or not?  some have to stay visible, like ServerID
    caption: string; //Display column header
    dataType: DataType;
    systemCol: boolean;
    orderBy: number;
    filterType: FilterType;
    filterValues: string[];
    filterValue: string;
    filterCount: any;

    constructor({ colName, sortCol = '', toolTip = '',
        Sortable = true, nonConfigurable = false,
        caption = '', dataType = DataType.DEFAULT, systemCol = false, filterType = FilterType.TextBox }: {
            colName: string;
            toolTip?: string;
            Sortable?: boolean;
            nonConfigurable?: boolean;
            sortCol?: string;
            caption?: string;
            dataType?: DataType;
            systemCol?: boolean;
            filterType?: FilterType;
        }
        ) {
        this.filterValues = [];
        this.colName = colName;
        this.toolTip = toolTip;
        this.Sortable = Sortable;
        this.nonConfigurable = nonConfigurable;
        this.sortCol = sortCol;
        this.caption = caption;
        this.dataType = dataType;
        this.systemCol = systemCol;
        this.filterType = filterType;
        this.filterValue = '';
        this.filterCount = {};
        if (sortCol.length == 0) {
            this.sortCol = this.colName;
        }
        
    }
    
}

export class TableHelper {

    public static setSort(tableHeader: ITableConfigState, col: number) {
        if (tableHeader.tableColConfig[col].tableColumns.Sortable) {
            tableHeader.tableColConfig.forEach(c => {
                c.sorted = false;
            });
            tableHeader.currentSortCol = col;
            tableHeader.currentSortColName = tableHeader.tableColConfig[col].tableColumns.colName;
            tableHeader.tableColConfig[col].sorted = true;
            tableHeader.tableColConfig[col].sortDir = TableColHepler.switchNextSort(tableHeader.tableColConfig[col].sortDir);
        }

    }
}

export class TableColHepler {
    public static getSortIconClass(sortDir: SortDirection): string {
        switch (sortDir) {
            case SortDirection.ASC:
                return 'fa fa-sort-asc';
            case SortDirection.DESC:
                return 'fa fa-sort-desc';
            default:
                return '';
        }
    }

    public static getSortClass(tableHeader: ITableColConfigState[], colIndex: number): string {
        if (tableHeader[colIndex].sorted == true) {
            return TableColHepler.getSortIconClass(tableHeader[colIndex].sortDir);
        }
        else {
            return '';
        }
    }
    public static isDropDownCombo(filterType: FilterType): boolean {
        if (filterType == FilterType.Combo)
            return true;
        else
            return false;
    }
    public static isAsc(sortDir: SortDirection): boolean {
        switch (sortDir) {
            case SortDirection.ASC:
                return true;
            default:
                return false;
        }
    }

    public static switchNextSort(sortDir: SortDirection): SortDirection {
        switch (sortDir) {
            case SortDirection.ASC:
                return SortDirection.DESC;
            case SortDirection.DESC:
                return SortDirection.ASC;
            default:
                return SortDirection.ASC;
        }
    }
}

export enum DataType {
    DEFAULT,
    DATE_TIME
}

export enum SortDirection {
    NONE,
    ASC,
    DESC
}

export enum FilterType {
    TextBox,
    Combo
}
