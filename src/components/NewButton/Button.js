import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
import Loading from 'components/Loading/Loading';

const variants = {
	contained: 'btn-contained ',
	outline: 'btn-outline ',
	text: 'btn-text ',
	'': ''
};

const shadows = {
	xsmall: 'shadow-xs',
	small: 'shadow-s ',
	medium: 'shadow-m ',
	large: 'shadow-l ',
	xlarge: 'shadow-xl ',
	undefined: ''
};

const sizes = {
	xsmall: 'btn-xsmall ',
	small: 'btn-small ',
	medium: 'btn-medium ',
	large: 'btn-large ',
	'': ''
};

const colors = {
	primary: 'btn-black ',
	secondary: 'btn-red ',
	gray: 'btn-gray ',
	lightGray: 'btn-light-gray',
	ultraLightGray: 'btn-ultralight-gray',
	undefined: ''
};

const loadingSizes = {
	xsmall: 'small',
	small: 'small',
	medium: 'small',
	large: 'medium'
};

const justify = {
	center: 'justify-content-center ',
	'space-betwen': 'justify-content-space-betwen ',
	undefined: ''
};

const Button = ({
	className,
	variant,
	label,
	as,
	href,
	onClick,
	size,
	shadow,
	color,
	leftIcon,
	rightIcon,
	disabled,
	fullWidth,
	loading,
	justifyContent,
	loadingIndicator,
	buttonType
}) => {
	const styles = {
		width: fullWidth ? '100%' : ''
	};

	const classContainer =
		'btn-wrapper ' + variants[variant] + sizes[size] + shadows[shadow] + colors[color] + className;
	const loadingIcLeft = (
		<div className="left-icon">
			<Loading size={loadingSizes[size]} color="white" />
		</div>
	);
	const loadingIcRight = (
		<div className="right-icon">
			<Loading size={loadingSizes[size]} color="white" />
		</div>
	);
	const lIcon = <div className="left-icon">{leftIcon}</div>;
	const leftIc = leftIcon && loading ? loadingIcLeft : leftIcon ? lIcon : null;

	const rIcon = <div className="right-icon">{rightIcon}</div>;

	const rightIc = rightIcon && loading ? loadingIcRight : rightIcon ? rIcon : null;
	const labelItem = loading && loadingIndicator ? loadingIndicator : label;
	const itemsClass = 'btn-items ' + justify[justifyContent];

	const elements = {
		a: (
			<a style={styles} className={classContainer} href={href} onClick={onClick} disabled={disabled}>
				<div className={itemsClass}>
					{leftIc}
					<span>{labelItem}</span>
					{rightIc}
				</div>
			</a>
		),
		button: (
			<button type={buttonType} style={styles} className={classContainer} onClick={onClick} disabled={disabled}>
				<div className={itemsClass}>
					{leftIc}
					<span>{labelItem}</span>
					{rightIc}
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
	color: 'primary',
	buttonType: 'button'
};

Button.propTypes = {
	label: PropTypes.string,
	variant: PropTypes.string,
	as: PropTypes.string,
	onClick: PropTypes.func,
	size: PropTypes.string,
	shadow: PropTypes.string,
	loading: PropTypes.bool,
	color: PropTypes.string,
	justifyContent: PropTypes.string,
	leftIcon: PropTypes.object,
	rightIcon: PropTypes.object,
	loadingIndicator: PropTypes.string,
	buttonType: PropTypes.string
};

export default Button;
