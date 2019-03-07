import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin.component';
import { ProductsComponent } from './products/products.component';
import { SaveProductComponent } from './products/save-product/save-product.component';
import { SharedModule } from '../shared/shared.module';
import { CategoriesComponent } from './categories/categories.component';
import { SaveCategoryComponent } from './categories/save-category/save-category.component';

@NgModule({
  declarations: [LoginComponent, AdminComponent, ProductsComponent, SaveProductComponent, CategoriesComponent, SaveCategoryComponent],
  entryComponents: [SaveProductComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule
  ]
})
export class AdminModule { }
