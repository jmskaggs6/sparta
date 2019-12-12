import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class SortService {

    private _objArrayCheck(array: any[]): boolean {
        const item0 = array[0];
        const check = !!(array.length && item0 !== null && Object.prototype.toString.call(item0) === '[object Object]');

        return check;
    }

    private stringSort(input: any[], field: string, asc: boolean) {
        const sorted = input.sort((a, b) => {
            var returnVal = 0;
            if (a[field] < b[field])
                returnVal = -1;
            if (a[field] > b[field])
                returnVal = 1;

            return asc ? returnVal : returnVal * -1;
        });

        return sorted;
    }

    private numericSort(arrayInput: any[], field: string, asc: boolean) {
        const sorted = arrayInput.sort((a, b) => {
            if (a[field] === b[field]) {
                return 0;
            } else if (a[field] === null) {
                return asc ? 1 : -1;
            } else if (b[field] === null) {
                return asc ? -1 : 1;
            } else {
                return asc ? a[field] - b[field] : b[field] - a[field];
            }
        });

        return sorted;
    }
    public sortObject(arrayInput: any[], field: string, asc: boolean = true) {

        if (!arrayInput)
            return;

        if (!field || !this._objArrayCheck(arrayInput)) {
            return;
        }

        if (typeof arrayInput[0][field] === 'string' || arrayInput[field] instanceof String) {
            return this.stringSort(arrayInput, field, asc);
        }
        else if (typeof arrayInput[0][field] === 'number') {
            return this.numericSort(arrayInput, field, asc);
        }
        else {
            return this.stringSort(arrayInput, field, asc);
        }
        
    }
}
