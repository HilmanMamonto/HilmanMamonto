import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const Icon = (props) => {
	const arrClass = [ props.className ];
	if (props.size === 'small') arrClass.push('icon-small');
	if (props.size === 'medium') arrClass.push('icon-medium');
	if (props.size === 'large') arrClass.push('icon-large');
	if (props.clickable) arrClass.push('clickable');
	let url = '';
	if (props.variant === 'warning') url = '/icons/warning-alert.svg';
	if (props.variant === 'checkmark') url = '/icons/checkmark-alert.svg';
	if (props.variant === 'dollar') url = '/icons/dollar.svg';
	if (props.variant === 'arrow-up') url = '/icons/arrow-up.svg';

	const className = 'icon ' + arrClass.join(' ');
	const alt = props.variant;
	return <img className={className} onClick={props.onClick} style={props.style} src={url} alt={alt} />;
};

Icon.defaultProps = {
	size: 'medium'
};

Icon.propTypes = {
	size: PropTypes.string,
	variant: PropTypes.string.isRequired,
	style: PropTypes.string,
	onClick: PropTypes.func,
	clickable: PropTypes.bool
};

export default Icon;
