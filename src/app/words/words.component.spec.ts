import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { WordsComponent } from './words.component';
import { WordsService  } from '../words.service';
import { WINDOW_PROVIDERS } from '../window.service';
import { HttpClientModule } from '@angular/common/http';
import {   Observable,of,Subject, fromEvent, Subscription   } from 'rxjs';
import { asyncData,numberParse,getTextWidth } from '../customExports';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

fdescribe('WordsComponent', () => {


let component: WordsComponent;
let fixture: ComponentFixture<WordsComponent>;
let wordsTestService: WordsService
let co :string
    
       

    beforeEach(async(() => {                               
        TestBed.configureTestingModule({
            providers:[
                WINDOW_PROVIDERS,
                WordsService,
            //   { provide: ComponentFixtureAutoDetect, useValue: true }
            ],        
            imports : [HttpClientModule],
        declarations: [ 
            WordsComponent
            ]
        })
        .compileComponents();
        fixture = TestBed.createComponent(WordsComponent); 
        component = fixture.componentInstance;
        component.wordsTemplateVariable = 'navigationComponentObject0'
        wordsTestService = TestBed.get(WordsService)
        wordsTestService.blogNavTestStub = {}
    }));
    
    it('should be able to use Modernizr', () => {
        expect(window.Modernizr._version).toMatch('3.8.0')
    });

    describe('wordsComponentObject0',()=>{

        beforeEach(() => {      
            component.wordsTemplateVariable = 'wordsComponentObject0'
            fixture.debugElement.nativeElement.style.opacity = '0'  
            /* if you need to see the component look here */
            fixture.detectChanges();        
        });  

        it('should create', () => {
            expect(component).toBeTruthy();
        });

        it('should have 4 sub components on default', () => {        
            expect(wordsTestService[component.wordsTemplateVariable].quantity[1].length).toBe(4)
        });         

        it('should have all subscriptions regristered correctly', (done) => {        
            fixture.whenStable().then(() => {
                fixture.detectChanges();            
                    expect(wordsTestService.wordsResizeEventSubscription0 ).toEqual(jasmine.any(Subscription))
                    expect(wordsTestService.wordsResizeEventSubscription19).toEqual(jasmine.any(Subscription))
                
                done()
            })
        });   
        
        it('should be sending out metadata to oCO4', (done) => {        
            fixture.whenStable().then(() => {
                wordsTestService.overlayComponentObject4.quantity[1][0].metadata.wordsCO0.subscribe((data)=>{
                    expect(data).toEqual(jasmine.any(Array))
                    done()
                })
                let event = new Event('resize')
                window.dispatchEvent(event)
                fixture.detectChanges();            


            })
        });           


    })
    
    describe('wordsComponentObject1',()=>{

        beforeEach(() => {      
            component.wordsTemplateVariable = 'wordsComponentObject1'
            fixture.debugElement.nativeElement.style.opacity = '0'  
            /* if you need to see the component look here */
            fixture.detectChanges();        
        });  

        it('should create', () => {
            expect(component).toBeTruthy();
        });

        it('should have 1 sub components on default', () => {        
            expect(wordsTestService[component.wordsTemplateVariable].quantity[1].length).toBe(1)
        });         

        it('should have all subscriptions regristered correctly', (done) => {        
            fixture.whenStable().then(() => {
                fixture.detectChanges();            
                    expect(wordsTestService.wordsResizeEventSubscription1 ).toEqual(jasmine.any(Subscription))
                
                done()
            })
        });   

    })    

    describe('wordsComponentObject2',()=>{

        beforeEach(() => {      
            component.wordsTemplateVariable = 'wordsComponentObject2'
            fixture.debugElement.nativeElement.style.opacity = '0'  
            /* if you need to see the component look here */
            fixture.detectChanges();        
        });  

        it('should create', () => {
            expect(component).toBeTruthy();
        });

        it('should have 2 sub components on default', () => {        
            expect(wordsTestService[component.wordsTemplateVariable].quantity[1].length).toBe(2)
        });         

        it('should have all subscriptions regristered correctly', (done) => {        
            fixture.whenStable().then(() => {
                fixture.detectChanges();            
                    expect(wordsTestService.wordsResizeEventSubscription2 ).toEqual(jasmine.any(Subscription))
                    expect(wordsTestService.wordsResizeEventSubscription3).toEqual(jasmine.any(Subscription))
                
                done()
            })
        });   
        
        it('should be sending out metadata to oCO4', (done) => {        
            fixture.whenStable().then(() => {
                wordsTestService.overlayComponentObject4.quantity[1][0].metadata.wordsCO2.subscribe((data)=>{
                    expect(data).toEqual(jasmine.any(Array))
                    done()
                })
                let event = new Event('resize')
                window.dispatchEvent(event)
                fixture.detectChanges();            


            })
        });   
        
        it('should be sending out metadata to footerCO0', (done) => {        
            fixture.whenStable().then(() => {
                wordsTestService.footerComponentObject0.quantity[1][1].metadata.wordsCO2.subscribe((data)=>{
                    expect(data).toEqual(jasmine.any(Array))
                    done()
                })
                let event = new Event('resize')
                window.dispatchEvent(event)
                fixture.detectChanges();            


            })
        });          


    })  
    
    describe('wordsComponentObject3',()=>{

        beforeEach(() => {      
            component.wordsTemplateVariable = 'wordsComponentObject3'
            fixture.debugElement.nativeElement.style.opacity = '0'  
            /* if you need to see the component look here */
            fixture.detectChanges();        
        });  

        it('should create', () => {
            expect(component).toBeTruthy();
        });

        it('should have correct amnt sub components on default', () => {        
            expect(wordsTestService[component.wordsTemplateVariable].quantity[1].length).toBe(7)
        });         

        it('should have all subscriptions regristered correctly', (done) => {        
            fixture.whenStable().then(() => {
                fixture.detectChanges();            
                    expect(wordsTestService.wordsResizeEventSubscription4 ).toEqual(jasmine.any(Subscription))
                    expect(wordsTestService.wordsResizeEventSubscription20).toEqual(jasmine.any(Subscription))
                done()
            })
        }); 

        
        it('should be sending out metadata to wordsCO4', (done) => {        
            fixture.whenStable().then(() => {
                wordsTestService.wordsComponentObject4.quantity[1][0].metadata.wordsCO3.subscribe((data)=>{
                    expect(data).toEqual(jasmine.any(Array))
                    done()
                })
                let event = new Event('resize')
                window.dispatchEvent(event)
                fixture.detectChanges();            


            })
        });         
          

    })
    
    describe('wordsComponentObject4',()=>{

        beforeEach(() => {      
            component.wordsTemplateVariable = 'wordsComponentObject4'
            fixture.debugElement.nativeElement.style.opacity = '0'  
            /* if you need to see the component look here */
            fixture.detectChanges();        
        });  

        it('should create', () => {
            expect(component).toBeTruthy();
        });

        it('should have correct amnt sub components on default', () => {        
            expect(wordsTestService[component.wordsTemplateVariable].quantity[1].length).toBe(4)
        });         

        it('should have all subscriptions regristered correctly', (done) => {        
            fixture.whenStable().then(() => {
                fixture.detectChanges();            
                    expect(wordsTestService.wordsResizeEventSubscription5 ).toEqual(jasmine.any(Subscription))
                    expect(wordsTestService.wordsResizeEventSubscription6).toEqual(jasmine.any(Subscription))
                done()
            })
        }); 

        
        it('should be  receiving metadata from wordsCO3', (done) => {        
            fixture.whenStable().then(() => {
                let wordsDe = fixture.debugElement.nativeElement as HTMLElement
                let wordsDeTop = window.getComputedStyle(wordsDe).top
                wordsTestService[component.wordsTemplateVariable].quantity[1][0].metadata.wordsCO3.next(['5px','44px'])
                fixture.detectChanges();     
                expect(wordsDeTop).not.toEqual( window.getComputedStyle(wordsDe).top)       
                done()
            })
        });         
          

    })   
    
    describe('wordsComponentObject5',()=>{

        beforeEach(() => {      
            component.wordsTemplateVariable = 'wordsComponentObject5'
            fixture.debugElement.nativeElement.style.opacity = '0'  
            /* if you need to see the component look here */
            fixture.detectChanges();        
        });  

        it('should create', () => {
            expect(component).toBeTruthy();
        });

        it('should have correct amnt sub components on default', () => {        
            expect(wordsTestService[component.wordsTemplateVariable].quantity[1].length).toBe(6)
        });         

        it('should have all subscriptions regristered correctly', (done) => {        
            fixture.whenStable().then(() => {
                fixture.detectChanges();            
                    expect(wordsTestService.wordsResizeEventSubscription7 ).toEqual(jasmine.any(Subscription))
                    expect(wordsTestService.wordsResizeEventSubscription8).toEqual(jasmine.any(Subscription))
                done()
            })
        }); 

        
        it('should be sending out metadata to wordsCO5', (done) => {        
            fixture.whenStable().then(() => {
                wordsTestService.footerComponentObject0.quantity[1][1].metadata.wordsCO5.subscribe((data)=>{
                    expect(data).toEqual(jasmine.any(Array))
                    done()
                })
                let event = new Event('resize')
                window.dispatchEvent(event)
                fixture.detectChanges();            


            })
        });         
          

    }) 
    
    describe('wordsComponentObject6',()=>{

        beforeEach(() => {      
            component.wordsTemplateVariable ='wordsComponentObject6'
            fixture.debugElement.nativeElement.style.opacity = '0'  
            /* if you need to see the component look here */
            fixture.detectChanges();        
        });  

        it('should create', () => {
            expect(component).toBeTruthy();
        });

        it('should have correct amnt sub components on default', () => {        
            expect(wordsTestService[component.wordsTemplateVariable].quantity[1].length).toBe(3)
        });         

        it('should have all subscriptions regristered correctly', (done) => {        
            fixture.whenStable().then(() => {
                fixture.detectChanges();          
                expect(wordsTestService.wordsResizeEventSubscription9).toEqual(jasmine.any(Subscription))
                done()
            })
        }); 

        
       
          

    })   
    
    describe( 'wordsComponentObject7',()=>{

        beforeEach(() => {      
            component.wordsTemplateVariable =  'wordsComponentObject7'
            fixture.debugElement.nativeElement.style.opacity = '0'  
            /* if you need to see the component look here */
            fixture.detectChanges();        
        });  

        it('should create', () => {
            expect(component).toBeTruthy();
        });

        it('should have correct amnt sub components on default', () => {        
            expect(wordsTestService[component.wordsTemplateVariable].quantity[1].length).toBe(3)
        });         

        it('should have all subscriptions regristered correctly', (done) => {        
            fixture.whenStable().then(() => {
                fixture.detectChanges();            
                    expect(wordsTestService.wordsResizeEventSubscription11 ).toEqual(jasmine.any(Subscription))
                done()
            })
        }); 

        
       
          

    })      
    
    describe( 'wordsComponentObject8',()=>{

        beforeEach(() => {      
            component.wordsTemplateVariable =  'wordsComponentObject8'
            fixture.debugElement.nativeElement.style.opacity = '0'  
            /* if you need to see the component look here */
            fixture.detectChanges();        
        });  

        it('should create', () => {
            expect(component).toBeTruthy();
        });

        it('should have correct amnt sub components on default', () => {        
            expect(wordsTestService[component.wordsTemplateVariable].quantity[1].length).toBe(3)
        });         

        it('should have all subscriptions regristered correctly', (done) => {        
            fixture.whenStable().then(() => {
                fixture.detectChanges();            
                expect(wordsTestService.wordsResizeEventSubscription15 ).toEqual(jasmine.any(Subscription))
                expect(wordsTestService.wordsResizeEventSubscription16 ).toEqual(jasmine.any(Subscription))
                done()
            })
        }); 

        it('should be sending out metadata to footerCO0', (done) => {        
            fixture.whenStable().then(() => {
                wordsTestService.footerComponentObject0.quantity[1][1].metadata.wordsCO8.subscribe((data)=>{
                    expect(data).toEqual(jasmine.any(Array))
                    done()
                })
                let event = new Event('resize')
                window.dispatchEvent(event)
                fixture.detectChanges();            


            })
        });         

        
       
          

    })
    
    describe( 'wordsComponentObject9',()=>{

        beforeEach(() => {      
            component.wordsTemplateVariable =  'wordsComponentObject9'
            fixture.debugElement.nativeElement.style.opacity = '0'  
            /* if you need to see the component look here */
            fixture.detectChanges();        
        });  

        it('should create', () => {
            expect(component).toBeTruthy();
        });

        it('should have correct amnt sub components on default', () => {        
            expect(wordsTestService[component.wordsTemplateVariable].quantity[1].length).toBe(5)
        });         

        it('should have all subscriptions regristered correctly', (done) => {        
            fixture.whenStable().then(() => {
                fixture.detectChanges();            
                expect(wordsTestService.wordsResizeEventSubscription17 ).toEqual(jasmine.any(Subscription))
                expect(wordsTestService.wordsResizeEventSubscription18 ).toEqual(jasmine.any(Subscription))
                done()
            })
        }); 

        it('should be sending out metadata to footerCO0', (done) => {        
            fixture.whenStable().then(() => {
                wordsTestService.footerComponentObject0.quantity[1][1].metadata.wordsCO9.subscribe((data)=>{
                    expect(data).toEqual(jasmine.any(Array))
                    done()
                })
                let event = new Event('resize')
                window.dispatchEvent(event)
                fixture.detectChanges();            


            })
        });         

        
       
          

    })    
});
