import { Component } from '@angular/core';
import { Http, Headers } from '@angular/http';

export const contentHeaders = new Headers();
contentHeaders.append('Accept', 'application/json');
contentHeaders.append('Content-Type', 'application/json');

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.html'
})

export class AppComponent {
  constructor (public http: Http) {}

  variable = "This is a variable"
  // TODO *Str variables should be reloaded with their new values when user changes the language
  signUpStr = "Signup"
  userNameStr = "Username"
  passwordStr = "Password"
  authStr = "Login"
  emailStr = "E-mail"

  auth(username, password) {

    let body = { username: username, password: password };
    console.log(body);
    this.http.post('http://localhost:2999/user/login', body, { headers: contentHeaders })
      .subscribe(
        response => {
          console.log(response);
        },
        error => {
          alert(error.text());
          console.log(error.text());
        }
      );
  }
}
