import {   WINDOW   } from './window.service';
import {defer} from 'rxjs'
import {  HttpClient, HttpHeaders,HttpXhrBackend,   }    from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { NgZone } from '@angular/core' ; 

let Zone = new NgZone({
    enableLongStackTrace:true,
    shouldCoalesceEventChangeDetection:true
})

export class zChildren {
    element:  HTMLElement;
    style:Object | any;
    cssDefault?:Object;
    bool?:string;
    innerText?:null | string;
    link?:string;
    quantity?:any;
    mouseover?:any;
    mouseout?:any;
    Ielement?:any
}



let final:any = {}; 


function wait(   ms   ){
    var start = new Date().getTime();
    var end = start;
    while(   end < start + ms   ) {
      end = new Date().getTime();
    }
 }



export var firebase =  (()=>{
    let xhr = new XMLHttpRequest();
    xhr.onload= ()=>{
        let a = JSON.parse(xhr.response)
        final.apiKey = a.AF_APIKEY
        final.authDomain = a.AF_AUTHDOMAIN
        final.databaseURL = a.AF_DATABASEURL
        final.projectId = a.AF_PROJECTID
        final.storageBucket = a.AF_STORAGEBUCKET
        final.messagingSenderId = a.AF_GCM_SENDER_ID
        final.appId = a.AF_APPID
        final.measurementId = 'null'        
    }  
    window.onerror= (e)=>{
        // console.log(e)
        //try to silence zone.js error
    }        
    // xhr.open('GET', '/env', false)
    xhr.open('GET', 'http://localhost:8000/env', false)
    xhr.send()
    return final
})() 


export function asyncData<T>(data: T) {
    return defer(() => Promise.resolve(data));
}

export function asyncError<T>(errorObject: any) {
    return defer(() => Promise.reject(errorObject));
}  

// The RxJS defer() operator returns an observable. 
// It takes a factory function that returns either a promise or an observable. 
// When something subscribes to defer's observable,
//  it adds the subscriber to a new observable created with that factory.


// The defer() operator transforms the Promise.resolve() into a new observable that, 
// like HttpClient, emits once and completes. 
// Subscribers are unsubscribed after they receive the data value.


export class componentObject { // not final
    quantity: any[]; 
    generator?: Generator;
    metadata?: Object | any; 
}



