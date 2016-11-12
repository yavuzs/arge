import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';

export const contentHeaders = new Headers();
contentHeaders.append('Accept', 'application/json');
contentHeaders.append('Content-Type', 'application/json');

@Injectable()
export class LoginService {

    constructor(private http: Http) {}

    auth(username: string, password: string) {

      return new Promise((resolve, reject) => {
        let body = { username: username, password: password };
      
        this.http.post('http://localhost:2999/user/login', body, { headers: contentHeaders })
          .subscribe(
            response => {
              var status = (response._body === 'true')

              if (status)
                resolve(true);
              else
                reject(false);
            },
            error => {
              reject(false);
            }
          );
      });
    }

}