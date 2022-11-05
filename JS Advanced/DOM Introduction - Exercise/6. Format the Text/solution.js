function solve() {
  let text = document.getElementById(`input`).value;

  let sentences = text.split(`.`).filter(x => x.length >= 1);

  let result = ``;

  let counter = 0;

  for (let i = 0; i < sentences.length; i++) {
      counter == 0 ? result += `<p>` : 0;
      result += sentences[i] + `.`;
      counter++;
      if (counter !== 3 && i !== sentences.length - 1) {
        result += ` `;
      }
      if (counter == 3 || i == sentences.length - 1) {
        result += `</p>\n`;
        counter = 0;
      };
  }

  document.getElementById(`output`).innerHTML = result;
}
