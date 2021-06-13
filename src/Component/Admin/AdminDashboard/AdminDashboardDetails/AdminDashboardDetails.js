import React from "react";
import "./AdminDashboardDetails.css";
import CountUp from "react-countup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarCheck,
  faCommentDots,
  faUserFriends,
  faUserShield,
} from "@fortawesome/free-solid-svg-icons";
import DashboardDoctor from "./DashboardDoctor";

const AdminDashboardDetails = () => {
  return (
    <div>
      <div className="dashboard-container">
        <div className="summery-row">
          <div className="summery">
            <div className="summery-icon" style={{ background: "#9957b8" }}>
              <FontAwesomeIcon
                style={{
                  fontSize: "30px",
                }}
                icon={faUserFriends}
              />
            </div>
            <div className="count">
              <CountUp style={{ color: "black" }} end={2500} duration={5} /> +
              <h4
                style={{
                  fontFamily: "Source Code Pro, monospace",
                }}
              >
                Patient's
              </h4>
            </div>
          </div>
          <div className="summery">
            <div className="summery-icon" style={{ background: "#ff4630" }}>
              <FontAwesomeIcon
                style={{
                  fontSize: "30px",
                }}
                icon={faUserShield}
              />
            </div>
            <div className="count">
              <CountUp style={{ color: "black" }} end={2500} duration={5} /> +
              <h4
                style={{
                  fontFamily: "Source Code Pro, monospace",
                }}
              >
                Doctor's
              </h4>
            </div>
          </div>
          <div className="summery">
            <div className="summery-icon" style={{ background: "#3c4fa2" }}>
              <FontAwesomeIcon
                style={{
                  fontSize: "30px",
                }}
                icon={faCalendarCheck}
              />
            </div>
            <div className="count">
              <CountUp style={{ color: "black" }} end={2500} duration={5} /> +
              <h4
                style={{
                  fontFamily: "Source Code Pro, monospace",
                }}
              >
                Appointment
              </h4>
            </div>
          </div>
          <div className="summery">
            <div className="summery-icon" style={{ background: "#1aa6ec" }}>
              <FontAwesomeIcon
                style={{
                  fontSize: "30px",
                }}
                icon={faCommentDots}
              />
            </div>
            <div className="count">
              <CountUp style={{ color: "black" }} end={2500} duration={5} /> +
              <h4
                style={{
                  fontFamily: "Source Code Pro, monospace",
                }}
              >
                Review's
              </h4>
            </div>
          </div>
        </div>
      </div>
      <DashboardDoctor />
    </div>
  );
};

export default AdminDashboardDetails;
