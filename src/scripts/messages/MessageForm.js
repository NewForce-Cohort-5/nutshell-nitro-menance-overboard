import { saveMessages } from "./MessageData.js"
import { Nutshell } from "../Nutshell.js"
const contentTarget = document.querySelector(".dashboard");

export const MessageForm = () => {
    return `
            <input type="text" class="form-control" id="message-text" placeholder="type a message to send">
            <button class="btn btn-warning bg-gradient-warning m-0" type="button" id="saveMessage">Send</button>
    `
}


contentTarget.addEventListener("click", clickEvent => {
    var today = new Date();
    var date = (today.getMonth()+1)+'/'+today.getDate()+'/'+today.getFullYear();
    var currentTime= new Date().toLocaleTimeString();
    var timestamp = date+' '+currentTime;
    if (clickEvent.target.id === "saveMessage") {
      const newMessage = {
        text: document.querySelector('#message-text').value,
        timestamp: timestamp,
        userId: +sessionStorage.activeUser,
        email: sessionStorage.activeEmail
      }
      document.querySelector("#message-text").value = ""
      saveMessages(newMessage)
      .then(Nutshell)
    }
  })