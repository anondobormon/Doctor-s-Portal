

import React, { useEffect, useState } from 'react';

const AllPatients = () => {
    const [patient, setPatient] = useState([])
    const [changeStatus, setChangeStatus] = useState()
    console.log(patient);
    useEffect(() => {
        fetch('http://localhost:5000/user/appointment')
            .then(res => res.json())
            .then(data => {
                setPatient(data)
            })
    }, [])

    return (
        <div>
            <div className="all-appointment">
                <h1>All Patient</h1>
                <div className="user-table-info">
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">Name</th>
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
                                patient.map(appoint =>
                                    <tr className='table-row'>
                                        <th scope="row">{appoint.name}</th>
                                        <td>{appoint.date}</td>
                                        <td>{appoint.bookingDate}</td>
                                        <td>500$</td>
                                        <td>{appoint.status}</td>
                                        
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AllPatients;