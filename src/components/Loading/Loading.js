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
	xLarge: 'loading-xlarge',
	xxlarge: 'loading-xxlarge'
};

const colors = {
	primary: 'loading-primary',
	secondary: 'loading-secondary'
};

const Loading = ({ variant, size }) => {
	const className = 'loading ' + variants[variant] + sizes[size];

	return (
		<div className="loading-wrapper">
			<div className={className} />
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
