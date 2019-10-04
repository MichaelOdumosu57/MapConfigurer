import { Component, OnInit,Input,ViewChildren } from '@angular/core';
import {   WordsService   } from '../words.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

    @ViewChildren('myNavigationVal') navigationMyElements: any;

    constructor(
        private wordsService: WordsService
    ) { }
    
    @Input() navigationTemplateVariable:string | any;

    navigationBool:Array<any> = this.wordsService.navigationBool
    navigationStyle:Array<any> = this.wordsService.navigationStyle
    navigationVal:Array<any> = this.wordsService.navigationVal

    navigationStyleIndex:Array<any> = this.wordsService.navigationStyleIndex
    navigationBoolIndex:Array<any> = this.wordsService.navigationBoolIndex    

    ngOnInit() {

        this.wordsService.navigationMyElements.subscribe((arr)=>{

            console.log(   arr   )   

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

}
