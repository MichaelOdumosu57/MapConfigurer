import { browser,by,element,protractor,Capabilities,Browser } from 'protractor';

protractor.browser.getCapabilities().then((value: Capabilities)=>{
            
            
    if(   value.get("browserName")   === 'safari'   ){
        
    
        browser.waitForAngularEnabled(false)
        
        
    }
    
    
})

describe('App Navigation', function() {
    it('can get to the home page',function(){
        browser.get("http://localhost:4200/").then(()=>{
            expect(
                element(by.css('[ng-reflect-overlay-template-variable="overlayComponentObject4"]'))
            ).toBeTruthy()
        })
    })

    xit('can get to the about page',function(){
        browser.get("http://localhost:4200/").then(()=>{
            element(by.id('gobutton')).click();
        })
    })    

});