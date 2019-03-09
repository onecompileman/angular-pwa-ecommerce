import { Component, OnInit } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Product } from 'src/app/shared/models/product/product.model';
import { CategoryStore } from 'src/app/core/stores/category.store';
import { Category } from 'src/app/shared/models/category/category.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'fmyp-save-product',
  templateUrl: './save-product.component.html',
  styleUrls: ['./save-product.component.css']
})
export class SaveProductComponent implements OnInit {

  product: Product = new Product();

  event: any;
  title: string;

  categories: Category[] = [];

  constructor(
    public bsModalRef: BsModalRef,
    private categoryStore: CategoryStore,
    private toastrService: ToastrService
    ) { }

  ngOnInit() {
    this.categoryStore.getCategories$().subscribe(categories => {
      this.categories = categories;
    });
  }

  saveProduct() {
    this.event(this.product).subscribe(res => {
      this.toastrService.success(`Product ${this.product.name} saved sucessfully!`);
      this.bsModalRef.hide();
    })
  }

}
