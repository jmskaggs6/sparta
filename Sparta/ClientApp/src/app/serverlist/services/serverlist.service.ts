import { Injectable, OnInit, OnDestroy } from '@angular/core';
import { ServerListStartUp } from '../models/serverlist.model';
import { Observable, BehaviorSubject, Subscription, interval } from 'rxjs';
import { switchMap, startWith, tap } from 'rxjs/operators';
import { Repository } from '../repository';
import { versionInfo } from '../helper/versioninfo';
import { FilterService } from './filter.service';
import { JsFuncService } from './jsfunc.service';

@Injectable({
    providedIn: 'root'
})
export class ServerListSrv implements OnInit, OnDestroy {
    private _serverListData: ServerListStartUp[] = [];
    private _serverListFiltered: ServerListStartUp[];
    
    private _serverListSub: BehaviorSubject<ServerListStartUp[]>;
    private _serverFilterSub: BehaviorSubject<any>;
    private _lastRefreshSub: BehaviorSubject<Number>;

    public isLoading: boolean = false;
    
    //Holds filtered parameters
    _serverFilter: any = { serverID: '', catID: '', cprV: '', advantageServerV: '', paServV: '', yellowBox: '' };
    _serverNotFilter: any = { serverID: '' };
    
    //Temporary, need to hold a lot more versions
    cprVersions: versionInfo[] = [];
    advantageSrvV: versionInfo[] = [];
    paServV: versionInfo[] = [];

    constructor(private repo: Repository, private filterSrv: FilterService, private jsFunc: JsFuncService) {
        this._serverListSub = new BehaviorSubject<ServerListStartUp[]>([]);
        this._serverFilterSub = new BehaviorSubject<any>(this._serverFilter);
        this._lastRefreshSub = new BehaviorSubject<Number>(Date.now());
    }

    get serverFilter(): Observable<any> {
        return this._serverFilterSub.asObservable();
    }

    get isFiltered(): boolean {
        return this._serverFilter.serverID.length > 0 || this._serverNotFilter.serverID.length > 0;
    }

    //Outside components can subscribe the data
    get serverList(): Observable<ServerListStartUp[]> {
        return this._serverListSub.asObservable();
    }

    ngOnInit() {
        this._serverListFiltered = [];
    }

    ngOnDestroy() {
        //this._pollingTimer.unsubscribe();
    }

    public refreshData() {
        return this.repo.getServerList()
             .subscribe(result => {
                    this._serverListSub.next(result);
                    this._lastRefreshSub.next(Date.now());
                    this._filterServer();
                    });
    }

    get serversWithIssues(): Number {
        return this._serverListData.filter(x => x.yellowBox == true).length;
    }

    get lastRefresh(): Observable<Number> {
        return this._lastRefreshSub.asObservable();
    }

    public loadData() {
        this.isLoading = true;
        this.repo.getServerList().subscribe(results => {
            this.isLoading = false;
            this._serverListData = results;
            this._serverListFiltered = this._serverListData.slice();
            this._serverListSub.next(results);
            this._filterServer();
            this._lastRefreshSub.next(Date.now());
            this.isLoading = false;

        });
        //this._pollingTimer.unsubscribe();

        //this._pollingTimer = interval(this._intervalTimer)
        //    .pipe(
        //        startWith(0),
        //        switchMap(() => this.repo.getServerList())

        //    )
        //    .subscribe(results => {
        //        this.isLoading = false;
        //        this._serverListData = results;
        //        this._dataStore.serverListFiltered = this._serverListData.slice();
        //        this._serverList.next(Object.assign({}, this._dataStore).serverListFiltered);
        //        this._filterServer();
        //        this.lastRefresh = Date.now();
        //    });
    }

    public filterByString(serverId: string) {
        this._serverFilter.serverID = serverId;
        this._filterServer();
    }

    public filterNotByString(serverId: string) {
        this._serverNotFilter['serverID'] = serverId;
        this._filterServer();
    }

    public filterByYellowBox(val: boolean) {
        this._serverFilter['yellowBox'] = val;
        this._filterServer();
    }

    private _refreshVersionFilterData() {
        let cprVObject = this.jsFunc.groupBy(this._serverListFiltered, 'cprV');

        this.cprVersions = Object.keys(cprVObject).map((group) => {
            return new versionInfo(group, cprVObject[group].length, cprVObject[group][0]['ncprV']);
        })

        let advServV = this.jsFunc.groupBy(this._serverListFiltered, 'advantageServerV');
        this.advantageSrvV = Object.keys(advServV).map((group) => {
            return new versionInfo(group, advServV[group].length, advServV[group][0]['nAdvServerV']);
        })

        let paServV = this.jsFunc.groupBy(this._serverListFiltered, 'paServV');
        this.paServV = Object.keys(paServV).map((group) => {
            return new versionInfo(group, paServV[group].length, paServV[group][0]['nPaServV']);
        })
    }

    private _filterServer() {
        this._serverListFiltered = this.filterSrv.filterByObject(this._serverListData, this._serverFilter);
        if (this._serverNotFilter['serverID'].length > 0) {
            this._serverListFiltered = this.filterSrv.filterByObject(this._serverListFiltered, this._serverNotFilter, true);
        }
        this._refreshVersionFilterData();
        this._serverFilterSub.next(this._serverFilter);
        this._serverListSub.next(this._serverListFiltered);
    }

    //filterByCprV(event) {
    //    this.serverFilter.cprV = event;
    //    this._filterServer();
    //}

    //filterByAdvServV(event) {
    //    this.serverFilter.advantageServerV = event;
    //    this._filterServer();
    //}

    //filterByPaServ(event) {
    //    this.serverFilter.paServV = event;
    //    this._filterServer();
    //}

    //resetVersionFilters() {
    //    this.versionFilters.forEach(ver => {
    //        ver.resetFilter();
    //    });
    //}
}
