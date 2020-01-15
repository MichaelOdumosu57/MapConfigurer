import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { WordsComponent } from './words.component';
import { WordsService  } from '../words.service';
import { WINDOW_PROVIDERS } from '../window.service';
import { Observable, of, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

describe('WordsComponent', () => {

//   let comp: WordsComponent;
//   let wordsService : WordsService;
  
//   wordsService = new  WordsService()
//   comp = new  WordsComponent(   wordsService  )

    var fixture: ComponentFixture<WordsComponent>
    var component: any;
       

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            providers:[
                WINDOW_PROVIDERS,
                HttpClient
            ],
            declarations: [ WordsComponent ]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(WordsComponent);
        component = fixture.debugElement.componentInstance;
        fixture.detectChanges();
    });


    it('should create the component', () => {
        expect(component).toBeTruthy();
    });

 
});
