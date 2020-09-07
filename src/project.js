export class Project {
    constructor(name,description, content = {}){
        this.name = name;
        this.description = description;
        this.content = content;
    }
    updateInfo(name,description) {
        this.name = name;
        this.description = description;
    }
    addItem(item) {
        this.content[(item).title] = item;
    }
}