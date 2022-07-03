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

const IconStatus = ({ status }) => {
	return status === 'valid' ? <Icons variant="checkmark" /> : status === 'invalid' ? <Icons variant="warning" /> : '';
};

const InputText = ({ size, name, min, onChange }) => {
	const [ focus, setFocus ] = useState('');
	const [ values, setValues ] = useState({ value: '', status: '' });
	const [ alert, setAlert ] = useState('');

	const refInput = useRef();
	useEffect(() => {
		if (refInput && focus === 'focus') {
			refInput.current.focus();
		}
	});

	useEffect(
		() => {
			onChange(values);
		},
		[ values ]
	);

	const handleChange = (e) => {
		const val = e.target.value;
		setValues((p) => ({ ...p, value: val }));
		handleValid(val);
		handleAlert(val);
	};

	const handleValid = (val) => {
		let result = '';
		if (val.length < min) result = 'invalid';
		if (val.length > min) result = 'valid';
		if (val.length === 0) result = '';
		setValues((p) => ({ ...p, status: result }));
	};

	const handleAlert = (val) => {
		let result = '';
		if (val.length != 0 && val.length < min) result = '(min ' + min + ' characters)';
		setAlert(result);
	};

	const wrapper = 'it-wrapper ' + values.status + ' ' + focus;
	const container = 'input-text ' + sizes[size];

	return (
		<div className={container}>
			<label htmlFor={name} className="it-label">
				Tittle <small>{alert}</small>
			</label>
			<div className={wrapper}>
				<input
					type="text"
					ref={refInput}
					onChange={handleChange}
					onFocus={() => setFocus('focus')}
					onBlur={() => setFocus('')}
					value={values.value}
					required
					name={name}
				/>
				<IconStatus status={values.status} />
			</div>
		</div>
	);
};

InputText.defaultProps = {
	size: 'medium',
	min: 0
};

InputText.propTypes = {
	size: PropTypes.string,
	status: PropTypes.string,
	name: PropTypes.string,
	min: PropTypes.number,
	onChange: PropTypes.func.isRequired
};

export default InputText;
