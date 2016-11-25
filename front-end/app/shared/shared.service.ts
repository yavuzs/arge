import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

/**
 * This class is added as a provider at AppComponent class.
 * For this class to fulfill its purpose, there should only
 * be one instance of it. Thus, it SHOULD NOT be added as 
 * a provider to any other class/component/module. Doing it so
 * would not break any working logic yet logic you are trying
 * to implement via this class may not work as expected.
 * To use this service, simple inject it to your class and
 * do nothing else.
 */
@Injectable()
export class SharedService {

    constructor(private http: Http) {}

    messageSource = new BehaviorSubject<string>('');

    messageString = this.messageSource.asObservable();

    setMessage(message) {
        let timer = Observable.timer(3000);

        this.messageSource.next(message);
        
        timer.subscribe(
            t => {
                this.messageSource.next('');
            }
        );
    }

}