/*
    Author(s): Cameron Resuta
    Purpose: This component exposes all task resources in the database.json for use by the client
*/

let tasks = []

export const useTasks = () => {
    return tasks.slice()
}

export const getTasks = () => {
    return fetch("http://localhost:8088/tasks")
    .then(response => response.json())
    .then(data => {
        tasks = data
    })
}