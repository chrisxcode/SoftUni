function solve (info) {
    
    let columns = info.shift()
        .split(`|`)
        .filter(x => x.includes(` `))
        .map(x => x.slice(1,-1));

    let arrOfObjects = [];

    info.forEach(data => {
        let newObj = {};
        let [ town, latitude, longitude ] = data.split(`|`)
        .filter(x => x.includes(` `))
        .map(x => x.slice(1,-1));

        newObj[columns[0]] = town;
        newObj[columns[1]] = +Number(latitude).toFixed(2);
        newObj[columns[2]] = +Number(longitude).toFixed(2);

        arrOfObjects.push(newObj);
    })

    console.log(JSON.stringify(arrOfObjects));

}
