import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../service/products.service';
import { RestService } from '../../service/rest.service';

import { GridDataResult, DataStateChangeEvent } from '@progress/kendo-angular-grid';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators/map';
import { State, process } from '@progress/kendo-data-query';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-ax-add-row-in-fly',
  templateUrl: './ax-add-row-in-fly.component.html',
  styleUrls: ['./ax-add-row-in-fly.component.scss']
})
export class AxAddRowInFlyComponent implements OnInit {

  public gridData: any[];
  public gridViewData: Observable<GridDataResult>;
  public gridViewState: State = {
    sort: [],
    skip: 0,
    take: 5
  };
  public formGroup: FormGroup;
  private editedRowIndex: number;

  constructor(private _productService: ProductsService, private _restService: RestService) { }

  ngOnInit() {
    this.gridData = this._productService.getProducts();

    this.gridViewData = this._restService;
    this._restService.read(this.gridViewState);
  }

  onButtonClick() {
    this.gridData.unshift({
        'ProductID': 0,
        'ProductName': 'New item :D',
        'SupplierID': 1,
        'CategoryID': 1,
        'QuantityPerUnit': '10 boxes x 20 bags',
        'UnitPrice': 18,
        'UnitsInStock': 39,
        'UnitsOnOrder': 0,
        'ReorderLevel': 10,
        'Discontinued': false,
        'Category': {
            'CategoryID': 1,
            'CategoryName': 'Beverages',
            'Description': 'Soft drinks, coffees, teas, beers, and ales'
        },
        'FirstOrderedOn': new Date(1996, 8, 20)
    });
  }

  public dataStateChange(state: DataStateChangeEvent): void {
    this.gridViewState = state;
    this._restService.read(state);
  }

  public editHandler({ sender, rowIndex, dataItem }) {
    const group = new FormGroup({
      'name': new FormControl(dataItem.name),
      'website': new FormControl(dataItem.website, Validators.required)
    });

    this.editedRowIndex = rowIndex;

    sender.editRow(rowIndex, group);
  }

  // no idea why it's not working!
  public addHandler({ sender }) {
    this.closeEditor(sender);

    this.formGroup = new FormGroup({
        'name': new FormControl(),
        'website': new FormControl('', Validators.required)
    });

    sender.addRow(this.formGroup);
  }

  public cancelHandler({ sender, rowIndex }) {
    this.closeEditor(sender, rowIndex);
  }

  public saveHandler({ sender, rowIndex, formGroup, isNew, dataItem }) {

    this._restService.save(formGroup.value, dataItem.id);

    sender.closeRow(rowIndex);
  }

  public removeHandler({ dataItem }) {
    this._restService.remove(dataItem);
  }

  private closeEditor(grid, rowIndex = this.editedRowIndex) {
    grid.closeRow(rowIndex);

    this.editedRowIndex = undefined;
    this.formGroup = undefined;
  }


}
