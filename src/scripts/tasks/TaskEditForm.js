import { Nutshell } from "../Nutshell.js";
import { useTasks, updateTask } from "./TaskDataProvider.js";

const formatToCalendar = date => {
  return new Date(date).toISOString().split('T')[0];
}

export const TaskEditForm = (taskId) => {
  const allTasks = useTasks();

  const taskWeWantToEdit = allTasks.find(singleTask=> singleTask.id === taskId);
  
  return `
    <input type="text" class="form-control" id="task-name" value="${taskWeWantToEdit.name}" />
    <input type="date" class="form-control" id="task-date" value="${formatToCalendar(taskWeWantToEdit.date)}" />
    <input type="date" class="form-control" id="task-expectedFinish" value="${formatToCalendar(taskWeWantToEdit.expectedFinish)}" />
    <button id="saveTaskChanges-${taskId}" class="btn btn-info m-0">Save Changes</button>
  `;
}

const eventHub = document.querySelector("body");
eventHub.addEventListener("click", (eventObject) => {
  if(eventObject.target.id.startsWith("saveTaskChanges")){
    const editedTask = {
      name: document.querySelector('#task-name').value,
      date: document.querySelector('#task-date').value,
      expectedFinish: document.querySelector('#task-expectedFinish').value,
      userId: +sessionStorage.activeUser,
      id: eventObject.target.id.split("-")[1]
    }
    updateTask(editedTask).then(Nutshell);
  }
})