import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  $products;

  constructor(productService: ProductService) { 
    this.$products = productService.getFeaturedProducts();
  }

  ngOnInit() {
  }

}
