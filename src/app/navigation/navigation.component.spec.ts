import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { WINDOW_PROVIDERS } from '../window.service';
import { WordsService  } from '../words.service';
import { NavigationComponent } from './navigation.component';
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
        component.ngOnDestroy()
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
        expect(   component.access().navigationMyElementsArray[0].length   ).toBeLessThanOrEqual(   component.access()[component.navigationTemplateVariable].styles.length   )
        console.groupEnd()
    })    

    xit('should get this.navigationCustomWordWrapElements ', () => {
        //dont need this
    console.group(   'should get this.navigationCustomWordWrapElements '   )
        // component.ngAfterViewInit()
        // expect(component.access().customWordWrapReceive).toHaveBeenCalled()
        // console.log(   component.navigationMyElements._results   )
        // component.ngOnInit()
        // component.ngAfterViewInit()
        var loadEvent = new Event('load')
        component.accessWindow().dispatchEvent(   loadEvent   )

        // console.log(   component.access()[component.navigationTemplateVariable]   )
        // console.log(   component.navigationCustomWordWrapElements   )
        // console.log(   component.access()[component.navigationTemplateVariable]    )
        for(   let i of  component.access()[component.navigationTemplateVariable].parameters[0].HTMLWordElements   ){
            // console.log(i)
            expect(   component.access().customWordWrapWordElements   ).toContain(   i[0].nativeElement.tagName   )
        }

        
        
    console.groupEnd()
    }); // dont run this we dont use it anymore

    xit('should have all widths availble from element.style starting at 0px if the clienthHeight is greater than the font-size by a factor of 2',()=>{
        //dont need
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
    })  // dont run this we dont use customWordWrap here 

    it('the bar must be the first element in navigation, this is to deal with the repositioning of anchors',async()=>{        
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

    it('reposition the navigation on window resize',() =>{ 
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
            
            if(   parseInt(i) >= 4 && parseInt(i) <= 11   ){
                // console.log(component.navigationMyElements._results[i])
                // console.log(   'DOMRECT bar width',this.window.screen.width   )
                // console.log(   'css', this.window.getComputedStyle(   this.navigationMyElements._results[i].nativeElement   ).getPropertyValue('left'))
                oldLeft.push(   component.accessWindow().getComputedStyle(   component.navigationMyElements._results[i].nativeElement   ).getPropertyValue('left')  )
            }
        }        
        var resizeEvent = new Event('resize')
        // console.log(   component.navigationMyElements._results[0].nativeElement.getBoundingClientRect().width   )
        // console.log(   component.navigationMyElements._results[0].nativeElement.style.width   )
        component.navigationMyElements._results[0].nativeElement.style.width = (   component.navigationMyElements._results[0].nativeElement.getBoundingClientRect().width    + 500   ).toString() + "px"
        // console.log(   component.navigationMyElements._results[0].nativeElement.getBoundingClientRect().width   )
        // console.log(   component.navigationMyElements._results[0].nativeElement.style.width   )
        component.accessWindow().dispatchEvent(   resizeEvent   )     
        for(   let i in component.navigationMyElements._results   ){
            if(   parseInt(i) >= 4 && parseInt(i) <= 11    ){
                // console.log(component.navigationMyElements._results[i])
                // console.log(   'DOMRECT bar width',this.window.screen.width   )
                // console.log(   'css', this.window.getComputedStyle(   this.navigationMyElements._results[i].nativeElement   ).getPropertyValue('left'))
                newLeft.push(   component.accessWindow().getComputedStyle(   component.navigationMyElements._results[i].nativeElement   ).getPropertyValue('left')   )
            }
        }
        // console.log(oldLeft,newLeft)
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

    it('should have the dropDownbox *ngIf on false initially',()=>{
        expect(component.navigationBool[12]).toMatch('false')
    })

    describe('on max inital',()=>{
     

        it('should word wrap all "HTMLWordElements"',()=>{
            for(   let i of component.navigationMyElements._results  ){
                for(   let j of component.access().customWordWrapWordElements   ){


                    if(    j === i.nativeElement.tagName   ){
    

                        // console.log(i,i.nativeElement.clientHeight, numberParse(component.accessWindow().getComputedStyle(i.nativeElement).getPropertyValue('font-size')))
                        expect(   Math.floor(   i.nativeElement.clientHeight/ numberParse(component.accessWindow().getComputedStyle(i.nativeElement).getPropertyValue('font-size'))   )   ).not.toBeGreaterThan(1)
                        break
                        
                        
                    }
    
    
                }
            }            
        })

        it('should not have the dropdown items showing at all  ',()=>{      
            component.navigationTemplateVariable = 'navigationComponentObject0';
            component.access().navigationMyElementsArray.push([{nativeElement:fixture.debugElement.nativeElement}, ...Array.from(   fixture.debugElement.nativeElement.children   ).map((elem)=>{
                    return  {nativeElement:elem} 
                }) 
            ])   
            component.access().navigationMyElements.next(   component.access().navigationMyElementsArray   )
            component.ngOnInit()
            component.ngAfterViewInit()            
            for(   let i of component.navigationMyElements._results   ){
                // console.log(i.nativeElement.id)
                if(    i.nativeElement.id.match('n_a_v_i_g_a_t_i_o_n_dropDown') && window.getComputedStyle( i.nativeElement).display !== 'none'   ){


                    fail()


                }
            }     
        })        


    })

    describe('on home anchor intersect',()=>{

        beforeEach(() => {
            component.navigationTemplateVariable = 'navigationComponentObject0';
            component.access().navigationMyElementsArray.push([{nativeElement:fixture.debugElement.nativeElement}, ...Array.from(   fixture.debugElement.nativeElement.children   ).map((elem)=>{
                    return  {nativeElement:elem} 
                }) 
            ])   
            component.access().navigationMyElements.next(   component.access().navigationMyElementsArray   )
            component.ngOnInit()
            component.ngAfterViewInit()  
            // console.log(   component.navigationMyElements._results   )    
            component.navigationMyElements._results[0].nativeElement.style.width = '800px'  
            var resizeEvent = new Event('resize')
            component.accessWindow().dispatchEvent(   resizeEvent   )              
        });   

        it('should have the dropDownBox and dropDownIcon display',()=>{
            var pass = false
            for(   let i of component.navigationMyElements._results   ){
                // console.log(i.nativeElement.id)
                // i 
                if(    (   i.nativeElement.id.match('n_a_v_i_g_a_t_i_o_n_dropDownBox') || i.nativeElement.id.match('n_a_v_i_g_a_t_i_o_n_dropDownIcon')   )  ){

                    
                    pass = true


                    if(   window.getComputedStyle( i.nativeElement).display === 'none'  ){


                        fail()
                        
                        
                    } 
                           

                }
            }     
            expect(pass).toBeTruthy()
        })

        it('should hide the dropDownMenu on the dropdown elements dblclick',()=>{
            for(   let j of [12,13]   ){
                component.navigationMyElements._results[j].nativeElement.click()
                component.navigationMyElements._results[j].nativeElement.click()
                for(   let i of component.navigationMyElements._results   ){


                    if(    (   i.nativeElement.id.match(/\bn_a_v_i_g_a_t_i_o_n_dropDown\b/)   )  ){
                        // console.log(   i.nativeElement   )
                        expect(   i.nativeElement.style.display   ).toBe('none')
                    }


                }  
            }       
        })  

        it('should display the dropDownMenu on the dropdown elements click',()=>{
            for(   let j of [12,13]   ){
                component.navigationMyElements._results[j].nativeElement.click()
                var pass = false
                for(   let i of component.navigationMyElements._results   ){


                    if(    (   i.nativeElement.id.match(/\bn_a_v_i_g_a_t_i_o_n_dropDown\b/)   )  ){
                        var pass = true
                        expect(   i.nativeElement.style.display   ).not.toBe('none')
                    }


                }         
                
                
                if(   !pass   ){


                    fail()


                }


                component.navigationMyElements._results[j].nativeElement.click()
            }
        })

        it('should hide the dropDownMenu if the webpage is resized to allow for the main nav anchors again',()=>{
            component.navigationMyElements._results[12].nativeElement.click()    
            component.navigationMyElements._results[0].nativeElement.style.width = '2000px'  
            var resizeEvent = new Event('resize')
            component.accessWindow().dispatchEvent(   resizeEvent   )           
            for(   let i of component.navigationMyElements._results   ){


                if(    (   i.nativeElement.id.match(/\bn_a_v_i_g_a_t_i_o_n_dropDown\b/)   )  ){
                    // console.log(   i.nativeElement   )
                    expect(   i.nativeElement.style.display   ).toBe('none')
                }


            }              
        })
      
    })

    describe('on dropdown title intersect ',()=>{
        beforeEach(() => {
            component.navigationTemplateVariable = 'navigationComponentObject0';
            component.access().navigationMyElementsArray.push([{nativeElement:fixture.debugElement.nativeElement}, ...Array.from(   fixture.debugElement.nativeElement.children   ).map((elem)=>{
                    return  {nativeElement:elem} 
                }) 
            ])   
            component.access().navigationMyElements.next(   component.access().navigationMyElementsArray   )
            component.ngOnInit()
            component.ngAfterViewInit()  
            // console.log(   component.navigationMyElements._results   )    
            component.navigationMyElements._results[0].nativeElement.style.width = '200px'  
            var resizeEvent = new Event('resize')
            component.accessWindow().dispatchEvent(   resizeEvent   )              
        });           

        it('should have shrunk the title along with the subtitle',()=>{

            component.navigationMyElements._results.slice(1,3).map((x,i)=>{
                // why doesnt title have a starting width
                expect(   numberParse(   x.nativeElement.style.fontSize   )   ).toBeLessThan(   numberParse(   component.access()[component.navigationTemplateVariable].metadata.defaultFontSizes[i])   )
            })            
            
        })        
    })

    
});


