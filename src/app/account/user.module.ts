import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { UserComponent } from './user.component';
import { SharedModule } from '../shared/shared.module';
import { CanceledOrdersComponent } from './canceled-orders/canceled-orders.component';
import { NotYetShippedComponent } from './not-yet-shipped/not-yet-shipped.component';
import { OrdersComponent } from './orders/orders.component';
import { OrderComponent } from './orders/order/order.component';
import { ProfileComponent } from './profile/profile.component';
import { AuthGuard } from '../auth/auth.guard';

const routes: Routes =[{ 
    path: '', 
    component: UserComponent,
    canActivate: [AuthGuard],
    children:[
      { path:'profile', component: ProfileComponent},
      { path:'', component: OrdersComponent },
      { path:'not-yet-shipped', component: NotYetShippedComponent},
      { path:'canceled-orders', component: CanceledOrdersComponent}
    ]
}]


@NgModule({
  declarations: [
    UserComponent,
    CanceledOrdersComponent,
    NotYetShippedComponent,
    OrdersComponent,
    OrderComponent,
    ProfileComponent,

],
  imports: [
    FormsModule,
    RouterModule.forChild(routes),
    SharedModule,
  ],
})
export class UserModule {

}
