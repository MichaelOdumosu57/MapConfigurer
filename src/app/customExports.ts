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