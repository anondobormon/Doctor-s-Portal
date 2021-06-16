import React, { useEffect, useState } from "react";

const DashboardDoctor = () => {
  const [doctor, setDoctor] = useState([]);
  const [doctorDetail, setDoctorDetail] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/doctors")
      .then((res) => res.json())
      .then((data) => {
        setDoctor(data);
        console.log(data);
      });
  }, []);

  //   details for doctor

  const handleClick = (id) => {
    // console.log(id);
    fetch("http://localhost:5000/doctors")
      .then((res) => res.json())
      .then((data) => {
        const doctorDetails = data.find((dc) => dc._id === id);
        // console.log(doctorDetails);
        setDoctorDetail(doctorDetails);
      });
  };

  return (
    <div>
      <div className="dasDoctor">
        <div className="doctorDash">
          {doctor.map((doctors) => (
            <div className="doctors">
              <div className="doctors-img">
                <img src={doctors?.img} alt="" />
              </div>
              <div className="doctors-details">
                <div className="doctor-name">
                  <h4>{doctors?.name}</h4>
                  <h6 style={{ color: "gray" }}>{doctors?.specialty}</h6>
                </div>
                <div id="doctor-modal">
                  {/* <!-- Button trigger modal --> */}
                  <button
                    type="button"
                    class="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#staticBackdrop"
                    onClick={() => handleClick(doctors?._id)}
                  >
                    More...
                  </button>

                  {/* <!-- Modal --> */}
                  <div
                    class="modal fade"
                    id="staticBackdrop"
                    data-bs-backdrop="static"
                    data-bs-keyboard="false"
                    tabindex="-1"
                    aria-labelledby="staticBackdropLabel"
                    aria-hidden="true"
                  >
                    <div class="modal-dialog">
                      <div class="modal-content">
                        <div class="modal-header">
                          <h5 class="modal-title" id="staticBackdropLabel">
                            Profile
                          </h5>
                          <button
                            type="button"
                            class="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          ></button>
                        </div>
                        <div
                          class="modal-body"
                          style={{
                            textAlign: "center",
                            fontFamily: "Source Code Pro",
                            fontWeight: "800",
                          }}
                        >
                          <div
                            style={{
                              width: "120px",
                              height: "120px",
                              margin: "auto",
                              border: "1px solid black",
                              borderRadius: "50%",
                              overflow: "hidden",
                              marginBottom: "10px",
                            }}
                          >
                            <img
                              src={doctorDetail.img}
                              alt=""
                              style={{
                                width: "100%",
                              }}
                            />
                          </div>
                          <h4>{doctorDetail.name}</h4>
                          <h6>{doctorDetail.specialty}</h6>
                          <h6>{doctorDetail.email}</h6>
                          <h6>{doctorDetail.phone}</h6>
                        </div>
                        <div class="modal-footer">
                          <button
                            type="button"
                            class="btn btn-danger"
                            data-bs-dismiss="modal"
                          >
                            Close
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DashboardDoctor;
