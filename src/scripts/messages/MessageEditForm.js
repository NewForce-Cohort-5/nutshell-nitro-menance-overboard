import { Nutshell } from "../Nutshell.js";
import { useMessages, updateMessage } from "./MessageData.js";

export const MessageEditForm = (messageId) => {
    const allMessages = useMessages();
  
    const messageWeWantToEdit = allMessages.find(singleMessage=> singleMessage.id === messageId);
    
    return `
      <input type="text" class="form-control" id="message-text" value="${messageWeWantToEdit.text}" />
      <input type="hidden" id="message-timestamp" value="${messageWeWantToEdit.timestamp}" />
      <button id="saveMessageChanges-${messageId}" class="btn btn-secondary bg-gradient-secondary m-0">Save Changes</button>
    `;
  }

  const eventHub = document.querySelector("body");
  eventHub.addEventListener("click", (eventObject) => {
  if(eventObject.target.id.startsWith("saveMessageChanges")){
    const editedMessage = {
      text: document.querySelector('#message-text').value,
      timestamp: document.querySelector('#message-timestamp').value,
      userId: +sessionStorage.activeUser,
      email: sessionStorage.activeEmail,
      id: eventObject.target.id.split("-")[1]
    }
    updateMessage(editedMessage).then(Nutshell);
  }
})