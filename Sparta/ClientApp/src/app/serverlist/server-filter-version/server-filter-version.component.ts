import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { versionInfo } from '../helper/versioninfo';
import { SortService } from '../../services/sort.service';
import { MatSelect } from '@angular/material/select';

@Component({
    selector: 'server-filter-version',
    templateUrl: 'server-filter-version.component.html',
    styleUrls: ['server-filter-version.component.css']
})
export class ServerFilterVersion implements OnInit {

    @Input()
    versionInfo: versionInfo[] = [];

    @Input()
    labelInfo: string;

    @Output()
    versionSel: EventEmitter<string> = new EventEmitter<string>();

    selected: string = '';

    constructor(public sortSrv: SortService) { }
    ngOnInit() {
        
    }

    onChangeVersion() {
        this.versionSel.emit(this.selected);
    }

    resetFilter() {
        this.selected = '';
        this.onChangeVersion();
    }
}
