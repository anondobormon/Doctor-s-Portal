import React, { useEffect, useState } from "react";
import { Button, Modal, Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTrash } from "@fortawesome/free-solid-svg-icons";

const AllApointments = () => {
  const [patient, setPatient] = useState([]);
  const [serviceId, setServiceId] = useState();
  const [modal, setModal] = useState(false);
  console.log(patient);

  useEffect(() => {
    fetch("http://localhost:5000/user/appointment")
      .then((res) => res.json())
      .then((data) => {
        setPatient(data);
        console.log(data);
      });
  }, []);

  const handleUpdate = (id) => {
    console.log(id);
    setServiceId(id);
  };
  const onSubmit = (status) => {
    let eventData = {
      id: serviceId,
      status: status,
    };
    fetch(`http://localhost:5000/update/${serviceId}`, {
      method: "PATCH",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(eventData),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res) {
          setModal(true);
        }
      });
    // setModal(true);
  };

  const handleDelete = (id) => {
    console.log(id);
    fetch(`http://localhost:5000/delete/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((result) => {
        setModal(true);
      });
  };
  const handleModal = () => {
    setModal(false);
    window.location.reload();
  };

  return (
    <div>
      <div>
        <Modal show={modal}>
          <Modal.Header style={{ fontSize: "25px", fontWeight: "700" }}>
            Booking Status
          </Modal.Header>
          <Modal.Body>
            <div
              style={{
                width: "200px",
                height: "200px",
                margin: "auto",
                padding: "10px",
                textAlign: "center",
              }}
              className="modal-div"
            >
              <div
                style={{
                  width: "80px",
                  height: "80px",
                  margin: "auto",
                  marginTop: "10px",
                  borderRadius: "50%",
                  background: "#009432",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "0",
                  marginBottom: "15px",
                }}
              >
                <FontAwesomeIcon
                  style={{
                    fontSize: "35px",
                    color: "white",
                  }}
                  icon={faCheck}
                />
              </div>
              <p>Booking Successful</p>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="success" onClick={handleModal}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
      <div className="all-appointment">
        <h1>App Appointment</h1>
        <div className="user-table-info">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Doctor</th>
                <th scope="col">Appointment Date</th>
                <th scope="col">Department</th>
                <th scope="col">Patient Name</th>
                <th scope="col">Status</th>
                <th scope="col">Update Status</th>
                <th scope="col">Delete</th>
                <th scope="col">Amount</th>
              </tr>
            </thead>
            <tbody>
              {patient.map((appoint) => (
                <tr key={appoint._id} className="table-row">
                  <th scope="row">
                    <div className="app-doctor-img">
                      <div className="dc-img">
                        <img src={appoint.doctorImage} alt="" />
                      </div>
                      <div className="doctimg">
                        <span>{appoint.doctor}</span>
                      </div>
                    </div>
                  </th>
                  <td>{appoint.date}</td>
                  <td>{appoint.department}</td>
                  <td>{appoint.name}</td>

                  <td onClick={() => handleUpdate(appoint._id)}>
                    <div class="btn-group">
                      <button
                        class="btn btn-secondary dropdown-toggle"
                        type="button"
                        id="dropdownMenuButton"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        {appoint.status}
                      </button>
                      <ul
                        class="dropdown-menu"
                        aria-labelledby="dropdownMenuButton"
                      >
                        <li
                          style={{
                            cursor: "pointer",
                          }}
                          onClick={() => onSubmit("Pending")}
                        >
                          Pending
                        </li>
                        <li
                          style={{
                            cursor: "pointer",
                          }}
                          onClick={() => onSubmit("OnGoing")}
                        >
                          Ongoing
                        </li>
                        <li
                          style={{
                            cursor: "pointer",
                          }}
                          onClick={() => onSubmit("Done")}
                        >
                          Done
                        </li>
                      </ul>
                    </div>
                  </td>

                  <td>
                    <FontAwesomeIcon
                      onClick={() => handleDelete(appoint._id)}
                      style={{
                        color: "red",
                        fontSize: "25px",
                        cursor: "pointer",
                      }}
                      icon={faTrash}
                    />
                  </td>
                  <td>500$</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllApointments;
