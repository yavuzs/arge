import { Component } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Subscription } from 'rxjs/Subscription';

import { SharedService } from './shared/shared.service';

export const contentHeaders = new Headers();
contentHeaders.append('Accept', 'application/json');
contentHeaders.append('Content-Type', 'application/json');

@Component({
  selector: 'arge',
  templateUrl: 'app/app.html',
  providers: [ SharedService ]
  
})

export class AppComponent {

  constructor(private sharedService: SharedService) {}



  errorStr: string

  subscription: Subscription

  ngOnInit() {
    this.subscription = this.sharedService.errorStringSource.subscribe(
      value => { this.errorStr = value; }
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
