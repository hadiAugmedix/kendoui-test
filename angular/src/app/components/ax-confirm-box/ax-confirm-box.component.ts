import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ax-confirm-box',
  templateUrl: './ax-confirm-box.component.html',
  styleUrls: ['./ax-confirm-box.component.scss']
})
export class AxConfirmBoxComponent implements OnInit {

  public dialogOpened: Boolean = false;
  public windowOpened: Boolean = false;

  public selectedValue: String = '';

  constructor() { }

  ngOnInit() {
  }

  public openDialog() {
    this.dialogOpened = true;
  }

  public closeDialog() {
    this.dialogOpened = false;
  }

  public dialogAction(value) {
    console.log(value);

    this.selectedValue = value;
    this.closeDialog();
  }

}
