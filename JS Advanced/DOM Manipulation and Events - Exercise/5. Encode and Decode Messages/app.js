function encodeAndDecodeMessages() {

    document.getElementById(`main`).addEventListener(`click`, onClick);

    function onClick(event) {

        if (event.target.type == `submit`) {

            let button = event.target;

            if (button.textContent == `Encode and send it`) {
                let text = button.parentNode.children[1];
                let receivedAreaText = button.parentNode.parentNode.children[1].children[1];

                let newText = encode(text.value);
                receivedAreaText.value = newText;
                text.value = ``;

            } else if (button.textContent == `Decode and read it`) {
                let text = button.parentNode.children[1];

                let newText = decode(text.value);
                text.value = newText;
            };

        };

    };

    function encode(text) {
        let newText = ``;
        for (let i = 0; i < text.length; i++) {
            let newACSII = text[i].charCodeAt() + 1;
            newText += String.fromCharCode(newACSII);
        }

        return newText;
    };

    function decode(text) {
        let newText = ``;
        for (let i = 0; i < text.length; i++) {
            let newACSII = text[i].charCodeAt() - 1;
            newText += String.fromCharCode(newACSII);
        }

        return newText;
    };


};
