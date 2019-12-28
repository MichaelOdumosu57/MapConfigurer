import { Injectable } from '@angular/core';
import { Observable, of, Subject, Subscription } from 'rxjs';
// import { Router,RouterEvent } from '@angular/router';
import { zChildren, componentObject } from './customExports';




function numberParse(dimension){
    dimension = parseFloat(dimension.split("p")[0])
    return dimension;
}

@Injectable({
  providedIn: 'root'
})

export class WordsService {
   

    constructor(
        // private router:Router
    ) { };

    /*app*/
    a  = {
        display:'none'
    }
    appConsecutiveGenerator = (function(){
        return function *generator() {
            var index = 1;
            while (true)
            yield index++;
        }()
    })()

    appCurrentNav:string = '/home'
    appReloaded:string = 'true'
    // appRouterEvent$:Observable<any> = this.router.events    
    appRouterEventSubscription0:Subscription
    appSubscriptionArray:Subscription[] = []
    appViewComplete:Subject<any> =  new  Subject<any>()
    appViewCompleteArray:Array<any> = []
    /* */

    /*overlay*/

        // OverlayComponent concept metadata
        overlayCustomWordWrapElements:Array<any>  = []
        overlayAboutPreTitleDefaultFontSize = '78px'
        overlayAboutMailLineDefaultWidth = "400px"
        overlayAboutMailLineDefaultTop ='330px'
        overlayComponentObject4Image1Width = '589px'
        
        overlayComponentObject0TitleFontSize = '60px'

        overlayComponentObject1TitleFontSize = '60px'
        overlayComponentObject1TitleWidth = '567.6 px'

        overlayComponentObject2TitleFontSize = '60px'
        overlayComponentObject2TitleWidth = '444.25px'
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
        overlayResizeEventSubscription4:Subscription
        overlayResizeEventSubscription5:Subscription
        overlayResizeEventSubscription6:Subscription
        overlayResizeEventSubscription7:Subscription
        overlayResizeEventSubscription8:Subscription
        overlayResizeEventSubscription9:Subscription        
        overlayClickEvent$:Observable<Event>        
        overlayClickEventSubscription0:Subscription
        //         

