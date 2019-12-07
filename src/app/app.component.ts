import {   Component,OnInit,ViewChildren,AfterViewInit,Inject,ElementRef  } from '@angular/core';
import {   WordsService   } from './words.service';
import {   fromEvent,Subject,Observable,of,Subscription,interval   } from 'rxjs';
import {   Router,RouterEvent } from '@angular/router';
import {   WINDOW   } from './window.service';
import {   catchError,take,timeout   } from 'rxjs/operators'



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
    styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit,AfterViewInit {
    
    @ViewChildren(appGenerateSelector({val:'appWordsVal',times:3}), { read: ElementRef })  app_wordsConponentElements: any;
    @ViewChildren(appGenerateSelector({val:'appWordsVal',times:3}))  app_wordsComponentReferences: any;
    @ViewChildren(appGenerateSelector({val:'appNavigationVal',times:1}), { read: ElementRef })  app_NavigationConponentElements: any;
    @ViewChildren(appGenerateSelector({val:'appNavigationVal',times:1}))  app_NavigationComponentReferences: any;   
    @ViewChildren(appGenerateSelector({val:'appOverlayVal',times:5}), { read: ElementRef })  app_OverlayConponentElements: any;
    @ViewChildren(appGenerateSelector({val:'appOverlayVal',times:5}))  app_OverlayComponentReferences: any;        
 
    
    constructor(
        private wordsService: WordsService,
        @Inject(WINDOW) private window: Window,
        
    ) { }
    
    appTitle:string = 'WindsorEmpire'
 
    ngOnInit(){
        this.wordsService.appRouterEventSubscription0 = this.wordsService.appRouterEvent$.subscribe((a)=>{
            
            
            if(   a.url !== undefined   ){


                if(   a.url === this.wordsService.appCurrentNav || 
                    (a.url === '/' && this.wordsService.appCurrentNav === '/home'   ) 
                ){


                    return


                }
                
                
                switch (   a.url   ){
                    case '/':  
                        this.wordsService.appCurrentNav = '/home'                   
                        break;
                    case '/home':        
                        this.wordsService.appCurrentNav = '/home'         
                        break;            
                    case '/about':     
                        this.wordsService.appCurrentNav = '/about'                            
                        break;   
                    case '/services':     
                        this.wordsService.appCurrentNav = '/services'                            
                        break;                                               
                    default:
                        break;
                }
                
                
            }

            
        })
    }
    // ngAfterViewInit() {


    //     // console.log(   this.app_wordsConponentElements ,this.app_wordsComponentReferences   )

    //     // DONE with Subject<Array<any[]>>
    //     for(let i in  this.app_wordsComponentReferences._results){
    //         this.wordsService.wordsMyElementsArray =[
    //             this.app_wordsConponentElements._results[i],
    //             ...this.app_wordsComponentReferences._results[i].wordsMyElements._results
    //         ]
    //         // this.wordsService.wordsMyElementsArray[i].forEach(element => {
    //         //     // console.log(element.nativeElement.id)
    //         // });
    //         this.wordsService.wordsComponentMonitor[this.app_wordsConponentElements._results[i].nativeElement.getAttribute('ng-reflect-words-template-variable')] = i
    //     }
    //     this.wordsService.wordsMyElements.next(this.wordsService.wordsMyElementsArray)

    //     // console.log(   this.app_NavigationConponentElements ,this.app_NavigationComponentReferences   )
    //     for(let i in  this.app_NavigationComponentReferences._results){
    //         this.wordsService.navigationMyElementsArray =[
    //             this.app_NavigationConponentElements._results[i],
    //             ...this.app_NavigationComponentReferences._results[i].navigationMyElements._results
    //         ]
    //         // this.wordsService.wordsMyElementsArray[i].forEach(element => {
    //         //     // console.log(element.nativeElement.id)
    //         // });
    //     }
    //     this.wordsService.navigationMyElements.next(this.wordsService.navigationMyElementsArray)        
    //     // console.log(this.wordsService.wordsMyElementsArray)

    //     for(let i in  this.app_OverlayComponentReferences._results){
    //         this.wordsService.overlayMyElementsArray =[
    //             this.app_OverlayConponentElements._results[i],
    //             ...this.app_OverlayComponentReferences._results[i].overlayMyElements._results
    //         ]
    //         // this.wordsService.wordsMyElementsArray[i].forEach(element => {
    //         //     // console.log(element.nativeElement.id)
    //         // });
    //         this.wordsService.overlayComponentMonitor[this.app_OverlayConponentElements._results[i].nativeElement.getAttribute('ng-reflect-overlay-template-variable')] = i
    //     }
    //     this.wordsService.overlayMyElements.next(this.wordsService.overlayMyElementsArray)         
    //     // DONE with Subject<Array<any[]>>
         
    // }
    ngAfterViewInit() {


        // console.log(   this.app_wordsConponentElements ,this.app_wordsComponentReferences   )

        // // DONE with Subject<Array<any[]>>
        // for(let i in  this.app_wordsComponentReferences._results){
        //     this.wordsService.wordsMyElementsArray.push([
        //         this.app_wordsConponentElements._results[i],
        //         ...this.app_wordsComponentReferences._results[i].wordsMyElements._results
        //     ])
        //     // this.wordsService.wordsMyElementsArray[i].forEach(element => {
        //     //     // console.log(element.nativeElement.id)
        //     // });
        //     this.wordsService.wordsComponentMonitor[this.app_wordsConponentElements._results[i].nativeElement.getAttribute('ng-reflect-words-template-variable')] = i
        // }
        // this.wordsService.wordsMyElements.next(this.wordsService.wordsMyElementsArray)

        // console.log(   this.app_NavigationConponentElements ,this.app_NavigationComponentReferences   )
        for(let i in  this.app_NavigationComponentReferences._results){
            this.wordsService.navigationMyElementsArray.push([
                this.app_NavigationConponentElements._results[i],
                ...this.app_NavigationComponentReferences._results[i].navigationMyElements._results
            ])
            // this.wordsService.wordsMyElementsArray[i].forEach(element => {
            //     // console.log(element.nativeElement.id)
            // });
        }
        this.wordsService.navigationMyElements.next(this.wordsService.navigationMyElementsArray)        
        // console.log(this.wordsService.wordsMyElementsArray)

        for(let i in  this.app_OverlayComponentReferences._results){
            this.wordsService.overlayMyElementsArray.push([
                this.app_OverlayConponentElements._results[i],
                ...this.app_OverlayComponentReferences._results[i].overlayMyElements._results
            ])
            // this.wordsService.wordsMyElementsArray[i].forEach(element => {
            //     // console.log(element.nativeElement.id)
            // });
            this.wordsService.overlayComponentMonitor[this.app_OverlayConponentElements._results[i].nativeElement.getAttribute('ng-reflect-overlay-template-variable')] = i
        }
        this.wordsService.overlayMyElements.next(this.wordsService.overlayMyElementsArray)         
        // DONE with Subject<Array<any[]>>


        // for(let i in this.app_FooterComponentReferences._results){
        //     this.wordsService.footerMyElementsArray.push([
        //         this.app_FooterConponentElements._results[i],
        //         ...this.app_FooterComponentReferences._results[i].footerMyElements._results
        //     ])
        //     // this.wordsService.footerComponentMonitor[this.app_FooterConponentElements._results[i].nativeElement.getAttribute('ng-reflect-footer-template-variable')] = i
        // }
        // this.wordsService.footerMyElements.next(this.wordsService.footerMyElementsArray)         
        // DONE with Subject<Array<any[]>>        
         
             
    }
}


  
  
