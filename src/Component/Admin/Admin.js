import {
  faBars,
  faBriefcase,
  faCalendar,
  faComment,
  faUser,
  faUserMd,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import "./Admin.css";
import AddDoctor from "./AdminDashboard/AddDoctor/AddDoctor";
import AdminDashboardDetails from "./AdminDashboard/AdminDashboardDetails/AdminDashboardDetails";
import AllApointments from "./AdminDashboard/Appointments/AllApointments";
import AllPatients from "./AdminDashboard/Patients/AllPatients";

const Admin = () => {
  const [toggleChange, setToggleChange] = useState("dashboard");

  const toggle = (e) => {
    console.log(e.target.name);
    setToggleChange(e.target.name);
  };
  return (
    <>
      <Navbar></Navbar>
      <div className="admin">
        <div className="admin-sidebar">
          <div className="sidebar-button">
            <ul>
              <li>
                <FontAwesomeIcon
                  style={{
                    fontSize: "20px",
                    marginLeft: "10px",
                  }}
                  icon={faBars}
                />
                <button onClick={toggle} name="dashboard">
                  Dashboard
                </button>
              </li>
              <li>
                <FontAwesomeIcon
                  style={{
                    fontSize: "20px",
                    marginLeft: "10px",
                  }}
                  icon={faCalendar}
                />
                <button onClick={toggle} name="appointment">
                  Appointment
                </button>
              </li>
              <li>
                <FontAwesomeIcon
                  style={{
                    fontSize: "20px",
                    marginLeft: "10px",
                  }}
                  icon={faUserMd}
                />
                <button onClick={toggle} name="doctors">
                  Doctors
                </button>
              </li>
              <li>
                <FontAwesomeIcon
                  style={{
                    fontSize: "20px",
                    marginLeft: "10px",
                  }}
                  icon={faUser}
                />
                <button onClick={toggle} name="patients">
                  Patients
                </button>
              </li>
              <li>
                <FontAwesomeIcon
                  style={{
                    fontSize: "20px",
                    marginLeft: "10px",
                  }}
                  icon={faComment}
                />
                <button onClick={toggle} name="reviews">
                  Reviews
                </button>
              </li>
              <li>
                <FontAwesomeIcon
                  style={{
                    fontSize: "20px",
                    marginLeft: "10px",
                  }}
                  icon={faBriefcase}
                />
                <button onClick={toggle} name="specialities">
                  Specialities
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div className="all-details">
          {toggleChange === "appointment" && <AllApointments></AllApointments>}
          {toggleChange === "patients" && <AllPatients></AllPatients>}
          {toggleChange === "doctors" && <AddDoctor></AddDoctor>}
          {toggleChange === "dashboard" && (
            <AdminDashboardDetails></AdminDashboardDetails>
          )}
        </div>
      </div>
    </>
  );
};

export default Admin;
