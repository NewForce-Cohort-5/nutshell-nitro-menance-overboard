import { ArticleForm } from "./articles/ArticleForm.js";
import { ArticleList } from "./articles/ArticleList.js"
import { LogOutButton } from "./auth/LogoutButton.js"
import { TaskForm } from "./tasks/TaskForm.js";
import { TaskList } from "./tasks/TaskList.js";
import { EventForm } from "./events/EventForm.js";
import { EventList } from "./events/EventList.js";
import { MessageForm } from "./messages/MessageForm.js";
import { MessageList } from "./messages/MessageList.js";
import { CompletedProgress } from "./tasks/TaskList.js";

const contentTarget = document.querySelector('.dashboard')

export const Nutshell = () => {
    // Render all your UI components here
  contentTarget.innerHTML = `
  
  <div class="
  main-content
  position-relative
  max-height-vh-100
  h-100
  border-radius-lg
">
  <nav
  class="
    navbar navbar-main navbar-expand-lg
    px-0
    mx-4
    shadow-none
    border-radius-xl
  "
  id="navbarBlur"
  navbar-scroll="true"
>
  <div class="container-fluid py-1 px-3">
    <nav aria-label="breadcrumb">
      <h6 class="font-weight-bolder mb-0">Dashboard</h6>
    </nav>
    <div
      class="collapse navbar-collapse mt-sm-0 mt-2 me-md-0 me-sm-4"
      id="navbar"
    >
      <div class="ms-md-auto pe-md-3 d-flex align-items-center"></div>
      <ul class="navbar-nav justify-content-end">
        <li class="nav-item d-flex align-items-center">
          <a
            href="javascript:;"
            class="nav-link text-body font-weight-bold px-0"
            id="logout-button"
          >
            <i class="fa fa-user me-sm-1"></i>
            ${LogOutButton()}
          </a>
        </li>
      </ul>
    </div>
  </div>
</nav>

<div class="row mt-4 m-3">
  <div class="col-lg-6 col-md-6 mt-4 mb-4">
    <div class="card z-index-2">
      <div
        class="
          card-header
          p-0
          position-relative
          mt-n4
          mx-3
          z-index-2
          bg-transparent
        "
      >
        <div
          class="
            bg-gradient-primary
            shadow-primary
            border-radius-lg
            py-3
            pe-1
            chart
          "
        >
          <div class="">
            <h3 class="section-heading mx-5 my-0 text-dark">News Articles</h3>
          </div>
        </div>
      </div>
      <div class="card-body">
        <div class="row">
          <div class="col-4">
            
            <button
              type="button"
              class="btn btn-primary text-sm my-auto me-1 mb-0"
              id="new-article"
            >
              New Article
            </button>
          </div>
          <div id="article-form-container" class="col-8 d-none">
          ${ArticleForm()}
          </div>
        </div>
        <hr class="dark horizontal article-hr" />
        ${ArticleList()}
      </div>
    </div>
  </div>
  <div class="col-lg-6 col-md-6 mt-4 mb-4">
    <div class="card z-index-2">
      <div
        class="
          card-header
          p-0
          position-relative
          mt-n4
          mx-3
          z-index-2
          bg-transparent
        "
      >
        <div
          class="
            bg-gradient-success
            shadow-success
            border-radius-lg
            py-3
            pe-1
            chart
          "
        >
          <div class="">
          <h3 class="section-heading mx-5 my-0 text-dark">Events</h3>
          </div>
        </div>
      </div>

      <div class="card-body">
      <div class="row">
        <div class="col-4">
          
          <button
            type="button"
            class="btn btn-success text-sm my-auto me-1 mb-0"
            id="new-event"
          >
            New Event
          </button>
        </div>
        <div id="event-form-container" class="col-8 d-none">
        ${EventForm()}
        </div>
      </div>
      <hr class="dark horizontal event-hr" />
      ${EventList()}
    </div>
    </div>
  </div>
</div>

<!-- Row 2: Daily Tasks, Chat Messages, Friends  -->
<div class="row mb-4 m-3">
  <div class="col-lg-6 col-md-6 mb-md-0 mb-4">
    <div class="card daily-tasks">
      <div
        class="
          card-header
          p-0
          position-relative
          mt-n4
          mx-3
          z-index-2
          bg-transparent
        "
      >
        <div
          class="bg-gradient-info shadow-info border-radius-lg py-3 pe-1 chart"
        >
          <div class="d-flex align-items-center">
          <h3 class="section-heading mx-5 my-0 text-dark">Daily Tasks</h3>
          <div class="progress">
            ${CompletedProgress()}
          </div>
          </div>
        </div>
      </div>

      <div class="card-header pb-0">
        <div class="row">
          <div class="col">
            
            <div class="input-group justify-content-between">
              <label>Name</label>
              <label>Expected Finish Date</label>
              <label></label>
            </div>
            <div class="input-group input-group-outline task-form">
              ${TaskForm()}
            </div>
          </div>
        </div>
      </div>

        <div class="card-body px-0 pb-2">
          <div class="table-responsive">
            <table class="table align-items-center mb-0">
              <thead>
                <tr>
                  <th
                    class="
                      text-uppercase text-secondary text-xxs
                      font-weight-bolder
                      opacity-7
                      px-3
                    "
                  >
                    Task
                  </th>
                  <th
                    class="
                      text-uppercase text-secondary text-xxs
                      font-weight-bolder
                      opacity-7
                      px-4
                    "
                  >
                    Expected Finish Date
                  </th>
                  <th
                    class="
                      text-uppercase text-secondary text-xxs
                      font-weight-bolder
                      opacity-7
                      px-5
                    "
                  >
                    Edit
                  </th>
                  <th
                    class="
                      text-uppercase text-secondary text-xxs
                      font-weight-bolder
                      opacity-7
                      px-3
                    "
                  >
                    Completed
                  </th>
                </tr>
              </thead>
              <tbody class="task-list">
                ${TaskList()}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    <div class="col-lg-6 col-md-6">
      <div class="card h-100">
        <div
          class="
            card-header
            p-0
            position-relative
            mt-n4
            mx-3
            z-index-2
            bg-transparent
          "
        >
          <div
            class="
              bg-gradient-warning
              shadow-warning
              border-radius-lg
              py-3
              pe-1
              chart
            "
          >
            <div class="">
            <h3 class="section-heading mx-5 my-0 text-dark">Chat Messages</h3>
            </div>
          </div>
        </div>
        <div class="card-header pb-0">
         
          <!--<i class="bi bi-bell"></i>
            <span class="font-weight-bold ms-1">5 new</span> messages-->
            
          </p>
          <div id="message-list">
          ${MessageList()}
          </div>
        </div>
        
        <div class="card-body p-3">
          <!--<hr class="dark horizontal" />-->
          <!-- New Message Input Field -->  
          
          <div class="input-group input-group-outline my-3 message-form">
            ${MessageForm()}
          </div>
        </div>
      </div>
    </div>
    <!--<div class="col-lg-2 col-md-2">
      <div class="card h-100">
        <div
          class="
            card-header
            p-0
            position-relative
            mt-n4
            mx-3
            z-index-2
            bg-transparent
          "
        >
          <div
            class="
              bg-gradient-secondary
              shadow-secondary
              border-radius-lg
              py-3
              pe-1
              chart
            "
          >
            <div class="mx-3">
              
            </div>
          </div>
        </div>
        <div class="card-header pb-0">
          <h6>Friends</h6>
          <p class="text-sm mb-0">
            <i class="bi bi-bell"></i>
            <span class="font-weight-bold ms-1">5 new</span> messages
          </p>
        </div>
        <div class="card-body p-3"></div>
      </div>
    </div>-->
  </div>

  <footer class="footer py-4">
    <div class="container-fluid">
      <div class="row align-items-center justify-content-lg-between">
        <div class="col-lg-6 mb-lg-0 mb-4">
          <div
            class="copyright text-center text-sm text-muted text-lg-start"
          >
            ©
            <script>
              document.write(new Date().getFullYear());
            </script>
            2021,
            <a
              href="https://github.com/NewForce-Cohort-5/nutshell-nitro-menance-overboard"
              class="font-weight-bold"
              target="_blank"
              >Team Nitro Menance Overboard</a
            >
          </div>
        </div>
      </div>
    </div>
  </footer>
  </div>
</div>

<div class="fixed-plugin">
<div class="card shadow-lg">
  <div class="card-header pb-0 pt-3">
    <div class="float-start">
      <h5 class="mt-3 mb-0">Material UI Configurator</h5>
      <p>See our dashboard options.</p>
    </div>
    <div class="float-end mt-4">
      <button
        class="btn btn-link text-dark p-0 fixed-plugin-close-button"
      >
        <i class="material-icons">clear</i>
      </button>
    </div>
    
  </div>
  <hr class="horizontal dark my-1" />
  <div class="card-body pt-sm-3 pt-0">
    
    <div>
      <h6 class="mb-0">Sidebar Colors</h6>
    </div>
    <a href="javascript:void(0)" class="switch-trigger background-color">
      <div class="badge-colors my-2 text-start">
        <span
          class="badge filter bg-gradient-primary active"
          data-color="primary"
          onclick="sidebarColor(this)"
        ></span>
        <span
          class="badge filter bg-gradient-dark"
          data-color="dark"
          onclick="sidebarColor(this)"
        ></span>
        <span
          class="badge filter bg-gradient-info"
          data-color="info"
          onclick="sidebarColor(this)"
        ></span>
        <span
          class="badge filter bg-gradient-success"
          data-color="success"
          onclick="sidebarColor(this)"
        ></span>
        <span
          class="badge filter bg-gradient-warning"
          data-color="warning"
          onclick="sidebarColor(this)"
        ></span>
        <span
          class="badge filter bg-gradient-danger"
          data-color="danger"
          onclick="sidebarColor(this)"
        ></span>
      </div>
    </a>
    <!-- Sidenav Type -->
    <div class="mt-3">
      <h6 class="mb-0">Sidenav Type</h6>
      <p class="text-sm">Choose between 2 different sidenav types.</p>
    </div>
    <div class="d-flex">
      <button
        class="btn bg-gradient-dark px-3 mb-2 active"
        data-class="bg-gradient-dark"
        onclick="sidebarType(this)"
      >
        Dark
      </button>
      <button
        class="btn bg-gradient-dark px-3 mb-2 ms-2"
        data-class="bg-transparent"
        onclick="sidebarType(this)"
      >
        Transparent
      </button>
      <button
        class="btn bg-gradient-dark px-3 mb-2 ms-2"
        data-class="bg-white"
        onclick="sidebarType(this)"
      >
        White
      </button>
    </div>
    <p class="text-sm d-xl-none d-block mt-2">
      You can change the sidenav type just on desktop view.
    </p>
    <!-- Navbar Fixed -->
    <div class="mt-3 d-flex">
      <h6 class="mb-0">Navbar Fixed</h6>
      <div class="form-check form-switch ps-0 ms-auto my-auto">
        <input
          class="form-check-input mt-1 ms-auto"
          type="checkbox"
          id="navbarFixed"
          onclick="navbarFixed(this)"
        />
      </div>
    </div>
    <hr class="horizontal dark my-3" />
    <div class="mt-2 d-flex">
      <h6 class="mb-0">Light / Dark</h6>
      <div class="form-check form-switch ps-0 ms-auto my-auto">
        <input
          class="form-check-input mt-1 ms-auto"
          type="checkbox"
          id="dark-version"
          onclick="darkMode(this)"
        />
      </div>
    </div>
    <hr class="horizontal dark my-sm-4" />
    <a class="btn btn-outline-dark w-100" href="">View documentation</a>
    <div class="w-100 text-center">
      <a
        class="github-button"
        href="https://github.com/creativetimofficial/material-dashboard"
        data-icon="octicon-star"
        data-size="large"
        data-show-count="true"
        aria-label="Star creativetimofficial/material-dashboard on GitHub"
        >Star</a
      >
      <h6 class="mt-3">Thank you for sharing!</h6>
      <a
        href="https://twitter.com/intent/tweet?text=Check%20Material%20UI%20Dashboard%20made%20by%20%40CreativeTim%20%23webdesign%20%23dashboard%20%23bootstrap5&amp;url=https%3A%2F%2Fwww.creative-tim.com%2Fproduct%2Fsoft-ui-dashboard"
        class="btn btn-dark mb-0 me-2"
        target="_blank"
      >
        <i class="fab fa-twitter me-1" aria-hidden="true"></i> Tweet
      </a>
      <a
        href="https://www.facebook.com/sharer/sharer.php?u=https://www.creative-tim.com/product/material-dashboard"
        class="btn btn-dark mb-0 me-2"
        target="_blank"
      >
        <i class="fab fa-facebook-square me-1" aria-hidden="true"></i>
        Share
      </a>
    </div>
  </div>
</div>
</div>
  `
}
