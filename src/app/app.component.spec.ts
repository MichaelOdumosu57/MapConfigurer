import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import {   WordsComponent   } from './words/words.component';
import {   NavigationComponent   } from './navigation/navigation.component';
import {   OverlayComponent   } from './overlay/overlay.component';
import { WINDOW_PROVIDERS } from './window.service';
import { FooterComponent } from './footer/footer.component';
import { BlogComponent } from './blog/blog.component';

describe('AppComponent', () => {
    var app;
    var fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            providers:[WINDOW_PROVIDERS],
            imports: [
                RouterTestingModule
            ],
            declarations: [
                AppComponent,
                WordsComponent,
                NavigationComponent,
                OverlayComponent,
                FooterComponent,
                BlogComponent 
            ],
        }).compileComponents();
    }));

    beforeEach(()=>{
        fixture = TestBed.createComponent(AppComponent);
        fixture.childComponent = TestBed.createComponent(WordsComponent).componentInstance;
        app = fixture.debugElement.componentInstance;
        fixture.detectChanges()
    })

    it('should create the app', () => {
        expect(app).toBeTruthy();
    });

    it(`should have the right title'`, () => {
        expect(app.appTitle).toEqual('WindsorEmpire');
    });


});
