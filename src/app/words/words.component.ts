import {   Component, OnInit,getPlatform } from '@angular/core';
import {   WordsService } from '../words.service';
import {   BrowserModule,platformBrowser,disableDebugTools   } from '@angular/platform-browser';
import {   DomSanitizer   } from '@angular/platform-browser';

@Component({
  selector: 'app-words',
  templateUrl: './words.component.html',
  styleUrls: ['./words.component.css']
})
export class WordsComponent implements OnInit {

    constructor(
        private wordsService: WordsService,
        private domSanitizer: DomSanitizer
    ) { }

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
        
        // this.wordsStyle3 = this.domSanitizer.bypassSecurityTrustStyle(this.wordsService.wordsGroup0({}).wordsStyle)
        this.wordsStyle3 = this.wordsService.wordsGroup0({}).wordsStyle
        
        
    }
    
 
  
}

