import { Component, OnInit, Output, EventEmitter, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Repository } from '../repository';
import { ServerCategory } from '../models/ServerCategory.model';
import { ServerListSrv } from '../services/serverlist.service';

@Component({
    selector: 'server-filter',
    templateUrl: './server-filter.component.html',
    styleUrls: ['./server-filter.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ServerFilterComponent implements OnInit {
    @Output()
    catChange: EventEmitter<number> = new EventEmitter<number>();
  
    currentCategory = 0;
    serverCats: ServerCategory[] = [];

    constructor(private repo: Repository, private cd: ChangeDetectorRef, public serverLstSrv: ServerListSrv) {}

    ngOnInit(): void {
        this.refreshData();
    }

    refreshData() {
        this.repo.getCategoriesPromise().subscribe(res => {
            this.serverCats = res;
            this.cd.markForCheck();
        });
    }

    get categories(): ServerCategory[] {
        return this.serverCats;
    }

    changeCategory(categoryId: number)
    {
        this.currentCategory = categoryId;
        this.catChange.emit(this.currentCategory);
    }
}
