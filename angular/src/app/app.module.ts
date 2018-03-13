import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { GridModule } from '@progress/kendo-angular-grid';

import { ProductsService } from './service/products.service';
import { UsersService } from './service/users.service';
import { KendoService } from './service/kendo.service';

import { AppComponent } from './app.component';
import { ExampleComponent } from './components/example/example.component';
import { TestListComponent } from './components/test-list/test-list.component';
import { HomeComponent } from './components/home/home.component';
import { AxStickyTableHeaderComponent } from './components/ax-sticky-table-header/ax-sticky-table-header.component';
import { AxMultipleColumnSortComponent } from './components/ax-multiple-column-sort/ax-multiple-column-sort.component';
import { AxStickyMultipleTableRowOnLeftComponent } from './components/ax-sticky-multiple-table-row-on-left/ax-sticky-multiple-table-row-on-left.component';
import { AxRemoteDataBindComponent } from './components/ax-remote-data-bind/ax-remote-data-bind.component';

@NgModule({
  declarations: [
    AppComponent,
    ExampleComponent,
    TestListComponent,
    HomeComponent,
    AxStickyTableHeaderComponent,
    AxMultipleColumnSortComponent,
    AxStickyMultipleTableRowOnLeftComponent,
    AxRemoteDataBindComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    HttpClientModule,

    BrowserAnimationsModule,
    ButtonsModule,
    GridModule
  ],
  providers: [ProductsService, UsersService, KendoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
