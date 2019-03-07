import { Injectable } from '@angular/core';

import { Restangular } from 'ngx-restangular';
import { Observable } from 'rxjs';


@Injectable()
export class ProductService {
    
  constructor(private restangular: Restangular) {}
  

}
