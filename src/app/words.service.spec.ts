import { WordsService } from './words.service';
import { BehaviorSubject, Subject,Observable  } from 'rxjs';
import { async ,TestBed } from '@angular/core/testing';
import { HttpClientModule, HttpClient, HttpHandler } from '@angular/common/http';
import { SubjectSubscriber } from 'rxjs/internal/Subject';
import { BlogComponent } from './blog/blog.component';
import { WordsComponent } from './words/words.component';
import { WINDOW_PROVIDERS } from './window.service';
import {OverlayComponent} from './overlay/overlay.component'
import {NavigationComponent} from './navigation/navigation.component'
import {FooterComponent} from './footer/footer.component'
import {asyncData} from './customExports'

function equalLen(   devObj   ){


    if(   devObj.test.length !== devObj.actual.length   ){   fail()   }


}

describe('WordsService', () => {
    let service  :WordsService
    let behaviorSubject = null

    beforeEach(() => {
        TestBed.configureTestingModule({ 
            providers: [
                WordsService,
                WINDOW_PROVIDERS
            ],
            imports : [HttpClientModule],
            declarations: [ 
                BlogComponent,
                WordsComponent,
                OverlayComponent,
                NavigationComponent,
                FooterComponent
            ]
         });
        service = TestBed.get(WordsService);
    });


    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('should have the current navigation located at home', () => {
        expect(service.appCurrentNav).toEqual('/home');
    });
    
    it('should have MyElements for all components', () => {
        let a = new  Subject<Array<any>>();
        expect(service.overlayMyElements).toEqual(jasmine.any(Subject))
        expect(service.wordsMyElements).toEqual(jasmine.any(Subject))
        // expect(service.blogMyElements).toEqual(jasmine.any(Subject))
        expect(service.footerMyElements).toEqual(jasmine.any(Subject))
        expect(service.navigationMyElements).toEqual(jasmine.any(Subject))
    });

    describe('blogCO',()=>{
        it('should exist ', () => {
            Array.from({length:1}).map((x,i)=>{
                expect(service['blogCO'+i]).toBeTruthy()
            })
        });     

        it('should have a subComponent for the app element ', () => {
            Array.from({length:1}).map((x,i)=>{
                expect(service['blogCO'+i].quantity[0][0].val[0][0]).toEqual('b_l_o_g_App')
            })
        });  
        
        it('should have a containing area for the HTMLelements ', () => {
            Array.from({length:1}).map((x,i)=>{
                expect(service['blogCO'+i].quantity[1][0].val[0][0]).toEqual('b_l_o_g_Board')
            })
        });    
        
        it('should have load and resize  events', async () => {
            let fixture = TestBed.createComponent(BlogComponent);
            let component = fixture.componentInstance;
            component.blogTV = 'blogCO0'
            fixture.detectChanges();         
            let blogSpy = spyOn(component,'ngAfterViewInit')
            new Promise((resolve,reject)=>{
                blogSpy.and.callThrough()
                resolve()
            }).then(()=>{
                expect(service.blogLoadEvent$).toEqual(jasmine.any(Observable))
                expect(service.blogResizeEvent$).toEqual(jasmine.any(Observable))
            })

        });    
                
        it('should have a spare set of blogTitles incase the backend fails', () => {
            expect(service.blogTitles).toEqual(jasmine.any(Array))
            expect(service.blogTitles.length).toBeGreaterThan(0)
        }); 

        it('should provide the  spare set of blogTitles when the API fails', async() => {
            let postman = spyOn(service,'blogGetTitles')
            let httpClientSpy = jasmine.createSpyObj('HttpClient', ['post']);
            let myService =  new WordsService(<any> httpClientSpy)
            httpClientSpy.post.and.returnValue(asyncData(myService.blogTitles));
            myService.blogGetTitles(myService.blogTitles).subscribe((a)=>{
                expect(a).toEqual(myService.blogTitles)
            })
        });         
    
    })

    describe('wordsComponentObject',()=>{
        let amnt = 10
        it('should exist ', () => {
            Array.from({length:amnt}).map((x,i)=>{
                expect(service['wordsComponentObject'+i]).toBeTruthy()
            })
        });     

        it('should have a subComponent for the app element ', () => {
            Array.from({length:amnt}).map((x,i)=>{
                // console.log(i)
                expect(service['wordsComponentObject'+i].quantity[0][0].val[0][0]).toEqual('w_o_r_d_s_App')
            })
        });  
        
        it('should have a containing area for the HTMLelements ', () => {
            Array.from({length:amnt}).map((x,i)=>{
                // console.log(i)
                expect(service['wordsComponentObject'+i].quantity[1][0].val[0][0]).toEqual('w_o_r_d_s_Board')
            })
        });    
        
        it('should have load and resize  events', async () => {
            let fixture = TestBed.createComponent(WordsComponent);
            let component = fixture.componentInstance;
            component.wordsTemplateVariable = 'wordsComponentObject0'
            fixture.detectChanges();         
            let wordsSpy = spyOn(component,'ngAfterViewInit')
            new Promise((resolve,reject)=>{
                wordsSpy.and.callThrough()
                resolve()
            }).then(()=>{
                expect(service.wordsLoadEvent$).toEqual(jasmine.any(Observable))
                expect(service.wordsResizeEvent$).toEqual(jasmine.any(Observable))
            })

        });    
                
    
    })

    describe('overlayComponentObject',()=>{
        let amnt = 6
        it('should exist ', () => {
            Array.from({length:amnt}).map((x,i)=>{
                expect(service['overlayComponentObject'+i]).toBeTruthy()
            })
        });     

        it('should have a subComponent for the app element ', () => {
            Array.from({length:amnt}).map((x,i)=>{
                // console.log(i)
                expect(service['overlayComponentObject'+i].quantity[0][0].val[0][0]).toEqual('o_v_e_r_l_a_y_App')
            })
        });  
        
        it('should have a containing area for the HTMLelements ', () => {
            Array.from({length:amnt}).map((x,i)=>{
              //  console.log(i)
                expect(service['overlayComponentObject'+i].quantity[1][0].val[0][0]).toEqual('o_v_e_r_l_a_y_Board')
            })
        });    
        
        it('should have load and resize  events', async () => {
            let fixture = TestBed.createComponent(OverlayComponent);
            let component = fixture.componentInstance;
            component.overlayTemplateVariable = 'overlayComponentObject0'
            fixture.detectChanges();         
            let overlaySpy = spyOn(component,'ngAfterViewInit')
            new Promise((resolve,reject)=>{
                overlaySpy.and.callThrough()
                resolve()
            }).then(()=>{
                expect(service.overlayLoadEvent$).toEqual(jasmine.any(Observable))
                expect(service.overlayResizeEvent$).toEqual(jasmine.any(Observable))
            })

        });    
                
    
    })
    
    describe('navigationComponentObject',()=>{
        let amnt = 1
        it('should exist ', () => {
            Array.from({length:amnt}).map((x,i)=>{
                expect(service['navigationComponentObject'+i]).toBeTruthy()
            })
        });     

        it('should have a subComponent for the app element ', () => {
            Array.from({length:amnt}).map((x,i)=>{
              //  console.log(i)
                expect(service['navigationComponentObject'+i].quantity[0][0].val[0][0]).toEqual('n_a_v_i_g_a_t_i_o_n_App')
            })
        });  
        
        it('should have a containing area for the HTMLelements ', () => {
            Array.from({length:amnt}).map((x,i)=>{
              //  console.log(i)
                expect(service['navigationComponentObject'+i].quantity[1][0].val[0][0]).toEqual('n_a_v_i_g_a_t_i_o_n_Board')
            })
        });    
        
        it('should have load and resize  events', async () => {
            let fixture = TestBed.createComponent(NavigationComponent);
            let component = fixture.componentInstance;
            component.navigationTemplateVariable = 'navigationComponentObject0'
            fixture.detectChanges();         
            let navigationSpy = spyOn(component,'ngAfterViewInit')
            new Promise((resolve,reject)=>{
                navigationSpy.and.callThrough()
                resolve()
            }).then(()=>{
                expect(service.navigationLoadEvent$).toEqual(jasmine.any(Observable))
                expect(service.navigationResizeEvent$).toEqual(jasmine.any(Observable))
            })

        });    
                
    
    })    

    describe('footerComponentObject',()=>{
        let amnt = 1
        it('should exist ', () => {
            Array.from({length:amnt}).map((x,i)=>{
                expect(service['footerComponentObject'+i]).toBeTruthy()
            })
        });     

        it('should have a subComponent for the app element ', () => {
            Array.from({length:amnt}).map((x,i)=>{
              //  console.log(i)
                expect(service['footerComponentObject'+i].quantity[0][0].val[0][0]).toEqual('f_o_o_t_e_r_App')
            })
        });  
        
        it('should have a containing area for the HTMLelements ', () => {
            Array.from({length:amnt}).map((x,i)=>{
              //  console.log(i)
                expect(service['footerComponentObject'+i].quantity[1][0].val[0][0]).toEqual('f_o_o_t_e_r_Board')
            })
        });    
        
        it('should have load and resize  events', async () => {
            let fixture = TestBed.createComponent(FooterComponent);
            let component = fixture.componentInstance;
            component.footerTemplateVariable = 'footerComponentObject0'
            fixture.detectChanges();         
            let footerSpy = spyOn(component,'ngAfterViewInit')
            new Promise((resolve,reject)=>{
                footerSpy.and.callThrough()
                resolve()
            }).then(()=>{
                expect(service.footerLoadEvent$).toEqual(jasmine.any(Observable))
                expect(service.footerResizeEvent$).toEqual(jasmine.any(Observable))
            })

        });    
                
    
    })    

});



