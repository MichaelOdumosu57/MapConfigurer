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
  wordsSeq3:Array<Number> = [3,3,3,3,3,3]
  wordsSeq4:Array<Number> = [3,3,3,3,3,3]
  
  
  wordsStyle3:any;
  wordsStyle4:any;
  
  wordsGroupObject0:wordsGroupObject = {wordsStyle:[{}]}
  wordsGroupObject1:wordsGroupObject = {wordsStyle:[{}]}
  
  wordsElementHeight : Array<number>;
  wordsElementparagrpahDashHeight : number = 18
  
  wordsGroup0(dev_obj:Object):wordsGroupObject{
      this.wordsGroupObject0.wordsStyle =  this.wordsStyle3  = 
      [
        {
            position:'relative',
            'left':'1em',
            'top':'32px',
            'factor':'0'
        },
        {
            position:'relative',
            'left':'1em',
            'top':'64px',
            'factor':'.27'
        },
        {
            position:'relative',
            'left':'1em',
            'top':'96px',
            'factor':'.175'
        }         
      ]
      
      this.wordsRepositionDashesData = Array.from(this.wordsStyle3,(a:any)=>{
        var w_R_D_D_0_i = a.top
        var w_R_D_D_1_i = a.factor 
        return {
              lineHeight:18,
              top: w_R_D_D_0_i,
              factor:w_R_D_D_1_i,
          } 
        
      })
      console.log(   this.wordsRepositionDashesData   )
      return  this.wordsGroupObject0
    
  }  
  wordsGroup1(dev_obj:Object):wordsGroupObject{
      this.wordsGroupObject1.wordsStyle =  this.wordsStyle4  = 
      [
        {
            position:'relative',
            'left':'3em',
            'top':'0em'
        },
        {
            position:'relative',
            'left':'3em',
            'top':'0em'
        },
        {
            position:'relative',
            'left':'3em',
            'top':'0em'
        }          
      ]
      return  this.wordsGroupObject1
  } 
  wordsRepositionDashesCount:any = 0;
  wordsRepositionDashesData: Array<any>;
  wordsRepositionDash: Array<any> = [];
  wordsRepositionDashes():any{
      return (event:any)=>{
          for(   let dashes of this.wordsRepositionDash   ){
              for(var i=0; i!== dashes._results.length;i++){
                      
                   
                  if(   dashes._results[i].nativeElement.id === 'w_o_r_d_s_paragraphDash'   ){
                  
                          //find out how tall is paragprah dash,height and adjust according
                          dashes._results[i-3].nativeElement.style.top
                          // console.log(   dashes._results[i].nativeElement.clientHeight,
                          //   this.wordsElementparagrpahDashHeight,
                          //   this.wordsRepositionDashesData[   this.wordsRepositionDashesCount   ].top,
                          //   dashes._results[i].nativeElement.clientHeight/this.wordsElementparagrpahDashHeight
                          // )
                          dashes._results[i-3].nativeElement.style.top = (   parseInt(this.wordsRepositionDashesData[   this.wordsRepositionDashesCount   ].top.split("px")[0]) + (
                          parseInt(this.wordsRepositionDashesData[   this.wordsRepositionDashesCount   ].top.split("px")[0]) * ( ( dashes._results[i].nativeElement.clientHeight/this.wordsElementparagrpahDashHeight - 1   ) * this.wordsRepositionDashesData[   this.wordsRepositionDashesCount   ].factor)  * this.wordsRepositionDashesCount)   ).toString() + "px"
                          this.wordsRepositionDashesCount += 1
                          //
                          
                          // dashes._results[i-3].nativeElement.style.top
                            // base +     base * factor * arrayIndex
                             
                            // so when word wrap is one the factor expression needs to end up as zero
                            //   on word wrap  1 factor ===0 
                      
                  }
                          
                          
              }  
              this.wordsRepositionDashesCount = 0 
          }
      }
  }  
  
  wordsGenerateSelector(): string{
      var a = 0;
      var string = '';
      return (function(){
      
      
        if(   a!==3   ){
            
            
            string += 'myval'+a+','
            
        a+=1
        arguments.callee()        
        }
        return string.slice(0,-1)
        
      })()
  }
  
}
