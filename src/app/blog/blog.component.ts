import {   Component, OnInit,Input,ViewChildren,Directive,Inject,AfterViewInit, AfterContentInit,OnDestroy,ChangeDetectorRef,ChangeDetectionStrategy   } from '@angular/core';
import {   WordsService   } from '../words.service';
// import {   BrowserModule,platformBrowser,disableDebugTools   } from '@angular/platform-browser';
import {   WINDOW   } from '../window.service';
import {   fromEvent,interval,combineLatest,Subject   } from 'rxjs';
import {   take,timeout,distinctUntilKeyChanged,takeLast    } from 'rxjs/operators';
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
        let {blogArticle} = this.wordsService[this.blogTV].metadata
        blogArticle.start=zCheckpoint.slice(-1)[0] + 1
        blogArticle.startMod= (
            zCheckpoint.slice(-1)[0] + 1
        )%blogArticle.items
        // console.log(blogArticle)
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
                        cssDefault:this.wordsService[this.blogTV].quantity[1][j].ngCssDefault[zGrid.a][zGrid.b],
                        mouseover:this.wordsService[this.blogTV].quantity[1][j].metadata.mouseover[zGrid.a][zGrid.b],
                        mouseout:this.wordsService[this.blogTV].quantity[1][j].metadata.mouseout[zGrid.a][zGrid.b],
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
        // console.log(   zChild   )
        // console.log(   blogArticle  )
        Array.from(
            {length:8},
            (x,i)=>
                i+2
        ).map((x,i)=>{
            zChild[x].style['left'] = xPosition({
                contain:numberParse(   this.window.getComputedStyle(zChild[10].element).width   )+
                        numberParse(   this.window.getComputedStyle(zChild[10].element).left   ),
                target:numberParse(   this.window.getComputedStyle(zChild[x].element).width   )
            })     
            zChild[x].style['text-align'] = 'center'  
        })       
        this.ref.detectChanges() 
         

        // console.log(window.Modernizr)
            

        if(    
           this.window.Modernizr.csstransitions &&
           this.window.Modernizr.opacity   
        ){


            for(
                let zz of 
                Array.from(
                    {length:blogArticle.items},
                    (x,i)=>
                        i+blogArticle.start
                )                
            ){
                zChild[zz].style['left'] = (
                    numberParse(   this.window.getComputedStyle(   zChild[zz].element   ).left   ) +
                    250
                ).toString() + 'px'
                zChild[zz].style['opacity'] = '.5' 
                this.ref.detectChanges()
                zChild[zz].style['transition'] = 'left 1s, opacity 1s, font-size 1s, width 1s' 
            }
            zChild[blogArticle.start +1].style['width']  = (
                numberParse(   this.window.getComputedStyle(   zChild[blogArticle.start +1].element   ).width   ) -
                250
            ).toString() + 'px'
            zChild[blogArticle.start +1].style['transition'] = 'left 1s, opacity 1s, font-size 1s, width 1s' 
            this.ref.detectChanges() 


        }
        

        // console.log(
        //     this.window.document.querySelector('app-navigation[ng-reflect-navigation-template-variable=navigationComponentObject0]'), 
        //     this.wordsService.blogNavTestStub,
        //     (   typeof this.wordsService.blogNavTestStub === 'object'   )  
        // )


        if(  
            this.window.document.querySelector('app-navigation[ng-reflect-navigation-template-variable=navigationComponentObject0]')  !== null || 
            (   typeof this.wordsService.blogNavTestStub === 'object'   )  
        ){


            
            // a resize event on navigation
            this.wordsService.blogResizeEventSubscription1 =  this.wordsService[this.blogTV].quantity[1][0].metadata.navigationCO0.subscribe((data)=>{
                // console.warn(data)
                let cssTop = numberParse(data[1])
                // console.log(zChild[0].style['top'])
                zChild.slice(1,blogArticle.start+blogArticle.items).forEach((x,i)=>{
                
                
                    // console.log(x)
                    // console.log(x.cssDefault['top'])
                    if(   x.cssDefault['top'] !== undefined   ){
    
    
                        if(   x.style['top'].split('px').length !== 1){
                            
                            
                            x.style['top'] =(
                                numberParse(    x.cssDefault['top']   )+
                                cssTop
                            ).toString() + 'px'
    
                            
                        }
    
    
                        else if(   x.style['top'].split('px').length === 1){
                            
                            
                            x.style['top'] = cssTop.toString() + 'px'
    
                            
                        }
                    
                
                    }   
                    
                    
                    else if(   x.cssDefault['top'] === undefined   ){
    
    
                        x.style['top'] = cssTop.toString() + 'px'
    
    
                    }
                    // console.log(x.style['top'])
                    // console.warn(cssTop)                    
    
                        
                });     
                this.ref.detectChanges()                 
                this.wordsService.blogCOTopSubject.next(   cssTop   )
            })
           
            
            
        } 

        let prevResizeData = [null,null]
        
        // your resize is based on the resize in navigation so your good here
        this.wordsService.blogResizeEventSubscription0 = combineLatest(
            this.wordsService.blogCOTopSubject,
            this.wordsService.blogGetTitles(this.wordsService.blogTitles)
        ).pipe(
            // takeLast(3)
        ).subscribe((nullThisIdentifier)=>{
            console.log(nullThisIdentifier)
            let cssTop = nullThisIdentifier[0]
            let c = nullThisIdentifier[1]


            if(   
                prevResizeData[0] !== nullThisIdentifier[0] ||
                prevResizeData[1] !== nullThisIdentifier[1] 
            ){


                console.log('fire')
                console.log(c)
                this.wordsService.blogTitles = c.latestBlog
                // console.log(this.wordsService)
                // console.log(   this.wordsService[this.blogTV].quantity[1]   )
                // debugger    
                this.wordsService[this.blogTV].quantity[1].splice(4)
                this.wordsService[this.blogTV].quantity[1].push(
                    ...Array.from(
                        Array(this.wordsService.blogTitles.length),
                        (x,j)=>{
                            let a = JSON.parse(JSON.stringify(this.wordsService[this.blogTV].quantity[1][3]))
                            a.signature = 'blog article menu' + j    
                            // console.log(this.wordsService.blogTitles)
                            a.text[1][0] = this.wordsService.blogTitles[j]                             
                            for(let y of [[1,0],[2,0],[2,1]]){
                                a.ngStyle[y[0]][y[1]].top = (
                                    numberParse(   this.wordsService[this.blogTV].quantity[1][3].ngStyle[y[0]][y[1]].top   ) +
                                    (
                                        (j+1)
                                        * numberParse(   this.wordsService[this.blogTV].quantity[1][3].ngStyle[2][0].height   )
                                    )+
                                    (
                                        10 *(j+1)
                                    )
                                ).toString()+ 'px'
                            }                                   
                            // console.log(   this.wordsService[this.blogTV].quantity[1])
                            return a
                        }
                    )
                )
                this.ref.detectChanges()
                // console.log(   zChild.slice(12)   )                      
                // console.log(   document.querySelectorAll('app-blog *')   )
                // debugger
                zChild =[{
                    element: this.window.document.querySelector('app-blog[ng-reflect-blog-t-v='+this.blogTV+']') as HTMLElement,
                    style:this.wordsService[this.blogTV].quantity[0][0].ngStyle[0][0],
                    bool:this.wordsService[this.blogTV].quantity[0][0].bool[0][0]
                }]     
                zCheckpoint = []                        
                this.blogMyElements._results.map((x:any,i:any)=>{
        
        
                    if(   x.nativeElement.id === 'b_l_o_g_Board'   ){
                        zCheckpoint.push(i)
                    }   
                    
                    if(   x.nativeElement.id === 'b_l_o_g_Title'   ){
                        zCheckpoint.push(i)
                    }               
                    
                
                })      
                // console.log(zCheckpoint)
                zGrid = {
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
                                cssDefault:this.wordsService[this.blogTV].quantity[1][j].ngCssDefault[zGrid.a][zGrid.b],
                                mouseover:this.wordsService[this.blogTV].quantity[1][j].metadata.mouseover[zGrid.a][zGrid.b],
                                mouseout:this.wordsService[this.blogTV].quantity[1][j].metadata.mouseout[zGrid.a][zGrid.b]                                    
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
                // console.log(   zChild.slice(-2,-1)  )     
                // console.log(zChild)                       
            }


            if(  
                this.window.Modernizr.opacity &&
                this.window.Modernizr.csstransitions
            ){    
                
            
                zChild.slice(   blogArticle.start    ).forEach((x,i)=>{
                    let ii =i + blogArticle.start - blogArticle.startMod


                    if(   ii % blogArticle.items   === 0 ){
                        // console.log(x.innerText)

                        while(
                            //problems on safari tablet
                            getTextWidth({
                                elementText:x.innerText,
                                font:x.style['font-size'] + 
                                " " +
                                x.style['font-family']
                            }) >=
                            (
                                numberParse(   this.window.getComputedStyle(zChild[1].element).width   ) -
                                numberParse(   this.window.getComputedStyle(x.element).left  )     
                            )   &&
                            (
                                numberParse(   this.window.getComputedStyle(zChild[1].element).width   ) -
                                numberParse(   this.window.getComputedStyle(x.element).left  )     
                            ) >0                                                          
                        ){
                            // console.log('its me')
                            x.style['font-size'] = (
                                numberParse(   x.style['font-size']   ) -1
                            ).toString() + 'px'
                            this.ref.detectChanges()
                        };
                        
                        
                    }


                    x.mouseover.fn = ()=>{
                        // console.log(
                        //     ii,
                        //     ii%3,
                        //     Array.from(
                        //         {length:3},
                        //         (y,j)=>
                        //             ii - (ii%3) +j +blogArticle.startMod
                        //     )
                        // )
                        Array.from(
                            {length:blogArticle.items},
                            (y,j)=>
                                (ii) - ((ii)%blogArticle.items) +j +blogArticle.startMod
                        ).map((z,k)=>{
                        
                            
                            if(   k === 0   ){
                            
                                
                                zChild[z].style['font-size'] = zChild[z].cssDefault['font-size']  
                                this.ref.detectChanges()
                                // while(
                                //     //problems on safari tablet
                                //     getTextWidth({
                                //         elementText:zChild[z].innerText,
                                //         font:zChild[z].style['font-size'] + 
                                //         " " +
                                //         zChild[z].style['font-family']
                                //     }) <=
                                //     (
                                //         numberParse(   this.window.getComputedStyle(zChild[1].element).width   ) -
                                //         numberParse(   zChild[z].cssDefault['left']   )     
                                //     )                        
                                // ){
                                //     zChild[z].style['font-size'] = (
                                //         numberParse(   zChild[z].style['font-size']   ) +1
                                //     ).toString() + 'px'
                                //     this.ref.detectChanges()
                                // }                           


                            }


                            zChild[z].style['left'] = zChild[z].cssDefault['left']   


                            if(   k===1   ){


                                this.ref.detectChanges()
                                zChild[z].style['width'] = (
                                    numberParse(    this.window.getComputedStyle(   zChild[1].element   ).width    ) -
                                    numberParse(    zChild[z].cssDefault['left']    ) 
                                ).toString() + 'px'                                      
                                
                                
                            }

                    
                            zChild[z].style['opacity'] = 1
                        })                                                            
                        this.ref.detectChanges()


                    }
                    x.mouseout.fn = ()=>{                              
                        Array.from(
                            {length:blogArticle.items},
                            (y,j)=>
                                (ii) - ((ii)%blogArticle.items) +j + blogArticle.startMod
                        ).map((z,k)=>{
                            zChild[z].style['left'] =(
                                numberParse(   zChild[z].cssDefault['left']   ) +
                                250
                            ).toString() + 'px'
                            this.ref.detectChanges()


                            if(   k === 0   ){
                            
                            
                                while(
                                    //problems on safari tablet
                                    getTextWidth({
                                        elementText:zChild[z].innerText,
                                        font:zChild[z].style['font-size'] + 
                                        " " +
                                        zChild[z].style['font-family']
                                    })  >=
                                    (
                                        numberParse(   this.window.getComputedStyle(zChild[1].element).width   ) -
                                        (
                                            numberParse(   zChild[z].cssDefault['left']   ) +
                                            250                                                
                                        )     
                                    )                        
                                ){
                                    zChild[z].style['font-size'] = (
                                        numberParse(   zChild[z].style['font-size']   ) -1
                                    ).toString() + 'px'
                                    this.ref.detectChanges()
                                }          


                            }


                            if(   k===1   ){


                                this.ref.detectChanges()
                                zChild[z].style['width'] = (
                                    numberParse(    this.window.getComputedStyle(   zChild[1].element   ).width    ) -
                                    numberParse(    zChild[z].cssDefault['left']    ) - 
                                    250
                                ).toString() + 'px'

                                
                            }


                            zChild[z].style['opacity'] = '.5'
                        })                                      
                        this.ref.detectChanges() 
                        setTimeout(() => {
                            zChild[ii - (ii%blogArticle.items)].mouseover.assoc = null
                        }, 1000);  
                        zChild[ii - (ii%blogArticle.items)].mouseover.exit = false                                   
                    }                        
                    this.ref.detectChanges()
                })           
                this.ref.detectChanges() 
            

            }                 
                 

            let blogArticleTitleGreatest = 0
            zChild.slice(   blogArticle.start    ).forEach((x,i)=>{
                let ii = i + blogArticle.start - blogArticle.startMod


                if(   ii % 3 === 1   ){


                    let hold =   x.style['transition'] 
                    x.style['transition']  ='none'
                    x.style['width'] = (
                        numberParse(    this.window.getComputedStyle(    zChild[1].element   ).width   ) -
                        numberParse(    this.window.getComputedStyle(    x.element   ).left   ) 
                    ).toString() + 'px'
                    this.ref.detectChanges()
                    x.style['transition'] = hold
                    

                }

                
                else if(   ii % 3 === 0   ){


                    let a  =  getTextWidth({
                        elementText:x.innerText,
                        font:x.cssDefault['font-size'] +                 
                        " " +
                        x.cssDefault['font-family']
                    })


                    if(   a > blogArticleTitleGreatest   ){


                        blogArticleTitleGreatest = (
                        a+
                        numberParse(    x.cssDefault['left']  )
                        )

                    }
                    
                    
                }


            })    
            // console.log(   blogArticleTitleGreatest   )

        


            if(    numberParse(   this.window.getComputedStyle(zChild[1].element).width   ) <  blogArticleTitleGreatest + 10   ){
                // you must shorten the article bards so that the containing 

                
                zChild[10].style['width'] = zChild[1].style['width']
                zChild[10].style['height'] = (
                    numberParse(    this.window.getComputedStyle(   zChild[2].element   )['font-size']   )+
                    40
                ).toString() + 'px'
                zChild[10].style['background-color'] = 'rgb(0,0,0)' 
                zChild[10].style['border'] = '1px solid rgb(255, 192, 203)'
                this.ref.detectChanges()
                // console.log(    zChild[10].style    )
                zChild[2].style['font-family'] = 'Vidaloka'
                zChild[2].style['font-style'] = 'italic' 
                this.ref.detectChanges()                    
                zChild[2].style['left'] = xPosition({
                    contain:numberParse(   this.window.getComputedStyle(zChild[1].element).width   ),
                    target:getTextWidth({
                        elementText:zChild[2].innerText,
                        font:this.window.getComputedStyle(   zChild[2].element   )['font-size'] +                 
                        " " +
                        this.window.getComputedStyle(   zChild[2].element   )['font-family']
                    })
                })
                zChild[2].style['color'] = 'rgb(255, 192, 203)' 
                this.ref.detectChanges() 

                zChild[13].style['top'] = (
                    numberParse(   this.window.getComputedStyle(   zChild[10].element   ).top   ) +
                    numberParse(   this.window.getComputedStyle(   zChild[10].element   ).height   ) - 
                    20
                ).toString() + 'px'
                zChild[13].style['left'] = xPosition({
                    contain:numberParse(   this.window.getComputedStyle(zChild[1].element).width   ),
                    target:getTextWidth({
                        elementText:zChild[13].innerText,
                        font:this.window.getComputedStyle(   zChild[13].element   )['font-size'] +                 
                        " " +
                        this.window.getComputedStyle(   zChild[13].element   )['font-family']
                    })
                })     
                zChild[13].style['text-align'] = 'center' 
                this.ref.detectChanges()  
                zChild.slice(blogArticle.start).forEach((x,i)=>{
                    let ii = i + blogArticle.start - blogArticle.startMod 
                    let jj = i + blogArticle.start  
                    x.mouseout.fn = null
                    x.mouseover.fn = null
                                            
                    
                    if(  
                        ii % blogArticle.items === 1 &&
                        i <= blogArticle.items
                    ){


                        x.style['transition'] = 'none'
                        zChild[jj+ 1 ].style['transition'] = 'none'
                        zChild[jj- 1 ].style['transition'] = 'none'                            
                        x.style['width'] = (
                            .53 * numberParse(  this.window.getComputedStyle(   zChild[1].element   ).width   )
                        ).toString() + 'px'
                        x.style['transition'] = 'none'
                        this.ref.detectChanges()
                        // console.log(x)
                        x.style['top'] = (
                            numberParse(   this.window.getComputedStyle(   zChild[blogArticle.start-1].element   ).top   ) +
                            numberParse(   this.window.getComputedStyle(   zChild[blogArticle.start-1].element   ).height   )+
                            25
                        ).toString() + 'px'
                        x.style['left'] = xPosition({
                            contain:numberParse(   this.window.getComputedStyle(zChild[1].element).width   ),
                            target:numberParse(   this.window.getComputedStyle(x.element).width   )
                        })                            
                        x.style['opacity'] = '1'     
                        this.ref.detectChanges() 
                        // console.table(
                        //     zChild[jj - 1  ].element    ,
                        //     zChild[jj ].element,
                        //     zChild[jj + 1].element
                        // )
                        zChild[jj+ 1].style['top'] = (
                            numberParse(   zChild[jj].style['top']   ) +
                            numberParse(
                                xPosition({
                                    contain:numberParse(   this.window.getComputedStyle(zChild[jj ].element).height   ),
                                    target: numberParse(   this.window.getComputedStyle(zChild[jj + 1 ].element).height  )
                                })                                     
                            )
                        ).toString() + 'px'
                        zChild[jj+ 1].style['left'] = (
                            numberParse(   this.window.getComputedStyle(zChild[jj ].element).left   ) +
                            5    
                        ).toString() + 'px'
                        zChild[jj+ 1].style['opacity'] = '1'  
                        this.ref.detectChanges()
                        zChild[jj - 1].style['display'] = 'none'   
                        this.ref.detectChanges()                            
                        
                        
                    } 
                    
                    
                    else if(  ii % 3 === 1   ){
                        

                        x.style['transition'] = 'none'
                        zChild[jj+ 1 ].style['transition'] = 'none'
                        zChild[jj- 1 ].style['transition'] = 'none'
                        x.style['width'] = (
                            .53 * numberParse(  this.window.getComputedStyle(   zChild[1].element   ).width   )
                        ).toString() + 'px'
                        x.style['transition'] = 'none'
                        this.ref.detectChanges()
                        // console.log(
                        //     zChild[ii - 3+ blogArticle.startMod].element 
                        // )
                        x.style['top'] = (
                            numberParse(   this.window.getComputedStyle(   zChild[ii - 3 + blogArticle.startMod].element   ).top   ) +
                            numberParse(   this.window.getComputedStyle(   zChild[ii - 3 + blogArticle.startMod].element   ).height   )+
                            10
                        ).toString() + 'px'
                        x.style['left'] = xPosition({
                            contain:numberParse(   this.window.getComputedStyle(zChild[1].element).width   ),
                            target:numberParse(   this.window.getComputedStyle(x.element).width   )
                        })     
                        x.style['opacity'] = '1'
                        this.ref.detectChanges()
                        zChild[jj+ 1 ].style['top'] = (
                            numberParse(   this.window.getComputedStyle(    zChild[blogArticle.start +1].element  ).top   ) +
                            (
                                (Math.floor(i / blogArticle.items ))
                                * (   
                                    numberParse(   this.window.getComputedStyle(    zChild[blogArticle.start +1].element).height   ) +
                                    10
                                )

                            )+                                
                            (
                                5
                            )
                        ).toString() + 'px';                            
                        // (
                        //     numberParse(   zChild[jj].style['top']   ) +
                        //     numberParse(
                        //         xPosition({
                        //             contain:numberParse(   this.window.getComputedStyle(zChild[jj ].element).height   ),
                        //             target: numberParse(   this.window.getComputedStyle(zChild[jj + 1 ].element).height  )
                        //         })                                     
                        //     )
                        // ).toString() + 'px'
                        zChild[jj+ 1].style['left'] = (
                            numberParse(   this.window.getComputedStyle(zChild[jj ].element).left   ) +
                            5    
                        ).toString() + 'px' 
                        zChild[jj+ 1].style['opacity'] = '1'                           
                        this.ref.detectChanges()        
                        zChild[jj - 1].style['display'] = 'none'   
                        this.ref.detectChanges()                                                   


                    }
                    
                        
                })
                zChild[1].style['height'] = (
                    numberParse(   this.window.getComputedStyle(   zChild.slice(-2,-1)[0].element   ).height   ) +
                    numberParse(   this.window.getComputedStyle(   zChild.slice(-2,-1)[0].element   ).top   ) - 
                    cssTop
                ).toString() + 'px'
                this.ref.detectChanges()      
                zChild[11].style['display'] = 'block'
                zChild[12].style['display'] = 'block'
                this.ref.detectChanges()                      
                zChild[11].style['width'] =(
                    .2 * numberParse(   this.window.getComputedStyle(    zChild[1].element   ).width    )
                ).toString() + 'px'                      
                zChild[12].style['width'] =(
                    .2 * numberParse(   this.window.getComputedStyle(    zChild[1].element   ).width    )
                ).toString() + 'px'      
                this.ref.detectChanges()
                zChild[12].style['left'] = (
                    numberParse(   this.window.getComputedStyle(    zChild[1].element   ).left   ) +
                    numberParse(   this.window.getComputedStyle(    zChild[1].element   ).width   ) -
                    numberParse(   this.window.getComputedStyle(    zChild[12].element   ).width   )
                ).toString() + 'px'              
                this.ref.detectChanges() 
                Array.from(
                    {length:7},
                    (x,i)=>
                        i+3
                ).map((x,i)=>{
                    // console.log(zChild[x])
                    zChild[x].style['color'] = 'rgb(225,192,203)'
                
                    zChild[x].style['font-size'] = resize({
                        default:numberParse(    zChild[x].cssDefault['font-size']   ),
                        containActual:numberParse(   this.window.getComputedStyle(   zChild[11].element   ).width   ),
                        containDefault:150
                    })
                    this.ref.detectChanges()
                    
                    
                    if(   i === 0  
                    ){

                        

                        this.ref.detectChanges()
                        zChild[x].style['top'] = (
                            numberParse(   this.window.getComputedStyle(   zChild[10].element   ).top   ) +
                            numberParse(   this.window.getComputedStyle(   zChild[10].element   ).height   )+
                            25
                        ).toString() + 'px' 
                        zChild[x].style['left'] =(
                            numberParse(
                                xPosition({
                                    contain:numberParse(   this.window.getComputedStyle(zChild[11].element).width   ),
                                    target:numberParse(   this.window.getComputedStyle(zChild[x].element).width   ),
                                }) 
                            ) + 
                            numberParse(   this.window.getComputedStyle(zChild[11].element).left   )
                        ).toString() + 'px'                              
                        this.ref.detectChanges()   
                        
                        
                    }


                    else if(   
                        i !== 0 &&
                        i <= 3
                    ){


                        zChild[x].style['top'] = (
                            numberParse(   this.window.getComputedStyle(   zChild[x-1].element   ).top   ) +
                            numberParse(   this.window.getComputedStyle(   zChild[x-1].element   ).height   )+
                            25
                        ).toString() + 'px' 
                        zChild[x].style['left'] =(
                            numberParse(
                                xPosition({
                                    contain:numberParse(   this.window.getComputedStyle(zChild[11].element).width   ),
                                    target:numberParse(   this.window.getComputedStyle(zChild[x].element).width   ),
                                }) 
                            ) + 
                            numberParse(   this.window.getComputedStyle(zChild[11].element).left   )
                        ).toString() + 'px'                             
                        this.ref.detectChanges()   
                        
                        
                    }             
                    
                    else if(   
                        i === 4
                    ){

                        
                        zChild[x].style['left'] =(
                            numberParse(
                                xPosition({
                                    contain:numberParse(   this.window.getComputedStyle(zChild[12].element).width   ),
                                    target:numberParse(   this.window.getComputedStyle(zChild[x].element).width   ),
                                }) 
                            ) + 
                            numberParse(   this.window.getComputedStyle(zChild[12].element).left   )
                        ).toString() + 'px'                             
                        zChild[x].style['top'] = (
                            numberParse(   this.window.getComputedStyle(   zChild[10].element   ).top   ) +
                            numberParse(   this.window.getComputedStyle(   zChild[10].element   ).height   )+
                            25
                        ).toString() + 'px' 
                        this.ref.detectChanges()   
                        
                        
                    }   


                    else if(   
                        i >= 4
                    ){

                        
                        zChild[x].style['left'] =(
                            numberParse(
                                xPosition({
                                    contain:numberParse(   this.window.getComputedStyle(zChild[12].element).width   ),
                                    target:numberParse(   this.window.getComputedStyle(zChild[x].element).width   ),
                                }) 
                            ) + 
                            numberParse(   this.window.getComputedStyle(zChild[12].element).left   )
                        ).toString() + 'px'                             
                        zChild[x].style['top'] = (
                            numberParse(   this.window.getComputedStyle(   zChild[x-1].element   ).top   ) +
                            numberParse(   this.window.getComputedStyle(   zChild[x-1].element   ).height   )+
                            25
                        ).toString() + 'px' 
                        this.ref.detectChanges()   
                        
                        
                    }                        


                })       
                this.ref.detectChanges()                     

                
            }


            if(   
                numberParse(   this.window.getComputedStyle(zChild[1].element).width   ) < 1582 &&
                numberParse(   this.window.getComputedStyle(zChild[1].element).width   ) >  blogArticleTitleGreatest + 10
            ){
                

                zChild.slice(1).forEach((x,i)=>{
                    Object.keys(x.style).forEach(function(key) { delete x.style[key]; });
                    x.style = Object.assign(x.style,x.cssDefault)
                })         
                this.ref.detectChanges()
                zChild.slice(1,blogArticle.start+blogArticle.items).forEach((x,i)=>{
            
            
                    // console.log(x)
                    // console.log(x.cssDefault['top'])
                    if(   x.cssDefault['top'] !== undefined   ){
    
    
                        if(   x.style['top'].split('px').length !== 1){
                            
                            
                            x.style['top'] =(
                                numberParse(    x.cssDefault['top']   )+
                                cssTop
                            ).toString() + 'px'
    
                            
                        }
    
    
                        else if(   x.style['top'].split('px').length === 1){
                            
                            
                            x.style['top'] = cssTop.toString() + 'px'
    
                            
                        }
                    
                
                    }   
                    
                    
                    else if(   x.cssDefault['top'] === undefined   ){
    
    
                        x.style['top'] = cssTop.toString() + 'px'
    
    
                    }
    
    
                    
                });
                this.ref.detectChanges() 
                zChild.slice(
                    blogArticle.start
                ).forEach((x,i)=>{
                    let ii = i + blogArticle.start - blogArticle.startMod 
                    let jj = i + blogArticle.start 
                    // console.log(zChild[jj].element)

                    
                    if(  
                        this.window.Modernizr.opacity &&
                        this.window.Modernizr.csstransitions
                    ){    
                        
                        
                        zChild[jj].style['opacity'] = '.5' 
                        zChild[jj].style['left'] = (
                            numberParse(   this.window.getComputedStyle(   zChild[jj].element   ).left   ) +
                            250
                        ).toString() + 'px'
                        this.ref.detectChanges()
                        
                    

                    }


                    if(     ii % blogArticle.items === 1    ){


                        zChild[jj].style['width'] = (
                            numberParse(    this.window.getComputedStyle(zChild[1].element).width   ) - 
                            numberParse(    this.window.getComputedStyle(zChild[jj].element).left   ) 
                        ).toString() + 'px'
                        this.ref.detectChanges()


                    }


                    if( 
                        i > 2 
                    ){


                        
                        if(   ii % blogArticle.items === 0   ){


                            if(  
                                this.window.Modernizr.opacity &&
                                this.window.Modernizr.csstransitions
                            ){  
                                


                                while(
                                    //problems on safari tablet
                                    getTextWidth({
                                        elementText:zChild[jj].innerText,
                                        font:zChild[jj].style['font-size'] + 
                                        " " +
                                        zChild[jj].style['font-family']
                                    }) >=
                                    (
                                        numberParse(   this.window.getComputedStyle(    zChild[1].element).width   ) -
                                        numberParse(   this.window.getComputedStyle(    zChild[jj].element).left  )     
                                    )                        
                                ){
                                    zChild[jj].style['font-size'] = (
                                        numberParse(   zChild[jj].style['font-size']   ) -1
                                    ).toString() + 'px'
                                    this.ref.detectChanges()
                                };       
                            

                            
                            }
                                


                        }


                        else if(   ii % blogArticle.items === 1   ){
                            
                            
                            // console.log(   zChild[jj].element   )
                            zChild[jj].style['top'] = (
                                numberParse(   this.window.getComputedStyle(   zChild[jj - blogArticle.items].element   ).top   ) +
                                numberParse(   this.window.getComputedStyle(   zChild[jj - blogArticle.items].element   ).height   ) + 
                                10
                            ).toString() + 'px'
                            this.ref.detectChanges()
                            // console.log(this.window.getComputedStyle(    zChild[jj-1].element).height)
                            zChild[jj-1].style['top'] =                                (
                                numberParse(   this.window.getComputedStyle(   zChild[jj].element   ).top   ) +
                                numberParse(
                                    xPosition({
                                        contain:numberParse(   this.window.getComputedStyle(zChild[jj].element).height   ),
                                        target:numberParse(   this.window.getComputedStyle(zChild[jj-1].element).height  )
                                    })     
                                )
                            ).toString() + 'px'
                            this.ref.detectChanges()                                 


                        } 
                        
                        
                        else if(   ii % blogArticle.items === 2   ){
                            
                            
                            // console.log(    zChild[jj].element    )
                            zChild[jj].style['top'] = (
                                numberParse(   this.window.getComputedStyle(    zChild[blogArticle.start +1].element  ).top   ) +
                                (
                                    (Math.floor(i / blogArticle.items ))
                                    * (   
                                        numberParse(   this.window.getComputedStyle(    zChild[blogArticle.start +1].element).height   ) +
                                        10
                                    )

                                )+                                
                                (
                                    5
                                )
                            ).toString() + 'px'
                            // console.log(Math.floor(i / blogArticle.items ))
                            // (
                            //     numberParse(   this.window.getComputedStyle(   zChild[jj - 1].element   ).top   ) +
                            //     numberParse(
                            //         xPosition({
                            //             contain:numberParse(   this.window.getComputedStyle(zChild[jj-1].element).height   ),
                            //             target:numberParse(   this.window.getComputedStyle(zChild[jj].element).height  )
                            //         })     
                            //     )
                            // ).toString() + 'px'
                            this.ref.detectChanges()    
                            // console.log(   
                            //     this.window.getComputedStyle(    zChild[jj].element  ).top,
                            //     zChild[blogArticle.start +1].element
                            // )                            


                        } 
                        
                        
                    }

                
                })   
                
                
                if(  
                    this.window.Modernizr.opacity &&
                    this.window.Modernizr.csstransitions
                ){     
                    
                    
                    zChild.slice(
                        blogArticle.start
                    ).forEach((x,i)=>{
                        let ii = i + blogArticle.start - blogArticle.startMod 
                        let jj = i + blogArticle.start      
                        zChild[jj].style['transition'] = 'left 1s, opacity 1s, font-size 1s, width 1s'  
                    })   
                
                
                }


                this.ref.detectChanges()                                             
                zChild[13].style['left'] = (
                    numberParse(
                        xPosition({
                            contain:(
                                numberParse(   this.window.getComputedStyle(zChild[1].element).width   ) -
                                numberParse(   this.window.getComputedStyle(zChild[10].element).width   ) +
                                numberParse(   this.window.getComputedStyle(zChild[10].element).left   ) 
                            ),
                            target: getTextWidth({
                                elementText:zChild[13].innerText,
                                font:this.window.getComputedStyle(   zChild[13].element   ).getPropertyValue('font-size') + 
                                " " +
                                this.window.getComputedStyle(   zChild[13].element   ).getPropertyValue('font-family') 
                            })
                        })                            
                    ) +
                    numberParse(   this.window.getComputedStyle(zChild[10].element).width   ) +
                    numberParse(   this.window.getComputedStyle(zChild[10].element).left   ) 
                ).toString() + 'px'
                this.ref.detectChanges() 
                zChild[1].style['height'] = zChild[10].style['height'] = (
                    numberParse(   this.window.getComputedStyle(   zChild.slice(-2,-1)[0].element   ).height   ) +
                    numberParse(   this.window.getComputedStyle(   zChild.slice(-2,-1)[0].element   ).top   ) - 
                    cssTop
                ).toString() + 'px'
                this.ref.detectChanges() 
                
                
            }              
            
            
            if(   numberParse(   this.window.getComputedStyle(zChild[1].element).width   ) > 1582   ){


                zChild.slice(1).forEach((x,i)=>{
                    Object.keys(x.style).forEach(function(key) { delete x.style[key]; });
                    x.style = Object.assign(x.style,x.cssDefault)
                })         
                this.ref.detectChanges()
                zChild.slice(1,blogArticle.start+blogArticle.items).forEach((x,i)=>{
            
            
                    // console.log(x)
                    // console.log(x.cssDefault['top'])
                    if(   x.cssDefault['top'] !== undefined   ){
    
    
                        if(   x.style['top'].split('px').length !== 1){
                            
                            
                            x.style['top'] =(
                                numberParse(    x.cssDefault['top']   )+
                                cssTop
                            ).toString() + 'px'
    
                            
                        }
    
    
                        else if(   x.style['top'].split('px').length === 1){
                            
                            
                            x.style['top'] = cssTop.toString() + 'px'
    
                            
                        }
                    
                
                    }   
                    
                    
                    else if(   x.cssDefault['top'] === undefined   ){
    
    
                        x.style['top'] = cssTop.toString() + 'px'
    
    
                    }
    
    
                    
                });
                this.ref.detectChanges() 
                zChild.slice(
                    blogArticle.start
                ).forEach((x,i)=>{
                    let ii = i + blogArticle.start - blogArticle.startMod 
                    let jj = i + blogArticle.start 
                    // console.log(zChild[jj].element)

                    
                    if(  
                        this.window.Modernizr.opacity &&
                        this.window.Modernizr.csstransitions
                    ){    
                        
                        
                        zChild[jj].style['opacity'] = '.5' 
                        zChild[jj].style['left'] = (
                            numberParse(   this.window.getComputedStyle(   zChild[jj].element   ).left   ) +
                            250
                        ).toString() + 'px'
                        this.ref.detectChanges()
                        
                    

                    }


                    if(     ii % blogArticle.items === 1    ){


                        zChild[jj].style['width'] = (
                            numberParse(    this.window.getComputedStyle(zChild[1].element).width   ) - 
                            numberParse(    this.window.getComputedStyle(zChild[jj].element).left   ) 
                        ).toString() + 'px'
                        this.ref.detectChanges()


                    }


                    if( 
                        i > 2 
                    ){


                        
                        if(   ii % blogArticle.items === 0   ){


                            if(  
                                this.window.Modernizr.opacity &&
                                this.window.Modernizr.csstransitions
                            ){  
                                


                                while(
                                    //problems on safari tablet
                                    getTextWidth({
                                        elementText:zChild[jj].innerText,
                                        font:zChild[jj].style['font-size'] + 
                                        " " +
                                        zChild[jj].style['font-family']
                                    }) >=
                                    (
                                        numberParse(   this.window.getComputedStyle(    zChild[1].element).width   ) -
                                        numberParse(   this.window.getComputedStyle(    zChild[jj].element).left  )     
                                    )                        
                                ){
                                    zChild[jj].style['font-size'] = (
                                        numberParse(   zChild[jj].style['font-size']   ) -1
                                    ).toString() + 'px'
                                    this.ref.detectChanges()
                                };       
                            

                            
                            }
                                


                        }


                        else if(   ii % blogArticle.items === 1   ){
                            
                            
                            // console.log(   zChild[jj].element   )
                            zChild[jj].style['top'] = (
                                numberParse(   this.window.getComputedStyle(   zChild[jj - blogArticle.items].element   ).top   ) +
                                numberParse(   this.window.getComputedStyle(   zChild[jj - blogArticle.items].element   ).height   ) + 
                                10
                            ).toString() + 'px'
                            this.ref.detectChanges()
                            // console.log(this.window.getComputedStyle(    zChild[jj-1].element).height)
                            zChild[jj-1].style['top'] =                                (
                                numberParse(   this.window.getComputedStyle(   zChild[jj].element   ).top   ) +
                                numberParse(
                                    xPosition({
                                        contain:numberParse(   this.window.getComputedStyle(zChild[jj].element).height   ),
                                        target:numberParse(   this.window.getComputedStyle(zChild[jj-1].element).height  )
                                    })     
                                )
                            ).toString() + 'px'
                            this.ref.detectChanges()                                 


                        } 
                        
                        
                        else if(   ii % blogArticle.items === 2   ){
                            
                            
                            // console.log(    zChild[jj].element    )
                            zChild[jj].style['top'] = (
                                numberParse(   this.window.getComputedStyle(    zChild[blogArticle.start +1].element  ).top   ) +
                                (
                                    (Math.floor(i / blogArticle.items ))
                                    * (   
                                        numberParse(   this.window.getComputedStyle(    zChild[blogArticle.start +1].element).height   ) +
                                        10
                                    )

                                )+                                
                                (
                                    5
                                )
                            ).toString() + 'px'
                            // console.log(Math.floor(i / blogArticle.items ))
                            // (
                            //     numberParse(   this.window.getComputedStyle(   zChild[jj - 1].element   ).top   ) +
                            //     numberParse(
                            //         xPosition({
                            //             contain:numberParse(   this.window.getComputedStyle(zChild[jj-1].element).height   ),
                            //             target:numberParse(   this.window.getComputedStyle(zChild[jj].element).height  )
                            //         })     
                            //     )
                            // ).toString() + 'px'
                            this.ref.detectChanges()    
                            // console.log(   
                            //     this.window.getComputedStyle(    zChild[jj].element  ).top,
                            //     zChild[blogArticle.start +1].element
                            // )                            


                        } 
                        
                        
                    }

                
                })   
                
                
                if(  
                    this.window.Modernizr.opacity &&
                    this.window.Modernizr.csstransitions
                ){     
                    
                    
                    zChild.slice(
                        blogArticle.start
                    ).forEach((x,i)=>{
                        let ii = i + blogArticle.start - blogArticle.startMod 
                        let jj = i + blogArticle.start      
                        zChild[jj].style['transition'] = 'left 1s, opacity 1s, font-size 1s, width 1s'  
                    })   
                
                
                }


                this.ref.detectChanges()                      
                zChild[1].style['height'] = zChild[10].style['height'] = (
                    numberParse(   this.window.getComputedStyle(   zChild.slice(-2,-1)[0].element   ).height   ) +
                    numberParse(   this.window.getComputedStyle(   zChild.slice(-2,-1)[0].element   ).top   ) - 
                    cssTop
                ).toString() + 'px'
                this.ref.detectChanges() 
                
                
            }

                   
            // console.log(this.wordsService.blogCO0.quantity[1])
            // console.log(zChild)


            if( 
                this.window.document.querySelector('app-footer[ng-reflect-footer-template-variable=footerComponentObject0]')  !== null ||
                (   typeof this.wordsService.blogNavTestStub === 'object'   ) 
            ){


                this.wordsService.footerComponentObject0.quantity[1][1].metadata.blogCO0.next([
                    this.window.getComputedStyle(zChild[1].element).top,
                    this.window.getComputedStyle(zChild[1].element).height 
                ]) 
                
                
            }          
            

            prevResizeData = nullThisIdentifier
        })

                
    }
    

    this.wordsService.appViewComplete.next(
        (function(qq){
            qq.wordsService.appViewCompleteArray.push(   qq.blogTV   )
        })(this)
    )      


  }  

  ngOnDestroy(){
    console.log( this.blogTV+ ' ngOnDestroy fires on dismount') 

    if(   this.blogTV  === 'blogCO0'   ){
        
        
        this.wordsService[this.blogTV].quantity[1].splice(4)
        this.wordsService.blogResizeEventSubscription0.unsubscribe()


        if(   
            this.wordsService[this.blogTV].quantity[1][0].metadata.navigationCO0 !== undefined &&
            this.wordsService.blogResizeEventSubscription1 !== undefined 
        ){
            
            // console.log(   this.wordsService[this.footerTemplateVariable].quantity[1][1].metadata.wordsCO2.closed   )
            if(  !this.wordsService[this.blogTV].quantity[1][0].metadata.navigationCO0.closed   ){

                
                // console.warn('hit')
                this.wordsService.blogResizeEventSubscription1.unsubscribe()
            
        
            }    
            

        }        

    }
    
    
  }
}
