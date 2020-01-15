import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { WINDOW_PROVIDERS } from '../window.service';
import { WordsService  } from '../words.service';
import { OverlayComponent } from './overlay.component';
import { BehaviorSubject  } from 'rxjs';
import { HttpClient } from '@angular/common/http';

describe('OverlayComponent', () => {
  let component: OverlayComponent;
  let fixture: ComponentFixture<OverlayComponent>;
  let behaviorSubject = null;

  function numberParse(   dimension:any   ){
    dimension = parseFloat(dimension.split("p")[0])
    return dimension;
}  

  beforeEach(async(() => {         
    behaviorSubject = new BehaviorSubject<boolean>(false)
    TestBed.configureTestingModule({
        providers:[WINDOW_PROVIDERS,HttpClient],  
        declarations: [ OverlayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OverlayComponent);
    component = fixture.componentInstance;
    component.overlayTemplateVariable = 'overlayComponentObject4';
    fixture.detectChanges();
  });

    it('should create', () => {    
        expect(component).toBeTruthy();
    });

    // it('should pass till we do something about this', () => {
    //     // expect(component).toBeTruthy();
    // });    

 
});
