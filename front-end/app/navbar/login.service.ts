import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class LoginService {

    constructor(private http: Http) {}

    auth(username: string, password: string) {

      return new Promise((resolve, reject) => {
        let body = { username: username, password: password };
      
        this.http.post('http://localhost:3000/user/login', body)
          .subscribe(
            response => {
              var status = (response['_body'] === 'true')

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