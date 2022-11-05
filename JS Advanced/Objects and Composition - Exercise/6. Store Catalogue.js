function solve (info) {
    
    let sorted = info.sort((a,b) => a.localeCompare(b));

    let products = {};

    sorted.forEach(entry => {
        let [ name, value ] = entry.split(` : `);
        let letter = name[0];

        if (products[letter] === undefined) {
            products[letter] = {};
        } 

        products[letter][name] = Number(value);
    });

    Object.keys(products).forEach(category => {
        console.log(category);
        Object.keys(products[category]).forEach(product => {
            console.log(`  ${product}: ${products[category][product]}`);
        })
    })

}
