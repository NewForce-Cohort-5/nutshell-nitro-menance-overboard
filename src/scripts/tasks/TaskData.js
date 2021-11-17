let tasks = [];

export const useTasks = () => {
    return tasks.slice();
}

export const getTasks = () => {
    return fetch('http://localhost:8088/tasks')
        .then(response => response.json())
        .then(parsedTasks => {
            tasks = parsedTasks;
        });
}