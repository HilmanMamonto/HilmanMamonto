import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const sizes = {
	small: 'icon-small ',
	medium: 'icon-medium ',
	large: 'icon-large '
};

const variants = {
	warning: '/icons/warning-alert.svg',
	checkmark: '/icons/checkmark-alert.svg',
	dollar: '/icons/dollar.svg',
	arrowUp: '/icons/arrow-up.svg'
};

const Icons = ({ size, clickable, variant, onClick, style }) => {
	const sizeClass = sizes[size];
	const clickAbility = clickable ? 'icon-clickable ' : '';
	const className = 'icon ' + sizeClass + clickAbility;
	const url = variants[variant];
	const alt = variant ? url : '';

	return <img className={className} onClick={onClick} style={style} src={url} alt={alt} />;
};

Icons.defaultProps = {
	size: 'medium',
	url: ''
};

Icons.propTypes = {
	size: PropTypes.string,
	variant: PropTypes.string.isRequired,
	style: PropTypes.string,
	onClick: PropTypes.func,
	clickable: PropTypes.bool,
	fullHeight: PropTypes.bool
};

export default Icons;