/*

if you need to do stuff for overlayCO5
        if(   this.overlayTemplateVariable === 'overlayComponentObject5'   ){


            let zChild:zChildren[] =[{
                element: this.window.document.querySelector('app-overlay[ng-reflect-overlay-template-variable='+this.overlayTemplateVariable+']') as HTMLElement,
                style:this.wordsService[this.overlayTemplateVariable].quantity[0][0].ngStyle[0][0],
                bool:this.wordsService[this.overlayTemplateVariable].quantity[0][0].bool[0][0]
            }]     
            let zCheckpoint = []                        
            this.overlayMyElements._results.map((x:any,i:any)=>{


                if(   x.nativeElement.id === 'o_v_e_r_l_a_y_Board'   ){
                    zCheckpoint.push(i)
                }                        
                
            
            })      
            let zGrid = {
                a:0, 
                b:0, 
            }  
            zCheckpoint.map((y:any,j:any)=>{
                // console.group('associated')
                // console.log(    this.wordsMyElements._results.slice(y,zCheckpoint[j+1])   )
                zGrid.a = 0;
                (function(qq){
                    return qq.overlayMyElements._results.length === 1 ? qq.overlayMyElements._results : qq.overlayMyElements._results.slice(y,zCheckpoint[j+1])
                })(this).map((x:any,i:any)=>{     
                    // console.log(   x.nativeElement.id   )
                    // console.log(   this.wordsService[this.wordsTemplateVariable].quantity[1][j].val  )
                    // console.log(x)
                    while(   
                        this.wordsService[this.overlayTemplateVariable].quantity[1][j].quantity[zGrid.a][zGrid.b] === undefined &&   
                        zGrid.b +1 > this.wordsService[this.overlayTemplateVariable].quantity[1][j].quantity[zGrid.a].length
                    ){
                        // console.log(   this.wordsService[this.wordsTemplateVariable].quantity[1][j].quantity[zGrid.a]   )
                        zGrid.a +=1
                        // debugger                                
                    }
                    // console.log(   
                    //     this.wordsService[this.wordsTemplateVariable].quantity[1][j].quantity[zGrid.a],   
                    //     zChild,
                    //     zGrid
                    // )


                    if(   x.nativeElement.id === this.wordsService[this.overlayTemplateVariable].quantity[1][j].val[zGrid.a][zGrid.b]   &&
                        (   
                            this.wordsService[this.overlayTemplateVariable].quantity[1][j].bool[zGrid.a][zGrid.b] === 'true' ||
                            this.wordsService[this.overlayTemplateVariable].quantity[1][j].bool[zGrid.a][zGrid.b] === 'link' ||
                            this.wordsService[this.overlayTemplateVariable].quantity[1][j].bool[zGrid.a][zGrid.b] === 'icon' ||
                            this.wordsService[this.overlayTemplateVariable].quantity[1][j].bool[zGrid.a][zGrid.b] === 'button' 
                        )    
                    ){               


                        let domElement = x.nativeElement as HTMLElement;
                        zChild.push({
                            element:domElement,
                            style:this.wordsService[this.overlayTemplateVariable].quantity[1][j].ngStyle[zGrid.a][zGrid.b],
                            innerText: this.wordsService[this.overlayTemplateVariable].quantity[1][j].text[zGrid.a][zGrid.b],
                            bool:this.wordsService[this.overlayTemplateVariable].quantity[1][j].bool[zGrid.a][zGrid.b]
                        })
                        

                        if(   this.wordsService[this.overlayTemplateVariable].quantity[1][j].quantity[zGrid.a][zGrid.b+1] === undefined   ){


                            zGrid.a += 1
                            zGrid.b = 0       
                            
                            
                        }


                        
                        else if(   true   ){


                            zGrid.b += 1       
                            
                            
                        }


                    }
                    
                    
                })
                // console.groupEnd()
            })      
            // console.log(   zChild   ) 

        }



mobile stacking template

                    zChild[2].style['width'] = (
                        .95 * numberParse(  this.window.getComputedStyle(   zChild[1].element   ).width   )
                    ).toString() + 'px'
                    zChild[2].style['font-size'] = '25px'
                    // zChild[2].style['font-style'] = 'italic'
                    this.ref.detectChanges()
                    zChild[2].style['top']  = '40px'
                    // zChild[2].style['top'] = (
                    //     numberParse(   this.window.getComputedStyle(   zChild[16].element   ).top   ) +
                    //     numberParse(   this.window.getComputedStyle(   zChild[16].element   ).height   )+
                    //     25
                    // ).toString() + 'px'
                    zChild[2].style['left'] = xPosition({
                        contain:numberParse(   this.window.getComputedStyle(zChild[1].element).width   ),
                        target:numberParse(   this.window.getComputedStyle(zChild[2].element).width   )
                    })     
                    zChild[2].style['text-align'] = 'center' 
                    this.ref.detectChanges()      
                    
to expand the height of the containing element

blog component spec ts fakeWordsService
                                import { async, ComponentFixture, TestBed,ComponentFixtureAutoDetect, fakeAsync } from '@angular/core/testing';
                                import { WINDOW_PROVIDERS } from '../window.service';
                                import { WordsService  } from '../words.service';
                                import { BlogComponent } from './blog.component';
                                import {  HttpClientModule  } from '@angular/common/http';
                                import { AppComponent } from '../app.component'
                                import {   Observable,of,Subject, fromEvent   } from 'rxjs';
                                import { asyncData,numberParse } from '../customExports';
                                import { By } from '@angular/platform-browser';
                                import { DebugElement } from '@angular/core';

                                xdescribe('BlogComponent', () => {
                                let component: BlogComponent;
                                let fixture: ComponentFixture<BlogComponent>;
                                let wordsServiceStub:Partial<WordsService>
                                let wordsTestService: WordsService

                                beforeEach(async(() => {
                                    let myTitles= [
                                        'Recipies for the New Year',
                                        'Celebration in Boston',
                                        'Winter Solstice',
                                        'Keeping Healthy for the Holidays',
                                        'A New Decade',
                                        '2019’s Best Seller',
                                        'Popular in The Shop This Week',
                                        'Cant get enough of Lia Pastries!',
                                        'Shopping With the Chef',
                                        'Annie dog turns 3 today',
                                        'A moment to never forget',
                                        'Christmas Vacation is almost here',
                                        'Places to make this winter magical in NYC',
                                        'Too much coffee health risks',
                                        'Meaning of December',
                                        'The Iphone XS max is here, how can you use it as a cooking Tool? ',
                                        'Honeysweet Memories'                                
                                    ]
                                    wordsServiceStub = {
                                        blogCO0: {
                                            quantity:[
                                                [
                                                    {
                                                        quantity:[[3]],
                                                        bool:[['true']], 
                                                        val:[
                                                            ['b_l_o_g_App']
                                                        ], 
                                                        text:[
                                                                []
                                                        ],
                                                        metadata:{
                                                            mouseover:[
                                                                [],
                                                                [],
                                                                []
                                                            ],
                                                            mouseout:[
                                                                [],
                                                                [],
                                                                []
                                                            ]                            
                                                        },
                                                        ngStyle:[
                                                            [
                                                                {
                                                                    position:'absolute',
                                                                    top:'0px',
                                                                    width:'100%',
                                                                    'z-index':'1'
                                                                }
                                                            ]                         
                                                        ],
                                                        ngCssDefault:[
                                                            [
                                                                {
                                                                    position:'absolute',
                                                                    top:'0px',
                                                                    width:'100%',
                                                                    'z-index':'1'
                                                                }
                                                            ]                         
                                                        ],                   
                                                        extras:[
                                                            {},
                                                            {
                                                                bool:'false'
                                                            }                         
                                                        ],                        
                                                        // generator:this.appConsecutiveGenerator
                                                    }                    
                                                ],
                                                [
                                                    ...Array.from(Array(1),()=> {
                                                        return {
                                                            signature:'containing',
                                                            quantity:[[3]],
                                                            bool:[['div']], 
                                                            val:[
                                                                ['b_l_o_g_Board'],
                                                            ], 
                                                            text:[
                                                                [],
                                                            ],
                                                            metadata:{
                                                                navigationCO0:new Subject<any>(),
                                                                footerCO0:new Subject<any>(),  
                                                                mouseover:[
                                                                    [],
                                                                    [],
                                                                    []
                                                                ],
                                                                mouseout:[
                                                                    [],
                                                                    [],
                                                                    []
                                                                ]                                                               
                                                            },
                                                            ngStyle:[
                                                                [
                                                                    {
                                                                        position:'absolute',
                                                                        height:'750px',
                                                                        width:'100%',
                                                                        'z-index':'1',
                                                                        // 'background-color':'rgb(255, 192, 203)',
                                                                        top:'0px'
                                                                    }
                                                                ]                    
                                                            ],
                                                            ngCssDefault:[
                                                                [
                                                                    {
                                                                        position:'absolute',
                                                                        height:'700px',
                                                                        width:'100%',
                                                                        'z-index':'1',
                                                                        // 'background-color':'rgb(255, 192, 203)',
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
                                                            // generator:this.appConsecutiveGenerator
                                                    }}),                     
                                                    ...Array.from(Array(1),()=> {
                                                        return {
                                                            signature:'menu',
                                                            quantity:[[],[3,3,3,3,3,3,3,3],[3,3,3]],
                                                            bool:[[],['h1','h2','h2','h2','h2','h2','h2','h2'],['div','div','div']], 
                                                            val:[
                                                                [],
                                                                [
                                                                'b_l_o_g_Title',
                                                                'b_l_o_g_SubTitle',
                                                                'b_l_o_g_SubTitle',
                                                                'b_l_o_g_SubTitle',
                                                                'b_l_o_g_SubTitle',
                                                                'b_l_o_g_SubTitle',
                                                                'b_l_o_g_SubTitle',
                                                                'b_l_o_g_SubTitle'                               
                                                                ],
                                                                [
                                                                    'b_l_o_g_Menu',
                                                                    'b_l_o_g_MenuMobileA',
                                                                    'b_l_o_g_MenuMobileB'
                                                                ]
                                                            ], 
                                                            text:[
                                                                [],
                                                                [
                                                                    "LIA'S BLOG",
                                                                    'Women',
                                                                    'Fashion',
                                                                    'Recipies',
                                                                    'Ingredients',
                                                                    'Appliances',                                    
                                                                    'Trends',
                                                                    'Shopping'
                                                                ],
                                                                []
                                                            ],
                                                            metadata:{
                                                                mouseover:[
                                                                    [],
                                                                    [],
                                                                    [
                                                                        {
                                                                            fn:null,
                                                                            
                                                                        }, 
                                                                        {
                                                                            fn:null,
                                                                            
                                                                        }, 
                                                                        {
                                                                            fn:null,
                                                                            
                                                                        },                                                                                                                          
                                                                    ]
                                                                ],
                                                                mouseout:[
                                                                    [],
                                                                    [],
                                                                    [
                                                                        {
                                                                            fn:null,
                                                                            
                                                                        }, 
                                                                        {
                                                                            fn:null,
                                                                            
                                                                        }, 
                                                                        {
                                                                            fn:null,
                                                                            
                                                                        },                                                                                                                          
                                                                    ]
                                                                ]                                
                                                            },
                                                            ngStyle:[
                                                                [],
                                                                [
                                                                    {
                                                                        position:'absolute',
                                                                        'z-index':'2',
                                                                        'font-family':'Montserrat',
                                                                        'left':'32.5px'
                                                                    },
                                                                    {
                                                                        position:'absolute',
                                                                        'z-index':'2',
                                                                        'font-family':'Noto Sans',
                                                                        'top':'50px',
                                                                        'left':'80px',
                                                                        'font-size':'24px'
                                                                    }, 
                                                                    {
                                                                        position:'absolute',
                                                                        'z-index':'2',
                                                                        'font-family':'Noto Sans',
                                                                        'top':'100px',
                                                                        'left':'79.5px',
                                                                        'font-size':'24px'
                                                                    }, 
                                                                    {
                                                                        position:'absolute',
                                                                        'z-index':'2',
                                                                        'font-family':'Noto Sans',
                                                                        'top':'150px',
                                                                        'left':'77px',
                                                                        'font-size':'24px'
                                                                    },   
                                                                    {
                                                                        position:'absolute',
                                                                        'z-index':'2',
                                                                        'font-family':'Noto Sans',
                                                                        'top':'200px',
                                                                        'left':'57px',
                                                                        'font-size':'24px'
                                                                    }, 
                                                                    {
                                                                        position:'absolute',
                                                                        'z-index':'2',
                                                                        'font-family':'Noto Sans',
                                                                        'top':'250px',
                                                                        'left':'61.5px',
                                                                        'font-size':'24px'

                                                                    }, 
                                                                    {
                                                                        position:'absolute',
                                                                        'z-index':'2',
                                                                        'font-family':'Noto Sans',
                                                                        'top':'300px',
                                                                        left:'85px',
                                                                        'font-size':'24px'
                                                                    }, 
                                                                    {
                                                                        position:'absolute',
                                                                        'z-index':'2',
                                                                        'font-family':'Noto Sans',
                                                                        'top':'350px',
                                                                        left:'69px',
                                                                        'font-size':'24px'
                                                                    }                                                                                                                                                                                                                                                         
                                                                ],
                                                                [
                                                                    {
                                                                        position:'absolute',
                                                                        height:'750px',
                                                                        width:'250px',
                                                                        'z-index':'1',
                                                                        'background-color':'rgb(255, 192, 203)',
                                                                        top:'0px'
                                                                    },
                                                                    {
                                                                        position:'absolute',
                                                                        display:'none',
                                                                        height:'750px',
                                                                        width:'225px',
                                                                        left:'0px',
                                                                        'z-index':'1',
                                                                        'background-color':'rgb(0, 0, 0)',
                                                                        border:'1px solid rgb(255, 192, 203)',
                                                                        top:'72px'
                                                                    },
                                                                    {
                                                                        position:'absolute',
                                                                        display:'none',
                                                                        height:'750px',
                                                                        width:'225px',
                                                                        'z-index':'1',
                                                                        left:'911px',
                                                                        'background-color':'rgb(0, 0, 0)',
                                                                        border:'1px solid rgb(255, 192, 203)',
                                                                        top:'72px'
                                                                    }                                                                         
                                                                ]                    
                                                            ],  
                                                            ngCssDefault:[
                                                                [],
                                                                [
                                                                    {
                                                                        position:'absolute',
                                                                        'z-index':'2',
                                                                        'font-family':'Montserrat',
                                                                        'left':'32.5px'
                                                                    },
                                                                    {
                                                                        position:'absolute',
                                                                        'z-index':'2',
                                                                        'font-family':'Noto Sans',
                                                                        'top':'50px',
                                                                        'left':'80px',
                                                                        'font-size':'24px'
                                                                    }, 
                                                                    {
                                                                        position:'absolute',
                                                                        'z-index':'2',
                                                                        'font-family':'Noto Sans',
                                                                        'top':'100px',
                                                                        'left':'79.5px',
                                                                        'font-size':'24px'
                                                                    }, 
                                                                    {
                                                                        position:'absolute',
                                                                        'z-index':'2',
                                                                        'font-family':'Noto Sans',
                                                                        'top':'150px',
                                                                        'left':'77px',
                                                                        'font-size':'24px'
                                                                    },   
                                                                    {
                                                                        position:'absolute',
                                                                        'z-index':'2',
                                                                        'font-family':'Noto Sans',
                                                                        'top':'200px',
                                                                        'left':'57px',
                                                                        'font-size':'24px'
                                                                    }, 
                                                                    {
                                                                        position:'absolute',
                                                                        'z-index':'2',
                                                                        'font-family':'Noto Sans',
                                                                        'top':'250px',
                                                                        'left':'61.5px',
                                                                        'font-size':'24px'

                                                                    }, 
                                                                    {
                                                                        position:'absolute',
                                                                        'z-index':'2',
                                                                        'font-family':'Noto Sans',
                                                                        'top':'300px',
                                                                        left:'85px',
                                                                        'font-size':'24px'
                                                                    }, 
                                                                    {
                                                                        position:'absolute',
                                                                        'z-index':'2',
                                                                        'font-family':'Noto Sans',
                                                                        'top':'350px',
                                                                        left:'69px',
                                                                        'font-size':'24px'
                                                                    }                                                                                                                                                                                                                                                         
                                                                ],
                                                                [
                                                                    {
                                                                        position:'absolute',
                                                                        height:'750px',
                                                                        width:'250px',
                                                                        'z-index':'1',
                                                                        'background-color':'rgb(255, 192, 203)',
                                                                        top:'0px'
                                                                    },
                                                                    {
                                                                        position:'absolute',
                                                                        display:'none',
                                                                        height:'750px',
                                                                        width:'225px',
                                                                        left:'0px',
                                                                        'z-index':'1',
                                                                        'background-color':'rgb(0, 0, 0)',
                                                                        border:'1px solid rgb(255, 192, 203)',
                                                                        top:'72px'
                                                                    },
                                                                    {
                                                                        position:'absolute',
                                                                        display:'none',
                                                                        height:'750px',
                                                                        width:'225px',
                                                                        'z-index':'1',
                                                                        left:'911px',
                                                                        'background-color':'rgb(0, 0, 0)',
                                                                        border:'1px solid rgb(255, 192, 203)',
                                                                        top:'72px'
                                                                    }                                                                         
                                                                ]                    
                                                            ],     
                                                            extras:[
                                                                {},
                                                                {
                                                                    bool:'false'
                                                                }                         
                                                            ],                        
                                                            // generator:this.appConsecutiveGenerator
                                                    }}), 
                                                    ...Array.from(Array(1),()=> {
                                                        return {
                                                            signature:'hover title',
                                                            quantity:[[],[3],[]],
                                                            bool:[[],['h1'],[]], 
                                                            val:[
                                                                [],
                                                                ['b_l_o_g_Title'],
                                                                []
                                                            ], 
                                                            text:[
                                                                [],
                                                                ['Top Stories'],
                                                                []
                                                            ],
                                                            metadata:{
                                                                mouseover:[
                                                                    [],
                                                                    [],
                                                                    []
                                                                ],
                                                                mouseout:[
                                                                    [],
                                                                    [],
                                                                    []
                                                                ]                                
                                                            },
                                                            ngStyle:[
                                                                [],
                                                                [
                                                                    {
                                                                        position:'absolute',
                                                                        color:'rgb(255,192,203)',
                                                                        'font-family':'Vidaloka',
                                                                        'font-style':'italic',
                                                                        left: '650px',
                                                                        'z-index':'2'
                                                                    }                                    
                                                                ],
                                                                [                               
                                                                ]                    
                                                            ],  
                                                            ngCssDefault:[
                                                                [],
                                                                [
                                                                    {
                                                                        position:'absolute',
                                                                        color:'rgb(255,192,203)',
                                                                        'font-family':'Vidaloka',
                                                                        'font-style':'italic',
                                                                        left: '650px',
                                                                        'z-index':'2'
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
                                                            // generator:this.appConsecutiveGenerator
                                                    }}),                      
                                                    ...Array.from(Array(1),()=> {
                                                        return {
                                                            signature:'blog article',
                                                            quantity:[[],[3],[3,3]],
                                                            bool:[[],['a'],['div','button']], 
                                                            val:[
                                                                [],
                                                                ['b_l_o_g_Title'],
                                                                ['b_l_o_g_Topic','b_l_o_g_TopicButton']
                                                            ], 
                                                            text:[
                                                                [],
                                                                ['Recipies for the new year'],
                                                                []
                                                            ],
                                                            metadata:{
                                                                router:[
                                                                    [],
                                                                    [
                                                                        [
                                                                            {
                                                                                link:'https://www.bbcgoodfood.com/recipes/collection/new-years-eve'
                                                                            }
                                                                        ]
                                                                    ],
                                                                    []
                                                                ],
                                                                mouseover:[
                                                                    [],
                                                                    [
                                                                        {
                                                                            fn:null,
                                                                            assoc:null,
                                                                            exit:false
                                                                        }
                                                                    ],
                                                                    [
                                                                        {
                                                                            fn:null,
                                                                            
                                                                        },
                                                                        {
                                                                            fn:null,
                                                                            
                                                                        }                                                                                
                                                                    ]
                                                                ],
                                                                mouseout:[
                                                                    [],
                                                                    [
                                                                        {
                                                                            fn:null,
                                                                        }
                                                                    ],
                                                                    [
                                                                        {
                                                                            fn:null,
                                                                            
                                                                        },
                                                                        {
                                                                            fn:null,
                                                                            
                                                                        }                                                                                
                                                                    ]
                                                                ]                                
                                                            },
                                                            ngStyle:[
                                                                [],
                                                                [
                                                                    {
                                                                        position:'absolute',
                                                                        'font-family':'Vidaloka',
                                                                        'font-style':'italic',
                                                                        left: '380px',
                                                                        top:'65px',
                                                                        'font-size':'30px',
                                                                        'z-index':'3',
                                                                        color: 'rgb(85,26,142)'
                                                                    }                                    
                                                                ],
                                                                [
                                                                    {   
                                                                        position:'absolute',                                        
                                                                        'background-color':'rgb(255,192,203)',
                                                                        height:'50px',
                                                                        width:'943px',
                                                                        top:'60px',
                                                                        left:'320px',
                                                                        'z-index':'2'
                                                                    },
                                                                    {   
                                                                        position:'absolute',                                        
                                                                        'background-color':'rgb(255, 72, 137)',
                                                                        height:'40px',
                                                                        width:'40px',
                                                                        top:'65px',
                                                                        left:'325px',
                                                                        'z-index':'2'
                                                                    }                                    
                                                                ]                    
                                                            ],   
                                                            ngCssDefault:[
                                                                [],
                                                                [
                                                                    {
                                                                        position:'absolute',
                                                                        'font-family':'Vidaloka',
                                                                        'font-style':'italic',
                                                                        left: '380px',
                                                                        top:'65px',
                                                                        'font-size':'30px',
                                                                        'z-index':'3',
                                                                        color: 'rgb(85,26,142)'
                                                                    }                                    
                                                                ],
                                                                [
                                                                    {   
                                                                        position:'absolute',                                        
                                                                        'background-color':'rgb(255,192,203)',
                                                                        height:'50px',
                                                                        width:'943px',
                                                                        top:'60px',
                                                                        left:'320px',
                                                                        'z-index':'2'
                                                                    },
                                                                    {   
                                                                        position:'absolute',                                        
                                                                        'background-color':'rgb(255, 72, 137)',
                                                                        height:'40px',
                                                                        width:'40px',
                                                                        top:'65px',
                                                                        left:'325px',
                                                                        'z-index':'2'
                                                                    }                                    
                                                                ]                    
                                                            ], 
                                                            extras:[
                                                                {},
                                                                {
                                                                    bool:'false'
                                                                }                         
                                                            ],                        
                                                            // generator:this.appConsecutiveGenerator
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
                                        },  
                                        blogCOTopSubject : new Subject<any>(),
                                        blogGetTitles: ()=>{return asyncData({latestBlog:myTitles})},   
                                        blogNavTestStub:{},   
                                        blogTitles: myTitles,   
                                        appViewComplete:  new  Subject<any>(),
                                        appViewCompleteArray: [],
                                        appEventListener: (a)=>{
                                        

                                            if(   typeof a === 'function'   ){
                                    
                                    
                                                a()
                                    
                                    
                                            }
                                    
                                    
                                        },    
                                        blogResizeTestEventSubscription0:null,
                                        blogResizeEvent$:fromEvent(window,'resize')    
                                    }
                                    // wordsServiceStub.blogCO0.quantity[1][0].metadata.navigationCO0.next('0px')
                                    TestBed.configureTestingModule({
                                        providers:[
                                            WINDOW_PROVIDERS,
                                            [ {provide: WordsService, useValue: wordsServiceStub } ]
                                            // { provide: ComponentFixtureAutoDetect, useValue: true }
                                        ],        
                                        imports : [HttpClientModule],
                                    declarations: [ 
                                        BlogComponent 
                                        ]
                                    })
                                    .compileComponents();
                                    fixture = TestBed.createComponent(BlogComponent); 
                                    component = fixture.componentInstance;
                                    component.blogTV = 'blogCO0'
                                    wordsTestService = TestBed.get(WordsService)
                                }));


                                it('should create', () => {
                                    expect(component).toBeTruthy();
                                });

                                describe('blogCO0',()=>{

                                    beforeEach(() => {      
                                        component.blogTV = 'blogCO0'
                                        fixture.detectChanges();
                                        wordsServiceStub.blogResizeTestEventSubscription0 = wordsServiceStub.blogResizeEvent$.subscribe(()=>{
                                            wordsServiceStub.blogCO0.quantity[1][0].metadata.navigationCO0.next('0px')
                                        })         
                                        wordsServiceStub.blogCO0.quantity[1][0].metadata.navigationCO0.next('0px')        
                                    });   
                                    
                                    afterEach(()=>{
                                        wordsServiceStub.blogResizeTestEventSubscription0.unsubscribe()
                                    })    

                                    it('should have the blogMyElements populated with items related to the blog', () => {
                                        wordsServiceStub.blogResizeTestEventSubscription0 = wordsServiceStub.blogResizeEvent$.subscribe(()=>{
                                            wordsServiceStub.blogCO0.quantity[1][0].metadata.navigationCO0.next('0px')
                                        })         
                                        component.blogMyElements._results.forEach((x,i) => {
                                            expect(x.nativeElement.id).toMatch(/\bb_l_o_g_./)
                                        })
                                    });  

                                    it('should be able to use Modernizr', () => {
                                        expect(window.Modernizr._version).toMatch('3.8.0')
                                    });      
                                })

                                });
                    
*/ 


  

