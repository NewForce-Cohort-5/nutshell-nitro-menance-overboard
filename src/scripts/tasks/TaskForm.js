import { saveTasks } from "./TaskDataProvider.js";
import { Nutshell } from "../Nutshell.js"
const contentTarget = document.querySelector(".dashboard");

export const TaskForm = () => {
  return `
    <input type="text" class="form-control" placeholder="type a task to add" id="task-name">
    <input type="date" class="form-control" id="task-date">
    <input type="date" class="form-control" id="task-expectedFinish">
    <button class="btn btn-info m-0" type="button" id="saveTask">Add Task</button>   
  `;
}

contentTarget.addEventListener("click", clickEvent => {
  if (clickEvent.target.id === "saveTask") {
    const newTask = {
      name: document.querySelector('#task-name').value,
      date: new Date(document.querySelector('#task-date').value).toLocaleString('en-US'),
      expectedFinish: new Date(document.querySelector('#task-expectedFinish').value).toLocaleString('en-US'),
      completed: false,
      userId: +sessionStorage.activeUser
    }
    document.querySelector("#task-name").value = ""
    document.querySelector("#task-date").value = ""
    document.querySelector("#task-expectedFinish").value = ""
    saveTasks(newTask)
    .then(Nutshell)
  }
})