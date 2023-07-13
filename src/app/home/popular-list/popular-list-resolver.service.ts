import { Injectable } from "@angular/core";
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from "@angular/router";

import { Store } from '@ngrx/store';
import { Actions, ofType } from '@ngrx/effects';
import { take, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

import * as fromApp from '../../store/app.reducer';
import * as PopularListActions from './store/popular-list.actions';
import { Product } from "src/app/shared/product.model";


@Injectable({providedIn: 'root'})
export class PopularListResolverService implements Resolve<Product[]>{
    constructor(
        private store: Store<fromApp.AppState>,
        private actions$: Actions
    ) {}
    
    resolve(route:ActivatedRouteSnapshot, state: RouterStateSnapshot){
        return this.store.select('popularList').pipe(
            take(1),
            map(popularList => {
                return popularList.popularList;
            }),
            switchMap(products => {
                if (!products|| products.length === 0) {
                    this.store.dispatch(PopularListActions.fetchPopularList());
                    return this.actions$
                    .pipe(
                        ofType(PopularListActions.FETCH_POPULAR_LIST_SUCCESS),
                        take(1)
                    );
                } else {
                    return of(products);
                }
            })
        );
    }
}