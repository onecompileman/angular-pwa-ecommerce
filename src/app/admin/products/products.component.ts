import { Component, OnInit } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { SaveProductComponent } from './save-product/save-product.component';
import { ProductStore } from 'src/app/core/stores/product.store';

import { cloneDeep } from 'lodash';
import { Product } from 'src/app/shared/models/product/product.model';
import { CategoryStore } from 'src/app/core/stores/category.store';
import { ConfirmationComponent } from 'src/app/shared/components/modals/confirmation/confirmation.component';

@Component({
  selector: 'fmyp-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: Product[] = [];

  constructor(
    private modalService: BsModalService,
    private productStore: ProductStore,
    private categoryStore: CategoryStore
  ) { }

  ngOnInit() {
    this.productStore.getProducts$().subscribe(products => {
      this.products = products;
    });
  }

  addProduct() {
    const self = this;
    const initialState = {
      event: function (product) {
        return self.productStore.store(product)
      },
      title: 'Add Product'
    }
    this.modalService.show(SaveProductComponent, {class: 'modal-lg', initialState});
  }

  updateProduct(product) {
    const self = this;
    const productToUpdate = cloneDeep(product)
    const initialState = {
      product: productToUpdate,
      event: function (product) {
        return self.productStore.update(product)
      },
      title: 'Add Product'
    }
    this.modalService.show(SaveProductComponent, { class: 'modal-lg', initialState });
  }

  deleteProduct(product) {
    const self = this;
    const initialState = {
      message: `Are you sure to delete ${product.name} from categories?`,
      action: function (productId) {
        return self.productStore.delete(productId);
      },
      actionParam: product.id
    }
    this.modalService.show(ConfirmationComponent, { initialState });
  }

  getCategoryName(categoryId) {
    return this.categoryStore.getCategoryById(categoryId).name;
  }

}
