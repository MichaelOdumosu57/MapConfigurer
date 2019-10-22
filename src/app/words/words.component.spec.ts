import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { WordsComponent } from './words.component';
import { WordsService  } from '../words.service';
import { WINDOW_PROVIDERS } from '../window.service';
import { compileNgModule } from '@angular/core/src/render3/jit/module';
import { Observable, of, Subject } from 'rxjs';

describe('WordsComponent', () => {

//   let comp: WordsComponent;
//   let wordsService : WordsService;
  
//   wordsService = new  WordsService()
//   comp = new  WordsComponent(   wordsService  )

    var fixture: ComponentFixture<WordsComponent>
    var component: any;
       

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            providers:[WINDOW_PROVIDERS],
            declarations: [ WordsComponent ]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(WordsComponent);
        component = fixture.debugElement.componentInstance;
        fixture.detectChanges();
    });

    it(   'should be known  by the dev that len of elements should not be greater than the len of styles',()=>{
        component.wordsTemplateVariable = 'wordsComponentObject0';
        component.wordsService.wordsMyElementsArray.push([{nativeElement:fixture.debugElement.nativeElement}, ...Array.from(   fixture.debugElement.nativeElement.children   ).map((elem)=>{
                return  {nativeElement:elem} 
            }) 
        ])        
        
        if(   component.wordsService.wordsMyElementsArray[0].length > component.wordsService[component.wordsTemplateVariable].styles.length   ){


            expect(false).toBe(true)


        }


    })
      
    it('should be assigning css values approiately to all elements', () => {
        // angular seems to already run ngOnInit and everything for the component, but this is not unit tested thats why were taking the values and unit testing them here
        // might have to make a loop for each component instance you have in your app
        var test = true;
        component.wordsTemplateVariable = 'wordsComponentObject0';
        component.wordsService.wordsMyElementsArray.push([{nativeElement:fixture.debugElement.nativeElement}, ...Array.from(   fixture.debugElement.nativeElement.children   ).map((elem)=>{
                return  {nativeElement:elem} 
            }) 
        ])
        component.wordsService.wordsMyElements.next(   component.wordsService.wordsMyElementsArray   )
        component.ngOnInit()
        // console.log(   component.wordsService[component.wordsTemplateVariable]   )
        for(   var index in component.wordsService.wordsMyElementsArray[0]   ){ // for 0 in wordsComponentObject0
            // console.log(    component.wordsService.wordsMyElementsArray[0][index].nativeElement.style   )
            // console.log(    component.wordsService[component.wordsTemplateVariable].styles[index].css   )
            if(    component.wordsService[component.wordsTemplateVariable].stylesCopy[index].css !== undefined &&  component.wordsService[component.wordsTemplateVariable].stylesCopy[index].override === 'true'   ){


                for(   var prop of component.wordsService.wordsMyElementsArray[0][index].nativeElement.style   ){
                    
                    
                    // console.log(component.wordsService.wordsMyElementsArray[0][index].nativeElement.style[prop])    
                    // console.log(component.wordsService[component.wordsTemplateVariable].stylesCopy[index].css[prop]) 
                    if(    component.wordsService.wordsMyElementsArray[0][index].nativeElement.style[prop] !== component.wordsService[component.wordsTemplateVariable].stylesCopy[index].css[prop]   ){


                        test = false;
                        expect(test).toBe(true)
                        break


                    }


                }


            }
            
            
            if(   !test   ){
                break
            }
        }        
        expect(test).toBe(true)
    });

    it('should create the component', () => {
        expect(component).toBeTruthy();
    });

    it('should fire the wordsService.wordsRepositionDashes fn on Words Component  AfterViewInit lifecycle hook',()=>{    
        spyOn( component.wordsService,'wordsRepositionDashes')
        component.ngAfterViewInit()
        expect(component.wordsService.wordsRepositionDashes).toHaveBeenCalled()
    })



    
});
