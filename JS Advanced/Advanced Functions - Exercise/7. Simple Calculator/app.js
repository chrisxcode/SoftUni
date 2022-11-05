function calculator() {

    let obj = {};

    let init = (selector1, selector2, resultSelector) => {
        this.selector1 = document.querySelector(selector1);
        this.selector2 =  document.querySelector(selector2);
        this.resultSelector = document.querySelector(resultSelector);
    };

    let add = () => {
        this.resultSelector.value = Number(this.selector1.value) + Number(this.selector2.value);
    };

    let subtract = () => {
        this.resultSelector.value = Number(this.selector1.value) - Number(this.selector2.value);
    };

    obj = {
        init: init,
        add: add,
        subtract: subtract
    };

    return obj;
}
