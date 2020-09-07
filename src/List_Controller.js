import { add } from "date-fns";
import { Project } from "./project";

const List_Controller = (() => {
    //let mainTemp = {};
    const mainContent = {};

    const createFromLocal = () => {
        let tempLocal = localStorage.getItem('mainContent');
        if (tempLocal != null){
            console.log(tempLocal);
            let mainTempParsed = JSON.parse(tempLocal);
            for (const [key,value] of Object.entries(mainTempParsed)){
                let proj = new Project(value.name,value.description,value.content);
                //addProject(proj);
                console.log(value.content);
                console.log(proj.content);
                mainContent[(proj).name] = proj;
                //let p_name = value.name;
                //let content = value.content;
                //console.log(value.content);
                //console.log(content.entries);
                //console.log(typeof content);
                //console.log(key,value);
                //for (let i =0;i<content.length;i++){
                //    let item = new item(content[i].title,content[i].description,content[i].dueDate,content[i].priority);
                //    addTodo(proj,item);
                //    console.log('added');
                //}
            }
        }
    }

    const addProject = (project) => {
        mainContent[(project).name] = project;
    }
    const addTodo = (parent,child) => {
        //mainContent[(parent).name].addItem(child);
        mainContent[(parent).name].content[child.title] = child;
        localStorageUpdate();
    }
    const getContent = () => {
        return mainContent;
    }
    const setContent = (content) => {
        maincontent = content;
    }
    const removeProject = (projectName) => {
        delete mainContent[projectName];
    }
    const removeTodo = (parentName,childName) => {
        delete mainContent[parentName].content[childName];
    }

    const localStorageUpdate = () => {
        let temp = JSON.stringify(mainContent);
        console.log(temp);
        localStorage.setItem('mainContent',temp);
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
    return {addProject,addTodo,getContent,removeProject,removeTodo,setContent,editProject,editTodo,localStorageUpdate,createFromLocal}
})();

export {List_Controller}