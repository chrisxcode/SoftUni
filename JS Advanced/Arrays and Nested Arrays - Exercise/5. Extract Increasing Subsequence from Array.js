function solve(arr){

let result = [];
let currentBigNumber = 0;

arr.forEach(x => {
    if (x >= currentBigNumber) {
        result.push(x);
        currentBigNumber = x;
    }
});

return result;

}
