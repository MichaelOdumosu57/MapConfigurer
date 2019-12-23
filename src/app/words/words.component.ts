import {   Component, OnInit,Input,ViewChildren,Directive,Inject,AfterViewInit, AfterContentInit,OnDestroy,ChangeDetectorRef,ChangeDetectionStrategy   } from '@angular/core';
import {   WordsService   } from '../words.service';
import {   BrowserModule,platformBrowser,disableDebugTools   } from '@angular/platform-browser';
import {   WINDOW   } from '../window.service';
import {   fromEvent,interval   } from 'rxjs';
import {   take,timeout   } from 'rxjs/operators';
import {   zChildren   } from '../customExports'

function getTextWidth(   devObj:{elementText:string,font:string}   ){
    var canvas = document.createElement("canvas");
    var ctx = canvas.getContext("2d");
    ctx.font = devObj.font;  // This can be set programmaticly from the element's font-style if desired
    return ctx.measureText(devObj.elementText).width;
}

function numberParse(   dimension:any   ){
    dimension = parseFloat(dimension.split("p")[0])
    return dimension;
}

function resize(   devObj:any   ){
    // console.log(   devObj   )
    let result = null


    if(   devObj.misc === undefined   ){
        devObj.misc = [.12]
    }
    

    if(   devObj.type === 'direct'   ){


        result = 
        (
            devObj.default -
            (
                devObj.containDefault   -
                devObj.containActual    
            ) * 
            devObj.misc[0]
        )


    }
    
    else if(   devObj.type !== 'direct' ){


        result = (
            devObj.default *
            (
                (   
                    (  
                        devObj.containActual  /
                        devObj.containDefault   
                    ) -
                    devObj.misc[0]   
                ) 
            )
        ) 


    }
    return result = result > devObj.default  ? 
        devObj.default.toString() + "px"      :
        result.toString() + "px"     
}


