import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
import { useState } from 'react';
import { useEffect } from 'react';
import Container from 'Layout/Container';

const TimePicker = (props) => {
	const [ leftHour, setLeftHour ] = useState(0);
	const [ leftMinutes, setLeftMinutes ] = useState(0);

	const size = props.size;
	const className = ' time-picker ' + size;

	useEffect(() => {
		if (leftHour && leftHour < 1) setLeftHour(0);
		if (leftHour > 24) setLeftHour(24);

		if (leftMinutes > 60) setLeftMinutes(60);
	});

	const valid = (val) => {
		return val >= 0 && val <= 24;
	};

	return (
		<Container className={className} fullWidth aliginItems="center" direction="column">
			<div className="items">
				<div className="left">
					<div>
						<button onClick={() => setLeftHour(valid(leftHour + 1) ? leftHour + 1 : leftHour)}>+</button>
						<input
							name="start_hour"
							type="number"
							max={24}
							onChange={(e) => setLeftHour(e.target.value)}
							value={leftHour}
							size={2}
						/>
						<button onClick={() => setLeftHour(valid(leftHour - 1) ? leftHour - 1 : leftHour)}>-</button>
					</div>
					<span>:</span>
					<div>
						<button onClick={() => setLeftHour(valid(leftMinutes + 1) ? leftMinutes + 1 : leftMinutes)}>
							+
						</button>
						<input
							name="start_hour"
							type="number"
							max={24}
							onChange={(e) => setLeftMinutes(e.target.value)}
							value={leftMinutes}
						/>
						<button onClick={() => setLeftHour(valid(leftMinutes - 1) ? leftMinutes - 1 : leftMinutes)}>
							-
						</button>
					</div>
				</div>
				<div className="center">-</div>
				<div className="right">00 : 00</div>
			</div>
		</Container>
	);
};

TimePicker.defaultProps = {
	seze: 'medium'
};

TimePicker.propTypes = {
	className: PropTypes.string
};

export default TimePicker;
