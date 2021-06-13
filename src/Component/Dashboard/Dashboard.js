import React from 'react';
import './Dashboard.css';
import DashboardDetails from './User-dashboard/DashboardDetails';
import DashboardSidebar from './DeashboardSidebar/DashboardSidebar';
import Navbar from '../Navbar/Navbar';


const Dashboard = () => {
    return (
        <>
        <Navbar></Navbar>
            <div className='dashboard'>
            <div className="user-dashboard-slider">
                <DashboardSidebar></DashboardSidebar>
            </div>
            <div className="user-info">
                <DashboardDetails></DashboardDetails>
            </div>
        </div>
        </>
    );
};

export default Dashboard;