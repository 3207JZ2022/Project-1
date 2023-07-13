import { Component } from '@angular/core';
import { Product } from 'src/app/shared/product.model';
import { Store } from '@ngrx/store';
import * as fromApp from '../../store/app.reducer';
import {Subscription, map} from 'rxjs'
import * as RecommendListActions from './store/recommend-list.actions'
import { Router } from '@angular/router';
@Component({
  selector: 'app-recommend-list',
  templateUrl: './recommend-list.component.html',
  styleUrls: ['./recommend-list.component.css']
})
export class RecommendListComponent {
  recommendList: Product[]|null;
  subscription: Subscription;
  
  constructor(
    private store: Store<fromApp.AppState>,
    private router: Router
  ){}


  ngOnInit(){
    this.subscription = this.store
    .select('recommendList')
    .pipe(map(state => state.recommendList))
    .subscribe((list: Product[]|null) => {
      this.recommendList = list;
    });
      this.store.dispatch(RecommendListActions.fetchRecommendList());
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }


  navToProduct(index: string){
    this.router.navigate(['/product'],{queryParams: {productId:index}})
  }
}
