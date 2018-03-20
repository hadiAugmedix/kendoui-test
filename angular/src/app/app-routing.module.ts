import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExampleComponent } from './components/example/example.component';
import { TestListComponent } from './components/test-list/test-list.component';
import { HomeComponent } from './components/home/home.component';
import { AxStickyTableHeaderComponent } from './components/ax-sticky-table-header/ax-sticky-table-header.component';
import { AxMultipleColumnSortComponent } from './components/ax-multiple-column-sort/ax-multiple-column-sort.component';
// tslint:disable-next-line:max-line-length
import { AxStickyMultipleTableRowOnLeftComponent } from './components/ax-sticky-multiple-table-row-on-left/ax-sticky-multiple-table-row-on-left.component';
import { AxRemoteDataBindComponent } from './components/ax-remote-data-bind/ax-remote-data-bind.component';
import { AxMonthPickerComponent } from './components/ax-month-picker/ax-month-picker.component';
import { AxCheckUncheckSelectBoxComponent } from './components/ax-check-uncheck-select-box/ax-check-uncheck-select-box.component';
import { AxDateRangeComponent } from './components/ax-date-range/ax-date-range.component';
import { AxConfirmBoxComponent } from './components/ax-confirm-box/ax-confirm-box.component';
import { AxNestedTableComponent } from './components/ax-nested-table/ax-nested-table.component';
import { AxReadLessInTableCellComponent } from './components/ax-read-less-in-table-cell/ax-read-less-in-table-cell.component';
import { AxAddRowInFlyComponent } from './components/ax-add-row-in-fly/ax-add-row-in-fly.component';
import { AxVerticalProgressSliderComponent } from './components/ax-vertical-progress-slider/ax-vertical-progress-slider.component';
import { AxActionsWithPopupComponent } from './components/ax-actions-with-popup/ax-actions-with-popup.component';
import { AxMultiplePopupInstanceComponent } from './components/ax-multiple-popup-instance/ax-multiple-popup-instance.component';
import { AxPopupFromTableCellComponent } from './components/ax-popup-from-table-cell/ax-popup-from-table-cell.component';
import { AxTimePickerComponent } from './components/ax-time-picker/ax-time-picker.component';
import { AxListDragSortComponent } from './components/ax-list-drag-sort/ax-list-drag-sort.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'list', component: TestListComponent },
  { path: 'example', component: ExampleComponent },
  { path: 'sticky-table-header', component: AxStickyTableHeaderComponent },
  { path: 'multiple-column-sort', component: AxMultipleColumnSortComponent },
  { path: 'sticky-multiple-table-row-on-left', component: AxStickyMultipleTableRowOnLeftComponent },
  { path: 'remote-data-bind', component: AxRemoteDataBindComponent },
  { path: 'month-picker', component: AxMonthPickerComponent },
  { path: 'check-uncheck-select-box', component: AxCheckUncheckSelectBoxComponent },
  { path: 'date-range', component: AxDateRangeComponent },
  { path: 'confirm-box', component: AxConfirmBoxComponent },
  { path: 'nested-table', component: AxNestedTableComponent },
  { path: 'read-more-less-in-table-cell', component: AxReadLessInTableCellComponent },
  { path: 'add-row-in-fly', component: AxAddRowInFlyComponent },
  { path: 'vertical-progress-slider', component: AxVerticalProgressSliderComponent },
  { path: 'actions-within-popup', component: AxActionsWithPopupComponent },
  { path: 'multiple-popup-instance', component: AxMultiplePopupInstanceComponent },
  { path: 'popup-from-table-cell', component: AxPopupFromTableCellComponent },
  { path: 'time-picker', component: AxTimePickerComponent },
  { path: 'list-drag-sort', component: AxListDragSortComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
