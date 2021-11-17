const contentTarget = document.querySelector(".task-form")

export const TaskForm = () => {
    contentTarget.innerHTML = `
    <form>
        <div>
            <label>Task Name:</label>
        </div>
            <input type="text" id="task-name"/>
        <div>
            <label>Date Added:</label>
        </div>
            <input type="date" id="task-date"/>
        <div>
            <label>Expected Finish Date:</label>
        </div>
            <input type="date" id="task-expectedFinish"/>
        <div>    
            <label for="task-completed">Completed? </label>
            <input type="checkbox" id="task-completed">
        </div>
        <div>
            <button id="saveTask">Save</button>
        </div>
    </form>
    `
}
