import { Component } from '@angular/core';
import { Deals } from './deals.model';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import * as fromApp from '../../store/app.reducer';
import { Subscription,TimeInterval,map} from 'rxjs'
import * as DealsActions from './store/deals.actions'

@Component({
  selector: 'app-deals',
  templateUrl: './deals.component.html',
  styleUrls: ['./deals.component.css']
})
export class DealsComponent {
    deals: Deals|null;
    subscription: Subscription;
    width=520;
    height=520;

    constructor(
                public router: Router,
                private store: Store<fromApp.AppState>
      ){}

    ngOnInit(){
      this.subscription = this.store
      .select('deals')
      .pipe(map(dealsState => dealsState.deals))
      .subscribe((deals: Deals|null) => {
        this.deals = deals;
      });


      this.store.dispatch(DealsActions.fetchDeals())

    }
    ngOnDestroy() {
      this.subscription.unsubscribe();
    }

    navToProduct(index: number){
      this.router.navigate(['/product'],{queryParams: {productId:index}})
    }

    
}
