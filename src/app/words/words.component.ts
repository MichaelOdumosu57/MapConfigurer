import {   Component, OnInit,getPlatform } from '@angular/core';
import {   WordsService } from '../words.service';
import {   BrowserModule,platformBrowser,disableDebugTools   } from '@angular/platform-browser';

@Component({
  selector: 'app-words',
  templateUrl: './words.component.html',
  styleUrls: ['./words.component.css']
})
export class WordsComponent implements OnInit {

    constructor(
        private wordsService: WordsService
    ) { }
    
    wordsval0 :string = this.wordsService.wordsval0;
    wordsval1 :string = this.wordsService.wordsval1;
    wordsval2 :string = this.wordsService.wordsval2;
    wordsval3 :string = this.wordsService.wordsval3;
    
    wordsbool0:string =  this.wordsService.wordsbool0;
    wordsbool1:string =  this.wordsService.wordsbool1;
    wordsbool2:string =  this.wordsService.wordsbool2;
    wordsbool3:string =  this.wordsService.wordsbool3;
    ngOnInit() {
        console.log(    disableDebugTools  )
    }
  
}

