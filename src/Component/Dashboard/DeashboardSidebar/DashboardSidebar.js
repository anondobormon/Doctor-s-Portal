import React, { useEffect, useState } from 'react';
import img from '../../../Image/images.png'

const DashboardSidebar = () => {
    const [appointment, setAppointment] = useState([])
    const userEmail = sessionStorage.getItem('email')
    useEffect(() => {
        fetch('http://localhost:5000/user/appointment')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                const userApp = data.filter(app => app.email === userEmail)
                setAppointment(userApp[0])
                console.log(userApp[0]);
            })
    }, [])
    return (
        <div className="sidebar-container">
            <div className="sidebar">
                <div className="userPhoto">
                    <img src={appointment?.userPhoto} alt="" />
                </div>
                <div className="sidebar-list">
                    <ul>
                        <li>Appointment</li>
                        <li>Favorites</li>
                        <li>Message</li>
                        <li>Profile Settings</li>
                        <li>Change Password</li>
                        <li>Logout</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default DashboardSidebar;