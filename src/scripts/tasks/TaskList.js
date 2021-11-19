import { getTasks, useTasks } from "./TaskDataProvider.js";
import { Task } from "./Task.js";

const contentTarget = document.querySelector("#task-list")

export const TaskList = () => {
    getTasks()
    .then(() => {

            let tasksArray = useTasks();
            let taskHTML = "";
            tasksArray.forEach(singleTask => {
                if (singleTask.completed === false && singleTask.userId === +sessionStorage.activeUser){
                taskHTML += Task(singleTask);}
            });
            contentTarget.innerHTML = taskHTML
        });
};