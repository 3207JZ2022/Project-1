import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Order } from "src/app/shared/order.model";
@Injectable({
    providedIn: 'root'
})
export class OrderService{

    ordersHistory: Order[];

    constructor(private http: HttpClient){}

    getOrderHistory(){
        return this.ordersHistory.slice();
    }

    
}