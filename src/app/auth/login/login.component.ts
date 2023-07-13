import { Component } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import * as fromApp from '../../store/app.reducer'
import { Subscription } from 'rxjs';
import * as AuthActions from '../store/auth.actions'
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;
  email: string;
  password: string;
  private storeSub: Subscription;
  isLoginMode = true;
  isLoading = false;
  error: string|null = null;
  
  constructor(private router: Router, 
              private route: ActivatedRoute,
              private store: Store<fromApp.AppState>,
              private http: HttpClient
  ){}

  ngOnInit() {
    this.loginForm = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, [Validators.required ])
    });

    this.storeSub = this.store.select('auth').subscribe(authState => {
      this.isLoading = authState.loading;
      this.error = authState.authError;
      if (this.error) {
        // this.showErrorAlert(this.error);
        console.log('login error', this.error);
      }
    });
  }
  
  ngOnDestroy() {
    this.storeSub.unsubscribe();
  }

  onSubmit() {
    if (!this.loginForm.valid) {
      return;
    }
    this.isLoading=true;
    const email = this.loginForm.value.email;
    const password = this.loginForm.value.password;
    this.store.dispatch(
      AuthActions.loginStart({ email: email, password: password })
    );
    this.loginForm.reset();
  }

  onHandleError() {
    this.error = null;
  }


  navToSignUp(){
    this.router.navigate(['signup'], {relativeTo: this.route});
  }





}
