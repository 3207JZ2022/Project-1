import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  @Input() title:string="";
  @Input() routeName:string="Page";

  constructor(){}


  onSubmit(){}

  navTo(){

  }
}
