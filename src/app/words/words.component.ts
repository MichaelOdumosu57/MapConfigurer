import { Component, OnInit } from '@angular/core';
import { WordsService } from '../words.service';


@Component({
  selector: 'app-words',
  templateUrl: './words.component.html',
  styleUrls: ['./words.component.css']
})
export class WordsComponent implements OnInit {

    constructor(
        private wordsService: WordsService,
    ) { }
    
    name :string = this.wordsService.name;
    ngOnInit() {
        
    }
  
}

