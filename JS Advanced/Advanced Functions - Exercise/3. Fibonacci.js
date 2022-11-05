function solve() {
    let counter = 0;
    let num = 0;
    let num2 = 1;
    return solve2;
    function solve2(){
        if (counter == 0) {
            counter++;
            return num2;
        } else {
            let result = num + num2;
            num = num2;
            num2 = result;
            return result;
        }
    }
}
