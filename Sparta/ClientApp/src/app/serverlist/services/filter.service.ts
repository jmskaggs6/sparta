import { Injectable } from '@angular/core';

Injectable({
    providedIn: 'root'
})
export class FilterService {

    private notFilter: boolean = false;

    public filterByObject(inputArr: any[], filterBy: any[], notFilter: boolean = false): any[] {
        if (!inputArr || !filterBy) return inputArr;

        this.notFilter = notFilter;
        return inputArr.filter(this.objectFilter(filterBy));
        
    }

    private objectFilter(filterBy) {
        return value => {
            for (const key in filterBy) {
                if (!this.isMatching(filterBy[key], value[key])) {
                    return false;
                }
            }

            return true;
        };
    }

    private isMatching(filter, val) {
        switch (typeof filter) {
            case 'boolean':
                return this.filterByBoolean(filter)(val);
            case 'string':
                return this.filterByString(filter)(val);
            case 'object':
                return this.objectFilter(filter)(val);
        }
        return this.filterDefault(filter)(val);
    }

    private filterDefault(filter: any): (value: any) => boolean {
        if (!this.notFilter)
            return (value: any) => filter === undefined || filter == value;
        else
            return (value: any) => filter !== undefined || filter != value;
    }

    private filterByString(filter) {
        if (filter) {
            filter = filter.toLowerCase();
        }
        if (!this.notFilter) {
            return value => !filter || (value ? (value).toLowerCase().indexOf(filter) !== -1 : false);
        }
        else {
            return value => !filter || (value ? (value).toLowerCase().indexOf(filter) === -1 : false);
        }
    }

    private filterByBoolean(filter): (value: any) => boolean {
        if (!this.notFilter)
            return value => value === filter;
        else
            return value => value !== filter;
    }
}
