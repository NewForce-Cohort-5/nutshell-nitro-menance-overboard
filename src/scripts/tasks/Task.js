export const Task = (task) => {
    return `
        <section class="task-card">
            <div class="task-name">${task.name}</div>
            <div class="task-date">${new Date(task.date).toLocaleDateString('en-US')}</div>
            <div class="task-expectedFinish">${new Date(task.expectedFinish).toLocaleDateString('en-US')}</div>
            <div class="task-completed">${task.completed}</div>
        </section>
        `
}