import React from 'react';
import { useNavigate } from 'react-router-dom';

const ReceptionDashboard = () => {
    const navigate = useNavigate();

    const goToAdminLabReport = () => {
        navigate('/adminlabreport');
    };

    return (
        <div>
            <h1>Reception Dashboard</h1>
            <p>Welcome to the reception dashboard!</p>
            <button className="admin-lab-report" onClick={goToAdminLabReport}>
                Lab Reports
            </button>
        </div>
    );
};

export default ReceptionDashboard;
