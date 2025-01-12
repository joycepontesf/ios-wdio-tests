import data from '../../data/testData.json'
const { expect } = require('@wdio/globals')
const login = require('../pageobjects/login.page')


describe('New Client Registration', () => {

    it('login and buy a product', async () => {
        homePage = await $(`-ios predicate string: name == "EBAC Store" AND label == "EBAC Store" AND value == "EBAC Store"`)
        
        await login.accountTab.click()
        
        await login.Login(
            data.validAccess.email, data.validAccess.password
        )

        await driver.pause(3000)

        await expect(homePage).toBeExisting()

    });
})

