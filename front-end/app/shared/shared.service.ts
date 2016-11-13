import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

export const contentHeaders = new Headers();
contentHeaders.append('Accept', 'application/json');
contentHeaders.append('Content-Type', 'application/json');

@Injectable()
export class SharedService {

    constructor(private http: Http) {}

    errorStringSource = new BehaviorSubject<string>('');

    errorString = this.errorStringSource.asObservable();

    setError(message) {
        let timer = Observable.timer(3000);

        this.errorStringSource.next(message);
        
        timer.subscribe(
            t => {
                this.errorStringSource.next('');
            }
        );
    }

}