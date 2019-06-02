import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CategoryService {

  constructor(private http: HttpClient) {}

  getCategories(){
    return this.http.get('http://localhost:8080/api/store/catalog/categories/');
  }
}
