import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { WINDOW_PROVIDERS } from '../window.service';
import { WordsService  } from '../words.service';
import { OverlayComponent } from './overlay.component';
import { Observable } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { fromEvent } from 'rxjs';

describe('OverlayComponent', () => {
  let component: OverlayComponent;
  let fixture: ComponentFixture<OverlayComponent>;
  let wordsTestService: WordsService

  function numberParse(   dimension:any   ){
    dimension = parseFloat(dimension.split("p")[0])
    return dimension;
}  

  beforeEach(async(() => {         
    TestBed.configureTestingModule({
        providers:[
            WINDOW_PROVIDERS,
            WordsService
        ],
        imports:[
            HttpClientModule
        ],  
        declarations: [
            OverlayComponent
        ]
    })
    .compileComponents();
    fixture = TestBed.createComponent(OverlayComponent); 
    component = fixture.componentInstance;
    component.overlayTemplateVariable = 'overlayComponentObject0'
    wordsTestService = TestBed.get(WordsService)  
  }));

    it('should have obersvable events ready to go',(done)=>{
        fixture.whenStable().then(() => {
            fixture.detectChanges();
            expect(wordsTestService.overlayResizeEvent$).toEqual(jasmine.any(Observable))
            expect(wordsTestService.overlayLoadEvent$).toEqual(jasmine.any(Observable))
            done()
        });          
    })

    it('should be able to use Modernizr', () => {
        expect(window.Modernizr._version).toMatch('3.8.0')
    });       

    describe('overlayComponentObject0',()=>{

        beforeEach(()=>{
            component.overlayTemplateVariable = 'overlayComponentObject0'
            // fixture.debugElement.nativeElement.style.opacity = '0'
        })

        it('should create', () => {    
            expect(component).toBeTruthy();
        });

        it('should have 1 sub components on default', () => {        
            expect(wordsTestService[component.overlayTemplateVariable].quantity[1].length).toBe(1)
        });    
        
        it('has the correct overlay image', () => {        
            expect(
                wordsTestService[component.overlayTemplateVariable].quantity[1][0].metadata.image[0].src
            ).toEqual('assets/media/IMG-1788-1.jpg')         
        });         

        it('should modify the size of the title for mobile screens', (done) => {  
            let aa = null;  
            fixture.whenStable().then(() => {
                fixture.detectChanges();
                let blogDe: DebugElement =fixture.debugElement
                let titleEl = blogDe.query(By.css('#o_v_e_r_l_a_y_Title'))
                aa = numberParse( 
                    window.getComputedStyle(titleEl.nativeElement).fontSize
                )
                let boardEl =  blogDe.query(By.css('#o_v_e_r_l_a_y_Board'))
                boardEl.nativeElement.style.width = '200px'
                let event = new Event('resize')
                window.dispatchEvent(event)      
                window.dispatchEvent(event)                             
                fixture.detectChanges()
                expect(numberParse( window.getComputedStyle(titleEl.nativeElement).fontSize)).
                toBeLessThan(aa)
                done()
            });              
        });                 



    })

    describe('overlayComponentObject1',()=>{

        beforeEach(()=>{
            component.overlayTemplateVariable = 'overlayComponentObject1'
            fixture.debugElement.nativeElement.style.opacity = '0'
        })

        it('should create', () => {    
            expect(component).toBeTruthy();
        });

        it('should have 1 sub components on default', () => {        
            expect(wordsTestService[component.overlayTemplateVariable].quantity[1].length).toBe(1)
        });
        
        
        it('has the correct overlay image', () => {        
            expect(
                wordsTestService[component.overlayTemplateVariable].quantity[1][0].metadata.image[0].src
            ).toEqual('assets/media/project-background.jpg')         
        });          

        it('should modify the size of the title for mobile screens', (done) => {  
            let aa = null;  
            fixture.whenStable().then(() => {
                fixture.detectChanges();
                let blogDe: DebugElement =fixture.debugElement
                let titleEl = blogDe.query(By.css('#o_v_e_r_l_a_y_Title'))
                aa = numberParse( 
                    window.getComputedStyle(titleEl.nativeElement).fontSize
                )
                let boardEl =  blogDe.query(By.css('#o_v_e_r_l_a_y_Board'))
                boardEl.nativeElement.style.width = '200px'
                let event = new Event('resize')
                window.dispatchEvent(event)      
                window.dispatchEvent(event)                             
                fixture.detectChanges()
                expect(numberParse( window.getComputedStyle(titleEl.nativeElement).fontSize)).
                toBeLessThan(aa)
                done()
            });              
        });                 



    })
    
    describe('overlayComponentObject2',()=>{

        beforeEach(()=>{
            component.overlayTemplateVariable = 'overlayComponentObject2'
            fixture.debugElement.nativeElement.style.opacity = '0'
        })

        it('should create', () => {    
            expect(component).toBeTruthy();
        });

        it('should have 1 sub components on default', () => {        
            expect(wordsTestService[component.overlayTemplateVariable].quantity[1].length).toBe(1)
        });
        
        it('should have  Charmonan as the font family', (done) => {  
            fixture.whenStable().then(() => {
                fixture.detectChanges();                  
                let blogDe: DebugElement =fixture.debugElement
                let     titleEl = blogDe.query(By.css('#o_v_e_r_l_a_y_Title'))
                expect(titleEl.nativeElement.style.fontFamily).toContain('Charmonman')
                done()
            });                
        });   
        
        it('has the correct overlay image', () => {        
            expect(
                wordsTestService[component.overlayTemplateVariable].quantity[1][0].metadata.image[0].src
            ).toEqual('assets/media/IMG_1391.jpg')         
        });         

        it('should modify the size of the title for mobile screens', (done) => {  
            let aa = null;  
            fixture.whenStable().then(() => {
                fixture.detectChanges();
                let blogDe: DebugElement =fixture.debugElement
                let titleEl = blogDe.query(By.css('#o_v_e_r_l_a_y_Title'))
                aa = numberParse( 
                    window.getComputedStyle(titleEl.nativeElement).fontSize
                )
                let boardEl =  blogDe.query(By.css('#o_v_e_r_l_a_y_Board'))
                boardEl.nativeElement.style.width = '200px'
                let event = new Event('resize')
                window.dispatchEvent(event)      
                window.dispatchEvent(event)                             
                fixture.detectChanges()
                expect(numberParse( window.getComputedStyle(titleEl.nativeElement).fontSize)).
                toBeLessThan(aa)
                done()
            });              
        });                 



    })    

    describe('overlayComponentObject3',()=>{

        beforeEach(()=>{
            component.overlayTemplateVariable = 'overlayComponentObject3'
            fixture.debugElement.nativeElement.style.opacity = '0'
        })

        it('should create', () => {    
            expect(component).toBeTruthy();
        });

        it('should have 1 sub components on default', () => {        
            expect(wordsTestService[component.overlayTemplateVariable].quantity[1].length).toBe(1)
        });

        it('has the correct overlay image', () => {        
            expect(
                wordsTestService[component.overlayTemplateVariable].quantity[1][0].metadata.image[0].src
            ).toEqual('assets/media/aboutMain.png')         
        });           
        
        it('at any point in resize the blend words should not wordwrap', (done) => {  
            // let aa = 500;  
            // let bb = null; 
            fixture.whenStable().then(() => {
                fixture.detectChanges();
                let blogDe: DebugElement =fixture.debugElement
                blogDe.queryAll(By.css('#o_v_e_r_l_a_y_BlendWords')).forEach((x,i)=>{
                    let y = x.nativeElement as HTMLElement

                    
                    if(
                        Math.floor(
                            numberParse(window.getComputedStyle(y).fontSize)/
                            numberParse(window.getComputedStyle(y).height)
                        ) > 1 ||
                        Math.floor(
                            numberParse(window.getComputedStyle(y).height)/
                            numberParse(window.getComputedStyle(y).fontSize)
                        ) > 1          
                    ){


                        done.fail()


                    }


                })
                expect(true).toBeTruthy()
                done()
            });              
        });                 



    }) 

    describe('overlayComponentObject4',()=>{

        beforeEach(()=>{
            component.overlayTemplateVariable = 'overlayComponentObject4'
            // fixture.debugElement.nativeElement.style.opacity = '0'
        })

        it('should create', () => {    
            expect(component).toBeTruthy();
        });

        it('should have 1 sub components on default', () => {        
            expect(wordsTestService[component.overlayTemplateVariable].quantity[1].length).toBe(1)
        });


        it('has the correct overlay image', () => {        
            expect(
                wordsTestService[component.overlayTemplateVariable].quantity[1][0].metadata.image[0].src
            ).toEqual('assets/media/IMG-1787.jpg')         
        });   

        it('at all points at least the title fontSize must be greater than the subTitle fontSize', (done) => {        
            let aa= 1500
            let event= new Event('resize')
            fixture.whenStable().then(() => {
                fixture.detectChanges();
                let blogDe: DebugElement =fixture.debugElement
                let bb = blogDe.query(By.css('#o_v_e_r_l_a_y_Board'))
                bb.nativeElement.style.width ='1800px'
                while(aa !==0){
                    aa -= 1
                    bb.nativeElement.style.width = (
                        numberParse(
                            bb.nativeElement.style.width
                        ) -1
                    ).toString() + 'px'
                    fixture.detectChanges()  
                    window.dispatchEvent(event) 
                    window.dispatchEvent(event)  
                    let cc = blogDe.queryAll(By.css('#o_v_e_r_l_a_y_Title,#o_v_e_r_l_a_y_AboutPreTitle'))
                    // console.log(
                    //     // cc[0].nativeElement as HTMLElement,
                    //     // cc[1].nativeElement as HTMLElement
                    //     cc
                    // )
                    // throw('e')
                    // console.log(
                    //     window.getComputedStyle(
                    //         cc[0].nativeElement as HTMLElement
                    //     ).fontSize,
                    //     window.getComputedStyle(
                    //         cc[1].nativeElement as HTMLElement
                    //     ).fontSize                                                
                    // )
                    expect(
                        numberParse(
                            window.getComputedStyle(
                                cc[1].nativeElement as HTMLElement
                            ).fontSize
                        )
                    ).toBeGreaterThanOrEqual(
                        numberParse(
                            window.getComputedStyle(
                                cc[0].nativeElement as HTMLElement
                            ).fontSize
                        )                        
                    )
                }
                expect(true).toBeTruthy()
                done()
            });                
        });        
        
        it('recevies data from the relative wordsCOs about how to modify Img0',(done)=>{
            let rs = [
                ['856.85px','1000px'],
                ['2680px']
            ]
            let prev = [null,null]
            fixture.whenStable().then(() => {
                fixture.detectChanges(); 
                let blogDe: DebugElement =fixture.debugElement
                let bb = blogDe.query(By.css('#o_v_e_r_l_a_y_Img0')).nativeElement as HTMLElement
                console.log(
                    window.getComputedStyle(bb).height,
                    window.getComputedStyle(bb).top
                )      
                prev[0]=window.getComputedStyle(bb).height,
                prev[1]=window.getComputedStyle(bb).top,
                wordsTestService.overlayComponentObject4.quantity[1][0].metadata.wordsCO0.next(rs[0])
                wordsTestService.overlayComponentObject4.quantity[1][0].metadata.wordsCO2.next(rs[1])  
                fixture.detectChanges()   
                expect(window.getComputedStyle(bb).height).not.toMatch(prev[0])
                expect(window.getComputedStyle(bb).top).not.toMatch(prev[1])                                   
                done()
            })            
        })

        // 3 
        xit('button should change opacity if supported on the browsers else should stay the same', (done) => {        
            fixture.whenStable().then(() => {
                fixture.detectChanges();             
                let blogDe: DebugElement =fixture.debugElement
                let bb = blogDe.query(By.css('#o_v_e_r_l_a_y_AboutLearnButton')).nativeElement as HTMLElement
                console.log(    
                    bb,
                    window.Modernizr.opacity &&
                    window.Modernizr.rgba                     
                )
                

                if(     
                    window.Modernizr.opacity &&
                    window.Modernizr.rgba
                ){
                        

                    let event = new Event('mouseenter')
                    let event$ = fromEvent(bb,'mouseenter')
                    let hoverColor = null
                    let sub = event$.subscribe((e)=>{
                        hoverColor = window.getComputedStyle(bb).backgroundColor
                        console.log(window.getComputedStyle(e.srcElement as HTMLElement).backgroundColor)
                    })
                    bb.dispatchEvent(event) 
                    fixture.detectChanges()
                    console.log(
                        window.getComputedStyle(bb).backgroundColor,
                        hoverColor
                    )


                }

                
                done()
            })
        });        

    })    
 
    describe('overlayComponentObject5',()=>{

        beforeEach(()=>{
            component.overlayTemplateVariable = 'overlayComponentObject5'
            // fixture.debugElement.nativeElement.style.opacity = '0'
        })

        it('should create', () => {    
            expect(component).toBeTruthy();
        });

        it('should have 1 sub components on default', () => {        
            expect(wordsTestService[component.overlayTemplateVariable].quantity[1].length).toBe(1)
        });

        it('has the correct overlay image', () => {        
            expect(
                wordsTestService[component.overlayTemplateVariable].quantity[1][0].metadata.image[0].src
            ).toEqual('assets/media/anton-repponen-wxxAx26SXys-unsplash.jpg')         
        });        
        
    

    })        
    
});
 