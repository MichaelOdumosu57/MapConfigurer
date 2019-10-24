import {  Component, OnInit,Input,ViewChildren,AfterViewInit,Inject, OnDestroy } from '@angular/core';
import {   WordsService   } from '../words.service';
import {   WINDOW   } from '../window.service';

@Component({
  selector: 'app-overlay',
  templateUrl: './overlay.component.html',
  styleUrls: ['./overlay.component.css']
})
export class OverlayComponent implements OnInit {

    @ViewChildren('myOverlayVal') overlayMyElements: any;     

    constructor(
        private wordsService: WordsService,
        @Inject(WINDOW) private window: Window,
    ) { }

    @Input() overlayTemplateVariable:string | any;

    overlayBool:Array<any> = this.wordsService.overlayBool
    overlayStyle:Array<any> = this.wordsService.overlayStyle
    overlayVal:Array<any> = this.wordsService.overlayVal

    overlayStyleIndex:Array<any> = this.wordsService.overlayStyleIndex
    overlayBoolIndex:Array<any> = this.wordsService.overlayBoolIndex   

    access(){
        return this.wordsService
    }

    accessWindow(){
        return this.window
    }
    
    
    ngOnInit() {
        this.wordsService.overlayMyElements.subscribe((arr)=>{

            console.log(   arr   )   
            
            // dealing with  missing elements
            if(   this.wordsService[this.overlayTemplateVariable].styles.length >   arr[this.overlayTemplateVariable.slice(-1)].length   ){


                this.wordsService[this.overlayTemplateVariable].stylesCopy = this.wordsService[this.overlayTemplateVariable].styles.filter((a,i)=>{


                    if(   i === 0   ){
                        

                        return true


                    }


                    else if(   i!== 0){


                        if(   this.overlayStyleIndex[0] === 0   ){


                            // console.log(  i,this.overlayBoolIndex[0]      )
                            this.overlayStyleIndex[0] =  this.overlayStyle[ this.overlayBoolIndex[0]   ].length
                            this.overlayBoolIndex[0] += 1
                            
                            
                        }
                        

                        this.overlayStyleIndex[0] -= 1


                        if(   this.overlayBool[   this.overlayBoolIndex[0] -1   ] === 'true'   ){


                            return true


                        }


                    }
                    

                    
                    
                })
                this.overlayBoolIndex[0] = 0


            }

            
            else if(   this.wordsService[this.overlayTemplateVariable].styles.length  ===  arr[this.overlayTemplateVariable.slice(-1)].length   ){
                
                
                this.wordsService[this.overlayTemplateVariable].stylesCopy = this.wordsService[this.overlayTemplateVariable].styles


            }


            // console.log(   this.overlaybool   )
            // console.log(   this.overlayStyle   )
            // console.log(   this.wordsService[this.overlayTemplateVariable].stylesCopy, arr[this.overlayTemplateVariable.slice(-1)]     )
            for(   var index in this.wordsService[this.overlayTemplateVariable].stylesCopy    ){
            
                // console.log(   arr[this.overlayTemplateVariable.slice(-1)][index].nativeElement.id   )
                if(   this.wordsService[this.overlayTemplateVariable].stylesCopy[index].override === 'true'   ){


                    for(   var prop in  this.wordsService[this.overlayTemplateVariable].stylesCopy[index].css   ){
                        
                        // console.log(   arr[this.overlayTemplateVariable.slice(-1)][index].nativeElement   )
                        arr[this.overlayTemplateVariable.slice(-1)][index].nativeElement.style[prop] = this.wordsService[this.overlayTemplateVariable].stylesCopy[index].css[prop]
                       
                        
                    }

                                
                }


            }
            //for some reason, ngOnInit does not fully complete before ngAfterViewInit and you must place this here
        })           
    }

}
