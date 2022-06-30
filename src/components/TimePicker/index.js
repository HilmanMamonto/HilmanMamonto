import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
import { useState } from 'react';
import { useEffect } from 'react';
import TimeCounter from './TimeCounter/TimeCounter';

const TimePicker = (props) => {
	const [ leftHour, setLeftHour ] = useState(0);
	const [ leftMinutes, setLeftMinutes ] = useState(0);

	const size = props.size;
	const className = 'time-picker ' + size;

	useEffect(() => {
		if (leftHour && leftHour < 1) setLeftHour(0);
		if (leftHour > 24) setLeftHour(24);

		if (leftMinutes > 60) setLeftMinutes(60);
	});

	const valid = (val) => {
		return val >= 0 && val <= 24;
	};

	return (
		<div className={className}>
			<div className="items">
				<div className="left">
					<TimeCounter />
					<span>:</span>
				</div>
				<div className="center">-</div>
				<div className="right">-</div>
			</div>
		</div>
	);
};

TimePicker.defaultProps = {
	seze: 'medium'
};

TimePicker.propTypes = {
	className: PropTypes.string
};

export default TimePicker;
