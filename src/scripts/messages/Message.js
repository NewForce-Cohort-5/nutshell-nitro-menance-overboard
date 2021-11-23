import { MessageEditForm } from "./MessageEditForm.js"
import { updateMessage, useMessages } from "./MessageData.js"


export const Message = (message) => {
    let canEdit;
    if (sessionStorage.activeEmail === message.email){
        canEdit = `<i id="editMessage--${message.id}" class="bi bi-pencil-square m-3 edit-message-button"></i>`
    } else {
        canEdit = ""
    }
    return `
        <tr class="message-card">   
            <td>
                [${message.timestamp}]<h6>${message.email}: ${message.text}${canEdit}</h6>
            </td>
        </tr>     
        `}

const eventHub = document.querySelector("body");

eventHub.addEventListener("click", (eventObject) => {
  if (eventObject.target.id.startsWith("editMessage")) {
    const messageId = +eventObject.target.id.split("--")[1];
    const message = useMessages().find(message => message.id === messageId);
    document.querySelector('.message-edit-form').innerHTML = MessageEditForm(messageId);
    updateMessage(message);
}
})