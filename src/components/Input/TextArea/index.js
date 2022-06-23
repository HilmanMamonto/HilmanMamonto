import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Line from 'components/Line';
import Typography from 'components/Typography';
import { useRef } from 'react';
import Container from 'Layout/Container';
import Icon from 'components/Icons';
import { useState } from 'react';
import './styles.scss';
import '../main_styles.scss';

const TextArea = (props) => {
	const ref = useRef();
	const [ focus, setFocus ] = useState('');

	useEffect(() => {
		if (ref && focus === 'focus') {
			ref.current.focus();
		}
	});

	const size = props.size;
	const topClass = ' input ' + focus + ' ' + size;
	const wrapClass = ' input-wrapper ' + focus + ' ' + size;

	const label = props.label && (
		<Container bottom="xsmall">
			<label>{props.label}</label>
		</Container>
	);

	return (
		<div className={topClass}>
			{label}
			<Container className={wrapClass} flex direction="column">
				<Container>
					<textarea
						ref={ref}
						placeholder={props.placeholder}
						onClick={props.onClick}
						onChange={props.onChange}
						onFocus={() => setFocus('focus')}
						onBlur={() => setFocus('')}
						className={props.className}
						style={props.style}
						value={props.value}
						min={props.min}
						max={props.max}
						autoFocus={props.autoFocus}
						type={props.type}
						pattern={props.pattern}
					/>
				</Container>
				<Line />
				<Container flex justifyContent="space-betwen" as="span" top="xsmall">
					<Container flex alignItems="center" as="span">
						<Typography size="xxsmall" color="red">
							Opps! least than 20 charachter
						</Typography>
					</Container>
					<Icon variant="checkmark" />
				</Container>
			</Container>
		</div>
	);
};

TextArea.defaultProps = {
	size: 'medium'
};

TextArea.propTypes = {
	label: PropTypes.string,
	size: PropTypes.string
};

export default TextArea;
