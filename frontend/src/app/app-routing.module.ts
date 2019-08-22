import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TableComponent } from './table/table.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/main',
    pathMatch: 'full'
  },
  {
    path: 'main',
    component: MainComponent
  },
  {
    path: 'products',
    component: TableComponent
  },
  {
    path: 'product/add',
    component: ProductFormComponent
  },
  {
    path: 'product/edit/:id',
    component: ProductFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
