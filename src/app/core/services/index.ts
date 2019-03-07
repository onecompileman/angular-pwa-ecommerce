import { ProductService } from './product/product.service';
import { CategoryService } from './category/category.service';
import { OrderService } from './order/order.service';
import { OrderProductService } from './order/order-product.service';


export const services: any[] = [
ProductService ,
CategoryService ,
OrderService ,
OrderProductService ]; 

export * from './product/product.service';
export * from './category/category.service';
export * from './order/order.service';
export * from './order/order-product.service';