/*
    Author(s): Cameron Resuta
    Purpose: This component exposes all user resources in the database.json for use by the client
*/

let users = []

export const useUsers = () => {
    return articles.slice()
}

export const getUsers = () => {
    return fetch("http://localhost:8088/users")
    .then(response => response.json())
    .then(data => {
        users = data
    })
}