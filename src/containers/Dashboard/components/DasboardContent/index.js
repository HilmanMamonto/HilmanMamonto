import React from 'react';
import { Route, Routes } from 'react-router-dom';

const DashboardContent = () => {
	return (
		<Routes>
			<Route path="content" element={<div>Dashboard</div>} />
			<Route path="packages" element={<div>Packages</div>} />
		</Routes>
	);
};

export default DashboardContent;
