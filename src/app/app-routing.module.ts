import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { SupportComponent } from './support/support.component';
import { SearchComponent } from './search/search.component';
import { ProductComponent} from './product/product.component'
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {
    path:'', redirectTo:'/home', pathMatch:"full"
  },
  {
    path:'home', 
    loadChildren: ()=> import('./home/home.module').then(m =>m.HomeModule)
  },
  {
    path:'shopping-cart',
    loadChildren: ()=> import('./shopping-cart/shopping-cart.module').then(m => m.ShoppingCartModule)
  },
  {
    path:'auth',
    loadChildren: ()=> import('./auth/auth.module').then(m=>m.AuthModule)
  },
  {
    path:'account',
    loadChildren:()=> import('./account/user.module').then(m=>m.UserModule)
  },
  {
    path:'support',
    component: SupportComponent
  },
  {
    path:'search',
    component: SearchComponent
  },
  {
    path:'product',
    component: ProductComponent,
  },
  {
    path:'checkout',
    loadChildren: ()=> import('./checkout/checkout.module').then(m=>m.CheckOutModule)
  },
  {
    path:'about',
    component: AboutComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules, 
      initialNavigation: 'enabledBlocking',
      scrollPositionRestoration: 'enabled'})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
