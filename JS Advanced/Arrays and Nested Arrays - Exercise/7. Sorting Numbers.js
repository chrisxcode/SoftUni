function solve(arr){

    arr.sort((a,b) => a - b);

    let firstHalf = arr.slice(0, (arr.length / 2));
    let secondHalf = arr.slice((arr.length / 2)).reverse();

    let result = [];

    for (let i = 0; i < (arr.length / 2); i++){
        firstHalf[i] !== undefined ? result.push(firstHalf[i]) : 0;
        result.push(secondHalf[i]);
    }

    return result;

}
