import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.html'
})

export class AppComponent {
  variable = "This is a variable"
  // TODO *Str variables should be reloaded with their new values when user changes the language
  signUpStr = "Signup"
  userNameStr = "Username"
  passwordStr = "Password"
  authStr = "Login"
  emailStr = "E-mail"
  auth = function() {
    console.log("Authorized!");
  }
}
