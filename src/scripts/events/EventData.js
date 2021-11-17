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