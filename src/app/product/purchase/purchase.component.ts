import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/shared/product.model';
import { ShoppingService } from 'src/app/shopping-cart/shopping.service';

@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.css']
})
export class PurchaseComponent {
  @Input() product: Product;
  clickEffect1:boolean=false;
  clickEffect2:boolean=false;
  quantity = 1;

  constructor(private shoppingService: ShoppingService,
              private router: Router
    ){

  }

  btnClickEffect1(){

    this.shoppingService.addProductInCart(this.product, this.quantity)
    
    this.clickEffect1 = true;
    setTimeout(()=>{
      this.clickEffect1=false;
    },100)
  }


  btnClickEffect2(){
    this.clickEffect2 = true;
    setTimeout(()=>{
      this.clickEffect2=false;
    },100)

    this.router.navigate(['/shopping-cart'])
  }
}
