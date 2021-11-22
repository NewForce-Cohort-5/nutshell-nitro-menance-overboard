import { Nutshell } from "../Nutshell.js";
import { useMessages, updateMessage } from "./MessageData.js";

export const MessageEditForm = (messageId) => {
    const allMessages = useMessages();
  
    const messageWeWantToEdit = allMessages.find(singleMessage=> singleMessage.id === messageId);
    
    return `
      <input type="text" class="form-control" id="message-text" value="${messageWeWantToEdit.text}" />
      <button id="saveMessageChanges-${messageId}" class="btn btn-secondary bg-gradient-secondary m-0">Save Changes</button>
    `;
  }

  const eventHub = document.querySelector("body");
  eventHub.addEventListener("click", (eventObject) => {
    var today = new Date();
    var date = (today.getMonth()+1)+'/'+today.getDate()+'/'+today.getFullYear();
    var currentTime= new Date().toLocaleTimeString();
    var timestamp = date+' '+currentTime;
  if(eventObject.target.id.startsWith("saveMessageChanges")){
    const editedMessage = {
      text: document.querySelector('#message-text').value,
      timestamp: timestamp,
      userId: +sessionStorage.activeUser,
      email: sessionStorage.activeEmail,
      id: eventObject.target.id.split("-")[1]
    }
    updateMessage(editedMessage).then(Nutshell);
  }
})