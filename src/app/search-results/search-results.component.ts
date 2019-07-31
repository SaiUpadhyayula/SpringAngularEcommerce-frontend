import { Component, OnInit } from '@angular/core';
import { SearchSharedService } from '../search-shared-service';
import { ProductSearchResponseDto, FacetDto } from '../product-page/ProductSearchResponseDto';
import { ProductInformation } from '../product-page/ProductInformation';
import { ActivatedRoute, Router } from '@angular/router';
import { Filter, SearchQueryDto } from '../product-page/SearchQueryDto';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {

  searchResponse: ProductSearchResponseDto;
  searchQueryDto: SearchQueryDto;
  products$:Array<ProductInformation>;
  facetsDtos$:Array<FacetDto>;
  filter: Filter;
  filters: Array<Filter>;
  checkedValues: Array<String>;

  constructor(private searchSharedService: SearchSharedService, private productService: ProductService, private router: Router) {}

  ngOnInit() {
    this.checkedValues = [];
    this.filters = [];
    this.searchSharedService.currentMessage.subscribe(searchResponse => this.searchResponse = searchResponse);
    if(this.searchResponse) {
      this.products$ = this.searchResponse.products;
      this.facetsDtos$ = this.searchResponse.facetDtos;
    } else {
      this.router.navigateByUrl('/');
    }
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
    this.get();
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

  private get() {
    this.searchQueryDto = {
      textQuery: "",
      filters: this.filters
    };    
    this.productService.search(this.searchQueryDto).subscribe((res) => {
      console.log(res);
      this.products$ = res.products;
      this.facetsDtos$ = res.facetDtos;
    });
  }
}
