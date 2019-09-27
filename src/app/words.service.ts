import { Injectable } from '@angular/core';
import {  wordsGroupObject } from './wordsGroupObject';
import { Observable, of, Subject } from 'rxjs';



@Injectable({
  providedIn: 'root'
})

export class WordsService {

    constructor() { };
    
    wordsval0:string = 'w_o_r_d_s_Title'
    wordsval1:string = 'w_o_r_d_s_Line'
    wordsval2:string = 'w_o_r_d_s_paragraph'
    wordsval3:string = 'w_o_r_d_s_Dash'
    wordsval4:string = 'w_o_r_d_s_paragraphDash'
    wordsVal:Array<string> = ['w_o_r_d_s_Title','w_o_r_d_s_Line','w_o_r_d_s_paragraph','w_o_r_d_s_Dash','w_o_r_d_s_paragraphDash']
    
    wordsbool0:string = 'false'
    wordsbool1:string = 'true'
    wordsbool2:string = 'true'
    wordsbool3:string = 'true'
    wordsbool4:string = 'true'
    wordsbool:Array<string> = ['true','false','true','true','true']
    
    wordsSeq0:Array<Number> = [3]
    wordsSeq1:Array<Number> = [3]
    wordsSeq2:Array<Number> = [3]
    wordsSeq3:Array<Number> = [3,3,3,3,3,3]
    wordsSeq4:Array<Number> = [3,3,3,3,3,3]

    wordsStyle0:Array<Number> = [3]
    wordsStyle1:Array<Number> = [3]
    wordsStyle2:Array<Number> = [3]
    wordsStyle3:Array<any> = [3,3,3] 
    wordsStyle4:Array<any> = [3,3,3] 
    wordsStyle: Array<any[]> = [[3],[3],[3],[3,3,3],[3,3,3]]

    wordsValIndex:Array<any> = [0,0,'false',0] // helps to filter out element that are not availble
    wordsStyleIndex:Array<any> = [0]

