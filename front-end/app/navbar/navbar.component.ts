import { Component, OnInit } from '@angular/core';
import { ROUTES } from './navbar-routes.config';
import { MenuType } from './navbar.metadata';

@Component({
//  moduleId: module.id,
  selector: 'navbar',
  templateUrl: 'app/navbar/navbar.component.html',
  styleUrls: [ 'app/navbar/navbar.component.scss' ]
})
export class NavbarComponent implements OnInit {
  public menuItems: any[];
  public brandMenu: any;
  isCollapsed = true;
  logoutStr:string = 'Logout';

  constructor() {}

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem.menuType !== MenuType.BRAND);
    this.brandMenu = ROUTES.filter(menuItem => menuItem.menuType === MenuType.BRAND)[0];
  }

  public get menuIcon(): string {
    return this.isCollapsed ? '☰' : '✖';
  }

  logout() {
    sessionStorage.removeItem('user');
  }

}
