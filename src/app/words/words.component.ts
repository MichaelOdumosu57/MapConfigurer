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
export class WordsComponent implements OnInit {

    @ViewChildren('myval') wordsMyElements: any;    
    
    constructor(
        private wordsService: WordsService,
        @Inject(WINDOW) private window: Window
    ) { }

    wordsElementHeight : Array<Number> = this.wordsService.wordsElementHeight; 

    @Input() wordsTemplateVariable:string | any;
    
    wordsval0 :string = this.wordsService.wordsval0;
    wordsval1 :string = this.wordsService.wordsval1;
    wordsval2 :string = this.wordsService.wordsval2;
    wordsval3 :string = this.wordsService.wordsval3;
    wordsval4 :string = this.wordsService.wordsval4;
    
    wordsbool0:string =  this.wordsService.wordsbool0;
    wordsbool1:string =  this.wordsService.wordsbool1;
    wordsbool2:string =  this.wordsService.wordsbool2;
    wordsbool3:string =  this.wordsService.wordsbool3; 
    wordsbool4:string =  this.wordsService.wordsbool4;
    
    wordsSeq0:Array<Number> =  this.wordsService.wordsSeq0;
    wordsSeq1:Array<Number> =  this.wordsService.wordsSeq1; 
    wordsSeq2:Array<Number> =  this.wordsService.wordsSeq2;
    wordsSeq3:Array<Number> =  this.wordsService.wordsSeq3;
    wordsSeq4:Array<Number> =  this.wordsService.wordsSeq4;
    
    wordsStyle3:any =  this.wordsService.wordsStyle3;
    wordsStyle4:any =  this.wordsService.wordsStyle4;    
    
    ngOnInit() {


        /* at the slice this means that the the templatevariable must have a number 
        so I can get to the exact index in the array
        */
        // console.log(   this.wordsService.wordsMyElements   )
        this.wordsService.wordsMyElements.subscribe((arr)=>{
            // console.log(   this.wordsTemplateVariable   )
            // console.log(   arr   )
            for(   var index in this.wordsService[this.wordsTemplateVariable].styles    ){
            
                
                if(   this.wordsService[this.wordsTemplateVariable].styles[index].override === 'true'   ){


                    for(   var prop in  this.wordsService[this.wordsTemplateVariable].styles[index].css   ){
                        arr[this.wordsTemplateVariable.slice(-1)][index].nativeElement.style[prop] = this.wordsService[this.wordsTemplateVariable].styles[index].css[prop]
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
            this.window.dispatchEvent( event)      
        })  
        //polyfill if browsers get stubborn with the event listener     
    }
  
}