    //represnetaing each instance of the wordsComponent
    wordsMyElements :Subject<Array<any[]>> = new Subject<Array<any>>();
    wordsMyElementsArray: any[] = []; 
    wordsComponentObject0:any = {
        styles:[
            {  
                override:'true',
                css:{
                    position:'relative',
                    left:'30px'
                }
            },
            {
                override:'1'
            },
            {
                override:'2'
            },
            {
                override:'3'
            },
            {
                override:'true',
                css:{
                    position:'relative',
                    'left':'1em',
                    'top':'32px'
                },
                repositionDash:{
                    lineHeight:18,
                    factor:'0'        
                }
            },
            {
                override:'true',
                css:{
                    position:'relative',
                    'left':'1em',
                    'top':'64px'
                },
                repositionDash:{
                    lineHeight:18,
                    factor:'.27'        
                }
            },
            {
                override:'true',
                css:{
                    position:'relative',
                    'left':'1em',
                    'top':'96px'
                },
                repositionDash:{
                    lineHeight:18,
                    factor:'.175'      
                }
            },  
            {
                override:'true',
                css:{
                    position:'relative',
                    'left':'3em',
                    'top':'0em'
                },
                repositionDash:{
                    respective:4
                }
            },
            {
                override:'true',
                css:{
                    position:'relative',
                    'left':'3em',
                    'top':'0em'
                },
                repositionDash:{
                    respective:5
                }                
            },
            {
                override:'true',
                css:{
                    position:'relative',
                    'left':'3em',
                    'top':'0em'
                },
                repositionDash:{
                    respective:6
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
                    left:'30px'
                }
            },
            {},
            {},
            {},
            {
                override:'true',
                css:{
                    position:'relative',
                    'left':'1em',
                    'top':'32px'
                },
                repositionDash:{
                    lineHeight:18,
                    factor:'0'        
                }
            },
            {
                override:'true',
                css:{
                    position:'relative',
                    'left':'1em',
                    'top':'64px'
                },
                repositionDash:{
                    lineHeight:18,
                    factor:'.27'        
                }
            },
            {
                override:'true',
                css:{
                    position:'relative',
                    'left':'1em',
                    'top':'96px'
                },
                repositionDash:{
                    lineHeight:18,
                    factor:'.175'      
                }
            },  
            {
                override:'true',
                css:{
                    position:'relative',
                    'left':'3em',
                    'top':'0em'
                },
                repositionDash:{
                    respective:4
                }
            },
            {
                override:'true',
                css:{
                    position:'relative',
                    'left':'3em',
                    'top':'0em'
                },
                repositionDash:{
                    respective:5
                }                
            },
            {
                override:'true',
                css:{
                    position:'relative',
                    'left':'3em',
                    'top':'0em'
                },
                repositionDash:{
                    respective:6
                }                  
            }                                                
        ]
    }
    wordsComponentObject2:any = {
        styles:[
            {  
                override:'true',
                css:{
                    position:'relative',
                    left:'30px'
                }
            },
            {},
            {},
            {},
            {
                override:'true',
                css:{
                    position:'relative',
                    'left':'1em',
                    'top':'32px'
                },
                repositionDash:{
                    lineHeight:18,
                    factor:'0'        
                }
            },
            {
                override:'true',
                css:{
                    position:'relative',
                    'left':'1em',
                    'top':'64px'
                },
                repositionDash:{
                    lineHeight:18,
                    factor:'.27'        
                }
            },
            {
                override:'true',
                css:{
                    position:'relative',
                    'left':'1em',
                    'top':'96px'
                },
                repositionDash:{
                    lineHeight:18,
                    factor:'.175'      
                }
            },  
            {
                override:'true',
                css:{
                    position:'relative',
                    'left':'3em',
                    'top':'0em'
                },
                repositionDash:{
                    respective:4
                }
            },
            {
                override:'true',
                css:{
                    position:'relative',
                    'left':'3em',
                    'top':'0em'
                },
                repositionDash:{
                    respective:5
                }                
            },
            {
                override:'true',
                css:{
                    position:'relative',
                    'left':'3em',
                    'top':'0em'
                },
                repositionDash:{
                    respective:6
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
  
    //dashes repositioning
    wordsRepositionDashesCount:any = 0;
    wordsRepositionDashes(dev_obj:any ):any{
        return (event:any)=>{
            // console.log(event)
        //   console.log(   this.wordsMyElementsArray    )
            for(   let dashes of this.wordsMyElementsArray   ){
                for(var i=0; i!== dashes.length;i++){
                        
                
                    if(   dashes[i].nativeElement.id === 'w_o_r_d_s_paragraphDash'   ){
                    
                        //find out how tall is paragprah dash,height and adjust according
                        // console.log(   dashes._results[i].nativeElement.clientHeight,
                        // )
                        // console.log(   dev_obj.templateVar  )                       
                        // console.log(   this[dev_obj.templateVar].styles[   this[dev_obj.templateVar].styles[i].repositionDash.respective   ]   )
                        dashes[   this[dev_obj.templateVar].stylesCopy[i].repositionDash.respective   ].nativeElement.style.top = (   
                            parseInt(   
                                this[dev_obj.templateVar].stylesCopy[   this[dev_obj.templateVar].styles[i].repositionDash.respective   ].css.top.split("px")[0]   
                            ) + 
                            (
                                parseInt(
                                    this[dev_obj.templateVar].stylesCopy[   this[dev_obj.templateVar].styles[i].repositionDash.respective   ].css.top.split("px")[0]
                                ) * 
                                ( 
                                        (   
                                            dashes[i].nativeElement.clientHeight/this[   dev_obj.templateVar   ].stylesCopy[   this[dev_obj.templateVar].stylesCopy[i].repositionDash.respective   ].repositionDash.lineHeight - 1   
                                        ) * this[   dev_obj.templateVar   ].stylesCopy[   this[dev_obj.templateVar].styles[i].repositionDash.respective   ].repositionDash.factor
                                )  * this.wordsRepositionDashesCount
                            )   
                        ).toString() + "px"
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
    // dashes repositioning
  
}
