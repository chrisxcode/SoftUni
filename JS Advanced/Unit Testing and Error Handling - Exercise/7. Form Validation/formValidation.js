function validate() {

    document.querySelector(`#company`).addEventListener(`change`, onChange);

    let usernameField = document.querySelector(`#username`);
    let emailField = document.querySelector(`#email`);
    let passwordField = document.querySelector(`#password`);
    let confirmPasswordField = document.querySelector(`#confirm-password`);
    let companyField = document.querySelector(`#companyNumber`);

    let companyArea = document.querySelector(`#companyInfo`);

    let validArea = document.querySelector(`#valid`);

    let usernameMatcher = /^[a-zA-Z0-9]{3,20}$/g;
    let passwordMatcher = /^[\w]{5,15}$/g;

    let checkboxChecked = false;

    let isAllInputDataValid = true;

    function onChange(e) {

        if (e.target.checked == true) {

            companyArea.style.display = `block`;
            checkboxChecked = true;
        } else {

            companyArea.style.display = `none`;
            checkboxChecked = false;
        }
    }

    document.querySelector(`#submit`).addEventListener(`click`, onClick);

    function onClick(e) {
        e.preventDefault();

        // username check
        if (usernameField.value.match(usernameMatcher)) {
            usernameField.style[`border-color`] = ``;
            usernameField.style[`border`] = `none`;

            isAllInputDataValid = true;
        } else {

            usernameField.style[`border`] = ``;
            usernameField.style[`border-color`] = `red`;

            isAllInputDataValid = false;
        }

        // email check
        if (emailField.value.includes(`@`) && emailField.value.includes(`.`) && emailField.value.indexOf(`@`) < emailField.value.indexOf(`.`)) {
            emailField.style[`border-color`] = ``;
            emailField.style[`border`] = `none`;

            isAllInputDataValid = true;
        } else {

            emailField.style[`border`] = ``;
            emailField.style[`border-color`] = `red`;

            isAllInputDataValid = false;
        }

        // password check
        if (passwordField.value.match(passwordMatcher) && confirmPasswordField.value.match(passwordMatcher) && passwordField.value == confirmPasswordField.value) {
            passwordField.style[`border-color`] = ``;
            passwordField.style[`border`] = `none`;
            confirmPasswordField.style[`border-color`] = ``;
            confirmPasswordField.style[`border`] = `none`;

            isAllInputDataValid = true;
        } else {

            passwordField.style[`border`] = ``;
            passwordField.style[`border-color`] = `red`;
            confirmPasswordField.style[`border`] = ``;
            confirmPasswordField.style[`border-color`] = `red`;
            isAllInputDataValid = false;
        }

        //company number check

        if (checkboxChecked) {
            if (companyField.value >= 1000 && companyField.value <= 9999) {
                companyField.style[`border-color`] = ``;
                companyField.style[`border`] = `none`;
                isAllInputDataValid = true;
            } else {
                companyField.style[`border`] = ``;
                companyField.style[`border-color`] = `red`;
                isAllInputDataValid = false;
            }
        }

        if (isAllInputDataValid) {
            validArea.style.display = `block`;
        } else {
            validArea.style.display = `none`;
        }

    }

}
