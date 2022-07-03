import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Line from 'components/Line';
import Typography from 'components/Typography';
import { useRef } from 'react';
import Icons from 'components/Icons';
import { useState } from 'react';
import './styles.scss';
import '../main_styles.scss';

const sizes = {
	small: 'ita-small ',
	medium: 'ita-medium ',
	large: 'ita-large ',
	undefined: ''
};

const Icon = ({ status }) => {
	return status === 'invalid' ? <Icons variant="warning" /> : status === 'valid' ? <Icons variant="checkmark" /> : '';
};

const TextArea = ({ size, label, placeholder, min, name, onChange, value }) => {
	const refTextArea = useRef();
	const [ focus, setFocus ] = useState('');
	const [ values, setValues ] = useState({ value: '', status: '' });
	const [ alert, setAlert ] = useState('');

	useEffect(() => {
		if (refTextArea && focus === 'focus') {
			refTextArea.current.focus();
		}
	});

	const container = 'input-text-area ' + sizes[size] + focus;
	const wrapClass = 'ita-wrapper ' + focus;

	const statusClass = 'ita-status-alert ' + values.status;

	useEffect(
		() => {
			onChange(values);
		},
		[ values ]
	);

	const handleOnChange = (e) => {
		const val = e.target.value;
		handleValidation(val);
		const stat = handleStatus(val);
		setValues({ value: val, status: stat });
	};

	const handleValidation = (val) => {
		let result = '';
		if (val.length === 0) {
			result = 'Input must more than ' + min + ' characters';
		} else if (val.length < min) {
			result = 'Opps! description atleast more than ' + min + ' characters';
		} else {
			result = 'Yupps!';
		}
		setAlert(result);
	};

	const handleStatus = (val) => {
		let result = '';
		if (val.length < min) {
			result = 'invalid';
		} else {
			result = 'valid';
		}
		return result;
	};

	const handleReset = () => {
		setValues({ value: '', status: '' });
		handleValidation('');
	};

	useEffect(
		() => {
			if (value === '') handleReset();
		},
		[ value ]
	);

	return (
		<div className={container}>
			{label && <label className="ita-label">{label}</label>}
			<div className={wrapClass}>
				<textarea
					ref={refTextArea}
					name={name}
					placeholder={placeholder}
					onFocus={() => setFocus('focus')}
					onBlur={() => setFocus('')}
					onChange={handleOnChange}
					value={value}
				/>
				<Line />
				<div className="ita-status-wrapper">
					<span className={statusClass}>{alert}</span>
					<Icon status={values.status} />
				</div>
			</div>
		</div>
	);
};

TextArea.defaultProps = {
	size: 'medium',
	min: 0,
	value: ''
};

TextArea.propTypes = {
	label: PropTypes.string,
	size: PropTypes.string,
	min: PropTypes.number,
	name: PropTypes.string,
	onChange: PropTypes.func.isRequired
};

export default TextArea;
