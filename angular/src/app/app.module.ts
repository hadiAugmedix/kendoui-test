import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { GridModule } from '@progress/kendo-angular-grid';
import { IntlModule } from '@progress/kendo-angular-intl';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { DropDownsModule, ComboBoxModule } from '@progress/kendo-angular-dropdowns';
import { DialogsModule } from '@progress/kendo-angular-dialog';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { SortableModule } from '@progress/kendo-angular-sortable';

import { ProductsService } from './service/products.service';
import { UsersService } from './service/users.service';
import { KendoService } from './service/kendo.service';
import { RestService } from './service/rest.service';

import { AppComponent } from './app.component';
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
import { AxReadMoreComponent } from './components/ax-read-more/ax-read-more.component';
import { AxAddRowInFlyComponent } from './components/ax-add-row-in-fly/ax-add-row-in-fly.component';
import { AxVerticalProgressSliderComponent } from './components/ax-vertical-progress-slider/ax-vertical-progress-slider.component';
import { AxActionsWithPopupComponent } from './components/ax-actions-with-popup/ax-actions-with-popup.component';
import { AxMultiplePopupInstanceComponent } from './components/ax-multiple-popup-instance/ax-multiple-popup-instance.component';
import { AxPopupFromTableCellComponent } from './components/ax-popup-from-table-cell/ax-popup-from-table-cell.component';
import { AxTimePickerComponent } from './components/ax-time-picker/ax-time-picker.component';
import { AxListDragSortComponent } from './components/ax-list-drag-sort/ax-list-drag-sort.component';
import { AxSchedulerModalComponent } from './components/ax-scheduler-modal/ax-scheduler-modal.component';
import { AxDropupComponent } from './components/ax-dropup/ax-dropup.component';
import { AxModalComponent } from './components/ax-modal/ax-modal.component';
import { AxDropdownModalComponent } from './components/ax-dropdown-modal/ax-dropdown-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    ExampleComponent,
    TestListComponent,
    HomeComponent,
    AxStickyTableHeaderComponent,
    AxMultipleColumnSortComponent,
    AxStickyMultipleTableRowOnLeftComponent,
    AxRemoteDataBindComponent,
    AxMonthPickerComponent,
    AxCheckUncheckSelectBoxComponent,
    AxDateRangeComponent,
    AxConfirmBoxComponent,
    AxNestedTableComponent,
    AxReadLessInTableCellComponent,
    AxReadMoreComponent,
    AxAddRowInFlyComponent,
    AxVerticalProgressSliderComponent,
    AxActionsWithPopupComponent,
    AxMultiplePopupInstanceComponent,
    AxPopupFromTableCellComponent,
    AxTimePickerComponent,
    AxListDragSortComponent,
    AxSchedulerModalComponent,
    AxDropupComponent,
    AxModalComponent,
    AxDropdownModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    HttpClientModule,

    BrowserAnimationsModule,
    ButtonsModule,
    GridModule,
    IntlModule,
    DateInputsModule,
    DropDownsModule,
    ComboBoxModule,
    DialogsModule,
    InputsModule,
    SortableModule
  ],
  providers: [ProductsService, UsersService, KendoService, RestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
