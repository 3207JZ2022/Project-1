import {createAction, props } from '@ngrx/store';
import { Product } from 'src/app/shared/product.model';

export const FETCH_RECOMMEND_LIST_SUCCESS='[Home] Fetch Recommend List Success'
export const FETCH_RECOMMEND_LIST_FAIL='[Home] Fetch Recommend List Fail'
export const FETCH_RECOMMEND_LIST = '[Home] Fetch Recommend List';


export const fetchRecommendListSuccess=createAction(
  FETCH_RECOMMEND_LIST_SUCCESS,
  props<{products:Product[]}>()
)

export const fetchRecommendListFail=createAction(
  FETCH_RECOMMEND_LIST_FAIL,
  props<{errorMessage:string}>()
)

export const fetchRecommendList = createAction(
  FETCH_RECOMMEND_LIST,
);