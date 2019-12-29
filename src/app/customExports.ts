export class zChildren {
    element:  HTMLElement;
    style:Object | any;
    cssDefault?:Object;
    bool?:string;
    innerText?:null | string;
    link?:string;
}

export class componentObject { // not final
    quantity: any[]; 
    generator?: Generator;
    metadata?: Object 
}


/*
mobile stacking template

                    zChild[2].style['width'] = (
                        .95 * numberParse(  this.window.getComputedStyle(   zChild[1].element   ).width   )
                    ).toString() + 'px'
                    zChild[2].style['font-size'] = '25px'
                    // zChild[2].style['font-style'] = 'italic'
                    this.ref.detectChanges()
                    zChild[2].style['top']  = '40px'
                    // zChild[2].style['top'] = (
                    //     numberParse(   this.window.getComputedStyle(   zChild[16].element   ).top   ) +
                    //     numberParse(   this.window.getComputedStyle(   zChild[16].element   ).height   )+
                    //     25
                    // ).toString() + 'px'
                    zChild[2].style['left'] = xPosition({
                        contain:numberParse(   this.window.getComputedStyle(zChild[1].element).width   ),
                        target:numberParse(   this.window.getComputedStyle(zChild[2].element).width   )
                    })     
                    zChild[2].style['text-align'] = 'center' 
                    this.ref.detectChanges()      

to expand the height of the containing element
                    
*/ 


export function getTextWidth(   devObj:{elementText:string,font:string}   ){
    var canvas = document.createElement("canvas");
    var ctx = canvas.getContext("2d");
    ctx.font = devObj.font;  // This can be set programmaticly from the element's font-style if desired
    return ctx.measureText(devObj.elementText).width;
}

export function numberParse(   dimension:any   ){
    dimension = parseFloat(dimension.split("p")[0])
    return dimension;
}

export function resize(   devObj:any   ){
    // console.log(   devObj   )
    let result = null


    if(   devObj.misc === undefined   ){
        devObj.misc = [.12]
    }
    

    if(   devObj.type === 'direct'   ){


        result = 
        (
            devObj.default -
            (
                devObj.containDefault   -
                devObj.containActual    
            ) * 
            devObj.misc[0]
        )


    }
    
    else if(   devObj.type !== 'direct' ){


        result = (
            devObj.default *
            (
                (   
                    (  
                        devObj.containActual  /
                        devObj.containDefault   
                    ) -
                    devObj.misc[0]   
                ) 
            )
        ) 


    }
    return result = result > devObj.default  ? 
        devObj.default.toString() + "px"      :
        result.toString() + "px"     
}


export function xPosition(devObj){


    if(   devObj.containPos === undefined   ){


        devObj.containPos = .5
        
        
    }


    if(   devObj.targetPos === undefined   ){

        
        devObj.targetPos = .5
        
        
    }
    
    return (    
        (   devObj.contain*devObj.containPos   ) -  
        (   devObj.target*devObj.targetPos   )   
    ).toString() + "px"; 
}