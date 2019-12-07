import { Component, Input, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ITableColConfigState, TableColumnConfig, TableColHepler } from './table-column-config';
import { SortService } from '../services/sort.service';

@Component({
    selector: 'webTable',
    templateUrl: 'table.component.html',
    styleUrls: ['table.component.css']
})
export class WebTableComponent {
    @Input()
    columnsConfig: ITableColConfigState[];

    @Input()
    tableData: any[];

    @Input()
    multiRowSelect: boolean = false;

    currentSortCol: number = 0;

    constructor(public sortSrv: SortService) { }

    get configurableCols(): TableColumnConfig[] {
        return this.columnsConfig.filter(cols => cols.visible == true).map(colObj => colObj.tableColumns);
    }

    get currentSortColName(): string {
        return this.columnsConfig[this.currentSortCol].tableColumns.colName;
    }
    
    getSortClass(colIndex: number): string {
        if (this.columnsConfig[colIndex].sorted == true) {
            return TableColHepler.getSortIconClass(this.columnsConfig[colIndex].sortDir);
        }
        else {
            return '';
        }
    }

    setSort(col: number) {
        if (this.columnsConfig[col].tableColumns.Sortable) {
            for (var i = 0, len = this.columnsConfig.length; i < len; i++) {
                this.columnsConfig[i].sorted = false;
            }
            this.currentSortCol = col;
            this.columnsConfig[col].sorted = true;
            this.columnsConfig[col].sortDir = TableColHepler.switchNextSort(this.columnsConfig[col].sortDir);
        }

    }

    get isAsc(): boolean {
        return TableColHepler.isAsc(this.columnsConfig[this.currentSortCol].sortDir);
    }
}
