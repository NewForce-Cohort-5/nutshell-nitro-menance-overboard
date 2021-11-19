import { TaskList } from "./TaskList.js"
import { saveTasks } from "./TaskDataProvider.js"
const contentTarget = document.querySelector("#task-form")

export const TaskForm = () => {
    contentTarget.innerHTML = `<form>
        <div>
            <label>Task Name:</label>
        </div>
            <input type="text" id="task-name">
        <div>
            <label>Date Added:</label>
        </div>
            <input type="date" id="task-date">
        <div>
            <label>Expected Finish Date:</label>
        </div>
            <input type="date" id="task-expectedFinish">
        <div>    
            <label for="task-completed">Completed? </label>
            <input type="checkbox" id="task-completed">
        </div>
        <div>
            <button id="saveTask">Save</button>
        </div>
    </form>`
    }

contentTarget.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "saveTask") {
        const newTask = {
           name: document.querySelector('#task-name').value,
           date: document.querySelector('#task-date').value,
           expectedFinish: document.querySelector('#task-expectedFinish').value,
           completed: document.querySelector('#task-completed').checked,
           userId: +sessionStorage.activeUser
        }
        document.querySelector("#task-name").value = ""
        document.querySelector("#task-date").value = ""
        document.querySelector("#task-expectedFinish").value = ""
        document.querySelector("#task-completed").checked = false;
        saveTasks(newTask)
        .then(TaskList)
    }
  })