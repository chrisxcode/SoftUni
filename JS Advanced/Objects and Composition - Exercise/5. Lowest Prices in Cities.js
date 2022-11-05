function solve (data) {

    let products = {};

    data.forEach(entry => {
        let [town, product, price] = entry.split(` | `);
        price = Number([price]);

        if (products[product] === undefined) {
            products[product] = { price, town };
        } else {
           if (products[product][`price`] > price) {
            products[product][`price`] = price;
            products[product][`town`] = town;
           }
        }
    });

    Object.keys(products).forEach(key => console.log(`${key} -> ${products[key].price} (${products[key].town})`));

}
