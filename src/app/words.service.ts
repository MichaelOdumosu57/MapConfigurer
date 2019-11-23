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

    /*app*/
    appConsecutiveGenerator = (function(){
        return function *generator() {
            var index = 1;
            while (true)
            yield index++;
        }()
    })()
        
    /* */

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
        overlayResizeEventSubscription3:Subscription
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
                        'top':'540px',
                        'font-family':'Noto Sans',
                        'font-size':'13px',
                        'font-weight':'700'
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
                aboutBarPreTitleOffsetTopDiff:null,
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
                ...Array.from(Array(6),()=> {
                    return {
                    override:'false',
                    css:{
                        // position:'absolute',
                        // top:'72px',
                        // left:'550px',
                        // 'fontSize':'16px'
                    }
                }})                                                                                                                                                                                                                                 
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
                mainImg:'assets/media/IMG-1788-1.jpg',
                titleDefaultFontSize:null
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
                ...Array.from(Array(6),()=> {
                    return {
                    override:'false',
                    css:{
                        // position:'absolute',
                        // top:'72px',
                        // left:'550px',
                        // 'fontSize':'16px'
                    }
                }})                                                                 
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
                mainImg:'assets/media/project-background.jpg',
                titleDefaultFontSize:null,
                customWordWrapReceiveSubject:new  Subject<any>()
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
                        'font-weight':'700',
                        color:'white'

                    }
                },
                ...Array.from(Array(6),()=> {
                    return {
                    override:'false',
                    css:{
                        // position:'absolute',
                        // top:'72px',
                        // left:'550px',
                        // 'fontSize':'16px'
                    }
                }})                                                                                   
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
                ...Array.from(Array(3),()=> {
                    return {
                    override:'false',
                    css:{
                        // position:'absolute',
                        // top:'72px',
                        // left:'550px',
                        // 'fontSize':'16px'
                    }
                }})                                                                                                                
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
            navigationResizeEventSubscription2:Subscription
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
                    barDynamicWidthSet:'false',
                    titleWidth:null,
                    resizeElementChange1:null,
                    defaultFontSizes:[],
                    boardTitleDefaultWidth:null
                }
            }
        //

        //navigation link repositioning 

    /* */


    /*words*/ //
    
        // wordsComponent concept metadata
        wordsCustomWordWrapElements:Array<any>  = []
        wordsComponentObject0BoardHeight = '856.85px'
        wordsComponentObject0Image0Width = '475px'
        wordsComponentObject0Image0Height = '307px'
        wordsComponentObject0Image0Top = '240px'
        wordsComponentObject0Title0Top = '600px'
        wordsComponentObject0subTitle0Top = '680px'
        
        wordsComponentObject0Image1Width = '475px'
        wordsComponentObject0Image1Height = '350px'
        wordsComponentObject0Image1Top = '240px'
        wordsComponentObject0Title1Top = '650px'
        wordsComponentObject0subTitle1Top = '730px'


        wordsComponentObject1BoardHeight = '320px'

        wordsComponentObject2BoardHeight = '753px'
        wordsComponentObject2ImageDefaultHeight = [
            '232px',
            '232px',
            '232px',
            '232px'
        ]
        wordsComponentObject2ImageDefaultWidth = [
            '359px',
            '359px',
            '359px',
            '359px'
        ]        
        wordsComponentObject2ImageDefaultLeft = [
            '500px',
            '880px',
            '500px',
            '880px'
        ]                                        



        wordsAboutMailLineDefaultWidth = "400px"
        wordsAboutMailLineDefaultTop ='330px'
        //
            
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
                        top:'1000px',
                        width:'100%',
                        // bottom:'40px',
                        // width:'0px',
                        // height:'529.85px'
                    }
                },
                {
                    override:'true',
                    css:{
                        position:'absolute',
                        // top:'700px',
                        width:'100%',
                        // bottom:'40px',
                        // width:'0px',
                        height:this.wordsComponentObject0BoardHeight
                    }
                },                
                ...Array.from(Array(8),()=> {
                    return {
                    override:'true',
                    css:{
                        position:'absolute',
                        top:'72px',
                        left:'550px',
                        'fontSize':'16px',
                        // height:'856.85px'
                    }
                }}),
            ],
            ngStyle:Array.from(Array(20),(x,i)=>{return {}}),
            parameters:[    
            ],
            location:{
                parameters:[]
            },
            metadata:{
                cssAsync: new Subject<any>(),
                // TitleDefaultFontSize:'32px'
                boardDefaultHeight:this.wordsComponentObject0BoardHeight
            },
            val:[
                'w_o_r_d_s_Board',
                'space',
                'space',
                'space',
                'w_o_r_d_s_Paragragh',
                'w_o_r_d_s_Paragragh',
                'w_o_r_d_s_Image'
            ],
            bool:[
                'true',
                'space',
                'space',
                'space',
                'true',
                'true',
                'true',
                'true'
            ],          
            quantity:[
                [3],
                [
                    ...Array.from(Array(1),()=> {
                    return {
                        quantity:[[3],[],[],[3]],
                        bool:[['true'],['false'],[],['true']], 
                        val:[
                            ['w_o_r_d_s_Title'],
                            [],
                            [],
                            ['w_o_r_d_s_Line']
                        ], 
                        text:[
                            [
                                ['CATERING'],
                                ['stuff']
                            ]
                        ],
                        metadata:{
                            TitleDefaultWidth:null,
                            TitleDefaultFontSize:'32px' 
                            // an advatange is I'd have this in the non quantity to access easier
                        },
                        ngStyle:[
                            [
                                {
                                    position:'absolute',
                                    top:'80px'
                                }
                            ],
                            [],
                            [],
                            [
                                {
                                    position:'absolute',
                                    top:'160px',
                                    width:'8%'                                    
                                }
                            ]                            
                        ],
                        generator:this.appConsecutiveGenerator
                    }}),
                    ...Array.from(Array(1),()=> {
                        return {
                            quantity:[[3],[3],[3]],
                            bool:[['true'],['link','true'],['true']], 
                            val:[
                                ['w_o_r_d_s_Title'],
                                ['w_o_r_d_s_Paragragh'],
                                ['w_o_r_d_s_Image']
                            ], 
                            text:[
                                ['CATERING PRICES'],
                                ['LEARN MORE','do stuff']
                            ],                            
                            ngStyle:[
                                [
                                    {
                                        position:'absolute',
                                        top:this.wordsComponentObject0Title0Top,
                                        'font-size':'18px'
                                    }
                                ],
                                [
                                    {
                                        color:'rgb(251, 32, 86)',
                                        position:'absolute',
                                        top:this.wordsComponentObject0subTitle0Top,
                                        'font-size':'13px',
                                        'font-family':'Noto Sans',
                                        'font-weight':700
                                    },
                                    {
                                        color:'blue'
                                    }
                                ],
                                [
                                    {
                                        position:'absolute',
                                        top:this.wordsComponentObject0Image0Top ,
                                        width:this.wordsComponentObject0Image0Width,
                                        height:this.wordsComponentObject0Image0Height,
                                        'box-shadow':'10px 10px 0px 1px rgba(0,0,0,0.07)',
                                        'border-radius':'4px 4px 4px 4px'
                                    }
                                ]                                                                      
                            ],
                            metadata:{
                                image:['/assets/media/IMG-1788-1-1024x663.jpg'],
                                imageDefaultWidth:this.wordsComponentObject0Image0Width,
                                imageDefaultHeight:this.wordsComponentObject0Image0Height,
                                titleDefaultTop:this.wordsComponentObject0Title0Top,
                                subTitleDefaultTop:this.wordsComponentObject0subTitle0Top,
                                titleDefaultWidth:null
                            },
                            extras:[
                                {},
                                {
                                    ngStyle:{
                                        color:'rgb(251, 32, 86)',
                                        position:'absolute',
                                    },
                                    bool:'true',
                                    text:'\u27F6'
                                }
                            ],                            
                            generator:this.appConsecutiveGenerator
                    }}),
                    ...Array.from(Array(1),()=> {
                        return {
                            quantity:[[3],[3],[3]],
                            bool:[['true'],['link'],['true']], 
                            val:[
                                ['w_o_r_d_s_Title'],
                                ['w_o_r_d_s_Paragragh'],
                                ['w_o_r_d_s_Image']
                            ], 
                            text:[
                                ['CATERING EVENTS'],
                                ['LEARN MORE']
                            ],                            
                            ngStyle:[
                                [
                                    {
                                        position:'absolute',
                                        top:this.wordsComponentObject0Title1Top,
                                        'font-size':'18px'
                                    }
                                ],
                                [
                                    {
                                        color:'rgb(251, 32, 86)',
                                        position:'absolute',
                                        top:this.wordsComponentObject0subTitle1Top ,
                                        'font-size':'13px',
                                        'font-family':'Noto Sans',
                                        'font-weight':700
                                    }
                                ],
                                [
                                    {
                                        position:'absolute',
                                        width:this.wordsComponentObject0Image1Width,
                                        height:this.wordsComponentObject0Image1Height,
                                        'box-shadow':'10px 10px 0px 1px rgba(0,0,0,0.07)',
                                        'border-radius':'4px 4px 4px 4px',
                                        top:this.wordsComponentObject0Image1Top,
                                        left:'200px'                                        
                                    }
                                ]                                                                      
                            ],
                            metadata:{
                                image:['/assets/media/IMG-1786-1-1024x754.jpg'],
                                imageDefaultWidth: this.wordsComponentObject0Image1Width,  
                                imageDefaultHeight:this.wordsComponentObject0Image1Height,
                                titleDefaultTop:this.wordsComponentObject0Title1Top,
                                subTitleDefaultTop:this.wordsComponentObject0subTitle1Top,
                                titleDefaultWidth:null,
                                subTitleDefaultWidth:null           
                            },
                            extras:[
                                {},
                                {
                                    ngStyle:{
                                        color:'rgb(251, 32, 86)',
                                        position:'absolute',
                                        // top:'-30%'
                                        'font-weight':'bold'
                                    },
                                    bool:'true',
                                    text:'\u27F6'
                                }
                            ],
                            generator:this.appConsecutiveGenerator
                    }})                                          
                ],   
                [3,3],
                [3,3]
            ],
            generator:(function(){
                return function *generator() {
                    var index = 1;
                    while (true)
                    yield index;
                }()
            })()        
        }
        wordsComponentObject1:any = {
            styles:[
                {
                    override:'true',
                    css:{
                        position:'absolute',
                        top:'680px',
                        width:'100%',
                        // bottom:'40px',
                        // width:'0px',
                        // height:'529.85px'
                    }
                },
                {
                    override:'true',
                    css:{
                        position:'absolute',
                        'background-color': 'rgb(244,245,249)',
                        width:'100%',
                        height:this.wordsComponentObject1BoardHeight
                    }
                },                
                ...Array.from(Array(8),()=> {
                    return {
                    override:'true',
                    css:{
                        position:'absolute',
                        top:'72px',
                        left:'550px',
                        'fontSize':'16px',
                        // height:'856.85px'
                    }
                }}),
            ],
            ngStyle:Array.from(Array(20),(x,i)=>{return {}}),
            parameters:[    
            ],
            location:{
                parameters:[]
            },
            metadata:{
                cssAsync: new Subject<any>(),
                // TitleDefaultFontSize:'32px'
                boardDefaultHeight:this.wordsComponentObject0BoardHeight
            },
            val:[
                'w_o_r_d_s_Board',
                'space',
                'space',
                'space',
                'w_o_r_d_s_Paragragh',
                'w_o_r_d_s_Paragragh',
                'w_o_r_d_s_Image'
            ],
            bool:[
                'true',
                'space',
                'space',
                'space',
                'true',
                'true',
                'true',
                'true'
            ],          
            quantity:[
                [3],
                [
                    ...Array.from(Array(1),()=> {
                    return {
                        quantity:[[],[3],[3],[]],
                        bool:[[],['true'],['true'],[]], 
                        val:[
                            [],
                            ['w_o_r_d_s_Paragraph'],
                            ['w_o_r_d_s_Image'],
                            []
                        ], 
                        text:[
                                [],
                                ['“One cannot think well, love well, sleep well, if one has not dined well.” ']
                        ],
                        metadata:{
                            TitleDefaultWidth:null,
                            TitleDefaultFontSize:'32px', 
                            // an advatange is I'd have this in the non quantity to access easier
                            image:['assets/media/IMG-1478-1024x683.jpg']                            
                        },
                        ngStyle:[
                            [

                            ],
                            [
                                {
                                    position:'absolute',
                                    top:'60px',
                                    'z-index':2,
                                    'font-family':'EB Garamond',
                                    'font-size':'21px',
                                    'font-style':'italic',
                                    color:'rgb(76, 88, 99)'  
                                }                              
                            ],
                            [
                                {
                                    position:'absolute',
                                    top:'80px',
                                    'z-index':9,
                                    height:'100px',
                                    width:'150px',
                                    'border-style': 'groove',
                                    'border-color':'rgb(238,91,165)'
                                }                              
                            ],
                            [

                            ]                            
                        ],
                        extras:[
                            {},
                            {
                                bool:'false'
                            }
                        ],                        
                        generator:this.appConsecutiveGenerator
                    }}),    
                    ...Array.from(Array(1),()=> {
                        return {
                            quantity:[[],[3],[3],[]],
                            bool:[[],['true','true'],['true','true'],[]], 
                            val:[
                                [],
                                ['w_o_r_d_s_Paragraph'],
                                ['w_o_r_d_s_Image'],
                                []
                            ], 
                            text:[
                                    [],
                                    ['-Virginia\u00A0Woolf']
                            ],
                            metadata:{
                                TitleDefaultWidth:null,
                                TitleDefaultFontSize:'32px', 
                                // an advatange is I'd have this in the non quantity to access easier
                                image:['assets/media/quote-1.png']                            
                            },
                            ngStyle:[
                                [
    
                                ],
                                [
                                    {
                                        position:'absolute',
                                        top:'220px',
                                        width:'8%',
                                        color:'rgb(76, 88, 99)',  
                                        'z-index':2,
                                        'font-family':'Times New Roman',
                                        'font-size':'21px',
                                        'font-weight':900                                    
                                    }                                
                                ],
                                [
                                    {
                                        position:'absolute',
                                        top:'160px',
                                        width:'8%',
                                        color:'rgb(76, 88, 99)',  
                                        'z-index':2,                              
                                    }                                  
                                ],
                                [
    
                                ]                            
                            ],
                            extras:[
                                {},
                                {
                                    bool:'false'
                                }
                            ],                        
                            generator:this.appConsecutiveGenerator
                        }}),                                                           
                ],   
                [3,3],
                [3,3]
            ],
            generator:(function(){
                return function *generator() {
                    var index = 1;
                    while (true)
                    yield index;
                }()
            })()        
        }
        wordsComponentObject2:any = {
            styles:[
                {
                    override:'true',
                    css:{
                        position:'absolute',
                        top:'2680px',
                        width:'100%',
                        // bottom:'40px',
                        // width:'0px',
                        // height:'529.85px'
                    }
                },
                {
                    override:'true',
                    css:{
                        position:'absolute',
                        'background-color': 'white',
                        width:'100%',
                        height:this.wordsComponentObject2BoardHeight
                    }
                },                
                ...Array.from(Array(9),()=> {
                    return {
                    override:'true',
                    css:{
                        position:'absolute',
                        top:'72px',
                        left:'550px',
                        'fontSize':'16px',
                        // height:'856.85px'
                    }
                }}),
            ],
            ngStyle:Array.from(Array(20),(x,i)=>{return {}}),
            parameters:[    
            ],
            location:{
                parameters:[]
            },
            metadata:{
                cssAsync: new Subject<any>(),
                // TitleDefaultFontSize:'32px'
                boardDefaultHeight:this.wordsComponentObject2BoardHeight
            },
            val:[
                'w_o_r_d_s_Board',
                'space',
                'space',
                'space',
                'w_o_r_d_s_Paragragh',
                'w_o_r_d_s_Paragragh',
                'w_o_r_d_s_Image'
            ],
            bool:[
                'true',
                'space',
                'space',
                'space',
                'true',
                'true',
                'true',
                'true'
            ],          
            quantity:[
                [3],
                [
                    ...Array.from(Array(1),()=> {
                    return {
                        quantity:[[3],[3],[3,3,3,3],[3,3,3]],
                        bool:[['true'],['true'],['true','true','true','true'],['true','true','link']], 
                        val:[
                            ['w_o_r_d_s_Title'],
                            ['w_o_r_d_s_Paragraph'],
                            ['w_o_r_d_s_Image','w_o_r_d_s_Image','w_o_r_d_s_Image','w_o_r_d_s_Image'],
                            ['w_o_r_d_s_Line','w_o_r_d_s_Button','w_o_r_d_s_ButtonText']
                        ], 
                        text:[
                                ['Upcoming parties & events'],
                                [`
                                    Fuerat aestu carentem habentia 
                                    spectent tonitrua mutastis locavit liberioris. 
                                    Sinistra possedit litora ut nabataeaque. Setucant 
                                    coepyterunt perveniunt animal! Concordi aurea 
                                    nabataeaque seductaque constaque cepit sublime 
                                    flexi nullus.`
                                ],
                                [],
                                [null,null,'LEARN MORE']
                        ],
                        metadata:{
                            TitleDefaultWidth:null,
                            TitleDefaultFontSize:'32px',
                            // an advatange is I'd have this in the non quantity to access easier
                            image:[
                                'assets/media/IMG-1789-1024x661.jpg',
                                'assets/media/IMG-1792.jpg',
                                'assets/media/IMG-1793-1.jpg',                                
                                'assets/media/IMG-1788-1-1024x663.jpg'
                            ],
                            imageDefaultHeight:this.wordsComponentObject2ImageDefaultHeight,      
                            imageDefaultWidth:this.wordsComponentObject2ImageDefaultWidth,
                            imageDefaultLeft: this.wordsComponentObject2ImageDefaultLeft,                    
                        },
                        ngStyle:[
                            [
                                {
                                    position:'absolute',
                                    'font-family':'Montserrat',
                                    'top':'160px',
                                    'width':'320px',
                                    'background-color':'blue',
                                    'left':'63px',
                                    'text-align':'left'
                                }
                            ],
                            [
                                {
                                    position:'absolute',
                                    top:'300px',
                                    left:'63px',
                                    width:'300px',
                                    'z-index':2,
                                    'font-family':'Noto Sans',
                                    'font-size':'17px',
                                    color:'rgb(76, 88, 99)',  
                                    // 'background-color':'rgb(123, 253, 253)'
                                }                              
                            ],
                            [
                                {
                                    position:'absolute',
                                    top:'180px',
                                    left: this.wordsComponentObject2ImageDefaultLeft[0] ,
                                    'z-index':9,
                                    height:this.wordsComponentObject2ImageDefaultHeight[0],
                                    width:this.wordsComponentObject2ImageDefaultWidth[0],
                                    'border-radius':'4px 4px 4px 4px',
                                    'border-color':'rgb(238,91,165)'
                                },
                                {
                                    position:'absolute',
                                    top:'180px',
                                    left: this.wordsComponentObject2ImageDefaultLeft[1],
                                    'z-index':8,
                                    height:this.wordsComponentObject2ImageDefaultHeight[1],
                                    width:this.wordsComponentObject2ImageDefaultWidth[1],
                                    'border-radius':'4px 4px 4px 4px',
                                    'border-color':'rgb(238,91,165)'
                                },
                                {
                                    position:'absolute',
                                    top:'450px',
                                    left: this.wordsComponentObject2ImageDefaultLeft[2],
                                    'z-index':7,
                                    height:this.wordsComponentObject2ImageDefaultHeight[2],
                                    width:this.wordsComponentObject2ImageDefaultWidth[2],
                                    'border-radius':'4px 4px 4px 4px',
                                    'border-color':'rgb(238,91,165)'
                                },
                                {
                                    position:'absolute',
                                    top:'450px',
                                    left: this.wordsComponentObject2ImageDefaultLeft[3],
                                    'z-index':6,
                                    height:this.wordsComponentObject2ImageDefaultHeight[3],
                                    width:this.wordsComponentObject2ImageDefaultWidth[3],
                                    'border-radius':'4px 4px 4px 4px',
                                    'border-color':'rgb(238,91,165)'
                                }                                                                                                                                                
                            ],
                            [
                                {
                                    position:'absolute',
                                    top:'280px',
                                    width:'50px',
                                    left:'63px'
                                },
                                {
                                    position:'absolute',
                                    'border-radius':'50px',
                                    'height':'47px',
                                    'width':'182px',
                                    'background-color':'#f95b82',
                                    'top':'525px',
                                    left:'63px'                                    
                                },
                                {
                                    color:'rgb(255, 255, 255)',
                                    position:'absolute',
                                    'top':'538px',
                                    'font-size':'13px',
                                    'font-family':'Noto Sans',
                                    'font-weight':'bold',

                                },                                                                
                            ]                            
                        ],
                        extras:[
                            {},
                            {
                                bool:'false'
                            }                         
                        ],                        
                        generator:this.appConsecutiveGenerator
                    }}),                                                        
                ]
            ],
            generator:(function(){
                return function *generator() {
                    var index = 1;
                    while (true)
                    yield index;
                }()
            })()        
        }
        wordsComponentMonitor:any = {
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


        if(   devObj.subject !== undefined   ){


            devObj.subject.next(1)
            
            
        }

        
    }
    /* */
}

// customWordWrap is a fn that decides how many lines a string should be wrapped by adjusting the width of the element