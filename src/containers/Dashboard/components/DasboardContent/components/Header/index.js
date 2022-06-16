import Button from 'components/Button';
import React from 'react';
import './styles.scss';

const Header = () => {
	return (
		<div id="header-dashboard">
			<div className="left">
				<label>Dashboard</label>
				<span>Welcome Back Moh Sidik</span>
			</div>
			<div className="right">
				<label>Add New Travel Package</label>
				<Button type="button" isRounded className="btn" children={<img src="/plus-white.svg" alt="" />} />
			</div>
		</div>
	);
};

export default Header;
