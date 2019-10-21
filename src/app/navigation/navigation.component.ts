import { Component, OnInit,Input,ViewChildren,AfterViewInit,Inject, OnDestroy } from '@angular/core';
import {   WordsService   } from '../words.service';
import {   fromEvent,interval   } from 'rxjs';
import {   WINDOW   } from '../window.service';
import {   take,timeout   } from 'rxjs/operators';

function numberParse(dimension){
    dimension = parseFloat(dimension.split("p")[0])
    return dimension;
}

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit,AfterViewInit,OnDestroy  {

    @ViewChildren('myNavigationVal') navigationMyElements: any;

    constructor(
        private wordsService: WordsService,
        @Inject(WINDOW) private window: Window
    ) { }
    
    @Input() navigationTemplateVariable:string | any;

    navigationBool:Array<any> = this.wordsService.navigationBool
    navigationStyle:Array<any> = this.wordsService.navigationStyle
    navigationVal:Array<any> = this.wordsService.navigationVal

    navigationStyleIndex:Array<any> = this.wordsService.navigationStyleIndex
    navigationBoolIndex:Array<any> = this.wordsService.navigationBoolIndex    

    navigationCustomWordWrapElements:Array<any>  = []
    
    access(){
        return this.wordsService
    }

    accessWindow(){
        return this.window
    }

    ngOnInit() {
        
        // console.log(   this.wordsService[this.navigationTemplateVariable]   )
        // console.log(   this.navigationTemplateVariable   )
        this.wordsService.navigationMyElements.subscribe((arr)=>{

            // console.log(   arr   )   

            // applying dynamic styles
            console.log(   'DOMRECT bar width',this.navigationMyElements._results[0].nativeElement.getBoundingClientRect().width    )    
            console.log(   'screen width ', this.window.screen.width   )     
            console.log(   'document.body',   this.window.document.body.offsetWidth   )
            this.wordsService[this.navigationTemplateVariable].metadata.barDynamicWidth = this.navigationMyElements._results[0].nativeElement.getBoundingClientRect().width  - 1340
            for(   let i in this.wordsService[this.navigationTemplateVariable].styles   ){
                switch(parseInt(i)) {
                    case 5:
                        this.wordsService[this.navigationTemplateVariable].styles[i].css.left = (  1340* .47  + this.wordsService[this.navigationTemplateVariable].metadata.barDynamicWidth  ).toString() + "px"
                      break;
                    case 6:
                        this.wordsService[this.navigationTemplateVariable].styles[i].css.left = (  1340* .53  + this.wordsService[this.navigationTemplateVariable].metadata.barDynamicWidth ).toString() + "px"
                      break;
                    case 7:
                        this.wordsService[this.navigationTemplateVariable].styles[i].css.left = (  1340* .58  + this.wordsService[this.navigationTemplateVariable].metadata.barDynamicWidth   ).toString() + "px"
                      break;    
                    case 8:
                        this.wordsService[this.navigationTemplateVariable].styles[i].css.left = (  1340* .65   + this.wordsService[this.navigationTemplateVariable].metadata.barDynamicWidth  ).toString() + "px"
                      break;     
                    case 9:
                        this.wordsService[this.navigationTemplateVariable].styles[i].css.left = (  1340* .72  + this.wordsService[this.navigationTemplateVariable].metadata.barDynamicWidth   ).toString() + "px"
                      break;    
                    case 10:
                        this.wordsService[this.navigationTemplateVariable].styles[i].css.left = (  1340* .77   + this.wordsService[this.navigationTemplateVariable].metadata.barDynamicWidth  ).toString() + "px"
                      break;  
                    case 11:
                        this.wordsService[this.navigationTemplateVariable].styles[i].css.left = (  1340* .85  + this.wordsService[this.navigationTemplateVariable].metadata.barDynamicWidth   ).toString() + "px"
                      break;     
                    case 12:
                        this.wordsService[this.navigationTemplateVariable].styles[i].css.left = (  1340* .83   + this.wordsService[this.navigationTemplateVariable].metadata.barDynamicWidth  ).toString() + "px"
                      break;                                                                                                                            
                    default:
                      // code block
                }                    
            }
            
            //

            // dealing with  missing elements
            if(   this.wordsService[this.navigationTemplateVariable].styles.length >   arr[this.navigationTemplateVariable.slice(-1)].length   ){


                this.wordsService[this.navigationTemplateVariable].stylesCopy = this.wordsService[this.navigationTemplateVariable].styles.filter((a,i)=>{


                    if(   i === 0   ){
                        

                        return true


                    }


                    else if(   i!== 0){


                        if(   this.navigationStyleIndex[0] === 0   ){


                            // console.log(  i,this.navigationBoolIndex[0]      )
                            this.navigationStyleIndex[0] =  this.navigationStyle[ this.navigationBoolIndex[0]   ].length
                            this.navigationBoolIndex[0] += 1
                            
                            
                        }
                        

                        this.navigationStyleIndex[0] -= 1


                        if(   this.navigationBool[   this.navigationBoolIndex[0] -1   ] === 'true'   ){


                            return true


                        }


                    }
                    

                    
                    
                })
                this.navigationBoolIndex[0] = 0


            }

            
            else if(   this.wordsService[this.navigationTemplateVariable].styles.length  ===  arr[this.navigationTemplateVariable.slice(-1)].length   ){
                
                
                this.wordsService[this.navigationTemplateVariable].stylesCopy = this.wordsService[this.navigationTemplateVariable].styles


            }


            // console.log(   this.navigationbool   )
            // console.log(   this.navigationStyle   )
            // console.log(   this.wordsService[this.navigationTemplateVariable].stylesCopy, arr[this.navigationTemplateVariable.slice(-1)]     )
            for(   var index in this.wordsService[this.navigationTemplateVariable].stylesCopy    ){
            
                // console.log(   arr[this.navigationTemplateVariable.slice(-1)][index].nativeElement.id   )
                if(   this.wordsService[this.navigationTemplateVariable].stylesCopy[index].override === 'true'   ){


                    for(   var prop in  this.wordsService[this.navigationTemplateVariable].stylesCopy[index].css   ){
                        
                        // console.log(   arr[this.navigationTemplateVariable.slice(-1)][index].nativeElement   )
                        arr[this.navigationTemplateVariable.slice(-1)][index].nativeElement.style[prop] = this.wordsService[this.navigationTemplateVariable].stylesCopy[index].css[prop]
                       
                        
                    }

                                
                }


            }
        })        
               
    }

    ngAfterViewInit(){
        // grabbing 'HTMLWordElements'

        
        this.wordsService.navigationLoadEvent0 = fromEvent(this.window ,'load');
        this.wordsService[this.navigationTemplateVariable].location.parameters.push(
            this.wordsService[this.navigationTemplateVariable].parameters.push({
                fn:'wordsService.customWordWrapReceive',
                totalElements:this.navigationMyElements._results,
                HTMLWordElements:this.navigationCustomWordWrapElements
            }) - 1// for it returns the length of the array
        )
        this.wordsService.navigationLoadEventSubscription0 = this.wordsService.navigationLoadEvent0.subscribe(this.wordsService.customWordWrapReceive({
            totalElements:this.navigationMyElements._results,
            HTMLWordElements:{
                                parameters:this.wordsService[this.navigationTemplateVariable].location.parameters.slice(-1)[0],
                                templateVar:this.navigationTemplateVariable
                            }
        }))
        this.wordsService.navigationResizeEvent0 = fromEvent(this.window ,'resize');
        this.wordsService.navigationResizeEventSubscription0 = this.wordsService.navigationResizeEvent0.subscribe((event)=>{
            console.group()
            // console.log('innerWidth',this.window.innerWidth)
            // console.log('outerWidth',this.window.screen.width)
            // console.log('screen constant',this.window.screen.width)
            // console.log('bar width',this.navigationMyElements._results[0].nativeElement.clientWidth)
            for(   let i in this.navigationMyElements._results   ){
                if(   parseInt(i) >= 4   ){
                    // console.log(   'DOMRECT bar width',this.window.screen.width   )
                    // console.log(   'css', this.window.getComputedStyle(   this.navigationMyElements._results[i].nativeElement   ).getPropertyValue('left'))
                    this.navigationMyElements._results[i].nativeElement.style.left = (   numberParse(   this.navigationMyElements._results[i].nativeElement.style.left   ) - this.wordsService[this.navigationTemplateVariable].metadata.barDynamicWidth    ).toString() + "px"  
                    this.navigationMyElements._results[i].nativeElement.style.left = (   numberParse(   this.navigationMyElements._results[i].nativeElement.style.left   ) +  this.navigationMyElements._results[0].nativeElement.getBoundingClientRect().width - 1340   ).toString() + "px"  
                }
            }
            this.wordsService[this.navigationTemplateVariable].metadata.barDynamicWidth  = this.navigationMyElements._results[0].nativeElement.getBoundingClientRect().width - 1340
            console.groupEnd()
        })
        
    }

    ngOnDestroy(){
        this.wordsService.navigationResizeEventSubscription0.unsubscribe()
        
    }

}


//TEST
// test that ngOnDestory make a fn call to unsubscribe