function notify(message) {

  let newMessage = document.createElement(`p`);
  newMessage.textContent = message;
  let div = document.querySelector(`#notification`);
  div.appendChild(newMessage);
  div.style.display = `block`;


  div.addEventListener(`click`, onClick);

  function onClick () {
    div.style.display = `none`;
  }



}
