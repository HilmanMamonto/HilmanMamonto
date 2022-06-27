import React from 'react';
import { useLocation, useMatch } from 'react-router-dom';
import Package from './components/Package';
import './styles.scss';

const DashboardContent = () => {
	const location = useLocation().pathname;

	const matchDashboard = useMatch('/dashboard');
	const matchPackages = useMatch('/dashboard/packages/*');

	const content = matchPackages ? <Package /> : '';

	return <div id="dashboard-content">{content}</div>;
};

export default DashboardContent;
