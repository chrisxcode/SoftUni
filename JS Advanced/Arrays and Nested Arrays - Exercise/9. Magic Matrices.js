function solve(arr){

   let result = [];

   for (let i = 0; i < arr.length; i++){
    let num = arr[i].reduce((x, y) => x + y);
    result.push(num);
   }


   for (let j = 0; j < arr.length; j++){
    let num2 = [];
    arr.forEach(x => num2.push(x[j]));
    num2 = num2.reduce((x,y) => x + y);
    result.push(num2);
   }

   console.log(result.every((a) => a == result[0]));

}
