import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
import { useState } from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';

const Input = (props) => {
	//initial
	const [ focus, setFocus ] = useState('');
	const refInput = useRef();
	let pattern = undefined;
	let type = props.type;
	const size = props.size;

	useEffect(() => {
		if (refInput && focus === 'focus') {
			refInput.current.focus();
		}
	});

	const Input = () => (
		<input
			ref={refInput}
			id={props.id}
			onChange={props.onChange}
			placeholder={props.placeholder}
			onClick={props.onClick}
			onFocus={() => setFocus('focus')}
			onBlur={() => setFocus('')}
			className={props.class}
			style={props.style}
			value={props.value}
			min={props.min}
			max={props.max}
			autoFocus={props.autoFocus}
			type={type}
			pattern={pattern}
		/>
	);

	if (props.type === 'email') pattern = '[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$';

	//money
	const IconMoney = () => {
		if (props.variant === 'money') {
			type = 'number';
			pattern = '0-9';
			return <span className="money">$</span>;
		}
	};

	//status
	const Status = () => {
		if (props.status === 'success') {
			return <span className="status">v</span>;
		}
		if (props.status === 'filed') {
			return <span className="status">x</span>;
		}
	};

	//label
	const Label = () => {
		if (props.label) {
			return <label>{props.label}</label>;
		}
	};

	return (
		<div className={'input ' + size}>
			<Label />
			<div className={'input-wrapper ' + focus}>
				<IconMoney />
				<Input />
				<Status />
			</div>
		</div>
	);
};

Input.defaultProps = {
	type: 'text',
	size: 'medium'
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
	//styles
	label: PropTypes.string,
	variant: PropTypes.string,
	disabeled: PropTypes.bool,
	size: PropTypes.string
};

export default Input;
