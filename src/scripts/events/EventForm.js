import { Nutshell } from "../Nutshell.js";
import { saveEvent, useEvents, updateEvent } from "./EventData.js";

const isValid = event => {
  return ((event.title !== '' && event.title.length > 2) && (event.location !== '' && event.location.length > 2));
}

const setFormFields = event => {
    console.log(event.date.split(', ')[0])
  document.querySelector('#event_title').value = event.title;
  document.querySelector('#event_date').value = event.date;
  document.querySelector('#event_location').value = event.location;
  document.querySelector('#event_id').value = event.id;
}

export const EventForm = (eventId = 0) => {
    if(eventId) {
        const allEvents = useEvents();
        const eventWeWantToEdit = allEvents.find(singleEvent=> singleEvent.id === +eventId);
    }
  return `
  <form id="event-form">
    <label class="form-control-label">Name</label>
    <div class="input-group input-group-outline">
      <input id="event_title" class="form-control" type="text" placeholder="Enter Name">
    </div>
    <label class="form-control-label">Date</label>
    <div class="input-group input-group-outline">
      <input id="event_date" type="date" class="form-control" value="${eventWeWantToEdit.date.split(', ')[0]}">
    </div>
    <label class="form-control-label">Location</label>
    <div class="input-group input-group-outline">
      <input id="event_location" class="form-control" type="text" placeholder="Enter Location...">
    </div>
    <div class="input-group input-group-outline">
      <input id="event_id" class="form-control" type="number" value=${eventId} hidden>
    </div>
    <input id="event_userId" class="form-control" type="number" value=${sessionStorage.activeUser} hidden>
    
    <button id="save-event" class="btn btn-success mt-3" type="submit">Save Event</button>
  </form>
  `;
}

const contentTarget = document.querySelector('.dashboard');
const eventHub = document.querySelector('#container');
eventHub.addEventListener('click', e => {
  if (e.target.id === 'save-event') {
    e.preventDefault();

    // The event is now shared between the create and edit event form
    const event = {
      title: document.querySelector('#event_title').value,
      location: document.querySelector('#event_location').value,
      userId: +document.querySelector('#event_userId').value,
      id: +document.querySelector('#event_id').value,
      date: new Date(Date.now()).toLocaleString()
    }

    if (isValid(event)) {
      document.querySelector('#event_title').value = '';
      document.querySelector('#event_date').value = '';
      document.querySelector('#event_location').value = '';
      
      if(e.target.textContent === 'Save Event') {
        saveEvent(event)
        .then(Nutshell);
      } else {
        updateEvent(event)
        .then(Nutshell);
      }
    } else {
      alert('Please make sure all fields are filled out, Name and Location must have atleast 3 characters');
    }

  }

  if (e.target.id.startsWith('edit-event')) {
    e.preventDefault();
    // Equivalent to 
    // const eventId = e.target.id.split('-')[2];
    const [,,eventId] = e.target.id.split('-');
    const eventToEdit = useEvents().find(event => event.id === +eventId);

    // Render the form as if it were new
    document.querySelector('#event-form-container').classList.remove('d-none');
    // Make the button say Edit Event instead of Save Event
    document.querySelector('#save-event').textContent = 'Edit Event';
    // Set the form fields to match the contents of the event user wishes to edit
    setFormFields(eventToEdit);

  }
});