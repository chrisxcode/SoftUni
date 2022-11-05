function solve (arr, rotations) {

for (let i = 1; i <= rotations; i++) {
    let val = arr.pop();
    arr.unshift(val);
}

console.log(arr.join(` `));
}
