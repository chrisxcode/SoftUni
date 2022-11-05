describe (`addFive`, () => {

// should accept single parameter

it(`should accept a single parameter`, () => {
    let input = 5;
    let result = mathEnforcer.addFive(input);
    expect(result).to.be.equal(10);

});

it(`should accept an integer`, () => {
    let input = 1.5;
    let result = mathEnforcer.addFive(input);
    expect(result).to.be.equal(6.5);

});

it(`should accept a negative integer`, () => {
    let input = -1.5;
    let result = mathEnforcer.addFive(input);
    expect(result).to.be.equal(3.5);

});

it(`should ignore a second parameter`, () => {
    let input = 5;
    let secondInput = 10;
    let result = mathEnforcer.addFive(input, secondInput);
    expect(result).to.be.equal(10);

});

it(`should ignore more parameters after the first`, () => {
    let input = 5;
    let secondInput = 10;
    let thirdInput = 20;
    let forthInput = 40;
    let result = mathEnforcer.addFive(input, secondInput, thirdInput, forthInput);
    expect(result).to.be.equal(10);

});


// If the parameter is NOT a number, the function should return undefined.

it(`should return undefined if parameter is an empty object`, () => {
    let input = {};
    let result = mathEnforcer.addFive(input);
    expect(result).to.be.equal(undefined);

});

it(`should return undefined if parameter is an object with attributes`, () => {
    let input = { name: `Ivan`};
    let result = mathEnforcer.addFive(input);
    expect(result).to.be.equal(undefined);

});

it(`should return undefined if parameter is an empty array`, () => {
    let input = [];
    let result = mathEnforcer.addFive(input);
    expect(result).to.be.equal(undefined);

});

it(`should return undefined if parameter is an full array`, () => {
    let input = [1,2,3];
    let result = mathEnforcer.addFive(input);
    expect(result).to.be.equal(undefined);

});

it(`should return undefined if parameter is a boolean`, () => {
    let input = true;
    let result = mathEnforcer.addFive(input);
    expect(result).to.be.equal(undefined);

});

it(`should return undefined if parameter is a string`, () => {
    let input = `kaka`;
    let result = mathEnforcer.addFive(input);
    expect(result).to.be.equal(undefined);

});

it(`should return undefined if parameter is a string number`, () => {
    let input = `1`;
    let result = mathEnforcer.addFive(input);
    expect(result).to.be.equal(undefined);

});

//	If the parameter is a number, add 5 to it, and return the result.
//

it(`should return the correct result if the parameter is a number`, () => {
    let input = 0;
    let result = mathEnforcer.addFive(input);
    expect(result).to.be.equal(5);

});

it(`should return the correct result if the parameter is a number`, () => {
    let input = -2;
    let result = mathEnforcer.addFive(input);
    expect(result).to.be.equal(3);

});


});

describe (`subtractTen`, () => {

    // A function that accepts a single parameter:

    it(`should accept a single parameter`, () => {
        let input = 15;
        let result = mathEnforcer.subtractTen(input);
        expect(result).to.be.equal(5);
    
    });

    it(`should accept an integer parameter`, () => {
        let input = 1.5;
        let result = mathEnforcer.subtractTen(input);
        expect(result).to.be.equal(-8.5);
    
    });
    it(`should accept a negativeinteger parameter`, () => {
        let input = -1.5;
        let result = mathEnforcer.subtractTen(input);
        expect(result).to.be.equal(-11.5);
    
    });
    
    it(`should ignore a second parameter`, () => {
        let input = 20;
        let secondInput = 10;
        let result = mathEnforcer.subtractTen(input, secondInput);
        expect(result).to.be.equal(10);
    
    });
    
    it(`should ignore more parameters after the first`, () => {
        let input = 30;
        let secondInput = 10;
        let thirdInput = 20;
        let forthInput = 40;
        let result = mathEnforcer.subtractTen(input, secondInput, thirdInput, forthInput);
        expect(result).to.be.equal(20);
    
    });
    // ⦁	If the parameter is NOT a number, the function should return undefined.

    it(`should return undefined if parameter is an empty object`, () => {
        let input = {};
        let result = mathEnforcer.subtractTen(input);
        expect(result).to.be.equal(undefined);
    
    });
    
    it(`should return undefined if parameter is an object with attributes`, () => {
        let input = { name: `Ivan`};
        let result = mathEnforcer.subtractTen(input);
        expect(result).to.be.equal(undefined);
    
    });
    
    it(`should return undefined if parameter is an empty array`, () => {
        let input = [];
        let result = mathEnforcer.subtractTen(input);
        expect(result).to.be.equal(undefined);
    
    });
    
    it(`should return undefined if parameter is an full array`, () => {
        let input = [1,2,3];
        let result = mathEnforcer.subtractTen(input);
        expect(result).to.be.equal(undefined);
    
    });
    
    it(`should return undefined if parameter is a boolean`, () => {
        let input = true;
        let result = mathEnforcer.subtractTen(input);
        expect(result).to.be.equal(undefined);
    
    });
    
    it(`should return undefined if parameter is a string`, () => {
        let input = `kaka`;
        let result = mathEnforcer.subtractTen(input);
        expect(result).to.be.equal(undefined);
    
    });
    
    it(`should return undefined if parameter is a string number`, () => {
        let input = `1`;
        let result = mathEnforcer.subtractTen(input);
        expect(result).to.be.equal(undefined);
    
    });


    // ⦁	If the parameter is a number, subtract 10 from it, and return the result.

    it(`should return the correct result if the parameter is a number`, () => {
        let input = 0;
        let result = mathEnforcer.subtractTen(input);
        expect(result).to.be.equal(-10);
    
    });
    
    it(`should return the correct result if the parameter is a number`, () => {
        let input = -2;
        let result = mathEnforcer.subtractTen(input);
        expect(result).to.be.equal(-12);
    
    });
    

});

