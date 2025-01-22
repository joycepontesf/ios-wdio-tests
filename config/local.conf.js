const { generalConf } = require('./general.conf')

let localConf = {
    runner: 'local',
    port: 4723,
    capabilities: process.env.PLATFORM === "android" ? [
        {
            "appium:platformName": 'Android',
            'appium:deviceName': 'ebac-qe',
            'appium:platformVersion': '11.0',
            'appium:automationName': 'UiAutomator2',
            'appium:app': `${process.cwd()}/app/ebacshop.apks`,
            'appium:appWaitActivity': '.MainActivity',
            'appium:disableIdLocatorAutocompletion': true
        }
    ] : [
        {
            "appium:platformName": "iOS",
            "appium:deviceName": "iPhone 16",
            "appium:platformVersion": "18.2",
            "appium:automationName": "XCUITest",
            "appium:app": `${process.cwd()}/app/LojaEBAC-sim.app`
        }
    ],
    ...generalConf
}

module.exports = { localConf }