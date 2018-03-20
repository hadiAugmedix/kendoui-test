import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ax-time-picker',
  templateUrl: './ax-time-picker.component.html',
  styleUrls: ['./ax-time-picker.component.scss']
})
export class AxTimePickerComponent implements OnInit {

  public value: Date = new Date(2018, 2, 10, 10, 30, 0);

  constructor() { }

  ngOnInit() {
  }

  onChange($event) {
    console.log($event);
  }

}
