import { Injectable } from '@angular/core';

import { Restangular } from 'ngx-restangular';
import { Observable } from 'rxjs/Observable';
import { Order } from '../../../shared/models/order/order.model';


@Injectable()
export class OrderService {
    
  constructor(private restangular: Restangular) {}
  
  getById(id: number): Observable<Order> {
    return this.restangular.one('orders', id).get();
  }

  update(id: number,  order: Order): Observable<Order> {
    return this.restangular.one('orders', id).customPUT(order );
  }

  destroy(id: number): Observable<void> {
    return this.restangular.one('orders', id).remove();
  }

  getAll(): Observable<Order[]> {
    return this.restangular.all('orders').getList();
  }

  store( order: Order): Observable<Order> {
    return this.restangular.all('orders').post(order );
  }


}
