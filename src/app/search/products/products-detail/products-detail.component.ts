import { Component, Input } from '@angular/core';
import { Inject } from '@angular/core';
import { Product } from 'src/app/shared/product.model';
import {faStar,faStarHalfStroke} from '@fortawesome/free-solid-svg-icons'
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';
import {DataStorageService} from 'src/app/shared/data-storage.service'
import {Router, ActivatedRoute} from '@angular/router'
@Component({
  selector: 'app-products-detail',
  templateUrl: './products-detail.component.html',
  styleUrls: ['./products-detail.component.css']
})
export class ProductsDetailComponent {
  @Input() product: Product;

  rating:number=0
  reviewCount:number=0;
  faStar = faStar;
  farStar=farStar;
  faStarHalfStroke=faStarHalfStroke


  constructor(private dataStorageService: DataStorageService,
              private router: Router,
              private route: ActivatedRoute
    ){}

  ngOnInit(){
    this.rating = this.dataStorageService.getProductRatingById(this.product.id);
    this.reviewCount = this.dataStorageService.getProductReviewsCountById(this.product.id);
  }

  navToProduct(){
    this.router.navigate(['/product'],{queryParams: {productId:this.product.id}})
  }
}
