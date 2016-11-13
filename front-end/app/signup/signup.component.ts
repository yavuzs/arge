import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { SignupService } from './signup.service';
import { SharedService } from '../shared/shared.service';

@Component({
  selector: 'arge',
  templateUrl: 'app/signup/signup.html',
  providers: [SignupService]
})

export class SignupComponent {
    constructor(private signupService: SignupService,
        private sharedService: SharedService,
        private router: Router) {}

    // TODO *Str variables should be reloaded with their new values when user changes the language
    loginStr : string = "Already have an account? Click here to login."
    userNameStr : string = "Username"
    passwordStr : string = "Password"
    signupStr : string = "Signup"
    emailStr : string = "E-mail"

    save(username, password, password2, email) {
        if (password !== password2) {
            this.sharedService.setError('Passwords do not match!');
            return ;
        }

        this.signupService.save(username, password, email).then(
            (response) => {
                if (response.res === true)
                    this.router.navigateByUrl('login');
                else
                    this.sharedService.setError(response.reason);
            },
            (error) => {
                this.sharedService.setError('Invalid credentials');
            }
        );
    }

    redirectToLogin() {
        this.router.navigateByUrl('login');
    }
}
