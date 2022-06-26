import React from 'react';
import PropTypes from 'prop-types';
import H from 'components/H';
import Button from 'components/NewButton/Button';
import Icons from 'components/Icons';
import './styles.scss';

const DasboardHead = (props) => {
	return (
		<header className="dashboard-head">
			<div className="dh-left">
				<label>Dashboard</label>
				<span>Welcome Back Moh Sidik</span>
			</div>
			<div className="dh-right">
				<Button
					leftIcon={<Icons variant="plus-background-rounded" size="xlarge" />}
					label="Add Travel Pacakge"
					color="secondary"
					shadow="large"
					variant="contained"
					size="small"
				/>
			</div>
		</header>
	);
};

DasboardHead.propTypes = {};

export default DasboardHead;
