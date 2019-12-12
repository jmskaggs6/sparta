import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ServersModule } from '../servers.module';

import { Observable, throwError, of } from 'rxjs';

import { ServerModel } from '../models/servers.model';
import { environment } from '../../../environments/environment';
import { catchError, map } from 'rxjs/operators';

const serverUrl = environment.baseUrl;
const serversUrl = serverUrl + '/api/servers';

@Injectable({
    providedIn: 'root'
})
export class ServersRepository{

    constructor(private http: HttpClient) {}

    getServers() : Observable<ServerModel[]> {
        const url = serversUrl;
        return this.http.get<ServerModel[]>(url)
            .pipe(
            catchError(this.handleError('getServersPromise', []))
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