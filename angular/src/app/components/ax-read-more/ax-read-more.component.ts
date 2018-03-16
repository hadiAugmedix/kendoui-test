import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ax-read-more',
  templateUrl: './ax-read-more.component.html',
  styleUrls: ['./ax-read-more.component.scss']
})
export class AxReadMoreComponent implements OnInit {

  public show: Boolean = false;
  public showMoreLessText: String = 'Show more';

  constructor() { }

  ngOnInit() {
  }

  toggle() {
    this.show = !this.show;

    if (this.show) {
      this.showMoreLessText = 'Show less';
    } else {
      this.showMoreLessText = 'Show more';
    }
  }

}
