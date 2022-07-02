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
	return status === 'error' ? <Icons variant="warning" /> : status === 'success' ? <Icons variant="checkmark" /> : '';
};

const TextArea = ({ size, label, placeholder, min, name, onChange, value }) => {
	const refTextArea = useRef();
	const [ focus, setFocus ] = useState('');
	const [ val, setVal ] = useState('');

	useEffect(() => {
		if (refTextArea && focus === 'focus') {
			refTextArea.current.focus();
		}
	});

	const container = 'input-text-area ' + sizes[size] + focus;
	const wrapClass = 'ita-wrapper ' + focus;
	const alert =
		value.length === 0
			? 'Input must more than ' + min + ' characters'
			: value.length < min ? 'Opps! description atleast more than than ' + min + ' charachters' : 'Yupss!';
	const status = value.length === 0 ? '' : value.length < min ? 'error' : value.length >= min ? 'success' : '';
	const statusClass = 'ita-status-alert ' + status;

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
					onChange={(e) => onChange(e)}
					value={value}
				/>
				<Line />
				<div className="ita-status-wrapper">
					<span className={statusClass}>{alert}</span>
					<Icon status={status} />
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
	name: PropTypes.string
};

export default TextArea;
