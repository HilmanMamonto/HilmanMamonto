import React from 'react';
import { Routes, Route } from 'react-router-dom';
import DashboardContent from './components/DasboardContent';
import SideBar from './components/SideBar';
import './styles.scss';

const Dashboard = () => {
	return (
		<div id="dashboard">
			<Routes>
				<Route path="" element={<><SideBar /><DashboardContent /></>} >
					<Route path='package/:idDashboardItem' element={<><SideBar /><DashboardContent /></>} /> 
					<Route path='ordered/:idDashboardItem' element={<><SideBar /><DashboardContent /></>} /> 
					<Route path='messages/:idDashboardItem' element={<><SideBar /><DashboardContent /></>} /> 
				</Route>
			</Routes>
		</div>
	);
};

export default Dashboard;
