class Page {
    constructor() {
        this.title = 'My Page'
    }

    open(path) {
        return browser.url(path)
    }
}

module.exports = Page