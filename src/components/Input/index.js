import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
import { useState } from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';
import Icon from 'components/Icons';
import Container from 'Layout/Container';
import Line from 'components/Line';
import Typography from 'components/Typography';

//status
const IconStatus = (props) => {
	if (props.status === 'success') {
		return <Icon variant="checkmark" />;
	}
	if (props.status === 'error') {
		return <Icon variant="warning" />;
	}
};

//label
const Label = (props) => (
	<Container flex bottom="xsmall">
		<label>{props.label}</label>
	</Container>
);

//icon money
const IconMoney = () => {
	return <span className="money">$</span>;
};

//inputElement
const InputElement = React.forwardRef((props, ref) => {
	//default
	if (props.as === 'input') {
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
	}
	if (props.as === 'text-area') {
		return (
			<Container flex direction="column">
				<Container>
					<textarea
						ref={ref}
						onClick={props.onClick}
						onChange={props.onChange}
						onFocus={props.onFocus}
						onBlur={props.onBlur}
						value={props.value}
						className={props.className}
						min={props.min}
						max={props.max}
					/>
				</Container>
				<Line />
				<Container flex justifyContent="space-betwen" as="span" top="xsmall">
					<Container flex alignItems="center" as="span">
						<Typography size="xxsmall" color="red">
							Opps! least than 20 charachter
						</Typography>
					</Container>
					<Icon variant="warning" />
				</Container>
			</Container>
		);
	}
});

const Input = (props) => {
	const [ focus, setFocus ] = useState('');
	const refInput = useRef();
	useEffect(() => {
		if (refInput && focus === 'focus') {
			refInput.current.focus();
		}
	});
	console.log(focus);

	let pattern = undefined;
	if (props.type === 'email') pattern = '[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$';

	const size = props.size;
	const status = props.status;
	const wrapperClass = ' input-wrapper ' + focus + ' ' + status;
	const containerClass = ' input ' + size;

	return (
		<div className={containerClass}>
			{props.label && <Label label={props.label} />}
			<Container flex alignItems="center" className={wrapperClass}>
				{props.variant === 'money' && <IconMoney />}
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
