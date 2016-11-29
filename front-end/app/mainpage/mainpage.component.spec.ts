import { MainpageComponent } from './mainpage.component';
import { CustomRequestOptions } from '../app.module';
import { SharedService } from '../shared/shared.service';

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpModule, RequestOptions, BaseRequestOptions } from '@angular/http';

describe('Mainpage component test module', function () {
  let de: DebugElement;
  let comp: MainpageComponent;
  let fixture: ComponentFixture<MainpageComponent>;

  beforeEach(async(() => {
   TestBed.configureTestingModule({
      declarations: [ MainpageComponent ],
      providers: [{provide: RequestOptions, useClass: CustomRequestOptions}, SharedService],
      imports: [ RouterTestingModule, HttpModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainpageComponent);
    comp = fixture.componentInstance;
    de = fixture.debugElement.query(By.css('p'));
  });

  it('should create component', () => expect(comp).toBeDefined() );

  it('should do stuff', () => expect(de.name).toBe('p') );
  
});
