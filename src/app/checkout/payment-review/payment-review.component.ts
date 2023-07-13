import { Component, Input } from '@angular/core';
import { Payment } from 'src/app/shared/order.model';

@Component({
  selector: 'app-payment-review',
  templateUrl: './payment-review.component.html',
  styleUrls: ['./payment-review.component.css']
})
export class PaymentReviewComponent {
  @Input() payment:Payment;
}
