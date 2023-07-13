import { Component, Input } from '@angular/core';
import { Review } from './review.model';
import { DataStorageService } from 'src/app/shared/data-storage.service';
@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent {

    reviews: Review[];
    @Input() productId:string;


    percentageStyle=[{
      backgroundSize: '70% 100%'
    }
    ]


    constructor(private dataStorageService: DataStorageService){
    }


    ngOnInit(){
      this.reviews=this.dataStorageService.getProductReviewsById(this.productId);
      this.getPercetageRatingPerStar();
    }


    getAverageRating(){
        let temp=0
        for(let i=0;i<this.reviews.length;i++){
          temp+=this.reviews[i].rating;
      
        }
        temp/=this.reviews.length;
        
        return Math.round(temp*10)/10;
    }

    getPercetageRatingPerStar(){
      let s=[0,0,0,0,0]
      for(let i=0;i<this.reviews.length;i++){
        if(this.reviews[i].rating===1) s[0]++;
        else if(this.reviews[i].rating===2)s[1]++;
        else if(this.reviews[i].rating===3)s[2]++;
        else if(this.reviews[i].rating===4)s[3]++;
        else {s[4]++;}
      }
      this.percentageStyle.length=0;
      for(let i=0;i<5;i++){
        this.percentageStyle.push({
          backgroundSize: (s[i]/this.reviews.length*100)+'% 100%'
        })
      }
      // console.log(this.percentageStyle)
    }
}
