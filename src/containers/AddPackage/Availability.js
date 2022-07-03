import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
import 'animate.css';
import DatePicker from 'components/Input/DatePicker/DatePicker';

const Availability = (props) => {
	return (
		<div className="mb-s animate__animated animate__fadeIn">
			<DatePicker />
		</div>
	);
};

Availability.propTypes = {};

export default Availability;
