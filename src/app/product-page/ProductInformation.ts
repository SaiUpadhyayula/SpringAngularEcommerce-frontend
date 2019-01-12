export class ProductInformation {
    productName: string;
    imageUrl: string;
    price: BigInteger;
    description: string;
    manufacturer: string;
    availability: ProductAvailabilityInformation;
    attributeList: Array<ProductAttributeInformation>;
}

class ProductAvailabilityInformation{
    availability: string;
    color: string;
}

class ProductAttributeInformation {
    attributeName: string;
    attributeValue: string;
}