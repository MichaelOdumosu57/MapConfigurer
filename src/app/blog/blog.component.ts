import {   Component, OnInit,Input,ViewChildren,Directive,Inject,AfterViewInit, AfterContentInit,OnDestroy,ChangeDetectorRef,ChangeDetectionStrategy   } from '@angular/core';
import {   WordsService   } from '../words.service';
import {   BrowserModule,platformBrowser,disableDebugTools   } from '@angular/platform-browser';
import {   WINDOW   } from '../window.service';
import {   fromEvent,interval,combineLatest,Subject   } from 'rxjs';
import {   take,timeout   } from 'rxjs/operators';
import {   zChildren, getTextWidth,numberParse,resize,xPosition   } from '../customExports'


@Component({
    selector: 'app-blog',
    templateUrl: './blog.component.html',
    styleUrls: ['./blog.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
  })
export class BlogComponent implements OnInit,AfterViewInit,OnDestroy {


    @ViewChildren('myBlogVal') blogMyElements: any;

    constructor(
        private wordsService: WordsService,
        @Inject(WINDOW) private window: Window,
        private ref: ChangeDetectorRef
    ) { }

  @Input() blogTV:string | any;

  ngOnInit() {
    console.log(this.blogTV + ' ngOnInit fires one remount')
  }

  ngAfterViewInit() {
     
    
    console.log( this.blogTV+ ' ngAfterViewInit fires one remount') 
    this.wordsService.blogLoadEvent$ = fromEvent(this.window,'load')
    this.wordsService.blogResizeEvent$ = fromEvent(this.window,'resize')

    if(   this.blogTV === 'blogCO0'   ){

        // console.log(this.blogMyElements._results)
        let zChild:zChildren[] =[{
            element: this.window.document.querySelector('app-blog[ng-reflect-blog-t-v='+this.blogTV+']') as HTMLElement,
            style:this.wordsService[this.blogTV].quantity[0][0].ngStyle[0][0],
            bool:this.wordsService[this.blogTV].quantity[0][0].bool[0][0]
        }]     
        let zCheckpoint = []                        
        this.blogMyElements._results.map((x:any,i:any)=>{


            if(   x.nativeElement.id === 'b_l_o_g_Board'   ){
                zCheckpoint.push(i)
            }   
            
            if(   x.nativeElement.id === 'b_l_o_g_Title'   ){
                zCheckpoint.push(i)
            }               
            
        
        })      
        // console.log(zCheckpoint)
        let zGrid = {
            a:0, 
            b:0, 
        }  
        zCheckpoint.map((y:any,j:any)=>{
            zGrid.a = 0;
            (function(qq){
                return qq.blogMyElements._results.length === 1 ? qq.blogMyElements._results : qq.blogMyElements._results.slice(y,zCheckpoint[j+1])
            })(this).map((x:any,i:any)=>{    
                while(   
                    this.wordsService[this.blogTV].quantity[1][j].quantity[zGrid.a][zGrid.b] === undefined &&   
                    zGrid.b +1 > this.wordsService[this.blogTV].quantity[1][j].quantity[zGrid.a].length
                ){
                    zGrid.a +=1
                }

                if(   x.nativeElement.id === this.wordsService[this.blogTV].quantity[1][j].val[zGrid.a][zGrid.b]   &&
                    (   
                        this.wordsService[this.blogTV].quantity[1][j].bool[zGrid.a][zGrid.b] !== 'false'                         
                    )    
                ){               



                    zChild.push({
                        element:x.nativeElement as HTMLElement,
                        style:this.wordsService[this.blogTV].quantity[1][j].ngStyle[zGrid.a][zGrid.b],
                        innerText: this.wordsService[this.blogTV].quantity[1][j].text[zGrid.a][zGrid.b],
                        bool:this.wordsService[this.blogTV].quantity[1][j].bool[zGrid.a][zGrid.b],
                        cssDefault:this.wordsService[this.blogTV].quantity[1][j].ngCssDefault[zGrid.a][zGrid.b]
                    })
                    

                    if(   this.wordsService[this.blogTV].quantity[1][j].quantity[zGrid.a][zGrid.b+1] === undefined   ){


                        zGrid.a += 1
                        zGrid.b = 0       
                        
                        
                    }


                    
                    else if(   true   ){


                        zGrid.b += 1       
                        
                        
                    }


                }
                
                
            })
            
        })      
        console.log(   zChild   ) 


        if(  
            this.window.document.querySelector('app-navigation[ng-reflect-navigation-template-variable=navigationComponentObject0]')  !== null   
        ){


            this.wordsService.blogResizeEventSubscription1 =   this.wordsService[this.blogTV].quantity[1][0].metadata.navigationCO0.subscribe((data)=>{
                // console.warn(data)
                // console.log(zChild[0].style['top'])
                zChild[1].style['top'] = data[0][1]  
                this.ref.detectChanges()                         
            })
           
            
            
        }  
        

        this.wordsService.blogResizeEventSubscription0 = this.wordsService.blogResizeEvent$.subscribe(()=>{


            if( 
                this.window.document.querySelector('app-footer[ng-reflect-footer-template-variable=footerComponentObject0]')  !== null
            ){


                this.wordsService.footerComponentObject0.quantity[1][1].metadata.blogCO0.next([
                    this.window.getComputedStyle(zChild[1].element).top,
                    this.window.getComputedStyle(zChild[1].element).height 
                ]) 
                
                
            }  
            
            
        })


        if(  
            this.window.document.querySelector('app-navigation[ng-reflect-navigation-template-variable=navigationComponentObject0]')  !== null   
        ){


            this.wordsService.blogResizeEventSubscription1 =   this.wordsService[this.blogTV].quantity[1][0].metadata.navigationCO0.subscribe((data)=>{
                // console.warn(data)
                // console.log(zChild[0].style['top'])
                zChild[1].style['top'] = data[1]
                this.wordsService.blogCOTopSubject.next( numberParse(data[1])   )
                this.ref.detectChanges()                         
            })
           
            
            
        } 

        this.wordsService.blogCOTopSubscription = this.wordsService.blogCOTopSubject.subscribe((cssTop)=>{
            zChild.slice(1).forEach((x,i)=>{            
                x.style['top'] = cssTop.toString() + 'px'
            })  
        })
         
        
        
    }
    
        this.wordsService.appViewComplete.next(
            (function(qq){
                qq.wordsService.appViewCompleteArray.push(   qq.blogTV   )
            })(this)
        )      
  }  

  ngOnDestroy(){


    if(   this.blogTV  === 'blogCO0'   ){
        
        
        this.wordsService.blogResizeEventSubscription0.unsubscribe()
        this.wordsService.blogCOTopSubscription.unsubscribe()


        if(   
            this.wordsService[this.blogTV].quantity[1][1].metadata.navigationCO0 !== undefined &&
            this.wordsService.blogResizeEventSubscription1 !== undefined 
        ){
            
            // console.log(   this.wordsService[this.footerTemplateVariable].quantity[1][1].metadata.wordsCO2.closed   )
            if(  !this.wordsService[this.blogTV].quantity[1][1].metadata.navigationCO0.closed   ){


                this.wordsService.blogResizeEventSubscription1.unsubscribe()
            
        
            }    
            

        }        

    }
    
    
  }
}
