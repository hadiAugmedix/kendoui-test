import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ax-month-picker',
  templateUrl: './ax-month-picker.component.html',
  styleUrls: ['./ax-month-picker.component.scss']
})
export class AxMonthPickerComponent implements OnInit {
  public value: Date;

  constructor() { }

  ngOnInit() {
  }

  change(e) {
    console.log(e);
  }

}
