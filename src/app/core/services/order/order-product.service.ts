import { Injectable } from '@angular/core';

import { Restangular } from 'ngx-restangular';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class OrderProductService {
    
  constructor(private restangular: Restangular) {}
  

}
