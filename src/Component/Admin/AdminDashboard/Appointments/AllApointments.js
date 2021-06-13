import React, { useEffect, useState } from "react";

const AllApointments = () => {
  const [patient, setPatient] = useState([]);
  const [changeStatus, setChangeStatus] = useState();
  console.log(patient);
  useEffect(() => {
    fetch("http://localhost:5000/user/appointment")
      .then((res) => res.json())
      .then((data) => {
        setPatient(data);
      });
  }, []);

  const handleChange = (e) => {
    console.log(e.target.value);
    setChangeStatus(e.target.value);
  };
  const handleStatus = (id) => {
    console.log(id);
    const updatePatient = { ...patient };
    updatePatient.status = changeStatus;
    console.log(updatePatient);
    fetch(`http://localhost:5000/update/${id}`, {
      method: "PATCH",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(updatePatient),
    })
      .then((res) => res.json())
      .then((res) => {
        alert("Updated");
      });
  };

  const handleDelete = (id) => {
    console.log(id);
    fetch(`http://localhost:5000/delete/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((result) => {
        alert("Delete Successfully");
        window.location.reload();
      });
  };

  return (
    <div>
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
                  <td>
                    <select onChange={handleChange} name="" id="">
                      <option defaultValue="Pending">{appoint.status}</option>

                      <option value="Accept">Accept</option>
                      <option value="Done">Done</option>
                    </select>
                  </td>
                  <td>
                    <button
                      onClick={() => handleStatus(appoint._id)}
                      className="btn btn-primary"
                    >
                      Update
                    </button>
                  </td>
                  <td>
                    <button
                      onClick={() => handleDelete(appoint._id)}
                      className="btn btn-danger"
                    >
                      Delete
                    </button>
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
