function solve (arr) {

    let final = {};

    arr.forEach((value, index) => {
        if (index % 2 == 0) {
            final[value] = Number(arr[index+1]);
        }
    })

    console.log(final);

}
