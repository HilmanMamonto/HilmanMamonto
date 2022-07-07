import Icons from 'components/Icons';
import React from 'react';
import { useState } from 'react';
import './styles.scss';
import PropTypes from 'prop-types';
import { blockInvalidChar } from './blockInvalidChar';
import { ANIMATE_BOUNCEIN, ANIMATE_FADEIN } from 'assets/animate/animate';

const iconStatus = {
	valid: <Icons className={ANIMATE_BOUNCEIN} variant="checkmark" />,
	invalid: <Icons className={ANIMATE_BOUNCEIN} variant="warning" />
};

const leftIcons = {
	budget: (
		<div className="icon-dollar">
			<Icons variant="dollar" />
		</div>
	)
};

const types = {
	text: 'text',
	number: 'number',
	undefined: 'text'
};

const patterns = {
	email: ''
};

export const Input = ({ leftIcon, className, type, label, name, min, placeholder, max, onChange, value, required }) => {
	const [ focus, setFocus ] = useState('');
	const [ validate, setValidate ] = useState('');
	const [ errInfo, setErrInfo ] = useState('');

	const handleChange = (e) => {
		const { value } = e.target;
		const { valid, valueMissing, tooShort, tooLong, rangeOverflow, rangeUnderflow } = e.target.validity;

		if (valid) setValidate('valid');
		if (valid) setErrInfo('');
		if (value === '') setValidate('');
		if (!valid) setValidate('invalid');

		if (valueMissing) setErrInfo('is required');
		if (valueMissing) setValidate('invalid');
		// for type equal with text
		if (tooShort) setErrInfo('must more than ' + min + ' characters');
		if (tooLong) setErrInfo('too long, ' + max + ' characters');
		if (type === 'text' && value.length >= max) {
			setErrInfo('maximum ' + max + ' characters');
			const to = setTimeout(() => {
				setErrInfo('');
				clearTimeout(to);
			}, 2000);
		}

		// for type equal with number
		if (rangeUnderflow) setErrInfo('minimum value is ' + min);
		if (rangeOverflow) setErrInfo('maximum value is ' + max);

		onChange(e);
	};

	const handleInvalid = (e) => {
		const eValidity = e.target.validity;
		if (eValidity.valueMissing) setErrInfo('is required');
		setValidate('invalid');
	};

	const invalidChar = type === 'number' ? blockInvalidChar : null;

	return (
		<div className={'input-control ' + className}>
			<label htmlFor={name}>
				{label} {required && '*'}
				{errInfo && <small>{errInfo}</small>}
			</label>
			<div className={'wrapper ' + focus + ' ' + validate}>
				{leftIcons[leftIcon]}
				<input
					onKeyDown={invalidChar}
					onInvalid={handleInvalid}
					type={types[type]}
					onFocus={() => setFocus('focus')}
					onBlur={() => setFocus('')}
					name={name}
					value={value}
					minLength={min}
					maxLength={max}
					min={min}
					max={max}
					placeholder={placeholder}
					onChange={handleChange}
					required={required}
				/>
				{iconStatus[validate]}
			</div>
		</div>
	);
};

Input.propTypes = {
	onChange: PropTypes.func.isRequired,
	name: PropTypes.string.isRequired,
	type: PropTypes.string.isRequired,
	leftIcon: PropTypes.string,
	label: PropTypes.string,
	placeholder: PropTypes.string,
	value: PropTypes.string,
	className: PropTypes.string,
	required: PropTypes.bool,
	min: PropTypes.number,
	max: PropTypes.number
};
