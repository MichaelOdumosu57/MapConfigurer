import {   Component, OnInit,Input,ViewChildren,Directive,Inject,AfterViewInit, AfterContentInit,OnDestroy,ChangeDetectorRef,ChangeDetectionStrategy   } from '@angular/core';
import {   WordsService   } from '../words.service';
import {   BrowserModule,platformBrowser,disableDebugTools   } from '@angular/platform-browser';
import {   WINDOW   } from '../window.service';
import {   fromEvent,interval   } from 'rxjs';
import {   take,timeout   } from 'rxjs/operators';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

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
    

    if(   devObj.type === 'direct'   ){ // useful to change the rate of the resize, make at containing obj interval to achieve the responsiveness you need


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
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterComponent implements OnInit, AfterViewInit, OnDestroy {

    @ViewChildren('myFooterVal') footerMyElements: any;
    
    constructor(
        private wordsService: WordsService,
        @Inject(WINDOW) private window: Window,
        private ref: ChangeDetectorRef      
    ) {}


    @Input() footerTemplateVariable:string | any;

    footerVal:Array<string> = this.wordsService.footerVal;
    footerbool:Array<any> = this.wordsService.footerbool;
    footerStyle:any =  this.wordsService.wordsStyle;

    footerValIndex:Array<any> = this.wordsService.footerValIndex
    footerStyleIndex:Array<any> = this.wordsService.wordsStyleIndex
    footerBoolIndex:Array<any> = this.wordsService.footerBoolIndex


    ngOnInit() {
        console.log(this.footerTemplateVariable+ ' ngOnInit remout')        
    }

    ngAfterViewInit(){
        console.log(this.footerTemplateVariable+ '  ngAfterViewInit remout')        
        this.wordsService.footerLoadEvent$ = fromEvent(this.window ,'load');
        this.wordsService.footerResizeEvent$ = fromEvent(this.window,'resize');
        
        
        if(   this.footerTemplateVariable === 'footerComponentObject0'){


            let zChild =[{
                element: this.window.document.querySelector('app-footer[ng-reflect-footer-template-variable='+this.footerTemplateVariable+']'),
                style:this.wordsService[this.footerTemplateVariable].quantity[0][0].ngStyle[0][0],
                innerText:null
            }]          
            // console.log(   this.window.document.querySelectorAll('app-footer[ng-reflect-footer-template-variable='+this.footerTemplateVariable+']')   ) 
            let zCheckpoint = [0,1]     
            // console.log(   this.footerMyElements._results   )                    
            // this.footerMyElements._results.map((x:any,i:any)=>{
                   
                
            //     if(   x.nativeElement.id === 'f_o_o_t_e_r_Title'  ){


            //         zCheckpoint.push(i)


            //     }


            //     if(   x.nativeElement.id === 'f_o_o_t_e_r_Board'   ){


            //         zCheckpoint.push(i)


            //     }
                
                
            // })
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
                // console.log(    this.footerMyElements._results.slice(y,zCheckpoint[j+1])   )
                zGrid.a = 0
                this.footerMyElements._results.slice(y,zCheckpoint[j+1]).map((x:any,i:any)=>{     
                    // console.log(   x.nativeElement.id   )
                    // console.log(   this.wordsService[this.footerTemplateVariable].quantity[1][j].val  )

                    while(   
                        this.wordsService[this.footerTemplateVariable].quantity[1][j].quantity[zGrid.a][zGrid.b] === undefined &&   
                        zGrid.b +1 > this.wordsService[this.footerTemplateVariable].quantity[1][j].quantity[zGrid.a].length
                    ){
                        // console.log(   this.wordsService[this.footerTemplateVariable].quantity[1][j].quantity[zGrid.a]   )
                        zGrid.a +=1
                        // debugger                                
                    }
                    // console.log(   
                    //     this.wordsService[this.footerTemplateVariable].quantity[1][j].quantity[zGrid.a],   
                    //     zChild,
                    //     zGrid
                    // )


                    if(   x.nativeElement.id === this.wordsService[this.footerTemplateVariable].quantity[1][j].val[zGrid.a][zGrid.b]   &&
                        (   
                            this.wordsService[this.footerTemplateVariable].quantity[1][j].bool[zGrid.a][zGrid.b] === 'true' ||
                            this.wordsService[this.footerTemplateVariable].quantity[1][j].bool[zGrid.a][zGrid.b] === 'link' ||
                            this.wordsService[this.footerTemplateVariable].quantity[1][j].bool[zGrid.a][zGrid.b] === 'button' 
                        )    
                    ){               
                        
                        
                        zChild.push({
                            element:x.nativeElement,
                            style:this.wordsService[this.footerTemplateVariable].quantity[1][j].ngStyle[zGrid.a][zGrid.b],
                            innerText: this.wordsService[this.footerTemplateVariable].quantity[1][j].text[zGrid.a][zGrid.b],
                        })
                        

                        if(   this.wordsService[this.footerTemplateVariable].quantity[1][j].quantity[zGrid.a][zGrid.b+1] === undefined   ){


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
            this.wordsService.footerResizeEventSubscription0 = this.wordsService.footerResizeEvent$.subscribe(()=>{


                if(   
                    numberParse(   this.window.getComputedStyle(zChild[1].element).width   ) >  getTextWidth({
                        elementText:zChild[2].innerText,
                        font:this.window.getComputedStyle(   zChild[2].element   ).getPropertyValue('font-size') + 
                        " " +
                        this.window.getComputedStyle(   zChild[2].element ).getPropertyValue('font-family') 
                    })
                ){


                    zChild[2].style['left'] =  xPosition({
                        contain:numberParse(   this.window.getComputedStyle(zChild[1].element).width   ),
                        target: getTextWidth({
                            elementText:zChild[2].innerText,
                            font:this.window.getComputedStyle(   zChild[2].element   ).getPropertyValue('font-size') + 
                            " " +
                            this.window.getComputedStyle(   zChild[2].element ).getPropertyValue('font-family') 
                        })
                    })


                }


                else if(   true   ){


                    zChild[2].style['left'] = '0px'


                }


                this.ref.detectChanges()
                zChild[3].style['top'] = (
                    numberParse(
                        this.window.getComputedStyle(   zChild[2].element   ).top
                    ) +
                    numberParse(
                        this.window.getComputedStyle(   zChild[2].element   ).height
                    ) + 
                    10
                ).toString() + "px"
                // console.log(
                //     this.window.getComputedStyle(   zChild[2].element   ).top,
                //     this.window.getComputedStyle(   zChild[2].element   ).height,
                //     zChild[3].style['top'],
                //     this.window.getComputedStyle(zChild[3].element).top
                // )                

                if(   
                    numberParse(   this.window.getComputedStyle(zChild[1].element).width   ) >  getTextWidth({
                        elementText:zChild[3].innerText,
                        font:this.window.getComputedStyle(   zChild[3].element   ).getPropertyValue('font-size') + 
                        " " +
                        this.window.getComputedStyle(   zChild[3].element ).getPropertyValue('font-family') 
                    })
                ){                


                    zChild[3].style['left'] =  xPosition({
                        contain:numberParse(   this.window.getComputedStyle(zChild[1].element).width   ),
                        target: getTextWidth({
                            elementText:zChild[3].innerText,
                            font:this.window.getComputedStyle(   zChild[3].element   ).getPropertyValue('font-size') + 
                            " " +
                            this.window.getComputedStyle(   zChild[3].element ).getPropertyValue('font-family') 
                        })
                    })   
                
                
                }

                
                else if(   true   ){


                    zChild[3].style['left'] = '0px'


                }

                this.ref.detectChanges()


            })


            if(  this.window.document.querySelector('app-words[ng-reflect-words-template-variable=wordsComponentObject2]')  !== null ){

                
                this.wordsService.footerResizeEventSubscription1 = this.wordsService[this.footerTemplateVariable].quantity[1][1].metadata.wordsCO2.subscribe((data)=>{
                    // console.log(data)
                    zChild[0].style['top'] = (
                        numberParse(
                            data[0]     
                        ) + 
                        numberParse(
                            data[1]                     
                        ) -
                        10
                    ).toString() + 'px'
                    this.ref.detectChanges()                        
                })


            }    
            
            
            if(  this.window.document.querySelector('app-words[ng-reflect-words-template-variable=wordsComponentObject4]')  !== null ){

                
                this.wordsService.footerResizeEventSubscription2 = this.wordsService[this.footerTemplateVariable].quantity[1][1].metadata.wordsCO4.subscribe((data)=>{
                    zChild[0].style['top'] = (
                        numberParse(
                            data[0]     
                        ) + 
                        numberParse(
                            data[1]                     
                        ) -
                        10
                    ).toString() + 'px'
                    this.ref.detectChanges()                        
                })


            }        
            
            
            if(  this.window.document.querySelector('app-words[ng-reflect-words-template-variable=wordsComponentObject5]')  !== null ){

                
                this.wordsService.footerResizeEventSubscription3 = this.wordsService[this.footerTemplateVariable].quantity[1][1].metadata.wordsCO5.subscribe((data)=>{
                    zChild[0].style['top'] = (
                        numberParse(
                            data[0]     
                        ) + 
                        numberParse(
                            data[1]                     
                        ) -
                        10
                    ).toString() + 'px'
                    this.ref.detectChanges()                        
                })


            }               
            

            if(  this.window.document.querySelector('app-words[ng-reflect-words-template-variable=wordsComponentObject8]')  !== null ){

                
                this.wordsService.footerResizeEventSubscription4 = this.wordsService[this.footerTemplateVariable].quantity[1][1].metadata.wordsCO8.subscribe((data)=>{
                    zChild[0].style['top'] = (
                        numberParse(
                            data[0]     
                        ) + 
                        numberParse(
                            data[1]                     
                        ) -
                        10
                    ).toString() + 'px'
                    this.ref.detectChanges()                        
                })


            }             
            

            if(  this.window.document.querySelector('app-words[ng-reflect-words-template-variable=wordsComponentObject9]')  !== null ){

                
                this.wordsService.footerResizeEventSubscription5 = this.wordsService[this.footerTemplateVariable].quantity[1][1].metadata.wordsCO9.subscribe((data)=>{
                    zChild[0].style['top'] = (
                        numberParse(
                            data[0]     
                        ) + 
                        numberParse(
                            data[1]                     
                        ) -
                        10
                    ).toString() + 'px'
                    this.ref.detectChanges()                        
                })


            }             
            // see what happens when app-navigation top is made 0px


        }


        this.wordsService.appViewComplete.next(
            (function(qq){
                qq.wordsService.appViewCompleteArray.push(qq.footerTemplateVariable) 
            })(this)
        )        
    }

    ngOnDestroy(){
        console.log(this.footerTemplateVariable+ ' ngOnDestroy dismout')     
        
        if(   this.footerTemplateVariable === 'footerComponentObject0'){

            
            if(   
                this.wordsService[this.footerTemplateVariable].quantity[1][1].metadata.wordsCO2 !== undefined &&
                this.wordsService.footerResizeEventSubscription1 !== undefined 
            ){
                
                // console.log(   this.wordsService[this.footerTemplateVariable].quantity[1][1].metadata.wordsCO2.closed   )
                if(  !this.wordsService[this.footerTemplateVariable].quantity[1][1].metadata.wordsCO2.closed   ){


                    this.wordsService.footerResizeEventSubscription1.unsubscribe()
                
            
                }    
                

            }


            if(  
                this.wordsService[this.footerTemplateVariable].quantity[1][1].metadata.wordsCO4 !== undefined &&
                this.wordsService.footerResizeEventSubscription2 !== undefined
            ){
                
                // console.log(   this.wordsService[this.footerTemplateVariable].quantity[1][1].metadata.wordsCO2.closed   )
                if(  !this.wordsService[this.footerTemplateVariable].quantity[1][1].metadata.wordsCO4.closed   ){


                    this.wordsService.footerResizeEventSubscription2.unsubscribe()
                
            
                }    
                

            }            


            if(  
                this.wordsService[this.footerTemplateVariable].quantity[1][1].metadata.wordsCO5 !== undefined &&
                this.wordsService.footerResizeEventSubscription3 !== undefined
            ){
                
                // console.log(   this.wordsService[this.footerTemplateVariable].quantity[1][1].metadata.wordsCO2.closed   )
                if(  !this.wordsService[this.footerTemplateVariable].quantity[1][1].metadata.wordsCO5.closed   ){


                    this.wordsService.footerResizeEventSubscription3.unsubscribe()
                
            
                }    
                

            }   
            
            
            if(  
                this.wordsService[this.footerTemplateVariable].quantity[1][1].metadata.wordsCO8 !== undefined &&
                this.wordsService.footerResizeEventSubscription4 !== undefined
            ){
                
                // console.log(   this.wordsService[this.footerTemplateVariable].quantity[1][1].metadata.wordsCO2.closed   )
                if(  !this.wordsService[this.footerTemplateVariable].quantity[1][1].metadata.wordsCO8.closed   ){


                    this.wordsService.footerResizeEventSubscription4.unsubscribe()
                
            
                }    
                

            } 


            if(  
                this.wordsService[this.footerTemplateVariable].quantity[1][1].metadata.wordsCO9 !== undefined &&
                this.wordsService.footerResizeEventSubscription5 !== undefined
            ){
                
                // console.log(   this.wordsService[this.footerTemplateVariable].quantity[1][1].metadata.wordsCO2.closed   )
                if(  !this.wordsService[this.footerTemplateVariable].quantity[1][1].metadata.wordsCO9.closed   ){


                    this.wordsService.footerResizeEventSubscription5.unsubscribe()
                
            
                }    
                

            }            
            
            
            this.wordsService.footerResizeEventSubscription0.unsubscribe()


        }


    }

}
