import { Injectable } from '@angular/core';
import {  wordsGroupObject } from './wordsGroupObject';
import { Observable, of, Subject, Subscription } from 'rxjs';



function numberParse(dimension){
    dimension = parseFloat(dimension.split("p")[0])
    return dimension;
}

@Injectable({
  providedIn: 'root'
})

export class WordsService {

    constructor() { };
    
    /*overlay*/

        // OverlayComponent concept metadata
        overlayCustomWordWrapElements:Array<any>  = []
        overlayAboutPreTitleDefaultFontSize = '78px'
        overlayAboutMailLineDefaultWidth = "400px"
        overlayAboutMailLineDefaultTop ='330px'
        //

        overlayVal:Array<string> = [
            'o_v_e_r_l_a_y_Board',
            'o_v_e_r_l_a_y_AboutPreTitle',
            'o_v_e_r_l_a_y_Title',
            'o_v_e_r_l_a_y_BlendImg',
            'o_v_e_r_l_a_y_BlendWords',
            'o_v_e_r_l_a_y_AboutMainLine',
            'o_v_e_r_l_a_y_AboutLearn',    
            'o_v_e_r_l_a_y_AboutLearnText',            
        ]
        overlayBool: Array<any> = ['true','true','true','true','true','true','true','true']
        overlayStyle: Array<any> = [[3],[3],[3],[3],[3,3],[3],[3],[3]]
        overlayValIndex:Array<any> = [0,0,'false',0] // helps to filter out element that are not availble
        overlayStyleIndex:Array<any> = [0]
        overlayBoolIndex:Array<any>= [0]    

        // OverlayComponent events
        overlayLoadEvent$:Observable<Event>
        overlayLoadEventSubscription0:Subscription
        overlayLoadEventSubscription1:Subscription 
        overlayResizeEvent$:Observable<Event>
        overlayResizeEventSubscription0:Subscription
        overlayResizeEventSubscription1:Subscription
        overlayResizeEventSubscription2:Subscription
        overlayClickEvent$:Observable<Event>        
        overlayClickEventSubscription0:Subscription
        //         

