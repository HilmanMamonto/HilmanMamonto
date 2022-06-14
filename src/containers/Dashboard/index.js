import React from 'react';
import SideBar from './components/SideBar';
import './styles.scss';

const Dashboard = () => {
	return (
		<div id="dashboard">
			<div className="side-bar">
				<SideBar />
			</div>
			<div className="contents">contents</div>
		</div>
	);
};

export default Dashboard;
