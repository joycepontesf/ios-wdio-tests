const { localConf } = require('./local.conf')
const { sauceLabsConf } = require('./saucelabs.conf')
const { browserStackConf } = require('./browserstack.conf')

require('dotenv').config()

function getConfig() {
    switch (process.env.ENVIRONMENT) {
        case 'local':
            return localConf

        case 'saucelabs':
            return sauceLabsConf

        case 'browserstack':
            return browserStackConf
    }
}

exports.config = { ...getConfig() } 