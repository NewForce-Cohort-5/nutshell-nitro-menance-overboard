import { getTasks, useTasks } from "./TaskData.js";
import { Task } from "./Task.js";

const contentTarget = document.querySelector(".task-list")

export const NoteList = () => {
    getTasks()
    .then(() => {

            let tasksArray = useTasks();
            let taskHTML = "";

            tasksArray.forEach(singleTask => {
                taskHTML += Task(singleTask);
            });
            contentTarget.innerHTML = noteHTML
        });
};