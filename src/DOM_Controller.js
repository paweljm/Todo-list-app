const DOM_Controller = (() => {
    const container = document.querySelector('.project-container');

    const clear = () => {
        container.innerHTML = '';
    }

    const createNewProject = (projName,projDesc) => {
        //creating the card container and appending to container
        let projectCard = document.createElement('div');
        projectCard.classList.add('project-card');
        projectCard.setAttribute('id',`${projName}`);
        container.appendChild(projectCard);
        //creating the three divs for inside the project card
        let div1 = document.createElement('div');
        let div2 = document.createElement('div');
        let div3 = document.createElement('div');
        //appending the three divs
        projectCard.appendChild(div1);
        projectCard.appendChild(div2);
        projectCard.appendChild(div3);
        //adding content to div 1 and appending
        let editTitleBtn = document.createElement('button');
        editTitleBtn.classList.add('proj-edit-button')
        let editIcon = document.createElement('i');
        editIcon.classList.add('fas');
        editIcon.classList.add('fa-pen-square');
        editTitleBtn.appendChild(editIcon);
        div1.appendChild(editTitleBtn);
        let projectName = document.createElement('h2');
        let projectDesc = document.createElement('p');
        projectName.textContent = projName.replace(/-/g,' ');
        projectDesc.textContent = projDesc;
        div1.appendChild(projectName);
        div1.appendChild(projectDesc);
        //creating content for div 3 and appending;
        let addButton = document.createElement('button');
        let addIcon = document.createElement('i');
        addButton.classList.add('add-todo-btn');
        addIcon.classList.add('fas');
        addIcon.classList.add('fa-plus');
    }


    const createNewTodo = (parent,todoName,dueDate,priority,todoDesc, done = false) => {
        //create main div and append to parent
        let parentContainer = document.querySelector(`#${parent}`).childNodes[1];
        let container = document.createElement('div');
        container.classList.add('todo-item');
        parentContainer.appendChild(container);
        //create divs for inside the 'container'
        let main = document.createElement('div')
        main.classList.add('todo-main');
        let todoNameHyphen = todoName.replace(/ /g,'-');
        container.setAttribute('id',`${parent}-${todoNameHyphen}`)
        let expand = document.createElement('div');
        expand.classList.add('expand');
        container.appendChild(main);
        container.appendChild(expand);
        //populate the main div
        let check = document.createElement('input');
        check.setAttribute('type','checkbox');
        check.setAttribute('name','done');
        if (done == true) {
            check.setAttribute('checked','true');
        }
        main.appendChild(check);
        let todoTitle = document.createElement('p');
        todoTitle.textContent = todoName;
        let todoDue = document.createElement('p');
        todoDue.textContent = dueDate;
        main.appendChild(todoTitle);
        main.appendChild(todoDue);
        let priorityDiv = document.createElement('div');
        if (priority == 'high'){
            priorityDiv.style.backgroundColor = 'red';
        } else if (priority == 'medium') {
            priorityDiv.style.backgroundColor = 'yellow';
        } else {
            priorityDiv.style.backgroundColor = 'green';
        }
        priorityDiv.classList.add('priority');
        main.appendChild(priorityDiv);
        //populate the expand div
        expand.appendChild(document.createElement('br'));
        let descriptionText = document.createElement('p');
        descriptionText.textContent = todoDesc;
        expand.appendChild(descriptionText);
        let editBtn = document.createElement('button');
        expand.appendChild(editBtn);
        let deleteBtn = document.createElement('button');
        expand.appendChild(deleteBtn);
        let editIcon = document.createElement('i');
        editIcon.classList.add('fas');
        editIcon.classList.add('fa-pen-square');
        let deleteIcon = document.createElement('i');
        deleteIcon.classList.add('fas');
        deleteIcon.classList.add('fa-trash-alt');
        editBtn.appendChild(editIcon);
        editBtn.classList.add('todo-edit-button');
        deleteBtn.appendChild(deleteIcon);
        deleteBtn.classList.add('todo-delete-button');
    }

    const editTodo = (parent,todo) => {
        let item = document.querySelector(`#${parent}-${todo}`);
        let titleText = item.childNodes[0].childNodes[1];
        let dateText = item.childNodes[0].childNodes[2];
        let priorityDisplay = item.childNodes[0].childNodes[3];
        let descText = item.childNodes[1].childNodes[1];

        let titleInput = document.createElement('input');
        titleInput.setAttribute('id','item-input-name');
        titleInput.value = titleText.textContent;
        let dateInput = document.createElement('input');
        dateInput.setAttribute('type','date')
        dateInput.setAttribute('id','item-input-date');
        dateInput.value = dateText.textContent;
        let prioritySelect = document.createElement('select');
        prioritySelect.setAttribute('id','item-priority-select');
        let optionHigh = document.createElement('option');
        optionHigh.value = 'high';
        optionHigh.textContent = 'high';
        let optionMed = document.createElement('option');
        optionMed.textContent = 'medium'
        optionMed.value = 'medium'
        let optionLow = document.createElement('option');
        optionLow.textContent = 'low';
        optionLow.value = 'low';
        prioritySelect.appendChild(optionHigh);
        prioritySelect.appendChild(optionMed);
        prioritySelect.appendChild(optionLow);
        let descInput = document.createElement('input');
        descInput.setAttribute('id','item-input-desc');
        descInput.value = descText.textContent;

        let br = item.childNodes[1].childNodes[0];


        titleText.replaceWith(titleInput);
        dateText.replaceWith(dateInput);
        br.replaceWith(prioritySelect);
        descText.replaceWith(descInput);

        let editBtn = item.childNodes[1].childNodes[2];
        let confirmButton = document.createElement('button');
        confirmButton.setAttribute('id','item-confirm-button');
        confirmButton.classList.add('fas');
        confirmButton.classList.add('fa-check');
        editBtn.replaceWith(confirmButton);

    }

    const editProject = (project) => {
        let proj = document.querySelector(`#${project}`);
        let titleText = proj.childNodes[0].childNodes[1];
        let descText = proj.childNodes[0].childNodes[2];
        let editBtn = proj.childNodes[0].childNodes[0];
        let titleInput = document.createElement('input');
        titleInput.setAttribute('id','proj-new');
        titleInput.value = titleText.textContent;
        let descInput = document.createElement('input');
        descInput.setAttribute('id','desc-new');
        descInput.value = descText.textContent;
        titleText.replaceWith(titleInput);
        descText.replaceWith(descInput);
        let confirmBtn = document.createElement('button');
        confirmBtn.classList.add('fas');
        confirmBtn.classList.add('fa-check');
        editBtn.replaceWith(confirmBtn);
        confirmBtn.setAttribute('id','confirm-button');
        
        let deleteBtn = document.createElement('button');
        deleteBtn.classList.add('fas');
        deleteBtn.classList.add('fa-trash-alt');
        proj.childNodes[0].appendChild(deleteBtn);
        deleteBtn.setAttribute('id','delete-proj-btn');
    }
    return {createNewProject,createNewTodo,clear,editProject,editTodo}
})();

export {DOM_Controller}