import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  categoryName: string;
  products$;

  constructor(private route: ActivatedRoute, private productService: ProductService) {
    this.categoryName = route.snapshot.params.categoryName;
    productService.getProductsByCategory(this.categoryName).subscribe((res) => {    
      console.log(res);
      this.products$ = res;
    });
  }

  ngOnInit() {
  }
}
