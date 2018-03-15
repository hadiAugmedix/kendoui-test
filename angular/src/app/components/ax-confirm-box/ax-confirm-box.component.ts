import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ax-confirm-box',
  templateUrl: './ax-confirm-box.component.html',
  styleUrls: ['./ax-confirm-box.component.scss']
})
export class AxConfirmBoxComponent implements OnInit {

  public dialogOpened = false;
  public windowOpened = false;

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

    this.closeDialog();
  }

}
