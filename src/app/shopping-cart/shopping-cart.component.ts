import { Component, ViewChild } from '@angular/core';
import { ShoppingService } from './shopping.service';
import { FormGroup, FormArray, FormControl, Validators, NgForm} from '@angular/forms';
import { OrderedItems } from '../shared/orderedItems.model';
import { DataStorageService } from '../shared/data-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent {

    cart: OrderedItems[] = [];
    checkoutForm: NgForm;
    user = {
      username: '',
      email: '',
      secretQuestion: '',
      answer: '',
      gender: ''
    };

    constructor(private shoppingService: ShoppingService,
      private dataStorageService: DataStorageService,
      private router: Router,
    ){}

    ngOnInit(){
      this.cart=this.shoppingService.getAllCartItems();
      this.shoppingService.cartChanged.subscribe(cart=>{
        this.cart=cart;
      })
    }

    clearCart(){
      this.shoppingService.removeAlItems();
    }

    getSubtotal(){
      let sum=0;
      for(let item of this.cart){
          sum+=(item.productPrice*item.quantity)
      }
      return sum;
    }


    onSubmit(){
    }

    navToCheckOut(){
      // send orderedItems to checkout service
      this.shoppingService.sendOrderedItemsToCheckOut();
      this.router.navigate(['/checkout']
      )
    }
}
