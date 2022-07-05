import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
import { useEffect } from 'react';
import { useState } from 'react';
import { blockInvalidChar } from './blockInvalidChar';

const sizes = {
	small: 'inum-small ',
	medium: 'inum-medium ',
	large: 'inum-large ',
	undefined: ''
};

const InputNumber = ({ onChange, label, size, max, value }) => {
	const [ values, setValues ] = useState({ value: 1, status: 'invalid' });

	useEffect(
		() => {
			onChange(values);
		},
		[ values ]
	);

	const labelDisplay = label ? (
		<label className="inum-label">
			{label} <small>(max {max} person )</small>
		</label>
	) : null;
	const classContainer = 'input-number ' + sizes[size];

	const handleChange = (e) => {
		if (e.target.value > 0 && e.target.value <= max) {
			setValues((p) => ({ ...p, value: e.target.value }));
		}
		if (e.target.value > 0) {
			setValues((p) => ({ ...p, status: 'valid' }));
		}
	};

	return (
		<div className={classContainer}>
			{labelDisplay}
			<div className="inum-wrapper">
				<input type="number" onKeyDown={blockInvalidChar} value={value} onChange={handleChange} />
			</div>
		</div>
	);
};

InputNumber.defaultProps = {
	size: 'medium',
	max: 5
};

InputNumber.propTypes = {
	label: PropTypes.string,
	onChange: PropTypes.func.isRequired,
	size: PropTypes.string,
	max: PropTypes.number
};

export default InputNumber;
