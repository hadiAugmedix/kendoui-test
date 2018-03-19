import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ax-vertical-progress-slider',
  templateUrl: './ax-vertical-progress-slider.component.html',
  styleUrls: ['./ax-vertical-progress-slider.component.scss']
})
export class AxVerticalProgressSliderComponent implements OnInit {

  public valueHorizontal: Number = 5;
  public valueVertical: Number = 5;
  public min: Number = 0;
  public max: Number = 15;
  public smallStep: Number = 1;

  public currentValue: Number = 5;

  constructor() { }

  ngOnInit() {
  }

  valueHandler(value) {
    this.currentValue = value;
  }

}
