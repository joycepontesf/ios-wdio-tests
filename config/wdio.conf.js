const { localConf } = require('./local.conf')
const { sauceLabsConf } = require('./saucelabs.conf')

require('dotenv').config()

function getConfig() {
    switch (process.env.ENVIRONMENT) {
        case 'local':
            return localConf

        case 'saucelabs':
            return sauceLabsConf

    }
}

exports.config = getConfig()