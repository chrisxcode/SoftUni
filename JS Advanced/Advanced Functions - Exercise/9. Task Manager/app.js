function solve() {

    document.querySelector(`#add`).addEventListener(`click`, onClick);


    function onClick (e) {
        e.preventDefault();

        let sections = document.querySelectorAll("section");

        let openTasks = sections[1].children[1];
        let progressTasks = sections[2].children[1];
        let completedTasks = sections[3].children[1];

        let task = document.getElementById(`task`).value;
        let description = document.getElementById(`description`).value;
        let date = document.getElementById(`date`).value;

        if (e.target.innerText == `Add`){

        let matcher = /^\d{4}[.](0?[1-9]|1[012])[.](0?[1-9]|[12][0-9]|3[01])$/g;
        let shouldItBeAdded = date.search(matcher) != `-1` && task != `` && description != `` && date.length == 10;

        if (shouldItBeAdded) {
            let newArticle = document.createElement(`article`);
            let newHeader = document.createElement(`h3`);
            let firstP = document.createElement(`p`);
            let secondP = document.createElement(`p`);
            let newDiv = document.createElement(`div`);

            newDiv.classList.add(`flex`);

            let firstButton = document.createElement(`button`);
            firstButton.classList.add(`green`);
            firstButton.textContent = `Start`;

            newDiv.appendChild(firstButton);

            let secondButton = document.createElement(`button`);
            secondButton.classList.add(`red`);
            secondButton.textContent = `Delete`;

            newDiv.appendChild(secondButton);

            newHeader.textContent = task;
            firstP.textContent = `Description: ${description}`;
            secondP.textContent = `Due Date: ${date}`;


            newArticle.appendChild(newHeader);
            newArticle.appendChild(firstP);
            newArticle.appendChild(secondP);
            newArticle.appendChild(newDiv);

            openTasks.appendChild(newArticle);

        }

        } else if (e.target.innerText == `Start`) {

            let currentArticle = e.target.parentElement.parentElement;

            let button1 = currentArticle.querySelector(`button[class=green]`);
            let button2 = currentArticle.querySelector(`button[class=red]`);

            button1.classList.replace(`green`, `red`);
            button1.textContent = `Delete`;

            button2.classList.replace(`red`, `orange`);
            button2.textContent = `Finish`;

            progressTasks.appendChild(currentArticle);
        } else if (e.target.innerText == `Delete`) {

            let currentArticle = e.target.parentElement.parentElement;
            currentArticle.parentElement.removeChild(currentArticle);

        } else if (e.target.innerText == `Finish`) {

            let currentArticle = e.target.parentElement.parentElement;
            let buttons = currentArticle.querySelector(`div`);
            currentArticle.removeChild(buttons);
            completedTasks.appendChild(currentArticle);
        }

        let buttons = Array.from(document.querySelectorAll(`button`));

        buttons.forEach(button => button.addEventListener(`click`, onClick));
    }
}
