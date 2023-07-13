import {createAction, props } from '@ngrx/store';
import { Deals } from '../deals.model';

export const FETCH_DEALS_SUCCESS='[Home] Fetch DealS Success'
export const FETCH_DEALS_FAIL='[Home] Fetch Fail'
export const FETCH_DEALS = '[Home] Fetch Deals';

export const fetchDealsSuccess=createAction(
  FETCH_DEALS_SUCCESS,
  props<{deals:Deals}>()
)

export const fetchDealsFail=createAction(
  FETCH_DEALS_FAIL,
  props<{errorMessage:string}>()
)
    
export const fetchDeals = createAction(
  FETCH_DEALS
);