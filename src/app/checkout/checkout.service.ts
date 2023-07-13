import { EventEmitter, Inject, Injectable } from "@angular/core";
import { Order } from "../shared/order.model";
import { OrderedItems } from "../shared/orderedItems.model";
import { User } from "../account/firebaseUser.model";
import { UserService } from "../account/user.service";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: "root"
})
export class CheckoutService{

    user: User;
    order: Order;

    orderChanged= new EventEmitter<Order>();
    orderItems: OrderedItems[];
    constructor(private userService: UserService,
                private http: HttpClient){

    }

    ngOnInit(){
    }

    readyToCheckout(orderItems: OrderedItems[]){
        this.orderItems=orderItems;

        this.order= new Order(this.getEstimatedShippingDate(),
                this.getSubtotal(),
                this.userService.getUserAddress(),
                '-1',
                orderItems,
                'processing',
                {type:'Credit Card',detail:'4004-4564-1234'});

    }
    
    getOrder(){
        return this.order;
    }

    getOrderItemsCount():number{
        let sum:number=0;
        for(let i = 0; i < this.order.orderedItems.length; i++){
            sum += this.order.orderedItems[i].quantity
        }
        return sum;
    }

    getEstimatedShippingDate(){
        return new Date().getDate().toString();
    }

    getShippingFee(){
        return 6;
    }

    getTax(){
        return 0.08;
    }

    getSubtotal(){
        let sum=0
        for(let i = 0; i < this.orderItems.length;i++){
            sum+=this.orderItems[i].productPrice*this.orderItems[i].quantity;
        }

        return sum;


    }


    postOrder( order: Order) {
        const postData = { order: order };
        this.http
          .post<{ name: string }>(
            environment.baseUrl+environment.orderPath,
            postData,
            {
              observe: 'response'
            }
          )
          .subscribe(
            responseData => {
              console.log(responseData);
            },
            error => {
              console.log(error.message);
            }
          );
      }
}