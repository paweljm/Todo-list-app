import {format} from "date-fns";
import {Item} from "./item.js";
import {Project} from "./project.js"

let date1 = format(new Date(2014, 1, 11), 'MM/dd/yyyy');

console.log('test');
console.log(date1);

localStorage.setItem('test','HELLO');
console.log(localStorage.getItem('test'));
localStorage.clear();
console.log(localStorage.getItem('test'));


let item1 = new Item('item1','this is an example item','now','high');
console.log(item1);

let proj1 = new Project('project1','default project');
console.log(proj1);
proj1.addItem(item1);
console.log(proj1.content);