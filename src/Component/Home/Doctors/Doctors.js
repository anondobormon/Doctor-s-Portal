import {
  faFacebook,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Doctors = () => {
  const [doctor, setDoctor] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/doctors")
      .then((res) => res.json())
      .then((data) => {
        setDoctor(data);
        console.log(data);
      });
  }, []);

  return (
    <>
      <div className="slider-heading">
        <div className="sli-heading">
          <h1>Our Expert Doctors</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto
            aliquid rem fugit id reiciendis molestiae, dignissimos culpa
            voluptatem odit accusamus.
          </p>
        </div>
      </div>
      <div className="doctor">
        <div className="slider">
          <div className="row">
            {doctor.map((dc) => (
              <div key={dc._id} className="col-md-4">
                <div className="doctor-slider">
                  <div className="doctor-imagess">
                    <img src={dc.img} alt="" />
                  </div>
                  <div className="doctor-icon">
                    <div className="dc-icon">
                      <ul>
                        <li>
                          <FontAwesomeIcon icon={faFacebook} />
                        </li>
                        <li>
                          <FontAwesomeIcon icon={faTwitter} />
                        </li>
                        <li>
                          <FontAwesomeIcon icon={faLinkedin} />
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="doctor-detailss">
                    <h4>{dc.name}</h4>
                    <p>{dc.specialty}</p>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Culpa, tempore.
                    </p>
                    <Link to={"/appointment/" + dc._id}>
                      <button className="btn btn-primary">
                        Book Appointment
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Doctors;
