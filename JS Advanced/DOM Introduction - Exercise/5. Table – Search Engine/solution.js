function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      let rows = document.getElementsByTagName(`tbody`)[0].children;
      
      let search = document.getElementById(`searchField`).value;

      for (let row of Array.from(rows)) {
         row.classList.remove(`select`);
         let doesItContain = false;
         for (let cell of Array.from(row.children)) {
            cell.textContent.toLowerCase().includes(search.toLowerCase()) ? doesItContain = true : 0;
         }
         doesItContain ? row.classList.add(`select`) : 0;
      }

   }
}
