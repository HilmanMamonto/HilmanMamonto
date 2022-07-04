import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const sizes = {
	xsmall: 'btn-ic-xsmall ',
	small: 'btn-ic-small ',
	medium: 'btn-ic-medium ',
	large: 'btn-ic-large ',
	xlarge: 'btn-ic-xlarge ',
	undefined: ''
};

const variants = {
	'close-rounded-white': '/icons/close-background-rounded.svg'
};

const IconButton = ({ size, variant, className, onClick }) => {
	const classContainer = className;

	return (
		<button onClick={onClick} className={classContainer}>
			<img className={sizes[size]} src={variants[variant]} />
		</button>
	);
};

IconButton.defaultProps = {
	size: 'medium'
};

IconButton.propTypes = {
	size: PropTypes.string,
	variant: PropTypes.string,
	onClick: PropTypes.func
};

export default IconButton;
