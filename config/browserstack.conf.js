const { generalConf } = require('./general.conf.js')

let browserStackConf = {
    user: process.env.BROWSERSTACK_USERNAME,
    key: process.env.BROWSERSTACK_ACCESS_KEY,
    hostname: 'hub.browserstack.com',
    capabilities: [{
            "platformName": "ios",
            "appium:app": "bs://685fe95b55533a472135d8b68d2cdb640ff9ac9b",
            "appium:deviceName": "iPhone 14 Pro Max",
            "appium:platformVersion": "16"
    }],
    ...generalConf

}

module.exports = { browserStackConf }