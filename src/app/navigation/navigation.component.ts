import { Component, OnInit,Input,ViewChildren,AfterViewInit,Inject } from '@angular/core';
import {   WordsService   } from '../words.service';
import {   fromEvent,interval   } from 'rxjs';
import {   WINDOW   } from '../window.service';
import {   take,timeout   } from 'rxjs/operators';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit,AfterViewInit  {

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

    ngOnInit() {

        this.wordsService.navigationMyElements.subscribe((arr)=>{

            // console.log(   arr   )   

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
        // console.log(this.wordsService.navigationComponentObject0)
    }

    ngAfterViewInit(){
        // grabbing 'HTMLWordElements'

        const navigationLoadEvent0 = fromEvent(this.window ,'load');
        navigationLoadEvent0.subscribe(this.wordsService.customWordWrapReceive({
            totalElements:this.navigationMyElements._results,
            HTMLWordElements:this.navigationCustomWordWrapElements
        }))
            

        // polyfill if event refuses to fire
        // var navigationIntervalRxjs0 = interval(10)
        // var navigationTakeRxjs0 =  navigationIntervalRxjs0.pipe(take(1))
        // navigationTakeRxjs0.subscribe((a)=>{
        //     var event = this.window.document.createEvent("Event");
        //     event.initEvent("load", false, true);
        //     this.window.dispatchEvent(   event   )
        // })        
        //
        
        // console.log(   this.navigationCustomWordWrapElements   )
        //TEST FOR THIS
        //
    }

}


//TEST
// that it gets  this.navigationCustomWordWrapElements 
//TEST i[0].nativeElement.style.width  must start with 0px its defined and you can access from js and later css
// TEST if customeWordWrapReceive returns