import React from 'react';
import DashboardContent from './components/DasboardContent';
import SideBar from './components/SideBar';
import './styles.scss';

const Dashboard = () => {
	return (
		<div id="dashboard">
			<SideBar />
			<DashboardContent />
		</div>
	);
};

export default Dashboard;
