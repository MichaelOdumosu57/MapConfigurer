import { Injectable } from '@angular/core';
import {  wordsGroupObject } from './wordsGroupObject';
import { Observable, of, Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class WordsService {

    constructor() { };
    
    /*navigation*/
        navigationVal:Array<string> = [
            'n_a_v_i_g_a_t_i_o_n_Bar',
            'n_a_v_i_g_a_t_i_o_n_Title',
            'n_a_v_i_g_a_t_i_o_n_SubTitle',
            'n_a_v_i_g_a_t_i_o_n_logoImg',
            'n_a_v_i_g_a_t_i_o_n_homeLink',
            'n_a_v_i_g_a_t_i_o_n_aboutLink',
            'n_a_v_i_g_a_t_i_o_n_servicesLink',
            'n_a_v_i_g_a_t_i_o_n_projectsLink',
            'n_a_v_i_g_a_t_i_o_n_blogLink',
            'n_a_v_i_g_a_t_i_o_n_contactLink',
            'n_a_v_i_g_a_t_i_o_n_takeActionLink',
            'n_a_v_i_g_a_t_i_o_n_takeActionCircle'
        ]
        navigationBool: Array<any> = ['true','true','true','true','true','true','true','true','true','true','true','true']
        navigationStyle: Array<any> = Array.from(Array(12),()=>{return [3]})
        navigationValIndex:Array<any> = [0,0,'false',0] // helps to filter out element that are not availble
        navigationStyleIndex:Array<any> = [0]
        navigationBoolIndex:Array<any>= [0]


        // NavigationComponent Instances
            navigationMyElements :Subject<Array<any[]>> = new Subject<Array<any>>();
            navigationMyElementsArray: any[] = [];
            navigationComponentObject0:any ={
                styles:[
                    {
                        override:'false',
                        css:{
                        }
                    },
                    {
                        override:'true',
                        css:{
                            position:'relative',
                            height: '155px'
                        }
                    },
                    {
                        override:'true',
                        css:{
                            position:'relative',
                            bottom:'80px',
                            left:'23px',
                            margin:'0px'
                        }
                    },
                    {
                        override:'true',
                        css:{
                            position:'relative',
                            bottom:'93px',
                            left:'23px',
                            'fontSize':'17px',
                            'fontWeight':400

                        }
                    },
                    {
                        override:'true',
                        css:{
                            position:'relative',
                            bottom:'234px',
                            left:'20px'
                        }
                    },
                    ...Array.from(Array(1),(x,i)=> {
                        return {
                        override:'true',
                        css:{
                            position:'relative',
                            bottom:'254px',
                            left:'600px',
                            'fontSize':'16px'
                        }
                    }}),
                    {
                        override:'true',
                        css:{
                            position:'relative',
                            bottom:'288px',
                            left:'685px',
                            'fontSize':'16px'
                        }
                    },
                    {
                        override:'true',
                        css:{
                            position:'relative',
                            bottom:'323px',
                            left:'770px',
                            'fontSize':'16px'
                        }
                    },
                    {
                        override:'true',
                        css:{
                            position:'relative',
                            bottom:'355px',
                            left:'870px',
                            'fontSize':'16px'
                        }
                    },
                    {
                        override:'true',
                        css:{
                            position:'relative',
                            bottom:'390px',
                            left:'965px',
                            'fontSize':'16px'
                        }
                    },
                    {
                        override:'true',
                        css:{
                            position:'relative',
                            bottom:'424px',
                            left:'1035px',
                            'fontSize':'16px'
                        }
                    },
                    {
                        override:'true',
                        css:{
                            position:'relative',
                            bottom:'458px',
                            left:'1135px',
                            'fontSize':'16px'
                        }
                    },
                    {
                        override:'true',
                        css:{
                            position:'relative',
                            bottom:'505px',
                            left:'1108px'
                        }
                    }                    
                    
                ]
            }
        //
    /* */


    /*words*/ //
        wordsVal:Array<string> = ['w_o_r_d_s_Title','w_o_r_d_s_Line','w_o_r_d_s_paragraph','w_o_r_d_s_Dash','w_o_r_d_s_paragraphDash']
        wordsbool:Array<any> = ['true','true','true','true','true']
        wordsStyle: Array<any[]> = [[3],[3],[3],[3,3,3],[3,3,3]]

        wordsValIndex:Array<any> = [0,0,'false',0] // helps to filter out element that are not availble
        wordsStyleIndex:Array<any> = [0]
        wordsBoolIndex:Array<any>= [0]

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
        //

        //dashes repositioning
        wordsRepositionDashesCount:any = 0;
        wordsRepositionDashesReadjust:number
        wordsRepositionDashes(dev_obj:any ):any{
            return (event:any)=>{
            // console.log(event)
            // console.log(   this.wordsMyElementsArray    )
                for(   let dashes of this.wordsMyElementsArray   ){
                    this.wordsRepositionDashesReadjust = this[dev_obj.templateVar].styles.length  - dashes.length
                    // console.log(   this.wordsRepositionDashesReadjust   )
                    for(var i=0; i!== dashes.length;i++){
                            
                    
                        if(   dashes[i].nativeElement.id === 'w_o_r_d_s_paragraphDash'   ){
                        
                            //find out how tall is paragprah dash,height and adjust according
                            // console.log(   dashes[i].nativeElement.clientHeight   )
                            // console.log(   dashes[   this[dev_obj.templateVar].stylesCopy[i].repositionDash.respective   ].nativeElement.style.top   )
                            // console.log(   this[dev_obj.templateVar].stylesCopy[   this[dev_obj.templateVar].stylesCopy[i].repositionDash.respective - this.wordsRepositionDashesReadjust],this[dev_obj.templateVar].stylesCopy[i]   )
                            // console.log(   dev_obj.templateVar  )
                            // console.log(   this[dev_obj.templateVar].styles[   this[dev_obj.templateVar].styles[i].repositionDash.respective   ]   )
                            dashes[   this[dev_obj.templateVar].stylesCopy[i].repositionDash.respective - this.wordsRepositionDashesReadjust     ].nativeElement.style.top = (
                                parseInt(
                                    this[dev_obj.templateVar].stylesCopy[   this[dev_obj.templateVar].stylesCopy[i].repositionDash.respective - this.wordsRepositionDashesReadjust   ].css.top.split("px")[0]
                                ) +
                                (
                                    parseInt(
                                        this[dev_obj.templateVar].stylesCopy[   this[dev_obj.templateVar].stylesCopy[i].repositionDash.respective - this.wordsRepositionDashesReadjust  ].css.top.split("px")[0]
                                    ) *
                                    (
                                            (
                                                dashes[i].nativeElement.clientHeight/this[   dev_obj.templateVar   ].stylesCopy[   this[dev_obj.templateVar].stylesCopy[i].repositionDash.respective - this.wordsRepositionDashesReadjust   ].repositionDash.lineHeight - 1
                                            ) * this[   dev_obj.templateVar   ].stylesCopy[   this[dev_obj.templateVar].stylesCopy[i].repositionDash.respective - this.wordsRepositionDashesReadjust  ].repositionDash.factor
                                    )  * this.wordsRepositionDashesCount
                                )
                            ).toString() + "px"
                            this.wordsRepositionDashesCount += 1
                            //

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
    /* */ //
}
