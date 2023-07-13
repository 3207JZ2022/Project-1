import { Product } from "./product.model";

export class OrderedItems{
    constructor(
        public productId: string,
        public productPrice: number,
        public quantity: number
    ){}
}