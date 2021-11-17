let tasks = [];

export const useTasks = () => {
    return tasks.slice();
}

export const getTasks = () => {
    return fetch('http://localhost:8088/database')
        .then(response => response.json())
        .then(parsedTasks => {
            tasks = parsedTasks;
        });
}

export const saveTasks = task => {
    return fetch('http://localhost:8088/database', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(task)
    })
    .then(getTasks)
}