        // OverlayComponent Instances
        overlayMyElements :Subject<Array<any[]>> = new Subject<Array<any>>();
        overlayMyElementsArray: any[] = [];
        overlayComponentObject4:any ={
            styles:[
                {
                    override:'true',
                    css:{
                        position:'absolute',
                        top:'0px',
                        height:'100%',
                        width:'100%',
                        'z-index':-1
                    }
                },                
                {
                    override:'true',
                    css:{
                        position:'fixed',
                        // height:'1000px',
                        height:'140%',
                        // width:'100%',
                        'z-index':-1
                        // opacity:0
                    }
                },
                {
                    override:'true',
                    css:{
                        position:'absolute',
                        'font-family':"'Vidaloka',sans-serif",
                        top:"170px",
                        left:'45%',
                        'font-size': this.overlayAboutPreTitleDefaultFontSize,
                        'font-style':'italic',
                        'text-align':'center',
                        color:'white',
                        // 'margin-bottom':'20px',
                        'text-shadow':'rgba(0, 0, 0, 0.3) 2px -1px 0px' // so this property we allow because it doesnt make a meaningful difference if its not working
                    }
                },                 
                {
                    override:'true',
                    css:{
                        position:'absolute',
                        top:"270px",
                        left:'45%',
                        'font-size':'141px', // for mobile you must do something about this
                        'font-family':"'Aclonica',sans-serif",
                        'font-weight':'500',
                        'text-align':'center',
                        color:'white'

                    }
                },
                {
                    override:'false',
                    css:{
                        position:'absolute',
                        'background-image':'url(assets/media/IMG-1475-12.png)',
                        height:'500px',
                        color:'white',
                        'z-index':3
                    }
                },
                {
                    override:'false',
                    css:{
                    }
                },
                {
                    override:'false',
                    css:{
                    }
                },
                {
                    override:'true',
                    css:{
                        position:'absolute',
                        'background-color':'rgb(249, 87, 128)',
                        top:this.overlayAboutMailLineDefaultTop,
                        // left:'45%',
                        width:this.overlayAboutMailLineDefaultWidth,
                        height:"2px"

                    }
                },
                {
                    override:'true',
                    css:{
                        'border-radius':'50px',
                        'height':'47px',
                        'width':'182px',
                        'top':'525px',
                        left:'45%'
                    }
                },    
                {
                    override:'true',
                    css:{
                        'top':'515px',
                        'font-family':'Noto Sans'
                    }
                },                                                                                                                                                                                 
            ], 
            ngStyle:Array.from(Array(20),(x,i)=>{return {}}),
            parameters:[    
            ],
            location:{
                parameters:[]
            },
            metadata:{
                title:'CHEF LIA',
                cssAsync: new  Subject<any>(),
                mainImg:'assets/media/IMG-1787.jpg',
                blendTitle:'',
                aboutPreTitle:'Cooking With',
                aboutPreTitleDefaultFontSize:this.overlayAboutPreTitleDefaultFontSize, // i hope this okay its from the same words service,
                aboutBoardDefaultWidth:null,
                aboutMailLineDefaultWidth  :this.overlayAboutMailLineDefaultWidth,   
                aboutMailLineDefaultTop: this.overlayAboutMailLineDefaultTop,
                aboutBarPreTitleDOMRectTopDiff:null,
                text0:'LEARN MORE',
                
            }
        }        
        overlayComponentObject0:any ={
            styles:[
                {
                    override:'true',
                    css:{
                        position:'absolute',
                        top:'0px',
                        width:'100%',
                        'z-index':-1
                    }
                },
                {
                    override:'true',
                    css:{
                        position:'absolute',
                        height:'500px',
                        width:'100%',
                    }
                },
                {

                },
                {
                    override:'true',
                    css:{
                        position:'absolute',
                        top:"200px",
                        left:'45%',
                        'font-size':'60px',
                        color:'white'

                    }
                },
                ...Array.from(Array(3),()=> {
                    return {
                    override:'false',
                    css:{
                        // position:'absolute',
                        // top:'72px',
                        // left:'550px',
                        // 'fontSize':'16px'
                    }
                }}),
                {                    
                }                                                                                   
            ], 
            ngStyle:Array.from(Array(20),(x,i)=>{return {}}),
            parameters:[    
            ],
            location:{
                parameters:[]
            },
            metadata:{
                title:'SERVICES',
                cssAsync: new  Subject<any>(),
                mainImg:'assets/media/IMG-1788-1.jpg'
            }
        }  
        overlayComponentObject1:any ={
            styles:[
                {
                    override:'true',
                    css:{
                        position:'absolute',
                        top:'0px',
                        width:'100%',
                        'z-index':-1
                    }
                },
                {
                    override:'true',
                    css:{
                        position:'absolute',
                        height:'500px',
                        width:'100%',
                    }
                },
                {

                },
                {
                    override:'true',
                    css:{
                        position:'absolute',
                        top:"200px",
                        left:'45%',
                        'font-size':'60px',
                        color:'white'

                    }
                },
                ...Array.from(Array(3),()=> {
                    return {
                    override:'false',
                    css:{
                        // position:'absolute',
                        // top:'72px',
                        // left:'550px',
                        // 'fontSize':'16px'
                    }
                }}),
                {                    
                }    
                                                                                 
            ], 
            ngStyle:Array.from(Array(20),(x,i)=>{return {}}),
            parameters:[    
            ],
            location:{
                parameters:[]
            },
            metadata:{
                title:'OUR PROJECTS',
                cssAsync: new  Subject<any>(),
                mainImg:'assets/media/project-background.jpg'
            }
        }     
        overlayComponentObject2:any ={
            styles:[
                {
                    override:'true',
                    css:{
                        position:'absolute',
                        top:'0px',
                        width:'100%',
                        'z-index':-1
                    }
                },
                {
                    override:'true',
                    css:{
                        position:'absolute',
                        height:'500px',
                        width:'100%',
                    }
                },
                {

                },
                {
                    override:'true',
                    css:{
                        position:'absolute',
                        top:"200px",
                        left:'45%',
                        'font-size':'60px',
                        'font-family':"'Charmonman',sans-serif",
                        'font-weight':'500',
                        color:'white'

                    }
                },
                ...Array.from(Array(3),()=> {
                    return {
                    override:'false',
                    css:{
                        // position:'absolute',
                        // top:'72px',
                        // left:'550px',
                        // 'fontSize':'16px'
                    }
                }}),
                {                    
                }                                                                                    
            ], 
            ngStyle:Array.from(Array(20),(x,i)=>{return {}}),
            parameters:[    
            ],
            location:{
                parameters:[]
            },
            metadata:{
                title:'CONTACT US',
                cssAsync: new  Subject<any>(),
                mainImg:'assets/media/IMG_1391.jpg'
            }
        }    
        overlayComponentObject3:any ={
            styles:[
                {
                    override:'true',
                    css:{
                        position:'absolute',
                        top:'0px',
                        width:'100%',
                        'z-index':-1
                    }
                },
                {
                    override:'true',
                    css:{
                        position:'absolute',
                        height:'600px',
                        width:'100%',
                        'z-index':-1,
                        // opacity:0
                    }
                },
                {

                },
                {
                    override:'true',
                    css:{
                        position:'absolute',
                        top:"200px",
                        left:'45%',
                        'font-size':'60px',
                        'font-family':"'Charmonman',sans-serif",
                        'font-weight':'500',
                        color:'white'

                    }
                },
                {
                    override:'false',
                    css:{
                        position:'absolute',
                        'background-image':'url(assets/media/IMG-1475-12.png)',
                        height:'500px',
                        color:'white',
                        'z-index':3
                    }
                },
                {
                    override:'true',
                    css:{
                        position:'absolute',
                        top:"275px",
                        left:'10%',
                        width:'0px',
                        'font-size':'24px',
                        'font-family':"'Abril Fatface',sans-serif",
                        'font-weight':'500',
                        'font-style' :'italic',
                        color:'rgb(226,4,78)'

                    }
                },
                {
                    override:'true',
                    css:{
                        position:'absolute',
                        top:"300px",
                        left:'75%',
                        width:'0px',
                        'font-size':'24px',
                        'font-family':"'Abril Fatface',sans-serif",
                        'font-weight':'500',
                        'font-style' :'italic',
                        color:'rgb(226,4,78)'

                    }
                },
                {                    
                }                                                                                                                  
            ], 
            ngStyle:Array.from(Array(20),(x,i)=>{return {}}),
            parameters:[    
            ],
            location:{
                parameters:[]
            },
            metadata:{
                title:'',
                cssAsync: new  Subject<any>(),
                mainImg:'assets/media/aboutMain.png',
                blendTitle:'ABOUT ME'
                
            }
        }                                             
        overlayComponentMonitor:any = {
        }
        //
        
