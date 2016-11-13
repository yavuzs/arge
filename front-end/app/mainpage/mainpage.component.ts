import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { MainpageService } from './mainpage.service';

@Component({
  selector: 'arge',
  templateUrl: 'app/mainpage/mainpage.html',
  providers: [MainpageService]
})

export class MainpageComponent {
    constructor(private mainpageService: MainpageService,
        private router: Router) {}

    welcome() {
        this.mainpageService.hello();
    }

    redirectTo(path: string) {
        this.router.navigateByUrl(path);
    }
}
