function solve(arr){

let result = arr.sort((a,b) => a.localeCompare(b)).map((x, i) => `${i+1}.${x}`);

console.log(result.join(`\n`));

}
