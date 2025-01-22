const { generalConf } = require('./general.conf.js')

let sauceLabsConf = {
    user: process.env.SAUCE_USERNAME,
    key: process.env.SAUCE_KEYS,
    hostname: 'ondemand.us-west-1.saucelabs.com',
    port: 443,
    baseUrl: 'wd/hub',
    capabilities: process.env.PLATFORM == "ios" [
        {
            platformName: 'iOS',
            'appium:app': 'storage:filename=LojaEBAC-sim.zip',
            'appium:deviceName': 'iPhone Simulator',
            'appium:platformVersion': '16.0',
            'appium:automationName': 'XCUITest',
            'sauce:options': {
                build: 'appium-build-teste-ebacshop-ios',
                name: 'Ebac Shop Teste',
                deviceOrientation: 'PORTRAIT',
                appiumVersion: '2.0.0'
            },
        }
    ],
    ...generalConf
}

module.exports = { sauceLabsConf }