import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductStore } from 'src/app/core/stores/product.store';
import { Product } from 'src/app/shared/models/product/product.model';
import { CategoryStore } from 'src/app/core/stores/category.store';

@Component({
  selector: 'fmyp-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  product: Product = new Product();

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private productStore: ProductStore,
    private categoryStore: CategoryStore
  ) { }

  ngOnInit() {
    const productId = +this.activatedRoute.snapshot.params.id;
    this.product = this.productStore.getProductById(productId);
  }

  getCategoryName(productId) {
    return this.categoryStore.getCategoryById(productId).name;
  }

}
