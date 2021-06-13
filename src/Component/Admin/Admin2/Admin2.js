import { faApple } from "@fortawesome/free-brands-svg-icons";
import {
  faBars,
  faChartBar,
  faEdit,
  faHome,
  faTimes,
  faUser,
  faUserAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Admin2.css";
import img from "../../../Image/doctor (11).jpg";
import CountUp from "react-countup";
import AllPatient from "./AllPatient";

const Admin2 = () => {
  const [toggle, setToggle] = useState(true);
  console.log(toggle);
  const handleToggle = () => {
    if (toggle == true) {
      setToggle(false);
    }
    if (toggle == false) {
      setToggle(true);
    }
  };

  const [patient, setPatient] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/user/appointment")
      .then((res) => res.json())
      .then((data) => {
        setPatient(data);
        // console.log(data);
      });
  }, []);

  return (
    <div className="container1">
      <div className="container2">
        <div className={toggle ? "navigation" : "nav-active"}>
          <ul>
            <li>
              <Link className="s-nav-link">
                <span className="icon">
                  <FontAwesomeIcon icon={faApple} />
                </span>
                <span className="title">
                  <h2> Brand Name</h2>
                </span>
              </Link>
            </li>
            <li>
              <Link className="s-nav-link">
                <span className="icon">
                  <FontAwesomeIcon icon={faHome} />
                </span>
                <span className="title">Dashboard</span>
              </Link>
            </li>
            <li>
              <Link className="s-nav-link">
                <span className="icon">
                  <FontAwesomeIcon icon={faBars} />
                </span>
                <span className="title">Appointment</span>
              </Link>
            </li>
            <li>
              <Link className="s-nav-link">
                <span className="icon">
                  <FontAwesomeIcon icon={faUserAlt} />
                </span>
                <span className="title">Doctors</span>
              </Link>
            </li>
            <li>
              <Link className="s-nav-link">
                <span className="icon">
                  <FontAwesomeIcon icon={faUser} />
                </span>
                <span className="title">Patient</span>
              </Link>
            </li>
            <li>
              <Link className="s-nav-link">
                <span className="icon">
                  <FontAwesomeIcon icon={faEdit} />
                </span>
                <span className="title">Manage Appointment</span>
              </Link>
            </li>
          </ul>
        </div>
        <div className={toggle ? "main" : "main main-active"}>
          <div className="topbar">
            <div className="toggle">
              <span>
                <FontAwesomeIcon
                  onClick={handleToggle}
                  icon={toggle ? faBars : faTimes}
                />
              </span>
            </div>
            <div className="search">
              {/* <label htmlFor="">
                                <input type="text" placeholder='Search Hearre' />
                            </label> */}
            </div>
            <div className="adm-user">
              <img src={img} alt="" />
            </div>
          </div>
          <div className="cardBox">
            <div className="Bcard">
              <div className="card-icon">
                <span>
                  <FontAwesomeIcon icon={faUser} />
                </span>
              </div>
              <div className="count-up">
                <div className="numbers">
                  <CountUp style={{ color: "black" }} end={2500} duration={5} />
                </div>
                <div className="numbers">Patient</div>
              </div>
            </div>
            <div className="Bcard">
              <div className="card-icon">
                <span>
                  <FontAwesomeIcon icon={faUser} />
                </span>
              </div>
              <div className="count-up">
                <div className="numbers">
                  <CountUp style={{ color: "black" }} end={2500} duration={5} />
                </div>
                <div className="numbers">Patient</div>
              </div>
            </div>
            <div className="Bcard">
              <div className="card-icon">
                <span>
                  <FontAwesomeIcon icon={faUser} />
                </span>
              </div>
              <div className="count-up">
                <div className="numbers">
                  <CountUp style={{ color: "black" }} end={2500} duration={5} />
                </div>
                <div className="numbers">Patient</div>
              </div>
            </div>
            <div className="Bcard">
              <div className="card-icon">
                <span>
                  <FontAwesomeIcon icon={faUser} />
                </span>
              </div>
              <div className="count-up">
                <div className="numbers">
                  <CountUp style={{ color: "black" }} end={2500} duration={5} />
                </div>
                <div className="numbers">Patient</div>
              </div>
            </div>
          </div>
          <AllPatient patients={patient}></AllPatient>
        </div>
      </div>
    </div>
  );
};

export default Admin2;
