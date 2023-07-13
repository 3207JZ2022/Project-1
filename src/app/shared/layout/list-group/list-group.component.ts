import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-list-group',
  templateUrl: './list-group.component.html',
  styleUrls: ['./list-group.component.css']
})
export class ListGroupComponent {

  @Input() unprocessedItem: any;


  item:{
    title:string,
    price:number,
    imgSrc:string,
    description: string,
    id: number
  };

  constructor(){}


  ngOnInit(){
    let temp = this.unprocessedItem;
    if(temp.title&&temp.price&&temp.imgSc&&temp.description&&temp.id){
      this.item={
        title:temp.title, 
        price:temp.price, 
        imgSrc: temp.imgSrc,
        description:temp.description,
        id: temp.id

      }
      console.log("item in list group",this.item)
    }
  }

  viewItem(){
    
  }
}
