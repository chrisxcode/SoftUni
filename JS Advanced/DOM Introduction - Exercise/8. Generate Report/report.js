function generateReport() {
    let checkboxes = Array.from(document.querySelector(`thead tr`).children);

    let indexes = [];

    checkboxes.forEach((value, index) => {
        let currentCheckbox = value.children[0];
        currentCheckbox.checked ? indexes.push(index) : 0;
    });

    let arrOfData = [];

    let data = Array.from(document.querySelectorAll(`tbody tr`));
    
    if (indexes.length > 0) 
    {
        data.forEach(entry => 
        {
            let newObj = {};
            indexes.forEach(index => {
                let name = checkboxes[index].textContent.toLowerCase().trim();
                let value = entry.children[index].textContent;
                
                newObj[name] = value;
            });
            arrOfData.push(newObj);
        });
    };

    let result = JSON.stringify(arrOfData);

    document.getElementById(`output`).value = result;
}
