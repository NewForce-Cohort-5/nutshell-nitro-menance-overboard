import { useEvents } from "./EventData.js";
import { Event } from "./Event.js";
import { setFormFields } from "./EventForm.js";

const eventHub = document.querySelector('#container');

export const EventList = () => {
    return `<div class="events d-flex">
      ${render(useEvents().sort((a,b) => new Date(b.date) - new Date(a.date)))}
    </div>`;
}

const render = eventCollection => {

    return eventCollection.map(event => Event(event)).join('');
}

eventHub.addEventListener('click', e => {
    if (e.target.id === 'new-event') {
        document.querySelector('#event-form-container').classList.remove('d-none');
        setFormFields({
          title: '',
          date: Date.now(),
          location: '',
          id: 0
        })
        // e.target.classList.add('d-none');
        document.querySelector('#save-event').textContent = 'Save Event';
      }
})