export function getTextWidth(   devObj:{elementText:string,font:string}   ){
    var canvas = document.createElement("canvas");
    var ctx = canvas.getContext("2d");
    ctx.font = devObj.font;  // This can be set programmaticly from the element's font-style if desired
    return ctx.measureText(devObj.elementText).width;
}

export function numberParse(   dimension:any   ){
    dimension = parseFloat(dimension.split("p")[0])
    return dimension;
}

export function resize(   devObj:any   ){
    // console.log(   devObj   )
    let result = null


    if(   devObj.misc === undefined   ){
        devObj.misc = [.12]
    }
    

    if(   devObj.type === 'direct'   ){


        result = 
        (
            devObj.default -
            (
                devObj.containDefault   -
                devObj.containActual    
            ) * 
            devObj.misc[0]
        )


    }
    
    else if(   devObj.type !== 'direct' ){


        result = (
            devObj.default *
            (
                (   
                    (  
                        devObj.containActual  /
                        devObj.containDefault   
                    ) -
                    devObj.misc[0]   
                ) 
            )
        ) 


    }
    return result = result > devObj.default  ? 
        devObj.default.toString() + "px"      :
        result.toString() + "px"     
}


export function xPosition(devObj){


    if(   devObj.containPos === undefined   ){


        devObj.containPos = .5
        
        
    }


    if(   devObj.targetPos === undefined   ){

        
        devObj.targetPos = .5
        
        
    }
    
    return (    
        (   devObj.contain*devObj.containPos   ) -  
        (   devObj.target*devObj.targetPos   )   
    ).toString() + "px"; 
}


