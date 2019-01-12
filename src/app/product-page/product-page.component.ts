import { Component, OnInit } from '@angular/core';
import { ProductInformation } from './ProductInformation';
import { ProductService } from '../product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {

  product:ProductInformation;

  constructor(productService: ProductService, private route: ActivatedRoute) {

    let productName = route.snapshot.queryParams.productName;
    if(productName) 
      productService.getProductByName(productName).subscribe(p => this.product = p);
  }

  ngOnInit() {
  }

}
