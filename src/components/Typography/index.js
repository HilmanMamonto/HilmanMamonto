import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const Typography = (props) => {
	const arrClass = [ props.arrClass ];

	if (props.size === 'large') arrClass.push('text-large');
	if (props.size === 'medium') arrClass.push('text-medium');
	if (props.size === 'small') arrClass.push('text-small');
	if (props.size === 'xsmall') arrClass.push('text-xsmall');
	if (props.size === 'xxsmall') arrClass.push('text-xxsmall');
	if (props.color === 'black') arrClass.push('text-black');
	if (props.color === 'red') arrClass.push('text-red');
	if (props.color === 'gray') arrClass.push('text-gray');
	if (props.color === 'light-gray') arrClass.push('text-light-gray');
	if (props.color === 'ultralight-gray') arrClass.push('text-ultralight-gray');
	if (props.lineHeight === '100') arrClass.push('text-line-height-100');
	if (props.lineThrough) arrClass.push('text-dec-line-through');
	if (props.underline) arrClass.push('text-dec-underline');

	const className = 'typography ' + arrClass.join(' ');

	const P = () => <p className={className}>{props.children}</p>;

	const H = () => {
		if (props.size === 'xlarge') {
			return <h1 className={className}>{props.children}</h1>;
		}
		if (props.size === 'large') {
			return <h2 className={className}>{props.children}</h2>;
		}
		if (props.size === 'medium') {
			return <h3 className={className}>{props.children}</h3>;
		}
		if (props.size === 'small') {
			return <h4 className={className}>{props.children}</h4>;
		}
	};

	const Result = () => {
		if (props.variant === 'p') {
			return <P />;
		}
		if (props.variant === 'header') {
			return <H />;
		}
	};

	return <Result />;
};

Typography.propTypes = {
	className: PropTypes.string,
	size: PropTypes.string,
	color: PropTypes.string,
	variant: PropTypes.string,
	weight: PropTypes.string,
	children: PropTypes.any,
	lineThrough: PropTypes.bool,
	underline: PropTypes.bool,
	lineHeight: PropTypes.string
};

Typography.defaultProps = {
	variant: 'p',
	size: 'medium',
	color: 'gray'
};

export default Typography;
