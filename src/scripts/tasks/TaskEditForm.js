import { useTasks, updateTask } from "./TaskDataProvider.js";
import { TaskList } from "./TaskList.js";

const contentTarget = document.querySelector("#task-form")

export const TaskEditForm = (taskId) => {
    const allTasks = useTasks();

    const taskWeWantToEdit = allTasks.find(singleTask=> singleTask.id === taskId)

    contentTarget.innerHTML = `
        <h2>Edit Task</h2>
        <input type="text" id="task-name" value="${taskWeWantToEdit.name}" />
        <input type="date" id="task-date" value="${taskWeWantToEdit.date}" />
        <input type="date" id="task-expectedFinish" value="${taskWeWantToEdit.expectedFinish}" />
        <label for="task-completed">Completed? </label>
        <input type="checkbox" id="task-completed">
        <button id="saveNoteChanges-${taskId}">Save Changes</button>
    `
}

let eventHub = document.querySelector("body")
eventHub.addEventListener("click", (eventObject) => {
    if(eventObject.target.id.startsWith("saveNoteChanges")){

        const editedTask = {
            name: document.querySelector('#task-name').value,
            date: document.querySelector('#task-date').value,
            expectedFinish: document.querySelector('#task-expectedFinish').value,
            completed: document.querySelector('#task-completed').checked,
            userId: +sessionStorage.activeUser,
            id: eventObject.target.id.split("-")[1]
        }
        updateTask(editedTask).then(TaskList)
    }
})