import { Injectable } from '@angular/core';

import { Restangular } from 'ngx-restangular';
import { Observable } from 'rxjs';
import { Category } from '../../../shared/models/category/category.model';


@Injectable({
  providedIn: 'root'
})
export class CategoryService {
    
  constructor(private restangular: Restangular) {}
  
  getById(id: number): Observable<Category> {
    return this.restangular.one('categories', id).get();
  }

  update(id: number,  category: Category): Observable<Category> {
    return this.restangular.one('categories', id).customPUT(category );
  }

  destroy(id: number): Observable<void> {
    return this.restangular.one('categories', id).remove();
  }

  getAll(): Observable<Category[]> {
    return this.restangular.all('categories').getList();
  }

  store( category: Category): Observable<Category> {
    return this.restangular.all('categories').post(category );
  }


}