function appGenerateSelector(   devObj   ){
    var a = 0;
    var string = '';
    while(   a!==devObj.times   ){
        string += devObj.val +a+','
        a+=1
    }
    return string.slice(0,-1)
}


var defaultCO:componentObject 
// {
//     metadata:{

//     },
//     quantity:[
//         [
//             {
//                 quantity:[[3]],
//                 bool:[['true']], 
//                 val:[
//                     ['_App']
//                 ], 
//                 text:[
//                         []
//                 ],
//                 metadata:{
//                     mouseover:[
//                         [],
//                         [],
//                         []
//                     ],
//                     mouseout:[
//                         [],
//                         [],
//                         []
//                     ]                            
//                 },
//                 ngStyle:[
//                     [
//                         {
//                             position:'absolute',
//                             top:'0px',
//                             width:'100%',
//                             'z-index':'1'
//                         }
//                     ]                         
//                 ],
//                 ngCssDefault:[
//                     [
//                         {
//                             position:'absolute',
//                             top:'0px',
//                             width:'100%',
//                             'z-index':'1'
//                         }
//                     ]                         
//                 ],                   
//                 extras:[
//                     {},                        
//                 ]
//             }                    
//         ],
//         [
//             {
//                 signature:'containing',
//                 quantity:[[3]],
//                 bool:[['div']], 
//                 val:[
//                     ['_Board'],
//                 ], 
//                 text:[
//                     [],
//                 ],
//                 metadata:{
//                     CO10:new Subject<any>(),
//                     mouseover:[
//                         [],
//                         [],
//                         []
//                     ],
//                     mouseout:[
//                         [],
//                         [],
//                         []
//                     ]                                                               
//                 },
//                 ngStyle:[
//                     [
//                         {
//                             position:'absolute',
//                             height:'750px',
//                             width:'100%',
//                             'z-index':'1',
//                             // 'background-color':'rgb(255, 192, 203)',
//                             top:'0px'
//                         }
//                     ]                    
//                 ],
//                 ngCssDefault:[
//                     [
//                         {
//                             position:'absolute',
//                             height:'700px',
//                             width:'100%',
//                             'z-index':'1',
//                             // 'background-color':'rgb(255, 192, 203)',
//                             top:'0px'
//                         }
//                     ]                    
//                 ],                   
//                 extras:[
//                     {}                       
//                 ]
//             },                     
//             {
//                     signature:'content',
//                     quantity:[[],[3],[3]],
//                     bool:[[],['h1'],['div']], 
//                     val:[
//                         [],
//                         [
//                         '_SubTitle'                             
//                         ],
//                         [
//                             '_Menu',
//                         ]
//                     ], 
//                     text:[
//                         [],
//                         [
//                             "my componentObject works",
//                         ],
//                         []
//                     ],
//                     metadata:{
//                         mouseover:[
//                             [],
//                             [],
//                             [
//                                 {
//                                     fn:null,
                                    
