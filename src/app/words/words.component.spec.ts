import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WordsComponent } from './words.component';
// import {path } from 'chromedriver'


// console.log(path)

/*selenium setup */ //{
// var webdriver = require('selenium-webdriver'),
//     username = "WindsorAngular573",
//     accessKey = "e61047a0-b0ce-42b7-8fa6-1de7c47cea2f";
// }  /**/

describe('WordsComponent', () => {
  let component: WordsComponent;
  let fixture: ComponentFixture<WordsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WordsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
