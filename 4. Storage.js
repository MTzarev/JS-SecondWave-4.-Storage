function storage(arr) {
    let objStorage = {};
    for (let line of arr) {
        let [product, qty] = line.split(` `);
        qty = Number(qty)

        if (objStorage.hasOwnProperty(product)) {
            objStorage[product] += qty;
        } else {
            objStorage[product] = qty;
        }
    }
    for (let prod in objStorage) {
        console.log(`${prod} -> ${objStorage[prod]}`);

    }

    console.log();
}
storage(['apple 50',

    'apple 61',

    'coffee 115',

    'coffee 40'])