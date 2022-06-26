import React from 'react';
import PropTypes from 'prop-types';
import Icons from 'components/Icons';
import './styles.scss';
import { Link } from 'react-router-dom';

const NavSideBar = (props) => {
	return (
		<div className="nav-side-bar">
			<Link className="nsb-btn" to="/">
				<div className="nsb-icon">
					<Icons variant="home" size="large" />
				</div>
				<span>Home</span>
			</Link>
			<Link className="nsb-btn" to="/dashboard">
				<div className="nsb-icon">
					<Icons variant="dashboard" size="large" />
				</div>
				<span>Dasboard</span>
			</Link>
			<Link className="nsb-btn" to="notifications">
				<div className="nsb-icon">
					<Icons variant="bell" size="large" />
				</div>
				<span>Notifications</span>
			</Link>
		</div>
	);
};

NavSideBar.propTypes = {};

export default NavSideBar;
