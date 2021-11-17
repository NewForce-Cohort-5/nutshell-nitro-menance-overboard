import {Nutshell} from "../Nutshell.js"
const contentTarget = document.querySelector(".auth--login")
const eventHub = document.querySelector("#container")

// When the user clicks the login button
eventHub.addEventListener("click", e => {
    if (e.target.id === 'register-redirect') {
        document.querySelector('.auth--register').classList.remove('d-none');
        document.querySelector('.auth--login').classList.add('d-none');
    }
    if (e.target.id === "login__button") {

        // Get their email from the login form
        const email = document.querySelector("#login__email").value

        // Query the databaes for users that have that email
        return fetch(`http://localhost:8088/users?email=${email}`)
            .then(response => response.json())
            .then(users => {

                // if a matching user is found (i.e. if the user exists in the database)
                if (users.length > 0) {
                    const user = users[0]
                    // Add their id to session storage, which logs them in
                    sessionStorage.setItem("activeUser", user.id)

                    // clear both forms
                    document.querySelector(".auth--login").innerHTML = ""
                    document.querySelector(".auth--register").innerHTML = ""

                    // print the page
                    Nutshell()
                } else {
                    window.alert("User does not exist! 😭 Please register.")
                }
            })
    }
})


const render = () => {
    contentTarget.innerHTML += `
    <div class="page-header align-items-start min-vh-100 login" style="background-image: url('https://trello-backgrounds.s3.amazonaws.com/SharedBackground/2400x1600/8bf1d00ba0e9a275807575e0b1f256f2/photo-1617168007503-25db5f117fa5.jpg');" loading="lazy">
        <span class="mask bg-gradient-dark opacity-6"></span>
        <div class="container my-auto">
            <div class="row">
                <div class="col-lg-4 col-md-8 col-12 mx-auto">
                    <div class="card z-index-0 fadeIn3 fadeInBottom">
                        <div class="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
                            <div class="bg-gradient-primary shadow-primary border-radius-lg py-3 pe-1">
                            <h4 class="text-white font-weight-bolder text-center mt-2 mb-0">Sign in</h4>
                            <div class="row mt-3">
                                <div class="col-2 text-center ms-auto"></div>
                                <div class="col-2 text-center px-1">
                                    <a class="btn btn-link px-3" href="javascript:;">
                                        <i class="fa fa-github text-white text-lg"></i>
                                    </a>
                                </div>
                                <div class="col-2 text-center me-auto"></div>
                            </div>
                            </div>
                        </div>
                        <div class="card-body">
                            <form role="form" class="text-start">
                                <div class="input-group input-group-outline my-3">
                                    <input type="email" id="login__email" class="form-control" placeholder="Email">
                                </div>
                                <div class="text-center">
                                    <button type="button" id="login__button" class="btn bg-gradient-primary w-100 my-4 mb-2">Log in</button>
                                </div>
                                <p class="mt-4 text-sm text-center">
                                    Don't have an account?
                                    <a href="javascript:;" id="register-redirect" class="text-primary text-gradient font-weight-bold">Register</a>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `;
}

export const LoginForm = () => {
    render()
}
