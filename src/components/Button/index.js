import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './styles.scss';

const Button = (props) => {
	const arrClass = [ props.className ];

	if (props.isPrimary) arrClass.push('btn-primary');
	if (props.isSecondary) arrClass.push('btn-secondary');
	if (props.isGray) arrClass.push('btn-gray');
	if (props.isLightGray) arrClass.push('btn-light-gray');
	if (props.isUltraLightGray) arrClass.push('btn-ultralight-gray');
	if (props.isWhite) arrClass.push('btn-white');

	if (props.textPrimary) arrClass.push('btn-txt-primary');
	if (props.textSecondary) arrClass.push('btn-txt-secondary');
	if (props.textGray) arrClass.push('btn-txt-gray');
	if (props.textLightGray) arrClass.push('btn-txt-light-gray');
	if (props.textUltarLightGray) arrClass.push('btn-txt-ultralight-gray');
	if (props.textWhite) arrClass.push('btn-txt-white');
	if (props.hasUnderline) arrClass.push('btn-underline');

	if (props.isRounded) arrClass.push('btn-rounded');
	if (props.isActive) arrClass.push('btn-active');
	if (props.isActive === false) arrClass.push('btn-hide');

	if (props.type === 'button') {
		return (
			<button id={props.id} className={arrClass.join(' ')} style={props.style} onClick={props.onClick}>
				{props.children}
			</button>
		);
	}
	if (props.type === 'link') {
		return (
			<Link id={props.id} to={props.href} className={arrClass.join(' ')} style={props.style}>
				{props.children}
			</Link>
		);
	}
	if (props.type === 'a') {
		return (
			<a id={props.id} href={props.href} style={props.style} className={arrClass.join(' ')}>
				{props.children}
			</a>
		);
	}
};

Button.propTypes = {
	isActive: PropTypes.bool,
	type: PropTypes.string,
	isPrimary: PropTypes.bool,
	isSecondary: PropTypes.bool,
	isGray: PropTypes.bool,
	isLightGray: PropTypes.bool,
	isUltraLightGray: PropTypes.bool,
	isWhite: PropTypes.bool,
	textPrimary: PropTypes.bool,
	textSecondary: PropTypes.bool,
	textGray: PropTypes.bool,
	textLightGray: PropTypes.bool,
	textUltarLightGray: PropTypes.bool,
	textWhite: PropTypes.bool,
	isRounded: PropTypes.bool,
	href: PropTypes.string,
	id: PropTypes.string,
	children: PropTypes.any,
	style: PropTypes.object,
	hasUnderline: PropTypes.bool,
	href: PropTypes.string
};

Button.default = {
	isActive: true
};

export default Button;
