import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const H = (props) => {
	const arrClass = [ props.className ];
	arrClass.push('h');

	if (props.textRegular) arrClass.push('regular');
	if (props.textBold) arrClass.push('bold');
	if (props.text100) arrClass.push('h100');
	if (props.text200) arrClass.push('h200');
	if (props.text300) arrClass.push('h300');
	if (props.text400) arrClass.push('h400');
	if (props.text500) arrClass.push('h500');
	if (props.text600) arrClass.push('h600');
	if (props.text700) arrClass.push('h700');
	if (props.text800) arrClass.push('h800');

	if (props.isPrimary) arrClass.push('primary');
	if (props.isSecondary) arrClass.push('scondary');
	if (props.isGray) arrClass.push('gray');
	if (props.isLightGray) arrClass.push('light-gray');
	if (props.isUltralightGray) arrClass.push('ultralight-gray');

	if (props.type === '1') {
		return (
			<h1 id={props.id} className={arrClass.join(' ')} style={props.style}>
				{props.childrend}
			</h1>
		);
	}
	if (props.type === '2') {
		return (
			<h2 id={props.id} className={arrClass.join(' ')} style={props.style}>
				{props.childrend}
			</h2>
		);
	}
	if (props.type === '3') {
		return (
			<h3 id={props.id} className={arrClass.join(' ')} style={props.style}>
				{props.childrend}
			</h3>
		);
	}
	if (props.type === '4') {
		return (
			<h4 id={props.id} className={arrClass.join(' ')} style={props.style}>
				{props.childrend}
			</h4>
		);
	}
	if (props.type === '5') {
		return (
			<h5 id={props.id} className={arrClass.join(' ')} style={props.style}>
				{props.childrend}
			</h5>
		);
	}
};

H.propTypes = {
	id: PropTypes.string,
	style: PropTypes.string,
	type: PropTypes.string,
	childrend: PropTypes.any,
	textBold: PropTypes.bool,
	textRegular: PropTypes.bool,
	textlight: PropTypes.bool,
	textUltralight: PropTypes.bool,
	isPrimary: PropTypes.bool,
	isSecondary: PropTypes.bool,
	isGray: PropTypes.bool,
	isLightGray: PropTypes.bool,
	isUltralightGray: PropTypes.bool,
	text100: PropTypes.bool,
	text200: PropTypes.bool,
	text300: PropTypes.bool,
	text400: PropTypes.bool,
	text500: PropTypes.bool,
	text600: PropTypes.bool,
	text700: PropTypes.bool,
	text800: PropTypes.bool
};

export default H;
