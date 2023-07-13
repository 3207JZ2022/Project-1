import { Component, Input } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { DataStorageService } from 'src/app/shared/data-storage.service';
import { OrderedItems } from 'src/app/shared/orderedItems.model';
import { Product } from 'src/app/shared/product.model';
import { ShoppingService } from '../shopping.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent {

  @Input() orderItem:OrderedItems ;
  @Input() itemIndex=0;
  product: Product;
  totalAmount:number;
  @Input() isChecked:number=-1;
  checkStatus:boolean = false;
  constructor(private dataStorageService: DataStorageService,
              private shoppingListService: ShoppingService,
              private router: Router

    ){}
  ngOnInit() {
    this.getTotal();
    this.getProduct();


  }



  getTotal(){
    this.totalAmount=this.orderItem.productPrice*this.orderItem.quantity;
  }

  initCartItem(){

  }

  getProduct(){
    this.dataStorageService.getProductById(this.orderItem.productId).then((product)=>{
      this.product=product;
    });
    
  }

  

  removeFromCart(){
    this.shoppingListService.removeOrderedItems(this.itemIndex)
  }


  increaseQuantity(){
    this.orderItem.quantity++;
    this.getTotal();

  }

  decreaseQuantity(){
    if(this.orderItem.quantity>1)this.orderItem.quantity--;
    this.getTotal();

  }


  navToProduct(){
    console.log('nav')
    this.router.navigate(['/product'],{queryParams: {productId:this.product.id}})
  }
}
