import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExampleComponent } from './components/example/example.component';
import { TestListComponent } from './components/test-list/test-list.component';
import { HomeComponent } from './components/home/home.component';
import { AxStickyTableHeaderComponent } from './components/ax-sticky-table-header/ax-sticky-table-header.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'list', component: TestListComponent },
  { path: 'example', component: ExampleComponent },
  { path: 'sticky-table-header', component: AxStickyTableHeaderComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
