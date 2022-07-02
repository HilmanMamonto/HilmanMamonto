import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
import { useState } from 'react';
import { useEffect } from 'react';

const sizes = {
	small: 'tp-small ',
	medium: 'tp-medium ',
	large: 'tp-large '
};

const TimePicker = ({ size, onChange }) => {
	const [ val, setVal ] = useState({ tpStart: '', tpEnd: '' });

	const className = 'time-picker ' + sizes[size];

	useEffect(
		() => {
			onChange(val);
		},
		[ val ]
	);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setVal((p) => ({ ...p, [name]: value }));
	};

	return (
		<div className={className}>
			<div className="tp-items">
				<div className="tp-left">
					<input type="time" name="tpStart" value={val.start} onChange={handleChange} />
				</div>
				<div className="tp-center">-</div>
				<div className="tp-right">
					<input type="time" name="tpEnd" value={val.start} onChange={handleChange} />
				</div>
			</div>
		</div>
	);
};

TimePicker.defaultProps = {
	size: 'medium'
};

TimePicker.propTypes = {
	className: PropTypes.string
};

export default TimePicker;
