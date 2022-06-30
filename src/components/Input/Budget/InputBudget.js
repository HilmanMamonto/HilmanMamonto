import React from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';
import './styles.scss';
import Icons from 'components/Icons';

const sizes = {
	small: 'ib-small ',
	medium: 'ib-medium ',
	large: 'ib-large ',
	undefined: ''
};

const IconStatus = ({ status }) => {
	return status === 'success' ? <Icons variant="checkmark" /> : status === 'error' ? <Icons variant="warning" /> : '';
};

const InputBudget = ({ size, status }) => {
	const [ focus, setFocus ] = useState('');
	const refInput = useRef();
	useEffect(() => {
		if (refInput && focus === 'focus') {
			refInput.current.focus();
		}
	});

	const container = 'input-budget ' + sizes[size];
	const wrapper = 'ib-wrapper ' + status + ' ' + focus;
	const iconStatus = <Icons variant="checkmark" />;
	return (
		<div className={container}>
			<label className="ib-label">Budget / Pax</label>
			<div className={wrapper}>
				<div className="ib-icon-dollar">
					<Icons variant="dollar" />
				</div>
				<input type={'number'} ref={refInput} onFocus={() => setFocus('focus')} onBlur={() => setFocus('')} />
				<IconStatus status={status} />
			</div>
		</div>
	);
};

InputBudget.defaultProps = {
	size: 'medium',
	status: ''
};

InputBudget.propTypes = {
	size: PropTypes.string,
	status: PropTypes.string
};

export default InputBudget;
