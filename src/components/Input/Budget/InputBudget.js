import React from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';
import './styles.scss';
import Icons from 'components/Icons';
import { blockInvalidChar } from './blockInvalidChar';

const sizes = {
	small: 'ib-small ',
	medium: 'ib-medium ',
	large: 'ib-large ',
	undefined: ''
};

const iconStatus = {
	success: <Icons className="ml-xs" variant="checkmark" />,
	warning: <Icons className="ml-xs" variant="warning" />
};

const InputBudget = ({ size, max, required, onChange, value, label, min }) => {
	const [ focus, setFocus ] = useState('');
	const [ status, setStatus ] = useState('');

	const refInput = useRef();
	useEffect(() => {
		if (refInput && focus === 'focus') {
			refInput.current.focus();
		}
	});

	const handleChange = (e) => {
		if (e.target.value <= max) {
			onChange(e.target.value);
			checkValidity();
		}
	};

	// set value to 1 if input value is blank when unfocus
	useEffect(
		() => {
			if (!focus && value === '') onChange('0');
		},
		[ focus ]
	);

	const checkValidity = () => {
		if (!refInput.current.checkValidity()) setStatus('warning');
		if (refInput.current.checkValidity()) setStatus('success');
	};

	const container = 'input-budget ' + sizes[size];
	const wrapper = 'ib-wrapper ' + status + ' ' + focus;

	const labelDisplay =
		label && required ? <label className="ib-label">{label} *</label> : label ? <label>{label}</label> : '';

	return (
		<div className={container}>
			{labelDisplay}
			<div className={wrapper}>
				<div className="ib-icon-dollar">
					<Icons variant="dollar" />
				</div>
				<input
					ref={refInput}
					type="number"
					onKeyDown={blockInvalidChar}
					onFocus={() => setFocus('focus')}
					onBlur={() => setFocus('')}
					max={max}
					min={min}
					required={required}
					onChange={handleChange}
					value={value}
				/>
				{iconStatus[status]}
			</div>
		</div>
	);
};

InputBudget.defaultProps = {
	size: 'medium',
	status: '',
	min: 1
};

InputBudget.propTypes = {
	size: PropTypes.string,
	status: PropTypes.string,
	max: PropTypes.number,
	min: PropTypes.number,
	required: PropTypes.bool,
	status: PropTypes.string,
	value: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
	label: PropTypes.string
};

export default InputBudget;
