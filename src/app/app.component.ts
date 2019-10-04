import { Component,OnInit,ViewChildren,AfterViewInit,Inject,ElementRef  } from '@angular/core';
import {   WordsService   } from './words.service';
import {   fromEvent,Subject,Observable,of   } from 'rxjs';


function appGenerateSelector(   devObj   ){
    var a = 0;
    var string = '';
    while(   a!==devObj.times   ){
        string += devObj.val +a+','
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
    
    @ViewChildren(appGenerateSelector({val:'appwordsval',times:3}), { read: ElementRef })  app_wordsConponentElements: any;
    @ViewChildren(appGenerateSelector({val:'appwordsval',times:3}))  app_wordsComponentReferences: any;
    @ViewChildren(appGenerateSelector({val:'appNavigationVal',times:1}), { read: ElementRef })  app_NavigationConponentElements: any;
    @ViewChildren(appGenerateSelector({val:'appNavigationVal',times:1}))  app_NavigationComponentReferences: any;    
    
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
            // this.wordsService.wordsMyElementsArray[i].forEach(element => {
            //     // console.log(element.nativeElement.id)
            // });
        }
        this.wordsService.wordsMyElements.next(this.wordsService.wordsMyElementsArray)

        // console.log(   this.app_NavigationConponentElements ,this.app_NavigationComponentReferences   )
        for(var i in  this.app_NavigationComponentReferences._results){
            this.wordsService.navigationMyElementsArray.push([
                this.app_NavigationConponentElements._results[i],
                ...this.app_NavigationComponentReferences._results[i].navigationMyElements._results
            ])
            // this.wordsService.wordsMyElementsArray[i].forEach(element => {
            //     // console.log(element.nativeElement.id)
            // });
        }
        this.wordsService.navigationMyElements.next(this.wordsService.navigationMyElementsArray)        
        // console.log(this.wordsService.wordsMyElementsArray)
        // DONE with Subject<Array<any[]>>
         
             
    }
}


  
  
