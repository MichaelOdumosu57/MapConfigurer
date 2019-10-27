import { Component, OnInit,Input,ViewChildren,AfterViewInit,Inject, OnDestroy,ChangeDetectorRef,ChangeDetectionStrategy,AfterContentInit } from '@angular/core';
import {   WordsService   } from '../words.service';
import {   WINDOW   } from '../window.service';
import {   fromEvent,interval, of,from   } from 'rxjs';

function getStyle(   devObj:any   ){
    let location = null;
    devObj.ngStyleArray.filter((a:any)=>{
                            
                            
        if(   Object.keys(a).length !== 0   ){


           devObj.lookStart+= 1


            if(  devObj.lookStart === devObj.index   ){


                console.log(   devObj.lookStart   )
                location = devObj.lookStart + 1


            }


        }


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

@Component({
  selector: 'app-overlay',
  templateUrl: './overlay.component.html',
  styleUrls: ['./overlay.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OverlayComponent implements OnInit,AfterViewInit {

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

    access(){
        return this.wordsService
    }

    accessWindow(){
        return this.window
    }
    
    
    ngOnInit() {
        this.wordsService.overlayMyElements.subscribe((arr)=>{

            // console.log(   arr   )   
            
            // dealing with  missing elements
            if(   this.wordsService[this.overlayTemplateVariable].styles.length >   arr[this.overlayTemplateVariable.slice(-1)].length   ){


                this.wordsService[this.overlayTemplateVariable].stylesCopy = this.wordsService[this.overlayTemplateVariable].styles.filter((a,i)=>{


                    if(   i === 0   ){
                        

                        return true


                    }


                    else if(   i!== 0){


                        if(   this.overlayStyleIndex[0] === 0   ){


                            // console.log(  i,this.overlayBoolIndex[0]      )
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

            
            else if(   this.wordsService[this.overlayTemplateVariable].styles.length  ===  arr[this.overlayTemplateVariable.slice(-1)].length   ){
                
                
                this.wordsService[this.overlayTemplateVariable].stylesCopy = this.wordsService[this.overlayTemplateVariable].styles


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
            console.log(   this.wordsService[this.overlayTemplateVariable]   )               
            this.wordsService[this.overlayTemplateVariable].metadata.cssAsync.next(1)
        })           
    }


    ngAfterViewInit(){
        this.wordsService.overlayLoadEvent$ = fromEvent(this.window,'load')
        this.wordsService[this.overlayTemplateVariable].metadata.cssAsync.subscribe(()=>{            
            console.group('making title centering dynamic load event')          
                console.log(   this.overlayMyElements._results   )
                console.log(   this.wordsService[this.overlayTemplateVariable].ngStyle   )  
                {  
                    let z = {
                        style:null,
                        element:null
                    };
                    let za = {
                        style:null,
                        element:null
                    };
                    this.overlayMyElements._results.map((x:any,i:any)=>{


                        if(   x.nativeElement.id === 'o_v_e_r_l_a_y_Board'   ){


                            let y = -1
                            z.style = getStyle({
                                lookStart:y,
                                index:i,
                                ngStyleArray:this.wordsService[this.overlayTemplateVariable].ngStyle  
                            })
                            z.element = x.nativeElement
                            

                            
                        } 


                        if(   x.nativeElement.id === 'o_v_e_r_l_a_y_Title'   ){


                            let y = -1
                            za.style = getStyle({
                                lookStart:y,
                                index:i,
                                ngStyleArray:this.wordsService[this.overlayTemplateVariable].ngStyle  
                            }) 
                            console.log(za.style)
                            za.element = x.nativeElement                            

                            
                        }

                    
                    })   
                    console.log(   this.window.getComputedStyle(   z.element   ).width   )
                    console.log(   this.window.getComputedStyle(   za.element   ).width   )
                    console.log(   (   numberParse(   this.window.getComputedStyle(z.element).width   )/2   ) -  (   numberParse(   this.window.getComputedStyle(za.element).width   )/2   )  )
                    this.wordsService[this.overlayTemplateVariable].ngStyle[za.style].left = (    (   numberParse(   this.window.getComputedStyle(z.element).width   )/2   ) -  (   numberParse(   this.window.getComputedStyle(za.element).width   )/2   )   ).toString() + "px"; 
                    // debugger
                    this.ref.detectChanges()
                    console.log(z)
                    console.log(   this.wordsService[this.overlayTemplateVariable]. ngStyle   )              
                }
        })
    }



}
