function solve() {

  document.getElementById(`exercise`).addEventListener(`click`, onClick);

  function onClick(event) {

    if (event.target.type == `submit`) {

      let button = event.target;

      if (button.textContent == `Generate`) {

        let input = JSON.parse(button.parentNode.children[1].value);
        let content = document.querySelector(`tbody`);

        for (let entry of input) {

          let [name, image, price, decFactor] = Object.values(entry);
          let cloneRow = content.children[0].cloneNode(true);

          cloneRow.children[0].innerHTML = `<td><img src="${image}"></td>`;
          cloneRow.children[1].innerHTML = `<p>${name}</p>`;
          cloneRow.children[2].innerHTML = `<p>${price}</p>`;
          cloneRow.children[3].innerHTML = `<p>${decFactor}</p>`;
          cloneRow.children[4].innerHTML = `<input type="checkbox">`;

          content.appendChild(cloneRow);

        };

      } else if (button.textContent == `Buy`) {

        let checked = document.querySelectorAll(`tbody input:checked`);

        let boughtFurniture = [];
        let totalPrice = 0;
        let numOfFurniture = 0;
        let averageDecFactor = 0;

        for (let check of checked) {

          let name = check.parentNode.parentNode.children[1].children[0].textContent;
          let price = Number(check.parentNode.parentNode.children[2].children[0].textContent);
          let decFactor = Number(check.parentNode.parentNode.children[3].children[0].textContent);

          boughtFurniture.push(name);
          totalPrice += price;
          numOfFurniture++;
          averageDecFactor += decFactor;

        };

        averageDecFactor /= numOfFurniture;

        let resultArea = document.querySelectorAll(`textarea`)[1];
        let result = ``;
        result += `Bought furniture: ${boughtFurniture.join(`, `)}\n`;
        result += `Total price: ${totalPrice.toFixed(2)}\n`;
        result += `Average decoration factor: ${averageDecFactor}`;

        resultArea.value = result;

      };

    };

  };

};
