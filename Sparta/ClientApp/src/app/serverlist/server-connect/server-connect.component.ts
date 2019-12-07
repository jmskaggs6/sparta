import { Component, Input, OnInit, OnDestroy, OnChanges, SimpleChanges } from '@angular/core';
import { ServerConnect } from '../../models/serverlist/serverconnect.model';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { Repository } from '../../models/repository';
import { Subscriber, Subscription, pipe } from 'rxjs';

@Component({
    selector: 'server-connect',
    templateUrl: 'server-connect.component.html',
    styleUrls: ['server-connect.component.css']
})
export class ServerConnectComponent implements OnInit {
    @Input()
    serverId: string;

    serverListConn: ServerConnect[] = [];
    isLoading: boolean = false;

    sub: Subscription = new Subscription();

    constructor(public snackBar: MatSnackBar, private repo: Repository) { }

    ngOnInit() {
        this.sub = this.repo.getServerListConn(this.serverId).subscribe(conn => {
            this.serverListConn = conn;
        });
    }

    //ngOnChanges(changes: SimpleChanges) {
    //    for (let property in changes) {
    //        if (property === 'serverId') {
    //            if (changes[property].previousValue !== changes[property].currentValue) {
    //                this.refreshData();
    //            }
    //        }
    //    }
    //}

    //refreshData() {
    //    this.isLoading = true;
    //    this.sub = this.repo.getServerListConn(this.serverId).subscribe(conn => {
    //        this.serverListConn = conn;
    //        this.isLoading = false;
    //    });
    //}
    //ngOnDestroy() {
    //    this.sub.unsubscribe();
    //}
    
    copyToClipboard(item) {
        item.select();
        document.execCommand('copy');
        item.setSelectionRange(0, 0);
        this.openSnackBar('Copied');
    }

    openSnackBar(msg) {
        let config = new MatSnackBarConfig();
        config.duration = 500;
        this.snackBar.open(msg, undefined, config);
    }
}
