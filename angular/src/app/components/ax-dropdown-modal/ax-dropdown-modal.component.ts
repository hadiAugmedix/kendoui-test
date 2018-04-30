import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ax-dropdown-modal',
  templateUrl: './ax-dropdown-modal.component.html',
  styleUrls: ['./ax-dropdown-modal.component.scss']
})
export class AxDropdownModalComponent implements OnInit {

  public dropDownButtonItems: Array<Object> = [
    { text: 'Copy entire note'},
    { text: 'Push current note to active trainees'},
    { text: 'Open peer grader' },
    { text: 'Delete patient' },
    { text: 'Delete all patients'}
  ];
  public currentItem: Object = { text: 'Default title' };

  public windowOpened: Boolean = false;
  public windowPositionLeft: Number = 100;
  public windowPositionTop: Number = 100;

  public agreeMark: Boolean = true;

  constructor() { }

  ngOnInit() {
  }

  onItemClick(item) {
    this.currentItem = item;

    this.openWindow();
  }

  dropdownClickHandler(e) {
    this.windowPositionLeft = e.pageX + 70;
    this.windowPositionTop = e.pageY - 20;
  }

  openWindow() {
    this.windowOpened = true;
  }

  closeWindow() {
    alert('close event');

    this.windowOpened = false;
  }

  alertService(text) {
    alert(text);
  }

}
