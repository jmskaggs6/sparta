import { Component, OnInit, OnDestroy,
     ViewChild, ChangeDetectorRef,
      ChangeDetectionStrategy 
    } from '@angular/core';
import { ServerModel } from '../models/servers.model';
import { ServersRepository } from '../respository/servers.repository';

import { Observable, pipe, combineLatest, from } from 'rxjs';
import { filter, map, startWith, mergeMap, groupBy, toArray } from 'rxjs/operators';
import { FormControl } from '@angular/forms';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTable } from '@angular/material';

import { SortService } from '../services/sort.service';


@Component({
    selector: 'app-dashboard',
    templateUrl: 'dashboard.component.html',
    styleUrls: ['dashboard.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent implements OnInit, OnDestroy {

    serverList$: Observable<ServerModel[]>;
    serverListFiltered$: Observable<ServerModel[]>;
    filterServer: FormControl;
    filterServer$: Observable<string>;
    @ViewChild(MatTable, { static: true }) table: MatTable<any>;
    @ViewChild(MatSort, {static: true}) sort: MatSort;
    serverCols = [ 'serverName', 'version', 'refresh' ];

    constructor(private repo: ServersRepository,
         public sortSrv: SortService,
         private cd: ChangeDetectorRef) {

    } 
    ngOnInit() {
        this.serverList$ = this.repo.getServers();
        this.filterServer = new FormControl('');
        this.filterServer$ = this.filterServer.valueChanges.pipe(startWith(''));
        this.serverListFiltered$ = combineLatest(this.serverList$, this.filterServer$).pipe(
            map(([servers, filterString]) => servers.filter(server => server.serverName.toLowerCase().indexOf(filterString) !== -1))
        );
  
    }

    clearFilter() {
        this.filterServer.setValue('');
    }
    sortData(sort: Sort) {
        this.table.renderRows();
    }
    ngOnDestroy() {

    }
}
