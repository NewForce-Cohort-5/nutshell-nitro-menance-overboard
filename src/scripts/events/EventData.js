/*
    Author(s): Cameron Resuta
    Purpose: This component exposes all event resources in the database.json for use by the client
*/

let events = []

export const useEvents = () => {
    return events.slice()
}

export const getEvents = () => {
    return fetch("http://localhost:8088/events")
    .then(response => response.json())
    .then(data => {
        events = data
    })
}

export const saveEvent = event => {
    return fetch('http://localhost:8088/events', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(event)
    }).then(getEvents);
  }
  
  export const updateEvent = event => {
    return fetch(`http://localhost:8088/articles/${event.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(event)
    }).then(getArticles);
  }
  
  export const deleteEvent = eventId => {
    return fetch(`http://localhost:8088/articles/${eventId}`, {
      method: "DELETE"
    }).then(getEvents);
  }
  