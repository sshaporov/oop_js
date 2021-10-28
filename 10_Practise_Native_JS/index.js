function render() {
    const productsStore = localStorageUtil.getProducts();
    headerPage.render(productsStore.length);

    productsPage.render()
}

spinner.render();

let CATALOG = []

fetch('server/catalog.json')
    .then(res => res.json())
    .then(body => {
        CATALOG = body;

        setTimeout(function() {    // Демонтсрация задержки лодинга каталога
            spinner.handleClear();
            render();
        }, 1000)
    })
    .catch(err => {
        console.log(err);
        spinner.handleClear();
        error.render();
    })

