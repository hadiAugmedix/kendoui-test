import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ax-check-uncheck-select-box',
  templateUrl: './ax-check-uncheck-select-box.component.html',
  styleUrls: ['./ax-check-uncheck-select-box.component.scss']
})
export class AxCheckUncheckSelectBoxComponent implements OnInit {

  public listItems: Array<string> = ["Baseball", "Basketball", "Cricket", "Field Hockey", "Football", "Table Tennis", "Tennis", "Volleyball"];
  public value: any = ['Baseball'];

  constructor() { }

  ngOnInit() {
  }

}
