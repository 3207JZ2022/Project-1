import { Component, Input } from '@angular/core';
import { DataStorageService } from 'src/app/shared/data-storage.service';
import { OrderedItems } from 'src/app/shared/orderedItems.model';
import { Product } from 'src/app/shared/product.model';

@Component({
  selector: 'app-ordered-items-review',
  templateUrl: './ordered-items-review.component.html',
  styleUrls: ['./ordered-items-review.component.css']
})
export class OrderedItemsReviewComponent {
  @Input() orderedItems: OrderedItems[];
  products: Product[]=[];
  constructor(private dataStorageService: DataStorageService){}

  ngOnInit() {
    this.products.length=0;
    for(let i =0; i< this.orderedItems.length; i++){
      this.getProductById(this.orderedItems[i].productId);
    }
  }


  getProductById(id:string) {
      
      this.dataStorageService.getProductById(id).then((product)=>{this.products.push(product)});
  }
  
}
