import { useEvents } from "./EventData.js";
import { Event } from "./Event.js";

const eventHub = document.querySelector('#container');

export const EventList = () => {
    return `<div class="events">
      ${render(useEvents().reverse())}
    </div>`;
}

const render = eventCollection => {
    return eventCollection.map(event => Event(event)).join('');
}

eventHub.addEventListener('click', e => {
    if (e.target.id === 'new-event') {
        document.querySelector('#event-form-container').classList.remove('d-none');
        e.target.classList.add('d-none');
      }
})