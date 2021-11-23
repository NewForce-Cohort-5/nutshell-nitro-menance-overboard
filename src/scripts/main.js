
import { getArticles } from "./articles/ArticleData.js"
import { LoginForm } from "./auth/LoginForm.js"
import { RegisterForm } from "./auth/RegisterForm.js"
import { getEvents } from "./events/EventData.js"
import { Nutshell } from "./Nutshell.js"
import { getTasks } from "./tasks/TaskDataProvider.js"
import { getMessages } from "./messages/MessageData.js"


/*
    1. Check if the user is authenticated by looking in session storage for `activeUser`
    2. If so, render the Nutshell component
    3. If not, render the login and registration forms
    4. Also, if the user authenticates, and the login form is initially shown
        ensure that the Nutshell component gets rendered
*/


const activeUser = sessionStorage.getItem("activeUser")

if(!activeUser){
    LoginForm()
    RegisterForm()
} else {
    
    getTasks()
    .then(getArticles)
    .then(getEvents)
    .then(getMessages)
    .then(Nutshell)

}
