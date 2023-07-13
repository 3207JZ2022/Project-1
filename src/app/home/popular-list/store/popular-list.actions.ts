import {createAction, props } from '@ngrx/store';
import { Product } from 'src/app/shared/product.model';

export const FETCH_POPULAR_LIST_SUCCESS='[Home] Fetch Popular List Success'
export const FETCH_POPULAR_LIST_FAIL='[Home] Fetch Popular List Fail'
export const FETCH_POPULAR_LIST = '[Home] Fetch Popular List';
export const SET_POPULAR_LIST = '[Home] Set Popular List';

export const fetchPopularListSuccess=createAction(
  FETCH_POPULAR_LIST_SUCCESS,
  props<{products:Product[]}>()
)

export const fetchPopularListFail=createAction(
  FETCH_POPULAR_LIST_FAIL,
  props<{errorMessage:string}>()
)
    
export const fetchPopularList = createAction(
  FETCH_POPULAR_LIST,
);

export const setPopularList = createAction(
  SET_POPULAR_LIST
)
