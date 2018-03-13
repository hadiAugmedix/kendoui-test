import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../service/products.service';

@Component({
  selector: 'app-ax-sticky-table-header',
  templateUrl: './ax-sticky-table-header.component.html',
  styleUrls: ['./ax-sticky-table-header.component.scss']
})
export class AxStickyTableHeaderComponent implements OnInit {
  public gridData: any[];

  constructor(private _productService: ProductsService) { }

  ngOnInit() {
    this.gridData = this._productService.getProducts();
  }

}
