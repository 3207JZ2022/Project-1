import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { switchMap, catchError, map, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

import * as PopularListActions from './popular-list.actions';
import { Product } from 'src/app/shared/product.model';

const handleFetchProductsResponse=(
    products: Product[]
)=>{ return PopularListActions.fetchPopularListSuccess({products: products})}


const handleError = (errorRes: any) => {
  let errorMessage = 'An unknown error occurred!';
  if (!errorRes.error || !errorRes.error.error) {
    return of(PopularListActions.fetchPopularListFail({errorMessage :errorMessage}));
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
  return of(PopularListActions.fetchPopularListFail({errorMessage: errorMessage} ));
};

@Injectable()
export class PopularListEffects {
  fetchPopularList=createEffect(()=>{
    return this.actions$.pipe(
        ofType(PopularListActions.fetchPopularList),
        switchMap(() => {
          return this.http.get<{[key:string]:Product}>(
                environment.baseUrl +environment.productPath,
            );
          }
        ),
        map((response) => {
          let temp:Product[]=[];
          for(const key in response){
            if(response.hasOwnProperty(key))temp.push({...response[key], id:key});
          }
          return temp;
        }),
        map((products)=>{
          return PopularListActions.fetchPopularListSuccess({products: products})
        })
    );
  })




  fetchPopularListSuccess=createEffect(()=>{
    return this.actions$.pipe(
        ofType(PopularListActions.FETCH_POPULAR_LIST_SUCCESS),
        tap((fetchProductsSuccess:  ReturnType<typeof PopularListActions.fetchPopularListSuccess>)=>{
            // console.log("fetch popular success", fetchProductsSuccess.products)
        })
    )
  },{dispatch:(false)})

  fetchPopularListFailed=createEffect(()=>{
    return this.actions$.pipe(
      ofType(PopularListActions.FETCH_POPULAR_LIST_FAIL),
      tap((fetchFail:  ReturnType<typeof PopularListActions.fetchPopularListFail>) => {
        // console.log("fetch failed", fetchFail.errorMessage);
      })
    );
  },{dispatch:false})

  constructor(
    private actions$: Actions,
    private http: HttpClient,
  ) {}
}
