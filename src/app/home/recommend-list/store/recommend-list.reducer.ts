import { createReducer, on } from '@ngrx/store';
import * as RecommendListActions from './recommend-list.actions';
import { Product } from 'src/app/shared/product.model';

export interface State {
    recommendList: Product[]|null;
    fetchError: string|null;
    fetching: boolean
}

const initialState: State = {
  recommendList: null,
  fetchError: null,
  fetching: false
};

export const recommendListReducer = createReducer(
  initialState,
  on(RecommendListActions.fetchRecommendListSuccess, (state,{products}) => ({
    ...state,
    fetchError: null,
    fetching: false,
    recommendList: products
  })),

  on(RecommendListActions.fetchRecommendListFail, (state) => ({
    ...state,
    fetchError: "Fail to fetch data",
    fetching:false
  })),

  on(RecommendListActions.fetchRecommendList, (state) => ({
    ...state,
    fetchError: null,
    fetching: true
  })),
);