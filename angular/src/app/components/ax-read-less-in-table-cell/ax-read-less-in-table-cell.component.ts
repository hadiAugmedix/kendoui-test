import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../service/products.service';
import { AxReadMoreComponent } from '../ax-read-more/ax-read-more.component';

@Component({
  selector: 'app-ax-read-less-in-table-cell',
  templateUrl: './ax-read-less-in-table-cell.component.html',
  styleUrls: ['./ax-read-less-in-table-cell.component.scss']
})
export class AxReadLessInTableCellComponent implements OnInit {

  public gridData: any[];

  constructor(private _productService: ProductsService) { }

  ngOnInit() {
    this.gridData = this._productService.getProducts();
  }

}
