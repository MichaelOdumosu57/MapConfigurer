import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { WINDOW_PROVIDERS } from '../window.service';
import { WordsService  } from '../words.service';
import { NavigationComponent } from './navigation.component';
import { compileNgModule } from '@angular/core/src/render3/jit/module';
import { Observable, of, Subject } from 'rxjs';

function numberParse(dimension){
    dimension = parseFloat(dimension.split("p")[0])
    return dimension;
}

describe('NavigationComponent', () => {
    let component: NavigationComponent;
    let fixture: ComponentFixture<NavigationComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            providers:[WINDOW_PROVIDERS],
            declarations: [ NavigationComponent ]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        // spyOn(WordsService.prototype   ,'customWordWrapReceive');
        jasmine.clock().install();
        fixture = TestBed.createComponent(NavigationComponent);
        component = fixture.componentInstance;
        component.navigationTemplateVariable = 'navigationComponentObject0'
        fixture.detectChanges();
    });

    afterEach(function() {
        jasmine.clock().uninstall();
    });
  
    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should get this.navigationCustomWordWrapElements ', () => {

    console.group(   'should get this.navigationCustomWordWrapElements '   )
        // component.ngAfterViewInit()
        
        // expect(component.access().customWordWrapReceive).toHaveBeenCalled()
        // console.log(   component.navigationMyElements._results   )
        // component.ngOnInit()
        // component.ngAfterViewInit()
        var loadEvent = new Event('load')
        component.accessWindow().dispatchEvent(   loadEvent   )

        // component.access().customWordWrapReceive({
        //     totalElements:component.navigationMyElements._results,
        //     HTMLWordElements:{
        //                         parameters:0,
        //                         templateVar:component.navigationTemplateVariable 
        //                     }
        // })        
        // jasmine.clock().tick(10000000000000);
        // console.log(   component.access()[component.navigationTemplateVariable]   )
        // console.log(   component.navigationCustomWordWrapElements   )
        // console.log(   component.access()[component.navigationTemplateVariable]    )
        for(   let i of  component.access()[component.navigationTemplateVariable].parameters[0].HTMLWordElements   ){
            // console.log(i)
            expect(   component.access().customWordWrapWordElements   ).toContain(   i[0].nativeElement.tagName   )
        }

        
        
    console.groupEnd()
    });

    it('should have all widths availble from element.style starting at 0px if the clienthHeight is greater than the font-size by a factor of 2',()=>{
        component.access().navigationMyElementsArray.push([{nativeElement:fixture.debugElement.nativeElement}, ...Array.from(   fixture.debugElement.nativeElement.children   ).map((elem)=>{
                return  {nativeElement:elem} 
            }) 
        ])
        component.access().navigationMyElements.next(   component.access().navigationMyElementsArray   )
        component.ngOnInit()
        var loadEvent = new Event('load')
        component.accessWindow().dispatchEvent(   loadEvent   )        
        for(   let i of component.access()[component.navigationTemplateVariable].parameters[0].HTMLWordElements   ){
            // console.log(i[0].nativeElement.style.width,i[1],i[0].nativeElement.clientHeight  )   

           
            if(   Math.floor(   i[0].nativeElement.clientHeight/numberParse(i[1])   ) > 1    ){


                if(   i[0].nativeElement.style.width !== '0px'   ){ //js version


                    fail()


                }


            }


        }
    })  
});
