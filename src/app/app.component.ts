import {   Component,OnInit,AfterViewInit,OnDestroy,ViewChildren,Inject,ElementRef,ChangeDetectorRef,ChangeDetectionStrategy  } from '@angular/core';
import {   WordsService   } from './words.service';
import {   fromEvent,Subject,Observable,of,Subscription,interval   } from 'rxjs';
// import {   Router,RouterEvent } from '@angular/router';
import {   WINDOW   } from './window.service';
import {   catchError,take,timeout   } from 'rxjs/operators'

declare global {
    interface Window { Modernizr: any; }
}

window.Modernizr = window.Modernizr || {}

function appGenerateSelector(   devObj   ){
    var a = 0;
    var string = '';
    while(   a!==devObj.times   ){
        string += devObj.val +a+','
        a+=1
    }
    return string.slice(0,-1)
}



  
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    // changeDetection: ChangeDetectionStrategy.OnPush
})


export class AppComponent implements OnInit,AfterViewInit,OnDestroy {
    
    // @ViewChildren(appGenerateSelector({val:'appWordsVal',times:3}), { read: ElementRef })  app_wordsConponentElements: any;
    // @ViewChildren(appGenerateSelector({val:'appWordsVal',times:3}))  app_wordsComponentReferences: any;
    // @ViewChildren(appGenerateSelector({val:'appNavigationVal',times:1}), { read: ElementRef })  app_NavigationConponentElements: any;
    // @ViewChildren(appGenerateSelector({val:'appNavigationVal',times:1}))  app_NavigationComponentReferences: any;   
    // @ViewChildren(appGenerateSelector({val:'appOverlayVal',times:5}), { read: ElementRef })  app_OverlayConponentElements: any;
    // @ViewChildren(appGenerateSelector({val:'appOverlayVal',times:5}))  app_OverlayComponentReferences: any;        
 
    
    constructor(
        private wordsService: WordsService,
        @Inject(WINDOW) private window: Window,
        private ref:ChangeDetectorRef
    ) {}
    
