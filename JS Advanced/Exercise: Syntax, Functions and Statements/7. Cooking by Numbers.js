function cookinByNumbers() {
    let operations = [...arguments];
    let cookinNumber = Number(operations.shift());

    function action (num, operation) {

        let result;
        switch (operation) {
            case `chop`:
                result = num / 2;
                break;
            case `dice`:
                result = Math.sqrt(num);
                break;
            case `spice`:
                result = num + 1;
                break;
            case `bake`:
                result = num * 3;
                break;
            case `fillet`:
                result = num * 0.8;
                break;
            default:
                break;
        }
        if (result % 1) {
            console.log(result.toFixed(1));
        } else {
            console.log(result);
        }
        return result;
    }

    operations.forEach(value => {
        cookinNumber = action(cookinNumber, value)
    })

}
