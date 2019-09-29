import {   Component, OnInit,Input,ViewChildren,Directive,Inject,AfterViewInit, AfterContentInit } from '@angular/core';
import {   WordsService   } from '../words.service';
import {   BrowserModule,platformBrowser,disableDebugTools   } from '@angular/platform-browser';
import {   WINDOW   } from '../window.service';
import {   fromEvent,interval   } from 'rxjs';
import {   take,timeout   } from 'rxjs/operators';


    
@Component({
  selector: 'app-words',
  templateUrl: './words.component.html',
  styleUrls: ['./words.component.css']
})
export class WordsComponent implements OnInit,AfterViewInit {

    @ViewChildren('myval') wordsMyElements: any;
    
    constructor(
        private wordsService: WordsService,
        @Inject(WINDOW) private window: Window
    ) { }

    
    @Input() wordsTemplateVariable:string | any;
    
    wordsval0 :string = this.wordsService.wordsval0;
    wordsval1 :string = this.wordsService.wordsval1;
    wordsval2 :string = this.wordsService.wordsval2;
    wordsval3 :string = this.wordsService.wordsval3;
    wordsval4 :string = this.wordsService.wordsval4;
    wordsVal:Array<string> = this.wordsService.wordsVal;
    
    wordsbool0:string =  this.wordsService.wordsbool0;
    wordsbool1:string =  this.wordsService.wordsbool1;
    wordsbool2:string =  this.wordsService.wordsbool2;
    wordsbool3:string =  this.wordsService.wordsbool3;
    wordsbool4:string =  this.wordsService.wordsbool4;
    wordsbool:Array<any> = this.wordsService.wordsbool;
    
    wordsSeq0:Array<Number> =  this.wordsService.wordsSeq0;
    wordsSeq1:Array<Number> =  this.wordsService.wordsSeq1;
    wordsSeq2:Array<Number> =  this.wordsService.wordsSeq2;
    wordsSeq3:Array<Number> =  this.wordsService.wordsSeq3;
    wordsSeq4:Array<Number> =  this.wordsService.wordsSeq4;
    
    wordsStyle0:any =  this.wordsService.wordsStyle0;
    wordsStyle1:any =  this.wordsService.wordsStyle1;
    wordsStyle2:any =  this.wordsService.wordsStyle2;
    wordsStyle3:any =  this.wordsService.wordsStyle3;
    wordsStyle4:any =  this.wordsService.wordsStyle4;
    wordsStyle:any =  this.wordsService.wordsStyle;

    wordsValIndex:Array<any> = this.wordsService.wordsValIndex
    wordsStyleIndex:Array<any> = this.wordsService.wordsStyleIndex
    wordsBoolIndex:Array<any> = this.wordsService.wordsBoolIndex

    
    ngOnInit() {
        /* at the slice this means that the the templatevariable must have a number
        so I can get to the exact index in the array
        */
        // console.log(   this.wordsService.wordsMyElements   )
       
        this.wordsService.wordsMyElements.subscribe((arr)=>{

            // console.log(   arr   )   

            // dealing with  missing elements
            if(   this.wordsService[this.wordsTemplateVariable].styles.length >   arr[this.wordsTemplateVariable.slice(-1)].length   ){


                this.wordsService[this.wordsTemplateVariable].stylesCopy = this.wordsService[this.wordsTemplateVariable].styles.filter((a,i)=>{


                    if(   i === 0   ){
                        

                        return true


                    }


                    else if(   i!== 0){


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

            
            else if(   this.wordsService[this.wordsTemplateVariable].styles.length  ===  arr[this.wordsTemplateVariable.slice(-1)].length   ){
                
                
                this.wordsService[this.wordsTemplateVariable].stylesCopy = this.wordsService[this.wordsTemplateVariable].styles


            }


            // console.log(   this.wordsbool   )
            // console.log(   this.wordsStyle   )
            // this.wordsValIndex =  [0,0,'false',0]
            // this.wordsStyleIndex = [0]
            // console.log(   this.wordsService[this.wordsTemplateVariable].stylesCopy, arr[this.wordsTemplateVariable.slice(-1)]     )
            // 

            for(   var index in this.wordsService[this.wordsTemplateVariable].stylesCopy    ){
            
                // console.log(   arr[this.wordsTemplateVariable.slice(-1)][index].nativeElement.id   )
                if(   this.wordsService[this.wordsTemplateVariable].stylesCopy[index].override === 'true'   ){


                    for(   var prop in  this.wordsService[this.wordsTemplateVariable].stylesCopy[index].css   ){
                        
                        // console.log(   arr[this.wordsTemplateVariable.slice(-1)][index].nativeElement   )
                        arr[this.wordsTemplateVariable.slice(-1)][index].nativeElement.style[prop] = this.wordsService[this.wordsTemplateVariable].stylesCopy[index].css[prop]
                       
                        
                    }

                                
                }


            }
        })
    }
    
    ngAfterViewInit() {
        //FIXME why it it
        const wordsLoadEvent0 = fromEvent(this.window ,'load');
        const wordsResizeEvent0 = fromEvent(this.window ,'resize');
        wordsLoadEvent0.subscribe(this.wordsService.wordsRepositionDashes({templateVar:this.wordsTemplateVariable}))
        wordsResizeEvent0.subscribe(this.wordsService.wordsRepositionDashes({templateVar:this.wordsTemplateVariable}))
        //FIXME

        //polyfill if browsers get stubborn with the event listener
        var wordsIntervalRxjs0 = interval(10)
        var wordsTakeRxjs0 =  wordsIntervalRxjs0.pipe(take(1))
        wordsTakeRxjs0.subscribe((a)=>{
            var event = this.window.document.createEvent("Event");
            event.initEvent("load", false, true);
            this.window.dispatchEvent(   event   )
        })
        //polyfill if browsers get stubborn with the event listener
    }
  
}



