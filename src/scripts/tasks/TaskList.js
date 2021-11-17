import { getTasks, useTasks } from "./TaskData.js";
import { Task } from "./Task.js";

export const TaskList = () => {
    let taskListContainer = document.querySelector(".task-list");
    let taskHTML = "";
    taskListContainer.innerHTML = taskHTML
    
    getTasks()
    .then(() => {
            let tasksArray = useTasks();
            tasksArray.forEach((singleTask) => {
                partyGuestListContainer.innerHTML += Task(singleTask)
            })
        });
};