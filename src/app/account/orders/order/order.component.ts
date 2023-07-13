import { Component, Input } from '@angular/core';
import { DataStorageService } from 'src/app/shared/data-storage.service';
import { Order } from 'src/app/shared/order.model';
import { Product } from 'src/app/shared/product.model';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent {
  @Input() order: Order;

  products: Product[]=[];
  constructor(private dataStorageService:DataStorageService){}


  ngOnInit() {
    if(this.order){
      this.products.length=0;
      let temp = this.order.orderedItems;
      let count=0;
      for(let i = 0; i < temp.length;i++){
        this.dataStorageService.getProductById(temp[i].productId).then((product)=>{
            this.products.push(product)  ;
            count++;  
        })
      }

    }
  }
}
