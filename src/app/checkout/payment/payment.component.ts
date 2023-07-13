import { Component } from '@angular/core';
import { CheckoutService } from '../checkout.service';
import { Order } from "../../shared/order.model";
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent {

  order: Order;
  tax: number;
  itemPrice: number;
  shippingFee: number;

  constructor(private checkoutService: CheckoutService,
              private router: Router
    ){}

  ngOnInit() {
      this.checkoutService.getSubtotal()
      this.checkoutService.getTax();
      this.order=this.checkoutService.getOrder();

      this.getSubtotal();
      this.getTax();
      this.getShippingFee();

  }

  getSubtotal() {
    this.itemPrice=this.checkoutService.getSubtotal();
  }

  getTax(){
    this.tax=this.checkoutService.getTax();
  }

  getShippingFee(){
    this.shippingFee=this.checkoutService.getShippingFee();
  }
  
  onSubmit(){
    this.checkoutService.postOrder(this.order);
    this.router.navigate(['/']);
  }

  
}
