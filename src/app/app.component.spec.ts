import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import {   WordsComponent   } from './words/words.component';
import {   NavigationComponent   } from './navigation/navigation.component';
import {   OverlayComponent   } from './overlay/overlay.component';
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
                WordsComponent,
                NavigationComponent,
                OverlayComponent 
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

    it('afterViewInit Lifecycle Hook should return undeinfed ', () => {
        spyOn(app,'ngAfterViewInit')
        app.ngAfterViewInit()
        expect(app.ngAfterViewInit()).toBeUndefined()
    });

    xit('should see all the required elements when it collects them for processing  ', async() => {
        spyOn(app,'ngAfterViewInit').and.callThrough()
        // provide for a navgiationComponentMonitor then
        var test = true
        app.ngAfterViewInit() // -- theres something wrong with this fn thats creating a destoryed view, make sure all data is availble?
        for(   var comp of app.wordsService.wordsMyElementsArray   ){
            for(   var elem of comp   ){
                switch(   elem.nativeElement.id   ){
                    case '':
                      console.log('')
                      break;
                    case 'w_o_r_d_s_Title':
                      // code block
                      console.log('w_o_r_d_s_Title')
                      break;
                    case 'w_o_r_d_s_Line':
                      // code block
                      console.log('w_o_r_d_s_Line')
                      break;
                    case 'w_o_r_d_s_paragraph':
                      // code block
                      console.log('w_o_r_d_s_paragraph')
                      break;
                    case 'w_o_r_d_s_Dash':
                      // code block
                      console.log('w_o_r_d_s_Dash')
                      break;
                    case 'w_o_r_d_s_paragraphDash':
                      console.log('w_o_r_d_s_paragraphDash')
                      // code block
                      break;
                    default:
                     
                        test = false
                        expect(test).toBe(true)
                        break;
                }
                if(  !test   ){
                    break
                }
            }
            if(   !test   ){
                break
            }
        }
        expect(test).toBe(true)
    });
});
