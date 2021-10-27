class LocalStorageUtil {
    constructor() {
        this.keyName = 'products'
    }
    getProducts() {
        const products = localStorage.getItem(this.keyName)
        if (products !== null) {
            return JSON.parse(products)
        }

        return []
    }
    putProducts(id) {
        const products = this.getProducts()
        const index = products.indexOf(id)
        let pushProduct = false

        if (index === -1) {
            products.push(id)
            pushProduct = true
        } else {
            products.splice(index, 1)
        }
        localStorage.setItem(this.keyName, JSON.stringify(products))

        return { pushProduct, products }
    }
}

const localStorageUtil = new LocalStorageUtil()