import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const Input = (props) => {
	const arrClass = [ props.className ];
	const wrapperClass = [ 'input-wrapper' ];
	let type = 'text';

	const wrapperStyles = {
		height: props.height + 'px',
		width: props.width + 'px',
		borderRadius: props.borderRadius + 'px'
	};

	const inputStyles = {
		borderRadius: props.borderRadius + 'px'
	};

	if (props.cursorPointer) arrClass.push('cursor-pointer');
	if (props.hasBordered) arrClass.push('border');

	if (props.variant === 'money') {
		wrapperClass.push('variant-money');
		type = 'number';
	}

	const input = (
		<input
			id={props.id}
			onChange={props.onChange}
			placeholder={props.placeholder}
			onClick={props.onClick}
			className={arrClass.join(' ')}
			style={inputStyles}
			value={props.value}
			min={props.min}
			max={props.max}
			autoFocus={props.autoFocus}
			type={type}
		/>
	);

	return (
		<div className="input">
			{props.label && <label>{props.label}</label>}
			<div className={wrapperClass.join(' ')} style={wrapperStyles}>
				{props.variant === 'money' && <span className="tag">$</span>}
				{input}
			</div>
		</div>
	);
};

Input.propTypes = {
	//common
	id: PropTypes.string,
	className: PropTypes.string,
	onChange: PropTypes.func,
	onClick: PropTypes.func,
	placeholder: PropTypes.string,
	style: PropTypes.object,
	value: PropTypes.any,
	type: PropTypes.string,
	min: PropTypes.number,
	max: PropTypes.number,
	cursorPointer: PropTypes.bool,
	autoFocus: PropTypes.bool,
	//atribute
	label: PropTypes.string,
	//styles
	variant: PropTypes.string,
	hasBordered: PropTypes.bool,
	borderRadius: PropTypes.number,
	width: PropTypes.number,
	height: PropTypes.number,
	disabeled: PropTypes.bool
};

export default Input;
