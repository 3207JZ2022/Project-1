import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { HomeComponent } from './home.component';
import { PopularListComponent } from './popular-list/popular-list.component';
import { PopularItemComponent } from './popular-list/popular-item/popular-item.component';
import { DealsComponent } from './deals/deals.component';
import { SharedModule } from '../shared/shared.module';
import { RecommendListComponent } from './recommend-list/recommend-list.component';
import { RecommendListResolverService } from './recommend-list/recommend-list-resolver.service';
import { DealsResolverService } from './deals/deals-resolver.service';
import { PopularListResolverService } from './popular-list/popular-list-resolver.service';

const routes: Routes = [
  { 
    path: '', 
    component: HomeComponent,
    resolve: [DealsResolverService,PopularListResolverService,RecommendListResolverService] 
  }

];


@NgModule({
  declarations: [
    HomeComponent,
    PopularListComponent,
    PopularItemComponent,
    DealsComponent,
    RecommendListComponent
],
  imports: [
    FormsModule,
    RouterModule.forChild((routes)),
    SharedModule
  ],
})
export class HomeModule {}
