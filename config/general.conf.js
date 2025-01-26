const { reportersConf } = require ('./reporters.conf.js')
const { hooksConf } = require ('./hooks.conf.js')
const { specsConf } = require ('./specs.conf.js')

let generalConf = {
    maxInstances: 10,
    logLevel: 'info',
    waitforTimeout: 10000,
    connectionRetryTimeout: 180000,
    connectionRetryCount: 5,
    framework: 'mocha',
    logLevel: 'debug', 
    mochaOpts: {
        ui: 'bdd',
        timeout: 120000
    },
    ...specsConf,
    ...reportersConf,
    ...hooksConf
}

module.exports = { generalConf }