import { Injectable } from "@angular/core";
import { CategoryService } from '../services';
import { BehaviorSubject, Observable } from 'rxjs';
import { Category } from 'src/app/shared/models/category/category.model';
import { findIndex, find } from 'lodash';

@Injectable({
    providedIn: 'root'
}) 
export class CategoryStore {

    private categories$: BehaviorSubject<Category[]>;

    constructor(
        private categoryService: CategoryService
    ) {
        this.categories$ = new BehaviorSubject([]);
    }

    init() {
        return Observable.create(observer => {
            this.categoryService.getAll().subscribe(categories => {
                this.categories$.next(categories);
                observer.next(null);
                observer.complete();
            });
        })
    }

    store(category: Category) {
        return Observable.create( observer => {
            console.log(this.categoryService, this.categories$);
            const categories = this.categories$.getValue();
            this.categoryService.store(category).subscribe(createdCategory => {
                categories.push(createdCategory);
                this.categories$.next(categories);
                observer.next(null);
                observer.complete();
            })
         }
        )
    }

    update(category: Category) {
        return Observable.create(observer => {
            const categories = this.categories$.getValue();
            this.categoryService.update(category.id, category).subscribe(updatedCategory => {
                const index = findIndex(categories, { id: category.id });
                categories[index] = category;
                this.categories$.next(categories);
                observer.next(null);
                observer.complete();
            });
        })
    } 

    delete(categoryId) {
        return Observable.create(observer => {
            const categories = this.categories$.getValue();
            this.categoryService.destroy(categoryId).subscribe(res => {
                const index = findIndex(categories, { id: categoryId });
                categories.splice(index, 1);
                this.categories$.next(categories);
                observer.next(null);
                observer.complete();
            })
        })
    }

    getCategories$(): Observable<Category[]> {
        return this.categories$.asObservable();
    }

    getCategoryById(categoryId): Category {
        const categories = this.categories$.getValue();
        return <Category>find(categories, { id: categoryId });
    }

}