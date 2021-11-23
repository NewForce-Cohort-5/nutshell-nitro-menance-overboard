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

export const saveMessages = message => {
    return fetch('http://localhost:8088/messages', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(message)
    })
    .then(getMessages)
}

export const updateMessage = message => {
    return fetch(`http://localhost:8088/messages/${message.id}`, {
      method: "PUT",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify(message)
    }).then(getMessages);
  }