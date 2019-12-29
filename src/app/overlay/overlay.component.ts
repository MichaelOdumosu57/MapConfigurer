import { Component, OnInit,Input,ViewChildren,AfterViewInit,Inject, OnDestroy,ChangeDetectorRef,ChangeDetectionStrategy,AfterContentInit } from '@angular/core';
import {   WordsService   } from '../words.service';
import {   WINDOW   } from '../window.service';
import {   fromEvent,interval, of,from, Observable,merge, Subject, combineLatest } from 'rxjs';
import {   catchError,take,timeout,mapTo    } from 'rxjs/operators';
import {   zChildren   } from '../customExports'
function getStyle(   devObj:any   ){
    let location = null;
    devObj.ngStyleArray.filter((a:any)=>{
                            
                            
        // if(   Object.keys(a).length !== 0   ){


           devObj.lookStart+= 1


            if(  devObj.lookStart === devObj.index   ){


                // console.log(   devObj.lookStart   )
                location = devObj.lookStart + 1


            }


        // }


    })  
    return location
}

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
        devObj.default :
        result     
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
    selector: 'app-overlay',
    templateUrl: './overlay.component.html',
    styleUrls: ['./overlay.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OverlayComponent implements OnInit,AfterViewInit,OnDestroy {

    @ViewChildren('myOverlayVal') overlayMyElements: any;     

    constructor(
        private wordsService: WordsService,
        @Inject(WINDOW) private window: Window,
        private ref: ChangeDetectorRef,
    ) { }

    @Input() overlayTemplateVariable:string | any;

    overlayBool:Array<any> = this.wordsService.overlayBool
    overlayStyle:Array<any> = this.wordsService.overlayStyle
    overlayVal:Array<any> = this.wordsService.overlayVal
    // overlayCss:Array<any> = this.wordsService.overlayCss

    overlayStyleIndex:Array<any> = this.wordsService.overlayStyleIndex
    overlayBoolIndex:Array<any> = this.wordsService.overlayBoolIndex   

    overlayCustomWordWrapElements:Array<any> = this.wordsService.overlayCustomWordWrapElements 

    // access(){
    //     return this.wordsService
    // }

    // accessWindow(){
    //     return this.window
    // }
    
    
    ngOnInit() {
        console.log(this.overlayTemplateVariable+ '  ngOnInit fires one remount')
    }

    ngAfterViewInit(){
        console.log( this.overlayTemplateVariable+ ' ngAfterViewInit fires one remount') 
        this.wordsService.overlayLoadEvent$ = fromEvent(this.window,'load')
        this.wordsService.overlayResizeEvent$ = fromEvent(this.window,'resize')

        if(   this.overlayTemplateVariable === 'overlayComponentObject5'   ){


            let zChild:zChildren[] =[{
                element: this.window.document.querySelector('app-overlay[ng-reflect-overlay-template-variable='+this.overlayTemplateVariable+']') as HTMLElement,
                style:this.wordsService[this.overlayTemplateVariable].quantity[0][0].ngStyle[0][0],
                bool:this.wordsService[this.overlayTemplateVariable].quantity[0][0].bool[0][0]
            }]     
            let zCheckpoint = []                        
            this.overlayMyElements._results.map((x:any,i:any)=>{


                if(   x.nativeElement.id === 'o_v_e_r_l_a_y_Board'   ){
                    zCheckpoint.push(i)
                }                        
                
            
            })      
            let zGrid = {
                a:0, 
                b:0, 
            }  
            zCheckpoint.map((y:any,j:any)=>{
                // console.group('associated')
                // console.log(    this.wordsMyElements._results.slice(y,zCheckpoint[j+1])   )
                zGrid.a = 0;
                (function(qq){
                    return qq.overlayMyElements._results.length === 1 ? qq.overlayMyElements._results : qq.overlayMyElements._results.slice(y,zCheckpoint[j+1])
                })(this).map((x:any,i:any)=>{     
                    // console.log(   x.nativeElement.id   )
                    // console.log(   this.wordsService[this.wordsTemplateVariable].quantity[1][j].val  )
                    // console.log(x)
                    while(   
                        this.wordsService[this.overlayTemplateVariable].quantity[1][j].quantity[zGrid.a][zGrid.b] === undefined &&   
                        zGrid.b +1 > this.wordsService[this.overlayTemplateVariable].quantity[1][j].quantity[zGrid.a].length
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


                    if(   x.nativeElement.id === this.wordsService[this.overlayTemplateVariable].quantity[1][j].val[zGrid.a][zGrid.b]   &&
                        (   
                            this.wordsService[this.overlayTemplateVariable].quantity[1][j].bool[zGrid.a][zGrid.b] === 'true' ||
                            this.wordsService[this.overlayTemplateVariable].quantity[1][j].bool[zGrid.a][zGrid.b] === 'link' ||
                            this.wordsService[this.overlayTemplateVariable].quantity[1][j].bool[zGrid.a][zGrid.b] === 'icon' ||
                            this.wordsService[this.overlayTemplateVariable].quantity[1][j].bool[zGrid.a][zGrid.b] === 'button' 
                        )    
                    ){               


                        let domElement = x.nativeElement as HTMLElement;
                        zChild.push({
                            element:domElement,
                            style:this.wordsService[this.overlayTemplateVariable].quantity[1][j].ngStyle[zGrid.a][zGrid.b],
                            innerText: this.wordsService[this.overlayTemplateVariable].quantity[1][j].text[zGrid.a][zGrid.b],
                            bool:this.wordsService[this.overlayTemplateVariable].quantity[1][j].bool[zGrid.a][zGrid.b]
                        })
                        

                        if(   this.wordsService[this.overlayTemplateVariable].quantity[1][j].quantity[zGrid.a][zGrid.b+1] === undefined   ){


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

        }


        else if(   this.overlayTemplateVariable === 'overlayComponentObject4'    ){


            let zChild:zChildren[] =[{
                element: this.window.document.querySelector('app-overlay[ng-reflect-overlay-template-variable='+this.overlayTemplateVariable+']') as HTMLElement,
                style:this.wordsService[this.overlayTemplateVariable].quantity[0][0].ngStyle[0][0],
                bool:this.wordsService[this.overlayTemplateVariable].quantity[0][0].bool[0][0]
            }]          
            let zCheckpoint = []                        
            this.overlayMyElements._results.map((x:any,i:any)=>{


                if(   x.nativeElement.id === 'o_v_e_r_l_a_y_Board'   ){
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
                    return qq.overlayMyElements._results.length === 1 ? qq.overlayMyElements._results : qq.overlayMyElements._results.slice(y,zCheckpoint[j+1])
                })(this).map((x:any,i:any)=>{     
                    // console.log(   x.nativeElement.id   )
                    // console.log(   this.wordsService[this.wordsTemplateVariable].quantity[1][j].val  )
                    // console.log(x)
                    while(   
                        this.wordsService[this.overlayTemplateVariable].quantity[1][j].quantity[zGrid.a][zGrid.b] === undefined &&   
                        zGrid.b +1 > this.wordsService[this.overlayTemplateVariable].quantity[1][j].quantity[zGrid.a].length
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


                    if(   x.nativeElement.id === this.wordsService[this.overlayTemplateVariable].quantity[1][j].val[zGrid.a][zGrid.b]   &&
                        (   
                            this.wordsService[this.overlayTemplateVariable].quantity[1][j].bool[zGrid.a][zGrid.b] === 'true' ||
                            this.wordsService[this.overlayTemplateVariable].quantity[1][j].bool[zGrid.a][zGrid.b] === 'link' ||
                            this.wordsService[this.overlayTemplateVariable].quantity[1][j].bool[zGrid.a][zGrid.b] === 'icon' ||
                            this.wordsService[this.overlayTemplateVariable].quantity[1][j].bool[zGrid.a][zGrid.b] === 'button' 
                        )    
                    ){               



                        zChild.push({
                            element:x.nativeElement as HTMLElement,
                            style:this.wordsService[this.overlayTemplateVariable].quantity[1][j].ngStyle[zGrid.a][zGrid.b],
                            innerText: this.wordsService[this.overlayTemplateVariable].quantity[1][j].text[zGrid.a][zGrid.b],
                            bool:this.wordsService[this.overlayTemplateVariable].quantity[1][j].bool[zGrid.a][zGrid.b]
                        })
                        

                        if(   this.wordsService[this.overlayTemplateVariable].quantity[1][j].quantity[zGrid.a][zGrid.b+1] === undefined   ){


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
            // see what happens when app-overlay top is made 0px
            // console.log(   zChild   ) 

            this.wordsService[this.overlayTemplateVariable].metadata.aboutBoardDefaultWidth = 516
            // console.log(this.wordsService[this.overlayTemplateVariable].metadata.aboutBoardDefaultWidth )    
            this.wordsService[this.overlayTemplateVariable].metadata.titleDefaultFontSize = '141px'
            // console.log(   this.window.getComputedStyle(   zChild[4].element   )['font-size']   ) this value changes on navigation
            this.wordsService[this.overlayTemplateVariable].metadata.boardTitleDefaultWidth = 733
            // console.log(this.wordsService[this.overlayTemplateVariable].metadata.boardTitleDefaultWidth )
            this.ref.detectChanges()
            // console.log(zChild[7].style['top'])


            if(   this.wordsService[this.overlayTemplateVariable].metadata.aboutBarPreTitleOffsetTopDiff === null   ){


                this.wordsService.overlayResizeEventSubscription0 = this.wordsService.overlayResizeEvent$.subscribe(()=>{
                    this.wordsService[this.overlayTemplateVariable].metadata.aboutBarPreTitleDOMRectTopDiff = zChild[7].element.getBoundingClientRect().top - zChild[1].element.getBoundingClientRect().top                   
                    this.wordsService[this.overlayTemplateVariable].metadata.aboutBarPreTitleOffsetTopDiff = zChild[7].element.offsetTop - zChild[3].element.offsetTop
                    // console.log(   this.wordsService[this.overlayTemplateVariable].metadata.aboutBarPreTitleOffsetTopDiff   )  
                    this.wordsService.overlayResizeEventSubscription0.unsubscribe()              
                })


            }


            this.wordsService.overlayResizeEventSubscription1 = this.wordsService.overlayResizeEvent$.subscribe(()=>{   
                
                // zChild[1].style['width'] = this.window.getComputedStyle(   zChild[0].element   ).width
                // this.ref.detectChanges()
                if(   
                    Math.floor(   
                        zChild[3].element.clientHeight / 
                        numberParse(   window.getComputedStyle(zChild[3].element).getPropertyValue('font-size')   )   
                    ) > 1  ||
                    (
                        numberParse(   window.getComputedStyle(zChild[1].element).getPropertyValue('width')   ) < this.wordsService[this.overlayTemplateVariable].metadata.aboutBoardDefaultWidth + 200    
                    )
                ){
                    
                    
                    zChild[3].style['font-size'] = resize({
                        default:numberParse(   this.wordsService[this.overlayTemplateVariable].metadata.aboutPreTitleDefaultFontSize   ),
                        containActual:numberParse(   window.getComputedStyle(zChild[1].element)['width']   ),
                        containDefault:this.wordsService[this.overlayTemplateVariable].metadata.aboutBoardDefaultWidth +200
                    })
                    zChild[3].style['font-size'] = zChild[3].style['font-size'] > numberParse(   this.wordsService[this.overlayTemplateVariable].metadata.aboutPreTitleDefaultFontSize   )  ?
                    this.wordsService[this.overlayTemplateVariable].metadata.aboutPreTitleDefaultFontSize   :
                    zChild[3].style['font-size'].toString() + "px"
                    zChild[7].style['width'] = resize({ // can change the rate with direct
                        default:numberParse(   this.wordsService[this.overlayTemplateVariable].metadata.aboutMailLineDefaultWidth   ),
                        containActual:numberParse(   window.getComputedStyle(zChild[1].element)['width']   ),
                        containDefault:this.wordsService[this.overlayTemplateVariable].metadata.aboutBoardDefaultWidth +200
                    })
                    zChild[7].style['width'] = zChild[7].style['width'] > numberParse(   this.wordsService[this.overlayTemplateVariable].metadata.aboutMailLineDefaultWidth   )  ?
                    this.wordsService[this.overlayTemplateVariable].metadata.aboutMailLineDefaultWidth   :
                    zChild[7].style['width'].toString() + "px"        
                    this.ref.detectChanges()            
                    zChild[7].style['top'] = 
                    (
                        (
                            this.wordsService[this.overlayTemplateVariable].metadata.aboutBarPreTitleOffsetTopDiff - 
                            (
                                (
                                    numberParse(   this.wordsService[this.overlayTemplateVariable].metadata.aboutPreTitleDefaultFontSize   ) - 
                                    numberParse(   this.window.getComputedStyle(   zChild[3].element   )['font-size']   )
                                ) *
                                1.1
                                // ( // until we can find perfect solution for this
                                //     1+ 
                                //     // (
                                //     //     1-
                                //     //     (
                                //     //         numberParse(   this.window.getComputedStyle(   zChild[3].element   )['font-size']   )/
                                //     //         numberParse(   this.wordsService[this.overlayTemplateVariable].metadata.aboutPreTitleDefaultFontSize   ) *
                                //     //         1.9
                                //     //     )
                                //     // )
                                // )
                            )
                        ) + 
                        zChild[3].element.offsetTop
                    ).toString()
                    +"px"  
                    // console.table(
                        // this.wordsService[this.overlayTemplateVariable].metadata.aboutBarPreTitleOffsetTopDiff,
                    //     numberParse(   this.wordsService[this.overlayTemplateVariable].metadata.aboutPreTitleDefaultFontSize   ) - 
                    //     numberParse(   this.window.getComputedStyle(   zChild[3].element   )['font-size']   ),                        
                        // zChild[7].style['top']
                    // )
                    this.ref.detectChanges() 
                }


                else if(   
                    (
                        numberParse(   window.getComputedStyle(zChild[1].element).getPropertyValue('width')   ) >= this.wordsService[this.overlayTemplateVariable].metadata.aboutBoardDefaultWidth
                    )    
                ){

                    // console.log('redefault preTitle')
                    zChild[3].style['font-size'] = this.wordsService[this.overlayTemplateVariable].metadata.aboutPreTitleDefaultFontSize
                    zChild[7].style['top'] = this.wordsService[this.overlayTemplateVariable].metadata.aboutMailLineDefaultTop   
                    zChild[7].style['width'] = this.wordsService[this.overlayTemplateVariable].metadata.aboutMailLineDefaultWidth      
                    this.ref.detectChanges()             
                    // console.log(zChild[3].style['font-size'])
                    // console.log( zChild[7].style['top'] )
                    // console.log( zChild[7].style['width'] )
                    
                }                    


            })         
            this.wordsService.overlayResizeEventSubscription2 = this.wordsService.overlayResizeEvent$.subscribe(()=>{
                // console.log(   zChild[4].style['font-size']   )
                zChild[4].style['font-size'] = resize({
                    default:numberParse(   this.wordsService[this.overlayTemplateVariable].metadata.titleDefaultFontSize   ),
                    containActual:numberParse(   window.getComputedStyle(zChild[1].element)['width']   ),
                    containDefault:this.wordsService[this.overlayTemplateVariable].metadata.boardTitleDefaultWidth
                })
                // console.log(   zChild[4].style['font-size']   )
                zChild[4].style['font-size'] = zChild[4].style['font-size'] >  numberParse(   this.wordsService[this.overlayTemplateVariable].metadata.titleDefaultFontSize   ) ?
                this.wordsService[this.overlayTemplateVariable].metadata.titleDefaultFontSize   :
                zChild[4].style['font-size'].toString() + "px"
                // console.log(   zChild[4].style['font-size']   )
                this.ref.detectChanges()
                zChild[3].style['left'] = xPosition({
                    contain:numberParse(   this.window.getComputedStyle(zChild[1].element).width   ),
                    target:getTextWidth({
                        elementText:zChild[3].innerText,
                        font:this.window.getComputedStyle(   zChild[3].element   )['font-size'] +                 
                        " " +
                        this.window.getComputedStyle(   zChild[3].element   )['font-family']
                    })
                })
                zChild[4].style['left'] = xPosition({
                    contain:numberParse(   this.window.getComputedStyle(zChild[1].element).width   ),
                    target:getTextWidth({
                        elementText:zChild[4].innerText,
                        font:this.window.getComputedStyle(   zChild[4].element   )['font-size'] +                 
                        " " +
                        this.window.getComputedStyle(   zChild[4].element   )['font-family']
                    })
                })     
                zChild[5].style['left'] = xPosition({
                    contain:numberParse(   this.window.getComputedStyle(zChild[1].element).width   ),
                    target:getTextWidth({
                        elementText:zChild[5].innerText,
                        font:this.window.getComputedStyle(   zChild[5].element   )['font-size'] +                 
                        " " +
                        this.window.getComputedStyle(   zChild[5].element   )['font-family']
                    })
                })    
                zChild[6].style['left'] = xPosition({
                    contain:numberParse(   this.window.getComputedStyle(zChild[1].element).width   ),
                    target:numberParse(   this.window.getComputedStyle(zChild[6].element).width   )
                })      
                zChild[7].style['left'] = xPosition({
                    contain:numberParse(   this.window.getComputedStyle(zChild[1].element).width   ),
                    target:numberParse(   this.window.getComputedStyle(zChild[7].element).width   )
                })                                           
                this.ref.detectChanges()       
                zChild[5].style['top'] =this.window.getComputedStyle(zChild[6].element).top
                //for some reason this works
                this.ref.detectChanges()

            }) 
            this.wordsService.overlayResizeEventSubscription3 = 
            combineLatest(   
                this.wordsService[this.overlayTemplateVariable].quantity[1][0].metadata.wordsCO0,
                this.wordsService[this.overlayTemplateVariable].quantity[1][0].metadata.wordsCO2
            ).subscribe((rs)=>{
                // console.log(
                //     numberParse(   rs[0][0]   ) +
                //     numberParse(   rs[0][1]   ),
                //     numberParse(   rs[1][0]   ) -
                //     (
                //         numberParse(   rs[0][0]   ) +
                //         numberParse(   rs[0][1]   ) 
                //     )                   
                // )  
                zChild[2].style['height']  = (.7  * 
                    (
                        numberParse(   rs[1][0]   ) -
                            (
                                numberParse(   rs[0][0]   ) +
                                numberParse(   rs[0][1]   ) 
                            )  
                        )
                    ).toString() + 'px' 


                if(   this.window.getComputedStyle(   zChild[1].element).width > "946px"   ){

                            
                    zChild[2].style['width'] = resize({
                        default: numberParse(   this.wordsService[this.overlayTemplateVariable].quantity[1][0].metadata.image[1].defaultWidth   ),
                        containActual:numberParse(   this.window.getComputedStyle(   zChild[1].element   ).width   ),
                        containDefault:1262
                    }).toString() + "px"
                   
                    
                }         
                
                
                else if(   this.window.getComputedStyle(   zChild[1].element).width < "946px"   ){

                        
                    zChild[2].style['width'] = resize({
                        default: numberParse(   this.wordsService[this.overlayTemplateVariable].quantity[1][0].metadata.image[1].defaultWidth   ),
                        containActual:numberParse(   this.window.getComputedStyle(   zChild[1].element   ).width   ),
                        containDefault:562
                    }).toString() + "px"                       
                    
                
                }                 
                this.ref.detectChanges()
                zChild[2].style['top'] = 
                (
                    numberParse(
                        xPosition({
                            target:numberParse(zChild[2].style['height']),
                            contain:(
                                numberParse(   rs[1][0]   ) -
                                    (
                                        numberParse(   rs[0][0]   ) +
                                        numberParse(   rs[0][1]   ) 
                                    )  
                                )
                        })
                    ) + 
                    numberParse(   rs[0][0]   ) +
                    numberParse(   rs[0][1]   )
                ).toString() + 'px'  
                zChild[2].style['left'] = xPosition({
                    target:numberParse(   this.window.getComputedStyle(   zChild[2].element   ).width   ),
                    contain:numberParse(   this.window.getComputedStyle(   zChild[1].element   ).width   )
                })                              
                this.ref.detectChanges()
            })
            
            
        }


        else if(   this.overlayTemplateVariable === 'overlayComponentObject0'   ){


            let zChild:zChildren[] =[{
                element: this.window.document.querySelector('app-overlay[ng-reflect-overlay-template-variable='+this.overlayTemplateVariable+']') as HTMLElement,
                style:this.wordsService[this.overlayTemplateVariable].quantity[0][0].ngStyle[0][0],
                bool:this.wordsService[this.overlayTemplateVariable].quantity[0][0].bool[0][0]
            }]     
            let zCheckpoint = []                        
            this.overlayMyElements._results.map((x:any,i:any)=>{


                if(   x.nativeElement.id === 'o_v_e_r_l_a_y_Board'   ){
                    zCheckpoint.push(i)
                }                        
                
            
            })      
            let zGrid = {
                a:0, 
                b:0, 
            }  
            zCheckpoint.map((y:any,j:any)=>{
                // console.group('associated')
                // console.log(    this.wordsMyElements._results.slice(y,zCheckpoint[j+1])   )
                zGrid.a = 0;
                (function(qq){
                    return qq.overlayMyElements._results.length === 1 ? qq.overlayMyElements._results : qq.overlayMyElements._results.slice(y,zCheckpoint[j+1])
                })(this).map((x:any,i:any)=>{     
                    // console.log(   x.nativeElement.id   )
                    // console.log(   this.wordsService[this.wordsTemplateVariable].quantity[1][j].val  )
                    // console.log(x)
                    while(   
                        this.wordsService[this.overlayTemplateVariable].quantity[1][j].quantity[zGrid.a][zGrid.b] === undefined &&   
                        zGrid.b +1 > this.wordsService[this.overlayTemplateVariable].quantity[1][j].quantity[zGrid.a].length
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


                    if(   x.nativeElement.id === this.wordsService[this.overlayTemplateVariable].quantity[1][j].val[zGrid.a][zGrid.b]   &&
                        (   
                            this.wordsService[this.overlayTemplateVariable].quantity[1][j].bool[zGrid.a][zGrid.b] === 'true' ||
                            this.wordsService[this.overlayTemplateVariable].quantity[1][j].bool[zGrid.a][zGrid.b] === 'link' ||
                            this.wordsService[this.overlayTemplateVariable].quantity[1][j].bool[zGrid.a][zGrid.b] === 'icon' ||
                            this.wordsService[this.overlayTemplateVariable].quantity[1][j].bool[zGrid.a][zGrid.b] === 'button' 
                        )    
                    ){               


                        let domElement = x.nativeElement as HTMLElement;
                        zChild.push({
                            element:domElement,
                            style:this.wordsService[this.overlayTemplateVariable].quantity[1][j].ngStyle[zGrid.a][zGrid.b],
                            innerText: this.wordsService[this.overlayTemplateVariable].quantity[1][j].text[zGrid.a][zGrid.b],
                            bool:this.wordsService[this.overlayTemplateVariable].quantity[1][j].bool[zGrid.a][zGrid.b]
                        })
                        

                        if(   this.wordsService[this.overlayTemplateVariable].quantity[1][j].quantity[zGrid.a][zGrid.b+1] === undefined   ){


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
            this.wordsService.overlayResizeEventSubscription4 = this.wordsService.overlayResizeEvent$.subscribe(()=>{
                

                if(  
                    getTextWidth({
                        elementText:zChild[2].innerText,
                        font:this.window.getComputedStyle(   zChild[2].element   )['font-size'] +                 
                        " " +
                        this.window.getComputedStyle(   zChild[2].element   )['font-family']
                    }) < 368.4
                ){


                    zChild[2].style['font-size'] = resize({
                        default:numberParse(   this.wordsService.overlayComponentObject0TitleFontSize   ),
                        containActual:numberParse(   this.window.getComputedStyle(zChild[1].element).width   ),
                        containDefault:368.4,
                        type:'direct',
                        misc:[.18]
                    }).toString() + "px"
                    this.ref.detectChanges()
                }


                zChild[2].style['left'] = xPosition({
                    contain:numberParse(   this.window.getComputedStyle(zChild[1].element).width   ),
                    target:getTextWidth({
                        elementText:zChild[2].innerText,
                        font:this.window.getComputedStyle(   zChild[2].element   )['font-size'] +                 
                        " " +
                        this.window.getComputedStyle(   zChild[2].element   )['font-family']
                    })
                })  
                this.ref.detectChanges()                
            })
            
            
        }


        else if(   this.overlayTemplateVariable === 'overlayComponentObject1'   ){


            let zChild:zChildren[] =[{
                element: this.window.document.querySelector('app-overlay[ng-reflect-overlay-template-variable='+this.overlayTemplateVariable+']') as HTMLElement,
                style:this.wordsService[this.overlayTemplateVariable].quantity[0][0].ngStyle[0][0],
                bool:this.wordsService[this.overlayTemplateVariable].quantity[0][0].bool[0][0]
            }]     
            let zCheckpoint = []                        
            this.overlayMyElements._results.map((x:any,i:any)=>{


                if(   x.nativeElement.id === 'o_v_e_r_l_a_y_Board'   ){
                    zCheckpoint.push(i)
                }                        
                
            
            })      
            let zGrid = {
                a:0, 
                b:0, 
            }  
            zCheckpoint.map((y:any,j:any)=>{
                // console.group('associated')
                // console.log(    this.wordsMyElements._results.slice(y,zCheckpoint[j+1])   )
                zGrid.a = 0;
                (function(qq){
                    return qq.overlayMyElements._results.length === 1 ? qq.overlayMyElements._results : qq.overlayMyElements._results.slice(y,zCheckpoint[j+1])
                })(this).map((x:any,i:any)=>{     
                    // console.log(   x.nativeElement.id   )
                    // console.log(   this.wordsService[this.wordsTemplateVariable].quantity[1][j].val  )
                    // console.log(x)
                    while(   
                        this.wordsService[this.overlayTemplateVariable].quantity[1][j].quantity[zGrid.a][zGrid.b] === undefined &&   
                        zGrid.b +1 > this.wordsService[this.overlayTemplateVariable].quantity[1][j].quantity[zGrid.a].length
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


                    if(   x.nativeElement.id === this.wordsService[this.overlayTemplateVariable].quantity[1][j].val[zGrid.a][zGrid.b]   &&
                        (   
                            this.wordsService[this.overlayTemplateVariable].quantity[1][j].bool[zGrid.a][zGrid.b] === 'true' ||
                            this.wordsService[this.overlayTemplateVariable].quantity[1][j].bool[zGrid.a][zGrid.b] === 'link' ||
                            this.wordsService[this.overlayTemplateVariable].quantity[1][j].bool[zGrid.a][zGrid.b] === 'icon' ||
                            this.wordsService[this.overlayTemplateVariable].quantity[1][j].bool[zGrid.a][zGrid.b] === 'button' 
                        )    
                    ){               


                        let domElement = x.nativeElement as HTMLElement;
                        zChild.push({
                            element:domElement,
                            style:this.wordsService[this.overlayTemplateVariable].quantity[1][j].ngStyle[zGrid.a][zGrid.b],
                            innerText: this.wordsService[this.overlayTemplateVariable].quantity[1][j].text[zGrid.a][zGrid.b],
                            bool:this.wordsService[this.overlayTemplateVariable].quantity[1][j].bool[zGrid.a][zGrid.b]
                        })
                        

                        if(   this.wordsService[this.overlayTemplateVariable].quantity[1][j].quantity[zGrid.a][zGrid.b+1] === undefined   ){


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
            this.wordsService.overlayResizeEventSubscription5 = this.wordsService.overlayResizeEvent$.subscribe(()=>{
                // console.log(
                //     getTextWidth({
                //         elementText:zChild[2].innerText,
                //         font:this.window.getComputedStyle(   zChild[2].element   )['font-size'] +                 
                //         " " +
                //         this.window.getComputedStyle(   zChild[2].element   )['font-family']
                //     })      
                // )


                if(  
                    numberParse(   this.wordsService.overlayComponentObject1TitleWidth   ) > numberParse(   this.window.getComputedStyle(zChild[1].element).width   ) + 30                   
                ){


                    zChild[2].style['font-size'] = resize({
                        default:numberParse(   this.wordsService.overlayComponentObject1TitleFontSize   ),
                        containActual:numberParse(   this.window.getComputedStyle(zChild[1].element).width   ),
                        containDefault:500.6,
                        // type:'direct',
                        // misc:[.18]
                    }).toString() + "px"
                    this.ref.detectChanges()
                    // console.log(     zChild[2].style['font-size']   )

                }


                else if(  
                    567.6 < numberParse(   this.window.getComputedStyle(zChild[1].element).width   ) + 30                   
                ){   
                    
                    
                    zChild[2].style['font-size'] = this.wordsService.overlayComponentObject1TitleFontSize   
                    this.ref.detectChanges()


                }


                zChild[2].style['left'] = xPosition({
                    contain:numberParse(   this.window.getComputedStyle(zChild[1].element).width   ),
                    target:getTextWidth({
                        elementText:zChild[2].innerText,
                        font:this.window.getComputedStyle(   zChild[2].element   )['font-size'] +                 
                        " " +
                        this.window.getComputedStyle(   zChild[2].element   )['font-family']
                    })
                })  
                this.ref.detectChanges()                
            })
            
            
        }
        
        
        else if(   this.overlayTemplateVariable === 'overlayComponentObject2'   ){


            let zChild:zChildren[] =[{
                element: this.window.document.querySelector('app-overlay[ng-reflect-overlay-template-variable='+this.overlayTemplateVariable+']') as HTMLElement,
                style:this.wordsService[this.overlayTemplateVariable].quantity[0][0].ngStyle[0][0],
                bool:this.wordsService[this.overlayTemplateVariable].quantity[0][0].bool[0][0]
            }]     
            let zCheckpoint = []                        
            this.overlayMyElements._results.map((x:any,i:any)=>{


                if(   x.nativeElement.id === 'o_v_e_r_l_a_y_Board'   ){
                    zCheckpoint.push(i)
                }                        
                
            
            })      
            let zGrid = {
                a:0, 
                b:0, 
            }  
            zCheckpoint.map((y:any,j:any)=>{
                // console.group('associated')
                // console.log(    this.wordsMyElements._results.slice(y,zCheckpoint[j+1])   )
                zGrid.a = 0;
                (function(qq){
                    return qq.overlayMyElements._results.length === 1 ? qq.overlayMyElements._results : qq.overlayMyElements._results.slice(y,zCheckpoint[j+1])
                })(this).map((x:any,i:any)=>{     
                    // console.log(   x.nativeElement.id   )
                    // console.log(   this.wordsService[this.wordsTemplateVariable].quantity[1][j].val  )
                    // console.log(x)
                    while(   
                        this.wordsService[this.overlayTemplateVariable].quantity[1][j].quantity[zGrid.a][zGrid.b] === undefined &&   
                        zGrid.b +1 > this.wordsService[this.overlayTemplateVariable].quantity[1][j].quantity[zGrid.a].length
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


                    if(   x.nativeElement.id === this.wordsService[this.overlayTemplateVariable].quantity[1][j].val[zGrid.a][zGrid.b]   &&
                        (   
                            this.wordsService[this.overlayTemplateVariable].quantity[1][j].bool[zGrid.a][zGrid.b] === 'true' ||
                            this.wordsService[this.overlayTemplateVariable].quantity[1][j].bool[zGrid.a][zGrid.b] === 'link' ||
                            this.wordsService[this.overlayTemplateVariable].quantity[1][j].bool[zGrid.a][zGrid.b] === 'icon' ||
                            this.wordsService[this.overlayTemplateVariable].quantity[1][j].bool[zGrid.a][zGrid.b] === 'button' 
                        )    
                    ){               


                        let domElement = x.nativeElement as HTMLElement;
                        zChild.push({
                            element:domElement,
                            style:this.wordsService[this.overlayTemplateVariable].quantity[1][j].ngStyle[zGrid.a][zGrid.b],
                            innerText: this.wordsService[this.overlayTemplateVariable].quantity[1][j].text[zGrid.a][zGrid.b],
                            bool:this.wordsService[this.overlayTemplateVariable].quantity[1][j].bool[zGrid.a][zGrid.b]
                        })
                        

                        if(   this.wordsService[this.overlayTemplateVariable].quantity[1][j].quantity[zGrid.a][zGrid.b+1] === undefined   ){


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
            this.wordsService.overlayResizeEventSubscription6 = this.wordsService.overlayResizeEvent$.subscribe(()=>{
                // console.log(
                //     getTextWidth({
                //         elementText:zChild[2].innerText,
                //         font:this.window.getComputedStyle(   zChild[2].element   )['font-size'] +                 
                //         " " +
                //         this.window.getComputedStyle(   zChild[2].element   )['font-family']
                //     })      
                // )


                if(  
                    567.6 > numberParse(   this.window.getComputedStyle(zChild[1].element).width   ) + 30                   
                ){


                    zChild[2].style['font-size'] = resize({
                        default:numberParse(   this.wordsService.overlayComponentObject1TitleFontSize   ),
                        containActual:numberParse(   this.window.getComputedStyle(zChild[1].element).width   ),
                        containDefault:500.6,
                        // type:'direct',
                        // misc:[.18]
                    }).toString() + "px"
                    this.ref.detectChanges()
                    // console.log(     zChild[2].style['font-size']   )

                }


                else if(  
                   numberParse(   this.wordsService.overlayComponentObject2TitleWidth   ) < numberParse(   this.window.getComputedStyle(zChild[1].element).width   ) + 30                   
                ){   
                    
                    
                    zChild[2].style['font-size'] = this.wordsService.overlayComponentObject1TitleFontSize   
                    this.ref.detectChanges()


                }


                zChild[2].style['left'] = xPosition({
                    contain:numberParse(   this.window.getComputedStyle(zChild[1].element).width   ),
                    target:getTextWidth({
                        elementText:zChild[2].innerText,
                        font:this.window.getComputedStyle(   zChild[2].element   )['font-size'] +                 
                        " " +
                        this.window.getComputedStyle(   zChild[2].element   )['font-family']
                    })
                })  
                this.ref.detectChanges()                
            })
            
            
        }     
        

        else if(   this.overlayTemplateVariable === 'overlayComponentObject3'   ){


            let zChild:zChildren[] =[{
                element: this.window.document.querySelector('app-overlay[ng-reflect-overlay-template-variable='+this.overlayTemplateVariable+']') as HTMLElement,
                style:this.wordsService[this.overlayTemplateVariable].quantity[0][0].ngStyle[0][0],
                bool:this.wordsService[this.overlayTemplateVariable].quantity[0][0].bool[0][0]
            }]     
            let zCheckpoint = []                        
            this.overlayMyElements._results.map((x:any,i:any)=>{


                if(   x.nativeElement.id === 'o_v_e_r_l_a_y_Board'   ){
                    zCheckpoint.push(i)
                }                        
                
            
            })      
            let zGrid = {
                a:0, 
                b:0, 
            }  
            zCheckpoint.map((y:any,j:any)=>{
                // console.group('associated')
                // console.log(    this.wordsMyElements._results.slice(y,zCheckpoint[j+1])   )
                zGrid.a = 0;
                (function(qq){
                    return qq.overlayMyElements._results.length === 1 ? qq.overlayMyElements._results : qq.overlayMyElements._results.slice(y,zCheckpoint[j+1])
                })(this).map((x:any,i:any)=>{     
                    // console.log(   x.nativeElement.id   )
                    // console.log(   this.wordsService[this.wordsTemplateVariable].quantity[1][j].val  )
                    // console.log(x)
                    while(   
                        this.wordsService[this.overlayTemplateVariable].quantity[1][j].quantity[zGrid.a][zGrid.b] === undefined &&   
                        zGrid.b +1 > this.wordsService[this.overlayTemplateVariable].quantity[1][j].quantity[zGrid.a].length
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


                    if(   x.nativeElement.id === this.wordsService[this.overlayTemplateVariable].quantity[1][j].val[zGrid.a][zGrid.b]   &&
                        (   
                            this.wordsService[this.overlayTemplateVariable].quantity[1][j].bool[zGrid.a][zGrid.b] === 'true' ||
                            this.wordsService[this.overlayTemplateVariable].quantity[1][j].bool[zGrid.a][zGrid.b] === 'link' ||
                            this.wordsService[this.overlayTemplateVariable].quantity[1][j].bool[zGrid.a][zGrid.b] === 'icon' ||
                            this.wordsService[this.overlayTemplateVariable].quantity[1][j].bool[zGrid.a][zGrid.b] === 'button' 
                        )    
                    ){               


                        let domElement = x.nativeElement as HTMLElement;
                        zChild.push({
                            element:domElement,
                            style:this.wordsService[this.overlayTemplateVariable].quantity[1][j].ngStyle[zGrid.a][zGrid.b],
                            innerText: this.wordsService[this.overlayTemplateVariable].quantity[1][j].text[zGrid.a][zGrid.b],
                            bool:this.wordsService[this.overlayTemplateVariable].quantity[1][j].bool[zGrid.a][zGrid.b]
                        })
                        

                        if(   this.wordsService[this.overlayTemplateVariable].quantity[1][j].quantity[zGrid.a][zGrid.b+1] === undefined   ){


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
            zChild[2].style['width'] = (
                getTextWidth({
                    elementText:zChild[2].innerText,
                    font: this.window.getComputedStyle(   zChild[2].element   ).getPropertyValue('font-size') + 
                    " " +
                    this.window.getComputedStyle(   zChild[2].element ).getPropertyValue('font-family') 
                }) +
                10
                ).toString() + "px"   
            zChild[3].style['width'] = (
            getTextWidth({
                elementText:zChild[3].innerText,
                font: this.window.getComputedStyle(   zChild[3].element   ).getPropertyValue('font-size') + 
                " " +
                this.window.getComputedStyle(   zChild[3].element ).getPropertyValue('font-family') 
            }) +
            10
            ).toString() + "px"       
            this.ref.detectChanges()
            
        }
        
        this.wordsService.appViewComplete.next(
            (function(qq){
                qq.wordsService.appViewCompleteArray.push(qq.overlayTemplateVariable) 
            })(this)
        )
    }

    ngOnDestroy(){
        console.log( this.overlayTemplateVariable+ ' ngOnDestroy fires on dismount')
        
        // figure out why it doesn't like to remount here 
        if(   this.overlayTemplateVariable  === 'overlayComponentObject4'   ){
        
            
            if(   this.wordsService.overlayResizeEventSubscription0 !== undefined   ){


                if(   !this.wordsService.overlayResizeEventSubscription0.closed   ){


                    this.wordsService.overlayResizeEventSubscription0.unsubscribe() 


                }


            }


            this.wordsService.overlayResizeEventSubscription1.unsubscribe() 
            this.wordsService.overlayResizeEventSubscription2.unsubscribe()  
            this.wordsService.overlayResizeEventSubscription3.unsubscribe()          
        
    
        }
        
        
        else if(   this.overlayTemplateVariable === 'overlayComponentObject0'   ){


            this.wordsService.overlayResizeEventSubscription4.unsubscribe()


        }


        else if(   this.overlayTemplateVariable === 'overlayComponentObject1'   ){


            this.wordsService.overlayResizeEventSubscription5.unsubscribe()


        }


        else if(   this.overlayTemplateVariable === 'overlayComponentObject2'   ){


            this.wordsService.overlayResizeEventSubscription6.unsubscribe()


        }        


        else if(   this.overlayTemplateVariable === 'overlayComponentObject3'   ){


            // this.wordsService.overlayResizeEventSubscription7.unsubscribe()


        }           
        
        
    }

}
