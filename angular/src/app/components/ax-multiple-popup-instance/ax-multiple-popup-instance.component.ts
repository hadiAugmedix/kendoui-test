import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ax-multiple-popup-instance',
  templateUrl: './ax-multiple-popup-instance.component.html',
  styleUrls: ['./ax-multiple-popup-instance.component.scss']
})
export class AxMultiplePopupInstanceComponent implements OnInit {

  public windowOpened: Boolean = false;
  public subWindowOpened: Boolean = false;
  public subWindowLeft: Number = 100;
  public subWindowTop: Number = 100;

  constructor() { }

  ngOnInit() {
  }

  openWindow() {
    this.windowOpened = true;
  }

  closeWindow() {
    this.windowOpened = false;
  }

  openSubWindow() {
    this.subWindowOpened = true;
  }

  closeSubWindow() {
    this.subWindowOpened = false;
  }

}
