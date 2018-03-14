import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ax-date-range',
  templateUrl: './ax-date-range.component.html',
  styleUrls: ['./ax-date-range.component.scss']
})
export class AxDateRangeComponent implements OnInit {

  public min: Date = new Date(2017, 1, 1);
  public max: Date = new Date(2018, 12, 31);
  public value: Date = new Date(2018, 1, 1);

  constructor() { }

  ngOnInit() {
  }

}