describe (`sum`, () => {

//     - A function that accepts two parameters:

it(`should return a correct result if provided two correct parameters`, () => {
    let input = 5;
    let secondInput = 10;
    let result = mathEnforcer.sum(input, secondInput);
    expect(result).to.be.equal(15)

});

it(`should return a correct result if provided two integer parameters`, () => {
    let input = 5.5;
    let secondInput = 10.5;
    let result = mathEnforcer.sum(input, secondInput);
    expect(result).to.be.equal(16)

});

it(`should return a correct result if provided two integer parameters 2`, () => {
    let input = -5.5;
    let secondInput = 10.5;
    let result = mathEnforcer.sum(input, secondInput);
    expect(result).to.be.equal(5)

});

it(`should return a correct result if provided two integer parameters 3`, () => {
    let input = -5.5;
    let secondInput = -10.5;
    let result = mathEnforcer.sum(input, secondInput);
    expect(result).to.be.equal(-16)

});

it(`should return a correct result if provided two correct parameters 2`, () => {
    let input = 0;
    let secondInput = 1;
    let result = mathEnforcer.sum(input, secondInput);
    expect(result).to.be.equal(1)

});

it(`should return a correct result if provided more than two correct parameters 2`, () => {
    let input = 0;
    let secondInput = 1;
    let thirdInput = 3;
    let result = mathEnforcer.sum(input, secondInput, thirdInput);
    expect(result).to.be.equal(1)

});

it(`should return a correct result if provided more than two correct parameters 3`, () => {
    let input = 0;
    let secondInput = 1;
    let thirdInput = 3;
    let forthInput = 4;
    let result = mathEnforcer.sum(input, secondInput, thirdInput, forthInput);
    expect(result).to.be.equal(1)

});

// ⦁	If any of the 2 parameters is NOT a number, the function should return undefined.

it(`should return undefined if the first param is an empty array`, () => {
    let input = [];
    let secondInput = 1;
    let result = mathEnforcer.sum(input, secondInput);
    expect(result).to.be.equal(undefined)

});

it(`should return undefined if the second param is an empty array`, () => {
    let input = 5;
    let secondInput = [];
    let result = mathEnforcer.sum(input, secondInput);
    expect(result).to.be.equal(undefined)

});

it(`should return undefined if both of the params are an empty array`, () => {
    let input = [];
    let secondInput = [];
    let result = mathEnforcer.sum(input, secondInput);
    expect(result).to.be.equal(undefined)

});

it(`should return undefined if the first param is a full array`, () => {
    let input = [1,2,3];
    let secondInput = 1;
    let result = mathEnforcer.sum(input, secondInput);
    expect(result).to.be.equal(undefined)

});

it(`should return undefined if the second param is a full array`, () => {
    let input = 5;
    let secondInput = [1,2,3];
    let result = mathEnforcer.sum(input, secondInput);
    expect(result).to.be.equal(undefined)

});

it(`should return undefined if both of the params are a full array`, () => {
    let input = [1,2,3];
    let secondInput = [1,2,3];
    let result = mathEnforcer.sum(input, secondInput);
    expect(result).to.be.equal(undefined)

});

it(`should return undefined if the first param is an empty object`, () => {
    let input = {};
    let secondInput = 1;
    let result = mathEnforcer.sum(input, secondInput);
    expect(result).to.be.equal(undefined)

});

it(`should return undefined if the second param is an empty object`, () => {
    let input = 1;
    let secondInput = {};
    let result = mathEnforcer.sum(input, secondInput);
    expect(result).to.be.equal(undefined)

});

it(`should return undefined if both of the params are an empty object`, () => {
    let input = {};
    let secondInput = {};
    let result = mathEnforcer.sum(input, secondInput);
    expect(result).to.be.equal(undefined)

});

it(`should return undefined if the first param is an object with attributes`, () => {
    let input = {name: `Ivan`};
    let secondInput = 1;
    let result = mathEnforcer.sum(input, secondInput);
    expect(result).to.be.equal(undefined)

});

it(`should return undefined if the second param is an object with attributes`, () => {
    let input = 1;
    let secondInput = {name: `Ivan`};
    let result = mathEnforcer.sum(input, secondInput);
    expect(result).to.be.equal(undefined)

});

it(`should return undefined if both params an object with attributes`, () => {
    let input = {name: `Ivan`};
    let secondInput = {age: 5};
    let result = mathEnforcer.sum(input, secondInput);
    expect(result).to.be.equal(undefined)

});

it(`should return undefined if the first param is a string`, () => {
    let input = `abc`;
    let secondInput = 2;
    let result = mathEnforcer.sum(input, secondInput);
    expect(result).to.be.equal(undefined)

});

it(`should return undefined if the second param is a string`, () => {
    let input = 2;
    let secondInput = `abv`;
    let result = mathEnforcer.sum(input, secondInput);
    expect(result).to.be.equal(undefined)

});

it(`should return undefined if both params are a string`, () => {
    let input = `asdad`;
    let secondInput = `abv`;
    let result = mathEnforcer.sum(input, secondInput);
    expect(result).to.be.equal(undefined)

});

it(`should return undefined if the first param is a string num`, () => {
    let input = `2`;
    let secondInput = 2;
    let result = mathEnforcer.sum(input, secondInput);
    expect(result).to.be.equal(undefined)

});

it(`should return undefined if the second param is a string num`, () => {
    let input = 2;
    let secondInput = `2`;
    let result = mathEnforcer.sum(input, secondInput);
    expect(result).to.be.equal(undefined)

});

it(`should return undefined if both params are a string num`, () => {
    let input = `2`;
    let secondInput = `4`;
    let result = mathEnforcer.sum(input, secondInput);
    expect(result).to.be.equal(undefined)

});

it(`should return undefined if the first param is a boolean`, () => {
    let input = true;
    let secondInput = 2;
    let result = mathEnforcer.sum(input, secondInput);
    expect(result).to.be.equal(undefined)

});

it(`should return undefined if the second param is a boolean`, () => {
    let input = 2;
    let secondInput = false;
    let result = mathEnforcer.sum(input, secondInput);
    expect(result).to.be.equal(undefined)

});

it(`should return undefined if both params are a boolean`, () => {
    let input = true;
    let secondInput = false;
    let result = mathEnforcer.sum(input, secondInput);
    expect(result).to.be.equal(undefined)

});

// ⦁	If both parameters are numbers, the function should return their sum. 

if(`should return correct result if both params are numbers`, () => {
    let input = 2;
    let secondInput = 3;
    let result = mathEnforcer.sum(input, secondInput);
    expect(result).to.be.equal(5);
});

if(`should return correct result if both params are numbers 2`, () => {
    let input = -2;
    let secondInput = 3;
    let result = mathEnforcer.sum(input, secondInput);
    expect(result).to.be.equal(1);
});

if(`should return correct result if both params are numbers 3`, () => {
    let input = -2;
    let secondInput = -3;
    let result = mathEnforcer.sum(input, secondInput);
    expect(result).to.be.equal(-5);
});

if(`should return correct result if both params are numbers 4`, () => {
    let input = 0;
    let secondInput = 0;
    let result = mathEnforcer.sum(input, secondInput);
    expect(result).to.be.equal(0);
});

});
