import React from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';
import './styles.scss';
import Icons from 'components/Icons';

const sizes = {
	small: 'it-small ',
	medium: 'it-medium ',
	large: 'it-large ',
	undefined: ''
};

const iconStatus = {
	success: <Icons className="ml-xs" variant="checkmark" />,
	warning: <Icons className="ml-xs" variant="warning" />
};

const InputText = ({ size, name, minLength, onChange, required, label, value, maxLength }) => {
	const [ focus, setFocus ] = useState('');
	const [ status, setStatus ] = useState('');

	const refInput = useRef();
	useEffect(() => {
		if (refInput && focus === 'focus') {
			refInput.current.focus();
		}
	});

	const handleChange = (e) => {
		if (e.target.value.length <= maxLength) {
			onChange(e);
			checkValidity();
		}
	};

	const checkValidity = () => {
		if (!refInput.current.checkValidity()) setStatus('warning');
		if (refInput.current.checkValidity()) setStatus('success');
	};

	const wrapper = 'it-wrapper ' + 'valid' + ' ' + focus;
	const container = 'input-text ' + sizes[size];

	return (
		<div className={container}>
			<label htmlFor={name} className="it-label">
				{label}
				{required && <span> *</span>}
				<small />
			</label>
			<div className={wrapper}>
				<input
					type="text"
					ref={refInput}
					onKeyUp={() => checkValidity}
					onChange={handleChange}
					onFocus={() => setFocus('focus')}
					onBlur={() => setFocus('')}
					value={value}
					required={required}
					minLength={minLength}
					name={name}
				/>
				{iconStatus[status]}
			</div>
		</div>
	);
};

InputText.defaultProps = {
	size: 'medium',
	minLength: 1
};

InputText.propTypes = {
	size: PropTypes.string,
	status: PropTypes.string,
	name: PropTypes.string,
	minLength: PropTypes.number,
	maxLength: PropTypes.number,
	onChange: PropTypes.func.isRequired,
	value: PropTypes.string.isRequired,
	required: PropTypes.bool
};

export default InputText;
