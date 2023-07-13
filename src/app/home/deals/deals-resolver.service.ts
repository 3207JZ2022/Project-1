import { Injectable } from "@angular/core";
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from "@angular/router";

import { Store } from '@ngrx/store';
import { Actions, ofType } from '@ngrx/effects';
import { take, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

import * as fromApp from '../../store/app.reducer';
import * as DealsAction from './store/deals.actions';
import { Deals } from "./deals.model";

@Injectable({providedIn: 'root'})
export class DealsResolverService implements Resolve<Deals>{
    constructor(
        private store: Store<fromApp.AppState>,
        private actions$: Actions
    ) {}
    
    resolve(route:ActivatedRouteSnapshot, state: RouterStateSnapshot){
        return this.store.select('deals').pipe(
            take(1),
            map(dealsState => {
                return dealsState.deals;
            }),
            switchMap(deals => {
                if (!deals) {
                    this.store.dispatch(DealsAction.fetchDeals());
                    return this.actions$.pipe(
                        ofType(DealsAction.FETCH_DEALS_SUCCESS),
                        take(1)
                    );
                } else {
                    return of(deals);
                }
            })
        );
    }
}