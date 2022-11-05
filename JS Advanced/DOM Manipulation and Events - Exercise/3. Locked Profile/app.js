function lockedProfile() {

    document.getElementById(`container`).addEventListener(`click`, onClick);

    function onClick(event) {
        if (event.target.type === `submit`) {

            let lock = event.target.parentNode.querySelector(`input`).checked;
            let additionalInfo = event.target.parentNode.getElementsByTagName(`div`)[0];
            let button = event.target;

            if (lock == false && additionalInfo.style.display == ``) {
                additionalInfo.style.display = `inline`;
                button.textContent = `Hide it`;

            } else if (lock == false && additionalInfo.style.display == `inline`) {
                additionalInfo.style.display = ``;
                button.textContent = `Show more`;
            };

        };
        
    };

};
