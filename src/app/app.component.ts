import { Component,OnInit,ViewChildren,AfterViewInit,Inject,ElementRef  } from '@angular/core';
import {   WordsService   } from './words.service';
import {   WINDOW   } from './window.service';



function appGenerateSelector(){
    var a = 0;
    var string = '';
    var myObj = {}
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
    app_wordsMyElements: Array<any> = [];
    
    
    constructor(
        private wordsService: WordsService,
        @Inject(WINDOW) private window: Window
    ) { }
    

    
    appTitle:string = 'WindsorEmpire'
    
    
    ngAfterViewInit() {
        // this.wordsService.wordsRepositionDash.push(   this.appMyElements     )
        console.log(   this.app_wordsConponentElements ,this.app_wordsComponentReferences   )   
        for(var i in  this.app_wordsComponentReferences._results){
            this.app_wordsMyElements.push(   [this.app_wordsConponentElements._results[i],...this.app_wordsComponentReferences._results[i].wordsMyElements._results]   )
        }
        console.log(   this.app_wordsMyElements   )
        
        
        if(   this.window.onload !== undefined   ){
        
        
            this.window.onresize = this.window.onload = this.wordsService.wordsRepositionDashes()
            
            
        }        
    }
}


  
  
