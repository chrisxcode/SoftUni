function date(year, month, day) {
    let myDate = new Date(year, month - 1, day);
    myDate.setDate(myDate.getDate() - 1);
    let dateArr = [];
    dateArr.push(myDate.getFullYear());
    dateArr.push(myDate.getMonth()+1);
    dateArr.push(myDate.getDate());
    console.log(dateArr.join(`-`));

}
