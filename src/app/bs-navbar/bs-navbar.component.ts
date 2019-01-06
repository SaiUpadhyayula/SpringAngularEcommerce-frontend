import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../category.service';

@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent implements OnInit {

  categories$;

  constructor(categoryService: CategoryService) { 
    this.categories$ = categoryService.getCategories();
  }

  ngOnInit() {
  }

}
