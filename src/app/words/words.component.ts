import {   Component, OnInit,Input,ViewChildren,Directive,Inject,AfterViewInit, AfterContentInit,OnDestroy,ChangeDetectorRef,ChangeDetectionStrategy   } from '@angular/core';
import {   WordsService   } from '../words.service';
import {   BrowserModule,platformBrowser,disableDebugTools   } from '@angular/platform-browser';
import {   WINDOW   } from '../window.service';
import {   fromEvent,interval   } from 'rxjs';
import {   take,timeout   } from 'rxjs/operators';

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
        /* at the slice this means that the the templatevariable must have a number
        so I can get to the exact index in the array
        */
        // console.log(   this.wordsService.wordsMyElements   )
       
        this.wordsService.wordsMyElements.subscribe((arr)=>{

            // console.log(   arr   )   

            // dealing with  missing elements
            // console.log(   this.wordsService.wordsComponentMonitor[this.wordsTemplateVariable]   )
            if(   this.wordsService[this.wordsTemplateVariable].styles.length >   arr[this.wordsService.wordsComponentMonitor[this.wordsTemplateVariable]].length   ){


                this.wordsService[this.wordsTemplateVariable].stylesCopy = this.wordsService[this.wordsTemplateVariable].styles.filter((a,i)=>{


                    if(   i === 0   ){
                        

                        return true


                    }


                    else if(   i!== 0   ){


                        if(   this.wordsStyleIndex[0] === 0   ){


                            // console.log(  i,this.wordsBoolIndex[0]      )
                            this.wordsStyleIndex[0] =  this.wordsStyle[ this.wordsBoolIndex[0]   ].length
                            this.wordsBoolIndex[0] += 1
                            
                            
                        }
                        

                        this.wordsStyleIndex[0] -= 1


                        if(   this.wordsbool[   this.wordsBoolIndex[0] -1   ] === 'true'   ){


                            return true


                        }


                    }
                    

                    
                    
                })
                this.wordsBoolIndex[0] = 0


            }

            
            else if(   this.wordsService[this.wordsTemplateVariable].styles.length  ===  arr[this.wordsService.wordsComponentMonitor[this.wordsTemplateVariable]].length   ){
                
                
                this.wordsService[this.wordsTemplateVariable].stylesCopy = this.wordsService[this.wordsTemplateVariable].styles


            }


            // console.log(   this.wordsbool   )
            // console.log(   this.wordsStyle   )
            // console.log(   this.wordsService[this.wordsTemplateVariable].stylesCopy, arr[this.wordsTemplateVariable.slice(-1)]     )
            for(   var index in this.wordsService[this.wordsTemplateVariable].stylesCopy    ){
            
                // console.log(   arr[this.wordsTemplateVariable.slice(-1)][index].nativeElement.id   )
                if(   this.wordsService[this.wordsTemplateVariable].stylesCopy[index].override === 'true'   ){


                    // for(   var prop in  this.wordsService[this.wordsTemplateVariable].stylesCopy[index].css   ){
                    //     // console.log(   arr[this.wordsTemplateVariable.slice(-1)][index].nativeElement   )
                    //     arr[this.wordsTemplateVariable.slice(-1)][index].nativeElement.style[prop] = this.wordsService[this.wordsTemplateVariable].stylesCopy[index].css[prop]   
                    // }
                    this.wordsService[this.wordsTemplateVariable].ngStyle[index] = this.wordsService[this.wordsTemplateVariable].stylesCopy[index].css
                    this.ref.detectChanges()

                                
                }


            }
            // console.log(   this.wordsService[this.wordsTemplateVariable].ngStyle   )
            this.wordsService[this.wordsTemplateVariable].metadata.cssAsync.next(1)
        })
    }
    
    ngAfterViewInit() {
        this.wordsService[this.wordsTemplateVariable].metadata.cssAsync.subscribe(()=>{  
            this.wordsService.wordsLoadEvent$ = fromEvent(this.window ,'load');
            this.wordsService.wordsResizeEvent$ = fromEvent(this.window,'resize');
            // console.log(   this.wordsService.wordsMyElementsArray[0][0].nativeElement   )            


            if(   this.wordsTemplateVariable  === 'wordsComponentObject0'   ){

            
                // console.group(   this.wordsTemplateVariable   )
                    // console.log(   this.wordsMyElements._results   )
                    let z = {
                        style:null,
                        element:null
                    };
                    let zChild =[]           
                    let zCheckpoint = []    
                    // console.log(   this.wordsService[this.wordsTemplateVariable].quantity[1]   )                           
                    this.wordsMyElements._results.map((x:any,i:any)=>{


                        if(   x.nativeElement.id === 'w_o_r_d_s_Board'   ){


                            z.style = i + 1
                            z.element = x.nativeElement
                            
        
                        }    
                        
                        
                        if(    x.nativeElement.id === 'w_o_r_d_s_Title'   ){
                            // console.log('quantity checkpoint')
                            zCheckpoint.push(i)
                        }
                        
                        
                    })
                    //we have to hope that things are in order
                    // console.log(zCheckpoint)   
                    let zGrid = {
                        a:0,
                        b:0,
                        e:null,
                        f:null
                    }        
                    zCheckpoint.map((y:any,j:any)=>{
                        // console.group('associated')
                        // console.log(    this.wordsMyElements._results.slice(y,zCheckpoint[j+1])   )
                        zGrid.a = 0
                        this.wordsMyElements._results.slice(y,zCheckpoint[j+1]).map((x:any,i:any)=>{     
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
                                    element:x.nativeElement,
                                    style:this.wordsService[this.wordsTemplateVariable].quantity[1][j].ngStyle[zGrid.a][zGrid.b] 
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
                    // console.log(   zChild   ) 
                    this.ref.detectChanges()                       
                // console.groupEnd()
                    this.wordsService[this.wordsTemplateVariable].quantity[1][0].metadata.TitleDefaultWidth = getTextWidth({
                        elementText:zChild[0].element.innerText,
                        font:this.window.getComputedStyle(   zChild[0].element ).getPropertyValue('font-size') + " Montserrat"
                    }) +55    
                    this.wordsService[this.wordsTemplateVariable].quantity[1][2].metadata.TitleDefaultWidth = getTextWidth({
                        elementText:zChild[5].element.innerText,
                        font:this.window.getComputedStyle(   zChild[5].element ).getPropertyValue('font-size') + " Montserrat"
                    })  
                    this.wordsService[this.wordsTemplateVariable].quantity[1][2].metadata.subTitleDefaultWidth = getTextWidth({
                        elementText:zChild[6].element.innerText,
                        font:this.window.getComputedStyle(   zChild[6].element   ).getPropertyValue('font-size') + " Montserrat"
                    })     
                    // console.log(    this.wordsService[this.wordsTemplateVariable].quantity[1][2].metadata.subTitleDefaultWidth,
                    //     zChild[6],
                    //     this.window.getComputedStyle(   zChild[6].element   ).getPropertyValue('font-size')   )                                                
                this.wordsService.wordsResizeEventSubscription0 = this.wordsService.wordsResizeEvent$.subscribe(()=>{
                    // zChild[0].style['font-size'] = resize({
                    //     default:numberParse(   this.wordsService[this.wordsTemplateVariable].quantity[1][0].metadata.TitleDefaultFontSize   ),
                    //     containActual:numberParse(   this.window.getComputedStyle(z.element).width   ),
                    //     containDefault: this.wordsService[this.wordsTemplateVariable].quantity[1][0].metadata.TitleDefaultWidth
                    // })
                    zChild[4].style['width'] = resize({
                        default:numberParse(   this.wordsService[this.wordsTemplateVariable].quantity[1][1].metadata.imageDefaultWidth   ),
                        containActual:numberParse(   this.window.getComputedStyle(z.element).width   ),
                        // containDefault: numberParse(   this.wordsService[this.wordsTemplateVariable].quantity[1][1].metadata.imageDefaultWidth   )  
                        containDefault:1050,
                        // misc:[.24]
                    })      
                    zChild[7].style['width'] = resize({
                        default:numberParse(   this.wordsService[this.wordsTemplateVariable].quantity[1][2].metadata.imageDefaultWidth   ),
                        containActual:numberParse(   this.window.getComputedStyle(z.element).width   ),
                        // containDefault: numberParse(   this.wordsService[this.wordsTemplateVariable].quantity[1][1].metadata.imageDefaultWidth   )  
                        containDefault:1050,
                        // misc:[.24]
                    })       
                    zChild[4].style['height'] = resize({
                        default:numberParse(   this.wordsService[this.wordsTemplateVariable].quantity[1][1].metadata.imageDefaultHeight   ),
                        containActual:numberParse(   this.window.getComputedStyle(z.element).width   ),
                        // containDefault: numberParse(   this.wordsService[this.wordsTemplateVariable].quantity[1][1].metadata.imageDefaultWidth   )  
                        containDefault:1050,
                        // misc:[.24]
                    })      
                    zChild[7].style['height'] = resize({
                        default:numberParse(   this.wordsService[this.wordsTemplateVariable].quantity[1][2].metadata.imageDefaultHeight   ),
                        containActual:numberParse(   this.window.getComputedStyle(z.element).width   ),
                        // containDefault: numberParse(   this.wordsService[this.wordsTemplateVariable].quantity[1][1].metadata.imageDefaultWidth   )  
                        containDefault:1050,
                        // misc:[.24]
                    })                                                 
                    // console.log(   zChild[0].style['font-size']    )
                    // console.log(   zChild[4].style['width']   )
                    this.ref.detectChanges()    


                    if(   numberParse(   this.window.getComputedStyle(   z.element   ).width   ) >= 710   ){

                        zChild[4].style['top'] = this.wordsService.wordsComponentObject0Image0Top 
                        zChild[7].style['top'] = this.wordsService.wordsComponentObject0Image1Top 
                        zChild[0].style['left'] =  xPosition({
                            contain:numberParse(   this.window.getComputedStyle(z.element).width   ),
                            target:numberParse(   this.window.getComputedStyle(zChild[0].element).width   )
                        })
                        zChild[1].style['left'] =  xPosition({
                            contain:numberParse(   this.window.getComputedStyle(z.element).width   ),
                            target:numberParse(   this.window.getComputedStyle(zChild[1].element).width   )
                        })      
                        zChild[2].style['left'] =  xPosition({
                            contain:numberParse(   this.window.getComputedStyle(z.element).width   ),
                            target:numberParse(   this.window.getComputedStyle(zChild[2].element).width   ),
                            containPos:.28
                        })   
                        zChild[2].style['top'] = (
                            numberParse(   this.wordsService[this.wordsTemplateVariable].quantity[1][1].metadata.titleDefaultTop   ) -   (
                                numberParse(   this.wordsService[this.wordsTemplateVariable].quantity[1][1].metadata.imageDefaultHeight   ) -
                                numberParse(   this.window.getComputedStyle(    zChild[4].element   ).height   )       
                            )
                        ).toString() + 'px'         
                        zChild[3].style['left'] =  xPosition({
                            contain:numberParse(   this.window.getComputedStyle(z.element).width   ),
                            target:numberParse(   this.window.getComputedStyle(zChild[3].element).width   ),
                            containPos:.28
                        })     
                        zChild[3].style['top'] = (
                            numberParse(   this.wordsService[this.wordsTemplateVariable].quantity[1][1].metadata.subTitleDefaultTop   ) -   (
                                numberParse(   this.wordsService[this.wordsTemplateVariable].quantity[1][1].metadata.imageDefaultHeight   ) -
                                numberParse(   this.window.getComputedStyle(    zChild[4].element   ).height   )       
                            )
                        ).toString() + 'px'                      
                        zChild[4].style['left'] =  xPosition({
                            contain:numberParse(   this.window.getComputedStyle(z.element).width   ),
                            target:numberParse(   this.window.getComputedStyle(zChild[4].element).width   ),
                            containPos:.28
                        }) 
                        // console.log(   
                        //     this.window.getComputedStyle(zChild[5].element).width,
                        //     this.window.getComputedStyle(zChild[6].element).width
                        // )                    
                        zChild[5].style['left'] =  xPosition({
                            contain:numberParse(   this.window.getComputedStyle(z.element).width   ),
                            target:this.wordsService[this.wordsTemplateVariable].quantity[1][2].metadata.TitleDefaultWidth,
                            containPos:.72
                        })  
                        zChild[5].style['top'] = (
                            numberParse(   this.wordsService[this.wordsTemplateVariable].quantity[1][2].metadata.titleDefaultTop   ) -   (
                                numberParse(   this.wordsService[this.wordsTemplateVariable].quantity[1][2].metadata.imageDefaultHeight   ) -
                                numberParse(   this.window.getComputedStyle(    zChild[7].element   ).height   )       
                            )
                        ).toString() + 'px'                       
                        zChild[6].style['left'] =  xPosition({
                            contain:numberParse(   this.window.getComputedStyle(z.element).width   ),
                            target:this.wordsService[this.wordsTemplateVariable].quantity[1][2].metadata.subTitleDefaultWidth,
                            containPos:.72
                        })     
                        this.ref.detectChanges() 
                        zChild[6].style['top'] = (
                            numberParse(   this.wordsService[this.wordsTemplateVariable].quantity[1][2].metadata.subTitleDefaultTop   ) -   (
                                numberParse(   this.wordsService[this.wordsTemplateVariable].quantity[1][2].metadata.imageDefaultHeight   ) -
                                numberParse(   this.window.getComputedStyle(    zChild[7].element   ).height   )       
                            )
                        ).toString() + 'px'   
                        // console.log(   
                        //     this.window.getComputedStyle(zChild[5].element).left,zChild[5].style['left'],
                        //     this.window.getComputedStyle(zChild[6].element).left,zChild[6].style['left'],
                        //     this.window.getComputedStyle(z.element).width  
                        // )                                      
                        zChild[7].style['left'] =  xPosition({
                            contain:numberParse(   this.window.getComputedStyle(z.element).width   ),
                            target:numberParse(   this.window.getComputedStyle(zChild[7].element).width   ),
                            containPos:.72
                        })     
                        this.ref.detectChanges()
                        this.wordsService[this.wordsTemplateVariable].ngStyle[z.style]['height'] = (
                            numberParse(   this.wordsService[this.wordsTemplateVariable].metadata.boardDefaultHeight  ) -   (
                                numberParse(   this.wordsService[this.wordsTemplateVariable].quantity[1][2].metadata.imageDefaultHeight   ) -
                                numberParse(   this.window.getComputedStyle(    zChild[7].element   ).height   )       
                            )
                        ).toString() + 'px'                         
                        
                    }                 
                    
                    
                    else if(   numberParse(   this.window.getComputedStyle(   z.element   ).width   ) < 710   ){

                           
                        zChild[4].style['top'] = '180px'
                        zChild[4].style['width'] = '88%'
                        zChild[4].style['height'] = resize({
                            default:numberParse(   '420px'  ),
                            containActual:numberParse(   this.window.getComputedStyle(z.element).width   ),
                            // containDefault: numberParse(   this.wordsService[this.wordsTemplateVariable].quantity[1][1].metadata.imageDefaultWidth   )  
                            containDefault:610,
                            // misc:[.24]
                        })                                  
                        zChild[4].style['left'] =  xPosition({
                            contain:numberParse(   this.window.getComputedStyle(z.element).width   ),
                            target:numberParse(   this.window.getComputedStyle(zChild[4].element).width   ),
                            containPos:.22
                        })            
                        this.ref.detectChanges()                                 
                        zChild[7].style['top'] = 
                        (
                            numberParse(   '740px'   ) -   (
                                numberParse(   '420px'   ) -
                                numberParse(   this.window.getComputedStyle(    zChild[4].element   ).height   )       
                            )
                        ).toString() + 'px'                        
                        zChild[7].style['width'] = '88%'
                        zChild[7].style['height'] = resize({
                            default:numberParse(   '420px'  ),
                            containActual:numberParse(   this.window.getComputedStyle(z.element).width   ),
                            // containDefault: numberParse(   this.wordsService[this.wordsTemplateVariable].quantity[1][1].metadata.imageDefaultWidth   )  
                            containDefault:610,
                            // misc:[.24]
                        }) 
                        zChild[7].style['left'] =  xPosition({
                            contain:numberParse(   this.window.getComputedStyle(z.element).width   ),
                            target:numberParse(   this.window.getComputedStyle(zChild[7].element).width   ),
                            containPos:.22
                        })         
                        this.ref.detectChanges()
                        zChild[0].style['left'] =  xPosition({
                            contain:numberParse(   this.window.getComputedStyle(z.element).width   ),
                            target:numberParse(   this.window.getComputedStyle(zChild[0].element).width   )
                        })
                        zChild[1].style['left'] =  xPosition({
                            contain:numberParse(   this.window.getComputedStyle(z.element).width   ),
                            target:numberParse(   this.window.getComputedStyle(zChild[1].element).width   )
                        })   
                        zChild[2].style['left'] =  xPosition({
                            contain:numberParse(   this.window.getComputedStyle(z.element).width   ),
                            target:numberParse(   this.window.getComputedStyle(zChild[2].element).width   ),
                            containPos:.5
                        })   
                        zChild[2].style['top'] = (
                            numberParse(   '620px'   ) -   (
                                numberParse(   '420px'   ) -
                                numberParse(   this.window.getComputedStyle(    zChild[4].element   ).height   )       
                            )
                        ).toString() + 'px'         
                        zChild[3].style['left'] =  xPosition({
                            contain:numberParse(   this.window.getComputedStyle(z.element).width   ),
                            target:numberParse(   this.window.getComputedStyle(zChild[3].element).width   ),
                            containPos:.5
                        })     
                        zChild[3].style['top'] = (
                            numberParse(   '690px'   ) -   (
                                numberParse(   '420px'   ) -
                                numberParse(   this.window.getComputedStyle(    zChild[4].element   ).height   )       
                            )
                        ).toString() + 'px'   
                        zChild[5].style['left'] =  xPosition({
                            contain:numberParse(   this.window.getComputedStyle(z.element).width   ),
                            target:this.wordsService[this.wordsTemplateVariable].quantity[1][2].metadata.TitleDefaultWidth,
                            containPos:.5
                        })  
                        zChild[5].style['top'] =(
                           (
                                numberParse(   this.window.getComputedStyle(    zChild[7].element   ).height  ) +
                                numberParse(   this.window.getComputedStyle(    zChild[7].element   ).top   )  +
                                20     
                            )
                        ).toString() + 'px'                       
                        zChild[6].style['left'] =  xPosition({
                            contain:numberParse(   this.window.getComputedStyle(z.element).width   ),
                            target:this.wordsService[this.wordsTemplateVariable].quantity[1][2].metadata.subTitleDefaultWidth,
                            containPos:.5
                        })      
                        zChild[6].style['top'] = (
                            (
                                 numberParse(   this.window.getComputedStyle(    zChild[7].element   ).height   ) +
                                 numberParse(   this.window.getComputedStyle(    zChild[7].element   ).top   ) +
                                 90
                             )
                         ).toString() + 'px' 
                        this.ref.detectChanges()
                        this.wordsService[this.wordsTemplateVariable].ngStyle[z.style]['height'] = (
                            numberParse(   zChild[6].style['top']   ) +
                            60
                        ).toString() + 'px'            
                        this.ref.detectChanges()                                                                 

                           
                    }
                    // console.log(   this.wordsService[this.wordsTemplateVariable].ngStyle[z.style]['height']   )
                })          


            }


            else if(   this.wordsTemplateVariable === 'wordsComponentObject1'   ){

                
                // console.log(   this.wordsMyElements._results   )
                let z = {
                    style:null,
                    element:null
                };
                let zChild =[]           
                let zCheckpoint = []    
                // console.log(   this.wordsService[this.wordsTemplateVariable].quantity[1]   )                           
                this.wordsMyElements._results.map((x:any,i:any)=>{


                    if(   x.nativeElement.id === 'w_o_r_d_s_Board'   ){


                        z.style = i + 1
                        z.element = x.nativeElement
                        
    
                    }    
                    
                    
                    if(   x.nativeElement.id === 'w_o_r_d_s_Paragraph'  ){
                        // console.log('quantity checkpoint')
                        zCheckpoint.push(i)
                    }
                    
                    
                })
                //we have to hope that things are in order
                // console.log(zCheckpoint)   
                let zGrid = {
                    a:0,
                    b:0,
                    e:null,
                    f:null
                }                        
                zCheckpoint.map((y:any,j:any)=>{
                    // console.group('associated')
                    console.log(    this.wordsMyElements._results.slice(y,zCheckpoint[j+1])   )
                    zGrid.a = 0
                    this.wordsMyElements._results.slice(y,zCheckpoint[j+1]).map((x:any,i:any)=>{     
                        console.log(  
                             x.nativeElement.id,
                             zGrid
                       )
                        // console.log(   this.wordsService[this.wordsTemplateVariable].quantity[1][j].val  )

                        while(   
                            this.wordsService[this.wordsTemplateVariable].quantity[1][j].quantity[zGrid.a][zGrid.b] === undefined &&   
                            zGrid.b +1 > this.wordsService[this.wordsTemplateVariable].quantity[1][j].quantity[zGrid.a].length
                        ){
                            console.log(   this.wordsService[this.wordsTemplateVariable].quantity[1][j].quantity[zGrid.a]   )
                            zGrid.a +=1
                            // debugger                                
                        }
                        console.log(   
                            this.wordsService[this.wordsTemplateVariable].quantity[1][j].quantity[zGrid.a],   
                            zChild,
                            zGrid
                        )



                        if(   x.nativeElement.id === this.wordsService[this.wordsTemplateVariable].quantity[1][j].val[zGrid.a][zGrid.b]   &&
                            (   
                                this.wordsService[this.wordsTemplateVariable].quantity[1][j].bool[zGrid.a][zGrid.b] === 'true' ||
                                this.wordsService[this.wordsTemplateVariable].quantity[1][j].bool[zGrid.a][zGrid.b] === 'link' ||
                                this.wordsService[this.wordsTemplateVariable].quantity[1][j].bool[zGrid.a][zGrid.b] === 'button' 
                            )    
                        ){               
                            
                            
                            zChild.push({
                                element:x.nativeElement,
                                style:this.wordsService[this.wordsTemplateVariable].quantity[1][j].ngStyle[zGrid.a][zGrid.b] 
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
                // console.log(    this.wordsMyElements._results   )
                // console.log(   zChild   ) 
                this.wordsService.wordsResizeEventSubscription0 = this.wordsService.wordsResizeEvent$.subscribe(()=>{
                    zChild[0].style['left'] = xPosition({
                        contain:numberParse(   this.window.getComputedStyle(z.element).width   ),
                        target:numberParse(   this.window.getComputedStyle(zChild[0].element).width   )
                    })  
                    zChild[1].style['left'] = xPosition({
                        contain:numberParse(   this.window.getComputedStyle(z.element).width   ),
                        target:numberParse(   this.window.getComputedStyle(zChild[1].element).width   ),
                        containPos:.88
                    })                    
                    zChild[2].style['left'] = xPosition({
                        contain:numberParse(   this.window.getComputedStyle(z.element).width   ),
                        target:numberParse(   this.window.getComputedStyle(zChild[2].element).width   )
                    })   
                    zChild[3].style['left'] = xPosition({
                        contain:numberParse(   this.window.getComputedStyle(z.element).width   ),
                        target:numberParse(   this.window.getComputedStyle(zChild[3].element).width   ),
                        containPos:.10
                    })                                                         
                    this.ref.detectChanges() 
                })    
            }


            else if(   this.wordsTemplateVariable === 'wordsComponentObject2'   ){

                
                let z = {
                    style:null,
                    element:null
                };
                let zChild =[]           
                let zCheckpoint = []                         
                this.wordsMyElements._results.map((x:any,i:any)=>{


                    if(   x.nativeElement.id === 'w_o_r_d_s_Board'   ){


                        z.style = i + 1
                        z.element = x.nativeElement
                        
    
                    }    
                    
                    
                    if(   x.nativeElement.id === 'w_o_r_d_s_Title'  ){
                        // console.log('quantity checkpoint')
                        zCheckpoint.push(i)
                    }
                    
                    
                })
                //we have to hope that things are in order
                let zGrid = {
                    a:0, // first index element group
                    b:0, // 2nd index specific element
                    c:0,
                    d:0,
                    e:null,
                    f:null
                }                  
                // console.log(zCheckpoint)   
                // console.log(zGrid)           
                // console.log(this.wordsMyElements._results)    
                // console.log(this.wordsService[this.wordsTemplateVariable].quantity[1][0].quantity)
                // console.log(this.wordsService[this.wordsTemplateVariable].quantity[1][0].bool)
                // console.log(this.wordsService[this.wordsTemplateVariable].quantity[1][0].val)
                // console.log(this.wordsService[this.wordsTemplateVariable].quantity[1][0].ngStyle)
                zCheckpoint.map((y:any,j:any)=>{
                    // console.group('associated')
                    // console.log(    this.wordsMyElements._results.slice(y,zCheckpoint[j+1])   )
                    zGrid.a = 0
                    this.wordsMyElements._results.slice(y,zCheckpoint[j+1]).map((x:any,i:any)=>{     
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
                                element:x.nativeElement,
                                style:this.wordsService[this.wordsTemplateVariable].quantity[1][j].ngStyle[zGrid.a][zGrid.b] 
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
                // console.log(    this.wordsMyElements._results   )
                // console.log(   zChild   ) 
                // console.log(   this.window.getComputedStyle(zChild[0].element).left   )
                this.wordsService.wordsResizeEventSubscription0 = this.wordsService.wordsResizeEvent$.subscribe(()=>{   
                    zChild[2].style['height'] =  resize({
                        default:numberParse(   this.wordsService[this.wordsTemplateVariable].quantity[1][0].metadata.imageDefaultHeight[0]   ),
                        containActual:numberParse(   this.window.getComputedStyle(z.element).width   ),
                        // containDefault: numberParse(   this.wordsService[this.wordsTemplateVariable].quantity[1][1].metadata.imageDefaultWidth   )  
                        containDefault:1100,
                        // misc:[.24]
                    }) 
                    zChild[2].style['width'] =  resize({
                        default:numberParse(   this.wordsService[this.wordsTemplateVariable].quantity[1][0].metadata.imageDefaultWidth[0]   ),
                        containActual:numberParse(   this.window.getComputedStyle(z.element).width   ),
                        // containDefault: numberParse(   this.wordsService[this.wordsTemplateVariable].quantity[1][1].metadata.imageDefaultWidth   )  
                        containDefault:1258,
                        misc:[.5],
                        type:'direct'
                    })      
                    zChild[3].style['height'] =  resize({
                        default:numberParse(   this.wordsService[this.wordsTemplateVariable].quantity[1][0].metadata.imageDefaultHeight[1]   ),
                        containActual:numberParse(   this.window.getComputedStyle(z.element).width   ),
                        // containDefault: numberParse(   this.wordsService[this.wordsTemplateVariable].quantity[1][1].metadata.imageDefaultWidth   )  
                        containDefault:1100,
                        // misc:[.24]
                    }) 
                    zChild[3].style['width'] =  resize({
                        default:numberParse(   this.wordsService[this.wordsTemplateVariable].quantity[1][0].metadata.imageDefaultWidth[1]   ),
                        containActual:numberParse(   this.window.getComputedStyle(z.element).width   ),
                        // containDefault: numberParse(   this.wordsService[this.wordsTemplateVariable].quantity[1][1].metadata.imageDefaultWidth   )  
                        containDefault:1258,
                        misc:[.5],
                        type:'direct'
                    })   
                    // console.log(
                    //     (   1258 - numberParse(   this.window.getComputedStyle(z.element).width   )   )*.1,
                    //     zChild[2].style['width'],
                    //     zChild[3].style['width']
                    // )                    
                    zChild[4].style['height'] =  resize({
                        default:numberParse(   this.wordsService[this.wordsTemplateVariable].quantity[1][0].metadata.imageDefaultHeight[2]   ),
                        containActual:numberParse(   this.window.getComputedStyle(z.element).width   ),
                        // containDefault: numberParse(   this.wordsService[this.wordsTemplateVariable].quantity[1][1].metadata.imageDefaultWidth   )  
                        containDefault:1183,
                        // misc:[.24]
                    }) 
                    zChild[4].style['width'] =   resize({
                        default:numberParse(   this.wordsService[this.wordsTemplateVariable].quantity[1][0].metadata.imageDefaultWidth[2]   ),
                        containActual:numberParse(   this.window.getComputedStyle(z.element).width   ),
                        // containDefault: numberParse(   this.wordsService[this.wordsTemplateVariable].quantity[1][1].metadata.imageDefaultWidth   )  
                        containDefault:1258,
                        misc:[.5],
                        type:'direct'
                    })   
                    zChild[5].style['height'] =  resize({
                        default:numberParse(   this.wordsService[this.wordsTemplateVariable].quantity[1][0].metadata.imageDefaultHeight[3]   ),
                        containActual:numberParse(   this.window.getComputedStyle(z.element).width   ),
                        // containDefault: numberParse(   this.wordsService[this.wordsTemplateVariable].quantity[1][1].metadata.imageDefaultWidth   )  
                        containDefault:1183,
                        // misc:[.24]
                    }) 
                    zChild[5].style['width'] =   resize({
                        default:numberParse(   this.wordsService[this.wordsTemplateVariable].quantity[1][0].metadata.imageDefaultWidth[3]   ),
                        containActual:numberParse(   this.window.getComputedStyle(z.element).width   ),
                        // containDefault: numberParse(   this.wordsService[this.wordsTemplateVariable].quantity[1][1].metadata.imageDefaultWidth   )  
                        containDefault:1258,
                        misc:[.5],
                        type:'direct'
                    })                                                                                                    
                    this.ref.detectChanges()
                    zChild[3].style['left'] = 
                    (
                        numberParse(   zChild[2].style.width   ) + 
                        numberParse(   zChild[2].style.left   ) + 
                        25
                    ).toString() + 'px'  
                    zChild[5].style['left'] = 
                    (
                        numberParse(   zChild[4].style.width   ) + 
                        numberParse(   zChild[4].style.left   ) + 
                        25
                    ).toString() + 'px'   
                    zChild[4].style['top'] = 
                    (
                        numberParse(   zChild[2].style.height   ) + 
                        numberParse(   zChild[2].style.top   ) + 
                        25
                    ).toString() + 'px'      
                    zChild[5].style['top'] = 
                    (
                        numberParse(   zChild[3].style.height   ) + 
                        numberParse(   zChild[3].style.top   ) + 
                        25
                    ).toString() + 'px'                                                                        
                    zChild[8].style['left'] = xPosition({
                        contain:numberParse(   this.window.getComputedStyle(zChild[7].element).width   ) + 
                                numberParse(   this.window.getComputedStyle(zChild[7].element).left   ) ,
                        target:numberParse(   this.window.getComputedStyle(zChild[8].element).width   ),
                        containPos:(
                                    (
                                        numberParse(   this.window.getComputedStyle(zChild[7].element).width   ) /
                                        (
                                            numberParse(   this.window.getComputedStyle(zChild[7].element).width   ) + 
                                            numberParse(   this.window.getComputedStyle(zChild[7].element).left   )                                         
                                        )
                                    ) 
                                )/2 +
                                (
                                    numberParse(   this.window.getComputedStyle(zChild[7].element).left   ) /
                                    (
                                        numberParse(   this.window.getComputedStyle(zChild[7].element).width   ) + 
                                        numberParse(   this.window.getComputedStyle(zChild[7].element).left   )                                         
                                    )
                                )
                    })                                                         
                    this.ref.detectChanges() 
                })    
            }
            
            
        })
    }
  
    ngOnDestroy(){

        if(   this.wordsTemplateVariable  === 'wordsComponentObject0'   ){
        
        
            this.wordsService.wordsLoadEventSubscription0.unsubscribe()
            this.wordsService.wordsResizeEventSubscription0.unsubscribe()
        
    
        }


        if(   this.wordsTemplateVariable  === 'wordsComponentObject0'   ){
        
        
            // this.wordsService.wordsLoadEventSubscription0.unsubscribe()
            this.wordsService.wordsResizeEventSubscription0.unsubscribe()
        
    
        }        


    }
}



