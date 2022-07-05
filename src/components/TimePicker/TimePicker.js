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

const TimePicker = ({ size, onChange, value, disabled, timeStart }) => {
	const initialStart = timeStart ? timeStart : '';

	const [ values, setValues ] = useState({ tpStart: initialStart, tpEnd: '', status: 'invalid' });

	const className = 'time-picker ' + sizes[size];

	useEffect(
		() => {
			onChange(values);
		},
		[ values ]
	);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setValues((p) => ({ ...p, [name]: value }));
		validation();
	};

	const validation = () => {
		if (values.tpStart && values.tpStart) {
			setValues((p) => ({ ...p, status: 'valid' }));
		}
	};

	const reset = () => {
		setValues({ tpStart: values.tpEnd, tpEnd: '', status: 'invalid' });
	};

	useEffect(
		() => {
			if (value === '') reset();
		},
		[ value ]
	);

	return (
		<div className={className}>
			<div className="tp-items">
				<div className="tp-left">
					<input
						type="time"
						name="tpStart"
						value={values.tpStart}
						onChange={handleChange}
						disabled={disabled}
					/>
				</div>
				<div className="tp-center">-</div>
				<div className="tp-right">
					<input type="time" name="tpEnd" value={values.tpEnd} onChange={handleChange} />
				</div>
			</div>
		</div>
	);
};

TimePicker.defaultProps = {
	size: 'medium'
};

TimePicker.propTypes = {
	className: PropTypes.string,
	timeStart: PropTypes.string
};

export default TimePicker;
