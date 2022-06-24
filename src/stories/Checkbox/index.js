import React from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react';
import './styles.scss';
import IconChecked from '../assets/checkbox-checked.svg';
import IconBlank from '../assets/checkbox-blank.svg';

const colors = {
	primary: 'cb-primary',
	scondary: 'cb-secondary',
	error: 'cb-error',
	info: 'cb-info',
	success: 'cb-sussess',
	warning: 'cb-warning'
};

const sizes = {
	small: 'cb-small',
	medium: 'cb-medium'
};

const icons = {
	checked: IconChecked,
	unChecked: IconBlank
};

const Checkbox = ({ color, disabled, size, checked, defaultChecked, value, onChange }) => {
	const [ isChecked, setChecked ] = useState(false);
	const colSelected = colors[color];
	const sizeCb = sizes[size];
	const disability = disabled ? 'disabled' : '';
	const isActive = isChecked ? 'active' : '';
	const className = [ 'cb', colSelected, disability, sizeCb, isActive ].join(' ');

	const iconsUrl = isChecked ? icons.checked : icons.unChecked;
	console.log(iconsUrl);
	return (
		<span className={className} onChange={onChange} onClick={() => setChecked(!isChecked)}>
			<input className="cb-icon" type="checkbox" value={value} checked={isChecked} />
			<img src={iconsUrl} />
		</span>
	);
};

Checkbox.defaultProps = {
	color: 'primary',
	size: 'small',
	defaultChecked: false
};

Checkbox.propTypes = {
	checked: PropTypes.bool,
	className: PropTypes.string,
	color: PropTypes.string,
	defaultChecked: PropTypes.bool,
	disabled: PropTypes.bool,
	onChange: PropTypes.func
};

export default Checkbox;
