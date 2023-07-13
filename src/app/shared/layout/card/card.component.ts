import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() unprocessedItem: any;

  @Input() height: number = 200;
  @Input() width: number= 400;
  @Input() bindFunction: (args: any) => void =((index)=>{
    console.log('asdasd')
  });
  // cardStyle: {
  //   height:string,
  //   width:string,
  //   background: string,
  //   backgroundSize:string,
  //   filter: string,
  //   overflow: string,
  //   transform: string,
  //   content: ""
  // }={ 
  //   height:this.height+'px',
  //   width: this.width +'%',
  //   background: '',
  //   backgroundSize: 'cover',
  //   filter: 'blur(40px)',
  //   overflow: 'hidden',
  //   transform: 'scale(3)',
  //   content: ""
  //  }


  item:{
    title:string,
    price:number,
    imgSrc:string,
    id: string,
  };

  constructor(
    private router: Router
  ){}
  ngOnInit() {
    if(this.unprocessedItem.name&&this.unprocessedItem.price&&this.unprocessedItem.imgSrc){
        this.item={
          title:this.unprocessedItem.name,
          price: this.unprocessedItem.price,
          imgSrc: this.unprocessedItem.imgSrc,
          id: this.unprocessedItem.id
        }

        // this.cardStyle={
        //   height:this.height+'px',
        //   width: this.width +'%',
        //   background: 'url('+this.item.imgSrc+')',
        //   backgroundSize: 'cover',
        //   filter: 'blur(5px)',
        //   overflow: 'hidden',
        //   transform: 'scale(3)',
        //   content: ""
        // }

  

    }
  }
}
