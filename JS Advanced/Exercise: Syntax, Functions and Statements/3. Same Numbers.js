function sameNumbers(num) {

    let strNum = num.toString();
    let arrNums = [];

    for (let i = 0; i < strNum.length; i++) {
        arrNums.push(strNum[i]);
    }

    let result = arrNums.every(a => arrNums[0] == a);
    console.log(result);
    console.log(arrNums.reduce((a, b) => +a + +b));

}
