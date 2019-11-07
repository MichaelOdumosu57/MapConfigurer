import { Component, OnInit,Input,ViewChildren,AfterViewInit,Inject, OnDestroy,ChangeDetectorRef,ChangeDetectionStrategy } from '@angular/core';
import {   WordsService   } from '../words.service';
import {   fromEvent,interval, of,from   } from 'rxjs';
import {   WINDOW   } from '../window.service';
import {   take,timeout,distinctUntilChanged   } from 'rxjs/operators';

function numberParse(   dimension:any   ){
    dimension = parseFloat(dimension.split("p")[0])
    return dimension;
}

function styleProp(   devObj   ){
    return devObj.window.getComputedStyle(   devObj.element   )
}

function getTextWidth(   devObj:{elementText:string,font:string}   ){
    var canvas = document.createElement("canvas");
    var ctx = canvas.getContext("2d");
    ctx.font = devObj.font;  // This can be set programmaticly from the element's font-style if desired
    return ctx.measureText(devObj.elementText).width;
}

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavigationComponent implements OnInit,AfterViewInit,OnDestroy  {

    @ViewChildren('myNavigationVal') navigationMyElements: any;

    constructor(
        private wordsService: WordsService,
        @Inject(WINDOW) private window: Window,
        private ref: ChangeDetectorRef
    ) { }
    
    @Input() navigationTemplateVariable:string | any;

    navigationBool:Array<any> = this.wordsService.navigationBool
    navigationStyle:Array<any> = this.wordsService.navigationStyle
    navigationVal:Array<any> = this.wordsService.navigationVal

    navigationStyleIndex:Array<any> = this.wordsService.navigationStyleIndex
    navigationBoolIndex:Array<any> = this.wordsService.navigationBoolIndex    

    navigationCustomWordWrapElements:Array<any>  = []
    
    access(){
        return this.wordsService
    }

    accessWindow(){
        return this.window
    }

    ngOnInit() {                                                                                                                                                                                                                                                                                        
        
        // console.log(   this.wordsService[this.navigationTemplateVariable]   )
        // console.log(   this.navigationTemplateVariable   )
        this.wordsService.navigationMyElements.subscribe((arr)=>{

            // console.log(   arr   )   

            // applying dynamic styles
            // console.log(   'DOMRECT bar width',this.navigationMyElements._results[0].nativeElement.getBoundingClientRect().width    )    
            // console.log(   'screen width ', this.window.screen.width   )     
            // console.log(   'document.body',   this.window.document.body.offsetWidth   )
            this.wordsService[this.navigationTemplateVariable].metadata.barDynamicWidth = this.navigationMyElements._results[0].nativeElement.getBoundingClientRect().width  - 1340
            // console.log(    this.wordsService[this.navigationTemplateVariable].metadata.barDynamicWidth    )
            for(   let i in this.wordsService[this.navigationTemplateVariable].styles   ){
                switch(parseInt(i)) {
                    case 5:
                        this.wordsService[this.navigationTemplateVariable].styles[i].css.left = (  1340* .47  + this.wordsService[this.navigationTemplateVariable].metadata.barDynamicWidth  ).toString() + "px"
                      break;
                    case 6:
                        this.wordsService[this.navigationTemplateVariable].styles[i].css.left = (  1340* .53  + this.wordsService[this.navigationTemplateVariable].metadata.barDynamicWidth ).toString() + "px"
                      break;
                    case 7:
                        this.wordsService[this.navigationTemplateVariable].styles[i].css.left = (  1340* .58  + this.wordsService[this.navigationTemplateVariable].metadata.barDynamicWidth   ).toString() + "px"
                      break;    
                    case 8:
                        this.wordsService[this.navigationTemplateVariable].styles[i].css.left = (  1340* .65   + this.wordsService[this.navigationTemplateVariable].metadata.barDynamicWidth  ).toString() + "px"
                      break;     
                    case 9:
                        this.wordsService[this.navigationTemplateVariable].styles[i].css.left = (  1340* .72  + this.wordsService[this.navigationTemplateVariable].metadata.barDynamicWidth   ).toString() + "px"
                      break;    
                    case 10:
                        this.wordsService[this.navigationTemplateVariable].styles[i].css.left = (  1340* .77   + this.wordsService[this.navigationTemplateVariable].metadata.barDynamicWidth  ).toString() + "px"
                      break;  
                    case 11:
                        this.wordsService[this.navigationTemplateVariable].styles[i].css.left = (  1340* .85  + this.wordsService[this.navigationTemplateVariable].metadata.barDynamicWidth   ).toString() + "px"
                      break;     
                    case 12:
                        this.wordsService[this.navigationTemplateVariable].styles[i].css.left = (  1340* .83   + this.wordsService[this.navigationTemplateVariable].metadata.barDynamicWidth  ).toString() + "px"
                      break;                                                                                                                            
                    default:
                      // code block
                }                    
            }
            // dealing with  missing elements
            if(   this.wordsService[this.navigationTemplateVariable].styles.length >   arr[this.navigationTemplateVariable.slice(-1)].length   ){


                this.wordsService[this.navigationTemplateVariable].stylesCopy = this.wordsService[this.navigationTemplateVariable].styles.filter((a,i)=>{


                    if(   i === 0   ){
                        

                        return true


                    }


                    else if(   i!== 0){


                        if(   this.navigationStyleIndex[0] === 0   ){


                            // console.log(  i,this.navigationBoolIndex[0]      )
                            this.navigationStyleIndex[0] =  this.navigationStyle[ this.navigationBoolIndex[0]   ].length
                            this.navigationBoolIndex[0] += 1
                            
                            
                        }
                        

                        this.navigationStyleIndex[0] -= 1


                        if(   this.navigationBool[   this.navigationBoolIndex[0] -1   ] === 'true'   ){


                            return true


                        }


                    }
                    

                    
                    
                })
                this.navigationBoolIndex[0] = 0


            }

            
            else if(   this.wordsService[this.navigationTemplateVariable].styles.length  ===  arr[this.navigationTemplateVariable.slice(-1)].length   ){
                
                // console.log('fire')
                this.wordsService[this.navigationTemplateVariable].stylesCopy = this.wordsService[this.navigationTemplateVariable].styles


            }


            // console.log(   this.navigationbool   )
            // console.log(   this.navigationStyle   )
            // console.log(   this.wordsService[this.navigationTemplateVariable].stylesCopy, arr[this.navigationTemplateVariable.slice(-1)]     )
            for(   var index in this.wordsService[this.navigationTemplateVariable].stylesCopy    ){
            
                // console.log(   arr[this.navigationTemplateVariable.slice(-1)][index].nativeElement.id   )
                if(   this.wordsService[this.navigationTemplateVariable].stylesCopy[index].override === 'true'   ){


                    for(   var prop in  this.wordsService[this.navigationTemplateVariable].stylesCopy[index].css   ){
                        // console.log(    arr[this.navigationTemplateVariable.slice(-1)][index] )
                        // console.log(   arr[this.navigationTemplateVariable.slice(-1)][index].nativeElement   )
                        arr[this.navigationTemplateVariable.slice(-1)][index].nativeElement.style[prop] = this.wordsService[this.navigationTemplateVariable].stylesCopy[index].css[prop]
                    }

                                
                }


            }
            //for some reason, ngOnInit does not fully complete before ngAfterViewInit and you must place this here
            this.navigationMyElements._results[13].nativeElement.style.top  = this.navigationMyElements._results[0].nativeElement.clientHeight.toString() + "px"
        })        
               
    }

    ngAfterViewInit(){
        // grabbing 'HTMLWordElements'

        this.wordsService.navigationLoadEvent0 = fromEvent(this.window ,'load');
        // this.wordsService[this.navigationTemplateVariable].location.parameters.push(
        //     this.wordsService[this.navigationTemplateVariable].parameters.push({
        //         fn:'wordsService.customWordWrapReceive',
        //         totalElements:this.navigationMyElements._results,
        //         HTMLWordElements:this.navigationCustomWordWrapElements
        //     }) - 1// for it returns the length of the array
        // )
        // this.wordsService.navigationLoadEventSubscription0 = this.wordsService.navigationLoadEvent0.subscribe(this.wordsService.customWordWrapReceive({
        //     totalElements:this.navigationMyElements._results,
        //     HTMLWordElements:{
        //                         parameters:this.wordsService[this.navigationTemplateVariable].location.parameters.slice(-1)[0],
        //                         templateVar:this.navigationTemplateVariable
        //                     }
        // }))
        this.wordsService.navigationResizeEvent0 = fromEvent(this.window ,'resize');
        this.wordsService.navigationResizeEventSubscription2  
        this.wordsService.navigationResizeEventSubscription0 = this.wordsService.navigationResizeEvent0.subscribe((event)=>{
        // console.group('general nav anchor repositioning resize event')
            // console.log('innerWidth',this.window.innerWidth)
            // console.log('outerWidth',this.window.outerWidth)
            // console.log('screen constant',this.window.screen.width)
            // console.log('bar width',this.navigationMyElements._results[0].nativeElement.clientWidth)
            this.navigationMyElements._results.slice(4,12).map((i:any,x:any)=>{
                // console.log(   'DOMRECT bar width',this.navigationMyElements._results[0].nativeElement.getBoundingClientRect().width   )
                // console.log(   'bar OffsetWidth', this.navigationMyElements._results[0].nativeElement.offsetWidth   )
                // console.log(   'bar clientWidth', this.navigationMyElements._results[0].nativeElement.clientWidth   )  
                // console.log(   'bar css width',   this.window.getComputedStyle(   this.navigationMyElements._results[0].nativeElement   ).width   )                              
                // console.log(   'nav left original',i.nativeElement.id,i.nativeElement.style.left   )
                i.nativeElement.style.left = (   this.navigationMyElements._results[0].nativeElement.getBoundingClientRect().width -120    ).toString() + "px"  
                // console.log(    'nav element left edited',i.nativeElement.id, i.nativeElement.style.left   )
                // console.log(   'navbar offset width',this.navigationMyElements._results[0].nativeElement.offsetWidth    )
                switch(parseInt(x)) {
                    case 0:
                        i.nativeElement.style.left = (   1340 * .47 - (1340 - this.navigationMyElements._results[0].nativeElement.getBoundingClientRect().width)   ).toString() + "px"
                        break;
                    case 1:
                        i.nativeElement.style.left = (   1340 * .53  - (1340 - this.navigationMyElements._results[0].nativeElement.getBoundingClientRect().width)    ).toString() + "px"
                        break;
                    case 2:
                        i.nativeElement.style.left = (   1340 * .58  - (1340 - this.navigationMyElements._results[0].nativeElement.getBoundingClientRect().width)    ).toString() + "px"
                        break;    
                    case 3:
                        i.nativeElement.style.left = (   1340 * .65  - (1340 - this.navigationMyElements._results[0].nativeElement.getBoundingClientRect().width)    ).toString() + "px"
                        break;     
                    case 4:
                        i.nativeElement.style.left = (   1340 * .72 - (1340 - this.navigationMyElements._results[0].nativeElement.getBoundingClientRect().width)     ).toString() + "px" 
                        break;    
                    case 5:
                        i.nativeElement.style.left = (   1340 * .77 - (1340 - this.navigationMyElements._results[0].nativeElement.getBoundingClientRect().width)     ).toString() + "px"  
                        break;
                    case 6:
                        i.nativeElement.style.left = (   1340 * .85  - (1340 - this.navigationMyElements._results[0].nativeElement.getBoundingClientRect().width)    ).toString() + "px"
                        this.ref.detectChanges()
                      break;     
                    case 7:
                        // console.log(   
                        //     getTextWidth({
                        //         elementText:this.navigationMyElements._results.slice(4,12)[6].nativeElement.innerText,
                        //         font: this.window.getComputedStyle(   this.navigationMyElements._results.slice(4,12)[6].nativeElement  ).getPropertyValue('font-size') + " Roboto"
                        //     })/2,
                        //     numberParse(   this.window.getComputedStyle(   i.nativeElement   ).width   )/2,
                        //     numberParse(   this.window.getComputedStyle(   this.navigationMyElements._results.slice(4,12)[6].nativeElement   ).left   )
                        // )
                        i.nativeElement.style.left = ( 
                            numberParse(  this.window.getComputedStyle(   this.navigationMyElements._results.slice(4,12)[6].nativeElement   ).left   )  -
                            numberParse(   this.window.getComputedStyle(   i.nativeElement   ).width   )/2 +
                            getTextWidth({
                                elementText:this.navigationMyElements._results.slice(4,12)[6].nativeElement.innerText,
                                font: this.window.getComputedStyle(   this.navigationMyElements._results.slice(4,12)[6].nativeElement  ).getPropertyValue('font-size') + " Roboto"
                            })/2                                
                        ).toString() + "px"                        
                        break;                                                                                                                            
                    default:
                      // code block
                }                         
            })            
            this.wordsService[this.navigationTemplateVariable].metadata.barDynamicWidth  = this.navigationMyElements._results[0].nativeElement.getBoundingClientRect().width  - 1340
        // console.groupEnd()
        })
        this.wordsService[this.navigationTemplateVariable].metadata.titleWidth = getTextWidth({
            elementText:this.navigationMyElements._results[1].nativeElement.innerText ,
            font: this.window.getComputedStyle(   this.navigationMyElements._results[1].nativeElement   ).getPropertyValue('font-size') + " sans-serif"
        })        
        for(   let i of this.navigationMyElements._results.slice(1,3)   ){
            this.wordsService[this.navigationTemplateVariable].metadata.defaultFontSizes.push(   this.window.getComputedStyle(i.nativeElement).fontSize   )   
        }   
        // console.log(   this.navigationMyElements._results[13],this.window.getComputedStyle(   this.navigationMyElements._results[0].nativeElement   ).getPropertyValue('height')   )
        this.wordsService.navigationResizeEventSubscription1 = this.wordsService.navigationResizeEvent0.subscribe((event)=>{
        // console.group('anchors overlapping heading resize event')

            
            if(   numberParse(   this.navigationMyElements._results[4].nativeElement.style.left   )   <=    this.wordsService[this.navigationTemplateVariable].metadata.titleWidth + 100  ){
                
                
                // console.log(   numberParse(   this.navigationMyElements._results[1].nativeElement.style.left   )   )
                this.navigationBool[12] = 'true'
                this.ref.detectChanges();
                

                if(   this.navigationMyElements._results[12].nativeElement.id === "n_a_v_i_g_a_t_i_o_n_dropDownBox"   ){


                    // console.log(     this.navigationMyElements._results[12].nativeElement.id   )
                    this.navigationMyElements._results[12].nativeElement.style.position = "absolute"
                    this.navigationMyElements._results[12].nativeElement.style.top = "50px"
                    // console.log(this.wordsService[this.navigationTemplateVariable].metadata.barDynamicWidth )
                    this.navigationMyElements._results[12].nativeElement.style.left = (  1340* .96   + this.wordsService[this.navigationTemplateVariable].metadata.barDynamicWidth  ).toString() + "px"                 
                    this.navigationMyElements._results[13].nativeElement.style.display = 'block'
                    this.navigationMyElements._results[13].nativeElement.style.left = (  1340* .963   + this.wordsService[this.navigationTemplateVariable].metadata.barDynamicWidth  ).toString() + "px"
                    
                    
                    if(   this.wordsService.navigationClickEventSubscription0 === undefined   || this.wordsService.navigationClickEventSubscription0.closed  ){


                        this.wordsService.navigationClickEvent$ = fromEvent([this.navigationMyElements._results[12].nativeElement ,this.navigationMyElements._results[13].nativeElement] ,'click');
                        this.wordsService.navigationClickEventSubscription0 = this.wordsService.navigationClickEvent$.subscribe((event)=>{
                            this.navigationMyElements._results[14].nativeElement.style.display = this.navigationMyElements._results[14].nativeElement.style.display === 'block' ? 'none' : 'block'
                        })  
                        // console.log(   this.wordsService.navigationClickEventSubscription0   )      


                    }

                   
                    // console.log(     this.navigationMyElements._results   )
                    for(   let i of this.navigationMyElements._results.slice(4,12)   ){
                        i.nativeElement.style.display = 'none'  
                    }    
                    
                    
                    if(   numberParse(   this.navigationMyElements._results[12].nativeElement.style.left   )   <=    this.wordsService[this.navigationTemplateVariable].metadata.titleWidth  + 55  ){

                        
                        // console.log('dropdownBox is interfering with the titile')
                        this.navigationMyElements._results.slice(1,3).map((x,i)=>{
                            x.nativeElement.style.fontSize =  (   numberParse(   this.wordsService[this.navigationTemplateVariable].metadata.defaultFontSizes[i]   ) * (   numberParse(   this.navigationMyElements._results[12].nativeElement.style.left   )/(   this.wordsService[this.navigationTemplateVariable].metadata.titleWidth  + 55 )  ) * .95  ).toString() + "px"
                            // console.log(   x.nativeElement.style.fontSize  )
                        })


                    }   


                    else if(   numberParse(   this.navigationMyElements._results[12].nativeElement.style.left   )   >=    this.wordsService[this.navigationTemplateVariable].metadata.titleWidth  + 55  ){

                        
                        // console.log('restore title sizes')
                        this.navigationMyElements._results.slice(1,3).map((x,i)=>{
                            x.nativeElement.style.fontSize =  this.wordsService[this.navigationTemplateVariable].metadata.defaultFontSizes[i] 
                            // console.log(   x.nativeElement.style.fontSize  )
                        })
        
        
                    }                      
                    
        
                    
                }
                // console.log(   this.navigationMyElements._results   )

            }


            else if(   numberParse(   this.navigationMyElements._results[4].nativeElement.style.left   )   >=    this.wordsService[this.navigationTemplateVariable].metadata.titleWidth + 100  ){
                

                if(   this.wordsService.navigationClickEventSubscription0 !== undefined   ){


                    if(   !this.wordsService.navigationClickEventSubscription0.closed    ){


                        this.wordsService.navigationClickEventSubscription0.unsubscribe()   
                        
                
                    }


                }  
               
                
                if(   this.navigationMyElements._results[14] !== undefined   ){


                    if(   this.navigationMyElements._results[14].nativeElement.id === 'n_a_v_i_g_a_t_i_o_n_dropDown'  ){
                        

                        this.navigationMyElements._results[14].nativeElement.style.display = 'none'


                    }
                    


                }
                
                
                if(   this.navigationMyElements._results[13] !== undefined   ){


                    if(   this.navigationMyElements._results[13].nativeElement.id === "n_a_v_i_g_a_t_i_o_n_dropDownIcon"   ){

                        // console.log('executed on condition')                        
                        // this.navigationMyElements._results[0].nativeElement.style.backgroundColor = "#FFC0CB"
                        this.navigationMyElements._results[13].nativeElement.style.display = 'none'
                        // if(   numberParse(   this.navigationMyElements._results[12].nativeElement.style.left   )   >=    this.wordsService[this.navigationTemplateVariable].metadata.titleWidth  + 55  ){

                        
                            // console.log('restore title sizes')
                            this.navigationMyElements._results.slice(1,3).map((x,i)=>{
                                x.nativeElement.style.fontSize =  this.wordsService[this.navigationTemplateVariable].metadata.defaultFontSizes[i] 
                            })
            
            
                        // }                          
                        this.navigationBool[12] = 'false'
                        this.ref.detectChanges()
                        for(   let i of this.navigationMyElements._results.slice(4,12)   ){
                            i.nativeElement.style.display = 'block'  
                        }


                    }


                }


            }

            
            // console.log(this.navigationMyElements )            
        // console.groupEnd()
        })     
        this.wordsService.navigationLoadEventSubscription1 = this.wordsService.navigationLoadEvent0.subscribe((event)=>{
        // console.group('anchors overlapping heading load event')


            if(   numberParse(   this.navigationMyElements._results[4].nativeElement.style.left   )   <=    this.wordsService[this.navigationTemplateVariable].metadata.titleWidth + 100  ){
                // this.navigationMyElements._results[0].nativeElement.style.backgroundColor = "#90EE90"
                // console.log(   numberParse(   this.navigationMyElements._results[1].nativeElement.style.left   )   )
                this.navigationBool[12] = 'true'
                this.ref.detectChanges()
                

                // console.log( this.navigationMyElements._results   )
                if(   this.navigationMyElements._results[12].nativeElement.id === "n_a_v_i_g_a_t_i_o_n_dropDownBox"   ){


                    this.wordsService.navigationLoadEventSubscription1.unsubscribe()
                    this.navigationMyElements._results[12].nativeElement.style.position = "absolute"
                    this.navigationMyElements._results[12].nativeElement.style.top = "50px"
                    // console.log(this.wordsService[this.navigationTemplateVariable].metadata.barDynamicWidth )
                    this.navigationMyElements._results[12].nativeElement.style.left = (  1340* .96   + this.wordsService[this.navigationTemplateVariable].metadata.barDynamicWidth  ).toString() + "px"
                    this.navigationMyElements._results[13].nativeElement.style.display = 'block'
                    this.navigationMyElements._results[13].nativeElement.style.top = "60px"
                    this.navigationMyElements._results[13].nativeElement.style.left = (  1340* .963   + this.wordsService[this.navigationTemplateVariable].metadata.barDynamicWidth  ).toString() + "px"
                    

                    if(   this.wordsService.navigationClickEventSubscription0 === undefined  || this.wordsService.navigationClickEventSubscription0.closed   ){


                        this.wordsService.navigationClickEvent$ = fromEvent([this.navigationMyElements._results[12].nativeElement ,this.navigationMyElements._results[13].nativeElement] ,'click');
                        this.wordsService.navigationClickEventSubscription0 = this.wordsService.navigationClickEvent$.subscribe((event)=>{
                            this.navigationMyElements._results[14].nativeElement.style.display = this.navigationMyElements._results[14].nativeElement.style.display === 'block' ? 'none' : 'block'
                        })  
                        // console.log(   this.wordsService.navigationClickEventSubscription0   )      


                    }


                    for(   let i of this.navigationMyElements._results.slice(4,12)   ){
                        i.nativeElement.style.display = 'none'  
                    }                                            


                    if(   numberParse(   this.navigationMyElements._results[12].nativeElement.style.left   )   <=    this.wordsService[this.navigationTemplateVariable].metadata.titleWidth  + 55  ){

                        
                        // console.log('dropdownBox is interfering with the titile')
                        this.navigationMyElements._results.slice(1,3).map((x,i)=>{
                            x.nativeElement.style.fontSize =  (   numberParse(   this.wordsService[this.navigationTemplateVariable].metadata.defaultFontSizes[i]   ) * (   numberParse(   this.navigationMyElements._results[12].nativeElement.style.left   )/(   this.wordsService[this.navigationTemplateVariable].metadata.titleWidth  + 55 )  ) * .95  ).toString() + "px"
                            // console.log(   x.nativeElement.style.fontSize  )
                        })


                    }            
                    
                    
                }
                

            }

            else if(   numberParse(   this.navigationMyElements._results[4].nativeElement.style.left   )   >=    this.wordsService[this.navigationTemplateVariable].metadata.titleWidth + 100  ){
                // this.navigationMyElements._results[0].nativeElement.style.backgroundColor = "#FFC0CB"
                // this.navigationBool[12] = 'false'
                this.wordsService.navigationLoadEventSubscription1.unsubscribe()


                if(   this.wordsService.navigationClickEventSubscription0 !== undefined   ){


                    if(   !this.wordsService.navigationClickEventSubscription0.closed    ){


                        this.wordsService.navigationClickEventSubscription0.unsubscribe()   
                
                
                    }


                }       
                
                
            }            


            // console.log(   this.navigationMyElements._results  )
        // console.groupEnd()    
        })
       
        

    }

    ngOnDestroy(){
        // this.wordsService.navigationLoadEventSubscription0.unsubscribe() 
        this.wordsService.navigationResizeEventSubscription0.unsubscribe()
        this.wordsService.navigationResizeEventSubscription1.unsubscribe()


        if(   !this.wordsService.navigationLoadEventSubscription1.closed   ){


            this.wordsService.navigationLoadEventSubscription1.unsubscribe()


        }
        
        
    }

}


//TEST
// test that ngOnDestory make a fn call to unsubscribe