    appTitle:string = 'WindsorEmpire'
    
 
    ngOnInit(){
        console.log('app ngOnInit fires on mount')

        
        
        if(   
            this.window.name !== '/'   &&
            this.window.name !== '/home'   &&
            this.window.name !== '/about'   &&
            this.window.name !== '/services'   &&
            this.window.name !== '/projects'   &&
            this.window.name !== '/blog'   &&  
            this.window.name !== '/contact'                         
        ){   
 

            this.window.name = '/home'


        }


        if(   this.wordsService.appReloaded === 'true'){


            this.wordsService.appCurrentNav = this.window.name 


        }            
              
        
        this.wordsService.appViewComplete.subscribe(()=>{
            // console.log(this.wordsService.appCurrentNav)
            // console.log(   this.window.location   )
            // console.log(
            //     this.window.name,
            //     this.wordsService.appReloaded
            // )

            
            if(   this.window.name === ''   ){


                this.window.name = '/'


            }
       

            if(   this.wordsService.appReloaded !== 'true'){


                this.window.name = this.wordsService.appCurrentNav
    
    
            }            


            if(   this.wordsService.appCurrentNav  === '/' || this.wordsService.appCurrentNav  === '/home'    ){


                let arr = [
                    'navigationComponentObject0',
                    'overlayComponentObject4',
                    'wordsComponentObject1',
                    'wordsComponentObject0',
                    'wordsComponentObject2',
                    'footerComponentObject0'
                ].sort()
                this.wordsService.appViewCompleteArray = this.wordsService.appViewCompleteArray.sort()
                // console.log(    arr.filter((x,i) =>{ 
                //     return this.wordsService.appViewCompleteArray[i] !== x 
                // }),
                // arr,
                // this.wordsService.appViewCompleteArray
                // )


                if(
                    arr.filter((x,i) =>{ 
                        return this.wordsService.appViewCompleteArray[i] !== x 
                    }).length === 0 && arr.length === this.wordsService.appViewCompleteArray.length
                ){

    
                    console.log('dispatched')
                    try{
                        let event = new Event('resize')
                        fromEvent(this.window,'load').subscribe(()=>{
                            this.window.dispatchEvent(event)      
                            this.window.dispatchEvent(event)                             
                        })
                        this.window.dispatchEvent(event)      
                        this.window.dispatchEvent(event) 
                        this.window.dispatchEvent(event) 
                        this.window.dispatchEvent(event) 
                        this.window.dispatchEvent(event) 
                        this.window.dispatchEvent(event)      
                        this.window.dispatchEvent(event) 
                        this.window.dispatchEvent(event) 
                        this.window.dispatchEvent(event) 
                        this.window.dispatchEvent(event)                         
                    }
                    catch(e){
                        let eventLegacyLoad = this.window.document.createEvent("Event");
                        eventLegacyLoad.initEvent("resize", false, true);
                        try{
                            fromEvent(this.window,'load').subscribe(()=>{
                                this.window.dispatchEvent(eventLegacyLoad)      
                                this.window.dispatchEvent(eventLegacyLoad)                             
                            })
                            this.window.dispatchEvent(    eventLegacyLoad    )
                            this.window.dispatchEvent(    eventLegacyLoad    )
                            this.window.dispatchEvent(    eventLegacyLoad    )  
                            this.window.dispatchEvent(    eventLegacyLoad    )
                            this.window.dispatchEvent(    eventLegacyLoad    )
                            this.window.dispatchEvent(    eventLegacyLoad    )
                            this.window.dispatchEvent(    eventLegacyLoad    )
                            this.window.dispatchEvent(    eventLegacyLoad    )   
                        }    
                        catch(e){
                            this.window.dispatchEvent(    eventLegacyLoad    )
                            this.window.dispatchEvent(    eventLegacyLoad    )
                            this.window.dispatchEvent(    eventLegacyLoad    )  
                            this.window.dispatchEvent(    eventLegacyLoad    )
                            this.window.dispatchEvent(    eventLegacyLoad    )
                            this.window.dispatchEvent(    eventLegacyLoad    )
                            this.window.dispatchEvent(    eventLegacyLoad    )
                            this.window.dispatchEvent(    eventLegacyLoad    )                             
                        }                                                                    
                    }  
                    this.wordsService.appViewCompleteArray = []


                    if(   this.wordsService.appReloaded === 'true'){


                        this.wordsService.appReloaded = 'false'
        
        
                    } 
                    

                }
                
                
            }


            if(   this.wordsService.appCurrentNav === '/about'   ){


                let arr = [
                    'navigationComponentObject0',
                    'overlayComponentObject3',
                    'wordsComponentObject5',
                    'footerComponentObject0'
                ].sort()
                this.wordsService.appViewCompleteArray = this.wordsService.appViewCompleteArray.sort()
                // console.log(    arr.filter((x,i) =>{ 
                //     return this.wordsService.appViewCompleteArray[i] !== x 
                // }),
                // arr,
                // this.wordsService.appViewCompleteArray
                // )


                if(
                    arr.filter((x,i) =>{ 
                        return this.wordsService.appViewCompleteArray[i] !== x 
                    }).length === 0 && arr.length === this.wordsService.appViewCompleteArray.length
                ){


                    console.log('dispatched')
                    try{
                        let event = new Event('resize')
                        this.window.dispatchEvent(event)      
                        this.window.dispatchEvent(event) 
                    }
                    catch(e){
                        let eventLegacyLoad = this.window.document.createEvent("Event");
                        eventLegacyLoad.initEvent("resize", false, true);
                        this.window.dispatchEvent(    eventLegacyLoad    )
                        this.window.dispatchEvent(    eventLegacyLoad    )   
                             
                    }  
                    this.wordsService.appViewCompleteArray = []


                    if(   this.wordsService.appReloaded === 'true'){


                        this.wordsService.appReloaded = 'false'
        
        
                    } 


                }    
                
                
            }
            
            
            if(   this.wordsService.appCurrentNav === '/services'   ){


                let arr = [
                    'navigationComponentObject0',
                    'overlayComponentObject0',
                    'footerComponentObject0',
                    'wordsComponentObject3',
                    'wordsComponentObject4',
                    // 'wordsComponentObject2',

                ].sort()
                this.wordsService.appViewCompleteArray = this.wordsService.appViewCompleteArray.sort()
                // console.log(    arr.filter((x,i) =>{ 
                //     return this.wordsService.appViewCompleteArray[i] !== x 
                // }),
                // arr,
                // this.wordsService.appViewCompleteArray
                // )


                if(
                    arr.filter((x,i) =>{ 
                        return this.wordsService.appViewCompleteArray[i] !== x 
                    }).length === 0 && arr.length === this.wordsService.appViewCompleteArray.length
                ){


                    console.log('dispatched')
                    try{
                        let event = new Event('resize')
                        this.window.dispatchEvent(event)      
                        this.window.dispatchEvent(event) 
                    }
                    catch(e){
                        let eventLegacyLoad = this.window.document.createEvent("Event");
                        eventLegacyLoad.initEvent("resize", false, true);
                        this.window.dispatchEvent(    eventLegacyLoad    )
                        this.window.dispatchEvent(    eventLegacyLoad    )   
                             
                    }   
                    this.wordsService.appViewCompleteArray = []


                    if(   this.wordsService.appReloaded === 'true'){


                        this.wordsService.appReloaded = 'false'
        
        
                    }    
                    
                    
                }


            }
            
            
            if(   this.wordsService.appCurrentNav === '/projects'   ){


                let arr = [
                    'navigationComponentObject0',
                    'overlayComponentObject1',
                    'footerComponentObject0',
                    'wordsComponentObject6',
                    'wordsComponentObject7',
                    'wordsComponentObject8'
                ].sort()
                this.wordsService.appViewCompleteArray = this.wordsService.appViewCompleteArray.sort()
                // console.log(    arr.filter((x,i) =>{ 
                //     return this.wordsService.appViewCompleteArray[i] !== x 
                // }),
                // arr,
                // this.wordsService.appViewCompleteArray
                // )


                if(
                    arr.filter((x,i) =>{ 
                        return this.wordsService.appViewCompleteArray[i] !== x 
                    }).length === 0 && arr.length === this.wordsService.appViewCompleteArray.length
                ){


                    console.log('dispatched')
                    try{
                        let event = new Event('resize')
                        this.window.dispatchEvent(event)      
                        this.window.dispatchEvent(event) 
                    }
                    catch(e){
                        let eventLegacyLoad = this.window.document.createEvent("Event");
                        eventLegacyLoad.initEvent("resize", false, true);
                        this.window.dispatchEvent(    eventLegacyLoad    )
                        this.window.dispatchEvent(    eventLegacyLoad    )   
                             
                    } 
                    this.wordsService.appViewCompleteArray = []


                    if(   this.wordsService.appReloaded === 'true'){


                        this.wordsService.appReloaded = 'false'
        
        
                    } 

                    
                }


            }   
            
            
            if(     this.wordsService.appCurrentNav === '/blog'    ){


                let arr = [
                    'navigationComponentObject0',
                    'overlayComponentObject5',
                    'blogCO0',
                    'footerComponentObject0'
                ].sort()
                this.wordsService.appViewCompleteArray = this.wordsService.appViewCompleteArray.sort()
                // console.log(    arr.filter((x,i) =>{ 
                //     return this.wordsService.appViewCompleteArray[i] !== x 
                // }),
                // arr,
                // this.wordsService.appViewCompleteArray
                // )


                if(
                    arr.filter((x,i) =>{ 
                        return this.wordsService.appViewCompleteArray[i] !== x 
                    }).length === 0 && arr.length === this.wordsService.appViewCompleteArray.length 
                ){


                    console.log('dispatched')
                    try{
                        let event = new Event('resize')
                        fromEvent(this.window,'load').subscribe(()=>{
                            this.window.dispatchEvent(event)      
                            this.window.dispatchEvent(event)                             
                        })               
                        this.window.dispatchEvent(event)      
                        this.window.dispatchEvent(event)                                                           
                    }
                    catch(e){
                        let eventLegacyLoad = this.window.document.createEvent("Event");
                        eventLegacyLoad.initEvent("resize", false, true);                        
                        try{
                        fromEvent(this.window,'load').subscribe(()=>{
                            this.window.dispatchEvent(   eventLegacyLoad   )      
                            this.window.dispatchEvent(   eventLegacyLoad   )                             
                        })               
                        this.window.dispatchEvent(event)      
                        this.window.dispatchEvent(event)                                      
                        }       
                        catch(e){
                            this.window.dispatchEvent(event)      
                            this.window.dispatchEvent(event)                             
                        }                   
                    } 
                    this.wordsService.appViewCompleteArray = []


                    if(   this.wordsService.appReloaded === 'true'){


                        this.wordsService.appReloaded = 'false'
        
        
                    } 

                    
                }


            } 
            
            
            if(   this.wordsService.appCurrentNav === '/contact'   ){


                let arr = [
                    'navigationComponentObject0',
                    'overlayComponentObject2',
                    'wordsComponentObject9',
                    'footerComponentObject0'
                ].sort()
                this.wordsService.appViewCompleteArray = this.wordsService.appViewCompleteArray.sort()
                // console.log(    arr.filter((x,i) =>{ 
                //     return this.wordsService.appViewCompleteArray[i] !== x 
                // }),
                // arr,
                // this.wordsService.appViewCompleteArray
                // )


                if(
                    arr.filter((x,i) =>{ 
                        return this.wordsService.appViewCompleteArray[i] !== x 
                    }).length === 0 && arr.length === this.wordsService.appViewCompleteArray.length
                ){

                    console.log('dispatched')
                    try{
                        let event = new Event('resize')
                        this.window.dispatchEvent(event)      
                        this.window.dispatchEvent(event) 
                        fromEvent(this.window,'load').subscribe(()=>{
                            this.window.dispatchEvent(event)      
                            this.window.dispatchEvent(event)                             
                        })                        
                    }
                    catch(e){
                        let eventLegacyLoad = this.window.document.createEvent("Event");
                        eventLegacyLoad.initEvent("resize", false, true);
                        try{
                        this.window.dispatchEvent(    eventLegacyLoad    )
                        this.window.dispatchEvent(    eventLegacyLoad    )   
                        fromEvent(this.window,'load').subscribe(()=>{
                            this.window.dispatchEvent(eventLegacyLoad)      
                            this.window.dispatchEvent(eventLegacyLoad)                             
                        })        
                        }                
                        catch(e){
                            this.window.dispatchEvent(    eventLegacyLoad    )
                            this.window.dispatchEvent(    eventLegacyLoad    )                               
                        }
                    } 
                    this.wordsService.appViewCompleteArray = []


                    if(   this.wordsService.appReloaded === 'true'){


                        this.wordsService.appReloaded = 'false'
        
        
                    } 

                    
                }


            }    
            
            
        })
    }

    ngAfterViewInit(){
        console.log('app ngAfterViewInit fires on mount')
    }


    ngOnDestroy(){
    }
}


  
  
