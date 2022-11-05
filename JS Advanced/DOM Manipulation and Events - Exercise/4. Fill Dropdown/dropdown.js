function addItem() {
    let textInput = document.querySelector(`#newItemText`);
    let valueInput = document.querySelector(`#newItemValue`);
    let menu = document.querySelector(`#menu`);
    
    let newOption = document.createElement(`option`);
    newOption.textContent = textInput.value;
    newOption.value = valueInput.value;
    menu.appendChild(newOption);

    textInput.value = ``;
    valueInput.value = ``;

}
