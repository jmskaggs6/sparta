import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class JsFuncService {
    public groupBy(objectArray, property) {
        return objectArray.reduce((acc, obj) => {
            const key = obj[property];
            if (!acc[key]) {
                acc[key] = [];
            }
            acc[key] = acc[key] || [];
            acc[key].push(obj);
            return acc;
        }, {});
    }

    public groupByKeys(objectArray, property) {
        return objectArray.map(item => item[property])
            .filter((value, index, self) => self.indexOf(value) === index)
    }
}
