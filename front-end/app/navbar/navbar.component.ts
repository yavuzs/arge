import { Component, OnInit } from '@angular/core';
import { ROUTES } from './navbar-routes.config';
import { MenuType } from './navbar.metadata';

import { LoginService } from './login.service';
import { SharedService } from '../shared/shared.service';

@Component({
//  moduleId: module.id,
  selector: 'navbar',
  templateUrl: 'app/navbar/navbar.component.html',
  styleUrls: [ 'app/navbar/navbar.component.css' ],
  providers: [ LoginService ]
})
export class NavbarComponent implements OnInit {

  public menuItems: any[];

  public brandMenu: any;

  isCollapsed: boolean = true;

  logoutStr: string = 'Logout';

  userNameStr: string = "Username"

  passwordStr: string = "Password"

  authStr: string = "Login"

  isLoggedin: boolean = sessionStorage.getItem('user') !== null;

  constructor(private loginService: LoginService ,
              private sharedService: SharedService) {}

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem.menuType !== MenuType.BRAND);
    this.brandMenu = ROUTES.filter(menuItem => menuItem.menuType === MenuType.BRAND)[0];
  }

  public get menuIcon(): string {
    return this.isCollapsed ? '☰' : '✖';
  }

  login(username, password) {
        this.loginService.auth(username, password).then(
            (response) => {
                sessionStorage.setItem('user', username);
                this.isLoggedin = true;
            },
            (error) => {
                this.sharedService.setMessage('Invalid credentials');
            });
    }

  logout() {
    sessionStorage.removeItem('user');
    this.isLoggedin = false;
  }

}
