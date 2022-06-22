import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
import Line from 'components/Line';
import Typography from 'components/Typography';
import { useRef } from 'react';

const TextArea = () => {
	const refTextArea = useRef();
	useEffect(() => {
		if (refTextArea && focus === 'focus') {
			refTextArea.current.focus();
		}
	});

	return (
		<Container flex direction="column">
			<Container>
				<textarea
					ref={refTextArea}
					onFocus={() => setFocus('focus')}
					onBlur={() => setFocus('')}
					onChange={props.onChange}
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
};

TextArea.propTypes = {};

export default TextArea;
