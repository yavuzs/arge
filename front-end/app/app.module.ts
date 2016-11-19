import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { RouterModule }   from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  imports:      [ BrowserModule, HttpModule,
    RouterModule.forRoot([
      { path: '',      component: MainpageComponent },
      { path: 'main', component: MainpageComponent }, // TODO design main page
      { path: 'login', component: LoginComponent },
      { path: 'signup', component: SignupComponent },
      { path: 'navbar', component: NavbarComponent }

    ]) 
  ],
  declarations: [ AppComponent, LoginComponent, SignupComponent, MainpageComponent , NavbarComponent],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }