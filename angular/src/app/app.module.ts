import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ExampleComponent } from './components/example/example.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { GridModule } from '@progress/kendo-angular-grid';

import { TestListComponent } from './components/test-list/test-list.component';
import { HomeComponent } from './components/home/home.component';
import { AxStickyTableHeaderComponent } from './components/ax-sticky-table-header/ax-sticky-table-header.component';

@NgModule({
  declarations: [
    AppComponent,
    ExampleComponent,
    TestListComponent,
    HomeComponent,
    AxStickyTableHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,

    BrowserAnimationsModule,
    ButtonsModule,
    GridModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
