import { Product } from "src/app/shared/product.model";

export class Deals{
    constructor(
        public dealId: string,
        public title:string,
        public period:string,
        public products: Product[],
        public discount:string[]
    ){}
}