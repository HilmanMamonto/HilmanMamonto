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
	email: '',
	text: /[a-z\d]/i,
	number: 'a'
};

const patterEgs = {
	text: 'Text must be started width A-Z '
};

export const Input = ({ leftIcon, className, type, label, name, min, placeholder, max, onChange, value, required }) => {
	const [ focus, setFocus ] = useState('');
	const [ validate, setValidate ] = useState('');
	const [ errInfo, setErrInfo ] = useState('');

	const showValidity = (valid, info) => {
		setValidate(valid);
		setErrInfo(info);
		console.log(info);
	};

	const handleChange = (e) => {
		const { value } = e.target;
		const { valid, valueMissing, tooShort, tooLong, rangeOverflow, rangeUnderflow } = e.target.validity;

		// all
		if (valid) showValidity('valid');
		if (!valid) showValidity('invalid');

		//value missing
		if (valueMissing) showValidity('invalid', 'Invalid, this field must to fill');

		// for type equal with text
		if (tooShort) showValidity('valid', 'must more than ' + min + ' characters');
		if (tooLong) showValidity('valid', 'too long, ' + max + ' characters');

		if (type === 'text' && value.length >= max) {
			setErrInfo('maximum ' + max + ' characters');
			const to = setTimeout(() => {
				setErrInfo('');
				clearTimeout(to);
			}, 2000);
		}
		// for type equal with number
		if (rangeUnderflow) showValidity('invalid', 'Invalid, minimum value is ' + min);
		if (rangeOverflow) showValidity('invalid', 'Invalid, maximum value is ' + max);

		onChange(e);
	};

	const handleInvalid = (e) => {
		const { valueMissing, patternMismatch } = e.target.validity;
		if (valueMissing) setErrInfo('Invalid, this field must to fill');
		// patterns
		if (patternMismatch) setErrInfo('invalid pattern e.g. ' + patterEgs[type]);
		setValidate('invalid');
	};

	const invalidChar = type === 'number' ? blockInvalidChar : null;

	return (
		<div className={'input-control ' + className}>
			<label htmlFor={name}>
				{label} {required ? '*' : '(optional)'}
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
					// pattern={patterns[type]}
					placeholder={placeholder}
					onChange={handleChange}
					required={required}
				/>
				{iconStatus[validate]}
			</div>
			{errInfo && <small>{errInfo}</small>}
		</div>
	);
};

Input.defaultProps = {
	min: 0
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
