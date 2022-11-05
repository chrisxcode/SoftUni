function solve(fruit, weight, price) {
    let weightInKG = (weight / 1000);
    let moneyNeeded = weightInKG * price;
    

    console.log(`I need $${moneyNeeded.toFixed(2)} to buy ${weightInKG.toFixed(2)} kilograms ${fruit}.`);
}
