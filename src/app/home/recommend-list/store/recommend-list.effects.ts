import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { switchMap, catchError, map, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

import * as RecommendListActions from './recommend-list.actions';
import { Product } from 'src/app/shared/product.model';

const handleFetchProductsResponse=(
    products: Product[]
)=>{ return RecommendListActions.fetchRecommendListSuccess({products: products})}


const handleError = (errorRes: any) => {
  let errorMessage = 'An unknown error occurred!';
  if (!errorRes.error || !errorRes.error.error) {
    return of(RecommendListActions.fetchRecommendListFail({errorMessage :errorMessage}));
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
  return of(RecommendListActions.fetchRecommendListFail({errorMessage: errorMessage} ));
};

@Injectable()
export class RecommendListEffects {

  fetchRecommendList=createEffect(()=>{
    return this.actions$.pipe(
      ofType(RecommendListActions.fetchRecommendList),
      switchMap(() => {
        return this.http
          .get<{[key:string]:Product}>(
              environment.baseUrl +environment.productPath,
          )
          .pipe(
            map((response)=>{
              let temp:Product[]=[];
              for(const key in response){
                if(response.hasOwnProperty(key))temp.push({...response[key], id:key});
              }
              return temp;
            }),
            map(resData => {
              return handleFetchProductsResponse(
                resData
              );
            }),
            catchError(errorRes => {
              return handleError(errorRes);
            })
          );
      })
    );
  })

  fetchProductSuccess=createEffect(()=>{
    return this.actions$.pipe(
        ofType(RecommendListActions.FETCH_RECOMMEND_LIST_SUCCESS),
        tap((fetchProductsSuccess:  ReturnType<typeof RecommendListActions.fetchRecommendListSuccess>)=>{
            // console.log("fetch products success", fetchProductsSuccess.products)
        })
    )
  },{dispatch:(false)})

  fetchFailed=createEffect(()=>{
    return this.actions$.pipe(
      ofType(RecommendListActions.FETCH_RECOMMEND_LIST_FAIL),
      tap((fetchFail:  ReturnType<typeof RecommendListActions.fetchRecommendListFail>) => {
        // console.log("fetch failed", fetchFail.errorMessage);
      })
    );
  },{dispatch:false})

  constructor(
    private actions$: Actions,
    private http: HttpClient,
  ) {}
}
