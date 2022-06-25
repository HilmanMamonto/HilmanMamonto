import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
import Loading from 'components/Loading/Loading';

const variants = {
	contained: 'btn contained ',
	outline: 'btn outline ',
	text: 'text '
};

const shadows = {
	small: 'shadow-s ',
	medium: 'shadow-m ',
	large: 'shadow-l '
};

const sizes = {
	xsmall: 'btn-xsmall ',
	small: 'btn-small ',
	medium: 'btn-medium ',
	large: 'btn-large '
};

const colors = {
	primary: 'btn-black ',
	secondary: 'btn-red ',
	gray: 'btn-gray ',
	lightGray: 'btn-light-gray',
	ultraLightGray: 'btn-ultralight-gray'
};

const Button = ({
	variant,
	label,
	as,
	href,
	onClick,
	size,
	shadow,
	color,
	startIcon,
	endIcon,
	disabeled,
	fullWidth,
	loading
}) => {
	const styles = {
		width: fullWidth ? '100%' : ''
	};
	const disability = disabeled ? 'disabeled ' : '';
	const shadowClass = shadow ? shadows[shadow] : '';
	const className = 'btn-wrapper ' + variants[variant] + sizes[size] + shadowClass + disability + colors[color];
	const startIc = loading ? <Loading /> : startIcon ? <div className="start-icon">{startIcon}</div> : null;
	const endIc = endIcon ? <div className="end-icon">{endIcon}</div> : null;
	const labelItem = loading ? 'loading...' : label;

	const elements = {
		a: (
			<a style={styles} className={className} href={href} onClick={onClick} disabeled={disabeled}>
				<div className="items">
					{startIc}
					<span>{labelItem}</span>
					{endIc}
				</div>
			</a>
		),
		button: (
			<button style={styles} className={className} disabled={disabeled}>
				<div className="items">
					{startIc}
					<span>{labelItem}</span>
					{endIc}
				</div>
			</button>
		)
	};

	return elements[as];
};

Button.defaultProps = {
	variant: 'contained',
	size: 'medium',
	as: 'button',
	label: 'button',
	color: 'primary'
};

Button.propTypes = {
	label: PropTypes.string,
	variant: PropTypes.string,
	as: PropTypes.string,
	onClick: PropTypes.func,
	size: PropTypes.string,
	shadow: PropTypes.string,
	loading: PropTypes.bool
};

export default Button;
