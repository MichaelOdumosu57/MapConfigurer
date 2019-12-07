import { Component, OnInit,Input,ViewChildren,AfterViewInit,Inject, OnDestroy,ChangeDetectorRef,ChangeDetectionStrategy } from '@angular/core';
import {   WordsService   } from '../words.service';
import {   fromEvent,interval, of,from, Observable   } from 'rxjs';
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
    
    // access(){
    //     return this.wordsService
    // }

    // accessWindow(){
    //     return this.window
    // }

    ngOnInit() {
        console.log(this.navigationTemplateVariable+ '  ngOnInit fires one remount')
    }

    ngAfterViewInit(){
        console.log( this.navigationTemplateVariable+ ' ngAfterViewInit fires one remount')        
        this.wordsService.navigationLoadEvent$ = fromEvent(this.window ,'load');
        this.wordsService.navigationResizeEvent$ = fromEvent(this.window ,'resize');    

        if(   this.navigationTemplateVariable === 'navigationComponentObject0'    ){


            let zChild =[{
                element: this.window.document.querySelector('app-navigation[ng-reflect-navigation-template-variable='+this.navigationTemplateVariable+']'),
                style:this.wordsService[this.navigationTemplateVariable].quantity[0][0].ngStyle[0][0],
                innerText:null,
                bool:this.wordsService[this.navigationTemplateVariable].quantity[0][0].bool[0][0]
            }]          
            let zCheckpoint = []                         
            this.navigationMyElements._results.map((x:any,i:any)=>{


                if(   x.nativeElement.id === 'n_a_v_i_g_a_t_i_o_n_Board'   ){
                    zCheckpoint.push(i)
                }                        
                
            
            })
            console.log(zCheckpoint)
            let zGrid = {
                a:0, 
                b:0, 
                c:0,
                d:0,
                e:null,
                f:null
            }                  
            zCheckpoint.map((y:any,j:any)=>{
                // console.group('associated')
                // console.log(    this.wordsMyElements._results.slice(y,zCheckpoint[j+1])   )
                zGrid.a = 0;
                (function(qq){
                    return qq.navigationMyElements._results.length === 1 ? qq.navigationMyElements._results : qq.navigationMyElements._results.slice(y,zCheckpoint[j+1])
                })(this).map((x:any,i:any)=>{     
                    // console.log(   x.nativeElement.id   )
                    // console.log(   this.wordsService[this.wordsTemplateVariable].quantity[1][j].val  )

                    while(   
                        this.wordsService[this.navigationTemplateVariable].quantity[1][j].quantity[zGrid.a][zGrid.b] === undefined &&   
                        zGrid.b +1 > this.wordsService[this.navigationTemplateVariable].quantity[1][j].quantity[zGrid.a].length
                    ){
                        // console.log(   this.wordsService[this.wordsTemplateVariable].quantity[1][j].quantity[zGrid.a]   )
                        zGrid.a +=1
                        // debugger                                
                    }
                    // console.log(   
                    //     this.wordsService[this.wordsTemplateVariable].quantity[1][j].quantity[zGrid.a],   
                    //     zChild,
                    //     zGrid
                    // )


                    if(   x.nativeElement.id === this.wordsService[this.navigationTemplateVariable].quantity[1][j].val[zGrid.a][zGrid.b]   &&
                        (   
                            this.wordsService[this.navigationTemplateVariable].quantity[1][j].bool[zGrid.a][zGrid.b] === 'true' ||
                            this.wordsService[this.navigationTemplateVariable].quantity[1][j].bool[zGrid.a][zGrid.b] === 'link' ||
                            this.wordsService[this.navigationTemplateVariable].quantity[1][j].bool[zGrid.a][zGrid.b] === 'icon' ||
                            this.wordsService[this.navigationTemplateVariable].quantity[1][j].bool[zGrid.a][zGrid.b] === 'button' 
                        )    
                    ){               
                        
                        
                        zChild.push({
                            element:x.nativeElement,
                            style:this.wordsService[this.navigationTemplateVariable].quantity[1][j].ngStyle[zGrid.a][zGrid.b],
                            innerText: this.wordsService[this.navigationTemplateVariable].quantity[1][j].text[zGrid.a][zGrid.b],
                            bool:this.wordsService[this.navigationTemplateVariable].quantity[1][j].bool[zGrid.a][zGrid.b]
                        })
                        

                        if(   this.wordsService[this.navigationTemplateVariable].quantity[1][j].quantity[zGrid.a][zGrid.b+1] === undefined   ){


                            zGrid.a += 1
                            zGrid.b = 0       
                            
                            
                        }


                        
                        else if(   true   ){


                            zGrid.b += 1       
                            
                            
                        }


                    }
                    
                    
                })
                // console.groupEnd()
            })
            // see what happens when app-navigation top is made 0px
            console.log(   zChild   ) 
            this.wordsService[this.navigationTemplateVariable].metadata.titleWidth = getTextWidth({
                elementText:zChild[2].innerText ,
                font: this.window.getComputedStyle(   zChild[2].element   ).getPropertyValue('font-size') + 
                " " +
                this.window.getComputedStyle(   zChild[2].element ).getPropertyValue('font-family') 
            })        
            for(   let i of zChild.slice(2,4)   ){
                this.wordsService[this.navigationTemplateVariable].metadata.defaultFontSizes.push(   this.window.getComputedStyle(i.element).fontSize   )   
            }                   
            this.wordsService.navigationResizeEventSubscription0 = this.wordsService.navigationResizeEvent$.subscribe((event)=>{
                this.wordsService[this.navigationTemplateVariable].metadata.barDynamicWidth = zChild[1].element.getBoundingClientRect().width  - 1340;
                this.ref.detectChanges()                
                zChild[5].style['left'] = (   1340 * .47 - (1340 - zChild[1].element.getBoundingClientRect().width)   ).toString() + "px"
                zChild[6].style['left'] = (   1340 * .53 - (1340 - zChild[1].element.getBoundingClientRect().width)   ).toString() + "px"
                zChild[7].style['left'] = (   1340 * .58 - (1340 - zChild[1].element.getBoundingClientRect().width)   ).toString() + "px"
                zChild[8].style['left'] = (   1340 * .65 - (1340 - zChild[1].element.getBoundingClientRect().width)   ).toString() + "px"
                zChild[9].style['left'] = (   1340 * .72 - (1340 - zChild[1].element.getBoundingClientRect().width)   ).toString() + "px"
                zChild[10].style['left'] = (   1340 * .77 - (1340 - zChild[1].element.getBoundingClientRect().width)   ).toString() + "px"
                zChild[11].style['left'] = (   1340 * .85 - (1340 - zChild[1].element.getBoundingClientRect().width)   ).toString() + "px"
                this.ref.detectChanges()
                zChild[12].style['left'] = ( 
                    numberParse(  this.window.getComputedStyle(   zChild[11].element  ).left   )  -
                    numberParse(   this.window.getComputedStyle(  zChild[12].element   ).width   )/2 +
                    getTextWidth({
                        elementText:zChild[11].innerText,
                        font: this.window.getComputedStyle(   zChild[11].element  ).getPropertyValue('font-size') + 
                        " " +
                        this.window.getComputedStyle(   zChild[11].element ).getPropertyValue('font-family') 
                    })/2                                
                ).toString() + "px"  
                this.ref.detectChanges()
            })
            this.wordsService.navigationResizeEventSubscription1 = this.wordsService.navigationResizeEvent$.subscribe((event)=>{


                if(   numberParse(   this.window.getComputedStyle(zChild[5].element).left    )   <=    this.wordsService[this.navigationTemplateVariable].metadata.titleWidth + 100  ){

                    
                    // console.log(this.wordsService[this.navigationTemplateVariable].quantity[1][0].metadata.dropDownDisplay)
                    zChild[12].style['display'] = 'none'
                    zChild[13].style['display'] = 'block'
                    zChild[14].style['display'] = 'block'
                    zChild[5].style['top'] = (
                        numberParse(   this.window.getComputedStyle(   zChild[1].element   ).height   ) -
                        1
                    ).toString() + 'px'
                    zChild[5].style['box-shadow'] = '0px 8px 16px 0px rgba(0,0,0,0.2)'
                    zChild.slice(5,12).map((x,i)=>{
                        x.style['color'] =  'rgb(249,94,133)';
                        x.style['padding'] =  '12px 16px'
                        x.style['background-color'] = 'rgb(255,192,203)'
                        x.style['border-bottom'] = '1px solid white';
                        x.style['text-decoration'] = 'none';
                        x.style['left'] = '0px'
                        x.style['width'] = '100%'
                        this.ref.detectChanges()
                        // console.log(
                        //     x.style['height'],
                        //     this.window.getComputedStyle(x.element)['height']
                        // )
                        if(i !== 0  ){


                            x.style['top'] = (
                                numberParse(   this.window.getComputedStyle(   zChild.slice(5,12)[i-1].element   ).top   ) +
                                numberParse(   '43px'   ) // here execption since in IE it stil considers the height of the text to be the true height
                            ).toString() + "px"
                            

                        }
                        this.ref.detectChanges()
                    })                                      
                    this.ref.detectChanges()
                    
                    

                    if(   this.wordsService[this.navigationTemplateVariable].quantity[1][0].metadata.dropDownDisplay !== 'none'   ){


                        for(   let i of zChild.slice(5,12)   ){
                            i.style['display'] = 'none'                              
                        } 
                        this.wordsService[this.navigationTemplateVariable].quantity[1][0].metadata.dropDownDisplay = 'none' 
                        this.ref.detectChanges()


                    }      
                    
                    
                    zChild[13].style['left']  = (  1340* .96  - (1340 - zChild[1].element.getBoundingClientRect().width) ).toString() + "px" 
                    zChild[14].style['left']  = (  1340* .963  - (1340 - zChild[1].element.getBoundingClientRect().width) ).toString() + "px" 
                    this.ref.detectChanges()


                    if(   this.wordsService.navigationClickEventSubscription0 === undefined   || this.wordsService.navigationClickEventSubscription0.closed  ){


                        this.wordsService.navigationClickEvent$ = fromEvent([zChild[13].element ,zChild[14].element] ,'click');
                        this.wordsService.navigationClickEventSubscription0 = this.wordsService.navigationClickEvent$.subscribe((event)=>{
                            for(   let i of zChild.slice(5,12)   ){
                                i.style['display'] = i.style['display'] === 'block' ? 'none' :'block'                                 
                            }                                 
                            this.ref.detectChanges()
                        })  
                        // console.log(   this.wordsService.navigationClickEventSubscription0   )      


                    }   
                    
                    if(   numberParse(   this.window.getComputedStyle(zChild[13].element).left    )   <=    this.wordsService[this.navigationTemplateVariable].metadata.titleWidth + 155  ){


                       zChild.slice(2,4).map((x,i)=>{
                            x.style['font-size'] =  
                            (   
                                numberParse(   this.wordsService[this.navigationTemplateVariable].metadata.defaultFontSizes[i]   ) *
                                (  
                                     numberParse(   zChild[13].style['left']   )/
                                     (   this.wordsService[this.navigationTemplateVariable].metadata.titleWidth  + 155 )  
                                ) * .95  
                            ).toString() + "px"
                        })                        
                    }


                    else if(   numberParse(   this.window.getComputedStyle(zChild[13].element).left    )     >=    this.wordsService[this.navigationTemplateVariable].metadata.titleWidth  + 55  ){

                        
                        // console.log('restore title sizes')
                        zChild.slice(2,4).map((x,i)=>{
                            x.style['font-size'] =  this.wordsService[this.navigationTemplateVariable].metadata.defaultFontSizes[i] 
                        })
        
        
                    }                    


                }


                else if(   numberParse(   this.window.getComputedStyle(zChild[5].element).left    )   >    this.wordsService[this.navigationTemplateVariable].metadata.titleWidth + 100   ){


                    if(   this.wordsService.navigationClickEventSubscription0 !== undefined   ){


                        if(   !this.wordsService.navigationClickEventSubscription0.closed    ){
    
    
                            this.wordsService.navigationClickEventSubscription0.unsubscribe()   
                            
                    
                        }
    
    
                    }


                    if(   this.wordsService[this.navigationTemplateVariable].quantity[1][0].metadata.dropDownDisplay !== 'block'   ){


                        for(   let i of zChild.slice(5,13)   ){
                            i.style['display'] = 'block'                              
                        } 
                        this.wordsService[this.navigationTemplateVariable].quantity[1][0].metadata.dropDownDisplay = 'block' 
                        this.ref.detectChanges()


                    }                     
                    
                    
                    zChild[13].style['display'] = 'none'
                    zChild[14].style['display'] = 'none'             
                    // console.log('restore title sizes')
                    zChild.slice(2,4).map((x,i)=>{
                        x.style['font-size'] =  this.wordsService[this.navigationTemplateVariable].metadata.defaultFontSizes[i] 
                    })   
                    zChild[5].style['box-shadow'] = 'none'
                    zChild.slice(5,12).map((x,i)=>{
                        x.style['color'] =  'rgb(0, 0, 0)';
                        x.style['padding'] =  '0px 0px'
                        x.style['background-color'] = 'none'
                        x.style['border-bottom'] = '0px none rgb(0,0,0)';
                        // x.style['text-decoration'] = 'none';
                        // x.style['height'] = 'auto'
                        x.style['width'] = 'auto'
                        x.style['top'] = '72px' 
                        this.ref.detectChanges()                      
                    })                     
                    this.ref.detectChanges()                   
                }
            })

        }
        


       
        

    }

    ngOnDestroy(){
        console.log( this.navigationTemplateVariable+ ' ngOnDestroy fires on dismount') 


        if(   this.navigationTemplateVariable  === 'navigationComponentObject0'   ){
        
        
            this.wordsService.navigationResizeEventSubscription0.unsubscribe()
            this.wordsService.navigationResizeEventSubscription1.unsubscribe()
            if(   this.wordsService.navigationClickEventSubscription0 !== undefined   ){


                if(   !this.wordsService.navigationClickEventSubscription0.closed    ){


                    this.wordsService.navigationClickEventSubscription0.unsubscribe()   
                    
            
                }


            }            
        
    
        }        
    }

}


//TEST
// test that ngOnDestory make a fn call to unsubscribe