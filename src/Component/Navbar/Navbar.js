import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light ">
        <div class="container-fluid sticky-top">
          <a class="navbar-brand" href="#">
            Navbar
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav m-auto mb-2 mb-lg-0">
              <li class="me-5 nav-item">
                <Link
                  class="nav-link fw-bold active"
                  aria-current="page"
                  to="/home"
                >
                  HOME
                </Link>
              </li>
              <li class="me-5 nav-item">
                <Link
                  class="nav-link active fw-bold"
                  aria-current="page"
                  to="/dashboard"
                >
                  DASHBOARD
                </Link>
              </li>
              <li class="me-5 nav-item">
                <Link
                  class="nav-link active fw-bold"
                  aria-current="page"
                  to="/service"
                >
                  SERVICE
                </Link>
              </li>
              <li class="me-5 nav-item">
                <Link class="nav-link active fw-bold" aria-current="page" to="">
                  CONTACT
                </Link>
              </li>
              <li class="me-5 nav-item">
                <Link
                  class="nav-link active fw-bold"
                  aria-current="page"
                  to="/adminDashboard"
                >
                  ADMIN
                </Link>
              </li>

              <li class="me-5 nav-item dropdown">
                <Link
                  class="nav-link dropdown-toggle fw-bold"
                  to=""
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  DEPARTMENTS
                </Link>

                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link class="dropdown-item" to="">
                      Cardiology
                    </Link>
                  </li>
                  <li>
                    <Link class="dropdown-item" to="">
                      Neurology
                    </Link>
                  </li>
                  <li>
                    <Link class="dropdown-item" to="">
                      Radiology
                    </Link>
                  </li>
                  <li>
                    <Link class="dropdown-item" to="">
                      Surgery
                    </Link>
                  </li>
                  <li>
                    <Link class="dropdown-item" to="">
                      Urology
                    </Link>
                  </li>
                  <li>
                    <Link class="dropdown-item" to="">
                      Psychological
                    </Link>
                  </li>
                  <li>
                    <Link class="dropdown-item" to="">
                      Dental
                    </Link>
                  </li>
                </ul>
              </li>
              <li class="me-5 nav-item">
                <Link
                  class="nav-link active fw-bold"
                  aria-current="page"
                  to="/login"
                >
                  LOGIN
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
