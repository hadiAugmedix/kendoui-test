import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { KendoService } from '../../service/kendo.service';
import { State } from '@progress/kendo-data-query';

import {
    GridDataResult,
    DataStateChangeEvent
} from '@progress/kendo-angular-grid';

@Component({
  selector: 'app-ax-remote-data-bind',
  templateUrl: './ax-remote-data-bind.component.html',
  styleUrls: ['./ax-remote-data-bind.component.scss']
})
export class AxRemoteDataBindComponent implements OnInit {

  public view: Observable<GridDataResult>;
  public state: State = {
      skip: 0,
      take: 5
  };

  constructor(private service: KendoService) {
    this.view = service;
    this.service.query(this.state);
  }

  ngOnInit() {
  }

  public dataStateChange(state: DataStateChangeEvent): void {
      this.state = state;
      this.service.query(state);
  }

}
