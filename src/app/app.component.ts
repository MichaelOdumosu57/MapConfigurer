import { Component,OnInit,ViewChildren,AfterViewInit,Inject,ElementRef  } from '@angular/core';
import {   WordsService   } from './words.service';
import {   fromEvent,Subject,Observable,of   } from 'rxjs';


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
        private wordsService: WordsService
    ) { }
    
    appTitle:string = 'WindsorEmpire'
    
    ngAfterViewInit() {
        // console.log(   this.app_wordsConponentElements ,this.app_wordsComponentReferences   )

        // DONE with Subject<Array<any[]>>
        for(var i in  this.app_wordsComponentReferences._results){
            this.wordsService.wordsMyElementsArray.push([
                    this.app_wordsConponentElements._results[i],
                    ...this.app_wordsComponentReferences._results[i].wordsMyElements._results
                ])
            this.wordsService.wordsMyElementsArray[i].forEach(element => {
                // console.log(element.nativeElement.id)
            });
        }
        this.wordsService.wordsMyElements.next(this.wordsService.wordsMyElementsArray)
        // console.log(this.wordsService.wordsMyElementsArray)
        // DONE with Subject<Array<any[]>>
         
             
    }
}


  
  
