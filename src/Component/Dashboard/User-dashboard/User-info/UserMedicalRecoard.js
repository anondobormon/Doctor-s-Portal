import React, { useEffect, useState } from 'react';

const UserMedicalRecoard = () => {
    const [appointment, setAppointment] = useState([])
    const userEmail = sessionStorage.getItem('email')
    useEffect(() => {
        fetch('http://localhost:5000/user/appointment')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                const userApp = data.filter(app => app.email === userEmail)
                setAppointment(userApp)
                console.log(userApp);
            })
    }, [])
    return (
        <div>
            <div className="user-table-info">
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">SL</th>
                            <th scope="col">Date</th>
                            <th scope="col">Description</th>
                            <th scope="col">Attachment</th>
                            <th scope="col">created</th>
                            <th scope="col">Print</th>
                            <th scope="col">View</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            appointment.map((appoint, index) =>
                                <tr>
                                    <th scope="row">{index + 1}</th>
                                    <td>{appoint.date}</td>
                                    <td>{appoint.department}</td>
                                    <td>PDF</td>
                                    <td scope="row">
                                            <div className="app-doctor-img">
                                                <div className="dc-img">
                                                    <img src={appoint.doctorImage} alt="" />
                                                </div>
                                                <div className="doctimg"><span>{appoint.doctor}</span></div>
                                            </div>
                                        </td>
                                    <td><button>Print</button></td>
                                    <td><button>View</button></td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default UserMedicalRecoard;