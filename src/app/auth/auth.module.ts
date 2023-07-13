import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SharedModule } from '../shared/shared.module';
import { CommonModule } from '@angular/common';

const routes: Routes =[{ 
        path: '', 
        component: AuthComponent, 
        children:[
          { path:'', component: LoginComponent },
          { path:'signup', component: SignUpComponent}
        ]
}]

@NgModule({
  declarations: [AuthComponent, LoginComponent, SignUpComponent],
  imports: [
    FormsModule,
    SharedModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
    RouterModule.forChild(
      routes
    ),

  ],
  exports:[RouterModule]
})

export class AuthModule{

}