import { ActionReducerMap } from '@ngrx/store';

import * as fromDeals from '../home/deals/store/deals.reducer';
import * as fromPopularList from '../home/popular-list/store/popular-list.reducer'
import * as fromRecommendList from '../home/recommend-list/store/recommend-list.reducer'
import * as fromAuth from '../auth/store/auth.reducer'

export interface AppState {
  deals: fromDeals.State;
  popularList: fromPopularList.State;
  recommendList: fromRecommendList.State;
  auth: fromAuth.State;
}

export const appReducer: ActionReducerMap<AppState> = {
  deals: fromDeals.dealsReducer,
  popularList: fromPopularList.popularListReducer,
  recommendList: fromRecommendList.recommendListReducer,
  auth: fromAuth.authReducer
};
