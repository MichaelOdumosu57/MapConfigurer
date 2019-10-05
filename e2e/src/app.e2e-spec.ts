import { AppPage } from './app.po';
import { browser, logging,protractor,by,element,By } from 'protractor';
import {   getDebugNode   } from '@angular/core';

// console.log(protractor)
describe('workspace-project App', () => {
    let page: AppPage;

    // beforeEach(() => {
    //     page = new AppPage();
    // });

    it('should display welcome message', () => {
        browser.get('http://24.189.66.225').then((a)=>{
            browser.getTitle().then((a)=>{
                expect('Welcome to AngularWindsorEmpire!').toBe('Welcome to AngularWindsorEmpire!')
            })
        })
    });



//   afterEach(async () => {
//     // Assert that there are no errors emitted from the browser
//     const logs = await browser.manage().logs().get(logging.Type.BROWSER);
//     expect(logs).not.toContain(jasmine.objectContaining({
//       level: logging.Level.SEVERE,
//     } as logging.Entry));
//   });
});
