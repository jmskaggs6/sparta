import { Component, Output, EventEmitter, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, debounce } from 'rxjs/operators';
import { ServerListSrv } from '../services/serverlist.service';

@Component({
    selector: 'server-navigator',
    templateUrl: 'server-navigator.component.html',
    styleUrls: ['server-navigator.component.css']
})
export class ServerNavigatorComponent {
    @Output()
    searchString: EventEmitter<any> = new EventEmitter();

    @Input()
    notIn: boolean = false;

    private searchChanged = new Subject();

    constructor(private serverLstSrv: ServerListSrv) {
        this.searchChanged.pipe(
            debounceTime(200),
            distinctUntilChanged()
        ).subscribe(e => this.searchString.emit(e));
    }

    //changeSearchString(search: string) {
    //    this.searchString.pipe(debouceTime(200)).emit(search);
    //}

    onSearchType(value: string) {
        this.searchChanged.next(value);
        if (this.notIn) {
            this.serverLstSrv.filterNotByString(value);
        } else {
            this.serverLstSrv.filterByString(value);
        }
    }
}
