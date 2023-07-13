import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { switchMap, catchError, map, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

import * as DealsActions from './deals.actions';
import { Deals } from '../deals.model';
import { Product } from 'src/app/shared/product.model';


const handleFetchDealsResponse=(
     dealId: string,
     title:string,
     period:string,
     products: Product[],
     discount:string[]
)=>{ return DealsActions.fetchDealsSuccess({deals:{
            dealId: dealId,
            title:title,
            period:period,
            products: products,
            discount:discount
        }})
}

const handleError = (errorRes: any) => {
  let errorMessage = 'An unknown error occurred!';
  if (!errorRes.error || !errorRes.error.error) {
    return of(DealsActions.fetchDealsFail({errorMessage :errorMessage}));
  }
  switch (errorRes.error.error.message) {
    case 'FETCH POPULAR LIST FAILED':
      errorMessage = 'Cannot fetch for popular list.';
      break;
    case 'FETCH RECOMMEND LIST FAILED':
      errorMessage = 'Cannot fetch for recommend list.';
      break;
    case 'FETCH DEALS FAILED':
      errorMessage = 'Cannot fetch for deals.';
      break;
  }
  return of(DealsActions.fetchDealsFail({errorMessage: errorMessage} ));
};

@Injectable()
export class DealsEffects {
  fetchDeals=createEffect(()=>{
    return this.actions$.pipe(
      ofType(DealsActions.fetchDeals),
      switchMap(() => {
        return this.http
          .get<{[key:string]:Deals}>(
              environment.baseUrl +environment.dealsPath
          )
          .pipe(
            map((response)=>{
            let temp:Deals = new Deals("","","",[],[]);
            for(const key in response){
              if(response.hasOwnProperty(key)){
                let id=key;
                let discount = response[key].discount;
                let products = response[key].products;
                let title = response[key].title;
                let period = response[key].period;
                
                temp = new Deals(id, title, period, products, discount );
              }
            }
            return temp ;

            }),
            map(resData => {
              return handleFetchDealsResponse(
                resData.dealId,
                resData.title,
                resData.period,
                resData.products,
                resData.discount
              );
            }),
            catchError(errorRes => {
              return handleError(errorRes);
            })
          );
      })
    );
  })




  fetchDealsSuccess=createEffect(()=>{
    return this.actions$.pipe(
        ofType(DealsActions.FETCH_DEALS_SUCCESS),
        tap((fetchDealsSuccess:  ReturnType<typeof DealsActions.fetchDealsSuccess>)=>{
            // console.log("fetch deals success", fetchDealsSuccess.deals)
        })
    )
  },{dispatch:(false)})



  fetchFailed=createEffect(()=>{
    return this.actions$.pipe(
      ofType(DealsActions.FETCH_DEALS_FAIL),
      tap((fetchFail:  ReturnType<typeof DealsActions.fetchDealsFail>) => {
        // console.log("fetch failed", fetchFail.errorMessage);
      })
    );
  },{dispatch:false})

  constructor(
    private actions$: Actions,
    private http: HttpClient,
  ) {}
}
