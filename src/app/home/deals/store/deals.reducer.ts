import { createReducer, on } from '@ngrx/store';
import * as DealsActions from './deals.actions';
import { Deals } from '../deals.model';

export interface State {
    deals: Deals|null;
    fetchError: string|null;
    fetching: boolean
}

const initialState: State = {
  deals: null,
  fetchError: null,
  fetching: false
};

export const dealsReducer = createReducer(
  initialState,
  on(DealsActions.fetchDealsSuccess, (state,{deals}) => ({
    ...state,
    fetchError: null,
    fetching: false,
    deals: deals
  })),

  on(DealsActions.fetchDealsFail, (state) => ({
    ...state,
    fetchError: "Fail to fetch data",
    fetching:false
  })),

  on(DealsActions.fetchDealsSuccess, (state) => ({
    ...state,
    fetchError: null,
    fetching: true
  })),
);