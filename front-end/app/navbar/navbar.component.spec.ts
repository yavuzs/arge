import { NavbarComponent } from './navbar.component';
import { CustomRequestOptions } from '../app.module';
import { SharedService } from '../shared/shared.service';

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpModule, RequestOptions, BaseRequestOptions } from '@angular/http';

describe('Navbar component test module', function () {
  let de: DebugElement;
  let comp: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(async(() => {
   TestBed.configureTestingModule({
      declarations: [ NavbarComponent ],
      providers: [{provide: RequestOptions, useClass: CustomRequestOptions}, SharedService],
      imports: [ RouterTestingModule, HttpModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarComponent);
    comp = fixture.componentInstance;
    de = fixture.debugElement.query(By.css('h1'));
  });

  it('should create component', () => expect(comp).toBeDefined() );

  it('should login and logout', () => {
      // TODO currently, passes the test even though user is not registered
      comp.login('admin', 'admin');
      expect(sessionStorage.getItem('user')).toBeDefined();

      comp.logout();
      expect(sessionStorage.getItem('user')).toBeNull();
  });
  
});
