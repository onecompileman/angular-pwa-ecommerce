import { Injectable } from '@angular/core';

import { Restangular } from 'ngx-restangular';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class OrderProductService {
    
  constructor(private restangular: Restangular) {}
  

}
