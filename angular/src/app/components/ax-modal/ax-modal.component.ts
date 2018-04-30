import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ax-modal',
  templateUrl: './ax-modal.component.html',
  styleUrls: ['./ax-modal.component.scss']
})
export class AxModalComponent implements OnInit {

  public dialogOpened: Boolean = true;
  public templates: Array<Object> = [
    { name: 'Sample template', data: 'Sample data' },
    { name: 'Another template', data: 'Another data' }
  ];
  public activeIndex: Number = 0;

  constructor() { }

  ngOnInit() {
  }

  openDialog() {
    this.dialogOpened = true;
  }

  closeDialog() {
    this.dialogOpened = false;
  }

  setActiveIndex(e, i) {
    this.activeIndex = i;
  }

  addNewTemplate() {
    this.templates.push({
      name: 'New template', data: `Content generated at ${Date.now()}`
    });

    this.activeIndex = this.templates.length - 1;
  }

  alertService(text) {
    alert(`Button clicked - ${text}`);
  }

}
