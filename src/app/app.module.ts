import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { NavBarComponent } from './header/nav-bar/nav-bar.component';
import { ProductsComponent } from './search/products/products.component';
import { ProductsDetailComponent } from './search/products/products-detail/products-detail.component';
import { SearchBarComponent } from './header/search-bar/search-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { EffectsModule } from '@ngrx/effects';

import { HttpClientModule} from '@angular/common/http'
import { MatIconModule} from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { SharedModule } from './shared/shared.module';
import { SearchComponent } from './search/search.component';
import { SupportComponent } from './support/support.component';
import { FormsModule } from '@angular/forms';
import { SearchFilterComponent } from './search/search-filter/search-filter.component';
import { ProductComponent } from './product/product.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ReviewsComponent } from './product/reviews/reviews.component';
import { ReviewComponent } from './product/reviews/review/review.component';
import { GetNumberPipe } from './product/reviews/get-number.pipe';
import { PurchaseComponent } from './product/purchase/purchase.component';
import { AboutComponent } from './about/about.component';

import * as fromApp from './store/app.reducer';
import {StoreModule} from '@ngrx/store'
import { AuthEffects } from './auth/store/auth.effects';
import { DealsEffects } from './home/deals/store/deals.effects'
import { PopularListEffects } from './home/popular-list/store/popular-list.effects';
import { RecommendListEffects } from './home/recommend-list/store/recommend-list.effects';
@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    NavBarComponent,
    ProductsComponent,
    ProductsDetailComponent,
    SearchBarComponent,
    SearchComponent,
    SupportComponent,
    SearchFilterComponent,
    ProductComponent,
    ReviewsComponent,
    ReviewComponent,
    GetNumberPipe,
    PurchaseComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatIconModule,
    CommonModule,
    SharedModule,
    FormsModule,
    FontAwesomeModule ,
    StoreModule.forRoot(fromApp.appReducer),
    StoreRouterConnectingModule.forRoot(),
    EffectsModule.forRoot([
      AuthEffects, 
      DealsEffects,
      PopularListEffects,
      RecommendListEffects
  ]),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
