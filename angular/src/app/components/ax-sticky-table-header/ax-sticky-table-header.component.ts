import { Component, OnInit } from '@angular/core';
import { products } from '../../data/products';

@Component({
  selector: 'app-ax-sticky-table-header',
  templateUrl: './ax-sticky-table-header.component.html',
  styleUrls: ['./ax-sticky-table-header.component.scss']
})
export class AxStickyTableHeaderComponent implements OnInit {
  public gridData: any[] = products;

  constructor() { }

  ngOnInit() {
  }

}
