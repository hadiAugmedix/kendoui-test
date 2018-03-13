import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { map } from 'rxjs/operators/map';
import { GridDataResult } from '@progress/kendo-angular-grid';

@Injectable()
export class KendoService extends BehaviorSubject<GridDataResult> {
    private BASE_URL = 'https://jsonplaceholder.typicode.com/users';

    constructor(private http: HttpClient) {
        super(null);
    }

    public query(state: any): void {
        this.fetch(state)
            .subscribe(x => super.next(x));
    }

    protected fetch(state: any): Observable<GridDataResult> {
      console.log(state);
        const queryStr = `${this.serializeModels(state)}&count=true`;

        return this.http
            .get(`${this.BASE_URL}?${queryStr}`)
            .pipe(map(res => <GridDataResult>res));
    }

    private serializeModels(data?: any): string {
      return data ? `&models=${JSON.stringify([data])}` : '';
    }
}
