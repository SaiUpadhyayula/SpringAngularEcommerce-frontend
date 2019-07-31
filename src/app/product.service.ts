import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductInformation } from './product-page/ProductInformation';
import { ProductSearchResponseDto } from './product-page/ProductSearchResponseDto';
import { SearchQueryDto } from './product-page/SearchQueryDto';
import { map } from 'rxjs/operators';

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

  getFeaturedProducts(): any {
    return this.http.get<ProductInformation>('http://localhost:8080/api/store/catalog/products/featured');
  }

  getSku(productName: string) {
    return this.http.get<ProductInformation>('http://localhost:8080/api/store/catalog/products/' + productName);
  }

  getFacets(categoryName:String, searchQueryDto: SearchQueryDto) {

    return this.http.post<ProductSearchResponseDto>('http://localhost:8080/api/store/catalog/'+categoryName + "/facets/filter", searchQueryDto).pipe(map(data => {
      return data;
    }));    
  }

  search(searchQueryDto: SearchQueryDto){
    return this.http.post<ProductSearchResponseDto>('http://localhost:8080/api/store/catalog/search', searchQueryDto).pipe(map(data => {
      return data;
    }));
  }
}
