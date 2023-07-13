import { Component } from '@angular/core';
import { UserService } from '../user.service';


export interface Account{
  fullName:string;
  phoneNumber:string
  email: string;
}

export interface Address{
  fullName:string;
  street:string;
  city:string;
  state:string;
  zipCode:string
  country:string
  phoneNumber:string
}



@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  account: Account;
  address: Address;
  constructor(private userService: UserService){
  } 

  ngOnInit(){
    let temp= this.userService.getUserProfile();
    this.account=temp[0] as Account;
    this.address=temp[1] as Address;
  }


}
