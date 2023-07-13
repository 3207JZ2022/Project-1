import { Injectable } from "@angular/core";
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot, ResolveFn } from "@angular/router";
import { Store } from '@ngrx/store';
import { Actions, ofType } from '@ngrx/effects';
import { take, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import * as fromApp from '../../store/app.reducer';
import * as RecommendListActions from './store/recommend-list.actions';
import { Product } from "src/app/shared/product.model";

@Injectable({providedIn: 'root'})
export class RecommendListResolverService implements Resolve<Product[]>{
    constructor(
        private store: Store<fromApp.AppState>,
        private actions$: Actions
    ) {}
    resolve(route:ActivatedRouteSnapshot, state: RouterStateSnapshot){
        return this.store.select('recommendList').pipe(
            take(1),
            map(recommendListState => {
                return recommendListState.recommendList;
            }),
            switchMap(products => {
                if (!products|| products.length === 0) {
                    this.store.dispatch(RecommendListActions.fetchRecommendList());
                    return this.actions$
                    .pipe(
                        ofType(RecommendListActions.FETCH_RECOMMEND_LIST_SUCCESS),
                        take(1)
                    );
                } else {
                    return of(products);
                }
            })
        );
    }
}

