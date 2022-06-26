import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const variants = {
	dot: 'dot-flashing '
};

const sizes = {
	small: 'loading-small ',
	medium: 'loading-medium ',
	large: 'loading-large ',
	xlarge: 'loading-xlarge '
};

const colors = {
	primary: 'loading-primary ',
	secondary: 'loading-secondary ',
	gray: 'loading-gray ',
	white: 'loading-white '
};

const Loading = ({ variant, size, color }) => {
	const className = 'loading loading-items ' + variants[variant] + sizes[size] + colors[color];

	return (
		<div className="loading-wrapper">
			<div className={className}>
				<div className="left" />
				<div className="mid" />
				<div className="right" />
			</div>
		</div>
	);
};

Loading.defaultProps = {
	variant: 'dot',
	size: 'medium'
};

Loading.propTypes = {
	variant: PropTypes.string,
	size: PropTypes.string
};

export default Loading;
