import { Component, OnInit } from '@angular/core';
import {   WordsService   } from '../words.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

    constructor(
        private wordsService: WordsService
    ) { }

    navigationBool:Array<any> = this.wordsService.navigationBool
    navigationStyle:Array<any> = this.wordsService.navigationStyle
    navigationVal:Array<any> = this.wordsService.navigationVal

    ngOnInit() {

    }

}