//                                 }, 
//                                 {
//                                     fn:null,
                                    
//                                 }, 
//                                 {
//                                     fn:null,
                                    
//                                 },                                                                                                                          
//                             ]
//                         ],
//                         mouseout:[
//                             [],
//                             [],
//                             [
//                                 {
//                                     fn:null,
                                    
//                                 }, 
//                                 {
//                                     fn:null,
                                    
//                                 }, 
//                                 {
//                                     fn:null,
                                    
//                                 },                                                                                                                          
//                             ]
//                         ]                                
//                     },
//                     ngStyle:[
//                         [],
//                         [
//                             {
//                                 position:'absolute',
//                                 'z-index':'2',
//                                 'font-family':'Montserrat',
//                                 'left':'32.5px'
//                             }                                                                                                                                                                                                                                                        
//                         ],
//                         [
//                             {
//                                 position:'absolute',
//                                 height:'750px',
//                                 width:'250px',
//                                 'z-index':'1',
//                                 'background-color':'rgb(255, 192, 203)',
//                                 top:'0px'
//                             }                                                                        
//                         ]                    
//                     ],  
//                     ngCssDefault:[
//                         [],
//                         [
//                             {
//                                 position:'absolute',
//                                 'z-index':'2',
//                                 'font-family':'Montserrat',
//                                 'left':'32.5px'
//                             }                                                                                                                                                                                                                                                        
//                         ],
//                         [
//                             {
//                                 position:'absolute',
//                                 height:'750px',
//                                 width:'250px',
//                                 'z-index':'1',
//                                 'background-color':'rgb(255, 192, 203)',
//                                 top:'0px'
//                             }                                                                        
//                         ]                    
//                     ],     
//                     extras:[
//                         {},
//                         {
//                             bool:'false'
//                         }                         
//                     ],                        
//                     generator:this.appConsecutiveGenerator
//             },                                                                                                                   
//         ]
//     ],
//     generator:(function(){
//         return function *generator() {
//             var index = 1;
//             while (true)
//             yield index;
//         }()
//     })()             
// }      