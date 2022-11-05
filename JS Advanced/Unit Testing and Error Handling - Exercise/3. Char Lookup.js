describe(`lookupChar`, () => {

    it(`should return undefined if first param is a number`, () => {
        let string = 9;
        let index = 0;
        let result = lookupChar(string, index);
        expect(result).to.be.equal(undefined);
    });

    it(`should return undefined if first param is an object`, () => {
        let string = {};
        let index = 0;
        let result = lookupChar(string, index);
        expect(result).to.be.equal(undefined);
    });

    it(`should return undefined if second param is missing`, () => {
        let string = {};
        let result = lookupChar(string);
        expect(result).to.be.equal(undefined);
    });

    it(`should return undefined if first param is an object 2`, () => {
        let string = { name: `Pesho`};
        let index = 0;
        let result = lookupChar(string, index);
        expect(result).to.be.equal(undefined);
    });

    it(`should return undefined if first param is a boolean`, () => {
        let string = true;
        let index = 0;
        let result = lookupChar(string, index);
        expect(result).to.be.equal(undefined);
    });

    it(`should return undefined if the second param is a string`, () => {
        let string = `abc`;
        let index = `abv`;
        let result = lookupChar(string, index);
        expect(result).to.be.equal(undefined);
    });

    it(`should return undefined if the second param is an array`, () => {
        let string = `abc`;
        let index = [];
        let result = lookupChar(string, index);
        expect(result).to.be.equal(undefined);
    });

    it(`should return undefined if the second param is a boolean`, () => {
        let string = `abc`;
        let index = false;
        let result = lookupChar(string, index);
        expect(result).to.be.equal(undefined);
    });

    it(`should return undefined if both params are incorrect`, () => {
        let string = [];
        let index = `a`;
        let result = lookupChar(string, index);
        expect(result).to.be.equal(undefined);
    });

    it(`should return undefined if both params are incorrect 2`, () => {
        let string = true;
        let index = false;
        let result = lookupChar(string, index);
        expect(result).to.be.equal(undefined);
    });

    it(`should return incorrect index if the index is bigger than string length`, () => {
        let string = `abc`;
        let index = 12;
        let result = lookupChar(string, index);
        expect(result).to.be.equal(`Incorrect index`);
    });

    it(`should return incorrect index if the index is not an integer`, () => {
        let string = `abc`;
        let index = 0.5;
        let result = lookupChar(string, index);
        expect(result).to.be.equal(undefined);
    });

    it(`should return incorrect index if the index is equal to string length`, () => {
        let string = `abc`;
        let index = 3;
        let result = lookupChar(string, index);
        expect(result).to.be.equal(`Incorrect index`);
    });

    it(`should return incorrect index if the index is a negative number`, () => {
        let string = `abc`;
        let index = -5;
        let result = lookupChar(string, index);
        expect(result).to.be.equal(`Incorrect index`);
    });

    it(`should return the correct char if all parameters are correct`, () => {
        let string = `abc`;
        let index = 0;
        let result = lookupChar(string, index);
        expect(result).to.be.equal(`a`);
    });

    it(`should return the correct char if all parameters are correct`, () => {
        let string = `abc`;
        let index = 2;
        let result = lookupChar(string, index);
        expect(result).to.be.equal(`c`);
    });

});
