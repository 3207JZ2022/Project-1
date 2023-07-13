import { Component } from '@angular/core';
import { Order } from 'src/app/shared/order.model';
import { Product } from 'src/app/shared/product.model';
import { ShoppingService } from 'src/app/shopping-cart/shopping.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent {
  orders: Order[] = [];



  constructor(private shoppingService: ShoppingService){

  }

  ngOnInit() {
    this.orders=this.shoppingService.getOrder();
  }
}
