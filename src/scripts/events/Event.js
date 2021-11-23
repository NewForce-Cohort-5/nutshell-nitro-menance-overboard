import { Nutshell } from "../Nutshell.js";
import { deleteEvent } from "./EventData.js";

const formatDate = date => {
  // return new Date(date.split(', ')[0]).toString().split(' ').slice(0, 4).join(' ');
  const getTheDate = date.split('T');
  const dateSplit = getTheDate[0].split('-');
  // This will definitely work for our app
  return new Date(dateSplit[0], dateSplit[1] - 1, dateSplit[2]).toString().split(' ').slice(1, 4).join(' ');
}

{/* <div>${obj.user.email} | <a href="${obj.url}">View Event</a></div> */}

export const Event = (obj) => {
    return `
      <article id="event-${obj.id}">
        <h4>${obj.title}</h4>
        <!-- Event info should go here -->
        
        <div>${formatDate(obj.date)}</div>
        <div><p>${obj.location}</p></div>
        ${
          // Only render edit and delete options if current user made the article post
          +sessionStorage.activeUser === obj.userId ?
            `<button id="edit-article-${obj.id}" type="button" class="btn btn-success btn-sm text-sm my-auto me-1 mb-0">Edit</button>
            <button id="delete-article-${obj.id}" type="button" class="btn btn-success btn-sm text-sm my-auto me-1 mb-0">Delete</button>` :
            ''
          
        }
      </article>
    `;
  }

const eventHub = document.querySelector('#container');
eventHub.addEventListener('click', e => {
  if (e.target.id.startsWith('delete-event')) {
    if (confirm('Are you sure you want to delete this event?')) {
      e.preventDefault();
      const [,,eventId] = e.target.id.split('-');
      deleteEvent(eventId)
      .then(Nutshell);
    }
  }
});