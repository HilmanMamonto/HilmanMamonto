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

const TextArea = ({ size, label, placeholder, min }) => {
	const ref = useRef();
	const [ focus, setFocus ] = useState('');
	const [ val, setVal ] = useState('');

	useEffect(() => {
		if (ref && focus === 'focus') {
			ref.current.focus();
		}
	});

	const container = 'input-text-area ' + sizes[size] + focus;
	const wrapClass = 'ita-wrapper ' + focus;
	const alert = val.length < min ? 'Opps! least than ' + min + ' charachter' : 'Yupss!';
	const status = val.length < min ? 'error' : val.length > min ? 'success' : '';

	const statusClass = 'ita-status-alert ' + status;
	return (
		<div className={container}>
			<label className="ita-label">Place Description</label>
			<div className={wrapClass}>
				<textarea
					ref={ref}
					placeholder={placeholder}
					onFocus={() => setFocus('focus')}
					onBlur={() => setFocus('')}
					onChange={(e) => setVal(e.target.value)}
					value={val}
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
	min: 0
};

TextArea.propTypes = {
	label: PropTypes.string,
	size: PropTypes.string,
	min: PropTypes.number
};

export default TextArea;
