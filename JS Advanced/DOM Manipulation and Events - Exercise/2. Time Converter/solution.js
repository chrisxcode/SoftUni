function attachEventsListeners() {

    document.getElementsByTagName(`main`)[0].addEventListener(`click`, onClick);

    let daysField = document.getElementById(`days`);
    let hoursField = document.getElementById(`hours`);
    let minutesField = document.getElementById(`minutes`);
    let secondsField = document.getElementById(`seconds`);

    let days = 0;
    let hours = 0;
    let minutes = 0;
    let seconds = 0;

    function onClick(event) {
        if (event.target.type === `button`) {

            let value = Number(event.target.parentNode.children[1].value);
            let unit = event.target.parentNode.children[0].textContent.trim();


            switch (unit) {
                case `Days:`:
                days = value;
                hours = days * 24;
                minutes = hours * 60;
                seconds = minutes * 60;
                    break;
                case `Hours:`:
                hours = value;
                days = hours / 24;
                minutes = hours * 60;
                seconds = minutes * 60;
                    break;
                case `Minutes:`:
                minutes = value;
                seconds = minutes * 60;
                hours = minutes / 60;
                days = hours / 24;
                    break;
                case `Seconds:`:
                seconds = value;
                minutes = seconds / 60;
                hours = minutes / 60;
                days = hours / 24;
                    break;
            };

            daysField.value = days;
            minutesField.value = minutes;
            hoursField.value = hours;
            secondsField.value = seconds;

        };
    };

};
