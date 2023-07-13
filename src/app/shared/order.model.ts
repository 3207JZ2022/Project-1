import { OrderedItems } from "./orderedItems.model";
import { Address } from "../account/profile/profile.component";

export interface Payment{
    type:string,
    detail:string
}

export class Order{
    constructor(
        public date: string,
        public total: number,
        public shipTo: Address,
        public orderId: string,
        public orderedItems: OrderedItems[],
        public status: string,
        public payment: Payment,
    ){}
}