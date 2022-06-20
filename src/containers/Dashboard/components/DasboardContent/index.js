import React from 'react';
import { useLocation } from 'react-router-dom';
import Package from './components/Package';
import './styles.scss';

const DashboardContent = () => {
	const location = useLocation().pathname;
	return <div id="dashboard-content">{location.match('package') ? <Package /> : ''}</div>;
};

export default DashboardContent;
