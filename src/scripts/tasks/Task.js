import { Nutshell } from "../Nutshell.js";
import { TaskEditForm } from "./TaskEditForm.js";
import { updateTask, useTasks } from "./TaskDataProvider.js";

export const Task = (task) => {
  return `
    <tr class="task-card">
      <td>
        <div class="form-check form-check-inline">
          <h6 class="mb-0 text-sm task-date">${new Date(task.date).toLocaleDateString('en-US')}</h6>
        </div>
      </td>
      <td>
        <div class="d-flex px-2 py-1">
          <div
            class="d-flex flex-column justify-content-center"
          >
            <h6 class="mb-0 text-sm task-name">${task.name}</h6>
          </div>
        </div>
      </td>
      <td>
        <div class="form-check form-check-inline">
          <h6 class="mb-0 text-sm task-expectedFinish">${new Date(task.expectedFinish).toLocaleDateString('en-US')}</h6>
        </div>
      </td>
      
      <td>
        <div class="form-check form-check-inline">
          <i id="editTask--${task.id}" class="bi bi-pencil-square m-3"></i>
        </div>
      </td>
      <td>
        <div class="form-check form-check-inline">
          <input
            class="form-check-input"
            type="checkbox"
            id="completed-${task.id}"
            value="option1"
          />
        </div>
      </td>
    </tr>`;
}

const eventHub = document.querySelector("body");

eventHub.addEventListener("click", (eventObject) => {
  if (eventObject.target.id.startsWith("editTask")) {
    const taskId = +eventObject.target.id.split("--")[1];
    document.querySelector('.task-form').innerHTML = TaskEditForm(taskId);
  }

  if (eventObject.target.id.startsWith('completed')) {
    const taskId = +eventObject.target.id.split("-")[1];
    const task = useTasks().find(task => task.id === taskId);
    task.completed = true;
    updateTask(task).then(Nutshell);
  }
})