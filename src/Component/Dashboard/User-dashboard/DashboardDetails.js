import React, { useState } from 'react';
import UserAppointment from './User-info/UserAppointment';
import UserBilling from './User-info/UserBilling';
import UserMedicalRecoard from './User-info/UserMedicalRecoard';
import UserPrescription from './User-info/UserPrescription';

const DashboardDetails = () => {
    const [toggle, setToggle] = useState('Appointment')
    console.log(toggle);

    const handleToggle = (e) => {
        console.log(e.target.name);
        setToggle(e.target.name)
    }


    return (
        <div>
            <div className="dashboard-info">
                <div className="info-route">
                    <ul>
                        <button onClick={handleToggle} name='Appointment' >Appointment</button>
                        <button onClick={handleToggle} name='Prescription' >Prescription</button>
                        <button onClick={handleToggle} name='Medical' >Medical Records</button>
                        <button onClick={handleToggle} name='Billing'  >Billing</button>
                    </ul>
                </div>
                <div className="user-details-info">
                    {toggle === 'Appointment' && <UserAppointment></UserAppointment>}
                    {toggle === 'Prescription' && <UserPrescription></UserPrescription>}
                    {toggle === 'Medical' && <UserMedicalRecoard></UserMedicalRecoard>}
                    {toggle === 'Billing' && <UserBilling></UserBilling>}
                </div>
            </div>
        </div>
    );
};

export default DashboardDetails;