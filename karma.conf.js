// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

console.log = ()=>{}

module.exports = function (config) {
    config.set({
        basePath: '',
        frameworks: ['jasmine', '@angular-devkit/build-angular'],
        plugins: [
            require('karma-jasmine'),
            require('karma-chrome-launcher'),
            require('karma-jasmine-html-reporter'),
            require('karma-coverage-istanbul-reporter'),
            require('@angular-devkit/build-angular/plugins/karma'),
            require('karma-sauce-launcher')
        ],
        client: {
            clearContext: false // leave Jasmine Spec Runner output visible in browser
        },
        coverageIstanbulReporter: {
            dir: require('path').join(__dirname, './coverage/AngularWindsorEmpire'),
            reports: ['html', 'lcovonly', 'text-summary'],
            fixWebpackSourcePaths: true
        },
        reporters: ['progress', 'kjhtml'],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        browsers: [ 'ChromeHeadless'],
        customLaunchers: {
              ChromeHeadlessCI: {
                base: 'Chrome',
                flags: ['--no-sandbox']
              }
        },
        singleRun: false,
        restartOnFileChange: true
    })

    // var customLaunchers =  {
    //     sl_chrome: {
    //       base: 'SauceLabs',
    //       browserName: 'chrome',
    //       platform: 'Windows 7',
    //       version: '35'
    //     },
    //     sl_firefox: {
    //       base: 'SauceLabs',
    //       browserName: 'firefox',
    //       version: '30'
    //     },
    //     sl_ios_safari: {
    //       base: 'SauceLabs',
    //       browserName: 'safari',
    //     //   platform: 'macOS 10.14',
    //       version: '12.0'
    //     },
    //     sl_ie_11: {
    //       base: 'SauceLabs',
    //       browserName: 'internet explorer',
    //       platform: 'Windows 8.1',
    //       version: '11'
    //     }
    //     // sl_android: {
    //     //   base: 'SauceLabs',
    //     //   browserName: 'Browser',
    //     //   platform: 'Android',
    //     //   version: '4.4',
    //     //   deviceName: 'Samsung Galaxy S3 Emulator',
    //     //   deviceOrientation: 'portrait'
    //     // }
    // } 

    //   config.set({

    // //     // The rest of your karma config is here
    // //     // ...
    //     sauceLabs: {
    //         testName: 'Web App Unit Tests',
    //         // public:'public',
    //         // connectOptions: {
    //         //     noSslBumpDomains: "all",
    //         //     // port:5757
    //         // }            
    //     },
    //     captureTimeout: 12000000,
    //     customLaunchers,
    //     browsers: Object.keys(customLaunchers),
    //     reporters: ['dots', 'saucelabs','progress', 'kjhtml']
    //     // singleRun: true,

    //   })      
}