function validate() {

    let matcher = /^[a-z]+@[a-z]+.[a-z]+$/g;

    document.querySelector(`#email`).addEventListener(`change`, onChange);

    function onChange (e) {
        let text = e.target.value;
        let isItValid = text.match(matcher);
        if (!isItValid) {
            e.target.classList.add(`error`)
        } else {
            e.target.classList.remove(`error`)
        }
    }

}
