import { Component } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router'
import { Product } from 'src/app/shared/product.model';
import {DataStorageService} from 'src/app/shared/data-storage.service'
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
   
  product:Product;
  constructor(private router: Router,
    private route: ActivatedRoute,
    private dataStorageService: DataStorageService
    ){}

  ngOnInit() {
    const productId = this.route.snapshot.queryParams['productId']

    this.dataStorageService.getProductById(productId).then((product)=>{
      this.product = product
    });

  }

  getRating(){
    return this.dataStorageService.getProductRatingById(this.product.id);
  }

  ngOnDestroy() {
  }

}
