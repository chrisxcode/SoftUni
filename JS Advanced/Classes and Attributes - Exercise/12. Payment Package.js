describe(`paymentpackage`, () => {

    //     ⦁	Can be instantiated with two parameters - a string name and number value

    it(`should work properly with two valid parameters`, () => {
        let newObj = new PaymentPackage(`string`, 1500);
        expect(newObj).to.be.instanceof(PaymentPackage);
    });

    it(`active status should be true when initialized properly`, () => {
        let newObj = new PaymentPackage(`string`, 1500);
        expect(newObj.active).to.be.equal(true);
    });

    it(`active status should be false when set properly`, () => {
        let newObj = new PaymentPackage(`string`, 1500);
        newObj.active = false;
        expect(newObj.active).to.be.equal(false);
    });

    it(`should throw error when both params are not correct`, () => {
        expect(function () {new PaymentPackage(1599, `str`)}).to.throw(`Name must be a non-empty string`);
    });

    it(`should throw error when name is not a string`, () => {
        expect(function () {new PaymentPackage(1599, 1111)}).to.throw(`Name must be a non-empty string`);
    });

    it(`should throw error when given empty string`, () => {
        expect(function () {new PaymentPackage(``, 1111)}).to.throw(`Name must be a non-empty string`);
    });

    it(`should throw error when name is set with incorrect value`, () => {
        expect(function () {new PaymentPackage(true, 1111)}).to.throw(`Name must be a non-empty string`);
    });

    it(`should work properly when name is set with correct value`, () => {
        let newObj = new PaymentPackage(`name`, 1200);
        expect(newObj.name).to.be.equal(`name`);
    });

    it(`should throw error when value is not a number`, () => {
        expect(function () {new PaymentPackage(`string`, [])}).to.throw(`Value must be a non-negative number`);
    });

    it(`should throw error when value is a negative number`, () => {
        expect(function () {new PaymentPackage(`string`, -15)}).to.throw(`Value must be a non-negative number`);
    });

    it(`should throw error when value is set with incorrect value`, () => {
        expect(function () {new PaymentPackage(`string`, {name:14})}).to.throw(`Value must be a non-negative number`);
    });

    it(`should work properly when value is set with correct value`, () => {
        let newObj = new PaymentPackage(`name`, 150);
        expect(newObj.value).to.be.equal(150);
    });

    it(`should work properly when VAT is number`, () => {
        let newObj = new PaymentPackage(`name`, 1200);
        newObj.VAT = 100;
        expect(newObj.VAT).to.be.equal(100);
    });

    it(`should throw error when VAT is not a number`, () => {
        expect(function () {
            let newObj = new PaymentPackage(`name`, 1200);
            newObj.VAT = `not a number`;
        }).to.throw(`VAT must be a non-negative number`);
    });

    it(`should throw error when VAT is a negative number`, () => {
        expect(function () {
            let newObj = new PaymentPackage(`name`, 1200);
            newObj.VAT = -300;
        }).to.throw(`VAT must be a non-negative number`);
    });

    it(`should throw error when setting active with non-boolean`, () => {
        expect(function () {
            let newObj = new PaymentPackage(`name`, 1200);
            newObj.active = `not a boolean`;
        }).to.throw(`Active status must be a boolean`);
    });

    it(`should throw error when setting active with non-boolean 2`, () => {
        expect(function () {
            let newObj = new PaymentPackage(`name`, 1200);
            newObj.active = -13;
        }).to.throw(`Active status must be a boolean`);
    });

    it(`should work properly when setting active with boolean`, () => {
        let newObj = new PaymentPackage(`name`, 1200);
        newObj.active = true;
        expect(newObj.active).to.be.equal(true);
    });

    it(`should work properly when toString is called`, () => {
        let newObj = new PaymentPackage(`HR Services`, 1500);
        newObj.active = true;
        let expected = `Package: HR Services\n- Value (excl. VAT): 1500\n- Value (VAT 20%): 1800`;
        expect(newObj.toString()).to.be.equal(expected);
    });

    it(`should work properly when toString is called and active is false`, () => {
        let newObj = new PaymentPackage(`HR Services`, 1500);
        newObj.active = false;
        let expected = `Package: HR Services (inactive)\n- Value (excl. VAT): 1500\n- Value (VAT 20%): 1800`;
        expect(newObj.toString()).to.be.equal(expected);
    });

    it(`should work properly when toString is called and values are 0`, () => {
        let newObj = new PaymentPackage(`HR Services`, 0);
        let expected = `Package: HR Services\n- Value (excl. VAT): 0\n- Value (VAT 20%): 0`;
        expect(newObj.toString()).to.be.equal(expected);
    });


});
