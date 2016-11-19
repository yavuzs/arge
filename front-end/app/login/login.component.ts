import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { LoginService } from './login.service';
import { SharedService } from '../shared/shared.service';

@Component({
  selector: 'arge',
  templateUrl: 'app/login/login.html',
  providers: [LoginService]
})

export class LoginComponent {
    constructor(private loginService: LoginService,
        private router: Router,
        private sharedService: SharedService) {}

    // TODO *Str variables should be reloaded with their new values when user changes the language
    signUpStr : string = "Don't have an account? Click here to sign up."
    userNameStr : string = "Username"
    passwordStr : string = "Password"
    authStr : string = "Login"

    auth(username, password) {
        this.loginService.auth(username, password).then(
            (response) => {
                this.router.navigateByUrl('main');
            },
            (error) => {
                this.sharedService.setError('Invalid credentials');
            });
    }

    redirectToSignup() {
        this.router.navigateByUrl('signup');
    }
}
