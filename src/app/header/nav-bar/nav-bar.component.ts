import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromApp from '../../store/app.reducer'
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import * as AuthActions from '../../auth/store/auth.actions'

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  loggedIn:boolean = false;
  storeSub: Subscription;
  constructor(
    private store: Store<fromApp.AppState>,
    private router: Router
    ){
  }

  ngOnInit() {
    this.storeSub = this.store.select('auth').subscribe(authState => {
      if(authState.user){
        this.loggedIn = true;
      }else{
        this.loggedIn = false;
      }
    });
  }

  ngOnDestroy() {
    this.storeSub.unsubscribe();
  }

  auth(){
    if(this.loggedIn){
      this.store.dispatch(AuthActions.logout());
      this.router.navigate(['/']);
    }else{
      this.router.navigate(['/auth']);
    }
  }
}
