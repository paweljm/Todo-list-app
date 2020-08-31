export class Project {
    constructor(name,description){
        this.name = name;
        this.description = description;
        this.content = [];
    }
    addItem(item) {
        this.content.push(item);
    }
}