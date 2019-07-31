import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ProductSearchResponseDto } from './product-page/ProductSearchResponseDto';

@Injectable()
export class SearchSharedService{
    private messageSource = new BehaviorSubject<ProductSearchResponseDto>(new ProductSearchResponseDto());
    currentMessage = this.messageSource.asObservable();

    constructor(){}

    sendSearchData(productSearchResponseDto: ProductSearchResponseDto){
        this.messageSource.next(productSearchResponseDto)
    }
    
}