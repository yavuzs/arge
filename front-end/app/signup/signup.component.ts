import { Component, Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { SignupService } from './signup.service';

@Component({
  selector: 'arge',
  templateUrl: 'app/signup/signup.html',
  providers: [SignupService]
})

@Injectable()
export class SignupComponent {
    constructor(private signupService: SignupService,
        private router: Router) {}

    // TODO *Str variables should be reloaded with their new values when user changes the language
    loginStr : string = "Already have an account? Click here to login."
    userNameStr : string = "Username"
    passwordStr : string = "Password"
    signupStr : string = "Signup"
    emailStr : string = "E-mail"

    save(username, password, password2, email) {
        // TODO make sanity check
        this.signupService.save(username, password, email).then(
            (response) => {
                this.router.navigateByUrl('login');
            },
            (error) => {
                console.log(error);
            });
    }

    redirectToLogin() {
        this.router.navigateByUrl('login');
    }
}
