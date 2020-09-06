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
    return {addProject,addTodo,getContent,removeProject,removeTodo}
})();

export {List_Controller}