import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';

export const contentHeaders = new Headers();
contentHeaders.append('Accept', 'application/json');
contentHeaders.append('Content-Type', 'application/json');

@Injectable()
export class MainpageService {

    constructor(private http: Http) {}

    hello() {
        console.log('Heellloooo madafakaaaaa');
    }

}