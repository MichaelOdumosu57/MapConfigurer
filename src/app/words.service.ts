import { Injectable } from '@angular/core';
import {  wordsGroupObject } from './wordsGroupObject';

@Injectable({
  providedIn: 'root'
})


export class WordsService {

  constructor( ) {};
  
  wordsval0:string = 'w_o_r_d_s'
  wordsval1:string = 'w_o_r_d_s_Line'
  wordsval2:string = 'w_o_r_d_s_paragraph'
  wordsval3:string = 'w_o_r_d_s_Dash'
  wordsval4:string = 'w_o_r_d_s_paragraphDash'
  
  wordsbool0:string = 'true'
  wordsbool1:string = 'true'
  wordsbool2:string = 'true'
  wordsbool3:string = 'true'
  wordsbool4:string = 'true'
  
  wordsSeq0:Array<Number> = [3]
  wordsSeq1:Array<Number> = [3]
  wordsSeq2:Array<Number> = [3]
  wordsSeq3:Array<Number> = [3,3,3]
  wordsSeq4:Array<Number> = [3,3,3]
  
  
  wordsStyle3:any;
  wordsStyle4:string;
  
  wordsGroupObject0:wordsGroupObject = {wordsStyle:'default'};
  wordsGroup0(dev_obj:Object):wordsGroupObject{
    this.wordsGroupObject0.wordsStyle =  this.wordsStyle3  = `
        position:relative;
    `
    console.log(  this.wordsStyle3  )
    return  this.wordsGroupObject0
    
    
  }  
}
