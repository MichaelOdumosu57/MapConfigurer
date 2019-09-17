import { Injectable } from '@angular/core';
import {  wordsGroupObject } from './wordsGroupObject';

import { isPlatformBrowser } from "@angular/common";
import { ClassProvider, FactoryProvider, InjectionToken, PLATFORM_ID } from '@angular/core';

/* Create a new injection token for injecting the window into a component. */

@Injectable({
  providedIn: 'root'
})


export class WordsService {

  constructor() { };
  
  
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
  wordsStyle4:any;
  
  wordsGroupObject0:wordsGroupObject = {wordsStyle:[{}]}
  wordsGroupObject1:wordsGroupObject = {wordsStyle:[{}]}
  
  wordsElementHeight : Array<Number>;
  wordsElementparagrpahDashHeight : Number = 18
  
  wordsGroup0(dev_obj:Object):wordsGroupObject{
      this.wordsGroupObject0.wordsStyle =  this.wordsStyle3  = 
      [
        {
            position:'relative',
            'margin-left':'1em',
            'margin-top':'2em',
            'margin-bottom':'2em'
        },
        {
            position:'relative',
            'margin-left':'1em',
            'margin-top':'2em',
            'margin-bottom':'2em'
        },
        {
            position:'relative',
            'margin-left':'1em',
            'margin-top':'2em',
            'margin-bottom':'2em'
        }      
      ]
      console.log(  this.wordsStyle3  )
      return  this.wordsGroupObject0
    
  }  
  wordsGroup1(dev_obj:Object):wordsGroupObject{
      this.wordsGroupObject1.wordsStyle =  this.wordsStyle4  = 
      [
        {
            position:'relative',
            'margin-left':'3em',
            'margin-top':'-7em' 
        },
        {
            position:'relative',
            'margin-left':'3em',
            'margin-top':'1em' 
        },
        {
            position:'relative',
            'margin-left':'3em',
            'margin-top':'1em' 
        }
      ]
      return  this.wordsGroupObject1
  }    
}
