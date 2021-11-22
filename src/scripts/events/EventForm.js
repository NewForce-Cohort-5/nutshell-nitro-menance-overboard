import { Nutshell } from "../Nutshell.js";
import { saveEvent, useEvents, updateEvents } from "./EventData.js";

const isValid = event => {
  return ((event.title !== '' && event.title.length > 2) && (article.location !== '' && event.location.length > 2));
}

const setFormFields = event => {
  document.querySelector('#event_title').value = event.title;
  document.querySelector('#event_date').value = event.date;
  document.querySelector('#event_location').value = event.location;
  document.querySelector('#event_id').value = event.id;
}

export const EventForm = (eventId = 0) => {
  return `
  <form id="event-form">
    <label class="form-control-label">Name</label>
    <div class="input-group input-group-outline">
      <input id="event_title" class="form-control" type="text" placeholder="Enter Name">
    </div>
    <label class="form-control-label">Date</label>
    <div class="input-group input-group-outline">
      <input id="event_date" type="date" class="form-control">
    </div>
    <label class="form-control-label">Location</label>
    <div class="input-group input-group-outline">
      <input id="event_location" class="form-control" type="text" placeholder="Enter location...">
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
      url: document.querySelector('#article_url').value,
      synopsis: document.querySelector('#article_synopsis').value,
      userId: +document.querySelector('#article_userId').value,
      id: +document.querySelector('#article_id').value,
      date: new Date(Date.now()).toLocaleString()
    }

    if (isValid(event)) {
      document.querySelector('#event_title').value = '';
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

  if (e.target.id.startsWith('edit-article')) {
    e.preventDefault();
    // Equivalent to 
    // const articleId = e.target.id.split('-')[2];
    const [,,articleId] = e.target.id.split('-');
    const articleToEdit = useArticles().find(article => article.id === +articleId);

    // Render the form as if it were new
    document.querySelector('#article-form-container').classList.remove('d-none');
    // Make the button say Edit Article instead of Save Article
    document.querySelector('#save-article').textContent = 'Edit Article';
    // Set the form fields to match the contents of the article user wishes to edit
    setFormFields(articleToEdit);

  }
});