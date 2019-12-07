import { Component, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ServerConnect } from '../models/serverconnect.model';

@Component({
    selector: 'server-connect-dialog',
    templateUrl: 'server-connect.dialog.component.html'
})
export class ServerConnectDialog {
    serverId: string;

    constructor(public dialogRef: MatDialogRef<ServerConnectDialog>, @Inject(MAT_DIALOG_DATA) data) {
        this.serverId = data.serverId;
    }

    onClick() {
        this.dialogRef.close();
    }
}
