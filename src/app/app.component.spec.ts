import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import {   WordsComponent   } from './words/words.component';
import {   NavigationComponent   } from './navigation/navigation.component';
import {   OverlayComponent   } from './overlay/overlay.component';
import { WINDOW_PROVIDERS } from './window.service';
import {  HttpClientModule  } from '@angular/common/http';
import { WordsService } from './words.service';
import { FooterComponent } from './footer/footer.component';
import { BlogComponent } from './blog/blog.component';
import { Component } from '@angular/core';
import { fromEvent } from 'rxjs';

describe('AppComponent', () => {
    let app: AppComponent
    let fixture;
    let wordsTestService: WordsService
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            providers:[
                WINDOW_PROVIDERS,
                WordsService
            ],
            imports: [
                RouterTestingModule,
                HttpClientModule
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
        wordsTestService = TestBed.get(WordsService)
        wordsTestService.blogNavTestStub = {}        
    }));



    it('should create the app', () => {
        fixture = TestBed.createComponent(AppComponent);
        app = fixture.debugElement.componentInstance;
        fixture.debugElement.nativeElement.style.opacity = '0'  
        fixture.detectChanges()        
        expect(app).toBeTruthy();
    });

    it(`should have the right title'`, () => {
        fixture = TestBed.createComponent(AppComponent);
        app = fixture.debugElement.componentInstance;
        fixture.debugElement.nativeElement.style.opacity = '0'  
        fixture.detectChanges()        
        expect(app.appTitle).toEqual('WindsorEmpire');
    });

    it(`should start out on the home page when the user comes to the site'`, () => {
        fixture = TestBed.createComponent(AppComponent);
        app = fixture.debugElement.componentInstance;
        fixture.debugElement.nativeElement.style.opacity = '0'  
        window.name = ''
        fixture.detectChanges()        
        expect(window.name).toEqual('/home');
    });    

    it(`on home should fire that bootstrapping resize event  to setup up the page for /home'`, (done) => {
        let cc = fromEvent(window,'resize').subscribe({
            next: () => {
                expect(true).toBeTruthy()
                done()
            },
        })
        fixture = TestBed.createComponent(AppComponent);
        fixture.debugElement.nativeElement.style.opacity = '0'  
        app = fixture.debugElement.componentInstance;        
        fixture.detectChanges()
        wordsTestService.appViewComplete.next(null)
        fixture.detectChanges()
    });      

    it(`on about should fire that bootstrapping resize event  to setup up the page for /about'`, (done) => {
        let cc = fromEvent(window,'resize').subscribe({
            next: () => {
                expect(true).toBeTruthy()
                done()
            },
        })      
        fixture = TestBed.createComponent(AppComponent);
        fixture.debugElement.nativeElement.style.opacity = '0'  
        app = fixture.debugElement.componentInstance;        
        fixture.detectChanges()        
        wordsTestService.appViewCompleteArray =[
            'navigationComponentObject0',
            'overlayComponentObject3',
            'wordsComponentObject5',
            'footerComponentObject0'
        ]    
        wordsTestService.appCurrentNav = '/about'
        fixture.detectChanges()
        wordsTestService.appViewComplete.next(null)
        fixture.detectChanges()
    });    

    it(`on services should fire that bootstrapping resize event  to setup up the page for /services'`, (done) => {
        let cc = fromEvent(window,'resize').subscribe({
            next: () => {
                expect(true).toBeTruthy()
                done()
            },
        })    
        fixture = TestBed.createComponent(AppComponent);
        fixture.debugElement.nativeElement.style.opacity = '0'  
        app = fixture.debugElement.componentInstance;        
        fixture.detectChanges()          
        wordsTestService.appViewCompleteArray = [
            'navigationComponentObject0',
            'overlayComponentObject0',
            'footerComponentObject0',
            'wordsComponentObject3',
            'wordsComponentObject4',
            // 'wordsComponentObject2',

        ]   
        wordsTestService.appCurrentNav = '/services'
        fixture.detectChanges()
        wordsTestService.appViewComplete.next(null)
        fixture.detectChanges()
    }); 
    
    it(`on projects should fire that bootstrapping resize event  to setup up the page for /projects'`, (done) => {
        let cc = fromEvent(window,'resize').subscribe({
            next: () => {
                expect(true).toBeTruthy()
                done()
            },
        })      
        fixture = TestBed.createComponent(AppComponent);
        fixture.debugElement.nativeElement.style.opacity = '0'  
        app = fixture.debugElement.componentInstance;        
        fixture.detectChanges()        
        wordsTestService.appViewCompleteArray = [
            'navigationComponentObject0',
            'overlayComponentObject1',
            'footerComponentObject0',
            'wordsComponentObject6',
            'wordsComponentObject7',
            'wordsComponentObject8'
        ] 
        wordsTestService.appCurrentNav = '/projects'
        fixture.detectChanges()
        wordsTestService.appViewComplete.next(null)
        fixture.detectChanges()
    });    

    it(`on blog should fire that bootstrapping resize event  to setup up the page for /blog'`, (done) => {
        let cc = fromEvent(window,'resize').subscribe({
            next: () => {
                expect(true).toBeTruthy()
                done()
            },
        })   
        fixture = TestBed.createComponent(AppComponent);
        fixture.debugElement.nativeElement.style.opacity = '0'  
        app = fixture.debugElement.componentInstance;        
        fixture.detectChanges()           
        wordsTestService.appViewCompleteArray = [
            'navigationComponentObject0',
            'overlayComponentObject5',
            'blogCO0',
            'footerComponentObject0'
        ] 
        wordsTestService.appCurrentNav = '/blog'
        fixture.detectChanges()
        wordsTestService.appViewComplete.next(null)
        fixture.detectChanges()
    });  
    
    it(`on contact should fire that bootstrapping resize event  to setup up the page for /contact'`, (done) => {
        let cc = fromEvent(window,'resize').subscribe({
            next: () => {
                expect(true).toBeTruthy()
                done()
            },
        })      
        fixture = TestBed.createComponent(AppComponent);
        fixture.debugElement.nativeElement.style.opacity = '0'  
        app = fixture.debugElement.componentInstance;    
        fixture.detectChanges()        
        wordsTestService.appViewCompleteArray = [
            'navigationComponentObject0',
            'overlayComponentObject2',
            'wordsComponentObject9',
            'footerComponentObject0'
        ]
        wordsTestService.appCurrentNav = '/blog'
        fixture.detectChanges()
        wordsTestService.appViewComplete.next(null)
        fixture.detectChanges()
    });     
});

