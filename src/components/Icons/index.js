import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const Icon = (props) => {
	const arrClass = [ props.className ];
	if (props.size === 'small') arrClass.push('icon-small');
	if (props.size === 'medium') arrClass.push('icon-medium');
	if (props.size === 'large') arrClass.push('icon-large');
	const className = arrClass.join(' ');
	const alt = props.variant;
	let url = '';
	if (props.variant === 'warning') url = '/icons/warning-alert.svg';
	if (props.variant === 'checkmark') url = '/icons/checkmark-alert.svg';

	return <img className={className} src={url} alt={alt} />;
};

Icon.defaultProps = {
	size: 'medium'
};

Icon.propTypes = {
	size: PropTypes.string,
	variant: PropTypes.string.isRequired
};

export default Icon;
