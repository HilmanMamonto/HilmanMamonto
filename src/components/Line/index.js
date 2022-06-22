import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const Line = (props) => {
	const arrClass = [ props.className ];
	if (props.size === 'small') arrClass.push('line-small');
	if (props.size === 'medium') arrClass.push('line-medium');
	if (props.size === 'large') arrClass.push('line-large');
	if (props.variant === 'solid') arrClass.push('line-solid');
	if (props.variant === 'dash') arrClass.push('line-dash');
	const className = arrClass.join(' ');

	return <div className={className} />;
};

Line.defaultProps = {
	size: 'small',
	variant: 'solid'
};

Line.propTypes = {
	size: PropTypes.string,
	variant: PropTypes.string
};

export default Line;
