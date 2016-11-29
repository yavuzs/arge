import { SignupComponent } from './signup.component';
import { CustomRequestOptions } from '../app.module';
import { SharedService } from '../shared/shared.service';

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpModule, RequestOptions, BaseRequestOptions } from '@angular/http';

describe('Signup component test module', function () {
  let de: DebugElement;
  let comp: SignupComponent;
  let fixture: ComponentFixture<SignupComponent>;

  beforeEach(async(() => {
   TestBed.configureTestingModule({
      declarations: [ SignupComponent ],
      providers: [{provide: RequestOptions, useClass: CustomRequestOptions}, SharedService],
      imports: [ RouterTestingModule, HttpModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupComponent);
    comp = fixture.componentInstance;
    de = fixture.debugElement.query(By.css('h1'));
  });

  it('should create component', () => expect(comp).toBeDefined() );

  it('should register user', () => {
      comp.save('user123', 'password', 'password', 'any@mail.address');
      // TODO function does not return anything. how to test this shit :D
  });
  
});
