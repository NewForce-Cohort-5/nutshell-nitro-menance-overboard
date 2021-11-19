import { TaskList } from "./TaskList.js"
import { saveTasks } from "./TaskDataProvider.js"
// const contentTarget = document.querySelector(".task-form")
const contentTarget = document.querySelector(".dashboard")

// export const TaskForm = () => {
//     contentTarget.innerHTML = `<form>
//         <div>
//             <label>Task Name:</label>
//         </div>
//             <input type="text" id="task-name">
//         <div>
//             <label>Date Added:</label>
//         </div>
//             <input type="date" id="task-date">
//         <div>
//             <label>Expected Finish Date:</label>
//         </div>
//             <input type="date" id="task-expectedFinish">
//         <div>    
//             <label for="task-completed">Completed? </label>
//             <input type="checkbox" id="task-completed">
//         </div>
//         <div>
//             <button id="saveTask">Save</button>
//         </div>
//     </form>`
//     }

// contentTarget.addEventListener("click", clickEvent => {
//     if (clickEvent.target.id === "saveTask") {
//         const newTask = {
//            name: document.querySelector('#task-name').value,
//            date: document.querySelector('#task-date').value,
//            expectedFinish: document.querySelector('#task-expectedFinish').value,
//            completed: document.querySelector('#task-completed').checked,
//            userId: +sessionStorage.activeUser
//         }
//         document.querySelector("#task-name").value = ""
//         document.querySelector("#task-date").value = ""
//         document.querySelector("#task-expectedFinish").value = ""
//         document.querySelector("#task-completed").checked = false;
//         saveTasks(newTask)
//         .then(TaskList)
//     }
//   })

    export const TaskForm = () => {
        return `
        <input type="text" class="form-control" placeholder="type a task to add" id="task-name">
        <input type="date" class="form-control" id="task-date">
        <input type="date" class="form-control" id="task-expectedFinish">
        <button class="btn btn-info m-0" type="button" id="saveTask">Add Task</button>   
        `
        }

contentTarget.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "saveTask") {
        const newTask = {
           name: document.querySelector('#task-name').value,
           date: document.querySelector('#task-date').value,
           expectedFinish: document.querySelector('#task-expectedFinish').value,
           userId: +sessionStorage.activeUser
        }
        document.querySelector("#task-name").value = ""
        document.querySelector("#task-date").value = ""
        document.querySelector("#task-expectedFinish").value = ""
        saveTasks(newTask)
        .then(TaskList)
    }
  })