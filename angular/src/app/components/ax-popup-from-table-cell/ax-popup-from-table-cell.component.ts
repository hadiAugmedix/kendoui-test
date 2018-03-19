import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../service/products.service';
import {
  WindowService,
  WindowRef,
  WindowCloseResult
} from '@progress/kendo-angular-dialog';

@Component({
  selector: 'app-ax-popup-from-table-cell',
  templateUrl: './ax-popup-from-table-cell.component.html',
  styleUrls: ['./ax-popup-from-table-cell.component.scss']
})
export class AxPopupFromTableCellComponent implements OnInit {

  public gridData: any[];

  constructor(private service: ProductsService, private windowService: WindowService) { }

  ngOnInit() {
    this.gridData = this.service.getProducts();
  }

  openPopup(data) {
    const window: WindowRef = this.windowService.open({
      title: 'My Window',
      content: JSON.stringify(data),
      width: 450,
      height: 200
    });

    window.result.subscribe((result) => {
      if (result instanceof WindowCloseResult) {
        console.log('Window was closed!');
      }
    });
  }

}
