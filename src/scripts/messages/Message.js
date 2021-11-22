export const Message = (message) => {
    return `
        <tr class="message-card">   
            <td>
                [${message.timestamp}]<h6>${message.email}: ${message.text}</h6>
            </td>
        </tr>     
        `}