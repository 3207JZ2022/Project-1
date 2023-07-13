import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Account, Address } from "./profile/profile.component";

@Injectable({
    providedIn: 'root'
})
export class UserService {

    constructor(private http:HttpClient){

    }



    getUserProfile():{}[]{
        let temp=[];
        temp.push(this.getUserAccountInformation(),this.getUserAddress());
        return temp;
    }

    getUserAccountInformation():Account{
        return {
            fullName:'customer',
            phoneNumber:'2222222222',
            email: 'customer@turnmail.com'
        }
    }

    getUserAddress():Address{
        return {
            fullName:"Lisa Jordan",
            street:"404",
            city:"New York",
            state:"New York",
            zipCode:"40404-4040",
            country:"Nowhereland",
            phoneNumber:"404-222-12222"
        }
    }




}