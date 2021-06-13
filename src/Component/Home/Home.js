import React from "react";
import "./Home.css";
import Header from "./Header/Header";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Exprience from "./Exprience/Exprience";
import Contact from "./Contact/Contact";
import Departments from "./Departments/Departments";
import HappyClient from "./Departments/HappyClient";
import Doctors from "./Doctors/Doctors";
import Appointment from "./Appointment/Appointment";
import Navbar from "../Navbar/Navbar";
import Feedback from "./Feedback/Feedback";
import Admin2 from "../Admin/Admin2/Admin2";

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Header></Header>
      <Exprience></Exprience>
      <HappyClient></HappyClient>
      <Contact></Contact>
      <Departments></Departments>
      <Doctors></Doctors>
      <Feedback></Feedback>
      <Admin2></Admin2>
    </div>
  );
};

export default Home;
