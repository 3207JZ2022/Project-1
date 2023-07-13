import { createReducer, on } from '@ngrx/store';
import * as PopularListActions from './popular-list.actions';
import { Product } from 'src/app/shared/product.model';

export interface State {
    popularList: Product[]|null;
    fetchError: string|null;
    fetching: boolean
}

const initialState: State = {
  popularList: null,
  fetchError: null,
  fetching: false
};

export const popularListReducer = createReducer(
  initialState,
  on(PopularListActions.fetchPopularListSuccess, (state,{products}) => ({
    ...state,
    fetchError: null,
    fetching: false,
    popularList: products
  })),

  on(PopularListActions.fetchPopularListFail, (state) => ({
    ...state,
    fetchError: "Fail to fetch data",
    fetching:false
  })),

  on(PopularListActions.fetchPopularList, (state) => ({
    ...state,
    fetchError: null,
    fetching: true
  })),
);