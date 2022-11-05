class Company {
    constructor() {
        this.departments = {};
    }

    addEmployee(name, salary, position, department) {
        if (!name || !salary || !position || !department || salary < 0) {
            throw new Error(`Invalid input!`)
        }

        if (this.departments[department] == undefined) {
            this.departments[department] = [];
        }
            this.departments[department].push([name, salary, position]);

        return `New employee is hired. Name: ${name}. Position: ${position}`;
    }

    bestDepartment() {
        let bestDep = ``;
        let bestSalary = 0;

        Object.entries(this.departments)
            .forEach(dep => {
                let [department, employees] = dep;
                let sumSalaries = 0;
                let counter = 0;
                let averageSalary = 0;

                employees.forEach(employee => {
                    let employeeSalary = employee[1];
                    sumSalaries += employeeSalary;
                    counter++;
                });

                averageSalary = sumSalaries / counter;

                if (averageSalary > bestSalary) {
                    bestDep = department;
                    bestSalary = averageSalary;
                };

            });

        let result = `Best Department is: ${bestDep}\nAverage salary: ${bestSalary.toFixed(2)}`;

        let sortedEmployees = this.departments[bestDep]
            .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
            .forEach(x => result += `\n${x.join(` `)}`);

        return result;
    };

};
