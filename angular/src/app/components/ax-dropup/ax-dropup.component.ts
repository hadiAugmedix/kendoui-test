import { Component, OnInit, AfterViewInit, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'app-ax-dropup',
  templateUrl: './ax-dropup.component.html',
  styleUrls: ['./ax-dropup.component.scss']
})
export class AxDropupComponent implements AfterViewInit {
  private parentNode: any;

  public dropdownOpened: Boolean = false;
  public optionData: Object = {
    valueOne: false,
    valueTwo: true,
    valueThree: 'option2',
    valueFour: 'option2',
  };

  private wasInside = false;
  public text = null;

  constructor(private _element: ElementRef) { }

  ngAfterViewInit() {
    this.parentNode = this._element.nativeElement.parentNode;
  }

  openDropdown() {
    this.dropdownOpened = !this.dropdownOpened;
  }

  btnClickHandler($event) {
    $event.stopPropagation();
  }

  @HostListener('document:click', ['$event'])
  onClickOutside($event) {
    this.dropdownOpened = false;
  }

}
