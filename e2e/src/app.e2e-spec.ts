// import { AppPage } from './app.po';
import { browser, logging } from 'protractor';

describe('workspace-project App', () => {
//   let page: AppPage;

//   beforeEach(() => {
//     page = new AppPage();
//   });

  it('should display welcome message', () => {
    browser.get('https://tobologz.github.io').then(()=>{
        browser.getTitle().then((a)=>{
            expect(a).toBe('Welcome to AngularWindsorEmpire!')
        })
    })
    
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
