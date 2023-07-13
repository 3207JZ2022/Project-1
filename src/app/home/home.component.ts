import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromApp from '../store/app.reducer';
// import * as RecommendListAction from './recommend-list/store/recommend-list.actions'
// import * as PopularListAction from './popular-list/store/popular-list.actions'
// import * as DealsAction from './deals/store/deals.actions'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(
    private store: Store<fromApp.AppState>){}

  ngOnInit(){}


  ngOnDestroy(){}

}
