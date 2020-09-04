const DOM_Controller = (() => {
    const container = document.querySelector('.project-container');

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
        let editIcon = document.createElement('i');
        editIcon.classList.add('fas');
        editIcon.classList.add('fa-pen-square');
        editTitleBtn.appendChild(editIcon);
        div1.appendChild(editTitleBtn);
        let projectName = document.createElement('h2');
        let projectDesc = document.createElement('p');
        projectName.textContent = projName;
        projectDesc.textContent = projDesc;
        div1.appendChild(projectName);
        div1.appendChild(projectDesc);
        //creating content for div 3 and appending;
        let addButton = document.createElement('button');
        let addIcon = document.createElement('i');
        addIcon.classList.add('fas');
        addIcon.classList.add('fa-plus');
        div3.appendChild(addButton);
        addButton.appendChild(addIcon);
    }

    const createNewTodo = (parent,todoName,dueDate,priority,todoDesc) => {
        //create main div and append to parent
        let parentContainer = document.querySelector(`#${parent}`).childNodes[1];
        let container = document.createElement('div');
        container.classList.add('todo-item');
        parentContainer.appendChild(container);
        //create divs for inside the 'container'
        let main = document.createElement('div')
        main.classList.add('todo-main');
        let expand = document.createElement('div');
        expand.classList.add('expand');
        container.appendChild(main);
        container.appendChild(expand);
        //populate the main div
        let check = document.createElement('input');
        check.setAttribute('type','checkbox');
        check.setAttribute('name','done');
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
        deleteBtn.appendChild(deleteIcon);
    }
    return {createNewProject,createNewTodo}
})();

export {DOM_Controller}