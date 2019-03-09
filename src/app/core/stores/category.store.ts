import { Injectable } from "@angular/core";
import { CategoryService } from '../services';

@Injectable({
    providedIn: 'root'
}) 
export class CategoryStore {

    constructor(
        private categoryService: CategoryService
    ) {}

    add() {
        
    }

}