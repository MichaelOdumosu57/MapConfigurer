import { Component, OnInit,Input,ViewChildren,AfterViewInit,Inject, OnDestroy,ChangeDetectorRef,ChangeDetectionStrategy } from '@angular/core';
import {   WordsService   } from '../words.service';
import {   fromEvent,interval, of,from   } from 'rxjs';
import {   WINDOW   } from '../window.service';
import {   take,timeout,distinctUntilChanged   } from 'rxjs/operators';

function numberParse(   dimension:any   ){
    dimension = parseFloat(dimension.split("p")[0])
    return dimension;
}

function styleProp(   devObj   ){
    return devObj.window.getComputedStyle(   devObj.element   )
}

function getTextWidth(   devObj:{elementText:string,font:string}   ){
    var canvas = document.createElement("canvas");
    var ctx = canvas.getContext("2d");
    ctx.font = devObj.font;  // This can be set programmaticly from the element's font-style if desired
    return ctx.measureText(devObj.elementText).width;
}

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavigationComponent implements OnInit,AfterViewInit,OnDestroy  {

    @ViewChildren('myNavigationVal') navigationMyElements: any;

    constructor(
        private wordsService: WordsService,
        @Inject(WINDOW) private window: Window,
        private ref: ChangeDetectorRef
    ) { }
    
    @Input() navigationTemplateVariable:string | any;

    navigationBool:Array<any> = this.wordsService.navigationBool
    navigationStyle:Array<any> = this.wordsService.navigationStyle
    navigationVal:Array<any> = this.wordsService.navigationVal

    navigationStyleIndex:Array<any> = this.wordsService.navigationStyleIndex
    navigationBoolIndex:Array<any> = this.wordsService.navigationBoolIndex    

    navigationCustomWordWrapElements:Array<any>  = []
    
    // access(){
    //     return this.wordsService
    // }

    // accessWindow(){
    //     return this.window
    // }

    ngOnInit() {
        console.log(this.navigationTemplateVariable+ '  ngOnInit fires one remount')
    }

    ngAfterViewInit(){
        console.log( this.navigationTemplateVariable+ ' ngAfterViewInit fires one remount')        
        this.wordsService.navigationLoadEvent$ = fromEvent(this.window ,'load');
        this.wordsService.navigationResizeEvent$ = fromEvent(this.window ,'resize');        

        if(   this.navigationTemplateVariable === 'navigationComponentObject0'    ){


            let zChild =[{
                element: this.window.document.querySelector('app-navigation[ng-reflect-navigation-template-variable='+this.navigationTemplateVariable+']'),
                style:this.wordsService[this.navigationTemplateVariable].quantity[0][0].ngStyle[0][0],
                innerText:null
            }]          
            let zCheckpoint = []                         
            this.navigationMyElements._results.map((x:any,i:any)=>{


                if(   x.nativeElement.id === 'n_a_v_i_g_a_t_i_o_n_Board'   ){
                    zCheckpoint.push(i)
                }                        
                
            
            })
            console.log(zCheckpoint)
            let zGrid = {
                a:0, 
                b:0, 
                c:0,
                d:0,
                e:null,
                f:null
            }                  
            zCheckpoint.map((y:any,j:any)=>{
                // console.group('associated')
                // console.log(    this.wordsMyElements._results.slice(y,zCheckpoint[j+1])   )
                zGrid.a = 0;
                (function(qq){
                    return qq.navigationMyElements._results.length === 1 ? qq.navigationMyElements._results : qq.navigationMyElements._results.slice(y,zCheckpoint[j+1])
                })(this).map((x:any,i:any)=>{     
                    // console.log(   x.nativeElement.id   )
                    // console.log(   this.wordsService[this.wordsTemplateVariable].quantity[1][j].val  )

                    while(   
                        this.wordsService[this.navigationTemplateVariable].quantity[1][j].quantity[zGrid.a][zGrid.b] === undefined &&   
                        zGrid.b +1 > this.wordsService[this.navigationTemplateVariable].quantity[1][j].quantity[zGrid.a].length
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


                    if(   x.nativeElement.id === this.wordsService[this.navigationTemplateVariable].quantity[1][j].val[zGrid.a][zGrid.b]   &&
                        (   
                            this.wordsService[this.navigationTemplateVariable].quantity[1][j].bool[zGrid.a][zGrid.b] === 'true' ||
                            this.wordsService[this.navigationTemplateVariable].quantity[1][j].bool[zGrid.a][zGrid.b] === 'link' ||
                            this.wordsService[this.navigationTemplateVariable].quantity[1][j].bool[zGrid.a][zGrid.b] === 'button' 
                        )    
                    ){               
                        
                        
                        zChild.push({
                            element:x.nativeElement,
                            style:this.wordsService[this.navigationTemplateVariable].quantity[1][j].ngStyle[zGrid.a][zGrid.b],
                            innerText: this.wordsService[this.navigationTemplateVariable].quantity[1][j].text[zGrid.a][zGrid.b]
                        })
                        

                        if(   this.wordsService[this.navigationTemplateVariable].quantity[1][j].quantity[zGrid.a][zGrid.b+1] === undefined   ){


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
            // see what happens when app-navigation top is made 0px
            console.log(   zChild   ) 
            this.wordsService[this.navigationTemplateVariable].metadata.titleWidth = getTextWidth({
                elementText:zChild[2].innerText ,
                font: this.window.getComputedStyle(   zChild[2].element   ).getPropertyValue('font-size') + 
                " " +
                this.window.getComputedStyle(   zChild[2].element ).getPropertyValue('font-family') 
            })        
            for(   let i of zChild.slice(2,4)   ){
                this.wordsService[this.navigationTemplateVariable].metadata.defaultFontSizes.push(   this.window.getComputedStyle(i.element).fontSize   )   
            }                   
            this.wordsService.navigationResizeEventSubscription0 = this.wordsService.navigationResizeEvent$.subscribe((event)=>{
                this.wordsService[this.navigationTemplateVariable].metadata.barDynamicWidth = zChild[1].element.getBoundingClientRect().width  - 1340;
                this.ref.detectChanges()                
                zChild[5].style['left'] = (   1340 * .47 - (1340 - zChild[1].element.getBoundingClientRect().width)   ).toString() + "px"
                zChild[6].style['left'] = (   1340 * .53 - (1340 - zChild[1].element.getBoundingClientRect().width)   ).toString() + "px"
                zChild[7].style['left'] = (   1340 * .58 - (1340 - zChild[1].element.getBoundingClientRect().width)   ).toString() + "px"
                zChild[8].style['left'] = (   1340 * .65 - (1340 - zChild[1].element.getBoundingClientRect().width)   ).toString() + "px"
                zChild[9].style['left'] = (   1340 * .72 - (1340 - zChild[1].element.getBoundingClientRect().width)   ).toString() + "px"
                zChild[10].style['left'] = (   1340 * .77 - (1340 - zChild[1].element.getBoundingClientRect().width)   ).toString() + "px"
                zChild[11].style['left'] = (   1340 * .85 - (1340 - zChild[1].element.getBoundingClientRect().width)   ).toString() + "px"
                this.ref.detectChanges()
                zChild[12].style['left'] = ( 
                    numberParse(  this.window.getComputedStyle(   zChild[11].element  ).left   )  -
                    numberParse(   this.window.getComputedStyle(  zChild[12].element   ).width   )/2 +
                    getTextWidth({
                        elementText:zChild[11].innerText,
                        font: this.window.getComputedStyle(   zChild[11].element  ).getPropertyValue('font-size') + 
                        " " +
                        this.window.getComputedStyle(   zChild[11].element ).getPropertyValue('font-family') 
                    })/2                                
                ).toString() + "px"  
                this.ref.detectChanges()
            })
            this.wordsService.navigationResizeEventSubscription1 = this.wordsService.navigationResizeEvent$.subscribe((event)=>{


                if(   numberParse(   this.window.getComputedStyle(zChild[5].element).left    )   <=    this.wordsService[this.navigationTemplateVariable].metadata.titleWidth + 100  ){
                }
            })

        }
        


        // this.wordsService[this.navigationTemplateVariable].metadata.titleWidth = getTextWidth({
        //     elementText:this.navigationMyElements._results[1].nativeElement.innerText ,
        //     font: this.window.getComputedStyle(   this.navigationMyElements._results[1].nativeElement   ).getPropertyValue('font-size') + " sans-serif"
        // })        
        // for(   let i of this.navigationMyElements._results.slice(1,3)   ){
        //     this.wordsService[this.navigationTemplateVariable].metadata.defaultFontSizes.push(   this.window.getComputedStyle(i.nativeElement).fontSize   )   
        // }   
        // // console.log(   this.navigationMyElements._results[13],this.window.getComputedStyle(   this.navigationMyElements._results[0].nativeElement   ).getPropertyValue('height')   )
        // this.wordsService.navigationResizeEventSubscription1 = this.wordsService.navigationResizeEvent$.subscribe((event)=>{
        // // console.group('anchors overlapping heading resize event')

            
        //     if(   numberParse(   this.navigationMyElements._results[4].nativeElement.style.left   )   <=    this.wordsService[this.navigationTemplateVariable].metadata.titleWidth + 100  ){
                
                
        //         // console.log(   numberParse(   this.navigationMyElements._results[1].nativeElement.style.left   )   )
        //         this.navigationBool[12] = 'true'
        //         this.ref.detectChanges();
                

        //         if(   this.navigationMyElements._results[12].nativeElement.id === "n_a_v_i_g_a_t_i_o_n_dropDownBox"   ){


        //             // console.log(     this.navigationMyElements._results[12].nativeElement.id   )
        //             this.navigationMyElements._results[12].nativeElement.style.position = "absolute"
        //             this.navigationMyElements._results[12].nativeElement.style.top = "50px"
        //             // console.log(this.wordsService[this.navigationTemplateVariable].metadata.barDynamicWidth )
        //             this.navigationMyElements._results[12].nativeElement.style.left = (  1340* .96   + this.wordsService[this.navigationTemplateVariable].metadata.barDynamicWidth  ).toString() + "px"                 
        //             this.navigationMyElements._results[13].nativeElement.style.display = 'block'
        //             this.navigationMyElements._results[13].nativeElement.style.left = (  1340* .963   + this.wordsService[this.navigationTemplateVariable].metadata.barDynamicWidth  ).toString() + "px"
                    
                    
        //             if(   this.wordsService.navigationClickEventSubscription0 === undefined   || this.wordsService.navigationClickEventSubscription0.closed  ){


        //                 this.wordsService.navigationClickEvent$ = fromEvent([this.navigationMyElements._results[12].nativeElement ,this.navigationMyElements._results[13].nativeElement] ,'click');
        //                 this.wordsService.navigationClickEventSubscription0 = this.wordsService.navigationClickEvent$.subscribe((event)=>{
        //                     this.navigationMyElements._results[14].nativeElement.style.display = this.navigationMyElements._results[14].nativeElement.style.display === 'block' ? 'none' : 'block'
        //                 })  
        //                 // console.log(   this.wordsService.navigationClickEventSubscription0   )      


        //             }

                   
        //             // console.log(     this.navigationMyElements._results   )
        //             for(   let i of this.navigationMyElements._results.slice(4,12)   ){
        //                 i.nativeElement.style.display = 'none'  
        //             }    
                    
                    
        //             if(   numberParse(   this.navigationMyElements._results[12].nativeElement.style.left   )   <=    this.wordsService[this.navigationTemplateVariable].metadata.titleWidth  + 155  ){

                        
        //                 // console.log('dropdownBox is interfering with the titile')
        //                 this.navigationMyElements._results.slice(1,3).map((x,i)=>{
        //                     x.nativeElement.style.fontSize =  
        //                     (   
        //                         numberParse(   this.wordsService[this.navigationTemplateVariable].metadata.defaultFontSizes[i]   ) *
        //                         (  
        //                              numberParse(   this.navigationMyElements._results[12].nativeElement.style.left   )/
        //                              (   this.wordsService[this.navigationTemplateVariable].metadata.titleWidth  + 155 )  
        //                         ) * .95  
        //                     ).toString() + "px"
        //                     // console.log(   x.nativeElement.style.fontSize  )
        //                 })


        //             }   


        //             else if(   numberParse(   this.navigationMyElements._results[12].nativeElement.style.left   )   >=    this.wordsService[this.navigationTemplateVariable].metadata.titleWidth  + 55  ){

                        
        //                 // console.log('restore title sizes')
        //                 this.navigationMyElements._results.slice(1,3).map((x,i)=>{
        //                     x.nativeElement.style.fontSize =  this.wordsService[this.navigationTemplateVariable].metadata.defaultFontSizes[i] 
        //                     // console.log(   x.nativeElement.style.fontSize  )
        //                 })
        
        
        //             }                      
        
                    
        //         }
        //         // console.log(   this.navigationMyElements._results   )

        //     }


        //     else if(   numberParse(   this.navigationMyElements._results[4].nativeElement.style.left   )   >=    this.wordsService[this.navigationTemplateVariable].metadata.titleWidth + 100  ){
                

        //         if(   this.wordsService.navigationClickEventSubscription0 !== undefined   ){


        //             if(   !this.wordsService.navigationClickEventSubscription0.closed    ){


        //                 this.wordsService.navigationClickEventSubscription0.unsubscribe()   
                        
                
        //             }


        //         }  
               
                
        //         if(   this.navigationMyElements._results[14] !== undefined   ){


        //             if(   this.navigationMyElements._results[14].nativeElement.id === 'n_a_v_i_g_a_t_i_o_n_dropDown'  ){
                        

        //                 this.navigationMyElements._results[14].nativeElement.style.display = 'none'


        //             }
                    


        //         }
                
                
        //         if(   this.navigationMyElements._results[13] !== undefined   ){


        //             if(   this.navigationMyElements._results[13].nativeElement.id === "n_a_v_i_g_a_t_i_o_n_dropDownIcon"   ){

        //                 // console.log('executed on condition')                        
        //                 // this.navigationMyElements._results[0].nativeElement.style.backgroundColor = "#FFC0CB"
        //                 this.navigationMyElements._results[13].nativeElement.style.display = 'none'
        //                 // if(   numberParse(   this.navigationMyElements._results[12].nativeElement.style.left   )   >=    this.wordsService[this.navigationTemplateVariable].metadata.titleWidth  + 55  ){

                        
        //                     // console.log('restore title sizes')
        //                     this.navigationMyElements._results.slice(1,3).map((x,i)=>{
        //                         x.nativeElement.style.fontSize =  this.wordsService[this.navigationTemplateVariable].metadata.defaultFontSizes[i] 
        //                     })
            
            
        //                 // }                          
        //                 this.navigationBool[12] = 'false'
        //                 this.ref.detectChanges()
        //                 for(   let i of this.navigationMyElements._results.slice(4,12)   ){
        //                     i.nativeElement.style.display = 'block'  
        //                 }


        //             }


        //         }


        //     }

            
        //     // console.log(this.navigationMyElements )            
        // // console.groupEnd()
        // })     
        // this.wordsService.navigationLoadEventSubscription1 = this.wordsService.navigationLoadEvent$.subscribe((event)=>{
        // // console.group('anchors overlapping heading load event')


        //     if(   numberParse(   this.navigationMyElements._results[4].nativeElement.style.left   )   <=    this.wordsService[this.navigationTemplateVariable].metadata.titleWidth + 100  ){
        //         // this.navigationMyElements._results[0].nativeElement.style.backgroundColor = "#90EE90"
        //         // console.log(   numberParse(   this.navigationMyElements._results[1].nativeElement.style.left   )   )
        //         this.navigationBool[12] = 'true'
        //         this.ref.detectChanges()
                

        //         // console.log( this.navigationMyElements._results   )
        //         if(   this.navigationMyElements._results[12].nativeElement.id === "n_a_v_i_g_a_t_i_o_n_dropDownBox"   ){


        //             this.wordsService.navigationLoadEventSubscription1.unsubscribe()
        //             this.navigationMyElements._results[12].nativeElement.style.position = "absolute"
        //             this.navigationMyElements._results[12].nativeElement.style.top = "50px"
        //             // console.log(this.wordsService[this.navigationTemplateVariable].metadata.barDynamicWidth )
        //             this.navigationMyElements._results[12].nativeElement.style.left = (  1340* .96   + this.wordsService[this.navigationTemplateVariable].metadata.barDynamicWidth  ).toString() + "px"
        //             this.navigationMyElements._results[13].nativeElement.style.display = 'block'
        //             this.navigationMyElements._results[13].nativeElement.style.top = "60px"
        //             this.navigationMyElements._results[13].nativeElement.style.left = (  1340* .963   + this.wordsService[this.navigationTemplateVariable].metadata.barDynamicWidth  ).toString() + "px"
                    

        //             if(   this.wordsService.navigationClickEventSubscription0 === undefined  || this.wordsService.navigationClickEventSubscription0.closed   ){


        //                 this.wordsService.navigationClickEvent$ = fromEvent([this.navigationMyElements._results[12].nativeElement ,this.navigationMyElements._results[13].nativeElement] ,'click');
        //                 this.wordsService.navigationClickEventSubscription0 = this.wordsService.navigationClickEvent$.subscribe((event)=>{
        //                     this.navigationMyElements._results[14].nativeElement.style.display = this.navigationMyElements._results[14].nativeElement.style.display === 'block' ? 'none' : 'block'
        //                 })  
        //                 // console.log(   this.wordsService.navigationClickEventSubscription0   )      


        //             }


        //             for(   let i of this.navigationMyElements._results.slice(4,12)   ){
        //                 i.nativeElement.style.display = 'none'  
        //             }                                            


        //             if(   numberParse(   this.navigationMyElements._results[12].nativeElement.style.left   )   <=    this.wordsService[this.navigationTemplateVariable].metadata.titleWidth  + 55  ){

                        
        //                 // console.log('dropdownBox is interfering with the titile')
        //                 this.navigationMyElements._results.slice(1,3).map((x,i)=>{
        //                     x.nativeElement.style.fontSize =  (   numberParse(   this.wordsService[this.navigationTemplateVariable].metadata.defaultFontSizes[i]   ) * (   numberParse(   this.navigationMyElements._results[12].nativeElement.style.left   )/(   this.wordsService[this.navigationTemplateVariable].metadata.titleWidth  + 55 )  ) * .95  ).toString() + "px"
        //                     // console.log(   x.nativeElement.style.fontSize  )
        //                 })


        //             }            
                    
                    
        //         }
                

        //     }

        //     else if(   numberParse(   this.navigationMyElements._results[4].nativeElement.style.left   )   >=    this.wordsService[this.navigationTemplateVariable].metadata.titleWidth + 100  ){
        //         // this.navigationMyElements._results[0].nativeElement.style.backgroundColor = "#FFC0CB"
        //         // this.navigationBool[12] = 'false'
        //         this.wordsService.navigationLoadEventSubscription1.unsubscribe()


        //         if(   this.wordsService.navigationClickEventSubscription0 !== undefined   ){


        //             if(   !this.wordsService.navigationClickEventSubscription0.closed    ){


        //                 this.wordsService.navigationClickEventSubscription0.unsubscribe()   
                
                
        //             }


        //         }       
                
                
        //     }            


        //     // console.log(   this.navigationMyElements._results  )
        // // console.groupEnd()    
        // })
       
        

    }

    ngOnDestroy(){
        console.log( this.navigationTemplateVariable+ ' ngOnDestroy fires on dismount') 


        if(   this.navigationTemplateVariable  === 'navigationComponentObject0'   ){
        
        
            this.wordsService.navigationResizeEventSubscription0.unsubscribe()
        
    
        }        
    }

}


//TEST
// test that ngOnDestory make a fn call to unsubscribe