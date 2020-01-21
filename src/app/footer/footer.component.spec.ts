import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { WINDOW_PROVIDERS } from '../window.service';
import { WordsService  } from '../words.service';
import {   Observable,of,Subject, fromEvent   } from 'rxjs';
import { FooterComponent } from './footer.component';
import {  HttpClientModule  } from '@angular/common/http';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;
  let wordsTestService: WordsService;

    beforeEach(async(() => {                               
        TestBed.configureTestingModule({
            providers:[
                WINDOW_PROVIDERS,
                WordsService,
            //   { provide: ComponentFixtureAutoDetect, useValue: true }
            ],        
            imports : [HttpClientModule],
        declarations: [ 
            FooterComponent 
            ]
        })
        .compileComponents();
        fixture = TestBed.createComponent(FooterComponent); 
        component = fixture.componentInstance;
        component.footerTemplateVariable = 'footerComponentObject0'
        wordsTestService = TestBed.get(WordsService)
        wordsTestService.blogNavTestStub = {}
        
    }));

    it('should be able to use Modernizr', () => {
        expect(window.Modernizr._version).toMatch('3.8.0')
    });  

    describe('footerComponentObject0',()=>{

        beforeEach(() => {      
            component.footerTemplateVariable = 'footerComponentObject0'
            // fixture.debugElement.nativeElement.style.opacity = '0'
            /* if you need to see the component look here */
            fixture.detectChanges();        
        });  

        it('must reposition itself from the wordsCO2', (done) => {        
            fixture.whenStable().then(() => {
                fixture.detectChanges();
                let footerDe: DebugElement =fixture.debugElement   
                let ffTop = window.getComputedStyle(
                    footerDe.nativeElement as HTMLElement
                ).top
                wordsTestService[component.footerTemplateVariable].quantity[1][1].metadata.wordsCO2.next(['2330px','540px'])
                fixture.detectChanges()
                expect(ffTop).not.toEqual(window.getComputedStyle(
                    footerDe.nativeElement as HTMLElement
                ).top)
                done()
            });            
        }); 

        it('must reposition itself from the wordsCO4', (done) => {        
            fixture.whenStable().then(() => {
                fixture.detectChanges();
                let footerDe: DebugElement =fixture.debugElement   
                let ffTop = window.getComputedStyle(
                    footerDe.nativeElement as HTMLElement
                ).top
                wordsTestService[component.footerTemplateVariable].quantity[1][1].metadata.wordsCO4.next(['2330px','540px'])
                fixture.detectChanges()
                expect(ffTop).not.toEqual(window.getComputedStyle(
                    footerDe.nativeElement as HTMLElement
                ).top)
                done()
            });            
        });   
        

        it('must reposition itself from the wordsCO5', (done) => {        
            fixture.whenStable().then(() => {
                fixture.detectChanges();
                let footerDe: DebugElement =fixture.debugElement   
                let ffTop = window.getComputedStyle(
                    footerDe.nativeElement as HTMLElement
                ).top
                wordsTestService[component.footerTemplateVariable].quantity[1][1].metadata.wordsCO5.next(['2330px','540px'])
                fixture.detectChanges()
                expect(ffTop).not.toEqual(window.getComputedStyle(
                    footerDe.nativeElement as HTMLElement
                ).top)
                done()
            });            
        });   
        
        it('must reposition itself from the wordsCO8', (done) => {        
            fixture.whenStable().then(() => {
                fixture.detectChanges();
                let footerDe: DebugElement =fixture.debugElement   
                let ffTop = window.getComputedStyle(
                    footerDe.nativeElement as HTMLElement
                ).top
                wordsTestService[component.footerTemplateVariable].quantity[1][1].metadata.wordsCO8.next(['2330px','540px'])
                fixture.detectChanges()
                expect(ffTop).not.toEqual(window.getComputedStyle(
                    footerDe.nativeElement as HTMLElement
                ).top)
                done()
            });            
        }); 
        
        it('must reposition itself from the wordsCO9', (done) => {        
            fixture.whenStable().then(() => {
                fixture.detectChanges();
                let footerDe: DebugElement =fixture.debugElement   
                let ffTop = window.getComputedStyle(
                    footerDe.nativeElement as HTMLElement
                ).top
                wordsTestService[component.footerTemplateVariable].quantity[1][1].metadata.wordsCO9.next(['2330px','540px'])
                fixture.detectChanges()
                expect(ffTop).not.toEqual(window.getComputedStyle(
                    footerDe.nativeElement as HTMLElement
                ).top)
                done()
            });            
        });    
        
        it('must reposition itself from the blogCO0', (done) => {        
            fixture.whenStable().then(() => {
                fixture.detectChanges();
                let footerDe: DebugElement =fixture.debugElement   
                let ffTop = window.getComputedStyle(
                    footerDe.nativeElement as HTMLElement
                ).top
                wordsTestService[component.footerTemplateVariable].quantity[1][1].metadata.blogCO0.next(['2330px','540px'])
                fixture.detectChanges()
                expect(ffTop).not.toEqual(window.getComputedStyle(
                    footerDe.nativeElement as HTMLElement
                ).top)
                done()
            });            
        });        

    })
});
