import { Component, Input } from '@angular/core';
import { SearchService } from '../search.service';
import { Product } from 'src/app/shared/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  @Input() products: Product[] = [];

  constructor(private searchService: SearchService){}


  ngOnInit() {
    //initialize pro  ducts
    
  }

}
