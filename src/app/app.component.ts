import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromApp from './store/app.reducer'
import * as AuthActions from './auth/store/auth.actions'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project-1';


  constructor(private store:Store<fromApp.AppState>){}

  ngOnInit() {
    this.store.dispatch(AuthActions.autoLogin());
  }
}
