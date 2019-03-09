import { Injectable } from "@angular/core";
import { ProductService } from '../services';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product } from 'src/app/shared/models/product/product.model';
import { findIndex, find } from 'lodash';

@Injectable({
    providedIn: 'root'
})
export class ProductStore {

    private products$: BehaviorSubject<Product[]> = new BehaviorSubject([]);

    constructor(
        private productService: ProductService
    ) { }

    init() {
        return Observable.create(observer => {
            this.productService.getAll().subscribe(products => {
                this.products$.next(products);
                observer.next(null);
                observer.complete();
            });
        })
    }

    store(product: Product) {
        return Observable.create(observer => {
            const products = this.products$.getValue();
            this.productService.store(product).subscribe(createdProduct => {
                products.push(createdProduct);
                this.products$.next(products);
                observer.next(null);
                observer.complete();
            })
        }
        )
    }

    update(product: Product) {
        return Observable.create(observer => {
            const products = this.products$.getValue();
            this.productService.update(product.id, product).subscribe(updatedProduct => {
                const index = findIndex(products, { id: product.id });
                products[index] = product;
                this.products$.next(products);
                observer.next(null);
                observer.complete();
            });
        })
    }

    delete(productId) {
        return Observable.create(observer => {
            const products = this.products$.getValue();
            this.productService.destroy(productId).subscribe(res => {
                const index = findIndex(products, { id: productId });
                products.splice(index, 1);
                this.products$.next(products);
                observer.next(null);
                observer.complete();
            })
        })
    }

    getProducts$(): Observable<Product[]> {
        return this.products$.asObservable();
    }

    getProductById(productId): Product {
        const products = this.products$.getValue();
        return <Product>find(products, { id: productId });
    }


}