import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';

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
            this.sharedService.setMessage('Passwords do not match!');
            return ;
        }

        this.signupService.save(username, password, email).then(
            (response) => {
                console.log(response);
                if (response === 'true') {
                    var timer = Observable.timer(3000);

                    this.sharedService.setMessage('Thank you for your registration.');
                    
                    timer.subscribe(
                        t => this.router.navigateByUrl('login')
                    );
                }
                else
                    this.sharedService.setMessage(response);
            },
            (error) => {
                this.sharedService.setMessage('Invalid credentials');
            }
        );
    }

    redirectToLogin() {
        this.router.navigateByUrl('login');
    }
}
