import { deleteTask } from "./TaskDataProvider.js"
import { TaskEditForm } from "./TaskEditForm.js"
import { TaskList } from "./TaskList.js"

export const Task = (task) => {
    return `
        <section class="task-card">
            <div class="task-name">${task.name}</div>
            <div class="task-date">${new Date(task.date).toLocaleDateString('en-US')}</div>
            <div class="task-expectedFinish">${new Date(task.expectedFinish).toLocaleDateString('en-US')}</div>
            <div class="task-completed">${task.completed}</div>
            <button id="editTask--${task.id}">Edit</button>
        </section>
        `
}

const eventHub = document.querySelector("body")

eventHub.addEventListener("click", (eventObject) => {
    if (eventObject.target.id.startsWith("editTask")) {
      const taskId = +eventObject.target.id.split("--")[1]
      TaskEditForm(taskId);
    }
  })