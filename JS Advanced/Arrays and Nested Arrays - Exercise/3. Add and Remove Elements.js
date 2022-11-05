function solve (commands) {

let result = [];

for (let i = 1; i <= commands.length; i++) {
    switch (commands[i-1]) {
        case `add`:
            result.push(i);
            break;
        case `remove`:
            result.pop();
            break;
        default:
            break;
    }
}

result.length > 0 ? console.log(result.join(`\n`)) : console.log(`Empty`);;
}
