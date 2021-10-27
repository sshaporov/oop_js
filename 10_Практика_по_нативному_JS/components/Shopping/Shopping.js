class Shopping {
    handleClear() {
        ROOT_SHOPPING.innerHTML = ''
    }
    render() {
        let htmlCatalog = '';
        let sumCount = 0;
        const productsStore = localStorageUtil.getProducts();

        CATALOG.forEach(({id, name, price}) => {
            if (productsStore.indexOf(id) !== -1) {
                htmlCatalog += `
                    <tr>
                        <td class="shopping-element__name">⚡️ ${name}</td>
                        <td class="shopping-element__price">${price} USD</td>
                    </tr>
                `
            }

            sumCount += price;
        })

        const html = `
            <div class="shopping-container">
            <div class="shopping-element__close" onclick="shoppingPage.handleClear()"></div>
                <table>
                    ${htmlCatalog}
                    <tr>
                        <td class="shopping-element__name">⚡️ Сумма</td>
                        <td class="shopping-element__price">${sumCount.toLocaleString()} USD</td>
                    </tr>
                </table>
            </div>
        `;
        ROOT_SHOPPING.innerHTML = html;
    }
}

const shoppingPage = new Shopping()