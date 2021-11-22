import { useMessages } from "./MessageData.js";
import { Message } from "./Message.js";



export const MessageList = () => {

    const messagesArray = useMessages();
    return messagesArray.map(singleMessage => {
        return Message(singleMessage);
    }).join('');
  };