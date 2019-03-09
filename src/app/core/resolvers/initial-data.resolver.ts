import { Injectable } from '@angular/core';
import { CategoryStore } from '../stores/category.store';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from '@angular/router';
import { Observable, forkJoin } from 'rxjs';
import { ProductStore } from '../stores/product.store';

@Injectable({
    providedIn: 'root'
})
export class InitialDataResolver implements Resolve<any> {
    constructor(
        private categoryStore: CategoryStore,
        private productStore: ProductStore
        ) { }

    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<any> | Promise<any> | any {
        return forkJoin(
            this.categoryStore.init(),
            this.productStore.init()
            )
    }
}
