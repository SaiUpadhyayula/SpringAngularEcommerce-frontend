import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { ActivatedRoute } from '@angular/router';
import { SearchQueryDto, Filter } from '../product-page/SearchQueryDto';
import { ProductInformation } from '../product-page/ProductInformation';
import { FacetDto } from '../product-page/ProductSearchResponseDto';

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
    this.filters = [];
    this.checkedValues = [];

    this.initSearchQueryDto();
    this.getFacets();
  }

  ngOnInit() {
  }

  check(facetName: String, facetNameValue: String, event: Event) {
    this.filter = {
      "key": facetName,
      "value": facetNameValue
    };
    this.filters.push(this.filter);
    this.get();
    this.checkedValues.push(facetNameValue);
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  }

  isChecked(facetValueName: String): Boolean {
    return this.checkedValues.indexOf(facetValueName) >= 0;
  }

  existsAny(checkedValues: Array<String>) {
    return checkedValues.length > 0;
  }

  clearAllFilters() {
    this.checkedValues = [];
    this.filters = [];
    this.searchQueryDto.filters = this.filters;
    this.getFacets();
  }

  removeFilter(value: String) {
    this.checkedValues.splice(this.checkedValues.indexOf(value), 1);
    this.filters = this.filters.filter(el => el.value !== value);
    this.get();
  }

  private initSearchQueryDto() {
    this.searchQueryDto = {
      textQuery: "",
      filters: this.filters
    };
  }

  private getFacets() {
    this.productService.getFacets(this.categoryName, this.searchQueryDto).subscribe((res) => {
      console.log(res);
      this.products$ = res.products;
      this.facetDtos$ = res.facetDtos;
    });
  }

  private get() {
    this.searchQueryDto = {
      textQuery: "",
      filters: this.filters
    };
    this.productService.getFacets(this.categoryName, this.searchQueryDto).subscribe((res) => {
      console.log(res);
      this.products$ = res.products;
      this.facetDtos$ = res.facetDtos;
    });
  }
}
