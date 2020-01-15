import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { WINDOW_PROVIDERS } from '../window.service';
import { WordsService  } from '../words.service';
import { NavigationComponent } from './navigation.component';
import { Observable, of, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

function numberParse(dimension){
    dimension = parseFloat(dimension.split("p")[0])
    return dimension;
}

describe('NavigationComponent', () => {
    let component: NavigationComponent;
    let fixture: ComponentFixture<NavigationComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            providers:[
                WINDOW_PROVIDERS,
                HttpClient
            ],
            declarations: [ NavigationComponent ]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        // spyOn(WordsService.prototype   ,'customWordWrapReceive');
        
        jasmine.clock().install();
        fixture = TestBed.createComponent(NavigationComponent);
        component = fixture.componentInstance;
        component.navigationTemplateVariable = 'navigationComponentObject0'
        fixture.detectChanges();
    });

    afterEach(function() {
        jasmine.clock().uninstall();
        component.ngOnDestroy()
    });
  
    it('should create', () => {
        expect(component).toBeTruthy();         
    });

    
});


