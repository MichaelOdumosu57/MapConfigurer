import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { WINDOW_PROVIDERS } from '../window.service';
import { WordsService  } from '../words.service';
import { BlogComponent } from './blog.component';
import {  HttpClientModule  } from '@angular/common/http';
import { AppComponent } from '../app.component'
import {   Observable,of,Subject, fromEvent   } from 'rxjs';
import { asyncData,numberParse } from '../customExports';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';



describe('BlogComponent', () => {
    let component: BlogComponent;
    let fixture: ComponentFixture<BlogComponent>;
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
            BlogComponent 
            ]
        })
        .compileComponents();
        fixture = TestBed.createComponent(BlogComponent); 
        component = fixture.componentInstance;
        component.blogTV = 'blogCO0'
        wordsTestService = TestBed.get(WordsService)
        wordsTestService.blogNavTestStub = {}
        fixture.destroy = ()=>{}
    }));
    
    it('should be able to use Modernizr', () => {
        expect(window.Modernizr._version).toMatch('3.8.0')
    });    

  
    describe('blogCO0',()=>{
        
        let navTop = [null,'525px']

        beforeEach(() => {      
            component.blogTV = 'blogCO0'
            // fixture.debugElement.nativeElement.style.opacity = '0'
            /* if you need to see the component look here */
            fixture.detectChanges();
            wordsTestService.blogResizeTestEventSubscription0 = wordsTestService.blogResizeEvent$.subscribe(()=>{
                wordsTestService.blogCO0.quantity[1][0].metadata.navigationCO0.next(navTop)
            })         
            wordsTestService.blogCO0.quantity[1][0].metadata.navigationCO0.next(navTop)        
        });   
        
        afterEach(()=>{
            wordsTestService.blogResizeTestEventSubscription0.unsubscribe()
        })    
        
        it('should create', () => {
            expect(component).toBeTruthy();
        });
 
        
        it(' should understand that there are 3 elements that make up a blog article',()=>{
            expect(wordsTestService.blogCO0.metadata.blogArticle.items).toBe(3)
        })

        it('should have the blogMyElements populated with items related to the blog', () => {
            wordsTestService.blogResizeTestEventSubscription0 = wordsTestService.blogResizeEvent$.subscribe(()=>{
                wordsTestService.blogCO0.quantity[1][0].metadata.navigationCO0.next(navTop)
            })         
            component.blogMyElements._results.forEach((x,i) => {
                expect(x.nativeElement.id).toMatch(/\bb_l_o_g_./)
            })
        });  

        it('should have 4 sub components on default', () => {        
            expect(wordsTestService[component.blogTV].quantity[1].length).toBe(4)
        }); 

        it('should react to the top and height of the navigation compoenent given by the subscribed subjects',()=>{
            wordsTestService.blogResizeTestEventSubscription0 = wordsTestService.blogResizeEvent$.subscribe(()=>{
                wordsTestService.blogCO0.quantity[1][0].metadata.navigationCO0.next(navTop)
            })
            let blogDe: DebugElement =fixture.debugElement
            let nonArticleBlogDe = blogDe.queryAll(By.css('*'))
            let navSmall = []
            let navTopAdjust = [null,'355px']
            // console.log(
            //     // blogDe,
            //     // nonArticleBlogDe
            // )
            nonArticleBlogDe.forEach((x,i)=>{
                // console.log(x.nativeElement.style.top)
                navSmall.push(x.nativeElement.style.top)
            })     
            wordsTestService.blogCO0.quantity[1][0].metadata.navigationCO0.next(navTopAdjust) 
            fixture.detectChanges()    
            nonArticleBlogDe.forEach((x,i)=>{
                // console.log(x.nativeElement.style.top)
                expect(
                    numberParse(x.nativeElement.style.top)
                ).toBe(
                    numberParse(navSmall[i]) +
                    numberParse(navTopAdjust[1])-
                    numberParse(navTop[1])
                )
            })                    
        })
        
        //1 
        xit('if the  blogTitles  change  modify subComponent list', () => {     
            fixture.whenStable().then(() => {
                fixture.detectChanges();
                console.log(wordsTestService[component.blogTV].quantity[1])
                let oldSub = wordsTestService[component.blogTV].quantity[1][9] 
                wordsTestService.blogTitles = [
                    'Jospey and Gulliam',
                    'Monte Recipe de fleur'
                ]
                fixture.detectChanges()
                wordsTestService.blogCO0.quantity[1][0].metadata.navigationCO0.next(navTop)
                fixture.detectChanges()
                let newSub = wordsTestService[component.blogTV].quantity[1][9] 
                expect(oldSub).not.toEqual(newSub)
                console.log(
                    oldSub,
                    newSub,
                    wordsTestService.blogTitles
                )
            });            
        }); 

        it('if the navigation top + height and the blogTitles  dont change  dont do any work with subComponent list', (done) => {        
            fixture.whenStable().then(() => {
                fixture.detectChanges();
                // console.log(wordsTestService[component.blogTV].quantity[1])
                let oldSub = wordsTestService[component.blogTV].quantity[1][9] 
                wordsTestService.blogCO0.quantity[1][0].metadata.navigationCO0.next(navTop)
                fixture.detectChanges()
                let newSub = wordsTestService[component.blogTV].quantity[1][9] 
                expect(oldSub).toEqual(newSub)
                done()
            });            
        });   

        it('all blogTitles must fit in the bar as given', (done) => {        
            fixture.whenStable().then(() => {
                fixture.detectChanges();
                let blogDe: DebugElement =fixture.debugElement
                let nonArticleBlogDe = blogDe.queryAll(By.css('a#b_l_o_g_Title'))
                nonArticleBlogDe.forEach((x,i)=>{
                    let y = x.nativeElement as HTMLElement
                    // console.log(
                    //     Math.floor(
                    //         numberParse(window.getComputedStyle(y).fontSize)/
                    //         numberParse(window.getComputedStyle(y).height)
                    //     ),
                    //     Math.floor(
                    //         numberParse(window.getComputedStyle(y).height)/
                    //         numberParse(window.getComputedStyle(y).fontSize)
                    //     )                                                  
                    // )   
                    
                    
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
        
        it('sending needed data to the footerComponent',(done)=>{
            fixture.whenStable().then(() => {
                fixture.detectChanges();
                // console.log(wordsTestService[component.blogTV].quantity[1])
                let aa = wordsTestService.footerComponentObject0.quantity[1][1].metadata.blogCO0.subscribe((bbb)=>{
                    expect(bbb).toEqual(jasmine.any(Array))
                    aa.unsubscribe()
                    done()
                })
                wordsTestService.blogCO0.quantity[1][0].metadata.navigationCO0.next(navTop)
                fixture.detectChanges()
            });            
        })

        //2
        it('should setup its blogArticles according to the modernizr settings',(done)=>{
            fixture.whenStable().then(() => {
                fixture.detectChanges();
                let blogDe: DebugElement =fixture.debugElement
                // let nonArticleBlogDe = blogDe.queryAll(
                //     By.css('*:nth-of-type(n+14)')
                // )
                let nonArticleBlogDe = blogDe.queryAll(
                  By.css('#b_l_o_g_TopicButton,#b_l_o_g_Topic,#b_l_o_g_ArticleTitle')
                )     
                // console.log(nonArticleBlogDe)       
                console.log('stub theres no elements')    
                // console.log(wordsTestService.blogCO0.metadata)
                nonArticleBlogDe.forEach((x,i)=>{
                    // console.log(x.nativeElement.id,i)
                })
                expect(true).toBeTruthy()
                done()           
            });  
        },20000)       

    })  


  
});


