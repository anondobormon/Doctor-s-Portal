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

  const toggle = (toggle) => {
    console.log(toggle);
    setToggleChange(toggle);
  };

  const userImg = sessionStorage.getItem("avatar");
  return (
    <>
      <Navbar></Navbar>
      <div className="admin">
        <div className="admin-sidebar">
          <div className="sidebar-button">
            <div className="admin-image">
              <img src={userImg} alt="" />
            </div>
            <ul>
              <li>
                <button onClick={() => toggle("dashboard")}>
                  <FontAwesomeIcon
                    style={{
                      fontSize: "20px",
                      marginLeft: "10px",
                    }}
                    icon={faBars}
                  />
                  <span>Dashboard</span>
                </button>
              </li>
              <li>
                <button onClick={() => toggle("appointment")}>
                  <FontAwesomeIcon
                    style={{
                      fontSize: "20px",
                      marginLeft: "10px",
                    }}
                    icon={faCalendar}
                  />
                  <span>Appointment</span>
                </button>
              </li>
              <li>
                <button onClick={() => toggle("doctors")}>
                  <FontAwesomeIcon
                    style={{
                      fontSize: "20px",
                      marginLeft: "10px",
                    }}
                    icon={faUserMd}
                  />
                  <span>Doctors</span>
                </button>
              </li>
              <li>
                <button onClick={() => toggle("patients")}>
                  <FontAwesomeIcon
                    style={{
                      fontSize: "20px",
                      marginLeft: "10px",
                    }}
                    icon={faUser}
                  />
                  <span>Patients</span>
                </button>
              </li>
              <li>
                <button onClick={() => toggle("reviews")}>
                  <FontAwesomeIcon
                    style={{
                      fontSize: "20px",
                      marginLeft: "10px",
                    }}
                    icon={faComment}
                  />
                  <span>Reviews</span>
                </button>
              </li>
              <li>
                <button onClick={() => toggle("specialities")}>
                  <FontAwesomeIcon
                    style={{
                      fontSize: "20px",
                      marginLeft: "10px",
                    }}
                    icon={faBriefcase}
                  />
                  <span>Specialities</span>
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
