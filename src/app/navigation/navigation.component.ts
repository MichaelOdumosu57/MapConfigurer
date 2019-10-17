import { Component, OnInit,Input,ViewChildren,AfterViewInit,Inject, OnDestroy } from '@angular/core';
import {   WordsService   } from '../words.service';
import {   fromEvent,interval   } from 'rxjs';
import {   WINDOW   } from '../window.service';
import {   take,timeout   } from 'rxjs/operators';

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
    
    // access(){
    //     return this.wordsService
    // }

    // accessWindow(){
    //     return this.window
    // }

    ngOnInit() {
        
        // console.log(   this.wordsService[this.navigationTemplateVariable]   )
        // console.log(   this.navigationTemplateVariable   )
        this.wordsService.navigationMyElements.subscribe((arr)=>{

            // console.log(   arr   )   

            // applying dynamic styles
            console.log(   'DOMRECT bar width',this.navigationMyElements._results[0].nativeElement.getBoundingClientRect().width    )    
            console.log(   'screen width ', this.window.screen.width   )     
            for(   let i in this.wordsService[this.navigationTemplateVariable].styles   ){
                switch(parseInt(i)) {
                    case 5:
                        this.wordsService[this.navigationTemplateVariable].styles[i].css.left = (  this.window.screen.width * .47   ).toString() + "px"
                      break;
                    case 6:
                        this.wordsService[this.navigationTemplateVariable].styles[i].css.left = (  this.window.screen.width * .53   ).toString() + "px"
                      break;
                    case 7:
                        this.wordsService[this.navigationTemplateVariable].styles[i].css.left = (  this.window.screen.width * .58   ).toString() + "px"
                      break;    
                    case 8:
                        this.wordsService[this.navigationTemplateVariable].styles[i].css.left = (  this.window.screen.width * .65   ).toString() + "px"
                      break;     
                    case 9:
                        this.wordsService[this.navigationTemplateVariable].styles[i].css.left = (  this.window.screen.width * .72   ).toString() + "px"
                      break;    
                    case 10:
                        this.wordsService[this.navigationTemplateVariable].styles[i].css.left = (  this.window.screen.width * .77   ).toString() + "px"
                      break;  
                    case 11:
                        this.wordsService[this.navigationTemplateVariable].styles[i].css.left = (  this.window.screen.width * .85   ).toString() + "px"
                      break;     
                    case 12:
                        this.wordsService[this.navigationTemplateVariable].styles[i].css.left = (  this.window.screen.width * .83   ).toString() + "px"
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
                    // console.log(    this.navigationMyElements._results[i].nativeElement.style.left   )
                    console.log(   'DOMRECT bar width',this.window.screen.width   )
                    console.log(   'css', this.window.getComputedStyle(   this.navigationMyElements._results[0].nativeElement   ).getPropertyValue('width'))
                }
            }
            console.groupEnd()
        })
        
        


        // polyfill if event refuses to fire
        // var navigationIntervalRxjs0 = interval(10)
        // var navigationTakeRxjs0 =  navigationIntervalRxjs0.pipe(take(1))
        // navigationTakeRxjs0.subscribe((a)=>{
        //     var event = this.window.document.createEvent("Event");
        //     event.initEvent("load", false, true);
        //     this.window.dispatchEvent(   event   )
        // })        
        //
        
    }

    ngOnDestroy(){
        this.wordsService.navigationResizeEventSubscription0.unsubscribe()
    }

}


//TEST
// that it gets  this.navigationCustomWordWrapElements  it keeps failing for some reasons 
//TEST i[0].nativeElement.style.width  must start with 0px its defined and you can access from js and later css
// TEST if customeWordWrapReceive returns