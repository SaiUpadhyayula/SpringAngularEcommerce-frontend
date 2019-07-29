import { ProductInformation } from './ProductInformation';

export class ProductSearchResponseDto {
    products: Array<ProductInformation>;
    minPrice: Number;
    maxPrice: Number;
    facetDtos: Array<FacetDto>;
}

export class FacetDto {
    facetName: String;
    facetValueDtos: FacetValueDto;
}

export class FacetValueDto {
    facetValueName: String;
    count: Number;
    checked: Boolean;
}