import { Component, OnInit } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { SaveCategoryComponent } from './save-category/save-category.component';
import { CategoryStore } from 'src/app/core/stores/category.store';
import { Category } from 'src/app/shared/models/category/category.model';

import { cloneDeep } from 'lodash';
import { ConfirmationComponent } from 'src/app/shared/components/modals/confirmation/confirmation.component';

@Component({
  selector: 'fmyp-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  categories: Category[] = [];

  constructor(
    private modalService: BsModalService,
    private categoryStore: CategoryStore
  ) { }

  ngOnInit() {
    this.categoryStore.getCategories$().subscribe(categories => this.categories = categories);
  }

  addCategory() {
    const self = this;
    const initialState = {
      event: function(category) { 
        return self.categoryStore.store(category)
      },
      title: 'Add Category'
    };
    this.modalService.show(SaveCategoryComponent, {initialState});
  }

  updateCategory(category) {
    const self = this;
    const categoryToUpdate = cloneDeep(category);
    const initialState = {
      category: categoryToUpdate,
      event: function (categoryUpdate) {
        return self.categoryStore.update(categoryUpdate)
      },
      title: 'Update Category'
    };
    this.modalService.show(SaveCategoryComponent, { initialState });
  }

  deleteCategory(category) {
    const self = this;
    const initialState = {
      message: `Are you sure to delete ${category.name} from categories?`,
      action: function(categoryId) {
        return self.categoryStore.delete(categoryId);
      },
      actionParam: category.id
    }
    this.modalService.show(ConfirmationComponent, { initialState });
  }

}
