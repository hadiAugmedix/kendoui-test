import { Injectable } from '@angular/core';
import { products } from '../data/products';

@Injectable()
export class ProductsService {

  constructor() { }

  getProducts() {
    return products;
  }
}
