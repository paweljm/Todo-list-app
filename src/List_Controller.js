const List_Controller = (() => {
    const mainContent = {};

    const addProject = (project) => {
        mainContent[(project).name] = project;
    }
    const addTodo = (parent,child) => {
        mainContent[(parent).name].addItem(child);
    }
    const getContent = () => {
        return mainContent;
    }
    const removeProject = (projectName) => {
        delete mainContent[projectName];
    }
    const removeTodo = (parentName,childName) => {
        delete mainContent[parentName].content[childName];
    }

    const localStorageUpdate = () => {
        let temp = JSON.stringify(mainContent);
        localStorage.setItem('mainContent',mainContent);
    }
    const editProject = (projectName,name,desc) => {
        let temp = mainContent[projectName]
        delete mainContent[projectName];
        mainContent[name] = temp;
        mainContent[name].updateInfo(name,desc);
    }
    const editTodo = (parentName,childName,title,desc,due,priority) => {
        let temp = mainContent[parentName].content[childName];
        delete mainContent[parentName].content[childName];
        mainContent[parentName].content[title] = temp;
        mainContent[parentName].content[title].updateInfo(title,desc,due,priority);
    }
    return {addProject,addTodo,getContent,removeProject,removeTodo,editProject,editTodo,localStorageUpdate}
})();

export {List_Controller}