import { saveTasks } from "./TaskDataProvider.js";
import { Nutshell } from "../Nutshell.js"
const contentTarget = document.querySelector(".dashboard");

const formatForDb = date => {
  return new Date(date).toISOString();
}

export const TaskForm = () => {
  return `
    <input type="text" class="form-control" placeholder="Enter Task Name" id="task-name">
    <input type="date" class="form-control" id="task-expectedFinish">
    <button class="btn btn-info m-0" type="button" id="saveTask">Add Task</button>   
  `;
}

contentTarget.addEventListener("click", clickEvent => {
  if (clickEvent.target.id === "saveTask") {
    const newTask = {
      name: document.querySelector('#task-name').value,
      date: formatForDb(Date.now()),
      expectedFinish: formatForDb(document.querySelector('#task-expectedFinish').value),
      completed: false,
      userId: +sessionStorage.activeUser
    }
    document.querySelector("#task-name").value = ""
    document.querySelector("#task-expectedFinish").value = ""
    saveTasks(newTask)
    .then(Nutshell)
  }
})