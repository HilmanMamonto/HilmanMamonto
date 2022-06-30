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
	return status === 'success' ? <Icons variant="checkmark" /> : status === 'error' ? <Icons variant="warning" /> : '';
};

const InputText = ({ size, status }) => {
	const [ focus, setFocus ] = useState('');
	const refInput = useRef();
	useEffect(() => {
		if (refInput && focus === 'focus') {
			refInput.current.focus();
		}
	});

	const wrapper = 'it-wrapper ' + status + ' ' + focus;
	const container = 'input-text ' + sizes[size];
	const iconStatus = <Icons variant="checkmark" />;
	return (
		<div className={container}>
			<label className="it-label">Tittle</label>
			<div className={wrapper}>
				<input type="text" ref={refInput} onFocus={() => setFocus('focus')} onBlur={() => setFocus('')} />
				<IconStatus status={status} />
			</div>
		</div>
	);
};

InputText.defaultProps = {
	size: 'medium'
};

InputText.propTypes = {
	size: PropTypes.string,
	status: PropTypes.string
};

export default InputText;
