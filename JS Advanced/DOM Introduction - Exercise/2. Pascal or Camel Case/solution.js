function solve() {
  let text = document.getElementById(`text`).value;
  let type = document.getElementById(`naming-convention`).value;

  let result = ``;

  function subf() {
    let arrOfWords = text.split(` `);
      arrOfWords = arrOfWords.map(x => x[0].toUpperCase() + x.substring(1).toLowerCase());
      let almostResult = arrOfWords.join(``);
      return almostResult;
  }

  switch (type) {
    case `Camel Case`:
      let subResult = subf();
      result = subResult[0].toLowerCase() + subResult.substring(1);
      break;
    case `Pascal Case`:
      result = subf();
      break;
    default:
      result = `Error!`;
      break;
  }

  document.getElementById(`result`).textContent = result;
  
}
