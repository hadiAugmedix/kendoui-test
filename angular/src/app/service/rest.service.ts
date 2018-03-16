import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { tap } from 'rxjs/operators/tap';
import { map } from 'rxjs/operators/map';
import { GridDataResult } from '@progress/kendo-angular-grid';

@Injectable()
export class RestService extends BehaviorSubject<GridDataResult> {

  private BASE_URL = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) {
      super(null);
  }

  public read(state: any): void {
      this.fetch(state)
          .subscribe(x => super.next(x));
  }

  protected fetch(state: any): Observable<GridDataResult> {
    console.log(state);
    const stateQueryString: String = JSON.stringify(state);

      return this.http
          .get(`${this.BASE_URL}?query=${stateQueryString}`)
          .pipe(map(res => <GridDataResult>res));
  }

  public save(data, isNew) {
    console.log(data, isNew);
  }

  public remove(dataItem) {
    console.log(dataItem);
  }

}
