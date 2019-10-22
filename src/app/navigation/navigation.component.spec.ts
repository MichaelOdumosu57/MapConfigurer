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

    it(   'should be known  by the dev that len of elements should not be greater than the len of styles',()=>{
        console.group('should be known  by the dev that len of elements should not be greater than the len of styles')
        component.navigationTemplateVariable = 'navigationComponentObject0';
        component.access().navigationMyElementsArray.push([{nativeElement:fixture.debugElement.nativeElement}, ...Array.from(   fixture.debugElement.nativeElement.children   ).map((elem)=>{
                return  {nativeElement:elem} 
            }) 
        ])        
        
        // console.log(   component.access().navigationMyElementsArray   )
        // console.log(   component.access()[component.navigationTemplateVariable].styles.length   )
        if(   component.access().navigationMyElementsArray[0].length > component.access()[component.navigationTemplateVariable].styles.length   ){


            expect(false).toBe(true)


        }


        console.groupEnd()
    })    

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

    it('the bar must be the first element in navigation, this is to deal with the repositioning of anchors',()=>{
        expect(component.access().navigationVal[0]).toMatch('n_a_v_i_g_a_t_i_o_n_Bar')
        expect(component.access().navigationBool[0]).toMatch('true')
        expect(component.access().navigationStyle[0].length).toBe(1)
    })

    it('initalizes the navigation anchors for repoisitiing',()=>{
        component.access().navigationMyElementsArray.push([{nativeElement:fixture.debugElement.nativeElement}, ...Array.from(   fixture.debugElement.nativeElement.children   ).map((elem)=>{
                return  {nativeElement:elem} 
            }) 
        ])
        component.access().navigationMyElements.next(   component.access().navigationMyElementsArray   )    
        component.ngOnInit()
        expect(component.access()[component.navigationTemplateVariable].metadata.barDynamicWidth).not.toBeNull()
    })

    it('repositiong the navigation on window resize',() =>{ 
        console.group('repositiong the navigation on window resize')
        var oldLeft = []
        var newLeft = []
        component.access().navigationMyElementsArray.push([{nativeElement:fixture.debugElement.nativeElement}, ...Array.from(   fixture.debugElement.nativeElement.children   ).map((elem)=>{
                return  {nativeElement:elem} 
            }) 
        ])
        component.access().navigationMyElements.next(   component.access().navigationMyElementsArray   )    
        component.ngOnInit() 
        component.ngAfterViewInit()        
        for(   let i in component.navigationMyElements._results   ){
            if(   parseInt(i) >= 4   ){
                // console.log(   'DOMRECT bar width',this.window.screen.width   )
                // console.log(   'css', this.window.getComputedStyle(   this.navigationMyElements._results[i].nativeElement   ).getPropertyValue('left'))
                oldLeft.push(   component.accessWindow().getComputedStyle(   component.navigationMyElements._results[i].nativeElement   ).getPropertyValue('left')  )
            }
        }        
        var resizeEvent = new Event('resize')
        component.navigationMyElements._results[0].nativeElement.style.width = "1670px"
        component.accessWindow().dispatchEvent(   resizeEvent   )        
        for(   let i in component.navigationMyElements._results   ){
            if(   parseInt(i) >= 4   ){
                // console.log(   'DOMRECT bar width',this.window.screen.width   )
                // console.log(   'css', this.window.getComputedStyle(   this.navigationMyElements._results[i].nativeElement   ).getPropertyValue('left'))
                newLeft.push(   component.accessWindow().getComputedStyle(   component.navigationMyElements._results[i].nativeElement   ).getPropertyValue('left')   )
            }
        }
        console.log(oldLeft,newLeft)
        for(   let i in oldLeft   ){


            if(   newLeft[i] === oldLeft[i]   ){
            
            
                fail()
            
            
            }


        }       
        console.groupEnd()     
    })

    it('should unsubscribe from the resize event which handles navigation anchor repositioning',()=>{
        // expect(component.ngOnDestroy).toHaveBeenCalled()
        component.ngOnDestroy()
        expect(component.access().navigationResizeEventSubscription0.closed).toBe(true)
    })
});
