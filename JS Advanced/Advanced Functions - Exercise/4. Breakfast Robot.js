function solve() {
    
    let stock = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0
    };

    let recipes = {
        apple: [ `carbohydrate 1`, `flavour 2` ],
        lemonade: [ `carbohydrate 10`, `flavour 20` ],
        burger: [ `carbohydrate 5`, `fat 7`, `flavour 3` ],
        eggs: [ `protein 5`, `fat 1`, `flavour 1` ],
        turkey: [ `protein 10`, `carbohydrate 10`, `fat 10`, `flavour 10` ]
    };


    return solve2;

    function solve2(command){
       
        let commands = command.split(` `);

        switch (commands[0]) {
            case `restock`:
                let type = commands[1];
                let quantity = Number(commands[2]);

                stock[type] += quantity;
                return `Success`;
            break;
            case `prepare`:
                let recipe = commands[1];
                let quantity2 = Number(commands[2]);

                return prepare(recipe,quantity2);
            break;
            case `report`:
                return `protein=${stock.protein} carbohydrate=${stock.carbohydrate} fat=${stock.fat} flavour=${stock.flavour}`
            break;
        }

        function prepare(recipe, quantity2) {

            let currentRecipe = recipes[recipe];

            let enoughIngredients = true;
            let missingIngredient = ``;

            for (let recipe of currentRecipe) {
                let [ingredient, quantity] = recipe.split(` `);
                quantity = Number(quantity) * quantity2;
                if (quantity > stock[ingredient]) {
                    enoughIngredients = false;
                    missingIngredient = ingredient;
                    break;
                }
            };

            if (enoughIngredients) 
            {
                currentRecipe.forEach( recipe => {
                    let [ingredient, quantity] = recipe.split(` `);
                    quantity = Number(quantity) * quantity2;
                    stock[ingredient] -= quantity;
                });

                return `Success`;

            } else {
                return `Error: not enough ${missingIngredient} in stock`;
            }

        }

    }
}
