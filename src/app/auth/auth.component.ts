import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import * as fromApp from '../store/app.reducer'
import * as AuthActions from './store/auth.actions'
@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {
  isLoginMode = true;
  isLoading = false;
  error: string|null = null;
  
  private storeSub: Subscription;

  constructor(
    private store: Store<fromApp.AppState>
  ) {}



  ngOnInit() {
    this.storeSub = this.store.select('auth').subscribe(authState => {
      this.isLoading = authState.loading;
      this.error = authState.authError;
      if (this.error) {
        this.showErrorAlert(this.error);
      }
    });
    
  }

  ngOnDestroy() {
    this.storeSub.unsubscribe();
  }



  onHandleError() {
    this.error = null;
  }

  private showErrorAlert(message:string){
    // const alertCmp = new AlertComponent();
    // angular instantiation of class component, return a component factory
  }


}
