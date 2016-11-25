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

  messageStr: string

  subscription: Subscription

  ngOnInit() {
    this.subscription = this.sharedService.messageSource.subscribe(
      value => { this.messageStr = value; }
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