        // OverlayComponent Instances
        overlayMyElements :Subject<Array<any[]>> = new Subject<Array<any>>();
        overlayMyElementsArray: any[] = [];
        overlayComponentObject4:any ={
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
            },
            quantity:[
                [
                    {
                        quantity:[[3]],
                        bool:[['true']], 
                        val:[
                            ['o_v_e_r_l_a_y_App']
                        ], 
                        text:[
                                []
                        ],
                        metadata:{
                        },
                        ngStyle:[
                            [
                                {
                                    position:'absolute',
                                    top:'0px',
                                    height:'100%',
                                    width:'100%',
                                    'z-index':-1
                                }
                            ]                         
                        ],
                        extras:[
                            {},
                            {
                                bool:'false'
                            }                         
                        ],                        
                        generator:this.appConsecutiveGenerator
                    }                    
                ],
                [
                    ...Array.from(Array(1),()=> {
                    return {
                        quantity:[[3,3],[3,3],[],[],[3],[3,3]],
                        bool:[['true','true'],['true','true'],[],[],['true'],['button','true']], 
                        val:[
                            ['o_v_e_r_l_a_y_Board','o_v_e_r_l_a_y_Img0'],
                            ['o_v_e_r_l_a_y_AboutPreTitle','o_v_e_r_l_a_y_Title'],
                            [],
                            [],
                            ['o_v_e_r_l_a_y_AboutLearnText'],
                            ['o_v_e_r_l_a_y_AboutLearnButton','o_v_e_r_l_a_y_AboutMainLine']
                        ], 
                        text:[
                            [],
                            ['Cooking With','CHEF LIA'],
                            [],
                            [],
                            ['LEARN MORE'],
                            []
                        ],
                        metadata:{
                            TitleDefaultWidth:null,
                            TitleDefaultFontSize:'32px',
                            // an advatange is I'd have this in the non quantity to access easier
                            image:[
                                {
                                    src:'assets/media/IMG-1787.jpg',
                                    alt:'Main Overlay Image',
                                    defaultWidth:null
                                },
                                {
                                    src:'assets/media/IMG-1475-881x1024.jpg',
                                    alt:'Special Effects Overlay Image',
                                    defaultWidth:this.overlayComponentObject4Image1Width
                                }                                
                            ],
                            wordsCO0:new Subject<any>(),
                            wordsCO2:new Subject<any>(),  
                        },
                        ngStyle:[
                            [
                                {
                                    position:'fixed',
                                    // height:'1000px',
                                    height:'140%',
                                    width:'100%',
                                    'z-index':-1
                                    // opacity:0
                                },
                                {
                                    position:'absolute',
                                    width:this.overlayComponentObject4Image1Width,
                                    height:'451px',
                                    top:'2000px'
                                }
                            ],
                            [
                                {
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
                                },
                                {
                                        position:'absolute',
                                        top:"270px",
                                        left:'45%',
                                        'font-size':'141px', 
                                        'font-family':"'Aclonica',sans-serif",
                                        'font-weight':'500',
                                        'text-align':'center',
                                        color:'white'
                                },                                                                
                            ],
                            [],
                            [],
                            [
                                {
                                    // 'top':'540px',
                                    'font-family':'Noto Sans',
                                    'font-size':'13px',
                                    'font-weight':'700',
                                    'z-index':'1'
                                }                                
                            ],
                            [
                                {
                                    'border-radius':'50px',
                                    'height':'47px',
                                    'width':'182px',
                                    'top':'525px',
                                    'border':'0px'
                                },
                                {
                                    position:'absolute',
                                    'background-color':'rgb(249, 87, 128)',
                                    top:this.overlayAboutMailLineDefaultTop,
                                    // left:'45%',
                                    width:this.overlayAboutMailLineDefaultWidth,
                                    height:"2px"
                                }                                                                
                            ]                     
                        ],
                        extras:[
                            {},
                            {
                                bool:'false'
                            }                         
                        ],                        
                        generator:this.appConsecutiveGenerator
                    }})                                                                                        
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
        overlayComponentObject0:any ={ 
            metadata:{
                title:'SERVICES',
                cssAsync: new  Subject<any>(),
                mainImg:'assets/media/IMG-1788-1.jpg',
                titleDefaultFontSize:null
            },
            quantity:[
                [
                    {
                        quantity:[[3]],
                        bool:[['true']], 
                        val:[
                            ['o_v_e_r_l_a_y_App']
                        ], 
                        text:[
                                []
                        ],
                        metadata:{
                        },
                        ngStyle:[
                            [
                                {
                                    position:'absolute',
                                    top:'0px',
                                    width:'100%',
                                    'z-index':-1
                                }
                            ]                         
                        ],
                        extras:[
                            {},
                            {
                                bool:'false'
                            }                         
                        ],                        
                        generator:this.appConsecutiveGenerator
                    }                    
                ],
                [
                    ...Array.from(Array(1),()=> {
                    return {
                        quantity:[[3],[3]],
                        bool:[['true'],['true']], 
                        val:[
                            ['o_v_e_r_l_a_y_Board'],
                            ['o_v_e_r_l_a_y_Title']
                        ], 
                        text:[
                            [],
                            ['SERVICES']
                        ],
                        metadata:{
                            TitleDefaultWidth:null,
                            TitleDefaultFontSize:this.overlayComponentObject0TitleFontSize ,
                            // an advatange is I'd have this in the non quantity to access easier
                            image:[
                                {
                                    src:'assets/media/IMG-1788-1.jpg',
                                    alt:'Main Overlay Image',
                                    defaultWidth:null
                                }                            
                            ],
                            wordsCO0:new Subject<any>(),
                            wordsCO2:new Subject<any>(),  
                        },
                        ngStyle:[
                            [
                                {
                                    position:'absolute',
                                    height:'500px',
                                    width:'100%',
                                }                                
                            ],
                            [
                                {
                                    position:'absolute',
                                    top:"200px",
                                    // left:'45%',
                                    'font-size':this.overlayComponentObject0TitleFontSize,
                                    color:'white'
            
                                }                                
                            ]                  
                        ],
                        extras:[
                            {},
                            {
                                bool:'false'
                            }                         
                        ],                        
                        generator:this.appConsecutiveGenerator
                    }})                                                                                        
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
        overlayComponentObject1:any ={
            metadata:{
                title:'OUR PROJECTS',
                cssAsync: new  Subject<any>(),
                mainImg:'assets/media/project-background.jpg',
                titleDefaultFontSize:null,
                customWordWrapReceiveSubject:new  Subject<any>()
            },
            quantity:[
                [
                    {
                        quantity:[[3]],
                        bool:[['true']], 
                        val:[
                            ['o_v_e_r_l_a_y_App']
                        ], 
                        text:[
                                []
                        ],
                        metadata:{
                        },
                        ngStyle:[
                            [
                                {
                                    position:'absolute',
                                    top:'0px',
                                    width:'100%',
                                    'z-index':-1
                                }
                            ]                         
                        ],
                        extras:[
                            {},
                            {
                                bool:'false'
                            }                         
                        ],                        
                        generator:this.appConsecutiveGenerator
                    }                    
                ],
                [
                    ...Array.from(Array(1),()=> {
                    return {
                        quantity:[[3],[3]],
                        bool:[['true'],['true']], 
                        val:[
                            ['o_v_e_r_l_a_y_Board'],
                            ['o_v_e_r_l_a_y_Title']
                        ], 
                        text:[
                            [],
                            ['OUR PROJECTS']
                        ],
                        metadata:{
                            TitleDefaultWidth:null,
                            TitleDefaultFontSize:this.overlayComponentObject0TitleFontSize ,
                            // an advatange is I'd have this in the non quantity to access easier
                            image:[
                                {
                                    src:'assets/media/project-background.jpg',
                                    alt:'Main Overlay Image',
                                    defaultWidth:null
                                }                            
                            ],
                            wordsCO0:new Subject<any>(),
                            wordsCO2:new Subject<any>(),  
                        },
                        ngStyle:[
                            [
                                {
                                    position:'absolute',
                                    height:'500px',
                                    width:'100%',
                                }                                
                            ],
                            [
                                {
                                    position:'absolute',
                                    top:"200px",
                                    // left:'45%',
                                    'text-align':'center',
                                    'font-size':this.overlayComponentObject1TitleFontSize,
                                    color:'white'
            
                                }                                
                            ]                  
                        ],
                        extras:[
                            {},
                            {
                                bool:'false'
                            }                         
                        ],                        
                        generator:this.appConsecutiveGenerator
                    }})                                                                                        
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
        overlayComponentObject2:any ={
            metadata:{
                title:'CONTACT US',
                cssAsync: new  Subject<any>(),
                mainImg:'assets/media/IMG_1391.jpg'
            },
            quantity:[
                [
                    {
                        quantity:[[3]],
                        bool:[['true']], 
                        val:[
                            ['o_v_e_r_l_a_y_App']
                        ], 
                        text:[
                                []
                        ],
                        metadata:{
                        },
                        ngStyle:[
                            [
                                {
                                    position:'absolute',
                                    top:'0px',
                                    width:'100%',
                                    'z-index':-1
                                }
                            ]                         
                        ],
                        extras:[
                            {},
                            {
                                bool:'false'
                            }                         
                        ],                        
                        generator:this.appConsecutiveGenerator
                    }                    
                ],
                [
                    ...Array.from(Array(1),()=> {
                    return {
                        quantity:[[3],[3]],
                        bool:[['true'],['true']], 
                        val:[
                            ['o_v_e_r_l_a_y_Board'],
                            ['o_v_e_r_l_a_y_Title']
                        ], 
                        text:[
                            [],
                            ['CONTACT US']
                        ],
                        metadata:{
                            TitleDefaultWidth:null,
                            TitleDefaultFontSize:this.overlayComponentObject0TitleFontSize ,
                            // an advatange is I'd have this in the non quantity to access easier
                            image:[
                                {
                                    src:'assets/media/IMG_1391.jpg',
                                    alt:'Main Overlay Image',
                                    defaultWidth:null
                                }                            
                            ],
                            wordsCO0:new Subject<any>(),
                            wordsCO2:new Subject<any>(),  
                        },
                        ngStyle:[
                            [
                                {
                                    position:'absolute',
                                    height:'500px',
                                    width:'100%',
                                }                                
                            ],
                            [
                                {
                                    position:'absolute',
                                    top:"200px",
                                    'font-size':this.overlayComponentObject2TitleFontSize,
                                    'font-family':"'Charmonman',sans-serif",
                                    'font-weight':'700',
                                    color:'white'
                                }                               
                            ]                  
                        ],
                        extras:[
                            {},
                            {
                                bool:'false'
                            }                         
                        ],                        
                        generator:this.appConsecutiveGenerator
                    }})                                                                                        
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
        overlayComponentObject3:any ={
            metadata:{
                title:'',
                cssAsync: new  Subject<any>(),
                mainImg:'assets/media/aboutMain.png',
                blendTitle:'ABOUT ME'   
            },
            quantity:[
                [
                    {
                        quantity:[[3]],
                        bool:[['true']], 
                        val:[
                            ['o_v_e_r_l_a_y_App']
                        ], 
                        text:[
                                []
                        ],
                        metadata:{
                        },
                        ngStyle:[
                            [
                                {
                                    position:'absolute',
                                    top:'0px',
                                    width:'100%',
                                    'z-index':-1
                                }
                            ]                         
                        ],
                        extras:[
                            {},
                            {
                                bool:'false'
                            }                         
                        ],                        
                        generator:this.appConsecutiveGenerator
                    }                    
                ],
                [
                    ...Array.from(Array(1),()=> {
                    return {
                        quantity:[[3],[],[],[3,3]],
                        bool:[['true'],[],[],['true','true'],], 
                        val:[
                            ['o_v_e_r_l_a_y_Board'],
                            [],
                            [],
                            ['o_v_e_r_l_a_y_BlendWords','o_v_e_r_l_a_y_BlendWords']
                        ], 
                        text:[
                            [],
                            [],
                            [],
                            ['ABOUT ME','ABOUT ME']
                        ],
                        metadata:{
                            TitleDefaultWidth:null,
                            TitleDefaultFontSize:this.overlayComponentObject0TitleFontSize ,
                            // an advatange is I'd have this in the non quantity to access easier
                            image:[
                                {
                                    src:'assets/media/aboutMain.png',
                                    alt:'Main Overlay Image',
                                    defaultWidth:null
                                }                            
                            ],
                            wordsCO0:new Subject<any>(),
                            wordsCO2:new Subject<any>(),  
                        },
                        ngStyle:[
                            [
                                {
                                    position:'absolute',
                                    height:'600px',
                                    width:'100%',
                                    'z-index':-1,
                                    // opacity:0
                                }                               
                            ],
                            [],
                            [],
                            [
                                {
                                    position:'absolute',
                                    top:"275px",
                                    left:'10%',
                                    width:'0px',
                                    'font-size':'24px',
                                    'font-family':"'Abril Fatface',sans-serif",
                                    'font-weight':'500',
                                    'font-style' :'italic',
                                    color:'rgb(226,4,78)'
                                },
                                {
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
                            ]                  
                        ],
                        extras:[
                            {},
                            {
                                bool:'false'
                            }                         
                        ],                        
                        generator:this.appConsecutiveGenerator
                    }})                                                                                        
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
        overlayComponentMonitor:any = {
        }
        //
        
    /* */

    /*navigation*/

        // NavigationComponent concept metadata
        navigationElementHoldingBay :any[] = []
        navigationClickElements:zChildren[] = []
        //
            
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
            navigationLoadEvent$:Observable<Event>
            navigationLoadEventSubscription0:Subscription
            navigationLoadEventSubscription1:Subscription 
            navigationResizeEvent$:Observable<Event>
            navigationResizeEventSubscription0:Subscription
            navigationResizeEventSubscription1:Subscription  
            navigationResizeEventSubscription2:Subscription
            navigationClickEvent$:Observable<Event>  
            navigationLinkClickEvent$:Observable<Event>        
            navigationClickEventSubscription0:Subscription
            navigationClickEventSubscription1:Subscription
            navigationClickEventSubscription2:Subscription
            navigationClickEventSubscription3:Subscription
            navigationClickEventSubscription4:Subscription
            navigationClickEventSubscription5:Subscription
            navigationClickEventSubscription6:Subscription
            navigationClickEventSubscription7:Subscription                                    
        //    

        // NavigationComponent Instances
            navigationMyElements :Subject<Array<any[]>> = new Subject<Array<any>>();
            navigationMyElementsArray: any[] = [];
            navigationComponentObject0:any ={
                metadata:{
                    barDynamicWidth:null,
                    barDynamicWidthSet:'false',
                    titleWidth:null,
                    resizeElementChange1:null,
                    defaultFontSizes:[],
                    boardTitleDefaultWidth:null
                },
                quantity:[
                    [    
                        {
                            quantity:[[3]],
                            bool:[['true']], 
                            val:[
                                ['n_a_v_i_g_a_t_i_o_n_App']
                            ], 
                            text:[
                                    []
                            ],
                            metadata:{
                            },
                            ngStyle:[
                                [
                                    {
                                        postion:'absolute',
                                        top:'0px'
                                    }
                                ]                         
                            ],
                            extras:[
                                {},
                                {
                                    bool:'false'
                                }                         
                            ],                        
                            generator:this.appConsecutiveGenerator
                        }   
                    ],
                    [
                        ...Array.from(Array(1),()=> {
                        return {
                            quantity:[[3],[3],[3],[3],[3,3,3,3,3,3,3],[3,3,3],[] ],
                            bool:[['true'],['true'],['true'],['true'],Array.from(Array(7),()=>{return 'true'}),['true','true','icon'],['true']], 
                            val:[
                                ['n_a_v_i_g_a_t_i_o_n_Board'],
                                ['n_a_v_i_g_a_t_i_o_n_Title'],
                                ['n_a_v_i_g_a_t_i_o_n_SubTitle'],                                
                                ['n_a_v_i_g_a_t_i_o_n_logoImg'],
                                [
                                    'n_a_v_i_g_a_t_i_o_n_homeLink',
                                    'n_a_v_i_g_a_t_i_o_n_aboutLink',
                                    'n_a_v_i_g_a_t_i_o_n_servicesLink',
                                    'n_a_v_i_g_a_t_i_o_n_projectsLink',
                                    'n_a_v_i_g_a_t_i_o_n_blogLink',
                                    'n_a_v_i_g_a_t_i_o_n_contactLink',
                                    'n_a_v_i_g_a_t_i_o_n_takeActionLink',                                    
                                ],
                                [
                                    'n_a_v_i_g_a_t_i_o_n_takeActionCircle',
                                    'n_a_v_i_g_a_t_i_o_n_dropDownBox',
                                    'n_a_v_i_g_a_t_i_o_n_dropDownIcon'
                                ],
                                ['n_a_v_i_g_a_t_i_o_n_dropDown']
                            ], 
                            text:[
                                    [],
                                    ['windsorempire'],
                                    ['Caribbean & Japanese Cuisine'],
                                    [],
                                    [
                                        'Home',
                                        'About',
                                        'Services',
                                        'Projects',
                                        'Blog',
                                        'Contact',
                                        // 'Take&#160;Action' if problem arise
                                        'Take Action'
                                    ],
                                    [],
                                    []
                            ],
                            metadata:{
                                TitleDefaultWidth:null,
                                TitleDefaultFontSize:'32px', 
                                dropDownDisplay:'block',
                                // an advatange is I'd have this in the non quantity to access easier
                                image:[
                                    {
                                        src:'assets/media/cropped-IMG-1475-2-102x61.jpg',
                                        alt:'Main Brand Logo'
                                    }
                                ],
                                router:[
                                    [],
                                    [],
                                    [],
                                    [],
                                    [
                                        {
                                          link: "/home"
                                        },
                                        {
                                          link: "/about"
                                        },
                                        {
                                          link: "/services"
                                        },
                                        {
                                          link: "/projects"
                                        },
                                        {
                                          link: "/blog"
                                        },
                                        {
                                          link: "/contact"
                                        },
                                        {
                                          link: "/takeaction"
                                        }
                                    ],
                                    [],
                                    []
                                ]                            
                            },
                            ngStyle:[
                                [
                                    {
                                        position:'absolute',
                                        height: '165px',
                                        width:'100%',
                                        top:'0px'
                                    }
                                ],
                                [
                                    {
                                        'font-size':'36px',
                                        position:'absolute',
                                        left:'23px',
                                        top:'88px',
                                        margin:'0px',
                                        width:'0px'                                                
                                    }
                                ],
                                [
                                    {
                                        position:'absolute',
                                        top:'120px',
                                        left:'23px',
                                        fontSize:'16px',
                                        fontWeight:400,
                                        // width:'0px'
                                    }
                                ],
                                [
                                    {
                                        position:'absolute',
                                        top:'15px',
                                        left:'20px'
                                    }                                                                
                                ],
                                [
                                    {
                                        position:'absolute',
                                        top:'72px',
                                        left:'550px',
                                        'fontSize':'16px'
                                    },
                                    {
                                        position:'absolute',
                                        top:'72px',
                                        left:'586px',
                                        'fontSize':'16px'
                                    },
                                    {
                                        position:'absolute',
                                        top:'72px',
                                        left:'624px',
                                        'fontSize':'16px'
                                    },
                                    {
                                        position:'absolute',
                                        top:'72px',
                                        left:'659px',
                                        fontSize:'16px'
                                    },
                                    {
                                        position:'absolute',
                                        top:'72px',
                                        left:'697px',
                                        fontSize:'16px'
                                    },
                                    {
                                        position:'absolute',
                                        top:'72px',
                                        left:'732px',
                                        'fontSize':'16px'
                                    },
                                    {
                                        position:'absolute',
                                        top:'72px',
                                        left:'795px',
                                        fontSize:'16px',
                                        // width:'0px'
                                    }                                                                                                                                                
                                ],
                                [
                                    {
                                        position:'absolute',
                                        top:'60px',
                                        left:'1142px'
                                    },
                                    {
                                        position:'absolute',
                                        display:'none',
                                        top:'50px'
                                    },
                                    {
                                        position:'absolute',
                                        fontSize:'30px',
                                        display:'none',
                                        top:'60px'
                                    }                                                                        
                                ]                            
                            ],
                            extras:[
                                {},
                                {},
                                {
                                    bool:'false'
                                }
                            ],                        
                            generator:this.appConsecutiveGenerator
                        }})                                                         
                    ],   
                ],
                generator:(function(){
                    return function *generator() {
                        var index = 1;
                        while (true)
                        yield index;
                    }()
                })()                 
            }
        //

        //navigation link repositioning 

    /* */


        /*footer*/ //
    
        // footerComponent concept metadata
        footerCustomWordWrapElements:Array<any>  = []
        //
            
        footerVal:Array<string> = ['w_o_r_d_s_Title','w_o_r_d_s_Line','w_o_r_d_s_paragraph','w_o_r_d_s_Dash','w_o_r_d_s_paragraphDash']
        footerbool:Array<any> = ['true','true','true','true','true']
        footerStyle: Array<any[]> = [[3],[3],[3],[3,3,3],[3,3,3]]

        footerValIndex:Array<any> = [0,0,'false',0] // helps to filter out element that are not availble
        footerStyleIndex:Array<any> = [0]
        footerBoolIndex:Array<any>= [0]


        // footerComponent events
        footerLoadEvent$:Observable<Event>
        footerLoadEventSubscription0:Subscription
        footerLoadEventSubscription1:Subscription 
        footerResizeEvent$:Observable<Event>
        footerResizeEventSubscription0:Subscription
        footerResizeEventSubscription1:Subscription  
        footerResizeEventSubscription2:Subscription
        footerResizeEventSubscription3:Subscription  
        footerResizeEventSubscription4:Subscription  
        footerResizeEventSubscription5:Subscription
        footerResizeEventSubscription6:Subscription                  
        footerClickEvent$:Observable<Event>        
        footerClickEventSubscription0:Subscription
        //         



        //represnetaing each instance of the footerComponent
        footerMyElements :Subject<Array<any[]>> = new Subject<Array<any>>();
        footerMyElementsArray: any[] = [];
        footerComponentObject0:any = {          
            quantity:[
                [
                    {
                        quantity:[[3]],
                        bool:[['true']], 
                        val:[
                            ['f_o_o_t_e_r_App']
                        ], 
                        text:[
                                []
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
                            ]
                        },
                        ngStyle:[
                            [
                                {
                                    position:'absolute',
                                    top:'90%',
                                    width:'100%',
                                    // height:'1500px'
                                }
                            ]                         
                        ],
                        extras:[
                            {},
                            {
                                bool:'false'
                            }                         
                        ],                        
                        generator:this.appConsecutiveGenerator
                    }                    
                ],
                [
                    ...Array.from(Array(1),()=> {
                    return {
                        quantity:[[3]],
                        bool:[['true']], 
                        val:[
                            ['f_o_o_t_e_r_Board']
                        ], 
                        text:[
                            []
                        ],
                        metadata:{
                            TitleDefaultWidth:null,
                            TitleDefaultFontSize:'32px',
                            // an advatange is I'd have this in the non quantity to access easier
                            image:[
                            ]
                        },
                        ngStyle:[
                            [
                                {
                                    position:'absolute',
                                    width:'100%',
                                    height:'160px',
                                    'background-color':'black'
                                }
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
                            quantity:[[],[3,3]],
                            bool:[[],['true','true']], 
                            val:[
                                [],
                                ['f_o_o_t_e_r_paragraph','f_o_o_t_e_r_paragraph']
                            ], 
                            text:[
                                    [],
                                    [
                                        'Brooklyn, New York, 11233 USA | Phone: 347-940-**** | Email: WindsorEmpireLLC@gmail.com | Chef.Lia.W@gmail.com',
                                        'Copyright © WindsorEmpireLLC est. 2018'
                                    ]
                            ],
                            metadata:{
                                TitleDefaultWidth:null,
                                TitleDefaultFontSize:'32px',
                                // an advatange is I'd have this in the non quantity to access easier
                                image:[
                                ],
                                wordsCO2: new Subject<any>(),
                                wordsCO4: new Subject<any>(),
                                wordsCO5: new Subject<any>(),
                                wordsCO8: new Subject<any>(),
                                wordsCO9: new Subject<any>(),
                            },
                            ngStyle:[
                                [],
                                [
                                    {
                                        position:'absolute',
                                        color:'rgb(211, 211, 211)',
                                        'font-family':'Noto Sans',
                                        'text-align':'center',
                                        top:'0px'
                                    },
                                    {
                                        position:'absolute',
                                        color:'rgb(211, 211, 211)',
                                        'font-family':'Noto Sans',
                                        top:'55px',
                                        'text-align':'center'
                                    }                                       
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
        footerComponentMonitor:any = {
        }        
        //
    


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
        wordsComponentObject2TitleTop = '160px'
        wordsComponentObject2TitleLeft = '63px'
        wordsComponentObject2TitleWidth = '320px'
        wordsComponentObject2TitleTextAlign = 'left'
        wordsComponentObject2LineTop = [
            '280px'
        ]
        wordsComponentObject2LineLeft = [
            '63px'
        ]        
        wordsComponentObject2LineWidth = [
            '50px'
        ]      
        wordsComponentObject2PargraphTop = [
            '300px',
            '538px'
        ]
        wordsComponentObject2PargraphLeft = [
            '63px'
        ] 
        wordsComponentObject2PargraphWidth = [
            '300px'
        ]            
        wordsComponentObject2PargraphTextAlign = [
            'start'
        ]     
        wordsComponentObject2ButtonTop = [
            '525px'
        ]    
        wordsComponentObject2ButtonLeft = [
            '63px'
        ]          
        wordsComponentObject2ImageDefaultTop = [
            '180px',
            '180px',
            '450px',
            '450px'
        ]        
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
        
        wordsCO3BoardDefaultHeight = [
            '1500px'
        ]
        wordsCO3TitleDefaultTop  = [
            '660px',
            '620px',
            '1240px',
            '1260px',
        ]          

        wordsCO3Title = {
            defaultLeft:['225.367px','831.2px','258.533px','853.867px']
        }
        wordsCO3ParagraphDefaultWidth  = [
            '464px',
            '464px',
            '464px',
            '464px'
        ]

        wordsCO3Paragraph = {
            defaultLeft:['108.917px','677.117px','108.917px','677.117px']
        }
        wordsCO3ParagraphDefaultTop  = [
            '740px',
            '700px',
            '1320px',
            '1340px'
        ]        

        wordsCO3Image = {
            defaultLeft:['98.9167px','667.117px','98.9167px','667.117px']
        }
        wordsCO3ImageDefaultWidth  = [
            '484px',
            '484px',
            '484px',
            '484px'
        ]
        wordsCO3ImageDefaultTop = [
            '240px',
            '240px',
            '880px',
            '880px'
        ]
        wordsCO3ImageDefaultHeight  = [
            '356px',
            '320px',
            '313px',
            '340px'
        ]        

        wordsCO4BoardDefaultHeight = [
            '550px',
        ]

        wordsCO4ParagraphDefaultTop  = [
            '220px',
            '250px',
            '280px',
            '1340px',
            '180px',
            '290px',
            '340px',
            '370px'
        ]  

        wordsCO4ParagraphDefaultLeft  = [
            '90px',
            '90px',
            '90px',
            '1340px',
            '695px',
            '725px',
            '725px',
            '725px',
        ]  
        
        wordsCO4ParagraphDefaultWidth  = [
            '',
            '',
            '',
            '',
            '480px',
            '460px',
            '460px',
            '460px'
        ]         

        wordsCO4TitleDefaultTop = [
            '100px',
            '100px',
        ]

        wordsCO4TitleDefaultWidth = [
            '390px',
            '390px'
        ]  

        wordsCO4TitleDefaultLeft = [
            '60px',
            '695px'
        ]  

        wordsCO4LineDefaultLeft  = [
            '60px',
            '60px',
            '60px',
            '60px',
            '695px',
            '695px',
            '695px',
            '695px'
        ]        
        
        wordsCO4LineDefaultTop  = [
            '185px',
            '245px',
            '275px',
            '305px',
            '165px',
            '315px',
            '365px',
            '395px',
        ]  
        
        wordsCO4LineDefaultWidth  = [
            '62.4px',
            '11px',
            '11px',
            '11px',
            '62.4px',
            '11px',
            '11px',
            '11px',
        ]   

        wordsCO5BoardDefaultHeight =[
            '900px'
        ]
        
        wordsCO5Title ={
            defaultTop:['100px','540px','540px'],
            defaultWidth:['231px','336px','210px'],
            defaultLeft:['60px','60px','680px']
        }
        
        wordsCO5Paragraph = {
            defaultLeft:['60px','60px','90px','60px','60px','680px','710px','710px','710px'],
            defaultWidth:['500px','500px','','500px','500px','500px','','',''],
            defaultTop:['220px','340px','280px','645px','725px','645px','715px','745px','775px']
        }

        wordsCO5Image = {
            defaultHeight: ['347px'],
            defaultWidth:['520px'],
            defaultTop:['100px'],
            defaultLeft:['680px']
        }

        wordsCO5Line ={
            defaultTop:['185px','605px','605px','740px','770px','800px'],
            defaultWidth:['62.4px','62.4px','62.4px','11px','11px','11px'],
            defaultLeft:['60px','60px','680px','680px','680px','680px']
        }

        wordsCO6Board = {
            defaultHeight :  ['800px']
        }

        wordsCO6Title = {
            defaultTop:['140px','110px'],
            defaultLeft:['60px','60px']
        }

        wordsCO6Paragraph = {
            defaultLeft:['60px'],
            defaultWidth:['500px'],
            defaultTop:['220px']
        }    
        
        wordsCO6Line ={
            defaultTop:['130px'],
            defaultWidth:['62.4px'],
            defaultLeft:['180px']
        }

        wordsCO6RadioButton ={
            defaultTop:['740px','740px','740px','740px'],
            defaultWidth:['7px','7px','7px','7px'],
            defaultLeft:['620px','640px','660px','680px',],
            defaultHeight:['7px','7px','7px','7px']
        }

        wordsCO6Image = {
            defaultHeight: ['400px','400px','400px','400px'],
            defaultWidth:['370px','370px','370px','370px'],
            defaultTop:['300px','300px','300px','300px'],
            defaultLeft:['60px','460px','860px','860px']
        }  
              
        wordsCO7Board = {
            defaultHeight :  ['800px']
        }

        wordsCO7Title = {
            defaultTop:['140px','110px'],
            defaultLeft:['60px','60px']
        }

        wordsCO7Paragraph = {
            defaultLeft:['60px'],
            defaultWidth:['500px'],
            defaultTop:['220px']
        }    
        
        wordsCO7Line ={
            defaultTop:['130px'],
            defaultWidth:['62.4px'],
            defaultLeft:['240px']
        }

        wordsCO7Image = {
            defaultHeight: ['400px','400px','400px','400px'],
            defaultWidth:['370px','370px','370px','370px'],
            defaultTop:['300px','300px','300px','300px'],
            defaultLeft:['60px','460px','860px','860px']
        } 

        wordsCO7RadioButton ={
            defaultTop:['740px','740px','740px','740px'],
            defaultWidth:['7px','7px','7px','7px'],
            defaultLeft:['620px','640px','660px','680px',],
            defaultHeight:['7px','7px','7px','7px']
        }        

        wordsCO8Board = {
            defaultHeight :  ['800px']
        }

        wordsCO8Title = {
            defaultTop:['140px','110px'],
            defaultLeft:['60px','60px']
        }

        wordsCO8Paragraph = {
            defaultLeft:['60px'],
            defaultWidth:['500px'],
            defaultTop:['220px']
        }    
        
        wordsCO8Line ={
            defaultTop:['130px'],
            defaultWidth:['62.4px'],
            defaultLeft:['210px']
        }

        wordsCO8Image = {
            defaultHeight: ['400px','400px','400px','400px'],
            defaultWidth:['370px','370px','370px','370px'],
            defaultTop:['300px','300px','300px','300px'],
            defaultLeft:['60px','460px','860px','860px']
        }  

        wordsCO8RadioButton ={
            defaultTop:['740px','740px','740px','740px'],
            defaultWidth:['7px','7px','7px','7px'],
            defaultLeft:['620px','640px','660px','680px',],
            defaultHeight:['7px','7px','7px','7px']
        }        
        
        wordsCO9Board = {
            defaultHeight:['580px']
        }
        wordsCO9Title = {
            defaultTop:['110px','110px','250px','370px'],
            defaultLeft:['60px','695px','695px','695px'],
            defaultWidth:['550px']
        }        
        
        wordsCO9Button = {
            defaultWidth:['182px','','39.6px','39.6px','39.6px'],
            defaultLeft:['60px','','695px','750px','805px'],
            defaultHeight:['47px','','39.6px','39.6px','39.6px'],
            defaultTop:['250px','','460px','460px','460px'],
            defaultBorderRadius:[,,'39.6px','39.6px','39.6px']
        }

        wordsCO9Paragraph = {
            defaultLeft:['95px','695px','695px','695px'],
            defaultWidth:[''],
            defaultTop:['248px','280px','305px','395px']
        }          


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
        wordsMyElementsSubscription: Subscription;
        wordsLoadEvent$:Observable<Event>
        wordsLoadEventSubscription0:Subscription
        wordsLoadEventSubscription1:Subscription 
        wordsResizeEvent$:Observable<Event>
        wordsResizeEventSubscription0:Subscription
        wordsResizeEventSubscription1:Subscription 
        wordsResizeEventSubscription2:Subscription
        wordsResizeEventSubscription3:Subscription  
        wordsResizeEventSubscription4:Subscription  
        wordsResizeEventSubscription5:Subscription 
        wordsResizeEventSubscription6:Subscription
        wordsResizeEventSubscription7:Subscription  
        wordsResizeEventSubscription8:Subscription
        wordsResizeEventSubscription9:Subscription
        wordsResizeEventSubscription10:Subscription 
        wordsResizeEventSubscription11:Subscription 
        wordsResizeEventSubscription12:Subscription
        wordsResizeEventSubscription13:Subscription  
        wordsResizeEventSubscription14:Subscription  
        wordsResizeEventSubscription15:Subscription 
        wordsResizeEventSubscription16:Subscription
        wordsResizeEventSubscription17:Subscription  
        wordsResizeEventSubscription18:Subscription      
        wordsResizeEventSubscription19:Subscription    
        wordsResizeEventSubscription20:Subscription  
        wordsResizeEventSubscription21:Subscription             
        wordsClickEvent$:Observable<Event>        
        wordsClickEventSubscription0:Subscription
        //         



        //represnetaing each instance of the wordsComponent
        wordsMyElements :Subject<Array<any[]>> = new Subject<Array<any>>();
        wordsMyElementsArray: any[] = [];
        wordsComponentObject2:componentObject = {      
            quantity:[
                [       
                    {
                        quantity:[[3]],
                        bool:[['true']], 
                        val:[
                            ['w_o_r_d_s_App']
                        ], 
                        text:[
                                []
                        ],
                        metadata:{
                        },
                        ngStyle:[
                            [
                                {
                                    position:'absolute',
                                    top:'2680px',
                                    width:'100%'
                                }
                            ]                         
                        ],
                        extras:[
                            {},
                            {
                                bool:'false'
                            }                         
                        ],                        
                        generator:this.appConsecutiveGenerator
                    }                         
                ],
                [                    
                    ...Array.from(Array(1),()=> {
                    return {
                        quantity:[[3],[3],[3],[3,3,3,3],[3,3,3]],
                        bool:[['true'],['true'],['true'],['true','true','true','true'],['true','button','link']], 
                        val:[
                            ['w_o_r_d_s_Board'],
                            ['w_o_r_d_s_Title'],
                            ['w_o_r_d_s_Paragraph'],
                            ['w_o_r_d_s_Image','w_o_r_d_s_Image','w_o_r_d_s_Image','w_o_r_d_s_Image'],
                            ['w_o_r_d_s_Line','w_o_r_d_s_Button','w_o_r_d_s_ButtonText']
                        ], 
                        text:[
                                [],
                                ['UPCOMING PARTIES & EVENTS'],
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
                            imageDefaultTop:this.wordsComponentObject2ImageDefaultTop,
                            titleDefaultTop: this.wordsComponentObject2TitleTop,
                            titleDefaultLeft:this.wordsComponentObject2TitleLeft,   
                            titleDefaultWidth:this.wordsComponentObject2TitleWidth,
                            titleDefaultTextAlign:this.wordsComponentObject2TitleTextAlign, 
                            lineDefaultTop:this.wordsComponentObject2LineTop,
                            lineDefaultLeft:this.wordsComponentObject2LineLeft,
                            lineDefaultWidth:this.wordsComponentObject2LineWidth,
                            paragraphDefaultTop:this.wordsComponentObject2PargraphTop,
                            paragraphDefaultLeft:this.wordsComponentObject2PargraphLeft,
                            paragraphDefaultWidth:this.wordsComponentObject2PargraphWidth,
                            paragraphDefaultTextAlign:this.wordsComponentObject2PargraphTextAlign,
                            buttonDefaultTop:this.wordsComponentObject2ButtonTop,
                            buttonDefaultLeft:this.wordsComponentObject2ButtonLeft
                        },
                        ngStyle:[
                            [
                                {
                                    position:'absolute',
                                    'background-color': 'white',
                                    width:'100%',
                                    height:this.wordsComponentObject2BoardHeight
                                },                                
                            ],                            
                            [
                                {
                                    position:'absolute',
                                    'font-family':'Montserrat',
                                    'top':this.wordsComponentObject2TitleTop,
                                    'width':this.wordsComponentObject2TitleWidth,
                                    // 'background-color':'blue',
                                    'left':this.wordsComponentObject2TitleLeft,
                                    'text-align':this.wordsComponentObject2TitleTextAlign 
                                }
                            ],
                            [
                                {
                                    position:'absolute',
                                    top:this.wordsComponentObject2PargraphTop[0],
                                    left:this.wordsComponentObject2PargraphLeft[0],
                                    width:this.wordsComponentObject2PargraphWidth[0] ,
                                    'z-index':2,
                                    'font-family':'Noto Sans',
                                    'font-size':'17px',
                                    color:'rgb(76, 88, 99)',  
                                    // 'background-color':'limegreen',
                                    // 'background-color':'rgb(123, 253, 253)'
                                }                              
                            ],
                            [
                                {
                                    position:'absolute',
                                    top:this.wordsComponentObject2ImageDefaultTop[0],
                                    left: this.wordsComponentObject2ImageDefaultLeft[0] ,
                                    'z-index':9,
                                    height:this.wordsComponentObject2ImageDefaultHeight[0],
                                    width:this.wordsComponentObject2ImageDefaultWidth[0],
                                    'border-radius':'4px 4px 4px 4px',
                                    'border-color':'rgb(238,91,165)'
                                },
                                {
                                    position:'absolute',
                                    top:this.wordsComponentObject2ImageDefaultTop[1],
                                    left: this.wordsComponentObject2ImageDefaultLeft[1],
                                    'z-index':8,
                                    height:this.wordsComponentObject2ImageDefaultHeight[1],
                                    width:this.wordsComponentObject2ImageDefaultWidth[1],
                                    'border-radius':'4px 4px 4px 4px',
                                    'border-color':'rgb(238,91,165)'
                                },
                                {
                                    position:'absolute',
                                    top:this.wordsComponentObject2ImageDefaultTop[2],
                                    left: this.wordsComponentObject2ImageDefaultLeft[2],
                                    'z-index':7,
                                    height:this.wordsComponentObject2ImageDefaultHeight[2],
                                    width:this.wordsComponentObject2ImageDefaultWidth[2],
                                    'border-radius':'4px 4px 4px 4px',
                                    'border-color':'rgb(238,91,165)'
                                },
                                {
                                    position:'absolute',
                                    top:this.wordsComponentObject2ImageDefaultTop[3],
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
                                    top:this.wordsComponentObject2LineTop[0],
                                    width:this.wordsComponentObject2LineWidth[0],
                                    left:this.wordsComponentObject2LineLeft[0]
                                },
                                {
                                    position:'absolute',
                                    border:'0px',
                                    'border-radius':'50px',
                                    'height':'47px',
                                    'width':'182px',
                                    'background-color':'rgb(251, 32, 86)',
                                    'top':this.wordsComponentObject2ButtonTop[0],
                                    left:this.wordsComponentObject2ButtonLeft[0]                                    
                                },
                                {
                                    position:'absolute',
                                    'top':this.wordsComponentObject2PargraphTop[1],
                                    'font-size':'13px',
                                    'font-family':'Noto Sans',
                                    'font-weight':'bold',

                                },                                                                
                            ]                            
                        ],
                        extras:[
                            {},
                            {},
                            {
                                bool:'false'
                            }                         
                        ],                        
                        generator:this.appConsecutiveGenerator
                    }}),     
                    ...Array.from(Array(1),()=> {
                        return {
                            quantity:[[],[],[],[],[3]],
                            bool:[[],[],[],[],['true']], 
                            val:[
                                [],
                                [],
                                [],
                                [],
                                ['w_o_r_d_s_ContenRef']
                            ], 
                            text:[
                                    [],
                                    [],
                                    [],
                                    [],
                                    [null,null,'LEARN MORE']
                            ],
                            metadata:{
                            },
                            ngStyle:[
                                [],
                                [
                                ],
                                [                          
                                ],
                                [                                                                                                                                             
                                ],
                                [
                                    {
                                        position:'absolute',
                                        // width:'3000px',
                                        left:'63px',
                                        // height:'30px',
                                        width:'1183px',
                                        'background-color':'blue'
                                    }                                                             
                                ]                            
                            ],
                            extras:[
                                {},
                                {},
                                {
                                    bool:'false'
                                }                         
                            ],                        
                            generator:this.appConsecutiveGenerator
                        }})                                                                       
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
        wordsComponentObject0:componentObject = { 
            quantity:[
                [    
                    {
                        quantity:[[3]],
                        bool:[['true']], 
                        val:[
                            ['w_o_r_d_s_App']
                        ], 
                        text:[
                                []
                        ],
                        metadata:{
                        },
                        ngStyle:[
                            [
                                {
                                    position:'absolute',
                                    top:'1000px',
                                    width:'100%',
                                    // bottom:'40px',
                                    // width:'0px',
                                    // height:'529.85px'
                                }
                            ]                         
                        ],
                        extras:[
                            {},
                            {
                                bool:'false'
                            }                         
                        ],                        
                        generator:this.appConsecutiveGenerator
                    }   
                ],                
                [
                    ...Array.from(Array(1),()=> {
                        return {
                            quantity:[[3]],
                            bool:[['true']], 
                            val:[
                                ['w_o_r_d_s_Board']
                            ], 
                            text:[
                                []
                            ],
                            metadata:{
                                boardDefaultHeight:this.wordsComponentObject0BoardHeight
                            },
                            ngStyle:[
                                [
                                    {
                                        position:'absolute',
                                        // top:'700px',
                                        width:'100%',
                                        // bottom:'40px',
                                        // width:'0px',
                                        height:this.wordsComponentObject0BoardHeight
                                    }
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
                        quantity:[[],[3],[],[],[3]],
                        bool:[[],['true'],['false'],[],['true']], 
                        val:[
                            [],
                            ['w_o_r_d_s_Title'],
                            [],
                            [],
                            ['w_o_r_d_s_Line']
                        ], 
                        text:[
                            [],
                            [
                                ['CATERING'],
                                ['stuff']
                            ],
                            [],
                            [],
                            [],
                        ],
                        metadata:{
                            TitleDefaultWidth:null,
                            TitleDefaultFontSize:'32px' 
                            // an advatange is I'd have this in the non quantity to access easier
                        },
                        ngStyle:[
                            [],
                            [
                                {
                                    position:'absolute',
                                    top:'80px',
                                    'text-align':'center'
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
                            quantity:[[],[3],[3],[3]],
                            bool:[[],['true'],['link','true'],['true']], 
                            val:[
                                [],
                                ['w_o_r_d_s_Title'],
                                ['w_o_r_d_s_Paragragh'],
                                ['w_o_r_d_s_Image']
                            ], 
                            text:[
                                [],
                                ['CATERING PRICES'],
                                ['LEARN MORE','do stuff'],
                                [],
                                [],
                            ],                            
                            ngStyle:[
                                [],
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
                            quantity:[[],[3],[3],[3]],
                            bool:[[],['true'],['link'],['true']], 
                            val:[
                                [],
                                ['w_o_r_d_s_Title'],
                                ['w_o_r_d_s_Paragragh'],
                                ['w_o_r_d_s_Image']
                            ], 
                            text:[
                                [],
                                ['CATERING EVENTS'],
                                ['LEARN MORE'],
                                []
                            ],                            
                            ngStyle:[
                                [],
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
            ],
            generator:(function(){
                return function *generator() {
                    var index = 1;
                    while (true)
                    yield index;
                }()
            })()        
        }
        wordsComponentObject1:componentObject = {     
            quantity:[
                [    
                    {
                        quantity:[[3]],
                        bool:[['true']], 
                        val:[
                            ['w_o_r_d_s_App']
                        ], 
                        text:[
                                []
                        ],
                        metadata:{
                        },
                        ngStyle:[
                            [
                                {
                                    position:'absolute',
                                    top:'680px',
                                    width:'100%'
                                } 
                            ]                         
                        ],
                        extras:[
                            {},
                            {
                                bool:'false'
                            }                         
                        ],                        
                        generator:this.appConsecutiveGenerator
                    }   
                ],
                [
                    ...Array.from(Array(1),()=> {
                    return {
                        quantity:[[3],[],[3,3],[3,3],[]],
                        bool:[['true'],[],['true','true'],['true','true'],[]], 
                        val:[
                            ['w_o_r_d_s_Board'],
                            [],
                            ['w_o_r_d_s_Paragraph','w_o_r_d_s_Paragraph'],
                            ['w_o_r_d_s_Image','w_o_r_d_s_Image'],
                            []
                        ], 
                        text:[
                                [],
                                [],
                                ['“One cannot think well, love well, sleep well, if one has not dined well.” ','-Virginia\u00A0Woolf'],
                                []
                        ],
                        metadata:{
                            TitleDefaultWidth:null,
                            TitleDefaultFontSize:'32px', 
                            // an advatange is I'd have this in the non quantity to access easier
                            image:['assets/media/IMG-1478-1024x683.jpg','assets/media/quote-1.png']                            
                        },
                        ngStyle:[
                            [
                                {
                                    position:'absolute',
                                    'background-color': 'rgb(244,245,249)',
                                    width:'100%',
                                    height:this.wordsComponentObject1BoardHeight
                                }
                            ],
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
                                },
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
                                    top:'80px',
                                    'z-index':9,
                                    height:'100px',
                                    width:'150px',
                                    'border-style': 'groove',
                                    'border-color':'rgb(238,91,165)'
                                },
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
                            {},
                            {
                                bool:'false'
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
        wordsComponentObject3:componentObject = { 
            quantity:[
                [    
                    {
                        quantity:[[3]],
                        bool:[['true']], 
                        val:[
                            ['w_o_r_d_s_App']
                        ], 
                        text:[
                                []
                        ],
                        metadata:{
                        },
                        ngStyle:[
                            [
                                {
                                    position:'absolute',
                                    top:'500px',
                                    width:'100%',
                                    // bottom:'40px',
                                    // width:'0px',
                                    // height:'1500px'
                                }
                            ]                         
                        ],
                        ngCssDefault:[
                            [
                                {
                                    position:'absolute',
                                    top:'500px',
                                    width:'100%',
                                    // bottom:'40px',
                                    // width:'0px',
                                    // height:'1500px'
                                }
                            ]                         
                        ],                        
                        extras:[
                            {},
                            {
                                bool:'false'
                            }                         
                        ],                        
                        generator:this.appConsecutiveGenerator
                    }   
                ],                
                [
                    ...Array.from(Array(1),()=> {
                        return {
                            quantity:[[3]],
                            bool:[['true']], 
                            val:[
                                ['w_o_r_d_s_Board']
                            ], 
                            text:[
                                []
                            ],
                            metadata:{
                            },
                            ngStyle:[
                                [
                                    {
                                        position:'absolute',
                                        // top:'700px',
                                        width:'100%',
                                        // bottom:'40px',
                                        // width:'0px',
                                        height:this.wordsCO3BoardDefaultHeight[0],
                                        'background-color':'yellow'
                                    }
                                ]                     
                            ],
                            ngCssDefault:[
                                [
                                    {
                                        position:'absolute',
                                        // top:'700px',
                                        width:'100%',
                                        // bottom:'40px',
                                        // width:'0px',
                                        height:this.wordsCO3BoardDefaultHeight[0],
                                        'background-color':'yellow'
                                    }
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
                        quantity:[[],[3],[],[],[3]],
                        bool:[[],['true'],['false'],[],['true']], 
                        val:[
                            [],
                            ['w_o_r_d_s_Title'],
                            [],
                            [],
                            ['w_o_r_d_s_Line']
                        ], 
                        text:[
                            [],
                            [
                                ["IT'S TIME TO MEET THE CHEF"],
                                ['stuff']
                            ],
                            [],
                            [],
                            [],
                        ],
                        metadata:{
                            TitleDefaultWidth:null,
                            TitleDefaultFontSize:'32px' 
                            // an advatange is I'd have this in the non quantity to access easier
                        },
                        ngStyle:[
                            [],
                            [
                                {
                                    position:'absolute',
                                    top:'80px',
                                    'text-align':'center',
                                    left:'389.3px',
                                    'font-size':'32px'
                                }
                            ],
                            [],
                            [],
                            [
                                {
                                    position:'absolute',
                                    top:'160px',
                                    width:'6%',
                                    left:'593.467px'                                    
                                }
                            ]                            
                        ],
                        ngCssDefault:[
                            [],
                            [
                                {
                                    position:'absolute',
                                    top:'80px',
                                    'text-align':'center',
                                    left:'389.3px',
                                    'font-size':'32px'
                                }
                            ],
                            [],
                            [],
                            [
                                {
                                    position:'absolute',
                                    top:'160px',
                                    width:'6%',
                                    left:'593.467px'                                    
                                }
                            ]                            
                        ],                        
                        generator:this.appConsecutiveGenerator
                    }}),                    
                    ...Array.from(Array(1),()=> {
                        return {
                            quantity:[[],[3],[3],[3]],
                            bool:[[],['true'],['true'],['true']], 
                            val:[
                                [],
                                ['w_o_r_d_s_Title'],
                                ['w_o_r_d_s_Paragragh'],
                                ['w_o_r_d_s_Image']
                            ], 
                            text:[
                                [],
                                ['PRIVATE CHEF/LESSONS'],
                                ['PRIVATE DINNER LESSONS W/ CHEF LIA. AN IN-HOME RESTAURANT SET UP FOR TWO INCLUDE PREP, COOKING, APPETIZER, ENTREE & DESSERT OF CHOICE. '],
                                [],
                                [],
                            ],                            
                            ngStyle:[
                                [],
                                [
                                    {
                                        position:'absolute',
                                        top:this.wordsCO3TitleDefaultTop[0],
                                        'font-size':'18px',
                                        left:this.wordsCO3Title.defaultLeft[0]
                                    }
                                ],
                                [
                                    {
                                        color:'rgb(76, 88, 99)',
                                        position:'absolute',
                                        top:this.wordsCO3ParagraphDefaultTop[0],
                                        width:this.wordsCO3ParagraphDefaultWidth[0],                                         
                                        'font-size':'16px',
                                        'font-family':'Homenaje',
                                        'font-weight':400,
                                        'text-align':'center',
                                        left:this.wordsCO3Paragraph.defaultLeft[0]
                                    }
                                ],
                                [
                                    {
                                        position:'absolute',
                                        top:this.wordsCO3ImageDefaultTop[0] ,
                                        width:this.wordsCO3ImageDefaultWidth[0],
                                        height:this.wordsCO3ImageDefaultHeight[0],
                                        'box-shadow':'10px 10px 0px 1px rgba(0,0,0,0.07)',
                                        'border-radius':'4px 4px 4px 4px',
                                        left: this.wordsCO3Image.defaultLeft[0]
                                    }
                                ]                                                                      
                            ],
                            ngCssDefault:[
                                [],
                                [
                                    {
                                        position:'absolute',
                                        top:this.wordsCO3TitleDefaultTop[0],
                                        'font-size':'18px',
                                        left:this.wordsCO3Title.defaultLeft[0]
                                    }
                                ],
                                [
                                    {
                                        color:'rgb(76, 88, 99)',
                                        position:'absolute',
                                        top:this.wordsCO3ParagraphDefaultTop[0],
                                        width:this.wordsCO3ParagraphDefaultWidth[0],                                         
                                        'font-size':'16px',
                                        'font-family':'Homenaje',
                                        'font-weight':400,
                                        'text-align':'center',
                                        left:this.wordsCO3Paragraph.defaultLeft[0]
                                    }
                                ],
                                [
                                    {
                                        position:'absolute',
                                        top:this.wordsCO3ImageDefaultTop[0] ,
                                        width:this.wordsCO3ImageDefaultWidth[0],
                                        height:this.wordsCO3ImageDefaultHeight[0],
                                        'box-shadow':'10px 10px 0px 1px rgba(0,0,0,0.07)',
                                        'border-radius':'4px 4px 4px 4px',
                                        left: this.wordsCO3Image.defaultLeft[0]
                                    }
                                ]                                                                      
                            ],                            
                            metadata:{
                                image:['/assets/media/IMG-1786-1024x754.jpg']
                            },
                            extras:[
                                {},
                                {},
                                {
                                    ngStyle:{
                                        color:'rgb(251, 32, 86)',
                                        position:'absolute',
                                    },
                                    bool:'false',
                                    text:'\u27F6'
                                }
                            ],                            
                            generator:this.appConsecutiveGenerator
                    }}),                    
                    ...Array.from(Array(1),()=> {
                        return {
                            quantity:[[],[3],[3],[3]],
                            bool:[[],['true'],['true'],['true']], 
                            val:[
                                [],
                                ['w_o_r_d_s_Title'],
                                ['w_o_r_d_s_Paragragh'],
                                ['w_o_r_d_s_Image']
                            ], 
                            text:[
                                [],
                                ['FOOD DELIVERY'],
                                ['CONSISTS OF DIVINE HOME COOKED TRINIDADIAN CUISINES INFUSED WITH JAPENESE CULTURETO BE ENJOYED AT HOME OR OFFICE.'],
                                [],
                                [],
                            ],                            
                            ngStyle:[
                                [],
                                [
                                    {
                                        position:'absolute',
                                        top:this.wordsCO3TitleDefaultTop[1],
                                        'font-size':'18px',
                                        left:this.wordsCO3Title.defaultLeft[1]
                                    }
                                ],
                                [
                                    {
                                        color:'rgb(76, 88, 99)',
                                        position:'absolute',
                                        top:this.wordsCO3ParagraphDefaultTop[1],
                                        width:this.wordsCO3ParagraphDefaultWidth[1],
                                        'font-size':'16px',
                                        'font-family':'Homenaje',
                                        'font-weight':400,
                                        'text-align':'center',
                                        left:this.wordsCO3Paragraph.defaultLeft[1]
                                    }
                                ],
                                [
                                    {
                                        position:'absolute',
                                        top:this.wordsCO3ImageDefaultTop[1],
                                        width:this.wordsCO3ImageDefaultWidth[1],
                                        height:this.wordsCO3ImageDefaultHeight[1],
                                        'box-shadow':'10px 10px 0px 1px rgba(0,0,0,0.07)',
                                        'border-radius':'4px 4px 4px 4px',
                                        left:this.wordsCO3Image.defaultLeft[1]
                                    }
                                ]                                                                      
                            ],
                            ngCssDefault:[
                                [],
                                [
                                    {
                                        position:'absolute',
                                        top:this.wordsCO3TitleDefaultTop[1],
                                        'font-size':'18px',
                                        left:this.wordsCO3Title.defaultLeft[1]
                                    }
                                ],
                                [
                                    {
                                        color:'rgb(76, 88, 99)',
                                        position:'absolute',
                                        top:this.wordsCO3ParagraphDefaultTop[1],
                                        width:this.wordsCO3ParagraphDefaultWidth[1],
                                        'font-size':'16px',
                                        'font-family':'Homenaje',
                                        'font-weight':400,
                                        'text-align':'center',
                                        left:this.wordsCO3Paragraph.defaultLeft[1]
                                    }
                                ],
                                [
                                    {
                                        position:'absolute',
                                        top:this.wordsCO3ImageDefaultTop[1],
                                        width:this.wordsCO3ImageDefaultWidth[1],
                                        height:this.wordsCO3ImageDefaultHeight[1],
                                        'box-shadow':'10px 10px 0px 1px rgba(0,0,0,0.07)',
                                        'border-radius':'4px 4px 4px 4px',
                                        left:this.wordsCO3Image.defaultLeft[1]
                                    }
                                ]                                                                      
                            ],                            
                            metadata:{
                                image:['/assets/media/IMG-1790-1024x678.jpg'],
                            },
                            extras:[
                                {},
                                {},
                                {
                                    ngStyle:{
                                        color:'rgb(251, 32, 86)',
                                        position:'absolute',
                                    },
                                    bool:'false',
                                    text:'\u27F6'
                                }
                            ],                            
                            generator:this.appConsecutiveGenerator
                    }}),  
                    ...Array.from(Array(1),()=> {
                        return {
                            quantity:[[],[3],[3],[3]],
                            bool:[[],['true'],['true'],['true']], 
                            val:[
                                [],
                                ['w_o_r_d_s_Title'],
                                ['w_o_r_d_s_Paragragh'],
                                ['w_o_r_d_s_Image']
                            ], 
                            text:[
                                [],
                                ['EVENT CATERING'],
                                ['WINDSOR EMPIRE CATERING OFFERS DELIVERIES READY TO SERVE DIRECTLY TO YOUR HOME, PRIVATE VENUE, OFFICE, SCHOOL ETC. '],
                                [],
                                [],
                            ],                            
                            ngStyle:[
                                [],
                                [
                                    {
                                        position:'absolute',
                                        top:this.wordsCO3TitleDefaultTop[2],
                                        'font-size':'18px',
                                        left:this.wordsCO3Title.defaultLeft[2]
                                    }
                                ],
                                [
                                    {
                                        color:'rgb(76, 88, 99)',
                                        position:'absolute',
                                        top:this.wordsCO3ParagraphDefaultTop[2],
                                        width:this.wordsCO3ParagraphDefaultWidth[2],
                                        'text-align':'center',
                                        'font-size':'16px',
                                        'font-family':'Homenaje',
                                        'font-weight':400,
                                        left:this.wordsCO3Paragraph.defaultLeft[2] 
                                    },
                                    {
                                        color:'blue'
                                    }
                                ],
                                [
                                    {
                                        position:'absolute',
                                        top:this.wordsCO3ImageDefaultTop[2],
                                        width:this.wordsCO3ImageDefaultWidth[2],
                                        height:this.wordsCO3ImageDefaultHeight[2],
                                        'box-shadow':'10px 10px 0px 1px rgba(0,0,0,0.07)',
                                        'border-radius':'4px 4px 4px 4px',
                                        left:this.wordsCO3Image.defaultLeft[2]
                                    }
                                ]                                                                      
                            ],
                            ngCssDefault:[
                                [],
                                [
                                    {
                                        position:'absolute',
                                        top:this.wordsCO3TitleDefaultTop[2],
                                        'font-size':'18px',
                                        left:this.wordsCO3Title.defaultLeft[2]
                                    }
                                ],
                                [
                                    {
                                        color:'rgb(76, 88, 99)',
                                        position:'absolute',
                                        top:this.wordsCO3ParagraphDefaultTop[2],
                                        width:this.wordsCO3ParagraphDefaultWidth[2],
                                        'text-align':'center',
                                        'font-size':'16px',
                                        'font-family':'Homenaje',
                                        'font-weight':400,
                                        left:this.wordsCO3Paragraph.defaultLeft[2] 
                                    },
                                    {
                                        color:'blue'
                                    }
                                ],
                                [
                                    {
                                        position:'absolute',
                                        top:this.wordsCO3ImageDefaultTop[2],
                                        width:this.wordsCO3ImageDefaultWidth[2],
                                        height:this.wordsCO3ImageDefaultHeight[2],
                                        'box-shadow':'10px 10px 0px 1px rgba(0,0,0,0.07)',
                                        'border-radius':'4px 4px 4px 4px',
                                        left:this.wordsCO3Image.defaultLeft[2]
                                    }
                                ]                                                                      
                            ],                            
                            metadata:{
                                image:['/assets/media/IMG-1788-1-1024x663.jpg']
                            },
                            extras:[
                                {},
                                {},
                                {
                                    ngStyle:{
                                        color:'rgb(251, 32, 86)',
                                        position:'absolute',
                                    },
                                    bool:'false',
                                    text:'\u27F6'
                                }
                            ],                            
                            generator:this.appConsecutiveGenerator
                    }}),        
                    ...Array.from(Array(1),()=> {
                        return {
                            quantity:[[],[3],[3],[3]],
                            bool:[[],['true'],['true'],['true']], 
                            val:[
                                [],
                                ['w_o_r_d_s_Title'],
                                ['w_o_r_d_s_Paragragh'],
                                ['w_o_r_d_s_Image']
                            ], 
                            text:[
                                [],
                                ['MEAL PREP'],
                                ['WINDSOR EMPIRE HAS DONE EXTENSIVE RESEARCH TO DESIGN EACH MEAL PLAN AND OFFERS MEAL PREP PLANS THAT CAN HELP MAINTAIN A SPECIFIC DIET.'],
                                [],
                                [],
                            ],                            
                            ngStyle:[
                                [],
                                [
                                    {
                                        position:'absolute',
                                        top:this.wordsCO3TitleDefaultTop[3],
                                        'font-size':'18px',
                                        left:this.wordsCO3Title.defaultLeft[3]
                                    }
                                ],
                                [
                                    {
                                        color:'rgb(76, 88, 99)',
                                        position:'absolute',
                                        width:this.wordsCO3ParagraphDefaultWidth[3],
                                        top:this.wordsCO3ParagraphDefaultTop[3],
                                        'font-size':'16px',
                                        'font-family':'Homenaje',
                                        'font-weight':400,
                                        'text-align':'center',
                                        left:this.wordsCO3Paragraph.defaultLeft[3]
                                    }
                                ],
                                [
                                    {
                                        position:'absolute',
                                        top:this.wordsCO3ImageDefaultTop[3] ,
                                        width:this.wordsCO3ImageDefaultWidth[3],
                                        height:this.wordsCO3ImageDefaultHeight[3] ,
                                        'box-shadow':'10px 10px 0px 1px rgba(0,0,0,0.07)',
                                        'border-radius':'4px 4px 4px 4px',
                                        left:this.wordsCO3Image.defaultLeft[3]
                                    }
                                ]                                                                      
                            ],
                            ngCssDefault:[
                                [],
                                [
                                    {
                                        position:'absolute',
                                        top:this.wordsCO3TitleDefaultTop[3],
                                        'font-size':'18px',
                                        left:this.wordsCO3Title.defaultLeft[3]
                                    }
                                ],
                                [
                                    {
                                        color:'rgb(76, 88, 99)',
                                        position:'absolute',
                                        width:this.wordsCO3ParagraphDefaultWidth[3],
                                        top:this.wordsCO3ParagraphDefaultTop[3],
                                        'font-size':'16px',
                                        'font-family':'Homenaje',
                                        'font-weight':400,
                                        'text-align':'center',
                                        left:this.wordsCO3Paragraph.defaultLeft[3]
                                    }
                                ],
                                [
                                    {
                                        position:'absolute',
                                        top:this.wordsCO3ImageDefaultTop[3] ,
                                        width:this.wordsCO3ImageDefaultWidth[3],
                                        height:this.wordsCO3ImageDefaultHeight[3] ,
                                        'box-shadow':'10px 10px 0px 1px rgba(0,0,0,0.07)',
                                        'border-radius':'4px 4px 4px 4px',
                                        left:this.wordsCO3Image.defaultLeft[3]
                                    }
                                ]                                                                      
                            ],                            
                            metadata:{
                                image:['/assets/media/IMG-1787-1024x719.jpg']
                            },
                            extras:[
                                {},
                                {},
                                {
                                    ngStyle:{
                                        color:'rgb(251, 32, 86)',
                                        position:'absolute',
                                    },
                                    bool:'false',
                                    text:'\u27F6'
                                }
                            ],                            
                            generator:this.appConsecutiveGenerator
                    }}),   
                    ...Array.from(Array(1),()=> {
                        return {
                            quantity:[[],[],[],[],[3]],
                            bool:[[],[],[],[],['true']], 
                            val:[
                                [],
                                [],
                                [],
                                [],
                                ['w_o_r_d_s_ContenRef']
                            ], 
                            text:[
                                    [],
                                    [],
                                    [],
                                    [],
                                    [null,null,'LEARN MORE']
                            ],
                            metadata:{
                            },
                            ngStyle:[
                                [],
                                [
                                ],
                                [                          
                                ],
                                [                                                                                                                                             
                                ],
                                [
                                    {
                                        position:'absolute',
                                        // width:'3000px',
                                        left:(
                                            numberParse(   this.wordsCO3Image.defaultLeft[0]   )
                                        ).toString() + 'px', // determined evalution and use another is a good idea here
                                        height:'0px',
                                        width:(
                                            numberParse(   this.wordsCO3Image.defaultLeft[1]   ) +
                                            numberParse(   this.wordsCO3ImageDefaultWidth[1]   ) -
                                            numberParse(   this.wordsCO3Image.defaultLeft[0]   )
                                        ).toString() + 'px',
                                        // 'background-color':'blue'
                                    }                                                             
                                ]                            
                            ],
                            ngCssDefault:[
                                [],
                                [
                                ],
                                [                          
                                ],
                                [                                                                                                                                             
                                ],
                                [
                                    {
                                        position:'absolute',
                                        // width:'3000px',
                                        left:(
                                            numberParse(   this.wordsCO3Image.defaultLeft[0]   )
                                        ).toString() + 'px', // determined evalution and use another is a good idea here
                                        height:'0px',
                                        width:(
                                            numberParse(   this.wordsCO3Image.defaultLeft[1]   ) +
                                            numberParse(   this.wordsCO3ImageDefaultWidth[1]   ) -
                                            numberParse(   this.wordsCO3Image.defaultLeft[0]   )
                                        ).toString() + 'px',
                                        // 'background-color':'blue'
                                    }                                                             
                                ]                            
                            ],                            
                            extras:[
                                {},
                                {},
                                {
                                    bool:'false'
                                }                         
                            ],                        
                            generator:this.appConsecutiveGenerator
                        }})                                                                                             
                ],   
            ],
            generator:(function(){
                return function *generator() {
                    var index = 1;
                    while (true)
                    yield index;
                }()
            })(),
            metadata:{
                holdingBay2:[       
                    {
                        left:numberParse(   this.wordsCO3Title.defaultLeft[0]   )
                    },
                    {
                        left:numberParse(   this.wordsCO3Paragraph.defaultLeft[0]   )
                    },
                    {
                        left: numberParse(   this.wordsCO3Image.defaultLeft[0]   )
                    },
                    {
                        left:numberParse(   this.wordsCO3Title.defaultLeft[1]   )
                    },
                    {
                        left:numberParse(   this.wordsCO3Paragraph.defaultLeft[1]   )
                    },
                    {
                        left: numberParse(   this.wordsCO3Image.defaultLeft[1]   )
                    },
                    {
                        left:numberParse(   this.wordsCO3Title.defaultLeft[2]   )
                    },
                    {
                        left:numberParse(   this.wordsCO3Paragraph.defaultLeft[2]   )
                    },
                    {
                        left: numberParse(   this.wordsCO3Image.defaultLeft[2]   )
                    },
                    {
                        left:numberParse(   this.wordsCO3Title.defaultLeft[3]   )
                    },
                    {
                        left:numberParse(   this.wordsCO3Paragraph.defaultLeft[3]   )
                    },
                    {
                        left: numberParse(   this.wordsCO3Image.defaultLeft[3]   )
                    },                                                                                                                                                                                                                                                                               
                ]
            }        
        }   
        wordsComponentObject4:componentObject = { 
            quantity:[
                [    
                    {
                        quantity:[[3]],
                        bool:[['true']], 
                        val:[
                            ['w_o_r_d_s_App']
                        ], 
                        text:[
                                []
                        ],
                        metadata:{
                        },
                        ngStyle:[
                            [
                                {
                                    position:'absolute',
                                    top:'2000px',
                                    width:'100%',
                                    // bottom:'40px',
                                    // width:'0px',
                                    // height:'550px'
                                }
                            ]                         
                        ],
                        ngCssDefault:[
                            [
                                {
                                    position:'absolute',
                                    top:'2000px',
                                    width:'100%',
                                    // bottom:'40px',
                                    // width:'0px',
                                    // height:'550px'
                                }
                            ]                         
                        ],                        
                        extras:[
                            {},
                            {
                                bool:'false'
                            }                         
                        ],                        
                        generator:this.appConsecutiveGenerator
                    }   
                ],                
                [
                    ...Array.from(Array(1),()=> {
                        return {
                            quantity:[[3]],
                            bool:[['true']], 
                            val:[
                                ['w_o_r_d_s_Board']
                            ], 
                            text:[
                                []
                            ],
                            metadata:{
                                wordsCO3: new Subject<any>()
                            },
                            ngStyle:[
                                [
                                    {
                                        position:'absolute',
                                        // top:'700px',
                                        width:'100%',
                                        height:this.wordsCO4BoardDefaultHeight[0],
                                        'background-color':'rgb(247, 247, 247)'
                                        // 'background-color':'red'
                                    }
                                ]                     
                            ],
                            ngCssDefault:[
                                [
                                    {
                                        position:'absolute',
                                        // top:'700px',
                                        width:'100%',
                                        height:this.wordsCO4BoardDefaultHeight[0],
                                        'background-color':'rgb(247, 247, 247)',
                                        // 'background-color':'red'
                                    }
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
                            quantity:[[],[3],[3,3,3],[],[3,3,3,3]],
                            bool:[[],['true'],['true','true','true'],[],['true','true','true','true']], 
                            val:[
                                [],
                                ['w_o_r_d_s_Title'],
                                ['w_o_r_d_s_Paragragh','w_o_r_d_s_Paragragh','w_o_r_d_s_Paragragh'],
                                [],
                                ['w_o_r_d_s_Line','w_o_r_d_s_Line','w_o_r_d_s_Line','w_o_r_d_s_Line'],
                            ], 
                            text:[
                                [],
                                ['CHOOSE WINDSOR EMPIRE FOR ALL CATERING .'],
                                [
                                   'Trying to stay on a specific diet? We Can Help!',
                                   'Ready to serve Food Directly to Home, Office/ Any Event .',
                                   'Elegant Dishes that are tasteful to the soul . '
                                ],
                                [],
                                [],
                            ],                            
                            ngStyle:[
                                [],
                                [
                                    {
                                        position:'absolute',
                                        top:this.wordsCO4TitleDefaultTop[0],
                                        'font-size':'20px',
                                        'font-family':'Montserrat',
                                        'width':this.wordsCO4TitleDefaultWidth[0],
                                        // 'background-color':'green',
                                        left:this.wordsCO4TitleDefaultLeft[0],
                                        'text-align':'left'
                                    }
                                ],
                                [
                                    {
                                        color:'rgb(76, 88, 99)',
                                        position:'absolute',
                                        top:this.wordsCO4ParagraphDefaultTop[0], 
                                        left:this.wordsCO4ParagraphDefaultLeft[0],                                      
                                        'font-size':'16px',
                                        'font-family':'Noto Sans',
                                        'font-weight':700,
                                        'text-align':'left',
                                        width:'443.533px'
                                    },
                                    {
                                        color:'rgb(76, 88, 99)',
                                        position:'absolute',
                                        top:this.wordsCO4ParagraphDefaultTop[1],   
                                        left:this.wordsCO4ParagraphDefaultLeft[1],                                     
                                        'font-size':'16px',
                                        'font-family':'Noto Sans',
                                        'font-weight':700,
                                        'text-align':'left',
                                        width:'473.533px'
                                    },
                                    {
                                        color:'rgb(76, 88, 99)',
                                        position:'absolute',
                                        top:this.wordsCO4ParagraphDefaultTop[2],   
                                        left:this.wordsCO4ParagraphDefaultLeft[2],                                     
                                        'font-size':'16px',
                                        'font-family':'Noto Sans',
                                        'font-weight':700,
                                        'text-align':'left',
                                        width:'443.533px'
                                    }                                    
                                ],
                                [],
                                [
                                    {
                                        position:'absolute',
                                        top:this.wordsCO4LineDefaultTop[0],
                                        height:'2px',  
                                        width:this.wordsCO4LineDefaultWidth[0],
                                        left:this.wordsCO4LineDefaultLeft[0]
                                    },
                                    {
                                        position:'absolute',
                                        top:this.wordsCO4LineDefaultTop[1],
                                        height:'2px',  
                                        width:this.wordsCO4LineDefaultWidth[1],
                                        left:this.wordsCO4LineDefaultLeft[1]
                                    },
                                    {
                                        position:'absolute',
                                        top:this.wordsCO4LineDefaultTop[2],
                                        height:'2px',  
                                        width:this.wordsCO4LineDefaultWidth[2],
                                        left:this.wordsCO4LineDefaultLeft[2]
                                    },
                                    {
                                        position:'absolute',
                                        top:this.wordsCO4LineDefaultTop[3],
                                        height:'2px',  
                                        width:this.wordsCO4LineDefaultWidth[3],
                                        left:this.wordsCO4LineDefaultLeft[3]
                                    }                                                                                                            
                                ]                                                                 
                            ],
                            ngCssDefault:[
                                [],
                                [
                                    {
                                        position:'absolute',
                                        top:this.wordsCO4TitleDefaultTop[0],
                                        'font-size':'20px',
                                        'font-family':'Montserrat',
                                        'width':this.wordsCO4TitleDefaultWidth[0],
                                        // 'background-color':'green',
                                        left:this.wordsCO4TitleDefaultLeft[0],
                                        'text-align':'left'
                                    }
                                ],
                                [
                                    {
                                        color:'rgb(76, 88, 99)',
                                        position:'absolute',
                                        top:this.wordsCO4ParagraphDefaultTop[0], 
                                        left:this.wordsCO4ParagraphDefaultLeft[0],                                      
                                        'font-size':'16px',
                                        'font-family':'Noto Sans',
                                        'font-weight':700,
                                        'text-align':'left',
                                        width:'443.533px'
                                    },
                                    {
                                        color:'rgb(76, 88, 99)',
                                        position:'absolute',
                                        top:this.wordsCO4ParagraphDefaultTop[1],   
                                        left:this.wordsCO4ParagraphDefaultLeft[1],                                     
                                        'font-size':'16px',
                                        'font-family':'Noto Sans',
                                        'font-weight':700,
                                        'text-align':'left',
                                        width:'473.533px'
                                    },
                                    {
                                        color:'rgb(76, 88, 99)',
                                        position:'absolute',
                                        top:this.wordsCO4ParagraphDefaultTop[2],   
                                        left:this.wordsCO4ParagraphDefaultLeft[2],                                     
                                        'font-size':'16px',
                                        'font-family':'Noto Sans',
                                        'font-weight':700,
                                        'text-align':'left',
                                        width:'443.533px'
                                    }                                    
                                ],
                                [],
                                [
                                    {
                                        position:'absolute',
                                        top:this.wordsCO4LineDefaultTop[0],
                                        height:'2px',  
                                        width:this.wordsCO4LineDefaultWidth[0],
                                        left:this.wordsCO4LineDefaultLeft[0]
                                    },
                                    {
                                        position:'absolute',
                                        top:this.wordsCO4LineDefaultTop[1],
                                        height:'2px',  
                                        width:this.wordsCO4LineDefaultWidth[1],
                                        left:this.wordsCO4LineDefaultLeft[1]
                                    },
                                    {
                                        position:'absolute',
                                        top:this.wordsCO4LineDefaultTop[2],
                                        height:'2px',  
                                        width:this.wordsCO4LineDefaultWidth[2],
                                        left:this.wordsCO4LineDefaultLeft[2]
                                    },
                                    {
                                        position:'absolute',
                                        top:this.wordsCO4LineDefaultTop[3],
                                        height:'2px',  
                                        width:this.wordsCO4LineDefaultWidth[3],
                                        left:this.wordsCO4LineDefaultLeft[3]
                                    }                                                                                                            
                                ]                                                                 
                            ],                
                            metadata:{
                                titleDefaultWidth:null
                            },
                            extras:[
                                {},
                                {},
                                {
                                    ngStyle:{
                                        color:'rgb(251, 32, 86)',
                                        position:'absolute',
                                    },
                                    bool:'false',
                                    text:'\u27F6'
                                }
                            ],                            
                            generator:this.appConsecutiveGenerator
                    }}), 
                    ...Array.from(Array(1),()=> {
                        return {
                            quantity:[[],[3],[3,3,3,3],[],[3,3,3,3]],
                            bool:[[],['true'],['true','true','true','true'],[],['true','true','true','true']], 
                            val:[
                                [],
                                ['w_o_r_d_s_Title'],
                                ['w_o_r_d_s_Paragragh','w_o_r_d_s_Paragragh','w_o_r_d_s_Paragragh','w_o_r_d_s_Paragragh'],
                                [],
                                ['w_o_r_d_s_Line','w_o_r_d_s_Line','w_o_r_d_s_Line','w_o_r_d_s_Line'],
                            ], 
                            text:[
                                [],
                                ['WHAT YOU GET'],
                                [
                                   `Planning any event is stressful enough. Let us help you.
                                    Here at Windsor empire we offer quality service,
                                    flexible menus that consist of carribbean/Japanese 
                                    styled Meals all from a friendly and Caring staff.`,
                                   'From intimate dinners to extravagant events such as birthdays to office parties .',
                                   'Food Delivery food and easy',
                                   'Private Dinner Lessons'
                                ],
                                [],
                                [],
                            ],                            
                            ngStyle:[
                                [],
                                [
                                    {
                                        position:'absolute',
                                        top:this.wordsCO4TitleDefaultTop[1],
                                        'font-size':'20px',
                                        'font-family':'Montserrat',
                                        'width':this.wordsCO4TitleDefaultWidth[1],
                                        // 'background-color':'green',
                                        left:this.wordsCO4TitleDefaultLeft[1],
                                        'text-align':'left'
                                    }
                                ],
                                [
                                    {
                                        color:'rgb(76, 88, 99)',
                                        position:'absolute',
                                        top:this.wordsCO4ParagraphDefaultTop[4], 
                                        left:this.wordsCO4ParagraphDefaultLeft[4],
                                        width:this.wordsCO4ParagraphDefaultWidth[4],
                                        'font-size':'16px',
                                        'font-family':'Noto Sans',
                                        'font-weight':400,
                                        'font-style':'italic',
                                        'text-align':'left'
                                    },
                                    {
                                        color:'rgb(76, 88, 99)',
                                        position:'absolute',
                                        top:this.wordsCO4ParagraphDefaultTop[5],   
                                        left:this.wordsCO4ParagraphDefaultLeft[5],  
                                        width:this.wordsCO4ParagraphDefaultWidth[5],                                   
                                        'font-size':'16px',
                                        'font-family':'Noto Sans',
                                        'font-weight':700,
                                        // 'background-color':'green'
                                    },
                                    {
                                        color:'rgb(76, 88, 99)',
                                        position:'absolute',
                                        top:this.wordsCO4ParagraphDefaultTop[6],   
                                        left:this.wordsCO4ParagraphDefaultLeft[6],  
                                        width:this.wordsCO4ParagraphDefaultWidth[6],                                   
                                        'font-size':'16px',
                                        'font-family':'Noto Sans',
                                        'font-weight':700
                                    },
                                    {
                                        color:'rgb(76, 88, 99)',
                                        position:'absolute',
                                        top:this.wordsCO4ParagraphDefaultTop[7],   
                                        left:this.wordsCO4ParagraphDefaultLeft[7], 
                                        width:this.wordsCO4ParagraphDefaultWidth[7],                                   
                                        'font-size':'16px',
                                        'font-family':'Noto Sans',
                                        'font-weight':700
                                    }                                                                        
                                ],
                                [],
                                [
                                    {
                                        position:'absolute',
                                        top:this.wordsCO4LineDefaultTop[4],
                                        height:'2px',  
                                        width:this.wordsCO4LineDefaultWidth[4],
                                        left:this.wordsCO4LineDefaultLeft[4]
                                    },
                                    {
                                        position:'absolute',
                                        top:this.wordsCO4LineDefaultTop[5],
                                        height:'2px',  
                                        width:this.wordsCO4LineDefaultWidth[5],
                                        left:this.wordsCO4LineDefaultLeft[5]
                                    },
                                    {
                                        position:'absolute',
                                        top:this.wordsCO4LineDefaultTop[6],
                                        height:'2px',  
                                        width:this.wordsCO4LineDefaultWidth[6],
                                        left:this.wordsCO4LineDefaultLeft[6]
                                    },
                                    {
                                        position:'absolute',
                                        top:this.wordsCO4LineDefaultTop[7],
                                        height:'2px',  
                                        width:this.wordsCO4LineDefaultWidth[7],
                                        left:this.wordsCO4LineDefaultLeft[7]
                                    }                                                                                                            
                                ]                                                                 
                            ],
                            ngCssDefault:[
                                [],
                                [
                                    {
                                        position:'absolute',
                                        top:this.wordsCO4TitleDefaultTop[1],
                                        'font-size':'20px',
                                        'font-family':'Montserrat',
                                        'width':this.wordsCO4TitleDefaultWidth[1],
                                        // 'background-color':'green',
                                        left:this.wordsCO4TitleDefaultLeft[1],
                                        'text-align':'left'
                                    }
                                ],
                                [
                                    {
                                        color:'rgb(76, 88, 99)',
                                        position:'absolute',
                                        top:this.wordsCO4ParagraphDefaultTop[4], 
                                        left:this.wordsCO4ParagraphDefaultLeft[4],
                                        width:this.wordsCO4ParagraphDefaultWidth[4],
                                        'font-size':'16px',
                                        'font-family':'Noto Sans',
                                        'font-weight':400,
                                        'font-style':'italic',
                                        'text-align':'left'
                                    },
                                    {
                                        color:'rgb(76, 88, 99)',
                                        position:'absolute',
                                        top:this.wordsCO4ParagraphDefaultTop[5],   
                                        left:this.wordsCO4ParagraphDefaultLeft[5],  
                                        width:this.wordsCO4ParagraphDefaultWidth[5],                                   
                                        'font-size':'16px',
                                        'font-family':'Noto Sans',
                                        'font-weight':700,
                                        // 'background-color':'green'
                                    },
                                    {
                                        color:'rgb(76, 88, 99)',
                                        position:'absolute',
                                        top:this.wordsCO4ParagraphDefaultTop[6],   
                                        left:this.wordsCO4ParagraphDefaultLeft[6],  
                                        width:this.wordsCO4ParagraphDefaultWidth[6],                                   
                                        'font-size':'16px',
                                        'font-family':'Noto Sans',
                                        'font-weight':700
                                    },
                                    {
                                        color:'rgb(76, 88, 99)',
                                        position:'absolute',
                                        top:this.wordsCO4ParagraphDefaultTop[7],   
                                        left:this.wordsCO4ParagraphDefaultLeft[7], 
                                        width:this.wordsCO4ParagraphDefaultWidth[7],                                   
                                        'font-size':'16px',
                                        'font-family':'Noto Sans',
                                        'font-weight':700
                                    }                                                                        
                                ],
                                [],
                                [
                                    {
                                        position:'absolute',
                                        top:this.wordsCO4LineDefaultTop[4],
                                        height:'2px',  
                                        width:this.wordsCO4LineDefaultWidth[4],
                                        left:this.wordsCO4LineDefaultLeft[4]
                                    },
                                    {
                                        position:'absolute',
                                        top:this.wordsCO4LineDefaultTop[5],
                                        height:'2px',  
                                        width:this.wordsCO4LineDefaultWidth[5],
                                        left:this.wordsCO4LineDefaultLeft[5]
                                    },
                                    {
                                        position:'absolute',
                                        top:this.wordsCO4LineDefaultTop[6],
                                        height:'2px',  
                                        width:this.wordsCO4LineDefaultWidth[6],
                                        left:this.wordsCO4LineDefaultLeft[6]
                                    },
                                    {
                                        position:'absolute',
                                        top:this.wordsCO4LineDefaultTop[7],
                                        height:'2px',  
                                        width:this.wordsCO4LineDefaultWidth[7],
                                        left:this.wordsCO4LineDefaultLeft[7]
                                    }                                                                                                            
                                ]                                                                 
                            ],                   
                            metadata:{
                                titleDefaultWidth:null
                            },
                            extras:[
                                {},
                                {},
                                {
                                    ngStyle:{
                                        color:'rgb(251, 32, 86)',
                                        position:'absolute',
                                    },
                                    bool:'false',
                                    text:'\u27F6'
                                }
                            ],                            
                            generator:this.appConsecutiveGenerator
                    }}),        
                    ...Array.from(Array(1),()=> {
                        return {
                            quantity:[[],[],[],[],[3]],
                            bool:[[],[],[],[],['true']], 
                            val:[
                                [],
                                [],
                                [],
                                [],
                                ['w_o_r_d_s_ContenRef']
                            ], 
                            text:[
                                    [],
                                    [],
                                    [],
                                    [],
                                    [null,null,'LEARN MORE']
                            ],
                            metadata:{
                            },
                            ngStyle:[
                                [],
                                [
                                ],
                                [                          
                                ],
                                [                                                                                                                                             
                                ],
                                [
                                    {
                                        position:'absolute',
                                        // width:'3000px',
                                        left:(
                                            numberParse(   this.wordsCO4TitleDefaultLeft[0]   )
                                        ).toString() + 'px', // determined evalution and use another is a good idea here
                                        height:'0px',
                                        width:(
                                            numberParse(   this.wordsCO4TitleDefaultLeft[1]   ) +
                                            numberParse(   this.wordsCO4TitleDefaultWidth[1]   ) -
                                            numberParse(   this.wordsCO4TitleDefaultLeft[0]   )
                                        ).toString() + 'px',
                                        'background-color':'blue'
                                    }                                                             
                                ]                            
                            ],
                            ngCssDefault:[
                                [],
                                [
                                ],
                                [                          
                                ],
                                [                                                                                                                                             
                                ],
                                [
                                    {
                                        position:'absolute',
                                        // width:'3000px',
                                        left:(
                                            numberParse(   this.wordsCO4TitleDefaultLeft[0]   )
                                        ).toString() + 'px', // determined evalution and use another is a good idea here
                                        height:'0px',
                                        width:(
                                            numberParse(   this.wordsCO4TitleDefaultLeft[1]   ) +
                                            numberParse(   this.wordsCO4TitleDefaultWidth[1]   ) -
                                            numberParse(   this.wordsCO4TitleDefaultLeft[0]   )
                                        ).toString() + 'px',
                                        'background-color':'blue'
                                    }                                                             
                                ]                            
                            ],                            
                            extras:[
                                {},
                                {},
                                {
                                    bool:'false'
                                }                         
                            ],                        
                            generator:this.appConsecutiveGenerator
                    }})                                                                                                                              
                ],   
            ],
            generator:(function(){
                return function *generator() {
                    var index = 1;
                    while (true)
                    yield index;
                }()
            })()        
        }  
        wordsComponentObject5:componentObject = { 
            quantity:[
                [    
                    {
                        quantity:[[3]],
                        bool:[['true']], 
                        val:[
                            ['w_o_r_d_s_App']
                        ], 
                        text:[
                                []
                        ],
                        metadata:{
                        },
                        ngStyle:[
                            [
                                {
                                    position:'absolute',
                                    top:'600px',
                                    width:'100%',
                                    // bottom:'40px',
                                    // width:'0px',
                                    // height:'550px'
                                }
                            ]                         
                        ],
                        ngCssDefault:[
                            [
                                {
                                    position:'absolute',
                                    top:'600px',
                                    width:'100%',
                                    // bottom:'40px',
                                    // width:'0px',
                                    // height:'550px'
                                }
                            ]                         
                        ],                        
                        extras:[
                            {},
                            {
                                bool:'false'
                            }                         
                        ],                        
                        generator:this.appConsecutiveGenerator
                    }   
                ],                
                [
                    ...Array.from(Array(1),()=> {
                        return {
                            quantity:[[3]],
                            bool:[['true']], 
                            val:[
                                ['w_o_r_d_s_Board']
                            ], 
                            text:[
                                []
                            ],
                            metadata:{
                            },
                            ngStyle:[
                                [
                                    {
                                        position:'absolute',
                                        // top:'700px',
                                        width:'100%',
                                        height:this.wordsCO5BoardDefaultHeight[0],
                                        'background-color':'rgb(247, 247, 247)'
                                    }
                                ]                     
                            ],
                            ngCssDefault:[
                                [
                                    {
                                        position:'absolute',
                                        // top:'700px',
                                        width:'100%',
                                        height:this.wordsCO5BoardDefaultHeight[0],
                                        'background-color':'rgb(247, 247, 247)'
                                    }
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
                            quantity:[[],[3],[3,3],[],[3]],
                            bool:[[],['true'],['true','true'],[],['true','true','true','true']], 
                            val:[
                                [],
                                ['w_o_r_d_s_Title'],
                                ['w_o_r_d_s_Paragragh','w_o_r_d_s_Paragragh'],
                                [],
                                ['w_o_r_d_s_Line','w_o_r_d_s_Line','w_o_r_d_s_Line','w_o_r_d_s_Line'],
                            ], 
                            text:[
                                [],
                                ['OUR MISSION'],
                                [
                                   `Click edit button to change this text. 
                                   Lorem ipsum dolor sit amet, adipiscing elit`,
                                   `Click edit button to change this text. 
                                   Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                   Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.`,
                                   'Elegant Dishes that are tasteful to the soul . '
                                ],
                                [],
                                [],
                            ],                            
                            ngStyle:[
                                [],
                                [
                                    {
                                        position:'absolute',
                                        top:this.wordsCO5Title.defaultTop[0],
                                        'font-size':'32px',
                                        'font-family':'Montserrat',
                                        'background-color':'green',
                                        left:this.wordsCO5Title.defaultLeft[0],
                                        width:this.wordsCO5Title.defaultWidth[0],
                                    }
                                ],
                                [
                                    {
                                        color:'rgb(76, 88, 99)',
                                        position:'absolute',
                                        top:this.wordsCO5Paragraph.defaultTop[0], 
                                        left:this.wordsCO5Paragraph.defaultLeft[0],  
                                        width:this.wordsCO5Paragraph.defaultWidth[0],                                    
                                        'font-size':'20px',
                                        'font-family':'Noto Sans',
                                        'font-weight':700
                                    },
                                    {
                                        color:'rgb(76, 88, 99)',
                                        position:'absolute',
                                        top:this.wordsCO5Paragraph.defaultTop[1],   
                                        left:this.wordsCO5Paragraph.defaultLeft[1], 
                                        width:this.wordsCO5Paragraph.defaultWidth[1],                                      
                                        'font-size':'16px',
                                        'font-family':'Noto Sans',
                                        'font-weight':400
                                    },
                                    {
                                        color:'rgb(76, 88, 99)',
                                        position:'absolute',
                                        top:this.wordsCO5Paragraph.defaultTop[2],   
                                        left:this.wordsCO5Paragraph.defaultLeft[2],                                     
                                        'font-size':'16px',
                                        'font-family':'Noto Sans',
                                        'font-weight':700,
                                        'text-align':'center'
                                    }                                    
                                ],
                                [],
                                [
                                    {
                                        position:'absolute',
                                        top:this.wordsCO5Line.defaultTop[0],
                                        height:'2px',  
                                        width:this.wordsCO5Line.defaultWidth[0],
                                        left:this.wordsCO5Line.defaultLeft[0]
                                    }                                                                                                          
                                ]                                                                 
                            ],
                            ngCssDefault:[
                                [],
                                [
                                    {
                                        position:'absolute',
                                        top:this.wordsCO5Title.defaultTop[0],
                                        'font-size':'32px',
                                        'font-family':'Montserrat',
                                        'background-color':'green',
                                        left:this.wordsCO5Title.defaultLeft[0],
                                        width:this.wordsCO5Title.defaultWidth[0],
                                    }
                                ],
                                [
                                    {
                                        color:'rgb(76, 88, 99)',
                                        position:'absolute',
                                        top:this.wordsCO5Paragraph.defaultTop[0], 
                                        left:this.wordsCO5Paragraph.defaultLeft[0],  
                                        width:this.wordsCO5Paragraph.defaultWidth[0],                                    
                                        'font-size':'20px',
                                        'font-family':'Noto Sans',
                                        'font-weight':700
                                    },
                                    {
                                        color:'rgb(76, 88, 99)',
                                        position:'absolute',
                                        top:this.wordsCO5Paragraph.defaultTop[1],   
                                        left:this.wordsCO5Paragraph.defaultLeft[1], 
                                        width:this.wordsCO5Paragraph.defaultWidth[1],                                      
                                        'font-size':'16px',
                                        'font-family':'Noto Sans',
                                        'font-weight':400
                                    },
                                    {
                                        color:'rgb(76, 88, 99)',
                                        position:'absolute',
                                        top:this.wordsCO5Paragraph.defaultTop[2],   
                                        left:this.wordsCO5Paragraph.defaultLeft[2],                                     
                                        'font-size':'16px',
                                        'font-family':'Noto Sans',
                                        'font-weight':700,
                                        'text-align':'center'
                                    }                                    
                                ],
                                [],
                                [
                                    {
                                        position:'absolute',
                                        top:this.wordsCO5Line.defaultTop[0],
                                        height:'2px',  
                                        width:this.wordsCO5Line.defaultWidth[0],
                                        left:this.wordsCO5Line.defaultLeft[0]
                                    }                                                                                                          
                                ]                                                                 
                            ],
                            metadata:{
                                image:['/assets/media/IMG-1786-1024x754.jpg'],
                            },
                            extras:[
                                {},
                                {},
                                {
                                    ngStyle:{
                                        color:'rgb(251, 32, 86)',
                                        position:'absolute',
                                    },
                                    bool:'false',
                                    text:'\u27F6'
                                }
                            ],                            
                            generator:this.appConsecutiveGenerator
                    }}),            
                    ...Array.from(Array(1),()=> {
                        return {
                            quantity:[[],[],[],[3],[]],
                            bool:[[],[],[],['true'],[]], 
                            val:[
                                [],
                                [],
                                [],
                                ['w_o_r_d_s_Image'],
                                [],
                            ], 
                            text:[
                                [],
                                [],
                                [],
                                [],
                                [],
                            ],                            
                            ngStyle:[
                                [],
                                [],
                                [],
                                [
                                    {
                                        height:this.wordsCO5Image.defaultHeight[0],
                                        width:this.wordsCO5Image.defaultWidth[0],
                                        top:this.wordsCO5Image.defaultTop[0],
                                        left:this.wordsCO5Image.defaultLeft[0],
                                        position:'absolute',
                                        'border-radius':'4px',
                                        'box-shadow':'rgba(0, 0, 0, 0.07) 10px 10px 0px 1px'
                                    }
                                ],
                                []                                                                 
                            ],
                            ngCssDefault:[
                                [],
                                [],
                                [],
                                [
                                    {
                                        height:this.wordsCO5Image.defaultHeight[0],
                                        width:this.wordsCO5Image.defaultWidth[0],
                                        top:this.wordsCO5Image.defaultTop[0],
                                        left:this.wordsCO5Image.defaultLeft[0],
                                        position:'absolute',
                                        'border-radius':'4px',
                                        'box-shadow':'rgba(0, 0, 0, 0.07) 10px 10px 0px 1px'
                                    }
                                ],
                                []                                                                 
                            ],                            
                            metadata:{
                                image:['/assets/media/mission-2.jpg']
                            },
                            extras:[
                                {},
                                {},
                                {
                                    ngStyle:{
                                        color:'rgb(251, 32, 86)',
                                        position:'absolute',
                                    },
                                    bool:'false',
                                    text:'\u27F6'
                                }
                            ],                            
                            generator:this.appConsecutiveGenerator
                    }}),  
                    ...Array.from(Array(1),()=> {
                        return {
                            quantity:[[],[3],[3,3],[],[3]],
                            bool:[[],['h2'],['true','true'],[],['true']], 
                            val:[
                                [],
                                ['w_o_r_d_s_Title'],
                                ['w_o_r_d_s_Paragragh','w_o_r_d_s_Paragragh'],
                                [],
                                ['w_o_r_d_s_Line'],
                            ], 
                            text:[
                                [],
                                ['EXTRAORDINARY EXPERIENCES'],
                                [
                                   `zick edit button to change this text. 
                                   Lorem ipsum dolor sit amet, adipiscing elit`,
                                   `Click edit button to change this text. 
                                   Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                   Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.`,
                                   'Elegant Dishes that are tasteful to the soul . '
                                ],
                                [],
                                [],
                            ],                            
                            ngStyle:[
                                [],
                                [
                                    {
                                        position:'absolute',
                                        top:this.wordsCO5Title.defaultTop[1],
                                        'font-size':'20px',
                                        'font-family':'Montserrat',
                                        'background-color':'green',
                                        left:this.wordsCO5Title.defaultLeft[1]
                                    }
                                ],
                                [
                                    {
                                        color:'rgb(76, 88, 99)',
                                        position:'absolute',
                                        top:this.wordsCO5Paragraph.defaultTop[3], 
                                        left:this.wordsCO5Paragraph.defaultLeft[3],  
                                        width:this.wordsCO5Paragraph.defaultWidth[3],                                    
                                        'font-size':'20px',
                                        'font-family':'Noto Sans',
                                        'font-weight':700
                                    },
                                    {
                                        color:'rgb(76, 88, 99)',
                                        position:'absolute',
                                        top:this.wordsCO5Paragraph.defaultTop[4],   
                                        left:this.wordsCO5Paragraph.defaultLeft[4], 
                                        width:this.wordsCO5Paragraph.defaultWidth[4],                                      
                                        'font-size':'16px',
                                        'font-family':'Noto Sans',
                                        'font-weight':400
                                    }                                    
                                ],
                                [],
                                [
                                    {
                                        position:'absolute',
                                        top:this.wordsCO5Line.defaultTop[1],
                                        height:'2px',  
                                        width:this.wordsCO5Line.defaultWidth[1],
                                        left:this.wordsCO5Line.defaultLeft[1]
                                    },                                                                                                         
                                ]                                                                 
                            ],
                            ngCssDefault:[
                                [],
                                [
                                    {
                                        position:'absolute',
                                        top:this.wordsCO5Title.defaultTop[1],
                                        'font-size':'20px',
                                        'font-family':'Montserrat',
                                        'background-color':'green',
                                        left:this.wordsCO5Title.defaultLeft[1]
                                    }
                                ],
                                [
                                    {
                                        color:'rgb(76, 88, 99)',
                                        position:'absolute',
                                        top:this.wordsCO5Paragraph.defaultTop[3], 
                                        left:this.wordsCO5Paragraph.defaultLeft[3],  
                                        width:this.wordsCO5Paragraph.defaultWidth[3],                                    
                                        'font-size':'20px',
                                        'font-family':'Noto Sans',
                                        'font-weight':700
                                    },
                                    {
                                        color:'rgb(76, 88, 99)',
                                        position:'absolute',
                                        top:this.wordsCO5Paragraph.defaultTop[4],   
                                        left:this.wordsCO5Paragraph.defaultLeft[4], 
                                        width:this.wordsCO5Paragraph.defaultWidth[4],                                      
                                        'font-size':'16px',
                                        'font-family':'Noto Sans',
                                        'font-weight':400
                                    }                                    
                                ],
                                [],
                                [
                                    {
                                        position:'absolute',
                                        top:this.wordsCO5Line.defaultTop[1],
                                        height:'2px',  
                                        width:this.wordsCO5Line.defaultWidth[1],
                                        left:this.wordsCO5Line.defaultLeft[1]
                                    },                                                                                                         
                                ]                                                                 
                            ],                            
                            metadata:{
                                image:['/assets/media/IMG-1786-1024x754.jpg']
                            },
                            extras:[
                                {},
                                {},
                                {
                                    ngStyle:{
                                        color:'rgb(251, 32, 86)',
                                        position:'absolute',
                                    },
                                    bool:'false',
                                    text:'\u27F6'
                                }
                            ],                            
                            generator:this.appConsecutiveGenerator
                    }}), 
                    ...Array.from(Array(1),()=> {
                        return {
                            quantity:[[],[3],[3,3,3,3],[],[3,3,3,3]],
                            bool:[[],['h2'],['true','true','true','true'],[],['true','true','true','true']], 
                            val:[
                                [],
                                ['w_o_r_d_s_Title'],
                                ['w_o_r_d_s_Paragragh','w_o_r_d_s_Paragragh','w_o_r_d_s_Paragragh','w_o_r_d_s_Paragragh'],
                                [],
                                ['w_o_r_d_s_Line','w_o_r_d_s_Line','w_o_r_d_s_Line','w_o_r_d_s_Line'],
                            ], 
                            text:[
                                [],
                                ['OUR CORE VALUES'],
                                [
                                   `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                   Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.`,
                                   `Locavit liberioris possedit`,
                                   'Diremit mundi mare undae',
                                   `Spectent tonitrua mutastis`
                                ],
                                [],
                                [],
                            ],                            
                            ngStyle:[
                                [],
                                [
                                    {
                                        position:'absolute',
                                        top:this.wordsCO5Title.defaultTop[2],
                                        'font-size':'20px',
                                        'font-family':'Montserrat',
                                        'background-color':'green',
                                        left:this.wordsCO5Title.defaultLeft[2]
                                    }
                                ],
                                [
                                    {
                                        color:'rgb(76, 88, 99)',
                                        position:'absolute',
                                        top:this.wordsCO5Paragraph.defaultTop[5], 
                                        left:this.wordsCO5Paragraph.defaultLeft[5],  
                                        width:this.wordsCO5Paragraph.defaultWidth[5],                                    
                                        'font-size':'16px',
                                        'font-family':'Noto Sans',
                                        'font-weight':400
                                    },
                                    {
                                        color:'rgb(76, 88, 99)',
                                        position:'absolute',
                                        top:this.wordsCO5Paragraph.defaultTop[6],   
                                        left:this.wordsCO5Paragraph.defaultLeft[6], 
                                        width:this.wordsCO5Paragraph.defaultWidth[6],                                      
                                        'font-size':'16px',
                                        'font-family':'Noto Sans',
                                        'font-weight':900
                                    },
                                    {
                                        color:'rgb(76, 88, 99)',
                                        position:'absolute',
                                        top:this.wordsCO5Paragraph.defaultTop[7],   
                                        left:this.wordsCO5Paragraph.defaultLeft[7], 
                                        width:this.wordsCO5Paragraph.defaultWidth[7],                                      
                                        'font-size':'16px',
                                        'font-family':'Noto Sans',
                                        'font-weight':900
                                    },
                                    {
                                        color:'rgb(76, 88, 99)',
                                        position:'absolute',
                                        top:this.wordsCO5Paragraph.defaultTop[8],   
                                        left:this.wordsCO5Paragraph.defaultLeft[8], 
                                        width:this.wordsCO5Paragraph.defaultWidth[8],                                      
                                        'font-size':'16px',
                                        'font-family':'Noto Sans',
                                        'font-weight':900
                                    }                                                                                                                
                                ],
                                [],
                                [
                                    {
                                        position:'absolute',
                                        top:this.wordsCO5Line.defaultTop[2],
                                        height:'2px',  
                                        width:this.wordsCO5Line.defaultWidth[2],
                                        left:this.wordsCO5Line.defaultLeft[2]
                                    },    
                                    {
                                        position:'absolute',
                                        top:this.wordsCO5Line.defaultTop[3],
                                        height:'2px',  
                                        width:this.wordsCO5Line.defaultWidth[3],
                                        left:this.wordsCO5Line.defaultLeft[3]
                                    },
                                    {
                                        position:'absolute',
                                        top:this.wordsCO5Line.defaultTop[4],
                                        height:'2px',  
                                        width:this.wordsCO5Line.defaultWidth[4],
                                        left:this.wordsCO5Line.defaultLeft[4]
                                    },
                                    {
                                        position:'absolute',
                                        top:this.wordsCO5Line.defaultTop[5],
                                        height:'2px',  
                                        width:this.wordsCO5Line.defaultWidth[5],
                                        left:this.wordsCO5Line.defaultLeft[5]
                                    }                                                                                                                                                                                                                      
                                ]                                                                 
                            ],
                            ngCssDefault:[
                                [],
                                [
                                    {
                                        position:'absolute',
                                        top:this.wordsCO5Title.defaultTop[2],
                                        'font-size':'20px',
                                        'font-family':'Montserrat',
                                        'background-color':'green',
                                        left:this.wordsCO5Title.defaultLeft[2]
                                    }
                                ],
                                [
                                    {
                                        color:'rgb(76, 88, 99)',
                                        position:'absolute',
                                        top:this.wordsCO5Paragraph.defaultTop[5], 
                                        left:this.wordsCO5Paragraph.defaultLeft[5],  
                                        width:this.wordsCO5Paragraph.defaultWidth[5],                                    
                                        'font-size':'16px',
                                        'font-family':'Noto Sans',
                                        'font-weight':400
                                    },
                                    {
                                        color:'rgb(76, 88, 99)',
                                        position:'absolute',
                                        top:this.wordsCO5Paragraph.defaultTop[6],   
                                        left:this.wordsCO5Paragraph.defaultLeft[6], 
                                        width:this.wordsCO5Paragraph.defaultWidth[6],                                      
                                        'font-size':'16px',
                                        'font-family':'Noto Sans',
                                        'font-weight':900
                                    },
                                    {
                                        color:'rgb(76, 88, 99)',
                                        position:'absolute',
                                        top:this.wordsCO5Paragraph.defaultTop[7],   
                                        left:this.wordsCO5Paragraph.defaultLeft[7], 
                                        width:this.wordsCO5Paragraph.defaultWidth[7],                                      
                                        'font-size':'16px',
                                        'font-family':'Noto Sans',
                                        'font-weight':900
                                    },
                                    {
                                        color:'rgb(76, 88, 99)',
                                        position:'absolute',
                                        top:this.wordsCO5Paragraph.defaultTop[8],   
                                        left:this.wordsCO5Paragraph.defaultLeft[8], 
                                        width:this.wordsCO5Paragraph.defaultWidth[8],                                      
                                        'font-size':'16px',
                                        'font-family':'Noto Sans',
                                        'font-weight':900
                                    }                                                                                                                
                                ],
                                [],
                                [
                                    {
                                        position:'absolute',
                                        top:this.wordsCO5Line.defaultTop[2],
                                        height:'2px',  
                                        width:this.wordsCO5Line.defaultWidth[2],
                                        left:this.wordsCO5Line.defaultLeft[2]
                                    },    
                                    {
                                        position:'absolute',
                                        top:this.wordsCO5Line.defaultTop[3],
                                        height:'2px',  
                                        width:this.wordsCO5Line.defaultWidth[3],
                                        left:this.wordsCO5Line.defaultLeft[3]
                                    },
                                    {
                                        position:'absolute',
                                        top:this.wordsCO5Line.defaultTop[4],
                                        height:'2px',  
                                        width:this.wordsCO5Line.defaultWidth[4],
                                        left:this.wordsCO5Line.defaultLeft[4]
                                    },
                                    {
                                        position:'absolute',
                                        top:this.wordsCO5Line.defaultTop[5],
                                        height:'2px',  
                                        width:this.wordsCO5Line.defaultWidth[5],
                                        left:this.wordsCO5Line.defaultLeft[5]
                                    }                                                                                                                                                                                                                      
                                ]                                                                 
                            ],                            
                            metadata:{
                                image:['/assets/media/IMG-1786-1024x754.jpg']
                            },
                            extras:[
                                {},
                                {},
                                {
                                    ngStyle:{
                                        color:'rgb(251, 32, 86)',
                                        position:'absolute',
                                    },
                                    bool:'false',
                                    text:'\u27F6'
                                }
                            ],                            
                            generator:this.appConsecutiveGenerator
                    }}),     
                    ...Array.from(Array(1),()=> {
                        return {
                            quantity:[[],[],[],[],[3]],
                            bool:[[],[],[],[],['true']], 
                            val:[
                                [],
                                [],
                                [],
                                [],
                                ['w_o_r_d_s_ContenRef']
                            ], 
                            text:[
                                    [],
                                    [],
                                    [],
                                    [],
                                    [null,null,'LEARN MORE']
                            ],
                            metadata:{
                            },
                            ngStyle:[
                                [],
                                [
                                ],
                                [                          
                                ],
                                [                                                                                                                                             
                                ],
                                [
                                    {
                                        position:'absolute',
                                        left:(
                                            numberParse(   this.wordsCO5Title.defaultLeft[0]   )
                                        ).toString() + 'px', // determined evalution and use another is a good idea here
                                        // height:'30px',
                                        width:(
                                            numberParse(   this.wordsCO5Image.defaultLeft[0]   ) +
                                            numberParse(   this.wordsCO5Image.defaultWidth[0]   ) -
                                            numberParse(   this.wordsCO5Title.defaultLeft[0]   )
                                        ).toString() + 'px',
                                        // 'background-color':'blue'
                                    }                                                             
                                ]                            
                            ],   
                            ngCssDefault:[
                                [],
                                [
                                ],
                                [                          
                                ],
                                [                                                                                                                                             
                                ],
                                [
                                    {
                                        position:'absolute',
                                        left:(
                                            numberParse(   this.wordsCO5Title.defaultLeft[0]   )
                                        ).toString() + 'px', // determined evalution and use another is a good idea here
                                        // height:'30px',
                                        width:(
                                            numberParse(   this.wordsCO5Image.defaultLeft[0]   ) +
                                            numberParse(   this.wordsCO5Image.defaultWidth[0]   ) -
                                            numberParse(   this.wordsCO5Title.defaultLeft[0]   )
                                        ).toString() + 'px',
                                        // 'background-color':'blue'
                                    }                                                             
                                ]                            
                            ],                       
                            extras:[
                                {},
                                {},
                                {
                                    bool:'false'
                                }                         
                            ],                        
                            generator:this.appConsecutiveGenerator
                    }})                                                                                                                                                                              
                ],   
            ],
            generator:(function(){
                return function *generator() {
                    var index = 1;
                    while (true)
                    yield index;
                }()
            })()        
        }     
        wordsComponentObject6:componentObject = { 
            quantity:[
                [    
                    {
                        quantity:[[3]],
                        bool:[['true']], 
                        val:[
                            ['w_o_r_d_s_App']
                        ], 
                        text:[
                                []
                        ],
                        metadata:{
                        },
                        ngStyle:[
                            [
                                {
                                    position:'absolute',
                                    top:'500px',
                                    width:'100%',
                                    // bottom:'40px',
                                    // width:'0px',
                                    // height:'550px'
                                }
                            ]                         
                        ],
                        ngCssDefault:[
                            [
                                {
                                    position:'absolute',
                                    top:'500px',
                                    width:'100%',
                                    // bottom:'40px',
                                    // width:'0px',
                                    // height:'550px'
                                }
                            ]                         
                        ],                        
                        extras:[
                            {},
                            {
                                bool:'false'
                            }                         
                        ],                        
                        generator:this.appConsecutiveGenerator
                    }   
                ],                
                [
                    ...Array.from(Array(1),()=> {
                        return {
                            quantity:[[3]],
                            bool:[['true']], 
                            val:[
                                ['w_o_r_d_s_Board']
                            ], 
                            text:[
                                []
                            ],
                            metadata:{
                            },
                            ngStyle:[
                                [
                                    {
                                        position:'absolute',
                                        // top:'700px',
                                        width:'100%',
                                        height:this.wordsCO6Board.defaultHeight[0],
                                        'background-color':'rgb(247, 247, 247)'
                                    }
                                ]                     
                            ],
                            ngCssDefault:[
                                [
                                    {
                                        position:'absolute',
                                        // top:'700px',
                                        width:'100%',
                                        height:this.wordsCO6Board.defaultHeight[0],
                                        'background-color':'rgb(247, 247, 247)'
                                    }
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
                            quantity:[[],[3,3],[3],[3,3,3,3],[3,3,3,3,3]],
                            bool:[[],['true','h2'],['true'],['true','true','true','true'],['true','true','true','true','true']], 
                            val:[
                                [],
                                ['w_o_r_d_s_Title','w_o_r_d_s_SubTitle'],
                                ['w_o_r_d_s_Paragragh'],
                                ['w_o_r_d_s_Image','w_o_r_d_s_Image','w_o_r_d_s_Image','w_o_r_d_s_Image'],
                                ['w_o_r_d_s_Line','w_o_r_d_s_RadioButton','w_o_r_d_s_RadioButton','w_o_r_d_s_RadioButton','w_o_r_d_s_RadioButton'],
                            ], 
                            text:[
                                [],
                                [
                                    'WATER SPORTS',
                                    'ADVENTURE'
                                ],
                                [
                                   `Interdum exercitation penatibus, praesentium facilisi accusamus fermentum, sagittis. `
                                ],
                                [],
                                [],
                            ],                            
                            ngStyle:[
                                [],
                                [
                                    {
                                        position:'absolute',
                                        top:this.wordsCO6Title.defaultTop[0],
                                        'font-size':'32px',
                                        'font-family':'Montserrat',
                                        'background-color':'green',
                                        left:this.wordsCO6Title.defaultLeft[0]
                                    },
                                    {
                                        position:'absolute',
                                        top:this.wordsCO6Title.defaultTop[1],
                                        'font-size':'15px',
                                        'font-family':'Montserrat',
                                        'background-color':'green',
                                        left:this.wordsCO6Title.defaultLeft[1]
                                    }                                    
                                ],
                                [
                                    {
                                        color:'rgb(76, 88, 99)',
                                        position:'absolute',
                                        top:this.wordsCO6Paragraph.defaultTop[0], 
                                        left:this.wordsCO6Paragraph.defaultLeft[0],                                   
                                        'font-size':'16px',
                                        'font-family':'Noto Sans',
                                        'font-weight':400
                                    }                                   
                                ],
                                [
                                    {
                                        height:this.wordsCO6Image.defaultHeight[0],
                                        width:this.wordsCO6Image.defaultWidth[0],
                                        'border-radius':'5px',
                                        position:'absolute',
                                        top:this.wordsCO6Image.defaultTop[0],
                                        left:this.wordsCO6Image.defaultLeft[0],
                                    },
                                    {
                                        height:this.wordsCO6Image.defaultHeight[1],
                                        width:this.wordsCO6Image.defaultWidth[1],
                                        'border-radius':'5px',
                                        position:'absolute',
                                        top:this.wordsCO6Image.defaultTop[1],
                                        left:this.wordsCO6Image.defaultLeft[1],
                                    },
                                    {
                                        height:this.wordsCO6Image.defaultHeight[2],
                                        width:this.wordsCO6Image.defaultWidth[2],
                                        'border-radius':'5px',
                                        position:'absolute',
                                        top:this.wordsCO6Image.defaultTop[2],
                                        left:this.wordsCO6Image.defaultLeft[2],
                                    },
                                    {
                                        height:this.wordsCO6Image.defaultHeight[3],
                                        width:this.wordsCO6Image.defaultWidth[3],
                                        'border-radius':'5px',
                                        position:'absolute',
                                        top:this.wordsCO6Image.defaultTop[3],
                                        left:this.wordsCO6Image.defaultLeft[3],
                                        display:'none',
                                        'z-index':-1
                                    }                                                                          
                                ],
                                [
                                    {
                                        position:'absolute',
                                        top:this.wordsCO6Line.defaultTop[0],
                                        height:'2px',  
                                        width:this.wordsCO6Line.defaultWidth[0],
                                        left:this.wordsCO6Line.defaultLeft[0]
                                    },
                                    {
                                        position:'absolute',
                                        height:this.wordsCO6RadioButton.defaultHeight[0],
                                        width:this.wordsCO6RadioButton.defaultWidth[0],
                                        'border-radius':'7px',
                                        top:this.wordsCO6RadioButton.defaultTop[0],
                                        left:this.wordsCO6RadioButton.defaultLeft[0],                                        
                                    },
                                    {
                                        position:'absolute',
                                        height:this.wordsCO6RadioButton.defaultHeight[1],
                                        width:this.wordsCO6RadioButton.defaultWidth[1],
                                        'border-radius':'7px',
                                        top:this.wordsCO6RadioButton.defaultTop[1],
                                        left:this.wordsCO6RadioButton.defaultLeft[1],                                         
                                    },
                                    {
                                        position:'absolute',
                                        height:this.wordsCO6RadioButton.defaultHeight[2],
                                        width:this.wordsCO6RadioButton.defaultWidth[2],
                                        'border-radius':'7px',
                                        top:this.wordsCO6RadioButton.defaultTop[2],
                                        left:this.wordsCO6RadioButton.defaultLeft[2],                                         
                                    },
                                    {
                                        position:'absolute',
                                        height:this.wordsCO6RadioButton.defaultHeight[3],
                                        width:this.wordsCO6RadioButton.defaultWidth[3],
                                        'border-radius':'7px',
                                        top:this.wordsCO6RadioButton.defaultTop[3],
                                        left:this.wordsCO6RadioButton.defaultLeft[3],                                         
                                    }                                                                                                                                                                                                                          
                                ]                                                                 
                            ],
                            ngCssDefault:[
                                [],
                                [
                                    {
                                        position:'absolute',
                                        top:this.wordsCO6Title.defaultTop[0],
                                        'font-size':'32px',
                                        'font-family':'Montserrat',
                                        'background-color':'green',
                                        left:this.wordsCO6Title.defaultLeft[0]
                                    },
                                    {
                                        position:'absolute',
                                        top:this.wordsCO6Title.defaultTop[1],
                                        'font-size':'15px',
                                        'font-family':'Montserrat',
                                        'background-color':'green',
                                        left:this.wordsCO6Title.defaultLeft[1]
                                    }                                    
                                ],
                                [
                                    {
                                        color:'rgb(76, 88, 99)',
                                        position:'absolute',
                                        top:this.wordsCO6Paragraph.defaultTop[0], 
                                        left:this.wordsCO6Paragraph.defaultLeft[0],                                   
                                        'font-size':'16px',
                                        'font-family':'Noto Sans',
                                        'font-weight':400
                                    }                                   
                                ],
                                [
                                    {
                                        height:this.wordsCO6Image.defaultHeight[0],
                                        width:this.wordsCO6Image.defaultWidth[0],
                                        'border-radius':'5px',
                                        position:'absolute',
                                        top:this.wordsCO6Image.defaultTop[0],
                                        left:this.wordsCO6Image.defaultLeft[0],
                                    },
                                    {
                                        height:this.wordsCO6Image.defaultHeight[1],
                                        width:this.wordsCO6Image.defaultWidth[1],
                                        'border-radius':'5px',
                                        position:'absolute',
                                        top:this.wordsCO6Image.defaultTop[1],
                                        left:this.wordsCO6Image.defaultLeft[1],
                                    },
                                    {
                                        height:this.wordsCO6Image.defaultHeight[2],
                                        width:this.wordsCO6Image.defaultWidth[2],
                                        'border-radius':'5px',
                                        position:'absolute',
                                        top:this.wordsCO6Image.defaultTop[2],
                                        left:this.wordsCO6Image.defaultLeft[2],
                                    },
                                    {
                                        height:this.wordsCO6Image.defaultHeight[3],
                                        width:this.wordsCO6Image.defaultWidth[3],
                                        'border-radius':'5px',
                                        position:'absolute',
                                        top:this.wordsCO6Image.defaultTop[3],
                                        left:this.wordsCO6Image.defaultLeft[3],
                                        'display':'none',
                                        'z-index':-1
                                    }                                                                          
                                ],
                                [
                                    {
                                        position:'absolute',
                                        top:this.wordsCO6Line.defaultTop[0],
                                        height:'2px',  
                                        width:this.wordsCO6Line.defaultWidth[0],
                                        left:this.wordsCO6Line.defaultLeft[0]
                                    },
                                    {
                                        position:'absolute',
                                        height:this.wordsCO6RadioButton.defaultHeight[0],
                                        width:this.wordsCO6RadioButton.defaultWidth[0],
                                        'border-radius':'7px',
                                        top:this.wordsCO6RadioButton.defaultTop[0],
                                        left:this.wordsCO6RadioButton.defaultLeft[0],                                        
                                    },
                                    {
                                        position:'absolute',
                                        height:this.wordsCO6RadioButton.defaultHeight[1],
                                        width:this.wordsCO6RadioButton.defaultWidth[1],
                                        'border-radius':'7px',
                                        top:this.wordsCO6RadioButton.defaultTop[1],
                                        left:this.wordsCO6RadioButton.defaultLeft[1],                                         
                                    },
                                    {
                                        position:'absolute',
                                        height:this.wordsCO6RadioButton.defaultHeight[2],
                                        width:this.wordsCO6RadioButton.defaultWidth[2],
                                        'border-radius':'7px',
                                        top:this.wordsCO6RadioButton.defaultTop[2],
                                        left:this.wordsCO6RadioButton.defaultLeft[2],                                         
                                    },
                                    {
                                        position:'absolute',
                                        height:this.wordsCO6RadioButton.defaultHeight[3],
                                        width:this.wordsCO6RadioButton.defaultWidth[3],
                                        'border-radius':'7px',
                                        top:this.wordsCO6RadioButton.defaultTop[3],
                                        left:this.wordsCO6RadioButton.defaultLeft[3],                                         
                                    }                                                                                                                                                                                                                          
                                ]                                                                 
                            ],                            
                            metadata:{
                                image:[
                                    '/assets/media/water-sports-03-o9imkgs4onpj360zge62vmy79y65wi73cl24g4l0k8.jpg',
                                    '/assets/media/water-sports-04-o9imkgs4onpj360zge62vmy79y65wi73cl24g4l0k8.jpg',
                                    '/assets/media/water-sports-01-o9imkhpyvhqterzmawkpg4pnvc1j47atopplxejme0.jpg',
                                    '/assets/media/water-sports-02-o9imkhpyvhqterzmawkpg4pnvc1j47atopplxejme0.jpg'
                                ],
                            },
                            extras:[
                                {},
                                {},
                                {
                                    ngStyle:{
                                        color:'rgb(251, 32, 86)',
                                        position:'absolute',
                                    },
                                    bool:'false',
                                    text:'\u27F6'
                                }
                            ],                            
                            generator:this.appConsecutiveGenerator
                    }}),       
                    ...Array.from(Array(1),()=> {
                        return {
                            quantity:[[],[],[],[],[3]],
                            bool:[[],[],[],[],['true']], 
                            val:[
                                [],
                                [],
                                [],
                                [],
                                ['w_o_r_d_s_ContentRef']
                            ], 
                            text:[
                                    [],
                                    [],
                                    [],
                                    [],
                                    [null,null,'LEARN MORE']
                            ],
                            metadata:{
                            },
                            ngStyle:[
                                [],
                                [
                                ],
                                [                          
                                ],
                                [                                                                                                                                             
                                ],
                                [
                                    {
                                        position:'absolute',
                                        left:(
                                            numberParse(   this.wordsCO6Title.defaultLeft[0]   )
                                        ).toString() + 'px', // determined evalution and use another is a good idea here
                                        // height:'30px',
                                        width:(
                                            numberParse(   this.wordsCO6Image.defaultLeft[2]   ) +
                                            numberParse(   this.wordsCO6Image.defaultWidth[2]   ) -
                                            numberParse(   this.wordsCO6Image.defaultLeft[0]   )
                                        ).toString() + 'px',
                                        // 'background-color':'blue'
                                    }                                                             
                                ]                            
                            ],   
                            ngCssDefault:[
                                [],
                                [
                                ],
                                [                          
                                ],
                                [                                                                                                                                             
                                ],
                                [
                                    {
                                        position:'absolute',
                                        left:(
                                            numberParse(   this.wordsCO6Title.defaultLeft[0]   )
                                        ).toString() + 'px', // determined evalution and use another is a good idea here
                                        // height:'30px',
                                        width:(
                                            numberParse(   this.wordsCO6Image.defaultLeft[2]   ) +
                                            numberParse(   this.wordsCO6Image.defaultWidth[2]   ) -
                                            numberParse(   this.wordsCO6Image.defaultLeft[0]   )
                                        ).toString() + 'px',
                                        // 'background-color':'blue'
                                    }                                                             
                                ]                            
                            ],                     
                            extras:[
                                {},
                                {},
                                {
                                    bool:'false'
                                }                         
                            ],                        
                            generator:this.appConsecutiveGenerator
                    }})                                                                                                                                                                          
                ],   
            ],
            generator:(function(){
                return function *generator() {
                    var index = 1;
                    while (true)
                    yield index;
                }()
            })()        
        }
        wordsComponentObject7:componentObject = { 
            quantity:[
                [    
                    {
                        quantity:[[3]],
                        bool:[['true']], 
                        val:[
                            ['w_o_r_d_s_App']
                        ], 
                        text:[
                                []
                        ],
                        metadata:{
                        },
                        ngStyle:[
                            [
                                {
                                    position:'absolute',
                                    top:'1300px',
                                    width:'100%',
                                    // bottom:'40px',
                                    // width:'0px',
                                    // height:'550px'
                                }
                            ]                         
                        ],
                        ngCssDefault:[
                            [
                                {
                                    position:'absolute',
                                    top:'1300px',
                                    width:'100%',
                                    // bottom:'40px',
                                    // width:'0px',
                                    // height:'550px'
                                }
                            ]                         
                        ],                        
                        extras:[
                            {},
                            {
                                bool:'false'
                            }                         
                        ],                        
                        generator:this.appConsecutiveGenerator
                    }   
                ],                
                [
                    ...Array.from(Array(1),()=> {
                        return {
                            quantity:[[3]],
                            bool:[['true']], 
                            val:[
                                ['w_o_r_d_s_Board']
                            ], 
                            text:[
                                []
                            ],
                            metadata:{
                            },
                            ngStyle:[
                                [
                                    {
                                        position:'absolute',
                                        // top:'700px',
                                        width:'100%',
                                        height:this.wordsCO7Board.defaultHeight[0],
                                        'background-color':'rgb(247, 255, 0)'
                                    }
                                ]                     
                            ],
                            ngCssDefault:[
                                [
                                    {
                                        position:'absolute',
                                        // top:'700px',
                                        width:'100%',
                                        height:this.wordsCO7Board.defaultHeight[0],
                                        'background-color':'rgb(247, 255, 0)'
                                    }
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
                            quantity:[[],[3,3],[3],[3,3,3,3],[3,3,3,3,3]],
                            bool:[[],['true','h2'],['true'],['true','true','true','true'],['true','true','true','true','true']], 
                            val:[
                                [],
                                ['w_o_r_d_s_Title','w_o_r_d_s_SubTitle'],
                                ['w_o_r_d_s_Paragragh'],
                                ['w_o_r_d_s_Image','w_o_r_d_s_Image','w_o_r_d_s_Image','w_o_r_d_s_Image'],
                                ['w_o_r_d_s_Line','w_o_r_d_s_RadioButton','w_o_r_d_s_RadioButton','w_o_r_d_s_RadioButton','w_o_r_d_s_RadioButton'],
                            ], 
                            text:[
                                [],
                                [
                                    'WINTER SPORTS',
                                    'SNOW ADVENTURE'
                                ],
                                [
                                   `Interdum exercitation penatibus, praesentium facilisi accusamus fermentum, sagittis. `
                                ],
                                [],
                                [],
                            ],                            
                            ngStyle:[
                                [],
                                [
                                    {
                                        position:'absolute',
                                        top:this.wordsCO7Title.defaultTop[0],
                                        'font-size':'32px',
                                        'font-family':'Montserrat',
                                        'background-color':'green',
                                        left:this.wordsCO7Title.defaultLeft[0]
                                    },
                                    {
                                        position:'absolute',
                                        top:this.wordsCO7Title.defaultTop[1],
                                        'font-size':'15px',
                                        'font-family':'Montserrat',
                                        'background-color':'green',
                                        left:this.wordsCO7Title.defaultLeft[1]
                                    }                                    
                                ],
                                [
                                    {
                                        color:'rgb(76, 88, 99)',
                                        position:'absolute',
                                        top:this.wordsCO7Paragraph.defaultTop[0], 
                                        left:this.wordsCO7Paragraph.defaultLeft[0],                                   
                                        'font-size':'16px',
                                        'font-family':'Noto Sans',
                                        'font-weight':400
                                    }                                   
                                ],
                                [
                                    {
                                        height:this.wordsCO7Image.defaultHeight[0],
                                        width:this.wordsCO7Image.defaultWidth[0],
                                        'border-radius':'5px',
                                        position:'absolute',
                                        top:this.wordsCO7Image.defaultTop[0],
                                        left:this.wordsCO7Image.defaultLeft[0],
                                    },
                                    {
                                        height:this.wordsCO7Image.defaultHeight[1],
                                        width:this.wordsCO7Image.defaultWidth[1],
                                        'border-radius':'5px',
                                        position:'absolute',
                                        top:this.wordsCO7Image.defaultTop[1],
                                        left:this.wordsCO7Image.defaultLeft[1],
                                    },
                                    {
                                        height:this.wordsCO7Image.defaultHeight[2],
                                        width:this.wordsCO7Image.defaultWidth[2],
                                        'border-radius':'5px',
                                        position:'absolute',
                                        top:this.wordsCO7Image.defaultTop[2],
                                        left:this.wordsCO7Image.defaultLeft[2],
                                    },
                                    {
                                        height:this.wordsCO7Image.defaultHeight[3],
                                        width:this.wordsCO7Image.defaultWidth[3],
                                        'border-radius':'5px',
                                        position:'absolute',
                                        top:this.wordsCO7Image.defaultTop[3],
                                        left:this.wordsCO7Image.defaultLeft[3],
                                        'z-index':-1,
                                        display:'none'
                                    }                                                                          
                                ],
                                [
                                    {
                                        position:'absolute',
                                        top:this.wordsCO7Line.defaultTop[0],
                                        height:'2px',  
                                        width:this.wordsCO7Line.defaultWidth[0],
                                        left:this.wordsCO7Line.defaultLeft[0]
                                    },
                                    {
                                        position:'absolute',
                                        height:this.wordsCO7RadioButton.defaultHeight[0],
                                        width:this.wordsCO7RadioButton.defaultWidth[0],
                                        'border-radius':'7px',
                                        top:this.wordsCO7RadioButton.defaultTop[0],
                                        left:this.wordsCO7RadioButton.defaultLeft[0],                                        
                                    },
                                    {
                                        position:'absolute',
                                        height:this.wordsCO7RadioButton.defaultHeight[1],
                                        width:this.wordsCO7RadioButton.defaultWidth[1],
                                        'border-radius':'7px',
                                        top:this.wordsCO7RadioButton.defaultTop[1],
                                        left:this.wordsCO7RadioButton.defaultLeft[1],                                         
                                    },
                                    {
                                        position:'absolute',
                                        height:this.wordsCO7RadioButton.defaultHeight[2],
                                        width:this.wordsCO7RadioButton.defaultWidth[2],
                                        'border-radius':'7px',
                                        top:this.wordsCO7RadioButton.defaultTop[2],
                                        left:this.wordsCO7RadioButton.defaultLeft[2],                                         
                                    },
                                    {
                                        position:'absolute',
                                        height:this.wordsCO7RadioButton.defaultHeight[3],
                                        width:this.wordsCO7RadioButton.defaultWidth[3],
                                        'border-radius':'7px',
                                        top:this.wordsCO7RadioButton.defaultTop[3],
                                        left:this.wordsCO7RadioButton.defaultLeft[3],                                         
                                    }                                                                                                                                                                                    
                                ]                                                                 
                            ],
                            ngCssDefault:[
                                [],
                                [
                                    {
                                        position:'absolute',
                                        top:this.wordsCO7Title.defaultTop[0],
                                        'font-size':'32px',
                                        'font-family':'Montserrat',
                                        'background-color':'green',
                                        left:this.wordsCO7Title.defaultLeft[0]
                                    },
                                    {
                                        position:'absolute',
                                        top:this.wordsCO7Title.defaultTop[1],
                                        'font-size':'15px',
                                        'font-family':'Montserrat',
                                        'background-color':'green',
                                        left:this.wordsCO7Title.defaultLeft[1]
                                    }                                    
                                ],
                                [
                                    {
                                        color:'rgb(76, 88, 99)',
                                        position:'absolute',
                                        top:this.wordsCO7Paragraph.defaultTop[0], 
                                        left:this.wordsCO7Paragraph.defaultLeft[0],                                   
                                        'font-size':'16px',
                                        'font-family':'Noto Sans',
                                        'font-weight':400
                                    }                                   
                                ],
                                [
                                    {
                                        height:this.wordsCO7Image.defaultHeight[0],
                                        width:this.wordsCO7Image.defaultWidth[0],
                                        'border-radius':'5px',
                                        position:'absolute',
                                        top:this.wordsCO7Image.defaultTop[0],
                                        left:this.wordsCO7Image.defaultLeft[0],
                                    },
                                    {
                                        height:this.wordsCO7Image.defaultHeight[1],
                                        width:this.wordsCO7Image.defaultWidth[1],
                                        'border-radius':'5px',
                                        position:'absolute',
                                        top:this.wordsCO7Image.defaultTop[1],
                                        left:this.wordsCO7Image.defaultLeft[1],
                                    },
                                    {
                                        height:this.wordsCO7Image.defaultHeight[2],
                                        width:this.wordsCO7Image.defaultWidth[2],
                                        'border-radius':'5px',
                                        position:'absolute',
                                        top:this.wordsCO7Image.defaultTop[2],
                                        left:this.wordsCO7Image.defaultLeft[2],
                                    },
                                    {
                                        height:this.wordsCO7Image.defaultHeight[3],
                                        width:this.wordsCO7Image.defaultWidth[3],
                                        'border-radius':'5px',
                                        position:'absolute',
                                        top:this.wordsCO7Image.defaultTop[3],
                                        left:this.wordsCO7Image.defaultLeft[3],
                                        'z-index':-1
                                    }                                                                          
                                ],
                                [
                                    {
                                        position:'absolute',
                                        top:this.wordsCO7Line.defaultTop[0],
                                        height:'2px',  
                                        width:this.wordsCO7Line.defaultWidth[0],
                                        left:this.wordsCO7Line.defaultLeft[0]
                                    },
                                    {
                                        position:'absolute',
                                        height:this.wordsCO7RadioButton.defaultHeight[0],
                                        width:this.wordsCO7RadioButton.defaultWidth[0],
                                        'border-radius':'7px',
                                        top:this.wordsCO7RadioButton.defaultTop[0],
                                        left:this.wordsCO7RadioButton.defaultLeft[0],                                        
                                    },
                                    {
                                        position:'absolute',
                                        height:this.wordsCO7RadioButton.defaultHeight[1],
                                        width:this.wordsCO7RadioButton.defaultWidth[1],
                                        'border-radius':'7px',
                                        top:this.wordsCO7RadioButton.defaultTop[1],
                                        left:this.wordsCO7RadioButton.defaultLeft[1],                                         
                                    },
                                    {
                                        position:'absolute',
                                        height:this.wordsCO7RadioButton.defaultHeight[2],
                                        width:this.wordsCO7RadioButton.defaultWidth[2],
                                        'border-radius':'7px',
                                        top:this.wordsCO7RadioButton.defaultTop[2],
                                        left:this.wordsCO7RadioButton.defaultLeft[2],                                         
                                    },
                                    {
                                        position:'absolute',
                                        height:this.wordsCO7RadioButton.defaultHeight[3],
                                        width:this.wordsCO7RadioButton.defaultWidth[3],
                                        'border-radius':'7px',
                                        top:this.wordsCO7RadioButton.defaultTop[3],
                                        left:this.wordsCO7RadioButton.defaultLeft[3],                                         
                                    }                                                                                                                                                                                    
                                ]                                                                 
                            ],                            
                            metadata:{
                                image:[
                                    '/assets/media/water-sports-03-o9imkgs4onpj360zge62vmy79y65wi73cl24g4l0k8.jpg',
                                    '/assets/media/water-sports-04-o9imkgs4onpj360zge62vmy79y65wi73cl24g4l0k8.jpg',
                                    '/assets/media/water-sports-01-o9imkhpyvhqterzmawkpg4pnvc1j47atopplxejme0.jpg',
                                    '/assets/media/water-sports-02-o9imkhpyvhqterzmawkpg4pnvc1j47atopplxejme0.jpg'
                                ],
                            },
                            extras:[
                                {},
                                {},
                                {
                                    ngStyle:{
                                        color:'rgb(251, 32, 86)',
                                        position:'absolute',
                                    },
                                    bool:'false',
                                    text:'\u27F6'
                                }
                            ],                            
                            generator:this.appConsecutiveGenerator
                    }}),       
                    ...Array.from(Array(1),()=> {
                        return {
                            quantity:[[],[],[],[],[3]],
                            bool:[[],[],[],[],['true']], 
                            val:[
                                [],
                                [],
                                [],
                                [],
                                ['w_o_r_d_s_ContentRef']
                            ], 
                            text:[
                                    [],
                                    [],
                                    [],
                                    [],
                                    [null,null,'LEARN MORE']
                            ],
                            metadata:{
                            },
                            ngStyle:[
                                [],
                                [
                                ],
                                [                          
                                ],
                                [                                                                                                                                             
                                ],
                                [
                                    {
                                        position:'absolute',
                                        left:(
                                            numberParse(   this.wordsCO7Title.defaultLeft[0]   )
                                        ).toString() + 'px', // determined evalution and use another is a good idea here
                                        // height:'30px',
                                        width:(
                                            numberParse(   this.wordsCO7Image.defaultLeft[2]   ) +
                                            numberParse(   this.wordsCO7Image.defaultWidth[2]   ) -
                                            numberParse(   this.wordsCO7Image.defaultLeft[0]   )
                                        ).toString() + 'px',
                                        // 'background-color':'blue'
                                    }                                                             
                                ]                            
                            ],   
                            ngCssDefault:[
                                [],
                                [
                                ],
                                [                          
                                ],
                                [                                                                                                                                             
                                ],
                                [
                                    {
                                        position:'absolute',
                                        left:(
                                            numberParse(   this.wordsCO7Title.defaultLeft[0]   )
                                        ).toString() + 'px', // determined evalution and use another is a good idea here
                                        // height:'30px',
                                        width:(
                                            numberParse(   this.wordsCO7Image.defaultLeft[2]   ) +
                                            numberParse(   this.wordsCO7Image.defaultWidth[2]   ) -
                                            numberParse(   this.wordsCO7Image.defaultLeft[0]   )
                                        ).toString() + 'px',
                                        // 'background-color':'blue'
                                    }                                                             
                                ]                            
                            ],                     
                            extras:[
                                {},
                                {},
                                {
                                    bool:'false'
                                }                         
                            ],                        
                            generator:this.appConsecutiveGenerator
                    }})                                                                                                                                                                             
                ],   
            ],
            generator:(function(){
                return function *generator() {
                    var index = 1;
                    while (true)
                    yield index;
                }()
            })()        
        }     
        wordsComponentObject8:componentObject = { 
            quantity:[
                [    
                    {
                        quantity:[[3]],
                        bool:[['true']], 
                        val:[
                            ['w_o_r_d_s_App']
                        ], 
                        text:[
                                []
                        ],
                        metadata:{
                        },
                        ngStyle:[
                            [
                                {
                                    position:'absolute',
                                    top:'2100px',
                                    width:'100%',
                                    // bottom:'40px',
                                    // width:'0px',
                                    // height:'550px'
                                }
                            ]                         
                        ],
                        ngCssDefault:[
                            [
                                {
                                    position:'absolute',
                                    top:'2100px',
                                    width:'100%',
                                    // bottom:'40px',
                                    // width:'0px',
                                    // height:'550px'
                                }
                            ]                         
                        ],                        
                        extras:[
                            {},
                            {
                                bool:'false'
                            }                         
                        ],                        
                        generator:this.appConsecutiveGenerator
                    }   
                ],                
                [
                    ...Array.from(Array(1),()=> {
                        return {
                            quantity:[[3]],
                            bool:[['true']], 
                            val:[
                                ['w_o_r_d_s_Board']
                            ], 
                            text:[
                                []
                            ],
                            metadata:{
                            },
                            ngStyle:[
                                [
                                    {
                                        position:'absolute',
                                        // top:'700px',
                                        width:'100%',
                                        height:this.wordsCO8Board.defaultHeight[0],
                                        'background-color':'rgb(247, 255, 255)'
                                    }
                                ]                     
                            ],
                            ngCssDefault:[
                                [
                                    {
                                        position:'absolute',
                                        // top:'700px',
                                        width:'100%',
                                        height:this.wordsCO8Board.defaultHeight[0],
                                        'background-color':'rgb(247, 255, 255)'
                                    }
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
                            quantity:[[],[3,3],[3],[3,3,3,3],[3,3,3,3,3]],
                            bool:[[],['true','h2'],['true'],['true','true','true','true'],['true','true','true','true','true']], 
                            val:[
                                [],
                                ['w_o_r_d_s_Title','w_o_r_d_s_SubTitle'],
                                ['w_o_r_d_s_Paragragh'],
                                ['w_o_r_d_s_Image','w_o_r_d_s_Image','w_o_r_d_s_Image','w_o_r_d_s_Image'],
                                ['w_o_r_d_s_Line','w_o_r_d_s_RadioButton','w_o_r_d_s_RadioButton','w_o_r_d_s_RadioButton','w_o_r_d_s_RadioButton'],
                            ], 
                            text:[
                                [],
                                [
                                    'CAMPING',
                                    'FOREST TOURS'
                                ],
                                [
                                   `Interdum exercitation penatibus, praesentium facilisi accusamus fermentum, sagittis. `
                                ],
                                [],
                                [],
                            ],                            
                            ngStyle:[
                                [],
                                [
                                    {
                                        position:'absolute',
                                        top:this.wordsCO8Title.defaultTop[0],
                                        'font-size':'32px',
                                        'font-family':'Montserrat',
                                        'background-color':'green',
                                        left:this.wordsCO8Title.defaultLeft[0]
                                    },
                                    {
                                        position:'absolute',
                                        top:this.wordsCO8Title.defaultTop[1],
                                        'font-size':'15px',
                                        'font-family':'Montserrat',
                                        'background-color':'green',
                                        left:this.wordsCO8Title.defaultLeft[1]
                                    }                                    
                                ],
                                [
                                    {
                                        color:'rgb(76, 88, 99)',
                                        position:'absolute',
                                        top:this.wordsCO8Paragraph.defaultTop[0], 
                                        left:this.wordsCO8Paragraph.defaultLeft[0],                                   
                                        'font-size':'16px',
                                        'font-family':'Noto Sans',
                                        'font-weight':400
                                    }                                   
                                ],
                                [
                                    {
                                        height:this.wordsCO8Image.defaultHeight[0],
                                        width:this.wordsCO8Image.defaultWidth[0],
                                        'border-radius':'5px',
                                        position:'absolute',
                                        top:this.wordsCO8Image.defaultTop[0],
                                        left:this.wordsCO8Image.defaultLeft[0],
                                    },
                                    {
                                        height:this.wordsCO8Image.defaultHeight[1],
                                        width:this.wordsCO8Image.defaultWidth[1],
                                        'border-radius':'5px',
                                        position:'absolute',
                                        top:this.wordsCO8Image.defaultTop[1],
                                        left:this.wordsCO8Image.defaultLeft[1],
                                    },
                                    {
                                        height:this.wordsCO8Image.defaultHeight[2],
                                        width:this.wordsCO8Image.defaultWidth[2],
                                        'border-radius':'5px',
                                        position:'absolute',
                                        top:this.wordsCO8Image.defaultTop[2],
                                        left:this.wordsCO8Image.defaultLeft[2],
                                    },
                                    {
                                        height:this.wordsCO8Image.defaultHeight[3],
                                        width:this.wordsCO8Image.defaultWidth[3],
                                        'border-radius':'5px',
                                        position:'absolute',
                                        top:this.wordsCO8Image.defaultTop[3],
                                        left:this.wordsCO8Image.defaultLeft[3],
                                        'z-index':-1,
                                        display:'none'
                                    }                                                                          
                                ],
                                [
                                    {
                                        position:'absolute',
                                        top:this.wordsCO8Line.defaultTop[0],
                                        height:'2px',  
                                        width:this.wordsCO8Line.defaultWidth[0],
                                        left:this.wordsCO8Line.defaultLeft[0]
                                    },
                                    {
                                        position:'absolute',
                                        height:this.wordsCO8RadioButton.defaultHeight[0],
                                        width:this.wordsCO8RadioButton.defaultWidth[0],
                                        'border-radius':'7px',
                                        top:this.wordsCO8RadioButton.defaultTop[0],
                                        left:this.wordsCO8RadioButton.defaultLeft[0],                                        
                                    },
                                    {
                                        position:'absolute',
                                        height:this.wordsCO8RadioButton.defaultHeight[1],
                                        width:this.wordsCO8RadioButton.defaultWidth[1],
                                        'border-radius':'7px',
                                        top:this.wordsCO8RadioButton.defaultTop[1],
                                        left:this.wordsCO8RadioButton.defaultLeft[1],                                         
                                    },
                                    {
                                        position:'absolute',
                                        height:this.wordsCO8RadioButton.defaultHeight[2],
                                        width:this.wordsCO8RadioButton.defaultWidth[2],
                                        'border-radius':'7px',
                                        top:this.wordsCO8RadioButton.defaultTop[2],
                                        left:this.wordsCO8RadioButton.defaultLeft[2],                                         
                                    },
                                    {
                                        position:'absolute',
                                        height:this.wordsCO8RadioButton.defaultHeight[3],
                                        width:this.wordsCO8RadioButton.defaultWidth[3],
                                        'border-radius':'7px',
                                        top:this.wordsCO8RadioButton.defaultTop[3],
                                        left:this.wordsCO8RadioButton.defaultLeft[3],                                         
                                    }                                                                                                                                                                                    
                                ]                                                                 
                            ],
                            ngCssDefault:[
                                [],
                                [
                                    {
                                        position:'absolute',
                                        top:this.wordsCO8Title.defaultTop[0],
                                        'font-size':'32px',
                                        'font-family':'Montserrat',
                                        'background-color':'green',
                                        left:this.wordsCO8Title.defaultLeft[0]
                                    },
                                    {
                                        position:'absolute',
                                        top:this.wordsCO8Title.defaultTop[1],
                                        'font-size':'15px',
                                        'font-family':'Montserrat',
                                        'background-color':'green',
                                        left:this.wordsCO8Title.defaultLeft[1]
                                    }                                    
                                ],
                                [
                                    {
                                        color:'rgb(76, 88, 99)',
                                        position:'absolute',
                                        top:this.wordsCO8Paragraph.defaultTop[0], 
                                        left:this.wordsCO8Paragraph.defaultLeft[0],                                   
                                        'font-size':'16px',
                                        'font-family':'Noto Sans',
                                        'font-weight':400
                                    }                                   
                                ],
                                [
                                    {
                                        height:this.wordsCO8Image.defaultHeight[0],
                                        width:this.wordsCO8Image.defaultWidth[0],
                                        'border-radius':'5px',
                                        position:'absolute',
                                        top:this.wordsCO8Image.defaultTop[0],
                                        left:this.wordsCO8Image.defaultLeft[0],
                                    },
                                    {
                                        height:this.wordsCO8Image.defaultHeight[1],
                                        width:this.wordsCO8Image.defaultWidth[1],
                                        'border-radius':'5px',
                                        position:'absolute',
                                        top:this.wordsCO8Image.defaultTop[1],
                                        left:this.wordsCO8Image.defaultLeft[1],
                                    },
                                    {
                                        height:this.wordsCO8Image.defaultHeight[2],
                                        width:this.wordsCO8Image.defaultWidth[2],
                                        'border-radius':'5px',
                                        position:'absolute',
                                        top:this.wordsCO8Image.defaultTop[2],
                                        left:this.wordsCO8Image.defaultLeft[2],
                                    },
                                    {
                                        height:this.wordsCO8Image.defaultHeight[3],
                                        width:this.wordsCO8Image.defaultWidth[3],
                                        'border-radius':'5px',
                                        position:'absolute',
                                        top:this.wordsCO8Image.defaultTop[3],
                                        left:this.wordsCO8Image.defaultLeft[3],
                                        'z-index':-1,
                                        display:'none'
                                    }                                                                          
                                ],
                                [
                                    {
                                        position:'absolute',
                                        top:this.wordsCO8Line.defaultTop[0],
                                        height:'2px',  
                                        width:this.wordsCO8Line.defaultWidth[0],
                                        left:this.wordsCO8Line.defaultLeft[0]
                                    },
                                    {
                                        position:'absolute',
                                        height:this.wordsCO8RadioButton.defaultHeight[0],
                                        width:this.wordsCO8RadioButton.defaultWidth[0],
                                        'border-radius':'7px',
                                        top:this.wordsCO8RadioButton.defaultTop[0],
                                        left:this.wordsCO8RadioButton.defaultLeft[0],                                        
                                    },
                                    {
                                        position:'absolute',
                                        height:this.wordsCO8RadioButton.defaultHeight[1],
                                        width:this.wordsCO8RadioButton.defaultWidth[1],
                                        'border-radius':'7px',
                                        top:this.wordsCO8RadioButton.defaultTop[1],
                                        left:this.wordsCO8RadioButton.defaultLeft[1],                                         
                                    },
                                    {
                                        position:'absolute',
                                        height:this.wordsCO8RadioButton.defaultHeight[2],
                                        width:this.wordsCO8RadioButton.defaultWidth[2],
                                        'border-radius':'7px',
                                        top:this.wordsCO8RadioButton.defaultTop[2],
                                        left:this.wordsCO8RadioButton.defaultLeft[2],                                         
                                    },
                                    {
                                        position:'absolute',
                                        height:this.wordsCO8RadioButton.defaultHeight[3],
                                        width:this.wordsCO8RadioButton.defaultWidth[3],
                                        'border-radius':'7px',
                                        top:this.wordsCO8RadioButton.defaultTop[3],
                                        left:this.wordsCO8RadioButton.defaultLeft[3],                                         
                                    }                                                                                                                                                                                    
                                ]                                                                 
                            ],                            
                            metadata:{
                                image:[
                                    '/assets/media/water-sports-03-o9imkgs4onpj360zge62vmy79y65wi73cl24g4l0k8.jpg',
                                    '/assets/media/water-sports-04-o9imkgs4onpj360zge62vmy79y65wi73cl24g4l0k8.jpg',
                                    '/assets/media/water-sports-01-o9imkhpyvhqterzmawkpg4pnvc1j47atopplxejme0.jpg',
                                    '/assets/media/water-sports-02-o9imkhpyvhqterzmawkpg4pnvc1j47atopplxejme0.jpg'
                                ],
                            },
                            extras:[
                                {},
                                {},
                                {
                                    ngStyle:{
                                        color:'rgb(251, 32, 86)',
                                        position:'absolute',
                                    },
                                    bool:'false',
                                    text:'\u27F6'
                                }
                            ],                            
                            generator:this.appConsecutiveGenerator
                    }}),  
                    ...Array.from(Array(1),()=> {
                        return {
                            quantity:[[],[],[],[],[3]],
                            bool:[[],[],[],[],['true']], 
                            val:[
                                [],
                                [],
                                [],
                                [],
                                ['w_o_r_d_s_ContentRef']
                            ], 
                            text:[
                                    [],
                                    [],
                                    [],
                                    [],
                                    [null,null,'LEARN MORE']
                            ],
                            metadata:{
                            },
                            ngStyle:[
                                [],
                                [
                                ],
                                [                          
                                ],
                                [                                                                                                                                             
                                ],
                                [
                                    {
                                        position:'absolute',
                                        left:(
                                            numberParse(   this.wordsCO8Title.defaultLeft[0]   )
                                        ).toString() + 'px', // determined evalution and use another is a good idea here
                                        // height:'30px',
                                        width:(
                                            numberParse(   this.wordsCO8Image.defaultLeft[2]   ) +
                                            numberParse(   this.wordsCO8Image.defaultWidth[2]   ) -
                                            numberParse(   this.wordsCO8Image.defaultLeft[0]   )
                                        ).toString() + 'px',
                                        // 'background-color':'blue'
                                    }                                                             
                                ]                            
                            ],   
                            ngCssDefault:[
                                [],
                                [
                                ],
                                [                          
                                ],
                                [                                                                                                                                             
                                ],
                                [
                                    {
                                        position:'absolute',
                                        left:(
                                            numberParse(   this.wordsCO8Title.defaultLeft[0]   )
                                        ).toString() + 'px', // determined evalution and use another is a good idea here
                                        // height:'30px',
                                        width:(
                                            numberParse(   this.wordsCO8Image.defaultLeft[2]   ) +
                                            numberParse(   this.wordsCO8Image.defaultWidth[2]   ) -
                                            numberParse(   this.wordsCO8Image.defaultLeft[0]   )
                                        ).toString() + 'px',
                                        // 'background-color':'blue'
                                    }                                                             
                                ]                            
                            ],                     
                            extras:[
                                {},
                                {},
                                {
                                    bool:'false'
                                }                         
                            ],                        
                            generator:this.appConsecutiveGenerator
                    }})                                                                                                                                                                                
                ],   
            ],
            generator:(function(){
                return function *generator() {
                    var index = 1;
                    while (true)
                    yield index;
                }()
            })()        
        }      
        wordsComponentObject9:componentObject = { 
            quantity:[
                [    
                    {
                        quantity:[[3]],
                        bool:[['true']], 
                        val:[
                            ['w_o_r_d_s_App']
                        ], 
                        text:[
                                []
                        ],
                        metadata:{
                        },
                        ngStyle:[
                            [
                                {
                                    position:'absolute',
                                    top:'500px',
                                    width:'100%',
                                    // bottom:'40px',
                                    // width:'0px',
                                    // height:'550px'
                                }
                            ]                         
                        ],
                        ngCssDefault:[
                            [
                                {
                                    position:'absolute',
                                    top:'500px',
                                    width:'100%',
                                    // bottom:'40px',
                                    // width:'0px',
                                    // height:'550px'
                                }
                            ]                         
                        ],                        
                        extras:[
                            {},
                            {
                                bool:'false'
                            }                         
                        ],                        
                        generator:this.appConsecutiveGenerator
                    }   
                ],                
                [
                    ...Array.from(Array(1),()=> {
                        return {
                            quantity:[[3]],
                            bool:[['true']], 
                            val:[
                                ['w_o_r_d_s_Board']
                            ], 
                            text:[
                                []
                            ],
                            metadata:{
                            },
                            ngStyle:[
                                [
                                    {
                                        position:'absolute',
                                        // top:'700px',
                                        width:'100%',
                                        height:this.wordsCO9Board.defaultHeight[0],
                                        'background-color':'rgb(247, 247, 247)'
                                    }
                                ]                     
                            ],
                            ngCssDefault:[
                                [
                                    {
                                        position:'absolute',
                                        // top:'700px',
                                        width:'100%',
                                        height:this.wordsCO9Board.defaultHeight[0],
                                        'background-color':'rgb(247, 247, 247)'
                                    }
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
                            quantity:[[],[3],[3],[],[3]],
                            bool:[[],['true'],['true'],[],['button']],
                            val:[
                                [],
                                ['w_o_r_d_s_Title'],
                                ['w_o_r_d_s_Text'],
                                [],
                                ['w_o_r_d_s_Button'],
                            ], 
                            text:[
                                [],
                                ['CONTACT YOUR FAVORITE CHEF'],
                                ['Send an Email'],
                                [],
                                [],
                            ],                            
                            ngStyle:[
                                [],
                                [
                                    {
                                        position:'absolute',
                                        top:this.wordsCO9Title.defaultTop[0],
                                        'font-size':'32px',
                                        'font-family':"'Charmonman',sans-serif",
                                        'width':this.wordsCO9Title.defaultWidth[0],
                                        'background-color':'green',
                                        left:this.wordsCO9Title.defaultLeft[0]
                                    }
                                ],
                                [
                                    {
                                        color:'rgb(255, 255, 255)',
                                        position:'absolute',
                                        top:this. wordsCO9Paragraph.defaultTop[0], 
                                        left:this. wordsCO9Paragraph.defaultLeft[0],                                      
                                        'font-size':'16px',
                                        'font-family':'Noto Sans',
                                        'font-weight':700,
                                        'text-align':'center',
                                        'z-index':1
                                    }                        
                                ],
                                [],
                                [
                                    {
                                        position:'absolute',
                                        top:this.wordsCO9Button.defaultTop[0],
                                        height:this.wordsCO9Button.defaultHeight[0],
                                        width:this.wordsCO9Button.defaultWidth[0],
                                        left:this.wordsCO9Button.defaultLeft[0],
                                        'border-radius':'50px',
                                        'border':'0px',
                                        'background-color': 'rgb(251, 32, 86)'
                                    }                                                                                                    
                                ]                                                                 
                            ],
                            ngCssDefault:[
                                [],
                                [
                                    {
                                        position:'absolute',
                                        top:this.wordsCO9Title.defaultTop[0],
                                        'font-size':'32px',
                                        'font-family':"'Charmonman',sans-serif",
                                        'width':this.wordsCO9Title.defaultWidth[0],
                                        'background-color':'green',
                                        left:this.wordsCO9Title.defaultLeft[0]
                                    }
                                ],
                                [
                                    {
                                        color:'rgb(255, 255, 255)',
                                        position:'absolute',
                                        top:this. wordsCO9Paragraph.defaultTop[0], 
                                        left:this. wordsCO9Paragraph.defaultLeft[0],                                      
                                        'font-size':'16px',
                                        'font-family':'Noto Sans',
                                        'font-weight':700,
                                        'text-align':'center',
                                        'z-index':1
                                    }                        
                                ],
                                [],
                                [
                                    {
                                        position:'absolute',
                                        top:this.wordsCO9Button.defaultTop[0],
                                        height:this.wordsCO9Button.defaultHeight[0],
                                        width:this.wordsCO9Button.defaultWidth[0],
                                        left:this.wordsCO9Button.defaultLeft[0],
                                        'border-radius':'50px',
                                        'border':'0px',
                                        'background-color': 'rgb(251, 32, 86)'
                                    }                                                                                                    
                                ]                                                                 
                            ],                            
                            metadata:{
                                image:['/assets/media/IMG-1786-1024x754.jpg'],
                                titleDefaultWidth:null
                            },
                            extras:[
                                {},
                                {},
                                {
                                    ngStyle:{
                                        color:'rgb(251, 32, 86)',
                                        position:'absolute',
                                    },
                                    bool:'false',
                                    text:'\u27F6'
                                }
                            ],                            
                            generator:this.appConsecutiveGenerator
                    }}), 
                    ...Array.from(Array(1),()=> {
                        return {
                            quantity:[[],[3,3],[3,3],[],[]],
                            bool:[[],['true','h2'],['true','true'],[],[]], 
                            val:[
                                [],
                                ['w_o_r_d_s_Title','w_o_r_d_s_SubTitle'],
                                ['w_o_r_d_s_Paragragh','w_o_r_d_s_Paragragh'],
                                [],
                                [],
                            ], 
                            text:[
                                [],
                                [
                                    'CONTACT INFO',
                                    'EMAIL US',
                                ],
                                [
                                   `Chef.lia.w@gmail.com`,
                                   'windsorempirellc@gmail.com'
                                ],
                                [],
                                [],
                            ],                            
                            ngStyle:[
                                [],
                                [
                                    {
                                        position:'absolute',
                                        top:this.wordsCO9Title.defaultTop[1],
                                        'font-size':'32px',
                                        'font-family':'Montserrat',
                                        // 'width':this.wordsCO9Title.defaultWidth[0],
                                        'background-color':'green',
                                        left:this.wordsCO9Title.defaultLeft[1]
                                    },
                                    {
                                        position:'absolute',
                                        top:this.wordsCO9Title.defaultTop[2],
                                        'font-size':'15px',
                                        'font-family':'Montserrat',
                                        // 'width':this.wordsCO9Title.defaultWidth[0],
                                        'background-color':'green',
                                        left:this.wordsCO9Title.defaultLeft[2]
                                    }                                    
                                ],
                                [
                                    {
                                        color:'rgb(76, 88, 99)',
                                        position:'absolute',
                                        top:this.wordsCO9Paragraph.defaultTop[1], 
                                        left:this.wordsCO9Paragraph.defaultLeft[1],
                                        'font-size':'16px',
                                        'font-family':'Noto Sans',
                                        'font-weight':400
                                    },
                                    {
                                        color:'rgb(76, 88, 99)',
                                        position:'absolute',
                                        top:this.wordsCO9Paragraph.defaultTop[2], 
                                        left:this.wordsCO9Paragraph.defaultLeft[2],                                   
                                        'font-size':'16px',
                                        'font-family':'Noto Sans',
                                        'font-weight':400
                                    }                                                                      
                                ],
                                [],
                                []                                                                 
                            ],
                            ngCssDefault:[
                                [],
                                [
                                    {
                                        position:'absolute',
                                        top:this.wordsCO9Title.defaultTop[1],
                                        'font-size':'32px',
                                        'font-family':'Montserrat',
                                        // 'width':this.wordsCO9Title.defaultWidth[0],
                                        'background-color':'green',
                                        left:this.wordsCO9Title.defaultLeft[1]
                                    },
                                    {
                                        position:'absolute',
                                        top:this.wordsCO9Title.defaultTop[2],
                                        'font-size':'15px',
                                        'font-family':'Montserrat',
                                        // 'width':this.wordsCO9Title.defaultWidth[0],
                                        'background-color':'green',
                                        left:this.wordsCO9Title.defaultLeft[2]
                                    }                                    
                                ],
                                [
                                    {
                                        color:'rgb(76, 88, 99)',
                                        position:'absolute',
                                        top:this.wordsCO9Paragraph.defaultTop[1], 
                                        left:this.wordsCO9Paragraph.defaultLeft[1],
                                        'font-size':'16px',
                                        'font-family':'Noto Sans',
                                        'font-weight':400
                                    },
                                    {
                                        color:'rgb(76, 88, 99)',
                                        position:'absolute',
                                        top:this.wordsCO9Paragraph.defaultTop[2], 
                                        left:this.wordsCO9Paragraph.defaultLeft[2],                                   
                                        'font-size':'16px',
                                        'font-family':'Noto Sans',
                                        'font-weight':400
                                    }                                                                      
                                ],
                                [],
                                []                                                                 
                            ],                            
                            metadata:{
                                titleDefaultWidth:null
                            },
                            extras:[
                                {},
                                {},
                                {
                                    ngStyle:{
                                        color:'rgb(251, 32, 86)',
                                        position:'absolute',
                                    },
                                    bool:'false',
                                    text:'\u27F6'
                                }
                            ],                            
                            generator:this.appConsecutiveGenerator
                    }}),  
                    ...Array.from(Array(1),()=> {
                        return {
                            quantity:[[],[3],[3],[],[3,3,3]],
                            bool:[[],['h2'],['true'],[],['button','button','button']], 
                            val:[
                                [],
                                ['w_o_r_d_s_Title'],
                                ['w_o_r_d_s_Paragragh'],
                                [],
                                ['w_o_r_d_s_Button','w_o_r_d_s_Button','w_o_r_d_s_Button'],
                            ], 
                            text:[
                                [],
                                [
                                    'CALL US',
                                ],
                                [
                                   `347-940-2713`,
                                ],
                                [],
                                [],
                            ],                            
                            ngStyle:[
                                [],
                                [
                                    {
                                        position:'absolute',
                                        top:this.wordsCO9Title.defaultTop[3],
                                        'font-size':'15px',
                                        'font-family':'Montserrat',
                                        // 'width':this.wordsCO9Title.defaultWidth[0],
                                        'background-color':'green',
                                        left:this.wordsCO9Title.defaultLeft[3]
                                    },                                  
                                ],
                                [
                                    {
                                        color:'rgb(76, 88, 99)',
                                        position:'absolute',
                                        top:this.wordsCO9Paragraph.defaultTop[3], 
                                        left:this.wordsCO9Paragraph.defaultLeft[3],
                                        'font-size':'16px',
                                        'font-family':'Noto Sans',
                                        'font-weight':400
                                    },                                                                     
                                ],
                                [],
                                [
                                    {
                                        position:'absolute',
                                        width:this.wordsCO9Button.defaultWidth[2],
                                        height:this.wordsCO9Button.defaultHeight[2],
                                        'border-radius':this.wordsCO9Button.defaultBorderRadius[2],
                                        'border':'0px',
                                        top:this.wordsCO9Button.defaultTop[2],
                                        left:this.wordsCO9Button.defaultLeft[2],
                                        'background-color':'rgb(147,147,147)'
                                    },
                                    {
                                        position:'absolute',
                                        width:this.wordsCO9Button.defaultWidth[3],
                                        height:this.wordsCO9Button.defaultHeight[3],
                                        'border-radius':this.wordsCO9Button.defaultBorderRadius[3],
                                        'border':'0px',
                                        top:this.wordsCO9Button.defaultTop[3],
                                        left:this.wordsCO9Button.defaultLeft[3],
                                        'background-color':'rgb(147,147,147)'                                        
                                    },
                                    {
                                        position:'absolute',
                                        width:this.wordsCO9Button.defaultWidth[4],
                                        height:this.wordsCO9Button.defaultHeight[4],
                                        'border-radius':this.wordsCO9Button.defaultBorderRadius[4],
                                        'border':'0px',
                                        top:this.wordsCO9Button.defaultTop[4],
                                        left:this.wordsCO9Button.defaultLeft[4],
                                        'background-color':'rgb(147,147,147)'                                         
                                    }                                                                        
                                ]                                                                 
                            ],
                            ngCssDefault:[
                                [],
                                [
                                    {
                                        position:'absolute',
                                        top:this.wordsCO9Title.defaultTop[3],
                                        'font-size':'15px',
                                        'font-family':'Montserrat',
                                        // 'width':this.wordsCO9Title.defaultWidth[0],
                                        'background-color':'green',
                                        left:this.wordsCO9Title.defaultLeft[3]
                                    },                                  
                                ],
                                [
                                    {
                                        color:'rgb(76, 88, 99)',
                                        position:'absolute',
                                        top:this.wordsCO9Paragraph.defaultTop[3], 
                                        left:this.wordsCO9Paragraph.defaultLeft[3],
                                        'font-size':'16px',
                                        'font-family':'Noto Sans',
                                        'font-weight':400
                                    },                                                                     
                                ],
                                [],
                                [
                                    {
                                        position:'absolute',
                                        width:this.wordsCO9Button.defaultWidth[2],
                                        height:this.wordsCO9Button.defaultHeight[2],
                                        'border-radius':this.wordsCO9Button.defaultBorderRadius[2],
                                        'border':'0px',
                                        top:this.wordsCO9Button.defaultTop[2],
                                        left:this.wordsCO9Button.defaultLeft[2],
                                        'background-color':'rgb(147,147,147)'
                                    },
                                    {
                                        position:'absolute',
                                        width:this.wordsCO9Button.defaultWidth[3],
                                        height:this.wordsCO9Button.defaultHeight[3],
                                        'border-radius':this.wordsCO9Button.defaultBorderRadius[3],
                                        'border':'0px',
                                        top:this.wordsCO9Button.defaultTop[3],
                                        left:this.wordsCO9Button.defaultLeft[3],
                                        'background-color':'rgb(147,147,147)'                                        
                                    },
                                    {
                                        position:'absolute',
                                        width:this.wordsCO9Button.defaultWidth[4],
                                        height:this.wordsCO9Button.defaultHeight[4],
                                        'border-radius':this.wordsCO9Button.defaultBorderRadius[4],
                                        'border':'0px',
                                        top:this.wordsCO9Button.defaultTop[4],
                                        left:this.wordsCO9Button.defaultLeft[4],
                                        'background-color':'rgb(147,147,147)'                                         
                                    }                                                                        
                                ]                                                                 
                            ],                            
                            metadata:{
                                titleDefaultWidth:null
                            },
                            extras:[
                                {},
                                {},
                                {
                                    ngStyle:{
                                        color:'rgb(251, 32, 86)',
                                        position:'absolute',
                                    },
                                    bool:'false',
                                    text:'\u27F6'
                                }
                            ],                            
                            generator:this.appConsecutiveGenerator
                    }}),                                                                                                                                     
                ],   
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