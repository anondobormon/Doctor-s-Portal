import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import img1 from "../../../Image/pexels-mart-production-7089632.jpg";

import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import PayCard from "./PayCard";

const stripePromise = loadStripe(
  "pk_test_51IeO3RETJzLGeV9qQr5oCAop0kcjFm5Kek2Pti8GxU3pmTeOMlDoipFSSkarVuILFNEhyghB54J9VBJ4Zp1pJWw800VOZEiPca"
);

const Appointment = () => {
  const { _id } = useParams();
  console.log(_id);
  const [doctorDetails, setDoctorDetails] = useState({});

  useEffect(() => {
    fetch("http://localhost:5000/doctors")
      .then((res) => res.json())
      .then((data) => {
        const doctor = data.find((dc) => dc._id === _id);
        console.log(doctor);
        setDoctorDetails(doctor);
      });
  }, [_id]);

  // ---------handle form data--------

  const [data, setData] = useState({});
  console.log(data);

  const handleBlur = (e) => {
    const bookingData = { ...data };
    bookingData[e.target.name] = e.target.value;
    setData(bookingData);
  };

  // --------handle submit-----------

  const handleSubmit = () => {
    const eventData = { ...data };
    eventData.bookingDate = new Date().toDateString();
    eventData.status = "Pending";
    eventData.doctorEmail = doctorDetails.email;
    eventData.doctorImage = doctorDetails.img;
    eventData.doctorPhone = doctorDetails.phone;
    eventData.userPhoto = sessionStorage.getItem("avatar");

    console.log(eventData);

    fetch("http://localhost:5000/appointment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(eventData),
    }).then((res) => {
      alert("Appointment Booked");
      window.location.reload();
    });
  };
  return (
    <div className="appointment">
      <div className="appointment-box">
        <div className="appointment-img">
          <img src={img1} alt="" />
        </div>
        <div className="appointment-form">
          <h1>Make an Appointment</h1>
          <input
            onBlur={handleBlur}
            type="text"
            placeholder="Name"
            name="name"
            defaultValue={sessionStorage.getItem("name")}
            required
          />
          <input
            onBlur={handleBlur}
            type="email"
            name="email"
            placeholder="Your Email"
            defaultValue={sessionStorage.getItem("email")}
            required
          />
          <br />
          <input
            onBlur={handleBlur}
            type="number"
            name="phone"
            placeholder="Phone Number"
            required
          />
          <select onBlur={handleBlur} name="department" id="">
            <option value="Cardiology">Cardiology</option>
            <option value="Neurology">Neurology</option>
            <option value="Orthopedics">Orthopedics</option>
            <option value="Radiology">Radiology</option>
            <option value="Surgery">Surgery</option>
            <option value="Urology">Urology</option>
            <option value="Psychological">Psychological</option>
            <option value="Dental">Dental</option>
          </select>
          <br />
          {/* <input onBlur={handleBlur} type="text" name='doctor' defaultValue={doctorDetails?.name} placeholder='Doctor' required /> */}
          <select
            onBlur={handleBlur}
            name="doctor"
            defaultValue={doctorDetails?.name}
            id=""
          >
            <option value="Dr. Erick Jason">Dr. Erick Jason</option>
            <option value="Dr. David Villar">Dr. David Villar</option>
            <option value="Dr. Alex Tom">Dr. Alex Tom</option>
            <option value="Dr. Davidson Jonson">Dr. Davidson Jonson</option>
          </select>
          <input
            onBlur={handleBlur}
            type="date"
            name="date"
            id=""
            placeholder="Booking Date"
          />
          <br />
          <textarea
            onBlur={handleBlur}
            name="message"
            id=""
            placeholder="Message"
          ></textarea>
          <br />
          <button onClick={handleSubmit} className="btn btn-light">
            Book Now
          </button>
        </div>
      </div>
      <div className="paycard">
        <Elements stripe={stripePromise}>
          <PayCard />
        </Elements>
      </div>
    </div>
  );
};

export default Appointment;
