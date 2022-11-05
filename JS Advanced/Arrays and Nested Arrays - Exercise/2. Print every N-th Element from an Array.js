function solve (arr, n) {
    
    let result = [];

    arr.forEach((el, index) => index % n == 0 ? result.push(el) : 0);

    return result;

}
