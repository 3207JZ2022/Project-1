import { Component } from '@angular/core';
import { CheckoutService } from './checkout.service';
import { UserService } from '../account/user.service';
import { Address } from '../account/profile/profile.component';
import { Order } from '../shared/order.model';
import { OrderedItems } from '../shared/orderedItems.model';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {

  itemNumber: number=0;
  userAddress: Address;
  order: Order;
  orderedItems: OrderedItems[];
  constructor(private checkoutService: CheckoutService,
              private  userService: UserService
    ){

  }

  ngOnInit(){

    this.getItemsNumber();
    this.getUserAddress();
    this.order=this.checkoutService.getOrder();
    this.orderedItems=this.order.orderedItems;
  }

  getItemsNumber(){
    this.itemNumber=this.checkoutService.getOrderItemsCount();
  }

  getUserAddress(){
    this.userAddress=this.userService.getUserAddress();
  }
}
