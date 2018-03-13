import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExampleComponent } from './components/example/example.component';
import { TestListComponent } from './components/test-list/test-list.component';
import { HomeComponent } from './components/home/home.component';
import { AxStickyTableHeaderComponent } from './components/ax-sticky-table-header/ax-sticky-table-header.component';
import { AxMultipleColumnSortComponent } from './components/ax-multiple-column-sort/ax-multiple-column-sort.component';
import { AxStickyMultipleTableRowOnLeftComponent } from './components/ax-sticky-multiple-table-row-on-left/ax-sticky-multiple-table-row-on-left.component';
import { AxRemoteDataBindComponent } from './components/ax-remote-data-bind/ax-remote-data-bind.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'list', component: TestListComponent },
  { path: 'example', component: ExampleComponent },
  { path: 'sticky-table-header', component: AxStickyTableHeaderComponent },
  { path: 'multiple-column-sort', component: AxMultipleColumnSortComponent },
  { path: 'sticky-multiple-table-row-on-left', component: AxStickyMultipleTableRowOnLeftComponent },
  { path: 'remote-data-bind', component: AxRemoteDataBindComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
