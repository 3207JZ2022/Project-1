import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { AuthGuard } from '../auth/auth.guard';
import { CheckoutComponent } from './checkout.component';
import { AddressReviewComponent } from './address-review/address-review.component';
import { OrderedItemsReviewComponent } from './ordered-items-review/ordered-items-review.component';
import { PaymentComponent } from './payment/payment.component';
import { PaymentReviewComponent } from './payment-review/payment-review.component';


@NgModule({
  declarations: [
    CheckoutComponent,
    AddressReviewComponent,
    OrderedItemsReviewComponent,
    PaymentComponent,
    PaymentReviewComponent,
],
  imports: [
    FormsModule,
    RouterModule.forChild([{ path: '', component: CheckoutComponent, canActivate: [AuthGuard], }]),
    SharedModule,
  ],
})
export class CheckOutModule {

}
