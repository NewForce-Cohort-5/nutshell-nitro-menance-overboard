import { getTasks, useTasks } from "./TaskDataProvider.js";
import { Task } from "./Task.js";

// const contentTarget = document.querySelector(".task-list")
const contentTarget = document.querySelector(".dashboard")

export const TaskList = () => {
    getTasks()
    .then(() => {

            let tasksArray = useTasks();
            let taskHTML = "";
            tasksArray.forEach(singleTask => {
                if (singleTask.userId === +sessionStorage.activeUser){
                taskHTML += Task(singleTask);}
            });
            contentTarget.innerHTML += taskHTML
        });
};