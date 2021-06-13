import React from 'react';

const AllPatient = ({ patients }) => {
    console.log(patients);
    return (

        <div className="patients-table">
            <h2>All Patients</h2>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Doctor</th>
                        <th>Appointment Date</th>
                        <th>Status</th>
                        <th>Payment</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        patients.map((patient, index) =>
                            <tr key={index}>
                                <td>{patient.name}</td>
                                <td>{patient.doctor}</td>
                                <td>{patient.name}</td>
                                <td>{patient.name}</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>

    );
};

export default AllPatient;