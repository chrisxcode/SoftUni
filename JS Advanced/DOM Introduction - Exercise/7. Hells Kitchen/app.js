function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

      let result1 = ``;
      let result2 = ``;

   function onClick() {
      let restaurantsInfo = Array.from(JSON.parse(document.querySelector(`#inputs textarea`).value));
      let bestRestaurantInfo = document.querySelector(`#outputs #bestRestaurant p`);
      let bestWorker = document.querySelector(`#outputs #workers p`);
      let restaurantsObject = {};

      for (let input of restaurantsInfo) {
         let [restName, employeesInfo] = input.split(` - `);
         let employees = employeesInfo.split(`, `);

         let newRestaurant = {};
         newRestaurant[`workers`] = {};

         for (let employee of employees) 
         {
            let [name, salary] = employee.split(` `);
            salary = Number(salary);

            if (!Object.keys(restaurantsObject).includes(restName))
            {
               newRestaurant[`workers`][name] = salary;
            } 
            else
            {
               restaurantsObject[restName].workers[name] = salary;
            }
         };

         Object.keys(restaurantsObject).includes(restName) ? 0 : restaurantsObject[restName] = newRestaurant;

         restaurantsObject[restName].averageSalary = averageSalary;

      };

      function averageSalary() {
         let sumOfSalary = Object.values(this.workers).reduce((a,b) => a + b);
         let numOfEmployees = Object.keys(this.workers).length;
         return (sumOfSalary / numOfEmployees).toFixed(2);
      }

      let bestRestaurant = Object.keys(restaurantsObject)
      .sort((a,b) => restaurantsObject[b].averageSalary() - restaurantsObject[a].averageSalary())[0];

      let workersSorted = Object.keys(restaurantsObject[bestRestaurant][`workers`])
      .sort((a,b) => restaurantsObject[bestRestaurant][`workers`][b] - restaurantsObject[bestRestaurant][`workers`][a]);

      let bestSalary = restaurantsObject[bestRestaurant].workers[workersSorted[0]];

      result1 = 
      `Name: ${bestRestaurant} Average Salary: ${restaurantsObject[bestRestaurant].averageSalary()} Best Salary: ${bestSalary.toFixed(2)}`;

      for (let x of workersSorted) {
         result2 += 
         `Name: ${x} With Salary: ${restaurantsObject[bestRestaurant].workers[x]} `;
      };

     bestRestaurantInfo.textContent = result1;
     bestWorker.textContent = result2;
   };
};
