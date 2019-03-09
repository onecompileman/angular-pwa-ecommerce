import { Injectable } from '@angular/core';

import { Restangular } from 'ngx-restangular';
import { Observable } from 'rxjs';
import { Product } from '../../../shared/models/product/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
    
  constructor(private restangular: Restangular) {}
  
  getById(id: number): Observable<Product> {
    return this.restangular.one('products', id).get();
  }

  update(id: number,  product: Product): Observable<Product> {
    return this.restangular.one('products', id).customPUT(product );
  }

  destroy(id: number): Observable<void> {
    return this.restangular.one('products', id).remove();
  }

  getAll(): Observable<Product[]> {
    return this.restangular.all('products').getList();
  }

  store( product: Product): Observable<Product> {
    return this.restangular.all('products').post(product );
  }


}