    /* */

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
            'n_a_v_i_g_a_t_i_o_n_takeActionCircle',
            'n_a_v_i_g_a_t_i_o_n_dropDownBox',
            'n_a_v_i_g_a_t_i_o_n_dropDownIcon',
            'n_a_v_i_g_a_t_i_o_n_dropDown'
        ]
        navigationBool: Array<any> = ['true','true','true','true','true','true','true','true','true','true','true','true','false','true','true']
        navigationStyle: Array<any> = Array.from(Array(15),()=>{return [3]})
        navigationValIndex:Array<any> = [0,0,'false',0] // helps to filter out element that are not availble
        navigationStyleIndex:Array<any> = [0]
        navigationBoolIndex:Array<any>= [0]

        // NavigationComponent events
            navigationLoadEvent0:Observable<Event>
            navigationLoadEventSubscription0:Subscription
            navigationLoadEventSubscription1:Subscription 
            navigationResizeEvent0:Observable<Event>
            navigationResizeEventSubscription0:Subscription
            navigationResizeEventSubscription1:Subscription  
            navigationClickEvent$:Observable<Event>        
            navigationClickEventSubscription0:Subscription
        //    

        // NavigationComponent Instances
            navigationMyElements :Subject<Array<any[]>> = new Subject<Array<any>>();
            navigationMyElementsArray: any[] = [];
            navigationComponentObject0:any ={
                styles:[
                    {
                        override:'false',
                        css:{
                            postion:'absolute'
                        }
                    },
                    {
                        override:'true',
                        css:{
                            position:'relative',
                            height: '165px'

                        }
                    },
                    {
                        override:'true',
                        css:{
                            position:'relative',
                            bottom:'80px',
                            left:'23px',
                            margin:'0px',
                            width:'0px'
                        }
                    },
                    {
                        //HERE
                        override:'true',
                        css:{
                            position:'relative',
                            bottom:'93px',
                            left:'23px',
                            fontSize:'17px',
                            fontWeight:400,
                            width:'0px'
                        }
                    },
                    {
                        override:'true',
                        css:{
                            position:'absolute',
                            top:'15px',
                            left:'20px'
                        }
                    },
                    ...Array.from(Array(1),()=> {
                        return {
                        override:'true',
                        css:{
                            position:'absolute',
                            top:'72px',
                            left:'550px',
                            'fontSize':'16px'
                        }
                    }}),
                    {
                        override:'true',
                        css:{
                            position:'absolute',
                            top:'72px',
                            left:'586px',
                            'fontSize':'16px'
                        }
                    },
                    {
                        override:'true',
                        css:{
                            position:'absolute',
                            top:'72px',
                            left:'624px',
                            'fontSize':'16px'
                        }
                    },
                    {
                        override:'true',
                        css:{
                            position:'absolute',
                            top:'72px',
                            left:'659px',
                            fontSize:'16px'
                        }
                    },
                    {
                        override:'true',
                        css:{
                            position:'absolute',
                            top:'72px',
                            left:'697px',
                            fontSize:'16px'
                        }
                    },
                    {
                        override:'true',
                        css:{
                            position:'absolute',
                            top:'72px',
                            left:'732px',
                            'fontSize':'16px'
                        }
                    },
                    {
                        //HERE
                        override:'true',
                        css:{
                            position:'absolute',
                            top:'72px',
                            left:'795px',
                            fontSize:'16px',
                            width:'0px'
                        }
                    },
                    {
                        override:'true',
                        css:{
                            position:'absolute',
                            top:'60px',
                            left:'1142px'
                        }
                    },
                    {
                        override:'true',
                        css:{
                            position:'absolute',
                            top:'60px',
                            left:'1142px'
                        }
                    },
                    {
                        override:'true',
                        css:{
                            position:'absolute',
                            display:'none',
                            fontSize:'30px',
                            top:'60px'
                        }
                    },
                    {
                        override:'true',
                        css:{
                            position:'absolute',
                            // fontSize:'30px',
                            display:'none'
                        }
                    }                                                                                     
                    
                ], 
                parameters:[    
                ],
                location:{
                    parameters:[]
                },
                metadata:{
                    barDynamicWidth:null,
                    titleWidth:null,
                    resizeElementChange1:null,
                    defaultFontSizes:[]
                }
            }
        //

        //navigation link repositioning 

    /* */


    /*words*/ //
        wordsVal:Array<string> = ['w_o_r_d_s_Title','w_o_r_d_s_Line','w_o_r_d_s_paragraph','w_o_r_d_s_Dash','w_o_r_d_s_paragraphDash']
        wordsbool:Array<any> = ['true','true','true','true','true']
        wordsStyle: Array<any[]> = [[3],[3],[3],[3,3,3],[3,3,3]]

        wordsValIndex:Array<any> = [0,0,'false',0] // helps to filter out element that are not availble
        wordsStyleIndex:Array<any> = [0]
        wordsBoolIndex:Array<any>= [0]


        // WordsComponent events
        wordsLoadEvent$:Observable<Event>
        wordsLoadEventSubscription0:Subscription
        wordsLoadEventSubscription1:Subscription 
        wordsResizeEvent$:Observable<Event>
        wordsResizeEventSubscription0:Subscription
        wordsResizeEventSubscription1:Subscription  
        wordsClickEvent$:Observable<Event>        
        wordsClickEventSubscription0:Subscription
        //         


        //represnetaing each instance of the wordsComponent
        wordsMyElements :Subject<Array<any[]>> = new Subject<Array<any>>();
        wordsMyElementsArray: any[] = [];
        wordsComponentObject0:any = {
            styles:[
                {
                    override:'true',
                    css:{
                        position:'absolute',
                        left:'70px',
                        top:'700px'
                        // bottom:'40px',
                        // width:'0px',
                        // height:'0px'
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
                        // width:'0px',
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
                        // width:'0px',
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
                        // width:'0px',
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
                        position:'absolute',
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
                        position:'absolute',
                        left:'30px',
                        top:'1200px'
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

    /* extras(not a component) */
    customWordWrapWordElements: Array<any> = ['H1','H2','H3','H4','H5','H6','P','A']
    customWordWrapReceive(   devObj:any   ):any{
        return (event:any)=>{
            // console.log(event)
            // console.log(    devObj.totalElements    )
            // console.log('called')
            for(   let i of devObj.totalElements  ){
                for(   let j of this.customWordWrapWordElements   ){


                    if(    j === i.nativeElement.tagName   ){
    

                        // console.log(   i.nativeElement.clientHeight,i.nativeElement.tagName   )
                        this[devObj.HTMLWordElements.templateVar].parameters[devObj.HTMLWordElements.parameters].HTMLWordElements.push(   [i,window.getComputedStyle(i.nativeElement).getPropertyValue('font-size')]   )
                        // devObj.HTMLWordElements.push(   [j]   )
                        // console.log(    this[devObj.HTMLWordElements.templateVar].parameters[devObj.HTMLWordElements.parameters].HTMLWordElements   )
                        // console.log(   i.nativeElement.tagName,j   )                        
                        break
                        
                        
                    }
    
    
                }
            }
            // console.log(devObj.HTMLWordElements)
            this
            .customWordWrap({
                HTMLWordElements: devObj.HTMLWordElements
            })            
        }
    }    
    customWordWrap(   devObj:any   ):void{
        // console.log(   devObj   )
        // console.log(   this[devObj.HTMLWordElements.templateVar] )
        for(   let i of this[devObj.HTMLWordElements.templateVar].parameters[devObj.HTMLWordElements.parameters].HTMLWordElements  ){
            // console.log(   i[0],i[0].nativeElement.clientHeight,i[1], i[0].nativeElement.style.width    )
            

            if(   Math.round(   i[0].nativeElement.clientHeight/numberParse(i[1])   ) > 1   ){


                // console.log(   i[0].nativeElement.style.width   )
                while(   Math.floor(   i[0].nativeElement.clientHeight/numberParse(i[1])   ) > 1   ){
                    // TEST i[0].nativeElement.style.width  must start with 0px
                    // console.log(    i[0].nativeElement.clientHeight/numberParse(i[1])   )
                    // console.log(   i[0].nativeElement.style.width   )
                    i[0].nativeElement.style.width =  (   numberParse(   i[0].nativeElement.style.width   )  + 1   ).toString() + "px"
                    // console.log(    i[0].nativeElement.clientHeight/numberParse(i[1])   )
                    // console.log(   numberParse(   i[0].nativeElement.style.width   )   )
                }


            }


        }  
        // console.log(   this[devObj.HTMLWordElements.templateVar].parameters[devObj.HTMLWordElements.parameters].HTMLWordElements   )
        // console.log(this)
    }
    /* */
}

// customWordWrap is a fn that decides how many lines a string should be wrapped by adjusting the width of the element