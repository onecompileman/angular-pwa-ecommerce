import { Component, OnInit } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { SaveProductComponent } from './save-product/save-product.component';

@Component({
  selector: 'fmyp-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(
    private modalService: BsModalService
  ) { }

  ngOnInit() {
  }

  addProduct() {
    this.modalService.show(SaveProductComponent, {class: 'modal-lg'});
  }

}
