import { Component,OnInit,ViewChildren,AfterViewInit,Inject,ElementRef  } from '@angular/core';
import {   WordsService   } from './words.service';
import {   WINDOW   } from './window.service';
import {   fromEvent   } from 'rxjs';


function appGenerateSelector(){
    var a = 0;
    var string = '';
    while(   a!==3   ){
        string += 'myval'+a+','
        a+=1
    }
    return string.slice(0,-1)
}
  
  
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements AfterViewInit {
    
    
    @ViewChildren(appGenerateSelector(), { read: ElementRef })  app_wordsConponentElements: any;
    @ViewChildren(appGenerateSelector())  app_wordsComponentReferences: any;
    
    
    constructor(
        private wordsService: WordsService,
        @Inject(WINDOW) private window: Window
    ) { }
    
    appTitle:string = 'WindsorEmpire'
    
    ngAfterViewInit() {
        console.log(   this.app_wordsConponentElements ,this.app_wordsComponentReferences   )   
        for(var i in  this.app_wordsComponentReferences._results){
            this.wordsService.wordsMyElements.next(   [this.app_wordsConponentElements._results[i],...this.app_wordsComponentReferences._results[i].wordsMyElements._results]   )
        }
        this.wordsService.wordsMyElements.subscribe((a)=>{
            this.wordsService.wordsRepositionDash.push(   a   )        
        })
        
        
        const app_LoadEvent0 = fromEvent(this.window ,'load');
        const app_ResizeEvent0 = fromEvent(this.window ,'resize');
        app_LoadEvent0.subscribe(this.wordsService.wordsRepositionDashes())
        app_ResizeEvent0.subscribe(this.wordsService.wordsRepositionDashes())
        
        //words elements configuration
        // this.wordsService.wordsComponent({ng_ITO:this.app_wordsMyElements })
        //words elements configuration
        
        
            
             
    }
}


  
  
