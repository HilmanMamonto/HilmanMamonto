import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const Input = (props) => {
	const arrClass = [ props.className ];

	if (props.cursorPointer) arrClass.push('cursor-pointer');
	return (
		<input
			id={props.id}
			onChange={props.onChange}
			placeholder={props.placeholder}
			onClick={props.onClick}
			className={arrClass.join(' ')}
			style={props.style}
			value={props.value}
			min={props.min}
			max={props.max}
		/>
	);
};

Input.propTypes = {
	id: PropTypes.string,
	onChange: PropTypes.func,
	onClick: PropTypes.func,
	placeholder: PropTypes.string,
	style: PropTypes.object,
	value: PropTypes.any,
	type: PropTypes.string,
	min: PropTypes.number,
	max: PropTypes.number,
	cursorPointer: PropTypes.bool
};

export default Input;
