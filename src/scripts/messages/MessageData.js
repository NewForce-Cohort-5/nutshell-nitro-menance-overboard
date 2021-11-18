/*
    Author(s): Cameron Resuta
    Purpose: This component exposes all message resources in the database.json for use by the client
*/

let messages = []

export const useMessages = () => {
    return messages.slice()
}

export const getMessages = () => {
    return fetch("http://localhost:8088/messages")
    .then(response => response.json())
    .then(data => {
        messages = data
    })
}