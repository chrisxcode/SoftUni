function create(words) {

   let content = document.getElementById(`content`);

   for (let word of words) {
      let newDiv = document.createElement(`div`);
      let newP = document.createElement(`p`);
      newP.textContent = word;
      newP.style.display = `none`;
      newDiv.appendChild(newP);
      newDiv.addEventListener(`click`, onClick);
      content.appendChild(newDiv);
   }

   function onClick (event) {
      event.target.children[0].style.display = `inline`;
   }
}
