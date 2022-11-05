class List {
    constructor() {
        this.collection = [];
        this.size = 0;
    }

    add(num){
        this.collection.push(num);
        this.collection.sort((a,b) => a - b);
        this.size++;
        return this.collection;
    }

    remove(index){
        if (this.collection[index] === undefined) {
            throw new Error (`This index doesn't exist in the collection`);
        }
        this.collection.splice(index, 1);
        this.collection.sort((a,b) => a - b);
        this.size--;

        return this.collection;
    }

    get(index){
        if (this.collection[index] === undefined) {
            throw new Error (`This index doesn't exist in the collection`);
        }
        this.collection.sort((a,b) => a - b);
        return this.collection[index];
    }
}
