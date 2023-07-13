import { Component } from '@angular/core';
import { Product } from 'src/app/shared/product.model';
import {Store} from '@ngrx/store'
import * as fromApp from '../../store/app.reducer';
import {Subscription, map} from 'rxjs'
import * as PopularListAuctions from './store/popular-list.actions'
@Component({
  selector: 'app-popular-list',
  templateUrl: './popular-list.component.html',
  styleUrls: ['./popular-list.component.css']
})
export class PopularListComponent {
    
  products: Product[]|null
  subscription: Subscription;

  constructor(
    private store: Store<fromApp.AppState>
  ){}


  ngOnInit(){
    this.subscription = this.store
    .select('popularList')
    .pipe(map(state => state.popularList))
    .subscribe((popularList: Product[]|null) => {
      this.products = popularList;
    });

      this.store.dispatch(PopularListAuctions.fetchPopularList());
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }


}
