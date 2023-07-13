import { Component, Input } from '@angular/core';
import {faStar as solidStar ,faStarHalfStroke as solidHalfStar} from '@fortawesome/free-solid-svg-icons'
import { faStar as regularStar } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-rating-star',
  templateUrl: './rating-star.component.html',
  styleUrls: ['./rating-star.component.css']
})
export class RatingStarComponent {
  @Input() ratePerStar:number = 1;
  @Input() rating: number=0;
  @Input() color: string='#fbc634';
  @Input() maxStar:number = 5;
  starNumber=0;

  
  starCollection:typeof solidStar[] =[];

  ratingStyle={
    color: '#fbc634'
  }

  constructor(){}

  ngOnInit(){
    this.ratingStyle={
      color: this.color
    }

    this.generateView();
  }


  generateView(){
    this.starCollection.length=0;
    this.starNumber=Math.ceil(Math.floor(this.rating)/this.ratePerStar);
    let i=0
    while(i<this.starNumber){
      this.starCollection.push(solidStar);
      i++;
    }
    if(i==this.maxStar) return;
    let temp=this.rating - i;
    if(temp<0.25){
      this.starCollection.push(regularStar)
    }else if(temp<0.75){
      this.starCollection.push(solidHalfStar)
    }else{
      this.starCollection.push(solidStar)
    }
    i++;
    while(i<this.maxStar){
      this.starCollection.push(regularStar)
      i++;
    }

  }

}
