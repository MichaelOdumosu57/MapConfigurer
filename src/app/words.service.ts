import { Injectable } from '@angular/core';
import {  wordsGroupObject } from './wordsGroupObject';
import { Observable, of, Subject } from 'rxjs';



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

    //represnetaing each instance of the wordsComponent
    wordsMyElements :Subject<Array<any[]>> = new Subject<Array<any>>();
    wordsMyElementsArray: any[] = []; 
    wordsComponentObject0:any = {
        styles:[
            {  
                override:'true',
                css:{
                    position:'relative',
                    left:'300px'
                }
            }
        ]
    }
    wordsComponentObject1:any = {
        styles:[
            {  
                override:'true',
                css:{
                    position:'relative',
                    left:'300px'
                }
            }
        ]
    }
    wordsComponentObject2:any ={
        styles:[
            {  
                override:'true',
                css:{
                    position:'relative',
                    left:'300px'
                }
            }
        ]
    }
  
  wordsComponent(dev_obj:Object | any| void) : any{
      for(   let metadata of dev_obj.ng_ITO   ){
          for(   let i in metadata){
              // console.log(metadata[i].nativeElement)       
          }
      }      
  }
  //represnetaing each instance of the wordsComponent
    
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
    //   console.log(   this.wordsRepositionDashesData   )
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
  
  //dashes repositioning
  wordsRepositionDashesCount:any = 0;
  wordsRepositionDashesData: Array<any>;
  wordsRepositionDash: Array<any> = [];
  wordsRepositionDashes():any{
      return (event:any)=>{
          for(   let dashes of this.wordsRepositionDash   ){
              for(var i=0; i!== dashes.length;i++){
                      
                   
                  if(   dashes[i].nativeElement.id === 'w_o_r_d_s_paragraphDash'   ){
                  
                          //find out how tall is paragprah dash,height and adjust according
                          // console.log(   dashes._results[i].nativeElement.clientHeight,
                          //   this.wordsElementparagrpahDashHeight,
                          //   this.wordsRepositionDashesData[   this.wordsRepositionDashesCount   ].top,
                          //   dashes._results[i].nativeElement.clientHeight/this.wordsElementparagrpahDashHeight
                          // )
                          dashes[i-3].nativeElement.style.top = (   parseInt(this.wordsRepositionDashesData[   this.wordsRepositionDashesCount   ].top.split("px")[0]) + (
                          parseInt(this.wordsRepositionDashesData[   this.wordsRepositionDashesCount   ].top.split("px")[0]) * ( ( dashes[i].nativeElement.clientHeight/this.wordsElementparagrpahDashHeight - 1   ) * this.wordsRepositionDashesData[   this.wordsRepositionDashesCount   ].factor)  * this.wordsRepositionDashesCount)   ).toString() + "px"
                          this.wordsRepositionDashesCount += 1
                          //
                          
                          // dashes._results[i-3].nativeElement.style.top
                            // base +     base * factor * arrayIndex
                             
                            // so when word wrap is one the factor expression needs to end up as zero
                            //   on word wrap  1 factor ===0 
                      
                  }
                          
                  
                  if(   dashes[i].nativeElement.tagName === 'APP-WORDS'   ){}        
              }  
              this.wordsRepositionDashesCount = 0 
          }
      }
  }  
  // dashes repositioning
  
}
