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
    let nameInputVal = nameInput.value;
    nameInputVal = nameInputVal.replace(/ /g,'-');
    console.log(nameInputVal);
    let descInput = document.querySelector('#project-description-input');
    currentProj = new Project(nameInputVal,descInput.value);
    let container = document.querySelector('.add-project-menu');
    List_Controller.addProject(currentProj);
    console.log(List_Controller.getContent());

    nameInput.value = '';
    descInput.value = '';

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

    nameInput.value = '';
    descInput.value = '';
    dateInput.value = '';

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
        option.textContent = value.name;
        //
        console.log(key,value.description);
        console.log(value.content);
        DOM_Controller.createNewProject(value.name,value.description);
        let currContent = value.content;
        Object.entries(currContent).forEach(entry =>{
            //console.log(entry[1].description);
            console.log(key,entry[1].title,entry[1].dueDate,entry[1].priority,entry[1].description);
            DOM_Controller.createNewTodo(key,entry[1].title,entry[1].dueDate,entry[1].priority,entry[1].description);
        })
    }
    let editProjBtnList = document.querySelectorAll('.proj-edit-button');
    console.log(editProjBtnList);
    editProjBtnList.forEach(element => {
        element.addEventListener('click',(e)=>{
            let workingProjectName = element.parentNode.parentNode.getAttribute('id');
            let workingDiv = element.parentNode.parentNode;
            console.log(workingProjectName);
            DOM_Controller.editProject(workingProjectName);
            let confirmButton = document.querySelector('#confirm-button');
            confirmButton.addEventListener('click',(e)=>{
                let nameInput = document.querySelector('#proj-new');
                let descInput = document.querySelector('#desc-new');

                workingDiv.setAttribute('id',(nameInput.value).replace(/ /g,'-'));

                console.log(nameInput.value);
                console.log(descInput.value);
                List_Controller.editProject(workingProjectName,(nameInput.value).replace(/ /g,'-'),descInput.value);
                update();
            })
            let deleteButton = document.querySelector('#delete-proj-btn');
            deleteButton.addEventListener('click',(e) => {
                List_Controller.removeProject(workingProjectName);
                update();
            })
        })
    let editTodoBtnList = document.querySelectorAll('.todo-edit-button');
    editTodoBtnList.forEach(element => {
        element.addEventListener('click',(e) => {
            let workingProject = element.parentNode.parentNode.parentNode.parentNode;
            let workingProjectName = element.parentNode.parentNode.parentNode.parentNode.getAttribute('id');
            let workingTodo = element.parentNode.parentNode;
            let workingTodoName =element.parentNode.parentNode.getAttribute('id');
            let todoName = workingTodoName.replace(`${workingProjectName}-`,'');


            DOM_Controller.editTodo(workingProjectName,todoName);
            
            let confirmButton = document.querySelector('#item-confirm-button');
            confirmButton.addEventListener('click',(e) => {
                let titleValue = workingTodo.childNodes[0].childNodes[1].value;
                let dateVal = workingTodo.childNodes[0].childNodes[2].value;
                let priorityVal = workingTodo.childNodes[1].childNodes[0].value;
                let descVal = workingTodo.childNodes[1].childNodes[0].value;

                dateVal = formatDistanceToNow(new Date(dateVal),{addSuffix:true});

                List_Controller.editTodo(workingProjectName,todoName,titleValue,descVal,dateVal,priorityVal);
                update();
            })

        })
    })
    let deleteBtnList = document.querySelectorAll('.todo-delete-button');
    deleteBtnList.forEach(element => {
        element.addEventListener('click',(e) =>{
            let workingProject = element.parentNode.parentNode.parentNode.parentNode;
            let workingProjectName = element.parentNode.parentNode.parentNode.parentNode.getAttribute('id');
            console.log(workingProjectName);
            let workingTodo = element.parentNode.parentNode;
            let workingTodoName =element.parentNode.parentNode.getAttribute('id');
            console.log(workingTodoName);
            let todoName = workingTodoName.replace(`${workingProjectName}-`,'');
            List_Controller.removeTodo(workingProjectName,todoName);
            console.table(List_Controller.getContent());
            update();
        })
    })
    let editBtnList = document.querySelectorAll('.todo-edit-button');
    //
    });
    //List_Controller.localStorageUpdate();
}
update();