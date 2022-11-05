function solve (arrOfJuices) {

    let bottles = new Map();

    let resources = {};

    arrOfJuices.forEach(juice => {
        let [type, quantity] = juice.split(` => `);

        if (resources[type] == undefined) {
            resources[type] = Number(quantity);
        } else {
            resources[type] += Number(quantity);
        }

        if (resources[type] >= 1000) {
            let newBottles = Math.floor(resources[type] / 1000);
            let leftovers = resources[type] % 1000;

            bottles.has(type) ? bottles.set(type, bottles.get(type) + newBottles) : bottles.set(type, newBottles);
            resources[type] = leftovers;
        }

    });


    for (let [name, num] of bottles) {
        console.log([name,num].join(` => `));
    }
}
