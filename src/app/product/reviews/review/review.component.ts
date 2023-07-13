import { Component, Input } from '@angular/core';
import { Review } from '../review.model';
import { User } from 'src/app/account/firebaseUser.model';
import { DataStorageService } from 'src/app/shared/data-storage.service';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent {
  @Input() review: Review;
  customerName: string;
  customerPortrait: string;
  constructor(private dataStorageService: DataStorageService){
  }

  ngOnInit() {
    
    let temp = this.dataStorageService.getUserById(this.review.customerId);
    this.customerName=temp.id;
    this.customerPortrait=temp.portraitImg
  }
}
