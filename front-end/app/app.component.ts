import { Component } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { SharedService } from './shared/shared.service';

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
