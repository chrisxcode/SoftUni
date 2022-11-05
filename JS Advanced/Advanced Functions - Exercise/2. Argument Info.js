function solve (...input) {

    let types = {};
    
    [...input].forEach(x => 
        {
            Object.keys(types).includes(typeof x) ? types[typeof x]++ : types[typeof x] = 1;
            console.log(`${typeof x}: ${x}`);
        });

    let objArr = Object.keys(types).sort((a,b) => types[b] - types[a]);

    objArr.forEach((key) => {console.log(`${key} = ${types[key]}`);});


}
