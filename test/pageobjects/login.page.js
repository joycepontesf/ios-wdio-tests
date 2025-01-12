const { $, driver } = require('@wdio/globals')
const Page = require('./page')

class Login extends Page {

    get accountTab() {
        return $('~tab-Account')
    }

    get email () {
        return $('~email')
    }

    get password () {
        return $('~password')
    }

    get btnLogin () {
        return $('~btnLogin')
    }

    async Login (emailData, passwordData) {
        
        await this.email.click()
        await driver.pause(2000)
        await this.email.setValue(emailData)
        
        await this.password.click()
        await driver.pause(2000)
        await this.password.setValue(passwordData)
    
        await this.btnLogin.click()
    }
}

module.exports = new Login()