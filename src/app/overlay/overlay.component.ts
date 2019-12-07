import { Component, OnInit,Input,ViewChildren,AfterViewInit,Inject, OnDestroy,ChangeDetectorRef,ChangeDetectionStrategy,AfterContentInit } from '@angular/core';
import {   WordsService   } from '../words.service';
import {   WINDOW   } from '../window.service';
import {   fromEvent,interval, of,from, Observable } from 'rxjs';
import {   catchError,take,timeout   } from 'rxjs/operators'



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

function resizeFont(   devObj:any   ){
    let result = null

    
    if(   devObj.misc === undefined   ){
        devObj.misc = [.12]
    }


    devObj.default *
          (   (   devObj.containActual /
          devObj.containDefault   )   - devObj.misc[0])  //usually its .12
    return result = result > devObj.default  ? 
        devObj.default   :
        result.toString() + "px"   
   
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

    access(){
        return this.wordsService
    }

    accessWindow(){
        return this.window
    }
    
    
    ngOnInit() {
        this.wordsService.overlayMyElements.subscribe((arr)=>{
            // console.log('fire')
            // dealing with  missing elements

            if(   this.wordsService[this.overlayTemplateVariable].styles.length > arr[this.wordsService.overlayComponentMonitor[this.overlayTemplateVariable]].length   ){


                // console.log('fire greater')
                this.wordsService[this.overlayTemplateVariable].stylesCopy = this.wordsService[this.overlayTemplateVariable].styles.filter((a,i)=>{


                    if(   i === 0   ){
                        

                        return true


                    }


                    else if(   i!== 0   ){


                        if(   this.overlayStyleIndex[0] === 0   ){


                            console.log(  i,this.overlayBoolIndex[0]      )
                            this.overlayStyleIndex[0] =  this.overlayStyle[ this.overlayBoolIndex[0]   ].length
                            this.overlayBoolIndex[0] += 1
                            
                            
                        }
                        

                        this.overlayStyleIndex[0] -= 1


                        if(   this.overlayBool[   this.overlayBoolIndex[0] -1   ] === 'true'   ){


                            return true


                        }


                    }
                    

                    
                    
                })
                this.overlayBoolIndex[0] = 0


            }

            
            else if(   this.wordsService[this.overlayTemplateVariable].styles.length  ===  arr[this.wordsService.overlayComponentMonitor[this.overlayTemplateVariable]].length   ){
                
                
                this.wordsService[this.overlayTemplateVariable].stylesCopy = this.wordsService[this.overlayTemplateVariable].styles
                // console.log('fire')


            }


            // console.log(   this.overlaybool   )
            // console.log(   this.overlayStyle   )
            // console.log(   this.wordsService[this.overlayTemplateVariable].stylesCopy, arr[this.overlayTemplateVariable.slice(-1)]     )
            for(   var index in this.wordsService[this.overlayTemplateVariable].stylesCopy    ){

                
                if(   this.wordsService[this.overlayTemplateVariable].stylesCopy[index].override === 'true'   ){


                    // console.log(   JSON.stringify(   this.wordsService[this.overlayTemplateVariable].stylesCopy[index].css   ).split(',').join(";").split('{')[1].match(/.+(?=})/)[0].split('"').join("")     )
                    // console.log(   this.wordsService[this.overlayTemplateVariable].stylesCopy[index].css   )
                    // any problems, loop through the stylesCopy index and apply of the for 
                    this.wordsService[this.overlayTemplateVariable].ngStyle[index] = this.wordsService[this.overlayTemplateVariable].stylesCopy[index].css
                    this.ref.detectChanges()

                                
                }
    
    
            }
            // console.log(   this.wordsService[this.overlayTemplateVariable]   )  
            // console.log(    this.overlayMyElements._results[6]   )             
            this.wordsService[this.overlayTemplateVariable].metadata.cssAsync.next(1)
        })           
    }

    ngAfterViewInit(){
        this.wordsService.overlayLoadEvent$ = fromEvent(this.window,'load')
        this.wordsService.overlayResizeEvent$ = fromEvent(this.window,'resize')
        this.wordsService[this.overlayTemplateVariable].metadata.cssAsync.subscribe(()=>{    
            let z = {
                style:null,
                element:null
            };  
            let za = {
                style:null,
                element:null
            }; 
            let zb = {
                style:null,
                element:null
            };                                     
            this.overlayMyElements._results.map((x:any,i:any)=>{
                
                
                if(   x.nativeElement.id === 'o_v_e_r_l_a_y_Board'   ){


                    zb.style = i+ 1
                    zb.element = x.nativeElement
                    

                }


                if(   x.nativeElement.id === 'o_v_e_r_l_a_y_AboutPreTitle'   ){


                    z.style = i+ 1
                    z.element = x.nativeElement
                    

                } 
                 
               
                if(   x.nativeElement.id === 'o_v_e_r_l_a_y_Title'   ){


                    za.style = i+ 1
                    za.element = x.nativeElement
                    

                } 
                
                
            })         
            this.wordsService[this.overlayTemplateVariable].metadata.aboutBoardDefaultWidth = getTextWidth({
                elementText:z.element.innerText,
                font:this.window.getComputedStyle(   z.element ).getPropertyValue('font-size') + " Vidaloka"
            }) +55 // you did this because the title at a certain length would be static for  the width the board can get to on resize, and easy to access
            this.wordsService[this.overlayTemplateVariable].metadata.titleDefaultFontSize = this.window.getComputedStyle(   za.element   )['font-size']
            this.wordsService[this.overlayTemplateVariable].metadata.boardTitleDefaultWidth = getTextWidth({
                elementText:za.element.innerText,
                font:this.window.getComputedStyle(   za.element ).getPropertyValue('font-size') + " Montserrat"
            }) +55
            // console.log(   this.wordsService[this.overlayTemplateVariable].metadata.aboutBoardDefaultWidth   )  
            // debugger                                      

            
            if(   this.overlayTemplateVariable.slice(-1) !== '4'   ){


                if(   
                    getTextWidth({
                        elementText:za.element.innerText,
                        font:this.window.getComputedStyle(   za.element   ).getPropertyValue('font-size') + " sans-serif"
                    }) <
                    numberParse(   this.window.getComputedStyle(   zb.element   ).width   ) +30
                ){


                    while(   Math.floor(   za.element.clientHeight/numberParse(   this.window.getComputedStyle(   za.element   )['font-size']   )   ) >1   ){
                        this.wordsService[this.overlayTemplateVariable].ngStyle[za.style]['left'] = (   numberParse(   this.window.getComputedStyle(   za.element   )['left']   ) - 100   ).toString() + "px"
                        this.ref.detectChanges()
                        // console.log(    (   numberParse(   this.window.getComputedStyle(   za.element   )['left']   ) - 100   ).toString() + "px"   )
                        // console.log(   this.wordsService[this.overlayTemplateVariable].ngStyle[za.style]['left']   )
                        // console.log(  za.element.clientHeight/numberParse(   this.window.getComputedStyle(   za.element   )['font-size']   )   )
                    }
                    // console.log('resizing title')
                    this.wordsService[this.overlayTemplateVariable].location.parameters.push(
                        this.wordsService[this.overlayTemplateVariable].parameters.push({
                            fn:'wordsService.customWordWrapReceive',
                            totalElements:this.overlayTemplateVariable.slice(-1) !== '4' ? this.overlayMyElements._results : this.overlayMyElements._results.filter(a=>{
                                
                                
                                if(   a.nativeElement.id !==   'o_v_e_r_l_a_y_Title' &&  a.nativeElement.id !==   'o_v_e_r_l_a_y_AboutPreTitle'   ){


                                    return true


                                }
                            
                            
                            }),
                            HTMLWordElements:this.overlayCustomWordWrapElements
                        }) - 1// for it returns the length of the array
                    )    
                    // console.log(   this.wordsService[this.overlayTemplateVariable].parameters   )
                    // debugger
                    this.wordsService.overlayLoadEventSubscription1 = this.wordsService.overlayLoadEvent$.subscribe(this.wordsService.customWordWrapReceive({
                        totalElements:this.overlayMyElements._results,
                        HTMLWordElements:{
                                            parameters:this.wordsService[this.overlayTemplateVariable].location.parameters.slice(-1)[0],
                                            templateVar:this.overlayTemplateVariable
                                        },
                        subject: this.wordsService[this.overlayTemplateVariable].metadata.customWordWrapReceiveSubject
                    }))   
                
                
                }
            
            
            }     
            
            
            if(   this.overlayTemplateVariable.slice(-1) === '4'   ){


                this.wordsService.overlayResizeEventSubscription2 = this.wordsService.overlayResizeEvent$.subscribe(()=>{
                    let z = {
                        style:null,
                        element:null
                    };      
                    let za = {
                        style:null,
                        element:null
                    };                     
                    let zb = {
                        style:null,
                        element:null
                    };  
                    let zc = {
                        style:null,
                        element:null
                    };                                                    
                    let zObj = {
                        *generator () {
                            yield z
                            yield z
                            yield zb
                            yield zb  
                            yield zc
                            yield zc                                                                  
                        }
                    }    
                    let zGen =  zObj                                             
                    this.overlayMyElements._results.map((x:any,i:any)=>{
                       


                        if(   x.nativeElement.id === 'o_v_e_r_l_a_y_AboutPreTitle'   ){


                            z.style = i+ 1
                            z.element = x.nativeElement
                            

                        } 


                        if(   x.nativeElement.id === 'o_v_e_r_l_a_y_Board'   ){
        
        
                            za.style = i+ 1
                            za.element = x.nativeElement
                            

                        } 


                        if(   x.nativeElement.id === 'o_v_e_r_l_a_y_AboutMainLine'   ){


                            zb.style = i+ 1
                            zb.element = x.nativeElement
                            

                        }


                        if(   x.nativeElement.id === 'o_v_e_r_l_a_y_AboutLearnText'   ){


                            zc.style = i+ 1
                            zc.element = x.nativeElement
                            

                        }                        
                        
                        
                    })   
                    this.wordsService[this.overlayTemplateVariable].metadata.aboutBarPreTitleDOMRectTopDiff = zb.element.getBoundingClientRect().top - z.element.getBoundingClientRect().top                   
                    this.wordsService[this.overlayTemplateVariable].metadata.aboutBarPreTitleOffsetTopDiff = zb.element.offsetTop - z.element.offsetTop
                    try{    
                    // console.table({
                    //     //    'pretitile css top':this.window.getComputedStyle(   z.element   ).top,                                     
                    //     //    'bar css top':this.window.getComputedStyle(   zb.element   ).top,
                    //        'pretitle offsetTop':z.element.offsetTop,
                    //        'bar offsetTop':zb.element.offsetTop,
                    //        'the bar pretitle offset difference':this.wordsService[this.overlayTemplateVariable].metadata.aboutBarPreTitleOffsetTopDiff,
                    //        'bar getBoundingClientRect': 'refer to log 1',
                    //        'pre Title getBoundingClientRect': 'refer to log 2'
                    //     })  
                    }
                    catch(e){

                    }       
                    // console.log(   zb.element.getBoundingClientRect()   )
                    // console.log(   z.element.getBoundingClientRect()   )                   
                    
                })
                this.wordsService.overlayResizeEventSubscription1 = this.wordsService.overlayResizeEvent$.subscribe(()=>{
                    // console.group('decreasing preTitle size')
                        {  
                            let z = {
                                style:null,
                                element:null
                            };     
                            let za = {
                                style:null,
                                element:null
                            };  
                            let zb = {
                                style:null,
                                element:null
                            };                                                             
                            let zObj = {
                                *generator () {
                                    yield z
                                    yield z
                                    yield za
                                    yield za
                                    yield zb
                                    yield zb                                    
                                }
                            }    
                            let zGen =  zObj                                             
                            this.overlayMyElements._results.map((x:any,i:any)=>{
                               
    
        
                                if(   x.nativeElement.id === 'o_v_e_r_l_a_y_AboutPreTitle'   ){
        
        
                                    z.style = i+ 1
                                    z.element = x.nativeElement
                                    
        
                                } 
        
    
                                if(   x.nativeElement.id === 'o_v_e_r_l_a_y_Board'   ){
        
        
                                    za.style = i+ 1
                                    za.element = x.nativeElement
                                    
        
                                } 
                                

                                if(   x.nativeElement.id === 'o_v_e_r_l_a_y_AboutMainLine'   ){
        
        
                                    zb.style = i+ 1
                                    zb.element = x.nativeElement
                                    
        
                                }
                                
                                
                            })   
                            // console.log(   z.element.clientHeight , numberParse(   window.getComputedStyle(z.element).getPropertyValue('font-size')   )   )
                            // console.table({
                            //     'pretitle client height':z.element.clientHeight ,
                            //     'preTitle font size':window.getComputedStyle(z.element).getPropertyValue('font-size'),
                            //     'preTitle width':numberParse(   window.getComputedStyle(z.element).getPropertyValue('width')   ), 
                            //     'overlay img width':numberParse(   window.getComputedStyle(za.element).getPropertyValue('width')   ), 
                            //     'overlay resize standard':this.wordsService[this.overlayTemplateVariable].metadata.aboutBoardDefaultWidth 
                            // })   
    
    
                            if(   
                                (
                                    (   Math.floor(   z.element.clientHeight / numberParse(   window.getComputedStyle(z.element).getPropertyValue('font-size')   )   ) > 1   ) 
                                    ||
                                    numberParse(   window.getComputedStyle(za.element).getPropertyValue('width')   ) < this.wordsService[this.overlayTemplateVariable].metadata.aboutBoardDefaultWidth
                                )    
                            ){
                                

                                // console.log('rezise preTitle')
                                this.wordsService[this.overlayTemplateVariable].ngStyle[z.style]['font-size'] = 
                                    numberParse(   this.wordsService[this.overlayTemplateVariable].metadata.aboutPreTitleDefaultFontSize   ) *
                                        (   (   numberParse(   window.getComputedStyle(za.element).getPropertyValue('width')   ) /
                                        this.wordsService[this.overlayTemplateVariable].metadata.aboutBoardDefaultWidth   )   - .12)
                                this.wordsService[this.overlayTemplateVariable].ngStyle[z.style]['font-size'] = this.wordsService[this.overlayTemplateVariable].ngStyle[z.style]['font-size'] > numberParse(   this.wordsService[this.overlayTemplateVariable].metadata.aboutPreTitleDefaultFontSize   )  ? 
                                    this.wordsService[this.overlayTemplateVariable].metadata.aboutPreTitleDefaultFontSize   :
                                    this.wordsService[this.overlayTemplateVariable].ngStyle[z.style]['font-size'].toString() + "px"   
                                // console.log(   this.wordsService[this.overlayTemplateVariable].ngStyle[z.style]['font-size']   )  
                                // console.log(   this.wordsService[this.overlayTemplateVariable].metadata.aboutMailLineDefaultWidth   )
                                this.wordsService[this.overlayTemplateVariable].ngStyle[zb.style]['width'] = 
                                    numberParse(   this.wordsService[this.overlayTemplateVariable].metadata.aboutMailLineDefaultWidth   )  *
                                    (   (   numberParse(   window.getComputedStyle(za.element).getPropertyValue('width')   ) /
                                    this.wordsService[this.overlayTemplateVariable].metadata.aboutBoardDefaultWidth   )   - .12)           
                                this.wordsService[this.overlayTemplateVariable].ngStyle[zb.style]['width']  =  this.wordsService[this.overlayTemplateVariable].ngStyle[zb.style]['width'] > numberParse(   this.wordsService[this.overlayTemplateVariable].metadata.aboutMailLineDefaultWidth   ) ? 
                                    this.wordsService[this.overlayTemplateVariable].metadata.aboutMailLineDefaultWidth  : 
                                    this.wordsService[this.overlayTemplateVariable].ngStyle[zb.style]['width'].toString() + "px"   
                                this.ref.detectChanges()
                                try{                            
                                    // console.table({
                                    //             //    'pretitile css top':this.window.getComputedStyle(   z.element   ).top,                                     
                                    //             'bar css top':this.window.getComputedStyle(   zb.element   ).top,
                                    //             'pretitle offsetTop':z.element.offsetTop,
                                    //             'bar offsetTop':zb.element.offsetTop,
                                    //             //    'the bar pretitle offset difference':this.wordsService[this.overlayTemplateVariable].metadata.aboutBarPreTitleOffsetTopDiff,
                                    //             'the bar pretitle DOMRect top difference':this.wordsService[this.overlayTemplateVariable].metadata.aboutBarPreTitleDOMRectTopDiff,
                                    //             'bar getBoundingClientRect': 'refer to log 1',
                                    //             'pre Title getBoundingClientRect': 'refer to log 2',
                                    //             'preTitle fontSize': this.window.getComputedStyle(   z.element   )['font-size']
                                    //             })    
                                }
                                catch(e){

                                }
                                // console.log(   zb.element.getBoundingClientRect()   )
                                // console.log(   z.element.getBoundingClientRect()   )
                                {
                                this.wordsService[this.overlayTemplateVariable].ngStyle[zb.style]['top'] = 
                                (
                                    (
                                        this.wordsService[this.overlayTemplateVariable].metadata.aboutBarPreTitleOffsetTopDiff - 
                                        (
                                            (
                                                numberParse(   this.wordsService[this.overlayTemplateVariable].metadata.aboutPreTitleDefaultFontSize   ) - 
                                                numberParse(   this.window.getComputedStyle(   z.element   )['font-size']   )
                                            ) *
                                            1.1
                                            // ( // until we can find perfect solution for this
                                            //     1+ 
                                            //     // (
                                            //     //     1-
                                            //     //     (
                                            //     //         numberParse(   this.window.getComputedStyle(   z.element   )['font-size']   )/
                                            //     //         numberParse(   this.wordsService[this.overlayTemplateVariable].metadata.aboutPreTitleDefaultFontSize   ) *
                                            //     //         1.9
                                            //     //     )
                                            //     // )
                                            // )
                                        )
                                    ) + 
                                    z.element.offsetTop
                                ).toString()
                                +"px"       
                                // console.log(   this.wordsService[this.overlayTemplateVariable].ngStyle[zb.style]['top']   )
                                }
                                this.ref.detectChanges()
                                // console.log(    z.element,z.element.clientHeight, window.getComputedStyle(z.element).getPropertyValue('font-size')   )
    
    
                            }  
                            
                            
                            else if(   
                                (
                                    numberParse(   window.getComputedStyle(za.element).getPropertyValue('width')   ) >= this.wordsService[this.overlayTemplateVariable].metadata.aboutBoardDefaultWidth
                                )    
                            ){
                                

                                // console.log('redefault preTitle')
                                this.wordsService[this.overlayTemplateVariable].ngStyle[z.style]['font-size'] = this.wordsService[this.overlayTemplateVariable].metadata.aboutPreTitleDefaultFontSize
                                this.wordsService[this.overlayTemplateVariable].ngStyle[zb.style]['top'] = this.wordsService[this.overlayTemplateVariable].metadata.aboutMailLineDefaultTop   
                                this.wordsService[this.overlayTemplateVariable].ngStyle[zb.style]['width'] = this.wordsService[this.overlayTemplateVariable].metadata.aboutMailLineDefaultWidth      
                                this.ref.detectChanges()
    
    
                            }                               
                            
                            
                        }
                    // console.groupEnd()           
                }) 

                
            }


            this.wordsService.overlayResizeEventSubscription0 = this.wordsService.overlayResizeEvent$.subscribe(()=>{
                // console.group('making title centering dynamic resize event')          
                    // console.log(   this.overlayMyElements._results   )
                    // console.log(   this.wordsService[this.overlayTemplateVariable].ngStyle   )  
                    {  
                        let z = {
                            style:null,
                            element:null
                        };
                        let za = {
                            style:null,
                            element:null
                        };
                        let zb = {
                            style:null,
                            element:null
                        };  
                        let zc = {
                            style:null,
                            element:null
                        };   
                        let zd = {
                            style:null,
                            element:null
                        };  
                        let ze = {
                            style:null,
                            element:null
                        };                                                                                     
                        this.overlayMyElements._results.map((x:any,i:any)=>{
    
    
                            if(   x.nativeElement.id === 'o_v_e_r_l_a_y_Board'   ){
    
    
                                z.style = i+ 1
                                z.element = x.nativeElement
                                
    
                            } 
    
    
                            else if(   x.nativeElement.id === 'o_v_e_r_l_a_y_Title'   ){
    
    
                                za.style = i+1
                                za.element = x.nativeElement                            
    
                                
                            }
    
    
                            else if(   x.nativeElement.id === 'o_v_e_r_l_a_y_AboutPreTitle'   ){
        
        
                                zb.style = i + 1 
                                zb.element = x.nativeElement                            
    
                                
                            }                            
                        
                            
                            else if(   x.nativeElement.id === 'o_v_e_r_l_a_y_AboutMainLine'   ){
        
        
                                zc.style = i + 1
                                zc.element = x.nativeElement                            
    
                                
                            }   
                            

                            else if(   x.nativeElement.id === 'o_v_e_r_l_a_y_AboutLearnText'   ){
        
        
                                zd.style = i + 1
                                zd.element = x.nativeElement                            
    
                                
                            }  
                            
                            
                            else if(   x.nativeElement.id === 'o_v_e_r_l_a_y_AboutLearn'   ){
        
        
                                ze.style = i + 1
                                ze.element = x.nativeElement                            
    
                                
                            }                              
                            
                            
                        })   
                        // console.group('resize font')
                            this.wordsService[this.overlayTemplateVariable].ngStyle[za.style]['font-size'] = 
                            numberParse(   this.wordsService[this.overlayTemplateVariable].metadata.titleDefaultFontSize   ) *
                                (   (   numberParse(   window.getComputedStyle(z.element).getPropertyValue('width')   ) /
                                this.wordsService[this.overlayTemplateVariable].metadata.boardTitleDefaultWidth   )   - .12)
                            // console.log(   this.wordsService[this.overlayTemplateVariable].ngStyle[za.style]['font-size'],
                            //             this.wordsService[this.overlayTemplateVariable].metadata.titleDefaultFontSize,
                            //             numberParse(   window.getComputedStyle(za.element).getPropertyValue('width')   ),
                            //             this.wordsService[this.overlayTemplateVariable].metadata.boardTitleDefaultWidth      
                            //             )
                            this.wordsService[this.overlayTemplateVariable].ngStyle[za.style]['font-size'] = this.wordsService[this.overlayTemplateVariable].ngStyle[za.style]['font-size'] > numberParse(   this.wordsService[this.overlayTemplateVariable].metadata.titleDefaultFontSize   )  ? 
                                this.wordsService[this.overlayTemplateVariable].metadata.titleDefaultFontSize   :
                                this.wordsService[this.overlayTemplateVariable].ngStyle[za.style]['font-size'].toString() + "px"    
                            this.ref.detectChanges()       
                        // console.groupEnd()                      
                        // console.log(   this.window.getComputedStyle(   z.element   ).width   )
                        // console.log(   this.window.getComputedStyle(   za.element   ).width   )
                        // console.log(   (   numberParse(   this.window.getComputedStyle(z.element).width   )/2   ) -  (   numberParse(   this.window.getComputedStyle(za.element).width   )/2   )  ) 
                        // console.log(   numberParse(   this.window.getComputedStyle(zb.element).width   )   ,numberParse(   this.window.getComputedStyle(zc.element).width   ),numberParse(   this.window.getComputedStyle(z.element).width   )/2,this.window.document.querySelector('app-overlay').clientWidth    )
                        this.wordsService[this.overlayTemplateVariable].ngStyle[za.style].left = (    (   numberParse(   this.window.getComputedStyle(z.element).width   )/2   ) -  (   numberParse(   this.window.getComputedStyle(za.element).width   )/2   )   ).toString() + "px"; 
                        this.wordsService[this.overlayTemplateVariable].ngStyle[zb.style].left = (    (   numberParse(   this.window.getComputedStyle(z.element).width   )/2   ) -  (   numberParse(   this.window.getComputedStyle(zb.element).width   )/2   )   ).toString() + "px"; 
                        this.wordsService[this.overlayTemplateVariable].ngStyle[zc.style].left = (    (   numberParse(   this.window.getComputedStyle(z.element).width   )/2   ) -  (   numberParse(   this.window.getComputedStyle(zc.element).width   )/2   )   ).toString() + "px";  
                        this.wordsService[this.overlayTemplateVariable].ngStyle[zd.style].left = (    (   numberParse(   this.window.getComputedStyle(z.element).width   )/2   ) -  (   numberParse(   this.window.getComputedStyle(zd.element).width   )/2   )   ).toString() + "px"; 
                        this.wordsService[this.overlayTemplateVariable].ngStyle[ze.style].left = (    (   numberParse(   this.window.getComputedStyle(z.element).width   )/2   ) -  (   numberParse(   this.window.getComputedStyle(ze.element).width   )/2   )   ).toString() + "px";                                             
                        // console.log(   this.wordsService[this.overlayTemplateVariable].ngStyle[zb.style].left,
                        //                 this.window.getComputedStyle(zb.element).width,
                        //                 this.wordsService[this.overlayTemplateVariable].ngStyle[zc.style].left   
                        //             )


                        if(    Math.floor(   zb.element.clientHeight /  numberParse(   this.window.getComputedStyle(   zb.element   )['font-size']   )   ) > 1   ){


                            this.wordsService[this.overlayTemplateVariable].ngStyle[zb.style].left = (
                                numberParse(   this.window.getComputedStyle(z.element).width   )/2  -
                                getTextWidth({
                                    elementText:zb.element.innerText,
                                    font:this.window.getComputedStyle(   zb.element   ).getPropertyValue('font-size') + " Vidaloka"
                                })/2
                            ).toString() + "px"
                            
                            
                        }


                        if(    
                            Math.floor(   za.element.clientHeight /  numberParse(   this.window.getComputedStyle(   za.element   )['font-size']   )   ) > 1  &&
                            numberParse(   this.window.getComputedStyle(z.element).width   ) >  numberParse(   this.window.getComputedStyle(za.element).width   )
                        ){


                            this.wordsService[this.overlayTemplateVariable].ngStyle[za.style].left = (
                                numberParse(   this.window.getComputedStyle(z.element).width   )/2  -
                                getTextWidth({
                                    elementText:za.element.innerText,
                                    font:this.window.getComputedStyle(   za.element   ).getPropertyValue('font-size') + " Aclonica"
                                })/2
                            ).toString() + "px"
                            
                            
                        }                       


                        // console.log(   this.wordsService[this.overlayTemplateVariable].ngStyle[za.style].left,
                        //                 this.window.getComputedStyle(za.element).width,
                        //             )                          
                        // debugger
                        this.ref.detectChanges()
                        // console.log(z)
                        // console.log(   this.wordsService[this.overlayTemplateVariable]. ngStyle   )                           
                    }
                // console.groupEnd()           
            })       
            let overlayIntervalRxjs0 = interval(10)
            let overlayTakeRxjs0 =  overlayIntervalRxjs0.pipe(take(1))     
            overlayTakeRxjs0.subscribe(()=>{
                // debugger
                try{
                    let event = new Event('resize')
                    this.window.dispatchEvent(event)  



                    if(   this.overlayTemplateVariable.slice(-1) === '4'   ){


                        this.wordsService.overlayResizeEventSubscription2.unsubscribe()


                    }


                    this.window.dispatchEvent(event) 
                }
                catch(e){
                    let eventLegacyLoad = this.window.document.createEvent("Event");
                    eventLegacyLoad.initEvent("resize", false, true);
                    this.window.dispatchEvent(    eventLegacyLoad    )
                    
                    
                    if(   this.overlayTemplateVariable.slice(-1) === '4'   ){


                        this.wordsService.overlayResizeEventSubscription2.unsubscribe()


                    }
                    
                    
                    this.window.dispatchEvent(    eventLegacyLoad    )      
                }  
            })              
        })

    }

    ngOnDestroy(){
        this.wordsService.overlayResizeEventSubscription0.unsubscribe()
        this.wordsService[this.overlayTemplateVariable].metadata.cssAsync.unsubscribe()

        
        if(   this.overlayTemplateVariable.slice(-1) !== '4'   ){


            this.wordsService.overlayLoadEventSubscription1.unsubscribe()
    
    
        }
        

        if(   this.overlayTemplateVariable.slice(-1) === '4'   ){


            this.wordsService.overlayResizeEventSubscription1.unsubscribe() 
    
    
        }
        
    }

}
