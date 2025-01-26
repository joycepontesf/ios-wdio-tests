const { generalConf } = require('./general.conf.js')

let sauceLabsConf = {
    user: process.env.SAUCE_USERNAME,
    key: process.env.SAUCE_ACCESS_KEY,
    hostname: 'ondemand.us-west-1.saucelabs.com',
    port: 443,
    baseUrl: '/wd/hub',
    capabilities : [{
        platformName: 'iOS',
        'appium:app': 'storage:filename=LojaEBAC-sim.zip',
        'appium:deviceName': 'iPhone Simulator',
        'appium:platformVersion': '17.0',
        'appium:automationName': 'XCUITest',
        'sauce:options': {
            appiumVersion: '2.1.3',
            build: 'ebac-shop',
            name: 'tests-ebac-shop-ios',
            deviceOrientation: 'PORTRAIT',
        },
    }],
    ...generalConf

}

module.exports = { sauceLabsConf }