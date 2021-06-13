import {
  faHeartbeat,
  faBrain,
  faCrutch,
  faXRay,
  faUserMd,
  faFlask,
  faTooth,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Services.css";
import Navbar from "../Navbar/Navbar";
import { Link } from "react-router-dom";

const services = [
  {
    name: "Cardiology",
    des: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis, in!",
    icon: faHeartbeat,
  },
  {
    name: "Neurology",
    des: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis, in!",
    icon: faBrain,
  },
  {
    name: "Orthopedics",
    des: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis, in!",
    icon: faCrutch,
  },
  {
    name: "Radiology",
    des: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis, in!",
    icon: faXRay,
  },
  {
    name: "Surgery",
    des: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis, in!",
    icon: faUserMd,
  },
  {
    name: "Urology",
    des: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis, in!",
    icon: faFlask,
  },
  {
    name: "Psychosocial",
    des: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis, in!",
    icon: faBrain,
  },
  {
    name: "Dental",
    des: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis, in!",
    icon: faTooth,
  },
  {
    name: "Plastic Surgery",
    des: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis, in!",
    icon: faFlask,
  },
];

const Service = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="service-container">
        <div className="service12">
          <div class="row row-cols-1 row-cols-md-3 g-4">
            {services.map((service) => (
              <div class="col service-card">
                <div class="ser-card">
                  <div className="icon-cont">
                    <FontAwesomeIcon className="ser-icon" icon={service.icon} />
                  </div>
                  <div style={{ textAlign: "center" }} class="card-body">
                    <h5 class="card-title fw-bold">{service.name}</h5>
                    <p class="card-text">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                    <Link to="/appointment">
                      <button className="btn btn-light fw-bold">
                        Appointment
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
