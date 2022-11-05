function createSortedList() {
    
    let obj = {
        elements: [],
        size: 0,
        add: (num) => {
            obj.elements.push(num);
            obj.elements.length > 1 ? obj.elements.sort((a,b) => a - b) : 0;
            obj.size++;
        },
        remove: (index) => {
            index = Number(index);
            if (index < obj.elements.length && index >= 0) {
                obj.elements.splice(index, 1);
                obj.elements.length > 1 ? obj.elements.sort((a,b) => a - b) : 0;
                obj.size--;
            };
        },
        get: (index) => {
            index = Number(index);
            if (index < obj.elements.length && index >= 0) {
                return obj.elements[index];
            };
            
        }
    };

return obj;

};
