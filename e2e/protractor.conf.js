// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

const { SpecReporter } = require('jasmine-spec-reporter');
// const  needed = require('../sec/creden.js')
// console.log(__dirname)

exports.config = {
  allScriptsTimeout: 11000,
  specs: [
    './src/**/*.e2e-spec.ts'
  ],
//   capabilities: {
//     'browserName': 'chrome'
//   },
    capabilities :{
      browserName: 'chrome',
      browserVersion: '76.0',
      chromeOptions: {
        args: ['--headless', '--no-sandbox']
      }
    },
//   multiCapabilities: [
//   {
//     browserName: 'firefox'
//   },
//   {
//     browserName: 'chrome',
//     browserVersion: '77.0',
//     platformName: 'Windows 10'
//   },
//   {
//     browserName: 'safari',
//     'platform' : 'macOS 10.13',
//     'version' :'11.1',
//   },
//   {
//     browserName: 'internet explorer',
//     'platform' : 'Windows 8.1',
//     'version' :'11.0',
//     'screenResolution':'1024x768'
//   },
//   {
//     browserName: 'MicrosoftEdge',
//     'platform' : 'Windows 10',
//     'version' :'17.17134',
//     'screenResolution':'1280x800'
//   }
//   ],
//   sauceUser:needed.sauceUser,
//   sauceKey:needed.sauceKey,
//   seleniumAddress: "https://" + needed.sauceUser + ":" + needed.sauceKey +
        //   "@ondemand.saucelabs.com:443/wd/hub",
  directConnect: true,  //when using sauce labs console.log baseUrl and changes directconnect to false
  baseUrl: 'http://localhost:4202/',
  framework: 'jasmine',
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000,
    print: function() {}
  },
  logLevel:'INFO',
  onPrepare() {
    require('ts-node').register({
      project: require('path').join(__dirname, './tsconfig.e2e.json')
    });
    jasmine.getEnv().addReporter(new SpecReporter({ spec: { displayStacktrace: true } }));
  }
};