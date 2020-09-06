import {format} from "date-fns";
import { formatDistanceToNow } from 'date-fns'
import {Item} from "./item.js";
import {Project} from "./project.js";
import {DOM_Controller} from "./DOM_Controller.js"
import {List_Controller} from "./List_Controller.js";


let main = new Project('Main','');
List_Controller.addProject(main);
//let todo1 = new Item('todo1','this is a description','2 days','high');
//List_Controller.addTodo(main,todo1);
//let todo2 = new Item('todo2','this is a description','2 days','high');
//List_Controller.addTodo(main,todo2);

const newProjButton = document.querySelector('#new-proj-btn');
newProjButton.addEventListener('click', (e) => {
    let currentProj;
    let nameInput = document.querySelector('#project-name-input');
    let descInput = document.querySelector('#project-description-input');
    currentProj = new Project(nameInput.value,descInput.value)
    let container = document.querySelector('.add-project-menu');
    List_Controller.addProject(currentProj);
    console.log(List_Controller.getContent());
    update();
})
const newTodoButton = document.querySelector('#new-todo-btn');
newTodoButton.addEventListener('click',(e) =>{
    let currentTodo;

    let projSelector = document.querySelector('#projects-select');
    let nameInput = document.querySelector('#todo-name-input');
    let descInput = document.querySelector('#todo-description-input');
    let dateInput = document.querySelector('#todo-date-input');
    let prioritySelector = document.querySelector('#priority-select');

    let projVal = projSelector.value;
    let nameVal = nameInput.value;
    let descVal = descInput.value;
    let dateVal = dateInput.value;
    let priorityVal = prioritySelector.value;

    let mainContent = List_Controller.getContent();
    let project = mainContent[projVal];
    console.log(project);

    dateVal = new Date(dateVal);

    dateVal = formatDistanceToNow(new Date(dateVal),{addSuffix:true});
    //console.log(dateVal);
    currentTodo = new Item(nameVal,descVal,dateVal,priorityVal);
    List_Controller.addTodo(project,currentTodo);
    console.log(currentTodo);

    update();

});
function update() {
    DOM_Controller.clear();
    let mainContent = List_Controller.getContent();
    console.log(mainContent);
    let select = document.querySelector('#projects-select');
    select.innerHTML ='';
    for (const [key,value] of Object.entries(mainContent)){
        //
        let option = document.createElement('option');
        select.appendChild(option);
        option.value = key;
        option.textContent = key;
        //
        console.log(key,value.description);
        console.log(value.content);
        DOM_Controller.createNewProject(key,value.description);
        let currContent = value.content;
        Object.entries(currContent).forEach(entry =>{
            //console.log(entry[1].description);
            console.log(key,entry[1].title,entry[1].dueDate,entry[1].priority,entry[1].description);
            DOM_Controller.createNewTodo(key,entry[1].title,entry[1].dueDate,entry[1].priority,entry[1].description);
        })
    }
}
update();