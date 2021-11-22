import { Nutshell } from "../Nutshell.js";

const contentTarget = document.querySelector(".auth--register");
const eventHub = document.querySelector("#container");

// When the user clicks on the register button
eventHub.addEventListener("click", (e) => {
  if (e.target.id === 'login-redirect') {
    document.querySelector('.auth--register').classList.add('d-none');
    document.querySelector('.auth--login').classList.remove('d-none');
  }
  if (e.target.id === "register--button") {
    // Get the email they typed into the form
    const email = document.querySelector("#register--email").value;

    if (email !== "") {
      // Check to see if the user exists
      fetch(`http://localhost:8088/users?email=${email}`)
        .then((response) => response.json())
        .then((users) => {
          if (users.length === 0) {
            // If not, create them (register them)
            fetch("http://localhost:8088/users", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                email: email,
              }),
            })
              .then((response) => response.json())
              .then((newUser) => {
                // Once we register them, log them in
                sessionStorage.setItem("activeUser", newUser.id);
                sessionStorage.setItem("activeEmail", newUser.email);

                // clear both forms
                document.querySelector(".auth--login").innerHTML = "";
                document.querySelector(".auth--register").innerHTML = "";

                // print the page
                Nutshell();
              });
          } else {
            // If the user does already exist, throw an alert
            window.alert("Email already exists! 😭 Please log in.");
          }
        });
    }
  }
});

const render = () => {
  contentTarget.innerHTML += `
    <div class="page-header align-items-start min-vh-100 register" style="background-image: url('https://trello-backgrounds.s3.amazonaws.com/SharedBackground/2400x1600/8bf1d00ba0e9a275807575e0b1f256f2/photo-1617168007503-25db5f117fa5.jpg');" loading="lazy">
      <span class="mask bg-gradient-dark opacity-6"></span>
      <div class="container my-auto">
        <div class="row">
          <div class="col-lg-4 col-md-8 col-12 mx-auto">
            <div class="card z-index-0 fadeIn3 fadeInBottom">
              <div class="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
                <div class="bg-gradient-primary shadow-primary border-radius-lg py-3 pe-1">
                  <h4 class="text-white font-weight-bolder text-center mt-2 mb-0">Register</h4>
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
                    <input type="email" id="register--email" class="form-control" placeholder="Email">
                  </div>
                  <div class="text-center">
                    <button type="button" id="register--button" class="btn bg-gradient-primary w-100 my-4 mb-2">Register</button>
                  </div>
                  <p class="mt-4 text-sm text-center">
                    Have an account?
                    <a href="javascript:;" id="login-redirect" class="text-primary text-gradient font-weight-bold">Log in</a>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    `;
};

export const RegisterForm = () => {
  render();
};
