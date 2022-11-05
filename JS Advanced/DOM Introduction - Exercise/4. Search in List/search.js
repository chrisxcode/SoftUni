function search() {
   let towns = document.querySelectorAll(`ul li`);

   let search = document.getElementById(`searchText`).value;

   let matches = 0;

   for (let town of towns) {
      town.style[`font-weight`] = ``;
      town.style[`text-decoration`] = ``;
   }

   for (let town of towns) {
      let currentTown = town.textContent;
      if (currentTown.toLowerCase().includes(search.toLowerCase())) {
         matches++;
         town.style[`font-weight`] = `bold`;
         town.style[`text-decoration`] = `underline`;
      }
   }

   document.getElementById(`result`).textContent = `${matches} matches found`;

}
