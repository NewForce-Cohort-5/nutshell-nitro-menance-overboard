import { Nutshell } from "../Nutshell.js"
import { MessageEditForm } from "./MessageEditForm.js"
import { updateMessage, useMessages } from "./MessageData.js"

export const Message = (message) => {
    return `
        <tr class="message-card">   
            <td>
                [${message.timestamp}]<h6>${message.email}: ${message.text}<i id="editMessage--${message.id}" class="bi bi-pencil-square m-3"></i></h6>
            </td>
        </tr>     
        `}

const eventHub = document.querySelector("body");

eventHub.addEventListener("click", (eventObject) => {
    if (eventObject.target.id.startsWith("editMessage")) {
      const messageId = +eventObject.target.id.split("--")[1]
      MessageEditForm(messageId);
    }
  })