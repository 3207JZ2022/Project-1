import { EventEmitter, Injectable } from "@angular/core";
import { Product } from "../shared/product.model";
import { Order, Payment } from "../shared/order.model";
import { OrderedItems } from "../shared/orderedItems.model";
import { CheckoutService } from "../checkout/checkout.service";
import { Address } from "../account/profile/profile.component";

@Injectable({
    providedIn: 'root'
})

export class ShoppingService{
    cart: OrderedItems[] = [];

    orders:Order[] = [
        {
            date: '2019-01-22',
            total: 22*5+16*2,
            shipTo: {
                fullName: 'idealCustomer',
                city:'Toronto',
                state:'Ontario',
                country:'Canada',
                phoneNumber:'404-404-4004'
            }as Address,
            orderId: '1022033123-ADS',
            status: 'completed',
            payment: {type:"credit-card",
            detail: "4004-4004-4004"} as Payment,
            orderedItems: [
                {
                    productId: '-N_5dTp_Yzg_nB68Hsh5',
                    productPrice: 22,
                    quantity: 5,
                },
                {
                    productId: '-N_5dTp_Yzg_nB68Hsh6',
                    productPrice: 16,
                    quantity: 2,
                }
            ]
        },
        {
            date: '2017-08-25',
            total: 26*3,
            shipTo: {
                fullName: 'idealCustomer',
                city:'New York',
                state:'New York',
                country:'United States',
                phoneNumber:'404-404-4444'
            }as Address,
            orderId: '10223123123-ADS',
            status: 'completed',
            payment: {type:"credit-card",detail: "4004-4004-4004"} as Payment,
            orderedItems: [
                {
                    productId: '-N_5dTpbSWALDmXqH5EQ',
                    productPrice: 26,
                    quantity: 3,
                }
            ]
        }
    ];

    cartChanged = new EventEmitter<OrderedItems[]>();

    constructor(private checkoutService: CheckoutService){
    }

    getAllCartItems(){
        return this.cart.slice();
    }

    addProductInCart(item: Product, quantity: number){
        for(let orderItem of this.cart){
            if(orderItem.productId === item.id){
                orderItem.quantity+=quantity;
                return;
            }
        }
        this.cart.push({
            productId: item.id,
            productPrice: item.price,
            quantity:quantity
        });
    }

    getOrder(){
        return this.orders.slice();
    }

    removeOrderedItems(index: number){
        this.cart.splice(index, 1);
        this.cartChanged.emit(this.cart.slice());
    }
    
    removeAlItems(){
        this.cart.length=0;
        this.cartChanged.emit(this.cart.slice());
    }
    
    sendOrderedItemsToCheckOut(){
        this.checkoutService.readyToCheckout(this.cart)
    }
    
}