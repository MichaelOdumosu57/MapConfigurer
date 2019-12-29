import {   Component, OnInit,Input,ViewChildren,Directive,Inject,AfterViewInit, AfterContentInit,OnDestroy,ChangeDetectorRef,ChangeDetectionStrategy   } from '@angular/core';
import {   WordsService   } from '../words.service';
import {   BrowserModule,platformBrowser,disableDebugTools   } from '@angular/platform-browser';
import {   WINDOW   } from '../window.service';
import {   fromEvent,interval   } from 'rxjs';
import {   take,timeout   } from 'rxjs/operators';
import {   zChildren, getTextWidth,numberParse,resize,xPosition   } from '../customExports'


@Component({
    selector: 'app-words',
    templateUrl: './words.component.html',
    styleUrls: ['./words.component.css'],
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


        let zChild:zChildren[] =[{
            element: this.window.document.querySelector('app-blog[ng-reflect-blog-template-variable='+this.blogTV+']') as HTMLElement,
            style:this.wordsService[this.blogTV].quantity[0][0].ngStyle[0][0],
            bool:this.wordsService[this.blogTV].quantity[0][0].bool[0][0]
        }]     
        let zCheckpoint = []                        
        this.blogMyElements._results.map((x:any,i:any)=>{


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
                return qq.blogMyElements._results.length === 1 ? qq.blogMyElements._results : qq.blogMyElements._results.slice(y,zCheckpoint[j+1])
            })(this).map((x:any,i:any)=>{     
                // console.log(   x.nativeElement.id   )
                // console.log(   this.wordsService[this.wordsTemplateVariable].quantity[1][j].val  )
                // console.log(x)
                while(   
                    this.wordsService[this.blogTV].quantity[1][j].quantity[zGrid.a][zGrid.b] === undefined &&   
                    zGrid.b +1 > this.wordsService[this.blogTV].quantity[1][j].quantity[zGrid.a].length
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


                if(   x.nativeElement.id === this.wordsService[this.blogTV].quantity[1][j].val[zGrid.a][zGrid.b]   &&
                    (   
                        this.wordsService[this.blogTV].quantity[1][j].bool[zGrid.a][zGrid.b] === 'true' ||
                        this.wordsService[this.blogTV].quantity[1][j].bool[zGrid.a][zGrid.b] === 'link' ||
                        this.wordsService[this.blogTV].quantity[1][j].bool[zGrid.a][zGrid.b] === 'icon' ||
                        this.wordsService[this.blogTV].quantity[1][j].bool[zGrid.a][zGrid.b] === 'button' 
                    )    
                ){               


                    let domElement = x.nativeElement as HTMLElement;
                    zChild.push({
                        element:domElement,
                        style:this.wordsService[this.blogTV].quantity[1][j].ngStyle[zGrid.a][zGrid.b],
                        innerText: this.wordsService[this.blogTV].quantity[1][j].text[zGrid.a][zGrid.b],
                        bool:this.wordsService[this.blogTV].quantity[1][j].bool[zGrid.a][zGrid.b]
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
            // console.groupEnd()
        })      
        // console.log(   zChild   ) 

    }
    
    
  }  

  ngOnDestroy(){

  }
}
