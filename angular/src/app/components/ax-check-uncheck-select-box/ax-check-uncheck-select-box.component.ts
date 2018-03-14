import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ax-check-uncheck-select-box',
  templateUrl: './ax-check-uncheck-select-box.component.html',
  styleUrls: ['./ax-check-uncheck-select-box.component.scss']
})
export class AxCheckUncheckSelectBoxComponent implements OnInit {

  public listItems: Array<string> = ["Baseball", "Basketball", "Cricket", "Field Hockey", "Football", "Table Tennis", "Tennis", "Volleyball"];
  public value: any = ['Baseball'];

  // https://stackoverflow.com/questions/44698660/grouping-items-on-kendo-angular-dropdownlist
  public people: Array<Object> = [
    { text: "A", value: 1, groupId: 1 },
    { text: "B", value: 2, groupId: 1 },
    { text: "C", value: 3, groupId: 1 },
    { text: "D", value: 4, groupId: 2 },
    { text: "E", value: 5, groupId: 2 }
  ];

  constructor() { }

  ngOnInit() {
  }

}
