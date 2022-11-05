class Hex {
    constructor(value) {
        this.value = Number(value);
    }

    valueOf() {
        return this.value;
    }

    toString() {
        return `0x${this.value.toString(16).toUpperCase()}`
    }

    plus(num) {
        let newVal = this.value + num.value
        return new Hex(newVal);
    }

    minus(num) {
        let newVal = this.value - num.value;
        return new Hex(newVal);
    }

    parse(string) {
        return parseInt(string, 16)
    }

}
