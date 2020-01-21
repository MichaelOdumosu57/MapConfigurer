import { Component, OnInit,Input,ViewChildren,AfterViewInit,Inject, OnDestroy,ChangeDetectorRef,ChangeDetectionStrategy } from '@angular/core';
import {   WordsService   } from '../words.service';
import {   fromEvent,interval, of,from, Observable   } from 'rxjs';
import {   WINDOW   } from '../window.service';
import {   take,timeout,distinctUntilChanged   } from 'rxjs/operators';
import {   zChildren,numberParse,getTextWidth,resize,xPosition   } from '../customExports'


function styleProp(   devObj   ){
    return devObj.window.getComputedStyle(   devObj.element   )
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


    ngOnInit() {
        console.log(this.navigationTemplateVariable+ '  ngOnInit fires one remount')


        if(   this.wordsService.navigationElementHoldingBay.length !== 0   ){


            if(   this.wordsService.navigationElementHoldingBay[7].style['display'] === 'none'  ){ // state management need a better value !!!
                // console.warn('hit')
        
                for(   let i of this.wordsService.navigationElementHoldingBay.slice(0,7)   ){
                    i.style['display'] = 'none'                                  
                }                                 
                this.ref.detectChanges()


            }
            this.wordsService.navigationElementHoldingBay = []  


        }      


    }

    ngAfterViewInit(){
        console.log( this.navigationTemplateVariable+ ' ngAfterViewInit fires one remount')        
        this.wordsService.navigationLoadEvent$ = fromEvent(this.window ,'load');
        this.wordsService.navigationResizeEvent$ = fromEvent(this.window ,'resize');    

        
        if(   this.navigationTemplateVariable === 'navigationComponentObject0'    ){


            let zChild :zChildren[] = [{
                element: this.window.document.querySelector('app-navigation[ng-reflect-navigation-template-variable='+this.navigationTemplateVariable+']') as HTMLElement,
                style:this.wordsService[this.navigationTemplateVariable].quantity[0][0].ngStyle[0][0],
                bool:this.wordsService[this.navigationTemplateVariable].quantity[0][0].bool[0][0]
            }]          
            let zCheckpoint = []                         
            this.navigationMyElements._results.map((x:any,i:any)=>{


                if(   x.nativeElement.id === 'n_a_v_i_g_a_t_i_o_n_Board'   ){
                    zCheckpoint.push(i)
                }                        
                
            
            })
            // console.log(zCheckpoint)
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
                        
                        
                        let domElement = x.nativeElement as HTMLElement;
                        // console.log(this.wordsService[this.navigationTemplateVariable].quantity[1][j])
                        // console.log(   this.wordsService[this.navigationTemplateVariable].quantity[1][j].metadata.router[zGrid.a][zGrid.b]   )
                        zChild.push({
                            element:domElement,
                            style:this.wordsService[this.navigationTemplateVariable].quantity[1][j].ngStyle[zGrid.a][zGrid.b],
                            innerText: this.wordsService[this.navigationTemplateVariable].quantity[1][j].text[zGrid.a][zGrid.b],
                            bool:this.wordsService[this.navigationTemplateVariable].quantity[1][j].bool[zGrid.a][zGrid.b],
                            link:this.wordsService[this.navigationTemplateVariable].quantity[1][j].metadata.router[zGrid.a][zGrid.b] === undefined ?
                                null :
                                this.wordsService[this.navigationTemplateVariable].quantity[1][j].metadata.router[zGrid.a][zGrid.b].link,
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
            // console.log(   zChild   ) 
            this.wordsService.navigationClickEvent$ = fromEvent([zChild[13].element ,zChild[14].element] ,'click');
            zChild.slice(5,12).forEach((x,i)=>{
                // console.log(i+1)
                // console.log(x.element)
                this.wordsService['navigationClickEventSubscription'+(i+1).toString()] = fromEvent(x.element,'click').subscribe(()=>{
                    this.wordsService.appCurrentNav = x.link
                })
                // console.log(this.wordsService['navigationClickEventSubscription'+[i+1]])
            })
            this.wordsService.navigationClickElements.push(...zChild.slice(5,12)) 
            // console.log(this.wordsService)
            this.wordsService[this.navigationTemplateVariable].metadata.titleWidth = getTextWidth({
                elementText:zChild[2].innerText ,
                font: this.window.getComputedStyle(   zChild[2].element   ).getPropertyValue('font-size') + 
                " " +
                this.window.getComputedStyle(   zChild[2].element ).getPropertyValue('font-family') 
            })        
            for(   let i of zChild.slice(2,4)   ){
                this.wordsService[this.navigationTemplateVariable].metadata.defaultFontSizes.push(   this.window.getComputedStyle(i.element).fontSize   )   
            }             
            this.wordsService.navigationElementHoldingBay.push(...zChild.slice(5,13)) 
            this.wordsService.navigationResizeEventSubscription0 = this.wordsService.navigationResizeEvent$.subscribe((event)=>{
                this.wordsService[this.navigationTemplateVariable].metadata.barDynamicWidth = zChild[1].element.getBoundingClientRect().width  - 1340;
                this.ref.detectChanges()                
                zChild[5].style['left'] = (   1340 * .47 - (1340 - zChild[1].element.getBoundingClientRect().width)   ).toString() + "px"
                zChild[6].style['left'] = (   1340 * .524 - (1340 - zChild[1].element.getBoundingClientRect().width)   ).toString() + "px"
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
                        if(   i !== 0   ){


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
                        // dispatch router event if the values are the smaec
                        // console.log(event)
                        // console.log(   this.wordsService.navigationClickEventSubscription0   )      


                    }   
                    
                    if(   numberParse(   this.window.getComputedStyle(zChild[13].element).left    )   <=    this.wordsService[this.navigationTemplateVariable].metadata.titleWidth + 155  ){

                    //    console.log('drop down interfers with title]')
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


                    this.ref.detectChanges()
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

                
                if(   this.window.document.querySelector('app-blog[ng-reflect-blog-t-v=blogCO0]')  !== null   ){
                
                
                    // console.log('needed data from wordsCO4')
                    // console.log(   this.window.getComputedStyle(z.element).height   )
                    // console.log(   this.window.getComputedStyle(z.element.parentElement).top   )
                    this.wordsService.blogCO0.quantity[1][0].metadata.navigationCO0.next([
                        this.window.getComputedStyle(zChild[0].element).top,
                        this.window.getComputedStyle(zChild[1].element).height 
                    ])                
                
                
                }
                
                
            })
              
            
        }
        
        // debugger
        this.wordsService.appViewComplete.next(
            (function(qq){
                qq.wordsService.appViewCompleteArray.push(qq.navigationTemplateVariable) 
            })(this)
        )
    }

    ngOnDestroy(){
        console.log( this.navigationTemplateVariable+ ' ngOnDestroy fires on dismount') 


        if(   this.navigationTemplateVariable  === 'navigationComponentObject0'   ){
        
        
            this.wordsService.navigationResizeEventSubscription0.unsubscribe()
            this.wordsService.navigationResizeEventSubscription1.unsubscribe()
            this.wordsService.navigationClickElements.forEach((x,i)=>{
                this.wordsService['navigationClickEventSubscription'+[i+1]].unsubscribe()
                // console.log(i+1)
            })     
            this.wordsService.navigationClickElements = []       


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