import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { CategoryStore } from 'src/app/core/stores/category.store';
import { Category } from 'src/app/shared/models/category/category.model';

@Component({
  selector: 'fmyp-save-category',
  templateUrl: './save-category.component.html',
  styleUrls: ['./save-category.component.css']
})
export class SaveCategoryComponent implements OnInit {

  category: Category = new Category();

  event: any;
  title: string;

  constructor(
    public bsModalRef: BsModalRef,
    private categoryStore: CategoryStore
    ) { }

  ngOnInit() {}

  saveCategory() {
    this.event(this.category).subscribe(res => {
      this.bsModalRef.hide();
    })
  }

}
