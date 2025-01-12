const { $ } = require('@wdio/globals')
const Page = require('./page')

class ProductsPage extends Page {

    get searchProduct() {
        return $('~Search Products')
    }

    async ProductSelect () {
        //await this.firstName.setValue(firstname)
    }

    /**
     * overwrite specific options to adapt it to page object
     */
}

module.exports = new ProductsPage()
