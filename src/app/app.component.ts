import { Component,OnInit,ViewChildren,AfterViewInit,Inject,ElementRef  } from '@angular/core';
import {   WordsService   } from './words.service';
import {   WINDOW   } from './window.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
    
    
    @ViewChildren('myval', { read: ElementRef })  appMyContainer: any;
    @ViewChildren('myval')  app_wordsMyElements: any;
    
    
    constructor(
        private wordsService: WordsService,
        @Inject(WINDOW) private window: Window
    ) { }
    
    appTitle:string = 'WindsorEmpire'
    
    
    ngAfterViewInit() {
        // this.wordsService.wordsRepositionDash.push(   this.appMyElements     )
        console.log(   this.appMyContainer,this.app_wordsMyElements   )   
    }
}
