import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const sizes = {
	small: 'btn-rounded-small ',
	medium: 'btn-rounded-medium '
};

const variants = {
	next: '/icons/arrow-right.svg',
	prev: '/icons/arrow-left.svg'
};

const ButtonRounded = ({ size, className, onClick }) => {
	const cName = 'btn-rounded ' + sizes[size] + className;
	return (
		<button className={cName} onClick={onClick}>
			'-'
		</button>
	);
};

ButtonRounded.defaultProps = {
	size: 'medium'
};

ButtonRounded.propTypes = {
	size: PropTypes.string,
	onClick: PropTypes.func
};

export default ButtonRounded;
