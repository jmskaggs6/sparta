import { Component, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ITableColConfigState } from '../../table/table-column-config';

@Component({
    selector: 'slconfigdialog',
    templateUrl: 'slconfigdialog.component.html'
})
export class ServerListConfigDialog {
    constructor(public dialogRef: MatDialogRef<ServerListConfigDialog>, @Inject(MAT_DIALOG_DATA) public columns: ITableColConfigState[]) { }
    
    get colToConfig(): ITableColConfigState[] {
        return this.columns.filter(x => x.tableColumns.nonConfigurable == false);
    }

    onClick() {
        this.dialogRef.close();
    }

    setAll(set: boolean) {
        this.colToConfig.forEach(col => {
            col.visible = set;
        });
    }

    clearAll() {
        this.setAll(false);
    }
    selectAll() {
        this.setAll(true);
    }
}
