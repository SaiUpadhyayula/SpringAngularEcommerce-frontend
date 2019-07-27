import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Router, ActivatedRoute } from '@angular/router';
import { SearchQueryDto, Filter } from '../product-page/SearchQueryDto';
import { ProductInformation } from '../product-page/ProductInformation';
import { ProductSearchResponseDto, FacetDto, FacetValueDto } from '../product-page/ProductSearchResponseDto';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  categoryName: string;
  searchQueryDto: SearchQueryDto;
  products$: ProductInformation[];
  facetDtos$: Array<FacetDto>;
  filter: Filter;
  filters: Array<Filter>;
  checkedValues: Array<String>;

  constructor(private route: ActivatedRoute, private productService: ProductService) {
    this.categoryName = route.snapshot.params.categoryName;
    this.searchQueryDto = {
      textQuery: "",
      filters: []
    };
    productService.getFacets(this.categoryName, this.searchQueryDto).subscribe((res) => {
      console.log(res);
      this.products$ = res.products;
      this.facetDtos$ = res.facetDtos;
    });
    this.filters = [];
    this.checkedValues = [];
  }

  ngOnInit() {
  }

  check(facetName: String, facetNameValue: String, event: Event) {
    this.filter = {
      "key": facetName,
      "value": facetNameValue
    };
    this.filters.push(this.filter);
    this.searchQueryDto = {
      textQuery: "",
      filters: this.filters
    };
    this.productService.getFacets(this.categoryName, this.searchQueryDto).subscribe((res) => {
      console.log(res);
      this.products$ = res.products;
      this.facetDtos$ = res.facetDtos;
    });
    this.checkedValues.push(facetNameValue);
  }

  isChecked(facetValueName: String): Boolean {
    return this.checkedValues.indexOf(facetValueName) >= 0;
  }
}
