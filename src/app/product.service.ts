import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductInformation } from './product-page/ProductInformation';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getProductsByCategory(categoryName: string) {
    return this.http.get<ProductInformation>('http://localhost:8080/api/store/catalog/products/category/'+categoryName);
  }

  getProducts() {
    return this.http.get<ProductInformation>('http://localhost:8080/api/store/catalog/products/');
  }

  getSku(productName: string) {
    return this.http.get<ProductInformation>('http://localhost:8080/api/store/catalog/products/' + productName);
  }
}
