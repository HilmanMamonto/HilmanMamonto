import BackgroundTransparent from 'components/BackgroundTransparent';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AddPackage from './components/AddPackage';
import DashboardContent from './components/DasboardContent';
import SideBar from './components/SideBar';
import './styles.scss';

const Dashboard = () => {
	return (
		<div id="dashboard">
			<Routes>
				<Route path="/" element={<><SideBar /><DashboardContent /></>} >
					<Route path='package/:idDashboardItem' element={<><SideBar /><DashboardContent /></>} /> 
					<Route path='ordered/:idDashboardItem' element={<><SideBar /><DashboardContent /></>} /> 
					<Route path='messages/:idDashboardItem' element={<><SideBar /><DashboardContent /></>} />
				</Route>
				<Route path='add-package' element={<>
					<SideBar />
					<DashboardContent />
					<AddPackage />
					<BackgroundTransparent/>
				</>}/>
			</Routes>
		</div>
	);
};

export default Dashboard;
