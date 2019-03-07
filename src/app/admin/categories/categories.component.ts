import { Component, OnInit } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { SaveCategoryComponent } from './save-category/save-category.component';

@Component({
  selector: 'fmyp-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  constructor(
    private modalService: BsModalService
  ) { }

  ngOnInit() {

  }

  addCategory() {
    this.modalService.show(SaveCategoryComponent);
  }

}
