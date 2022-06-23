import React from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';
import Icon from 'components/Icons';
import Container from 'Layout/Container';
import './styles.scss';
import '../main_styles.scss';

const IconStatus = (props) => {
	const styles = {
		marginLeft: '10px'
	};
	if (props.status === 'success') {
		return <Icon styles={styles} variant="checkmark" size={props.size} />;
	}
	if (props.status === 'error') {
		return <Icon styles={styles} variant="warning" size={props.size} />;
	}
};

const Label = (props) => (
	<Container flex bottom="xsmall">
		<label>{props.label}</label>
	</Container>
);

const IconMoney = (props) => {
	return (
		<span className="money">
			<Icon variant="dollar" size={props.size} />
		</span>
	);
};

const InputElement = React.forwardRef((props, ref) => {
	return (
		<input
			ref={ref}
			id={props.id}
			placeholder={props.placeholder}
			onClick={props.onClick}
			onChange={props.onChange}
			onFocus={props.onFocus}
			onBlur={props.onBlur}
			className={props.className}
			style={props.style}
			value={props.value}
			min={props.min}
			max={props.max}
			autoFocus={props.autoFocus}
			type={props.type}
			pattern={props.pattern}
		/>
	);
});

const Input = (props) => {
	const [ focus, setFocus ] = useState('');
	const refInput = useRef();
	useEffect(() => {
		if (refInput && focus === 'focus') {
			refInput.current.focus();
		}
	});

	const size = props.size;
	const status = props.status;
	const wrapperClass = ' input-wrapper ' + focus + ' ' + status;
	const containerClass = ' input ' + size;

	return (
		<div className={containerClass}>
			{props.label && <Label label={props.label} />}
			<Container flex alignItems="center" className={wrapperClass}>
				{props.variant === 'budget' && <IconMoney {...props} />}
				<InputElement {...props} ref={refInput} onFocus={() => setFocus('focus')} onBlur={() => setFocus('')} />
				<IconStatus {...props} />
			</Container>
		</div>
	);
};

Input.defaultProps = {
	type: 'text',
	size: 'medium',
	as: 'input',
	status: ''
};

Input.propTypes = {
	//common
	id: PropTypes.string,
	className: PropTypes.string,
	onChange: PropTypes.func,
	onClick: PropTypes.func,
	placeholder: PropTypes.string,
	style: PropTypes.object,
	value: PropTypes.string,
	type: PropTypes.string,
	min: PropTypes.number,
	max: PropTypes.number,
	cursorPointer: PropTypes.bool,
	autoFocus: PropTypes.bool,
	//styles
	label: PropTypes.string,
	variant: PropTypes.string,
	disabeled: PropTypes.bool,
	size: PropTypes.string,
	as: PropTypes.string
};

export default Input;
