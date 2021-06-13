import React, { useEffect, useState } from 'react';

const UserAppointment = () => {
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
        <div className='user-table'>

            <div className="user-table-info">
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">Doctor</th>
                            <th scope="col">Appt Date</th>
                            <th scope="col">Booking Date</th>
                            <th scope="col">Amount</th>
                            <th scope="col">Status</th>
                            <th scope="col">Print</th>
                            <th scope="col">View</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            appointment.map(appoint =>
                                <tr>
                                    <th scope="row">
                                        <div className="app-doctor-img">
                                            <div className="dc-img">
                                                <img src={appoint.doctorImage} alt="" />
                                            </div>
                                            <div className="doctimg"><span>{appoint.doctor}</span></div>
                                        </div>
                                    </th>
                                    <td>{appoint.date}</td>
                                    <td>{appoint.bookingDate}</td>
                                    <td>500$</td>
                                    <td>{appoint.status}</td>
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

export default UserAppointment;