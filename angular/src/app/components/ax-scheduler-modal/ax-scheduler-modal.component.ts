import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ax-scheduler-modal',
  templateUrl: './ax-scheduler-modal.component.html',
  styleUrls: ['./ax-scheduler-modal.component.scss']
})
export class AxSchedulerModalComponent implements OnInit {

  public windowOpened: Boolean = false;
  public patients: Array<{ text: string, value: number }> = [
    { text: 'Sample patient list 1', value: 1 },
    { text: 'Sample patient list 2', value: 2 },
    { text: 'Sample patient list 3', value: 3 }
  ];
  public patient: { text: string, value: number } = this.patients[1];
  public windowPositionLeft: Number = 100;
  public windowPositionTop: Number = 100;

  constructor() { }

  ngOnInit() {
  }

  openWindow() {
    this.windowOpened = true;
  }

  closeWindow() {
    alert('close event');

    this.windowOpened = false;
  }

  addPatientList() {
    alert(`${this.patient.text} added! See console.`);

    this.windowOpened = false;
  }

}
