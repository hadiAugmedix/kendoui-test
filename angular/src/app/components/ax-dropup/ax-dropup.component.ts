import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ax-dropup',
  templateUrl: './ax-dropup.component.html',
  styleUrls: ['./ax-dropup.component.scss']
})
export class AxDropupComponent implements OnInit {

  public dropdownOpened: Boolean = true;

  constructor() { }

  ngOnInit() {
  }

}
