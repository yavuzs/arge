import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';

export const contentHeaders = new Headers();
contentHeaders.append('Accept', 'application/json');
contentHeaders.append('Content-Type', 'application/json');

@Injectable()
export class SignupService {

    constructor(private http: Http) {}

    save(username: string, password: string, email: string) {

      return new Promise((resolve, reject) => {
        let body = { username: username, password: password, email: email };
      
        this.http.post('http://localhost:2999/user/signup', body, { headers: contentHeaders })
          .subscribe(
            response => {
              resolve(response['_body']);
            },
            error => {
              reject(error);
            }
          );
      });
    }

}