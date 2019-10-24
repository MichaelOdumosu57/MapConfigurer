import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { WINDOW_PROVIDERS } from '../window.service';
import { WordsService  } from '../words.service';
import { OverlayComponent } from './overlay.component';

describe('OverlayComponent', () => {
  let component: OverlayComponent;
  let fixture: ComponentFixture<OverlayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        providers:[WINDOW_PROVIDERS],  
        declarations: [ OverlayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OverlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

    it(   'should be known  by the dev that len of elements should not be greater than the len of styles',()=>{
        console.group('should be known  by the dev that len of elements should not be greater than the len of styles')
        component.overlayTemplateVariable = 'overlayComponentObject0';
        component.access().overlayMyElementsArray.push([{nativeElement:fixture.debugElement.nativeElement}, ...Array.from(   fixture.debugElement.nativeElement.children   ).map((elem)=>{
                return  {nativeElement:elem} 
            }) 
        ])        
        // console.log(   component.access().overlayMyElementsArray   )
        // console.log(   component.access()[component.overlayTemplateVariable].styles.length   )
        expect(   component.access().overlayMyElementsArray[0].length   ).toBeLessThanOrEqual(  component.access()[component.overlayTemplateVariable].styles.length   )
        console.groupEnd()
    })      
});
