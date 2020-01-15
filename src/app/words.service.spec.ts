import { WordsService } from './words.service';
import { BehaviorSubject, Subject,Observable  } from 'rxjs';
import { async ,TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { SubjectSubscriber } from 'rxjs/internal/Subject';
import { BlogComponent } from './blog/blog.component';
import { WINDOW_PROVIDERS } from './window.service';

function equalLen(   devObj   ){


    if(   devObj.test.length !== devObj.actual.length   ){   fail()   }


}




fdescribe('WordsService', () => {
    let service  :WordsService
    let behaviorSubject = null

    beforeEach(() => {
        TestBed.configureTestingModule({ 
            providers: [
                WordsService,
                WINDOW_PROVIDERS
            ],
            imports : [HttpClientModule],
            declarations: [ BlogComponent ]
         });
        service = TestBed.get(WordsService);
    });

    beforeEach(async(() => {
        behaviorSubject = new BehaviorSubject<boolean>(false)
    }));    

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
                
    
    })

});



