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
	'arrow-up': '/icons/arrow-up.svg',
	home: '/icons/home.svg',
	dashboard: '/icons/dashboard.svg',
	bell: '/icons/bell.svg',
	bag: '/icons/bag.svg',
	'plus-background-rounded': '/icons/plus-background-rounded.svg',
	'star-fill': '/icons/star-fill.svg'
};

const Icons = ({ size, variant, onClick, style, className }) => {
	const sizeClass = sizes[size];
	const clickAbility = onClick ? 'icon-clickable ' : '';
	const classIcon = 'icon ' + sizeClass + clickAbility + className;
	const url = variants[variant];
	const alt = variant ? url : '';

	return <img className={classIcon} onClick={onClick} style={style} src={url} alt={alt} />;
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
	fullHeight: PropTypes.bool
};

export default Icons;
