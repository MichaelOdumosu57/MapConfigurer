import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WordsComponent } from './words.component
import { WordsService  } from '../words.service';
// import {path } from 'chromedriver'


// console.log(path)


describe('WordsComponent', () => {

  let comp: WordsComponent;
  let WordsService : WordsService ;
  
  userService = new UserService()
  comp = new  WordsComponent( WordsService  )

//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       declarations: [ WordsComponent ]
//     })
//     .compileComponents();
//   }));

//   beforeEach(() => {
//     fixture = TestBed.createComponent(WordsComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

  it('should create', () => {
    expect(comp).toBeTruthy();
  });
  
  it('name property should not be undefined', () => {
    expect(component.name).not.toBe(undefined);
  });
});
