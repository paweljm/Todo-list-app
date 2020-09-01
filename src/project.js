export class Project {
    constructor(name,description){
        this.name = name;
        this.description = description;
        this.content = {};
    }
    updateInfo(name,description) {
        this.name = name;
        this.description = description;
    }
    addItem(item) {
        this.content[(item).title] = item;
    }
}