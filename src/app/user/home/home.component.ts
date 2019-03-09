import { Component, OnInit } from '@angular/core';
import { ProductStore } from 'src/app/core/stores/product.store';
import { CategoryStore } from 'src/app/core/stores/category.store';
import { Category } from 'src/app/shared/models/category/category.model';
import { Product } from 'src/app/shared/models/product/product.model';

@Component({
  selector: 'fmyp-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  categories: Category[] = [];
  products: Product[] = [];


  constructor(
    private productStore: ProductStore,
    private categoryStore: CategoryStore
  ) { }

  ngOnInit() {
    this.categoryStore.getCategories$().subscribe(categories => this.categories = categories);
    this.productStore.getProducts$().subscribe(products => this.products = products);
  }

}
