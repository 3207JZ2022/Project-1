import { Component, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/shared/product.model';

@Component({
  selector: 'app-popular-item',
  templateUrl: './popular-item.component.html',
  styleUrls: ['./popular-item.component.css']
})
export class PopularItemComponent {
  @Input() product: Product;

  constructor(private router: Router, private route: ActivatedRoute){}

  navToProduct(){
    this.router.navigate(['/product'],{queryParams: {productId:this.product.id}})
  }
}
