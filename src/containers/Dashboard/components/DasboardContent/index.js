import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Package from './components/Package';
import './styles.scss';

const DashboardContent = () => {
	return (
		<div id="dashboard-content">
			<Routes>
				<Route path="package/:id" element={<Package />} />
				<Route path="ordered/:id" element={<div>Ordered</div>} />
				<Route path="messages/:id" element={<div>Messages</div>} />
			</Routes>
		</div>
	);
};

export default DashboardContent;
