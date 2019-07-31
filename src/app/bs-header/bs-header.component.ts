import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { IfStmt } from '@angular/compiler';
import { SearchQueryDto } from '../product-page/SearchQueryDto';
import { SearchSharedService } from '../search-shared-service';
import { ProductService } from '../product.service';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';
import { SearchResultsComponent } from '../search-results/search-results.component';

@Component({
  selector: 'bs-header',
  templateUrl: './bs-header.component.html',
  styleUrls: ['./bs-header.component.css']
})
export class BsHeaderComponent implements OnInit {

  userAccount: string;
  showLoginButton: boolean;
  searchQueryDto: SearchQueryDto;

  constructor(private authenticationService: AuthenticationService, private productService: ProductService, private searchSharedService: SearchSharedService, private router: Router) {
    this.setUserName();
    this.searchQueryDto = {
      "textQuery": '',
      "filters": []
    }
  }

  ngOnInit() {
  }

  private setUserName() {
    if (this.authenticationService.getUserName() != null) {
      this.userAccount = this.authenticationService.getUserName();
      this.showLoginButton = false;
    } else {
      this.showLoginButton = true;
    }
  }

  search() {
    this.productService.search(this.searchQueryDto).toPromise().then(res => {
      console.log(res);
      this.searchSharedService.sendSearchData(res);
      this.router.navigateByUrl("/search/");      
    });
  }
}
