import React from "react";

import img1 from "../../../Image/d (1).jpg";
import img2 from "../../../Image/d (2).jpg";
import img3 from "../../../Image/d (3).jpg";

const Header = () => {
  return (
    <div>
      <div className="main-header">
        <div className="main-header-inner">
          <h1>
            We Always Care Your <br /> Health
          </h1>
          <div>
            <button className="btn btn-primary">Read More</button>
            <button className="btn btn-primary">Book Appointment</button>
          </div>
        </div>
      </div>

      <div className="header-doctor">
        <div className="head-card">
          <div className="doctor-card">
            <div className="doctor-img">
              <img src={img1} alt="" />
            </div>
            <div className="doctor-details">
              <h4>Qualified Doctors</h4>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Accusantium voluptates eveniet libero, odit facilis sint.
              </p>
            </div>
          </div>
          <div className="doctor-card">
            <div className="doctor-img">
              <img src={img2} alt="" />
            </div>
            <div className="doctor-details">
              <h4>Qualified Doctors</h4>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Accusantium voluptates eveniet libero, odit facilis sint.
              </p>
            </div>
          </div>
          <div className="doctor-card">
            <div className="doctor-img">
              <img src={img3} alt="" />
            </div>
            <div className="doctor-details">
              <h4>Qualified Doctors</h4>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Accusantium voluptates eveniet libero, odit facilis sint.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
