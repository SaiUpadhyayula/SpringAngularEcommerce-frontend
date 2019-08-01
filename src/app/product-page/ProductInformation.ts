import { ProductRating } from './product-rating';

export class ProductInformation {
    productName: string;
    imageUrl: string;
    price: BigInteger;
    description: string;
    manufacturer: string;
    availability: ProductAvailabilityInformation;
    attributeList: Array<ProductAttributeInformation>;
    productRatingDtoList: Array<ProductRating>;
}

class ProductAvailabilityInformation{
    availability: string;
    color: string;
}

class ProductAttributeInformation {
    attributeName: string;
    attributeValue: string;
}