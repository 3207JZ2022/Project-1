import { Component } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { User } from './firebaseUser.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

  user: User;


  constructor(private authService: AuthService){

  }

  ngOnInit(){
    // this.authService.getService();
  }

}
