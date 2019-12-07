import { Component, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
    selector: 'confirmdialog',
    templateUrl: 'confirmdialog.component.html'
})
export class ConfirmedDialog {
    constructor(public dialogRef: MatDialogRef<ConfirmedDialog>,
        @Inject(MAT_DIALOG_DATA) public data: IConfirmedDialogData) { }

}

export interface IConfirmedDialogData {
    question: string;
    title: string;
    confirmed: boolean;
}
