import { Injectable } from '@angular/core';
//import { Http, RequestMethod, Request, Response } from '@angular/http';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { Observable, throwError, of} from 'rxjs';

import { AdvServer } from './models/AdvServer.model';
import { ServerCategory } from './models/ServerCategory.model';
import { DetailTypeCodes } from './models/DetailTypeCodes.model';
import { StatsDetailType } from './models/StatsDetailType.model';
import { AdvFileLinks } from './models/AdvFileLinks.model';
import { AdvEvents } from './models/AdvEvents.model';
import { AdvSubEvents } from './models/AdvSubEvents.model';
import { AdvCrossFoot } from './models/AdvCrossFoot.model';
import { CPRIssue, CPRIssueYellowBox } from './models/CPRIssue.model';
import { ServerListStartUp, serverCommand, ServerListUpdate } from './models/serverlist.model';
import { ServerConnect } from './models/serverconnect.model';
import { ServerListVersion } from './models/serverlistversion.model';

import { catchError } from 'rxjs/operators';

const serversUrl = '/api/servers';
const serverListUrl = '/api/serverListStartup';
const serverListConnect = '/api/cpr/connect';
const serverListUpdate = '/api/serverListStartup/update';
//const serverListStateUrl = '/api/serverListState';

const serverCategoryUrl = '/api/category';
const serverNameUrl = '/api/servers/name';

const detailTypeCodesUrl = '/api/statsDetail/getCodes';
const detailStatsUrl = '/api/statsDetail/getStats';

const eventsUrl = '/api/advEvents';
const eventsLatestUrl = '/api/advEvents/Latest';
const eventTypesUrl = '/api/advEvents/eventTypes';

const crossFootUrl = '/api/advCrossfoot';
const subEventsUrl = '/api/advSubEvents';
const fileLinkUrl = '/api/fileLink';

const cprIssuesUrl = '/api/cpr/issues';
const cprIssuesCountUrl = '/api/cpr/issues/count';
const cprIssuesYBUrl = '/api/cpr/issues/yellowBox';

const cprServerCmd = '/api/serverCmd';

const cprServerLstVersion = '/api/serverListVersion';

@Injectable({
    providedIn: 'root'
})
export class Repository {
    
    constructor(private http: HttpClient) {}
    
    getFileLinkPromise(): Observable<AdvFileLinks[]> {
        const url = fileLinkUrl;
        return this.http.get<AdvFileLinks[]>(url)
            .pipe(
            catchError(this.handleError('getFileLinkPromise', []))
            );
    }

    getServerList(): Observable<ServerListStartUp[]> {
        const url = serverListUrl;
        return this.http.get<ServerListStartUp[]>(url)
            .pipe(
            catchError(this.handleError('getServerList', []))
            );
    }

    getServerListVersion(): Observable<ServerListVersion[]> {
        const url = cprServerLstVersion;
        return this.http.get<ServerListVersion[]>(url)
            .pipe(
                catchError(this.handleError('getServerListVersion', []))
            );
    }

    getServerListUpdate(): Observable<ServerListUpdate[]> {
        const url = serverListUrl;
        return this.http.get<ServerListUpdate[]>(url)
            .pipe(
                catchError(this.handleError('getServerListUpdate', []))
            );
    }

    getServerListConn(serverId: string): Observable<ServerConnect[]> {
        const url = serverListConnect + '/' + serverId;
        return this.http.get<ServerConnect[]>(url)
            .pipe(
                catchError(this.handleError('getServerListConn', []))
            );
    }

    getServersPromise() : Observable<any> {
        const url = serversUrl;
        return this.http.get<AdvServer[]>(url)
            .pipe(
            catchError(this.handleError('getServersPromise', []))
            );
    }
    getServerName(serverId: number): Observable<any> {
        const url = serverNameUrl + '/' + serverId;
        return this.http.get<string>(url)
            .pipe(
            catchError(this.handleError('getServerName', []))
            );
    }

    postServerCmd(serverName: string, command: string): Observable<any> {
        const url = cprServerCmd;
        
        return this.http.post<serverCommand>(url, { serverId: serverName, command: command })
            .pipe(
            catchError(this.handleError('postServerCmd', []))
            );
    }

    getIssues(): Observable<any> {
        const url = cprIssuesUrl;
        return this.http.get<CPRIssue>(url)
            .pipe(
            catchError(this.handleError('getIssues', []))
            );
    }

    getIssueYB(serverId: string, filePath: string): Observable<CPRIssueYellowBox> {
        const url = `${cprIssuesYBUrl}/${serverId}/${filePath}`;
        return this.http.get<CPRIssueYellowBox>(url)
            .pipe(
                catchError(this.handleError('getIssueYB'))
            );
    }

    deleteIssue(id: number) {
        const url = `${cprIssuesUrl}/${id}`;
        return this.http.delete(url)
            .pipe(
            catchError(this.handleError('deleteIssue', []))
            );
    }

    getIssueCount(): Observable<any> {
       const url = cprIssuesCountUrl;
        return this.http.get<any>(url)
            .pipe(
            catchError(this.handleError('getIssueCount', []))
            );
    }

    getEventsPromise(serverId: number, latest: boolean): Observable<any> {

        if (latest) {
            var url = eventsLatestUrl + '/' + serverId;
        }
        else {
            var url = eventsUrl + '/' + serverId;
        }
        return this.http.get<AdvEvents[]>(url)
            .pipe(
            catchError(this.handleError('getEventsPromise', []))
            );
    }

    getSubEventsPromise(eventId: string): Observable<any> {
        const url = subEventsUrl + '/' + eventId;
        return this.http.get<AdvSubEvents[]>(url)
            .pipe(
            catchError(this.handleError('getSubEventsPromise', []))
            );
    }

    getCrossFootPromise(eventId: string): Observable<any> {
        const url = crossFootUrl + '/' + eventId;
        return this.http.get<AdvCrossFoot>(url)
            .pipe(
            catchError(this.handleError('getCrossFootPromise', []))
            );
    }

    getStatCodesPromise(): Observable<any> {
        const url = detailTypeCodesUrl;
        return this.http.get<DetailTypeCodes[]>(url)
            .pipe(
            catchError(this.handleError('getStatCodesPromise', []))
            );
    }

    getStatDetailsPromise(detailType: string): Observable<any> {
        const url = detailStatsUrl + '/' + detailType;
        return this.http.get<StatsDetailType[]>(url)
            .pipe(
            catchError(this.handleError('getStatDetailsPromise', []))
            );
    }

    getCategoriesPromise(): Observable<any> {
        const url = serverCategoryUrl;
        return this.http.get<ServerCategory[]>(url)
            .pipe(
            catchError(this.handleError('getCategoriesPromise', []))
            );
    }

    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {

            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead

            // TODO: better job of transforming error for user consumption
            //this.log(`${operation} failed: ${error.message}`);

            // Let the app keep running by returning an empty result.
            return of(result as T);
        };
    }
}

