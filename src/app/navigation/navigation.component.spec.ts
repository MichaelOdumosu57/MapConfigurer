import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { WINDOW_PROVIDERS } from '../window.service';
import { WordsService  } from '../words.service';
import { NavigationComponent } from './navigation.component';
import {  HttpClientModule  } from '@angular/common/http';
import {   Observable,of,Subject, fromEvent   } from 'rxjs';
import { asyncData,numberParse,getTextWidth } from '../customExports';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';



describe('NavigationComponent', () => {
    let component: NavigationComponent;
    let fixture: ComponentFixture<NavigationComponent>;
    let wordsTestService: WordsService

    beforeEach(async(() => {                               
        TestBed.configureTestingModule({
            providers:[
                WINDOW_PROVIDERS,
                WordsService,
            //   { provide: ComponentFixtureAutoDetect, useValue: true }
            ],        
            imports : [HttpClientModule],
        declarations: [ 
            NavigationComponent
            ]
        })
        .compileComponents();
        fixture = TestBed.createComponent(NavigationComponent); 
        component = fixture.componentInstance;
        component.navigationTemplateVariable = 'navigationComponentObject0'
        wordsTestService = TestBed.get(WordsService)
        wordsTestService.blogNavTestStub = {}
        fixture.destroy = ()=>{}
    }));
    
    it('should be able to use Modernizr', () => {
        expect(window.Modernizr._version).toMatch('3.8.0')
    });

    describe('navigationComponentObject0',()=>{

        beforeEach(() => {      
            component.navigationTemplateVariable = 'navigationComponentObject0'
            fixture.debugElement.nativeElement.style.opacity = '0'  
            /* if you need to see the component look here */
            fixture.detectChanges();        
        });  

        it('should create', () => {
            expect(component).toBeTruthy();
        });        

        xit('PROTRACTOR should always hide the dropdown when navigation to another page',()=>{
            
        })

        it('should show the dropdown when the dropdown icon is clicked',(done)=>{
            fixture.whenStable().then(() => {
                fixture.detectChanges();
                let a = 0
                let event = new Event('click')
                let cc = wordsTestService.navigationClickEvent$.subscribe((e)=>{
                    a += 1
                })
                let navDe = fixture.debugElement
                let box = navDe.queryAll(By.css('*'))[12].nativeElement as HTMLElement 
                box.dispatchEvent(event)
                fixture.detectChanges()
                navDe.queryAll(By.css('*')).slice(4,11).forEach((x,i)=>{
                    let y = x.nativeElement as HTMLElement
                    expect( window.getComputedStyle(y).display  ).toEqual('block')
                })
                done()           
            })              
        })          

        it('should have the dropdown box show up when small enough',(done)=>{
            fixture.whenStable().then(() => {
                let navDe = fixture.debugElement
                let box = navDe.queryAll(By.css('*'))[12].nativeElement as HTMLElement 
                let icon = navDe.queryAll(By.css('*'))[13].nativeElement as HTMLElement 
                let board = navDe.query(By.css('#n_a_v_i_g_a_t_i_o_n_Board')).nativeElement as HTMLElement
                board.style.width = '200px'
                let event = new Event('resize')
                window.dispatchEvent(event)
                fixture.detectChanges()
                expect( window.getComputedStyle(box).display   ).not.toMatch('none')
                expect( window.getComputedStyle(icon).display   ).not.toMatch('none')
                done()
            });                
        })        

        it('should have click events attached to the navigation boxes',(done)=>{
            fixture.whenStable().then(() => {
                fixture.detectChanges();
                let a = 0
                let event = new Event('click')
                let cc = wordsTestService.navigationClickEvent$.subscribe((e)=>{
                    a += 1
                })
                let navDe = fixture.debugElement
                let box = navDe.queryAll(By.css('*'))[12].nativeElement as HTMLElement 
                let icon = navDe.queryAll(By.css('*'))[13].nativeElement as HTMLElement 
                box.dispatchEvent(event)
                icon.dispatchEvent(event)
                fixture.detectChanges()
                expect(a).toBe(2)
                done()           
            });              
        })   
        
        it('should have the navigationElementHoldingBay populated',(done)=>{
            fixture.whenStable().then(() => {
                expect(wordsTestService.navigationElementHoldingBay.length).toBeGreaterThan(0)
                done()
            });              
        })  
        
        it('the nav items should not least overlap',(done)=>{
            fixture.whenStable().then(() => {
                let navDe = fixture.debugElement
                let nn = navDe.queryAll(By.css('*')).slice(4,11)
                let event = new Event('resize')
                for(   var i of Array(3)   ){
                    window.dispatchEvent(event)
                    fixture.detectChanges()
                }
                nn.forEach((x,i)=>{
                    let bb = x.nativeElement as HTMLElement
                    

                    if(i !== 0){
                        

                        expect(
                            numberParse(
                                window.getComputedStyle(bb).left
                            )-
                            numberParse(
                                window.getComputedStyle(nn[i-1].nativeElement as HTMLElement).left
                            )
                        ).toBeGreaterThan(
                            getTextWidth({
                                elementText:bb.innerText,
                                font:window.getComputedStyle(bb).fontSize +
                                " " +
                                window.getComputedStyle(bb).fontFamily
                            })
                        )
                    }

                })
                done()
            });              
        })          

    })    
});


