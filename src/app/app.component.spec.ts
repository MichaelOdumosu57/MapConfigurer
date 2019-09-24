import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import {   WordsComponent   } from './words/words.component';
import { WINDOW_PROVIDERS } from './window.service';

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
                WordsComponent
            ],
        }).compileComponents();
    }));

    beforeEach(()=>{
        fixture = TestBed.createComponent(AppComponent);
        app = fixture.debugElement.componentInstance;
    })

    it('should create the app', () => {
        expect(app).toBeTruthy();
    });

    it(`should have the right title'`, () => {
        expect(app.appTitle).toEqual('WindsorEmpire');
    });

    // it('should render title ', () => {
    //     const compiled = fixture.debugElement.nativeElement;
    //     expect(compiled.querySelector('h1').textContent).toContain('Welcome to AngularWindsorEmpire!');
    // });
});
