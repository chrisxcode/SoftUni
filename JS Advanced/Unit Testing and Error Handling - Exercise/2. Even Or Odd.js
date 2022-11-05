describe(`isOddOrEven`, () => {

    it(`should return undefined when input is array`, () => {
        let input = [];
        let result = isOddOrEven(input);
        expect(result).to.be.equal(undefined);

    });

    it(`should return undefined when input is object`, () => {
        let input = {};
        let result = isOddOrEven(input);
        expect(result).to.be.equal(undefined);

    });

    it(`should return even when string length is even`, () => {
        let string = `even`;
        let result = isOddOrEven(string);
        expect(string).to.be.equal(`even`);

    });

    it(`should return odd when string length is odd`, () => {
        let string = `odddddd`;
        let result = isOddOrEven(string);
        expect(result).to.be.equal(`odd`);

    });

    it(`should return even when two string with even length are passed`, () => {
        let string = `even`;
        let string2 = `eveneven`;
        let result = isOddOrEven(string, string2);
        expect(result).to.be.equal(`even`);

    });


});
