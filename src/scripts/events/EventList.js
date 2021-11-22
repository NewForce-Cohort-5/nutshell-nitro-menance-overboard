import { useEvents } from "./EventData.js";
import { Event } from "./Event.js";
import { setFormFields } from "./EventForm.js";

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
        document.querySelector('#event-form-container').classList
        setFormFields({
          title: '',
          date: '',
          location: '',
          id: 0
        })
        // e.target.classList.add('d-none');
        document.querySelector('#save-event').textContent = 'Save Event';
      }
})