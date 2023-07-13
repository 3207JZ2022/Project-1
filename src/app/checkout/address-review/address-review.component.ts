import { Component, Input } from '@angular/core';
import { Address } from 'src/app/account/profile/profile.component';

@Component({
  selector: 'app-address-review',
  templateUrl: './address-review.component.html',
  styleUrls: ['./address-review.component.css']
})
export class AddressReviewComponent {
    @Input() address:Address;

    constructor(){}

    
}
