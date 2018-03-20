import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-ax-list-drag-sort',
  templateUrl: './ax-list-drag-sort.component.html',
  styleUrls: ['./ax-list-drag-sort.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AxListDragSortComponent implements OnInit {

  public items: string[] = [
    'Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6', 'Item 7', 'Item 8'
  ];

  constructor() { }

  ngOnInit() {
  }

}