function xPosition(devObj){


    if(   devObj.containPos === undefined   ){


        devObj.containPos = .5
        
        
    }


    if(   devObj.targetPos === undefined   ){

        
        devObj.targetPos = .5
        
        
    }
    
    return (    
        (   devObj.contain*devObj.containPos   ) -  
        (   devObj.target*devObj.targetPos   )   
    ).toString() + "px"; 
}


    
@Component({
  selector: 'app-words',
  templateUrl: './words.component.html',
  styleUrls: ['./words.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WordsComponent implements OnInit,AfterViewInit,OnDestroy {

    @ViewChildren('mywordsval') wordsMyElements: any;
    
    constructor(
        private wordsService: WordsService,
        @Inject(WINDOW) private window: Window,
        private ref: ChangeDetectorRef
    ) { }

    
    @Input() wordsTemplateVariable:string | any;
    

    wordsVal:Array<string> = this.wordsService.wordsVal;
    
    wordsbool:Array<any> = this.wordsService.wordsbool;
    
    wordsStyle:any =  this.wordsService.wordsStyle;

    wordsValIndex:Array<any> = this.wordsService.wordsValIndex
    wordsStyleIndex:Array<any> = this.wordsService.wordsStyleIndex
    wordsBoolIndex:Array<any> = this.wordsService.wordsBoolIndex

    wordsCustomWordWrapElements:Array<any>  = []
    
    ngOnInit() {
        console.log(this.wordsTemplateVariable+ ' ngOnInit fires one remount')
    }
    
    ngAfterViewInit() { 
        console.log( this.wordsTemplateVariable+ ' ngAfterViewInit fires one remount')
        this.wordsService.wordsLoadEvent$ = fromEvent(this.window ,'load');
        this.wordsService.wordsResizeEvent$ = fromEvent(this.window,'resize');
    

        if(   this.wordsTemplateVariable === 'wordsComponentObject0'){


            let zChild: zChildren[] =[{
                element: this.window.document.querySelector('app-words[ng-reflect-words-template-variable='+this.wordsTemplateVariable+']') as HTMLElement,
                style:this.wordsService[this.wordsTemplateVariable].quantity[0][0].ngStyle[0][0],
            }]          
            // console.log(   this.window.document.querySelector('app-words[ng-reflect-words-template-variable='+this.wordsTemplateVariable+']')  ) 
            // console.log(this.wordsMyElements._results)
            // console.log(zChild)
            let zCheckpoint = []                         
            this.wordsMyElements._results.map((x:any,i:any)=>{


                if(   x.nativeElement.id === 'w_o_r_d_s_Board'   ){
                    zCheckpoint.push(i)
                }    
                
                
                if(    x.nativeElement.id === 'w_o_r_d_s_Title'   ){
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
                    return qq.wordsMyElements._results.length === 1 ? qq.wordsMyElements._results : qq.wordsMyElements._results.slice(y,zCheckpoint[j+1])
                })(this).map((x:any,i:any)=>{     
                    // console.log(   x.nativeElement.id   )
                    // console.log(   this.wordsService[this.wordsTemplateVariable].quantity[1][j].val  )

                    while(   
                        this.wordsService[this.wordsTemplateVariable].quantity[1][j].quantity[zGrid.a][zGrid.b] === undefined &&   
                        zGrid.b +1 > this.wordsService[this.wordsTemplateVariable].quantity[1][j].quantity[zGrid.a].length
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


                    if(   x.nativeElement.id === this.wordsService[this.wordsTemplateVariable].quantity[1][j].val[zGrid.a][zGrid.b]   &&
                        (   
                            this.wordsService[this.wordsTemplateVariable].quantity[1][j].bool[zGrid.a][zGrid.b] === 'true' ||
                            this.wordsService[this.wordsTemplateVariable].quantity[1][j].bool[zGrid.a][zGrid.b] === 'link' ||
                            this.wordsService[this.wordsTemplateVariable].quantity[1][j].bool[zGrid.a][zGrid.b] === 'button' 
                        )    
                    ){               
                        
                        
                        zChild.push({
                            element:x.nativeElement as HTMLElement,
                            style:this.wordsService[this.wordsTemplateVariable].quantity[1][j].ngStyle[zGrid.a][zGrid.b],
                            innerText: this.wordsService[this.wordsTemplateVariable].quantity[1][j].text[zGrid.a][zGrid.b]
                        })
                        

                        if(   this.wordsService[this.wordsTemplateVariable].quantity[1][j].quantity[zGrid.a][zGrid.b+1] === undefined   ){


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
            this.ref.detectChanges()                       
            this.wordsService[this.wordsTemplateVariable].quantity[1][1].metadata.TitleDefaultWidth = getTextWidth({
                elementText:zChild[2].innerText,
                font:this.window.getComputedStyle(   zChild[2].element ).getPropertyValue('font-size') + 
                " " +
                this.window.getComputedStyle(   zChild[2].element ).getPropertyValue('font-family') 
            }) +55    
            this.wordsService[this.wordsTemplateVariable].quantity[1][3].metadata.TitleDefaultWidth = getTextWidth({
                elementText:zChild[7].innerText,
                font:this.window.getComputedStyle(   zChild[7].element ).getPropertyValue('font-size') + 
                " " +
                this.window.getComputedStyle(   zChild[2].element ).getPropertyValue('font-family') 
            })  
            this.wordsService[this.wordsTemplateVariable].quantity[1][3].metadata.subTitleDefaultWidth = getTextWidth({
                elementText:zChild[8].innerText,
                font:this.window.getComputedStyle(   zChild[8].element   ).getPropertyValue('font-size') + 
                " " +
                this.window.getComputedStyle(   zChild[2].element ).getPropertyValue('font-family') 
            })                                                     
        this.wordsService.wordsResizeEventSubscription0 = this.wordsService.wordsResizeEvent$.subscribe(()=>{
            zChild[6].style['width'] = resize({
                default:numberParse(   this.wordsService[this.wordsTemplateVariable].quantity[1][2].metadata.imageDefaultWidth   ),
                containActual:numberParse(   this.window.getComputedStyle(   zChild[1].element   ).width   ),
                containDefault:1050
            })      
            zChild[9].style['width'] = resize({
                default:numberParse(   this.wordsService[this.wordsTemplateVariable].quantity[1][3].metadata.imageDefaultWidth   ),
                containActual:numberParse(   this.window.getComputedStyle(   zChild[1].element   ).width   ),
                containDefault:1050
            })                 
            zChild[6].style['height'] = resize({
                default:numberParse(   this.wordsService[this.wordsTemplateVariable].quantity[1][2].metadata.imageDefaultHeight   ),
                containActual:numberParse(   this.window.getComputedStyle(   zChild[1].element   ).width   ),
                containDefault:1050
            })         
            zChild[9].style['height'] = resize({
                default:numberParse(   this.wordsService[this.wordsTemplateVariable].quantity[1][3].metadata.imageDefaultHeight   ),
                containActual:numberParse(   this.window.getComputedStyle(   zChild[1].element   ).width   ),
                containDefault:1050
            })                           
            this.ref.detectChanges()        
            
            
            if(   numberParse(   this.window.getComputedStyle(   zChild[1].element   ).width   ) >= 710   ){


                zChild[6].style['top'] = this.wordsService.wordsComponentObject0Image0Top
                zChild[9].style['top'] = this.wordsService.wordsComponentObject0Image1Top 
                zChild[2].style['left'] =  xPosition({
                    contain:numberParse(   this.window.getComputedStyle(zChild[1].element).width   ),
                    target:numberParse(   this.window.getComputedStyle(zChild[2].element).width   )
                })     
                zChild[3].style['left'] =  xPosition({
                    contain:numberParse(   this.window.getComputedStyle(zChild[1].element).width   ),
                    target:numberParse(   this.window.getComputedStyle(zChild[3].element).width   )
                })  
                zChild[4].style['left'] =  xPosition({
                    contain:numberParse(   this.window.getComputedStyle(zChild[1].element).width   ),
                    target:numberParse(   this.window.getComputedStyle(zChild[4].element).width   ),
                    containPos:.28
                })               
                zChild[4].style['top'] = (
                    numberParse(   this.wordsService[this.wordsTemplateVariable].quantity[1][2].metadata.titleDefaultTop   ) -   (
                        numberParse(   this.wordsService[this.wordsTemplateVariable].quantity[1][2].metadata.imageDefaultHeight   ) -
                        numberParse(   this.window.getComputedStyle(    zChild[6].element   ).height   )       
                    )
                ).toString() + 'px'    
                zChild[5].style['left'] =  xPosition({
                    contain:numberParse(   this.window.getComputedStyle(zChild[1].element).width   ),
                    target:numberParse(   this.window.getComputedStyle(zChild[5].element).width   ),
                    containPos:.28
                })     
                zChild[5].style['top'] = (
                    numberParse(   this.wordsService[this.wordsTemplateVariable].quantity[1][2].metadata.subTitleDefaultTop   ) -   (
                        numberParse(   this.wordsService[this.wordsTemplateVariable].quantity[1][2].metadata.imageDefaultHeight   ) -
                        numberParse(   this.window.getComputedStyle(    zChild[6].element   ).height   )       
                    )
                ).toString() + 'px'       
                zChild[6].style['left'] =  xPosition({
                    contain:numberParse(   this.window.getComputedStyle(zChild[1].element).width   ),
                    target:numberParse(   this.window.getComputedStyle(zChild[6].element).width   ),
                    containPos:.28
                })   
                zChild[7].style['left'] =  xPosition({
                    contain:numberParse(   this.window.getComputedStyle(zChild[1].element).width   ),
                    target:this.wordsService[this.wordsTemplateVariable].quantity[1][3].metadata.TitleDefaultWidth,
                    containPos:.72
                })  
                zChild[7].style['top'] = (
                    numberParse(   this.wordsService[this.wordsTemplateVariable].quantity[1][3].metadata.titleDefaultTop   ) -   (
                        numberParse(   this.wordsService[this.wordsTemplateVariable].quantity[1][3].metadata.imageDefaultHeight   ) -
                        numberParse(   this.window.getComputedStyle(    zChild[9].element   ).height   )       
                    )
                ).toString() + 'px'                                                                                                 
                zChild[8].style['left'] =  xPosition({
                    contain:numberParse(   this.window.getComputedStyle(zChild[1].element).width   ),
                    target:this.wordsService[this.wordsTemplateVariable].quantity[1][3].metadata.subTitleDefaultWidth,
                    containPos:.72
                })     
                this.ref.detectChanges() 
                zChild[8].style['top'] = (
                    numberParse(   this.wordsService[this.wordsTemplateVariable].quantity[1][3].metadata.subTitleDefaultTop   ) -   (
                        numberParse(   this.wordsService[this.wordsTemplateVariable].quantity[1][3].metadata.imageDefaultHeight   ) -
                        numberParse(   this.window.getComputedStyle(    zChild[9].element   ).height   )       
                    )
                ).toString() + 'px'  
                zChild[9].style['left'] =  xPosition({
                    contain:numberParse(   this.window.getComputedStyle(zChild[1].element).width   ),
                    target:numberParse(   this.window.getComputedStyle(zChild[9].element).width   ),
                    containPos:.72
                })     
                this.ref.detectChanges()     
                zChild[1].style['height'] = (
                    numberParse(    this.wordsService[this.wordsTemplateVariable].quantity[1][0].metadata.boardDefaultHeight  ) -   (
                        numberParse(   this.wordsService[this.wordsTemplateVariable].quantity[1][3].metadata.imageDefaultHeight   ) -
                        numberParse(   this.window.getComputedStyle(    zChild[9].element   ).height   )       
                    )
                ).toString() + 'px' 
                this.ref.detectChanges()                                      
                
                
            }


            else if(   numberParse(   this.window.getComputedStyle(    zChild[1].element     ).width   ) < 710   ){


                zChild[6].style['top'] = '180px'
                zChild[6].style['width'] = '88%'
                zChild[6].style['height'] = resize({
                    default:numberParse(   '420px'  ),
                    containActual:numberParse(   this.window.getComputedStyle(zChild[1].element).width   ),
                    // containDefault: numberParse(   this.wordsService[this.wordsTemplateVariable].quantity[1][1].metadata.imageDefaultWidth   )  
                    containDefault:610,
                    // misc:[.24]
                })    
                zChild[6].style['left'] =  xPosition({
                    contain:numberParse(   this.window.getComputedStyle(zChild[1].element).width   ),
                    target:numberParse(   this.window.getComputedStyle(zChild[6].element).width   ),
                    containPos:.22
                })    
                this.ref.detectChanges()  
                zChild[9].style['top'] = 
                (
                    numberParse(   '740px'   ) -   (
                        numberParse(   '420px'   ) -
                        numberParse(   this.window.getComputedStyle(    zChild[6].element   ).height   )       
                    )
                ).toString() + 'px'                        
                zChild[9].style['width'] = '88%'
                zChild[9].style['height'] = resize({
                    default:numberParse(   '420px'  ),
                    containActual:numberParse(   this.window.getComputedStyle(zChild[1].element).width   ),
                    // containDefault: numberParse(   this.wordsService[this.wordsTemplateVariable].quantity[1][1].metadata.imageDefaultWidth   )  
                    containDefault:610,
                    // misc:[.24]
                }) 
                zChild[9].style['left'] =  xPosition({
                    contain:numberParse(   this.window.getComputedStyle(zChild[1].element).width   ),
                    target:numberParse(   this.window.getComputedStyle(zChild[9].element).width   ),
                    containPos:.22
                })         
                this.ref.detectChanges()       
                zChild[2].style['left'] =  xPosition({
                    contain:numberParse(   this.window.getComputedStyle(zChild[1].element).width   ),
                    target:numberParse(   this.window.getComputedStyle(zChild[2].element).width   )
                })
                zChild[3].style['left'] =  xPosition({
                    contain:numberParse(   this.window.getComputedStyle(zChild[1].element).width   ),
                    target:numberParse(   this.window.getComputedStyle(zChild[3].element).width   )
                })   
                zChild[4].style['left'] =  xPosition({
                    contain:numberParse(   this.window.getComputedStyle(zChild[1].element).width   ),
                    target:numberParse(   this.window.getComputedStyle(zChild[4].element).width   ),
                    containPos:.5
                })                     
                zChild[4].style['top'] = (
                    620 -   (
                        420-
                        numberParse(   this.window.getComputedStyle(    zChild[6].element   ).height   )       
                    )
                ).toString() + 'px'   
                zChild[5].style['left'] =  xPosition({
                    contain:numberParse(   this.window.getComputedStyle(zChild[1].element).width   ),
                    target:numberParse(   this.window.getComputedStyle(zChild[5].element).width   ),
                    containPos:.5
                })     
                zChild[5].style['top'] = (
                    690 -   (
                        420-
                        numberParse(   this.window.getComputedStyle(    zChild[6].element   ).height   )       
                    )
                ).toString() + 'px'         
                zChild[7].style['left'] =  xPosition({
                    contain:numberParse(   this.window.getComputedStyle(zChild[1].element).width   ),
                    target:this.wordsService[this.wordsTemplateVariable].quantity[1][3].metadata.TitleDefaultWidth,
                    containPos:.5
                })  
                zChild[7].style['top'] =(
                    (
                        numberParse(   this.window.getComputedStyle(    zChild[9].element   ).height  ) +
                        numberParse(   this.window.getComputedStyle(    zChild[9].element   ).top   )  +
                        20     
                    )
                ).toString() + 'px'                                  
                zChild[8].style['left'] =  xPosition({
                    contain:numberParse(   this.window.getComputedStyle(zChild[1].element).width   ),
                    target:this.wordsService[this.wordsTemplateVariable].quantity[1][3].metadata.subTitleDefaultWidth,
                    containPos:.5
                })      
                zChild[8].style['top'] = (
                    (
                            numberParse(   this.window.getComputedStyle(    zChild[9].element   ).height   ) +
                            numberParse(   this.window.getComputedStyle(    zChild[9].element   ).top   ) +
                            90
                        )
                    ).toString() + 'px' 
                this.ref.detectChanges()  
                zChild[1].style['height']  = (
                    numberParse(   zChild[8].style['top']   ) +
                    60
                ).toString() + 'px'            
                this.ref.detectChanges()                                     
                
                
            }


        })   
        this.wordsService.wordsResizeEventSubscription4 = this.wordsService.wordsResizeEvent$.subscribe(()=>{
            // console.log(   this.window.getComputedStyle(z.element).height   )
            // console.log(   this.window.getComputedStyle(z.element.parentElement).top   )
            this.wordsService.overlayComponentObject4.quantity[1][0].metadata.wordsCO0.next([
                this.window.getComputedStyle(zChild[1].element).height,
                this.window.getComputedStyle(zChild[1].element.parentElement).top 
            ])              
        })                       


        }


        else if(   this.wordsTemplateVariable === 'wordsComponentObject1'   ){

            
            let zChild =[{
                element: this.window.document.querySelector('app-words[ng-reflect-words-template-variable='+this.wordsTemplateVariable+']'),
                style:this.wordsService[this.wordsTemplateVariable].quantity[0][0].ngStyle[0][0],
                innerText:null
            }]          
            // console.log(   this.window.document.querySelector('app-words[ng-reflect-words-template-variable='+this.wordsTemplateVariable+']')  ) 
            // console.log(this.wordsMyElements._results)
            // console.log(zChild)
            let zCheckpoint = []                         
            this.wordsMyElements._results.map((x:any,i:any)=>{


                if(   x.nativeElement.id === 'w_o_r_d_s_Board'   ){
                    zCheckpoint.push(i)
                }    
                
                
                if(    x.nativeElement.id === 'w_o_r_d_s_Title'   ){
                    zCheckpoint.push(i)
                }
                
                
            })
            // console.log(zCheckpoint)
            let zGrid = {
                a:0, 
                b:0
            }                  
            zCheckpoint.map((y:any,j:any)=>{
                // console.group('associated')
                // console.log(    this.wordsMyElements._results.slice(y,zCheckpoint[j+1])   )
                zGrid.a = 0;
                (function(qq){
                    return qq.wordsMyElements._results.length === 1 ? qq.wordsMyElements._results : qq.wordsMyElements._results.slice(y,zCheckpoint[j+1])
                })(this).map((x:any,i:any)=>{     
                    // console.log(   x.nativeElement.id   )
                    // console.log(   this.wordsService[this.wordsTemplateVariable].quantity[1][j].val  )

                    while(   
                        this.wordsService[this.wordsTemplateVariable].quantity[1][j].quantity[zGrid.a][zGrid.b] === undefined &&   
                        zGrid.b +1 > this.wordsService[this.wordsTemplateVariable].quantity[1][j].quantity[zGrid.a].length
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


                    if(   x.nativeElement.id === this.wordsService[this.wordsTemplateVariable].quantity[1][j].val[zGrid.a][zGrid.b]   &&
                        (   
                            this.wordsService[this.wordsTemplateVariable].quantity[1][j].bool[zGrid.a][zGrid.b] === 'true' ||
                            this.wordsService[this.wordsTemplateVariable].quantity[1][j].bool[zGrid.a][zGrid.b] === 'link' ||
                            this.wordsService[this.wordsTemplateVariable].quantity[1][j].bool[zGrid.a][zGrid.b] === 'button' 
                        )    
                    ){               
                        
                        // console.log(zGrid)
                        zChild.push({
                            element:x.nativeElement,
                            style:this.wordsService[this.wordsTemplateVariable].quantity[1][j].ngStyle[zGrid.a][zGrid.b],
                            innerText: this.wordsService[this.wordsTemplateVariable].quantity[1][j].text[zGrid.a][zGrid.b],
                        })
                        

                        if(   this.wordsService[this.wordsTemplateVariable].quantity[1][j].quantity[zGrid.a][zGrid.b+1] === undefined   ){


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
            this.ref.detectChanges()  
            this.wordsService.wordsResizeEventSubscription1 = this.wordsService.wordsResizeEvent$.subscribe(()=>{
                zChild[2].style['left'] = xPosition({
                    contain:numberParse(   this.window.getComputedStyle(zChild[1].element).width   ),
                    target:numberParse(   this.window.getComputedStyle(zChild[2].element).width   )
                }) 
                zChild[3].style['left'] = xPosition({
                    contain:numberParse(   this.window.getComputedStyle(zChild[1].element).width   ),
                    target:numberParse(   this.window.getComputedStyle(zChild[3].element).width   )
                })                    
                zChild[4].style['left'] = xPosition({
                    contain:numberParse(   this.window.getComputedStyle(zChild[1].element).width   ),
                    target:numberParse(   this.window.getComputedStyle(zChild[4].element).width   ),
                    containPos:.88
                })     
                zChild[5].style['left'] = xPosition({
                    contain:numberParse(   this.window.getComputedStyle(zChild[1].element).width   ),
                    target:numberParse(   this.window.getComputedStyle(zChild[5].element).width   ),
                    containPos:.10
                })                         
                this.ref.detectChanges()              
            })    
        }


        else if(   this.wordsTemplateVariable === 'wordsComponentObject2'   ){

            
            let zChild =[{
                element: this.window.document.querySelector('app-words[ng-reflect-words-template-variable='+this.wordsTemplateVariable+']'),
                style:this.wordsService[this.wordsTemplateVariable].quantity[0][0].ngStyle[0][0],
                innerText:null
            }]          
            let zCheckpoint = []                         
            this.wordsMyElements._results.map((x:any,i:any)=>{


                if(   x.nativeElement.id === 'w_o_r_d_s_Board'   ){
                    zCheckpoint.push(i)
                }    


                if(   x.nativeElement.id === 'w_o_r_d_s_ContenRef'   ){
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
                    return qq.wordsMyElements._results.length === 1 ? qq.wordsMyElements._results : qq.wordsMyElements._results.slice(y,zCheckpoint[j+1])
                })(this).map((x:any,i:any)=>{     
                    // console.log(   x.nativeElement.id   )
                    // console.log(   this.wordsService[this.wordsTemplateVariable].quantity[1][j].val  )

                    while(   
                        this.wordsService[this.wordsTemplateVariable].quantity[1][j].quantity[zGrid.a][zGrid.b] === undefined &&   
                        zGrid.b +1 > this.wordsService[this.wordsTemplateVariable].quantity[1][j].quantity[zGrid.a].length
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


                    if(   x.nativeElement.id === this.wordsService[this.wordsTemplateVariable].quantity[1][j].val[zGrid.a][zGrid.b]   &&
                        (   
                            this.wordsService[this.wordsTemplateVariable].quantity[1][j].bool[zGrid.a][zGrid.b] === 'true' ||
                            this.wordsService[this.wordsTemplateVariable].quantity[1][j].bool[zGrid.a][zGrid.b] === 'link' ||
                            this.wordsService[this.wordsTemplateVariable].quantity[1][j].bool[zGrid.a][zGrid.b] === 'button' ||
                            this.wordsService[this.wordsTemplateVariable].quantity[1][j].bool[zGrid.a][zGrid.b] === 'h2' 
                        )    
                    ){               
                        
                        
                        zChild.push({
                            element:x.nativeElement,
                            style:this.wordsService[this.wordsTemplateVariable].quantity[1][j].ngStyle[zGrid.a][zGrid.b] ,
                            innerText:this.wordsService[this.wordsTemplateVariable].quantity[1][j].text[zGrid.a][zGrid.b] 
                        })
                        

                        if(   this.wordsService[this.wordsTemplateVariable].quantity[1][j].quantity[zGrid.a][zGrid.b+1] === undefined   ){


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
            this.ref.detectChanges() 
            this.wordsService.wordsResizeEventSubscription2 = this.wordsService.wordsResizeEvent$.subscribe(()=>{


                if(   numberParse(   this.window.getComputedStyle(   zChild[1].element   ).width   ) > 1064   ){
                    

                    zChild[2].style['top'] = this.wordsService.wordsComponentObject2TitleTop
                    zChild[2].style['left'] = this.wordsService.wordsComponentObject2TitleLeft
                    zChild[2].style['width'] = this.wordsService.wordsComponentObject2TitleWidth
                    zChild[2].style['text-align'] = this.wordsService.wordsComponentObject2TitleTextAlign 
                    zChild[8].style['top'] = this.wordsService.wordsComponentObject2LineTop[0]
                    zChild[8].style['left'] = this.wordsService.wordsComponentObject2LineLeft[0]
                    zChild[8].style['width'] = this.wordsService.wordsComponentObject2LineWidth[0]
                    zChild[3].style['top'] = this.wordsService.wordsComponentObject2PargraphTop[0]
                    zChild[3].style['left'] = this.wordsService.wordsComponentObject2PargraphLeft[0]
                    zChild[3].style['width'] = this.wordsService.wordsComponentObject2PargraphWidth[0] 
                    zChild[3].style['text-align'] = this.wordsService.wordsComponentObject2PargraphTextAlign[0]
                    zChild[4].style['top'] = this.wordsService.wordsComponentObject2ImageDefaultTop[0]
                    zChild[4].style['left'] = this.wordsService.wordsComponentObject2ImageDefaultLeft[0]
                    zChild[6].style['left'] = this.wordsService.wordsComponentObject2ImageDefaultLeft[2]   
                    zChild[9].style['top'] = this.wordsService.wordsComponentObject2ButtonTop[0] 
                    zChild[9].style['left'] = this.wordsService.wordsComponentObject2ButtonLeft[0] 
                    zChild[10].style['top'] = this.wordsService.wordsComponentObject2PargraphTop[1] 
                    zChild[4].style['height'] =  resize({
                        default:numberParse(   this.wordsService[this.wordsTemplateVariable].quantity[1][0].metadata.imageDefaultHeight[0]   ),
                        containActual:numberParse(   this.window.getComputedStyle(zChild[1].element ).width   ),
                        // containDefault: numberParse(   this.wordsService[this.wordsTemplateVariable].quantity[1][1].metadata.imageDefaultWidth   )  
                        containDefault:1100,
                        // misc:[.24]
                    }) 
                    zChild[4].style['width'] =  resize({
                        default:numberParse(   this.wordsService[this.wordsTemplateVariable].quantity[1][0].metadata.imageDefaultWidth[0]   ),
                        containActual:numberParse(   this.window.getComputedStyle(zChild[1].element ).width   ),
                        // containDefault: numberParse(   this.wordsService[this.wordsTemplateVariable].quantity[1][1].metadata.imageDefaultWidth   )  
                        containDefault:1258,
                        misc:[.5],
                        type:'direct'
                    })   
                    zChild[5].style['height'] =  resize({
                        default:numberParse(   this.wordsService[this.wordsTemplateVariable].quantity[1][0].metadata.imageDefaultHeight[1]   ),
                        containActual:numberParse(   this.window.getComputedStyle(zChild[1].element ).width   ),
                        // containDefault: numberParse(   this.wordsService[this.wordsTemplateVariable].quantity[1][1].metadata.imageDefaultWidth   )  
                        containDefault:1100,
                        // misc:[.24]
                    }) 
                    zChild[5].style['width'] =  resize({
                        default:numberParse(   this.wordsService[this.wordsTemplateVariable].quantity[1][0].metadata.imageDefaultWidth[1]   ),
                        containActual:numberParse(   this.window.getComputedStyle(zChild[1].element ).width   ),
                        // containDefault: numberParse(   this.wordsService[this.wordsTemplateVariable].quantity[1][1].metadata.imageDefaultWidth   )  
                        containDefault:1258,
                        misc:[.5],
                        type:'direct'
                    })    
                    zChild[6].style['height'] =  resize({
                        default:numberParse(   this.wordsService[this.wordsTemplateVariable].quantity[1][0].metadata.imageDefaultHeight[2]   ),
                        containActual:numberParse(   this.window.getComputedStyle(zChild[1].element ).width   ),
                        // containDefault: numberParse(   this.wordsService[this.wordsTemplateVariable].quantity[1][1].metadata.imageDefaultWidth   )  
                        containDefault:1183,
                        // misc:[.24]
                    }) 
                    zChild[6].style['width'] =   resize({
                        default:numberParse(   this.wordsService[this.wordsTemplateVariable].quantity[1][0].metadata.imageDefaultWidth[2]   ),
                        containActual:numberParse(   this.window.getComputedStyle(zChild[1].element ).width   ),
                        // containDefault: numberParse(   this.wordsService[this.wordsTemplateVariable].quantity[1][1].metadata.imageDefaultWidth   )  
                        containDefault:1258,
                        misc:[.5],
                        type:'direct'
                    })            
                    zChild[7].style['height'] =  resize({
                        default:numberParse(   this.wordsService[this.wordsTemplateVariable].quantity[1][0].metadata.imageDefaultHeight[3]   ),
                        containActual:numberParse(   this.window.getComputedStyle(zChild[1].element).width   ),
                        // containDefault: numberParse(   this.wordsService[this.wordsTemplateVariable].quantity[1][1].metadata.imageDefaultWidth   )  
                        containDefault:1183,
                        // misc:[.24]
                    }) 
                    zChild[7].style['width'] =   resize({
                        default:numberParse(   this.wordsService[this.wordsTemplateVariable].quantity[1][0].metadata.imageDefaultWidth[3]   ),
                        containActual:numberParse(   this.window.getComputedStyle(zChild[1].element).width   ),
                        // containDefault: numberParse(   this.wordsService[this.wordsTemplateVariable].quantity[1][1].metadata.imageDefaultWidth   )  
                        containDefault:1258,
                        misc:[.5],
                        type:'direct'
                    })
                    this.ref.detectChanges()           
                    zChild[5].style['top'] =  this.wordsService[this.wordsTemplateVariable].quantity[1][0].metadata.imageDefaultTop[1]
                    zChild[5].style['left'] = 
                    (
                        numberParse(   zChild[4].style.width   ) + 
                        numberParse(   zChild[4].style.left   ) + 
                        25
                    ).toString() + 'px'        
                    zChild[7].style['left'] = 
                    (
                        numberParse(   zChild[6].style.width   ) + 
                        numberParse(   zChild[6].style.left   ) + 
                        25
                    ).toString() + 'px'           
                    zChild[6].style['top'] = 
                    (
                        numberParse(   zChild[4].style.height   ) + 
                        numberParse(   zChild[4].style.top   ) + 
                        25
                    ).toString() + 'px'  
                    zChild[7].style['top'] = 
                    (
                        numberParse(   zChild[5].style.height   ) + 
                        numberParse(   zChild[5].style.top   ) + 
                        25
                    ).toString() + 'px'  
                    zChild[10].style['left'] = xPosition({
                        contain:numberParse(   this.window.getComputedStyle(zChild[9].element).width   ) + 
                                numberParse(   this.window.getComputedStyle(zChild[9].element).left   ) ,
                        target:numberParse(   this.window.getComputedStyle(zChild[10].element).width   ),
                        containPos:(
                                    (
                                        numberParse(   this.window.getComputedStyle(zChild[9].element).width   ) /
                                        (
                                            numberParse(   this.window.getComputedStyle(zChild[9].element).width   ) + 
                                            numberParse(   this.window.getComputedStyle(zChild[9].element).left   )                                         
                                        )
                                    ) 
                                )/2 +
                                (
                                    numberParse(   this.window.getComputedStyle(zChild[9].element).left   ) /
                                    (
                                        numberParse(   this.window.getComputedStyle(zChild[9].element).width   ) + 
                                        numberParse(   this.window.getComputedStyle(zChild[9].element).left   )                                         
                                    )
                                )
                    })    
                    this.ref.detectChanges() 
                    zChild[1].style['height'] = 
                    (
                        numberParse(   zChild[7].style.height   ) + 
                        numberParse(   zChild[7].style.top   ) + 
                        100
                    ).toString() + 'px'     
                    this.ref.detectChanges()       
                    
                    
                }


                if(   numberParse(   this.window.getComputedStyle(    zChild[1].element   ).width   ) > 1309   ){


                    zChild[11].style['left']  =  xPosition({
                        contain:numberParse(   this.window.getComputedStyle(zChild[1].element).width   ),
                        target:numberParse(   this.window.getComputedStyle(zChild[11].element).width   ),
                        // containPos:.5,
                        //      
                    })        
                    zChild[2].style['left'] = zChild[11].style['left']  
                    zChild[8].style['left'] = zChild[11].style['left']
                    zChild[3].style['left'] = zChild[11].style['left']     
                    zChild[9].style['left'] = zChild[11].style['left']  
                    this.ref.detectChanges()         
                    zChild[10].style['left'] = xPosition({
                        contain:numberParse(   this.window.getComputedStyle(zChild[9].element).width   ) + 
                                numberParse(   this.window.getComputedStyle(zChild[9].element).left   ) ,
                        target:numberParse(   this.window.getComputedStyle(zChild[10].element).width   ),
                        containPos:(
                                    (
                                        numberParse(   this.window.getComputedStyle(zChild[9].element).width   ) /
                                        (
                                            numberParse(   this.window.getComputedStyle(zChild[9].element).width   ) + 
                                            numberParse(   this.window.getComputedStyle(zChild[9].element).left   )                                         
                                        )
                                    ) 
                                )/2 +
                                (
                                    numberParse(   this.window.getComputedStyle(zChild[9].element).left   ) /
                                    (
                                        numberParse(   this.window.getComputedStyle(zChild[9].element).width   ) + 
                                        numberParse(   this.window.getComputedStyle(zChild[9].element).left   )                                         
                                    )
                                )
                    })     
                    zChild[4].style['left'] = (
                        numberParse(   this.window.getComputedStyle(    zChild[2].element   ).width   ) + 
                        numberParse(   zChild[2].style['left']   ) +
                        100 
                    ).toString() + "px"
                    zChild[6].style['left'] = (
                        numberParse(   this.window.getComputedStyle(    zChild[2].element   ).width   ) + 
                        numberParse(   zChild[2].style['left']   ) +
                        100 
                    ).toString() + "px"               
                    this.ref.detectChanges()
                    zChild[5].style['left'] = (
                        numberParse(   this.window.getComputedStyle(    zChild[4].element   ).width   ) + 
                        numberParse(   zChild[4].style['left']   ) +
                        25 
                    ).toString() + "px"
                    zChild[7].style['left'] = (
                        numberParse(   this.window.getComputedStyle(    zChild[6].element   ).width   ) + 
                        numberParse(   zChild[6].style['left']   ) +
                        25 
                    ).toString() + "px"                         
                    this.ref.detectChanges()    
                    // zChild[9].style['top']  = (
                    //     numberParse(   this.window.getComputedStyle(    zChild[2].element   ).height   ) + 
                    //     numberParse(   zChild[2].style['top']   ) +
                    //     400 
                    // ).toString() + "px"    
                    // zChild[10].style['top']  = (                             
                    //     numberParse(   zChild[9].style['top']   ) +
                    //     numberParse(   this.window.getComputedStyle(    zChild[9].element   ).height   )/2 -
                    //     numberParse(   this.window.getComputedStyle(    zChild[10].element   ).height   )/2 
                    // ).toString() + "px"             
                    // if fail above
                    zChild[9].style['top']  = (
                        numberParse(   this.window.getComputedStyle(    zChild[3].element   ).height   ) + 
                        numberParse(   zChild[3].style['top']   ) +
                        50 
                    ).toString() + "px"    
                    this.ref.detectChanges()    
                    zChild[10].style['top']  = (                             
                        numberParse(   zChild[9].style['top']   ) +
                        numberParse(   this.window.getComputedStyle(    zChild[9].element   ).height   )/2 -
                        numberParse(   this.window.getComputedStyle(    zChild[10].element   ).height   )/2 
                    ).toString() + "px"      
                    this.ref.detectChanges()                                                 
                    
                }


                else if(   numberParse(   this.window.getComputedStyle(   zChild[1].element   ).width   ) < 944   ){


                    zChild[2].style['top'] = '40px' // figure how to do this once
                    zChild[2].style['text-align'] = 'center'      
                    
                    
                    if(   520 > numberParse(   this.window.getComputedStyle(zChild[1].element).width   )   ){


                        zChild[2].style['width'] ='90%'


                    }     
                    
                    
                    else if(   520 < numberParse(   this.window.getComputedStyle(zChild[1].element).width   )   ){


                        zChild[2].style['width']  = getTextWidth({
                            elementText:zChild[2].innerText,
                            font: this.window.getComputedStyle(   zChild[2].element ).getPropertyValue('font-size') + 
                            " " +
                            this.window.getComputedStyle(   zChild[2].element ).getPropertyValue('font-family') 
                        }).toString() + "px"  


                    }       
                    
                    
                    this.ref.detectChanges()
                    zChild[8].style['width']  = '15%'  
                    zChild[8].style['top']  = (
                        numberParse(   this.window.getComputedStyle(    zChild[2].element   ).height   ) + 
                        numberParse(   zChild[2].style['top']   ) + 
                        50
                    ).toString() + "px"
                    this.ref.detectChanges()      
                    zChild[3].style['width'] = '95%'
                    zChild[3].style['text-align'] = 'center' 
                    zChild[3].style['top']  =(
                        numberParse(   this.window.getComputedStyle(    zChild[8].element   ).height   ) + 
                        numberParse(   zChild[8].style['top']   ) 
                    ).toString() + "px"
                    this.ref.detectChanges()      
                    zChild[9].style['top']  = (
                        numberParse(   this.window.getComputedStyle(    zChild[3].element   ).height   ) + 
                        numberParse(   zChild[3].style['top']   ) + 
                        50
                    ).toString() + "px"
                    this.ref.detectChanges()    
                    zChild[10].style['top']  = (
                        numberParse(   zChild[9].style['top']   ) +
                        15
                    ).toString() + "px"
                    this.ref.detectChanges()      
                    zChild[4].style['top']  = (
                        numberParse(   this.window.getComputedStyle(    zChild[10].element   ).height   ) + 
                        numberParse(   zChild[10].style['top']   ) + 
                        75
                    ).toString() + "px"
                    zChild[4].style['width'] = "95%"
                    this.ref.detectChanges()        
                    zChild[4].style['height'] = (   
                        numberParse(   this.window.getComputedStyle(   zChild[4].element   ).width   ) * .64
                    ).toString() + "px"
                    this.ref.detectChanges()   

                    zChild[5].style['top']  = (
                        numberParse(   this.window.getComputedStyle(    zChild[4].element   ).height   ) + 
                        numberParse(   zChild[4].style['top']   ) + 
                        50
                    ).toString() + "px"
                    zChild[5].style['width'] = "95%"
                    this.ref.detectChanges()   
                    zChild[5].style['height'] = (   
                        numberParse(   this.window.getComputedStyle(   zChild[5].element   ).width   ) * .64
                    ).toString() + "px"
                    this.ref.detectChanges()      
                    
                    zChild[6].style['top']  = (
                        numberParse(   this.window.getComputedStyle(    zChild[5].element   ).height   ) + 
                        numberParse(   zChild[5].style['top']   ) + 
                        50
                    ).toString() + "px"
                    zChild[6].style['width'] = "95%"
                    this.ref.detectChanges()   
                    zChild[6].style['height'] = (   
                        numberParse(   this.window.getComputedStyle(   zChild[6].element   ).width   ) * .64
                    ).toString() + "px"
                    this.ref.detectChanges()           
                    
                    zChild[7].style['top']  = (
                        numberParse(   this.window.getComputedStyle(    zChild[6].element   ).height   ) + 
                        numberParse(   zChild[6].style['top']   ) + 
                        50
                    ).toString() + "px"
                    zChild[7].style['width'] = "95%"
                    this.ref.detectChanges()   
                    zChild[7].style['height'] = (   
                        numberParse(   this.window.getComputedStyle(   zChild[7].element   ).width   ) * .64
                    ).toString() + "px"
                    this.ref.detectChanges()
                    zChild[1].style['height'] = (  
                        numberParse(   this.window.getComputedStyle(   zChild[7].element   ).height   ) + 
                        numberParse(   this.window.getComputedStyle(   zChild[7].element   ).top   ) +
                        100 
                    ).toString() + "px"    
                    
                    zChild[2].style['left'] = xPosition({
                        contain:numberParse(   this.window.getComputedStyle(zChild[1].element).width   ),
                        target:numberParse(   this.window.getComputedStyle(zChild[2].element).width   )
                    })   
                    zChild[8].style['left'] = xPosition({
                        contain:numberParse(   this.window.getComputedStyle(zChild[1].element).width   ),
                        target:numberParse(   this.window.getComputedStyle(zChild[8].element).width   )
                    })  
                    zChild[3].style['left'] = xPosition({
                        contain:numberParse(   this.window.getComputedStyle(zChild[1].element).width   ),
                        target:numberParse(   this.window.getComputedStyle(zChild[3].element).width   )
                    })  
                    zChild[4].style['left'] = xPosition({
                        contain:numberParse(   this.window.getComputedStyle(zChild[1].element).width   ),
                        target:numberParse(   this.window.getComputedStyle(zChild[4].element).width   )
                    })     
                    zChild[5].style['left'] = xPosition({
                        contain:numberParse(   this.window.getComputedStyle(zChild[1].element).width   ),
                        target:numberParse(   this.window.getComputedStyle(zChild[5].element).width   )
                    })
                    zChild[6].style['left'] = xPosition({
                        contain:numberParse(   this.window.getComputedStyle(zChild[1].element).width   ),
                        target:numberParse(   this.window.getComputedStyle(zChild[6].element).width   )
                    })     
                    zChild[7].style['left'] = xPosition({
                        contain:numberParse(   this.window.getComputedStyle(zChild[1].element).width   ),
                        target:numberParse(   this.window.getComputedStyle(zChild[7].element).width   )
                    })
                    zChild[9].style['left'] = xPosition({
                        contain:numberParse(   this.window.getComputedStyle(zChild[1].element).width   ),
                        target:numberParse(   this.window.getComputedStyle(zChild[9].element).width   )
                    })     
                    zChild[10].style['left'] = xPosition({
                        contain:numberParse(   this.window.getComputedStyle(zChild[1].element).width   ),
                        target:numberParse(   this.window.getComputedStyle(zChild[10].element).width   )
                    })                                                   
                    this.ref.detectChanges()                             
                }


                else if(   numberParse(   this.window.getComputedStyle(   zChild[1].element    ).width   ) < 1064   ){


                    zChild[2].style['top'] = this.wordsService.wordsComponentObject2TitleTop
                    zChild[2].style['left'] = this.wordsService.wordsComponentObject2TitleLeft
                    zChild[2].style['width'] = this.wordsService.wordsComponentObject2TitleWidth
                    zChild[2].style['text-align'] = this.wordsService.wordsComponentObject2TitleTextAlign 
                    zChild[8].style['top'] = this.wordsService.wordsComponentObject2LineTop[0]
                    zChild[8].style['left'] = this.wordsService.wordsComponentObject2LineLeft[0]
                    zChild[8].style['width'] = this.wordsService.wordsComponentObject2LineWidth[0]
                    zChild[3].style['top'] = this.wordsService.wordsComponentObject2PargraphTop[0]
                    zChild[3].style['left'] = this.wordsService.wordsComponentObject2PargraphLeft[0]
                    zChild[3].style['width'] = this.wordsService.wordsComponentObject2PargraphWidth[0] 
                    zChild[3].style['text-align'] = this.wordsService.wordsComponentObject2PargraphTextAlign[0]
                    zChild[4].style['top'] = this.wordsService.wordsComponentObject2ImageDefaultTop[0]
                    zChild[4].style['left'] = this.wordsService.wordsComponentObject2ImageDefaultLeft[0]
                    zChild[6].style['left'] = this.wordsService.wordsComponentObject2ImageDefaultLeft[2]   
                    zChild[9].style['top'] = this.wordsService.wordsComponentObject2ButtonTop[0] 
                    zChild[9].style['left'] = this.wordsService.wordsComponentObject2ButtonLeft[0] 
                    zChild[10].style['top'] = this.wordsService.wordsComponentObject2PargraphTop[1]  
                    zChild[4].style['height'] =  resize({
                        default:numberParse(   this.wordsService[this.wordsTemplateVariable].quantity[1][0].metadata.imageDefaultHeight[0]   ),
                        containActual:numberParse(   this.window.getComputedStyle( zChild[1].element).width   ),
                        // containDefault: numberParse(   this.wordsService[this.wordsTemplateVariable].quantity[1][1].metadata.imageDefaultWidth   )  
                        containDefault:1100,
                        // misc:[.24]
                    }) 
                    zChild[4].style['width'] =  resize({
                        default:numberParse(   this.wordsService[this.wordsTemplateVariable].quantity[1][0].metadata.imageDefaultWidth[0]   ),
                        containActual:numberParse(   this.window.getComputedStyle( zChild[1].element).width   ),
                        // containDefault: numberParse(   this.wordsService[this.wordsTemplateVariable].quantity[1][1].metadata.imageDefaultWidth   )  
                        containDefault:1258,
                        misc:[.5],
                        type:'direct'
                    })     
                    zChild[5].style['height'] =  resize({
                        default:numberParse(   this.wordsService[this.wordsTemplateVariable].quantity[1][0].metadata.imageDefaultHeight[1]   ),
                        containActual:numberParse(   this.window.getComputedStyle(zChild[1].element).width   ),
                        // containDefault: numberParse(   this.wordsService[this.wordsTemplateVariable].quantity[1][1].metadata.imageDefaultWidth   )  
                        containDefault:1100,
                        // misc:[.24]
                    }) 
                    zChild[5].style['width'] =  resize({
                        default:numberParse(   this.wordsService[this.wordsTemplateVariable].quantity[1][0].metadata.imageDefaultWidth[1]   ),
                        containActual:numberParse(   this.window.getComputedStyle(zChild[1].element).width   ),
                        // containDefault: numberParse(   this.wordsService[this.wordsTemplateVariable].quantity[1][1].metadata.imageDefaultWidth   )  
                        containDefault:1258,
                        misc:[.5],
                        type:'direct'
                    })     
                    zChild[6].style['height'] =  resize({
                        default:numberParse(   this.wordsService[this.wordsTemplateVariable].quantity[1][0].metadata.imageDefaultHeight[2]   ),
                        containActual:numberParse(   this.window.getComputedStyle(zChild[1].element).width   ),
                        // containDefault: numberParse(   this.wordsService[this.wordsTemplateVariable].quantity[1][1].metadata.imageDefaultWidth   )  
                        containDefault:1183,
                        // misc:[.24]
                    }) 
                    zChild[6].style['width'] =   resize({
                        default:numberParse(   this.wordsService[this.wordsTemplateVariable].quantity[1][0].metadata.imageDefaultWidth[2]   ),
                        containActual:numberParse(   this.window.getComputedStyle(zChild[1].element).width   ),
                        // containDefault: numberParse(   this.wordsService[this.wordsTemplateVariable].quantity[1][1].metadata.imageDefaultWidth   )  
                        containDefault:1258,
                        misc:[.5],
                        type:'direct'
                    })            
                    zChild[7].style['height'] =  resize({
                        default:numberParse(   this.wordsService[this.wordsTemplateVariable].quantity[1][0].metadata.imageDefaultHeight[3]   ),
                        containActual:numberParse(   this.window.getComputedStyle(zChild[1].element).width   ),
                        // containDefault: numberParse(   this.wordsService[this.wordsTemplateVariable].quantity[1][1].metadata.imageDefaultWidth   )  
                        containDefault:1183,
                        // misc:[.24]
                    }) 
                    zChild[7].style['width'] =   resize({
                        default:numberParse(   this.wordsService[this.wordsTemplateVariable].quantity[1][0].metadata.imageDefaultWidth[3]   ),
                        containActual:numberParse(   this.window.getComputedStyle(zChild[1].element).width   ),
                        // containDefault: numberParse(   this.wordsService[this.wordsTemplateVariable].quantity[1][1].metadata.imageDefaultWidth   )  
                        containDefault:1258,
                        misc:[.5],
                        type:'direct'
                    })
                    this.ref.detectChanges()     
                    zChild[5].style['top'] = (   numberParse(   this.wordsService[this.wordsTemplateVariable].quantity[1][0].metadata.imageDefaultTop[1]   ) + 35   ).toString() + "px"  
                    this.ref.detectChanges()          
                    zChild[5].style['left'] = 
                    (
                        numberParse(   zChild[4].style.width   ) + 
                        numberParse(   zChild[4].style.left   ) + 
                        25
                    ).toString() + 'px'  
                    zChild[7].style['left'] = 
                    (
                        numberParse(   zChild[6].style.width   ) + 
                        numberParse(   zChild[6].style.left   ) + 
                        25
                    ).toString() + 'px'   
                    zChild[6].style['top'] = 
                    (
                        numberParse(   zChild[4].style.height   ) + 
                        numberParse(   zChild[4].style.top   ) + 
                        25
                    ).toString() + 'px'      
                    zChild[7].style['top'] = 
                    (
                        numberParse(   zChild[5].style.height   ) + 
                        numberParse(   zChild[5].style.top   ) + 
                        25
                    ).toString() + 'px'  
                    zChild[10].style['left'] = xPosition({
                        contain:numberParse(   this.window.getComputedStyle(zChild[9].element).width   ) + 
                                numberParse(   this.window.getComputedStyle(zChild[9].element).left   ) ,
                        target:numberParse(   this.window.getComputedStyle(zChild[10].element).width   ),
                        containPos:(
                                    (
                                        numberParse(   this.window.getComputedStyle(zChild[9].element).width   ) /
                                        (
                                            numberParse(   this.window.getComputedStyle(zChild[9].element).width   ) + 
                                            numberParse(   this.window.getComputedStyle(zChild[9].element).left   )                                         
                                        )
                                    ) 
                                )/2 +
                                (
                                    numberParse(   this.window.getComputedStyle(zChild[9].element).left   ) /
                                    (
                                        numberParse(   this.window.getComputedStyle(zChild[9].element).width   ) + 
                                        numberParse(   this.window.getComputedStyle(zChild[9].element).left   )                                         
                                    )
                                )
                    })      
                    this.ref.detectChanges()  
                    zChild[1].style['height']  = 
                    (
                        numberParse(   zChild[7].style['height']   ) + 
                        numberParse(   zChild[7].style['top']   ) + 
                        100
                    ).toString() + 'px'
                    this.ref.detectChanges()                                                                                                                                                                                        
                }                    
            })    
            this.wordsService.wordsResizeEventSubscription3 = this.wordsService.wordsResizeEvent$.subscribe(()=>{
                // console.log(   this.window.getComputedStyle(z.element).height   )
                // console.log(   this.window.getComputedStyle(z.element.parentElement).top   )
                this.wordsService.footerComponentObject0.quantity[1][1].metadata.wordsCO2.next([
                    this.window.getComputedStyle(zChild[1].element).height,
                    this.window.getComputedStyle(zChild[1].element.parentElement).top,
                    'home' 
                ])
                this.wordsService.overlayComponentObject4.quantity[1][0].metadata.wordsCO2.next([
                    this.window.getComputedStyle(zChild[1].element.parentElement).top
                ])                
            })
        }
        

        else if(   this.wordsTemplateVariable === 'wordsComponentObject3'   ){


            let zChild: zChildren[] =[{
                element: this.window.document.querySelector('app-words[ng-reflect-words-template-variable='+this.wordsTemplateVariable+']') as HTMLElement,
                style:this.wordsService[this.wordsTemplateVariable].quantity[0][0].ngStyle[0][0],
            }]          
            // console.log(   this.window.document.querySelector('app-words[ng-reflect-words-template-variable='+this.wordsTemplateVariable+']')  ) 
            // console.log(this.wordsMyElements._results)
            // console.log(zChild)
            let zCheckpoint = []                         
            this.wordsMyElements._results.map((x:any,i:any)=>{


                if(   x.nativeElement.id === 'w_o_r_d_s_Board'   ){
                    zCheckpoint.push(i)
                }    
                
                
                if(    x.nativeElement.id === 'w_o_r_d_s_Title'   ){
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
                    return qq.wordsMyElements._results.length === 1 ? qq.wordsMyElements._results : qq.wordsMyElements._results.slice(y,zCheckpoint[j+1])
                })(this).map((x:any,i:any)=>{     
                    // console.log(   x.nativeElement.id   )
                    // console.log(   this.wordsService[this.wordsTemplateVariable].quantity[1][j].val  )

                    while(   
                        this.wordsService[this.wordsTemplateVariable].quantity[1][j].quantity[zGrid.a][zGrid.b] === undefined &&   
                        zGrid.b +1 > this.wordsService[this.wordsTemplateVariable].quantity[1][j].quantity[zGrid.a].length
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


                    if(   x.nativeElement.id === this.wordsService[this.wordsTemplateVariable].quantity[1][j].val[zGrid.a][zGrid.b]   &&
                        (   
                            this.wordsService[this.wordsTemplateVariable].quantity[1][j].bool[zGrid.a][zGrid.b] === 'true' ||
                            this.wordsService[this.wordsTemplateVariable].quantity[1][j].bool[zGrid.a][zGrid.b] === 'link' ||
                            this.wordsService[this.wordsTemplateVariable].quantity[1][j].bool[zGrid.a][zGrid.b] === 'button' 
                        )    
                    ){               
                        
                        
                        zChild.push({
                            element:x.nativeElement as HTMLElement,
                            style:this.wordsService[this.wordsTemplateVariable].quantity[1][j].ngStyle[zGrid.a][zGrid.b],
                            innerText: this.wordsService[this.wordsTemplateVariable].quantity[1][j].text[zGrid.a][zGrid.b]
                        })
                        

                        if(   this.wordsService[this.wordsTemplateVariable].quantity[1][j].quantity[zGrid.a][zGrid.b+1] === undefined   ){


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
            console.log(zChild)
            this.wordsService.wordsResizeEventSubscription4 = this.wordsService.wordsResizeEvent$.subscribe(()=>{
                zChild[2].style['left'] =  xPosition({
                    contain:numberParse(   this.window.getComputedStyle(zChild[1].element).width   ),
                    target: getTextWidth({
                        elementText:zChild[2].innerText,
                        font: this.window.getComputedStyle(   zChild[2].element ).getPropertyValue('font-size') + 
                        " " +
                        this.window.getComputedStyle(   zChild[2].element ).getPropertyValue('font-family') 
                    })
                })
                zChild[3].style['left'] =  xPosition({
                    contain:numberParse(   this.window.getComputedStyle(zChild[1].element).width   ),
                    target:numberParse(   this.window.getComputedStyle(zChild[3].element).width   )
                })  

                zChild[6].style['height'] =  resize({
                    default:numberParse(   this.wordsService.wordsCO3ImageDefaultHeight[0]   ),
                    containActual:numberParse(   this.window.getComputedStyle(   zChild[1].element   ).width   ),
                    containDefault:1050
                }) 
                zChild[6].style['width'] = resize({
                    default:numberParse(   this.wordsService.wordsCO3ImageDefaultWidth[0]    ),
                    containActual:numberParse(   this.window.getComputedStyle(   zChild[1].element   ).width   ),
                    containDefault:1050
                })   
                this.ref.detectChanges()    
                zChild[5].style['width'] = (
                    .95 * numberParse(   this.window.getComputedStyle(   zChild[6].element   ).width   )
                ).toString()+'px'      
                // console.log(zChild[5].style['width'])    
                this.ref.detectChanges()
                zChild[4].style['left'] = xPosition({
                    contain:numberParse(   this.window.getComputedStyle(zChild[1].element).width   ),
                    target:numberParse(   this.window.getComputedStyle(zChild[4].element).width   ),
                    containPos:.27
                })   
                zChild[4].style['top'] = (
                    numberParse(   this.wordsService.wordsCO3TitleDefaultTop[0]  ) -   (
                        numberParse(   this.wordsService.wordsCO3ImageDefaultHeight[0]   ) -
                        numberParse(   this.window.getComputedStyle(    zChild[6].element   ).height   )       
                    )
                ).toString() + 'px'                   
                zChild[5].style['left'] = xPosition({
                    contain:numberParse(   this.window.getComputedStyle(zChild[1].element).width   ),
                    target:numberParse(   this.window.getComputedStyle(zChild[5].element).width   ),
                    containPos:.27
                })
                zChild[5].style['top'] = (
                    numberParse(   this.wordsService.wordsCO3ParagraphDefaultTop[0]  ) -   (
                        numberParse(   this.wordsService.wordsCO3ImageDefaultHeight[0]   ) -
                        numberParse(   this.window.getComputedStyle(    zChild[6].element   ).height   )       
                    )
                ).toString() + 'px'                                                   
                zChild[6].style['left'] = xPosition({
                    contain:numberParse(   this.window.getComputedStyle(zChild[1].element).width   ),
                    target:numberParse(   this.window.getComputedStyle(zChild[6].element).width   ),
                    containPos:.27
                })
                this.ref.detectChanges()

                zChild[9].style['height'] =  resize({
                    default:numberParse(   this.wordsService.wordsCO3ImageDefaultHeight[1]   ),
                    containActual:numberParse(   this.window.getComputedStyle(   zChild[1].element   ).width   ),
                    containDefault:1050
                }) 
                zChild[9].style['width'] = resize({
                    default:numberParse(   this.wordsService.wordsCO3ImageDefaultWidth[1]    ),
                    containActual:numberParse(   this.window.getComputedStyle(   zChild[1].element   ).width   ),
                    containDefault:1050
                })                 
                this.ref.detectChanges()  
                zChild[8].style['width'] = (
                    .95 * numberParse(   this.window.getComputedStyle(   zChild[9].element   ).width   )
                ).toString()+'px'      
                // console.log(zChild[5].style['width'])    
                this.ref.detectChanges()                             
                zChild[7].style['left'] = xPosition({
                    contain:numberParse(   this.window.getComputedStyle(zChild[1].element).width   ),
                    target:numberParse(   this.window.getComputedStyle(zChild[7].element).width   ),
                    containPos:.72
                })    
                zChild[7].style['top'] = (
                    numberParse(   this.wordsService.wordsCO3TitleDefaultTop[1]   ) -   (
                        numberParse(   this.wordsService.wordsCO3ImageDefaultHeight[1]   ) -
                        numberParse(   this.window.getComputedStyle(    zChild[9].element   ).height   )       
                    )
                ).toString() + 'px'                  
                zChild[8].style['left'] = xPosition({
                    contain:numberParse(   this.window.getComputedStyle(zChild[1].element).width   ),
                    target:numberParse(   this.window.getComputedStyle(zChild[8].element).width   ),
                    containPos:.72
                })
                zChild[8].style['top'] = (
                    numberParse(   this.wordsService.wordsCO3ParagraphDefaultTop[1]   ) -   (
                        numberParse(   this.wordsService.wordsCO3ImageDefaultHeight[1]   ) -
                        numberParse(   this.window.getComputedStyle(    zChild[9].element   ).height   )       
                    )
                ).toString() + 'px'                                                 
                zChild[9].style['left'] = xPosition({
                    contain:numberParse(   this.window.getComputedStyle(zChild[1].element).width   ),
                    target:numberParse(   this.window.getComputedStyle(zChild[9].element).width   ),
                    containPos:.72
                })      
                this.ref.detectChanges()

                zChild[12].style['height'] =  resize({
                    default:numberParse(   this.wordsService.wordsCO3ImageDefaultHeight[2]   ),
                    containActual:numberParse(   this.window.getComputedStyle(   zChild[1].element   ).width   ),
                    containDefault:1050
                }) 
                zChild[12].style['width'] = resize({
                    default:numberParse(   this.wordsService.wordsCO3ImageDefaultWidth[2]    ),
                    containActual:numberParse(   this.window.getComputedStyle(   zChild[1].element   ).width   ),
                    containDefault:1050
                })                 
                this.ref.detectChanges()  
                zChild[11].style['width'] = (
                    .95 * numberParse(   this.window.getComputedStyle(   zChild[12].element   ).width   )
                ).toString()+'px'      
                // console.log(zChild[5].style['width'])    
                this.ref.detectChanges()
                zChild[12].style['top'] = (
                    (
                        numberParse(   this.window.getComputedStyle(    zChild[5].element   ).height   ) +
                        numberParse(   this.window.getComputedStyle(    zChild[5].element   ).top   ) +
                        60
                    )
                ).toString() + 'px' 
                this.ref.detectChanges()                
                zChild[10].style['left'] = xPosition({
                    contain:numberParse(   this.window.getComputedStyle(zChild[1].element).width   ),
                    target:numberParse(   this.window.getComputedStyle(zChild[10].element).width   ),
                    containPos:.27
                })    
                zChild[10].style['top'] = (
                    numberParse(   this.wordsService.wordsCO3TitleDefaultTop[2]   ) - 
                    (
                        numberParse(   this.wordsService.wordsCO3ImageDefaultHeight[2]   ) -
                        numberParse(   this.window.getComputedStyle(    zChild[12].element   ).height   )      
                    ) -
                    (
                        numberParse(   this.wordsService.wordsCO3ImageDefaultTop[2]   ) -
                        numberParse(   this.window.getComputedStyle(    zChild[12].element   ).top   )      
                    )                       
                ).toString() + 'px'                
                zChild[11].style['left'] = xPosition({
                    contain:numberParse(   this.window.getComputedStyle(zChild[1].element).width   ),
                    target:numberParse(   this.window.getComputedStyle(zChild[11].element).width   ),
                    containPos:.27
                })  
                zChild[11].style['top'] = (
                    numberParse(   this.wordsService.wordsCO3ParagraphDefaultTop[2]   ) -   
                    (
                        numberParse(   this.wordsService.wordsCO3ImageDefaultHeight[2]   ) -
                        numberParse(   this.window.getComputedStyle(    zChild[12].element   ).height   )      
                    ) -
                    (
                        numberParse(   this.wordsService.wordsCO3ImageDefaultTop[2]   ) -
                        numberParse(   this.window.getComputedStyle(    zChild[12].element   ).top   )      
                    )                     
                ).toString() + 'px'                                                  
                zChild[12].style['left'] = xPosition({
                    contain:numberParse(   this.window.getComputedStyle(zChild[1].element).width   ),
                    target:numberParse(   this.window.getComputedStyle(zChild[12].element).width   ),
                    containPos:.27
                }) 
                this.ref.detectChanges()

                zChild[15].style['height'] =  resize({
                    default:numberParse(   this.wordsService.wordsCO3ImageDefaultHeight[3]   ),
                    containActual:numberParse(   this.window.getComputedStyle(   zChild[1].element   ).width   ),
                    containDefault:1050
                }) 
                zChild[15].style['width'] = resize({
                    default:numberParse(   this.wordsService.wordsCO3ImageDefaultWidth[3]    ),
                    containActual:numberParse(   this.window.getComputedStyle(   zChild[1].element   ).width   ),
                    containDefault:1050
                })                 
                this.ref.detectChanges()  
                zChild[14].style['width'] = (
                    .95 * numberParse(   this.window.getComputedStyle(   zChild[15].element   ).width   )
                ).toString()+'px'      
                // console.log(zChild[5].style['width'])    
                this.ref.detectChanges()
                zChild[15].style['top'] = (
                    (
                        numberParse(   this.window.getComputedStyle(    zChild[8].element   ).height   ) +
                        numberParse(   this.window.getComputedStyle(    zChild[8].element   ).top   ) +
                        60
                    )
                ).toString() + 'px' 
                this.ref.detectChanges()                   
                zChild[13].style['left'] = xPosition({
                    contain:numberParse(   this.window.getComputedStyle(zChild[1].element).width   ),
                    target:numberParse(   this.window.getComputedStyle(zChild[13].element).width   ),
                    containPos:.72
                })   
                zChild[13].style['top'] = (
                    numberParse(   this.wordsService.wordsCO3TitleDefaultTop[3]   ) - 
                    (
                        numberParse(   this.wordsService.wordsCO3ImageDefaultHeight[3]   ) -
                        numberParse(   this.window.getComputedStyle(    zChild[15].element   ).height   )      
                    ) -
                    (
                        numberParse(   this.wordsService.wordsCO3ImageDefaultTop[3]   ) -
                        numberParse(   this.window.getComputedStyle(    zChild[15].element   ).top   )      
                    )                       
                ).toString() + 'px'                 
                zChild[14].style['left'] = xPosition({
                    contain:numberParse(   this.window.getComputedStyle(zChild[1].element).width   ),
                    target:numberParse(   this.window.getComputedStyle(zChild[14].element).width   ),
                    containPos:.72
                })                                 
                zChild[14].style['top'] =  (
                    numberParse(   this.wordsService.wordsCO3ParagraphDefaultTop[3]   ) -   
                    (
                        numberParse(   this.wordsService.wordsCO3ImageDefaultHeight[3]   ) -
                        numberParse(   this.window.getComputedStyle(    zChild[15].element   ).height   )      
                    ) -
                    (
                        numberParse(   this.wordsService.wordsCO3ImageDefaultTop[3]   ) -
                        numberParse(   this.window.getComputedStyle(    zChild[15].element   ).top   )      
                    )                     
                ).toString() + 'px'                
                zChild[15].style['left'] = xPosition({
                    contain:numberParse(   this.window.getComputedStyle(zChild[1].element).width   ),
                    target:numberParse(   this.window.getComputedStyle(zChild[15].element).width   ),
                    containPos:.72
                })                                                     
                this.ref.detectChanges()
                // zChild.forEach((x,i)=>{
                //     console.log(x.element)
                //     console.log(this.window.getComputedStyle(   x.element   ).left,i)
                // })                 
            })

            

        }

        
        else if(   this.wordsTemplateVariable === 'wordsComponentObject4'   ){


            let zChild =[{
                element: this.window.document.querySelector('app-words[ng-reflect-words-template-variable='+this.wordsTemplateVariable+']') as HTMLElement,
                style:this.wordsService[this.wordsTemplateVariable].quantity[0][0].ngStyle[0][0],
                innerText:null
            }]          
            // console.log(   this.window.document.querySelector('app-words[ng-reflect-words-template-variable='+this.wordsTemplateVariable+']')  ) 
            // console.log(this.wordsMyElements._results)
            console.log(zChild)
            let zCheckpoint = []                         
            this.wordsMyElements._results.map((x:any,i:any)=>{


                if(   x.nativeElement.id === 'w_o_r_d_s_Board'   ){
                    zCheckpoint.push(i)
                }    
                
                
                if(    x.nativeElement.id === 'w_o_r_d_s_Title'   ){
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
                    return qq.wordsMyElements._results.length === 1 ? qq.wordsMyElements._results : qq.wordsMyElements._results.slice(y,zCheckpoint[j+1])
                })(this).map((x:any,i:any)=>{     
                    // console.log(   x.nativeElement.id   )
                    // console.log(   this.wordsService[this.wordsTemplateVariable].quantity[1][j].val  )

                    while(   
                        this.wordsService[this.wordsTemplateVariable].quantity[1][j].quantity[zGrid.a][zGrid.b] === undefined &&   
                        zGrid.b +1 > this.wordsService[this.wordsTemplateVariable].quantity[1][j].quantity[zGrid.a].length
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


                    if(   x.nativeElement.id === this.wordsService[this.wordsTemplateVariable].quantity[1][j].val[zGrid.a][zGrid.b]   &&
                        (   
                            this.wordsService[this.wordsTemplateVariable].quantity[1][j].bool[zGrid.a][zGrid.b] === 'true' ||
                            this.wordsService[this.wordsTemplateVariable].quantity[1][j].bool[zGrid.a][zGrid.b] === 'link' ||
                            this.wordsService[this.wordsTemplateVariable].quantity[1][j].bool[zGrid.a][zGrid.b] === 'button' 
                        )    
                    ){               
                        
                        
                        zChild.push({
                            element:x.nativeElement as HTMLElement,
                            style:this.wordsService[this.wordsTemplateVariable].quantity[1][j].ngStyle[zGrid.a][zGrid.b],
                            innerText: this.wordsService[this.wordsTemplateVariable].quantity[1][j].text[zGrid.a][zGrid.b]
                        })
                        

                        if(   this.wordsService[this.wordsTemplateVariable].quantity[1][j].quantity[zGrid.a][zGrid.b+1] === undefined   ){


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
            // console.log(zChild)
            this.wordsService.wordsResizeEventSubscription5 = this.wordsService.wordsResizeEvent$.subscribe(()=>{
                this.ref.detectChanges()
            })
            this.wordsService.wordsResizeEventSubscription6 = this.wordsService.wordsResizeEvent$.subscribe(()=>{
                // console.log('needed data from wordsCO4')
                // console.log(   this.window.getComputedStyle(z.element).height   )
                // console.log(   this.window.getComputedStyle(z.element.parentElement).top   )
                this.wordsService.footerComponentObject0.quantity[1][1].metadata.wordsCO4.next([
                    this.window.getComputedStyle(zChild[1].element).height,
                    this.window.getComputedStyle(zChild[1].element.parentElement).top,
                    'services'
                ])                
            })            

            

        }   
        
        
        else if(   this.wordsTemplateVariable === 'wordsComponentObject5'   ){


            let zChild =[{
                element: this.window.document.querySelector('app-words[ng-reflect-words-template-variable='+this.wordsTemplateVariable+']') as HTMLElement,
                style:this.wordsService[this.wordsTemplateVariable].quantity[0][0].ngStyle[0][0],
                innerText:null
            }]          
            // console.log(   this.window.document.querySelector('app-words[ng-reflect-words-template-variable='+this.wordsTemplateVariable+']')  ) 
            // console.log(this.wordsMyElements._results)
            console.log(zChild)
            let zCheckpoint = []                         
            this.wordsMyElements._results.map((x:any,i:any)=>{


                if(   x.nativeElement.id === 'w_o_r_d_s_Board'   ){
                    zCheckpoint.push(i)
                }    
                
                
                if(    x.nativeElement.id === 'w_o_r_d_s_Title'   ){
                    zCheckpoint.push(i)
                }


                if(    x.nativeElement.id === 'w_o_r_d_s_Image'   ){
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
                    return qq.wordsMyElements._results.length === 1 ? qq.wordsMyElements._results : qq.wordsMyElements._results.slice(y,zCheckpoint[j+1])
                })(this).map((x:any,i:any)=>{     
                    // console.log(   x.nativeElement.id   )
                    // console.log(   this.wordsService[this.wordsTemplateVariable].quantity[1][j].val  )

                    while(   
                        this.wordsService[this.wordsTemplateVariable].quantity[1][j].quantity[zGrid.a][zGrid.b] === undefined &&   
                        zGrid.b +1 > this.wordsService[this.wordsTemplateVariable].quantity[1][j].quantity[zGrid.a].length
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


                    if(   x.nativeElement.id === this.wordsService[this.wordsTemplateVariable].quantity[1][j].val[zGrid.a][zGrid.b]   &&
                        (   
                            this.wordsService[this.wordsTemplateVariable].quantity[1][j].bool[zGrid.a][zGrid.b] === 'true' ||
                            this.wordsService[this.wordsTemplateVariable].quantity[1][j].bool[zGrid.a][zGrid.b] === 'link' ||
                            this.wordsService[this.wordsTemplateVariable].quantity[1][j].bool[zGrid.a][zGrid.b] === 'button' 
                        )    
                    ){               
                        
                        
                        zChild.push({
                            element:x.nativeElement as HTMLElement,
                            style:this.wordsService[this.wordsTemplateVariable].quantity[1][j].ngStyle[zGrid.a][zGrid.b],
                            innerText: this.wordsService[this.wordsTemplateVariable].quantity[1][j].text[zGrid.a][zGrid.b]
                        })
                        

                        if(   this.wordsService[this.wordsTemplateVariable].quantity[1][j].quantity[zGrid.a][zGrid.b+1] === undefined   ){


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
            // console.log(zChild)
            this.wordsService.wordsResizeEventSubscription7 = this.wordsService.wordsResizeEvent$.subscribe(()=>{
                this.ref.detectChanges()
            })
            this.wordsService.wordsResizeEventSubscription8 = this.wordsService.wordsResizeEvent$.subscribe(()=>{
                // console.log('needed data from wordsCO4')
                // console.log(   this.window.getComputedStyle(z.element).height   )
                // console.log(   this.window.getComputedStyle(z.element.parentElement).top   )
                this.wordsService.footerComponentObject0.quantity[1][1].metadata.wordsCO5.next([
                    this.window.getComputedStyle(zChild[1].element).height,
                    this.window.getComputedStyle(zChild[1].element.parentElement).top,
                    'about' 
                ])                
            })            

            

        }      
        
        
        else if(   this.wordsTemplateVariable === 'wordsComponentObject6'   ){


            let zChild =[{
                element: this.window.document.querySelector('app-words[ng-reflect-words-template-variable='+this.wordsTemplateVariable+']') as HTMLElement,
                style:this.wordsService[this.wordsTemplateVariable].quantity[0][0].ngStyle[0][0],
                innerText:null
            }]          
            // console.log(   this.window.document.querySelector('app-words[ng-reflect-words-template-variable='+this.wordsTemplateVariable+']')  ) 
            console.log(this.wordsMyElements._results)
            console.log(zChild)
            let zCheckpoint = []                         
            this.wordsMyElements._results.map((x:any,i:any)=>{


                if(   x.nativeElement.id === 'w_o_r_d_s_Board'   ){
                    zCheckpoint.push(i)
                }    
                
                
                if(    x.nativeElement.id === 'w_o_r_d_s_Title'   ){
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
                    return qq.wordsMyElements._results.length === 1 ? qq.wordsMyElements._results : qq.wordsMyElements._results.slice(y,zCheckpoint[j+1])
                })(this).map((x:any,i:any)=>{     
                    // console.log(   x.nativeElement.id   )
                    // console.log(   this.wordsService[this.wordsTemplateVariable].quantity[1][j].val  )

                    while(   
                        this.wordsService[this.wordsTemplateVariable].quantity[1][j].quantity[zGrid.a][zGrid.b] === undefined &&   
                        zGrid.b +1 > this.wordsService[this.wordsTemplateVariable].quantity[1][j].quantity[zGrid.a].length
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


                    if(   x.nativeElement.id === this.wordsService[this.wordsTemplateVariable].quantity[1][j].val[zGrid.a][zGrid.b]   &&
                        (   
                            this.wordsService[this.wordsTemplateVariable].quantity[1][j].bool[zGrid.a][zGrid.b] === 'true' ||
                            this.wordsService[this.wordsTemplateVariable].quantity[1][j].bool[zGrid.a][zGrid.b] === 'link' ||
                            this.wordsService[this.wordsTemplateVariable].quantity[1][j].bool[zGrid.a][zGrid.b] === 'button' ||
                            this.wordsService[this.wordsTemplateVariable].quantity[1][j].bool[zGrid.a][zGrid.b] === 'h2' 
                        )    
                    ){               
                        
                        
                        zChild.push({
                            element:x.nativeElement as HTMLElement,
                            style:this.wordsService[this.wordsTemplateVariable].quantity[1][j].ngStyle[zGrid.a][zGrid.b],
                            innerText: this.wordsService[this.wordsTemplateVariable].quantity[1][j].text[zGrid.a][zGrid.b]
                        })
                        

                        if(   this.wordsService[this.wordsTemplateVariable].quantity[1][j].quantity[zGrid.a][zGrid.b+1] === undefined   ){


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
            console.log(zChild)          

            
        } 
        
        
        else if(   this.wordsTemplateVariable === 'wordsComponentObject8'   ){


            let zChild =[{
                element: this.window.document.querySelector('app-words[ng-reflect-words-template-variable='+this.wordsTemplateVariable+']') as HTMLElement,
                style:this.wordsService[this.wordsTemplateVariable].quantity[0][0].ngStyle[0][0],
                innerText:null
            }]          
            // console.log(   this.window.document.querySelector('app-words[ng-reflect-words-template-variable='+this.wordsTemplateVariable+']')  ) 
            // console.log(this.wordsMyElements._results)
            console.log(zChild)
            let zCheckpoint = []                         
            this.wordsMyElements._results.map((x:any,i:any)=>{


                if(   x.nativeElement.id === 'w_o_r_d_s_Board'   ){
                    zCheckpoint.push(i)
                }    
                
                
                if(    x.nativeElement.id === 'w_o_r_d_s_Title'   ){
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
                    return qq.wordsMyElements._results.length === 1 ? qq.wordsMyElements._results : qq.wordsMyElements._results.slice(y,zCheckpoint[j+1])
                })(this).map((x:any,i:any)=>{     
                    // console.log(   x.nativeElement.id   )
                    // console.log(   this.wordsService[this.wordsTemplateVariable].quantity[1][j].val  )

                    while(   
                        this.wordsService[this.wordsTemplateVariable].quantity[1][j].quantity[zGrid.a][zGrid.b] === undefined &&   
                        zGrid.b +1 > this.wordsService[this.wordsTemplateVariable].quantity[1][j].quantity[zGrid.a].length
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


                    if(   x.nativeElement.id === this.wordsService[this.wordsTemplateVariable].quantity[1][j].val[zGrid.a][zGrid.b]   &&
                        (   
                            this.wordsService[this.wordsTemplateVariable].quantity[1][j].bool[zGrid.a][zGrid.b] === 'true' ||
                            this.wordsService[this.wordsTemplateVariable].quantity[1][j].bool[zGrid.a][zGrid.b] === 'link' ||
                            this.wordsService[this.wordsTemplateVariable].quantity[1][j].bool[zGrid.a][zGrid.b] === 'button' ||
                            this.wordsService[this.wordsTemplateVariable].quantity[1][j].bool[zGrid.a][zGrid.b] === 'h2' 
                        )    
                    ){               
                        
                        
                        zChild.push({
                            element:x.nativeElement as HTMLElement,
                            style:this.wordsService[this.wordsTemplateVariable].quantity[1][j].ngStyle[zGrid.a][zGrid.b],
                            innerText: this.wordsService[this.wordsTemplateVariable].quantity[1][j].text[zGrid.a][zGrid.b]
                        })
                        

                        if(   this.wordsService[this.wordsTemplateVariable].quantity[1][j].quantity[zGrid.a][zGrid.b+1] === undefined   ){


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
            console.log(zChild)
            this.wordsService.wordsResizeEventSubscription15 = this.wordsService.wordsResizeEvent$.subscribe(()=>{
                this.ref.detectChanges()
            })
            this.wordsService.wordsResizeEventSubscription16 = this.wordsService.wordsResizeEvent$.subscribe(()=>{
                // console.log('needed data from wordsCO4')
                // console.log(   this.window.getComputedStyle(z.element).height   )
                // console.log(   this.window.getComputedStyle(z.element.parentElement).top   )
                this.wordsService.footerComponentObject0.quantity[1][1].metadata.wordsCO8.next([
                    this.window.getComputedStyle(zChild[1].element).height,
                    this.window.getComputedStyle(zChild[1].element.parentElement).top,
                    'projects' 
                ])                
            })            

            

        }
        
        
        else if(   this.wordsTemplateVariable === 'wordsComponentObject9'   ){


            let zChild =[{
                element: this.window.document.querySelector('app-words[ng-reflect-words-template-variable='+this.wordsTemplateVariable+']') as HTMLElement,
                style:this.wordsService[this.wordsTemplateVariable].quantity[0][0].ngStyle[0][0],
                innerText:null
            }]          
            // console.log(   this.window.document.querySelector('app-words[ng-reflect-words-template-variable='+this.wordsTemplateVariable+']')  ) 
            // console.log(this.wordsMyElements._results)
            console.log(zChild)
            let zCheckpoint = []                         
            this.wordsMyElements._results.map((x:any,i:any)=>{


                if(   x.nativeElement.id === 'w_o_r_d_s_Board'   ){
                    zCheckpoint.push(i)
                }    
                
                
                if(    x.nativeElement.id === 'w_o_r_d_s_Title'   ){
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
                    return qq.wordsMyElements._results.length === 1 ? qq.wordsMyElements._results : qq.wordsMyElements._results.slice(y,zCheckpoint[j+1])
                })(this).map((x:any,i:any)=>{     
                    // console.log(   x.nativeElement.id   )
                    // console.log(   this.wordsService[this.wordsTemplateVariable].quantity[1][j].val  )

                    while(   
                        this.wordsService[this.wordsTemplateVariable].quantity[1][j].quantity[zGrid.a][zGrid.b] === undefined &&   
                        zGrid.b +1 > this.wordsService[this.wordsTemplateVariable].quantity[1][j].quantity[zGrid.a].length
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


                    if(   x.nativeElement.id === this.wordsService[this.wordsTemplateVariable].quantity[1][j].val[zGrid.a][zGrid.b]   &&
                        (   
                            this.wordsService[this.wordsTemplateVariable].quantity[1][j].bool[zGrid.a][zGrid.b] === 'true' ||
                            this.wordsService[this.wordsTemplateVariable].quantity[1][j].bool[zGrid.a][zGrid.b] === 'link' ||
                            this.wordsService[this.wordsTemplateVariable].quantity[1][j].bool[zGrid.a][zGrid.b] === 'button' ||
                            this.wordsService[this.wordsTemplateVariable].quantity[1][j].bool[zGrid.a][zGrid.b] === 'h2' 
                        )    
                    ){               
                        
                        
                        zChild.push({
                            element:x.nativeElement as HTMLElement,
                            style:this.wordsService[this.wordsTemplateVariable].quantity[1][j].ngStyle[zGrid.a][zGrid.b],
                            innerText: this.wordsService[this.wordsTemplateVariable].quantity[1][j].text[zGrid.a][zGrid.b]
                        })
                        

                        if(   this.wordsService[this.wordsTemplateVariable].quantity[1][j].quantity[zGrid.a][zGrid.b+1] === undefined   ){


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
            console.log(zChild)
            this.wordsService.wordsResizeEventSubscription17 = this.wordsService.wordsResizeEvent$.subscribe(()=>{
                this.ref.detectChanges()
            })
            this.wordsService.wordsResizeEventSubscription18 = this.wordsService.wordsResizeEvent$.subscribe(()=>{
                // console.log('needed data from wordsCO4')
                // console.log(   this.window.getComputedStyle(z.element).height   )
                // console.log(   this.window.getComputedStyle(z.element.parentElement).top   )
                this.wordsService.footerComponentObject0.quantity[1][1].metadata.wordsCO9.next([
                    this.window.getComputedStyle(zChild[1].element).height,
                    this.window.getComputedStyle(zChild[1].element.parentElement).top ,
                    'contact'
                ])                
            })            

            

        }        
        // debugger
        this.wordsService.appViewComplete.next(
            (function(qq){
                qq.wordsService.appViewCompleteArray.push(   qq.wordsTemplateVariable   )
            })(this)
        )        
    }
  
    ngOnDestroy(){
        console.log(this.wordsTemplateVariable+' ngOnDestroy fires on dismount')
        // debugger

        if(   this.wordsTemplateVariable  === 'wordsComponentObject0'   ){
        
        
            this.wordsService.wordsResizeEventSubscription0.unsubscribe()
        
    
        }


        else if(   this.wordsTemplateVariable  === 'wordsComponentObject1'   ){
        
                

            this.wordsService.wordsResizeEventSubscription1.unsubscribe()
        
    
        }  
        

        else if(   this.wordsTemplateVariable  === 'wordsComponentObject2'   ){
        
                

            this.wordsService.wordsResizeEventSubscription2.unsubscribe()
            this.wordsService.wordsResizeEventSubscription3.unsubscribe()
        
    
        }      
        
        
        else if(   this.wordsTemplateVariable  === 'wordsComponentObject3'   ){
        
                

            this.wordsService.wordsResizeEventSubscription4.unsubscribe()
        
    
        }    
        
        
        else if(   this.wordsTemplateVariable  === 'wordsComponentObject4'   ){
        
                

            this.wordsService.wordsResizeEventSubscription5.unsubscribe()
            this.wordsService.wordsResizeEventSubscription6.unsubscribe()
        
    
        }         


        else if(   this.wordsTemplateVariable  === 'wordsComponentObject5'   ){
        
                

            this.wordsService.wordsResizeEventSubscription7.unsubscribe()
            this.wordsService.wordsResizeEventSubscription8.unsubscribe()
        
    
        }    


        else if(   this.wordsTemplateVariable  === 'wordsComponentObject8'   ){
        
                

            this.wordsService.wordsResizeEventSubscription15.unsubscribe()
            this.wordsService.wordsResizeEventSubscription16.unsubscribe()
        
    
        }               


        else if(   this.wordsTemplateVariable  === 'wordsComponentObject9'   ){
        
                

            this.wordsService.wordsResizeEventSubscription17.unsubscribe()
            this.wordsService.wordsResizeEventSubscription18.unsubscribe()
        
    
        }  
        
        
    }
}



