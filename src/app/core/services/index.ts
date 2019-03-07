import { ProductService } from './/product.service';
import { CategoryService } from './/category.service';
import { OrderService } from './/order.service';
import { OrderProductService } from './/order-product.service';


export const services: any[] = [
ProductService ,
CategoryService ,
OrderService ,
OrderProductService ]; 

export * from './/product.service';
export * from './/category.service';
export * from './/order.service';
export * from './/order-product.service';