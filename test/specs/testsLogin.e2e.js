import data from '../../data/testData.json'
const { expect, browser } = require('@wdio/globals')
const login = require('../pageobjects/login.page')

describe('Test suite for login', () => {

    let homePage
    let alert

    it('Login with Email incorrect', async () => {
        alert = await $(`-ios predicate string: name == "Enter a valid email address"`)

        await login.accountTab.click()
        await login.Login(data.invalidAccess.email, data.validAccess.password)

        await expect(alert).toHaveText('Enter a valid email address')
    })

    it('Empty login', async () => {
        alert = await $(`-ios predicate string: name == "Please enter an email"`)

        await login.accountTab.click()
        await login.btnLogin.click()

        await expect(alert).toHaveText('Please enter an email')
    })

    it('Login with Password incorrect', async () => {
        alert = await $(`-ios predicate string: name == "Password is incorrect"`)

        await login.accountTab.click()
        await login.Login(data.validAccess.email, data.invalidAccess.password)

        await expect(alert).toHaveText('Password is incorrect')
    })

    it('Login successful', async () => {
        homePage = await $(`-ios predicate string: name == "EBAC Store" AND label == "EBAC Store" AND value == "EBAC Store"`)

        await login.accountTab.click()
        await login.Login(data.validAccess.email, data.validAccess.password)

        await expect(homePage).toBeExisting()
    })
})