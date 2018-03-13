import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../service/products.service';

import { GridDataResult } from '@progress/kendo-angular-grid';
import { SortDescriptor, orderBy } from '@progress/kendo-data-query';

@Component({
  selector: 'app-ax-multiple-column-sort',
  templateUrl: './ax-multiple-column-sort.component.html',
  styleUrls: ['./ax-multiple-column-sort.component.scss']
})
export class AxMultipleColumnSortComponent implements OnInit {

  public products: any[]; // dont pass products to template, pass gridData
  public gridData: GridDataResult;
  public sort: SortDescriptor[] = [{
    field: 'ProductID',
    dir: 'desc'
  }];

  constructor(private _productService: ProductsService) {}

  ngOnInit() {
    this.products = this._productService.getProducts();
    this.loadProducts();
  }

  public sortChange(sort: SortDescriptor[]): void {
    this.sort = sort;
    this.loadProducts();
  }

  private loadProducts(): void {
    this.gridData = {
        data: orderBy(this.products, this.sort),
        total: this.products.length
    };
  }

}
