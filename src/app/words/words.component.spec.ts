import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { WordsComponent } from './words.component';
import { WordsService  } from '../words.service';

xdescribe('WordsComponent', () => {

  let comp: WordsComponent;
  let wordsService : WordsService;
  
  wordsService = new  WordsService()
//   comp = new  WordsComponent(   wordsService  )

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

  // it('should create', () => {
  //   expect(comp).toBeTruthy();
  // });
  
  // it('name property should not be undefined', () => {
  //   expect(comp.name).not.toBe(undefined);
  // });
});
