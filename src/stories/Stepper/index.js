import React from 'react';
import PropTypes from 'prop-types';
import Grid from 'Layout/Grid';
import Container from 'Layout/Container';
import './styles.scss';

const Stepper = (props) => {
	const arrClass = [ props.className ];
	if (props.size === 'small') arrClass.push('font-small');
	if (props.size === 'medium') arrClass.push('font-medium');

	const clasName = arrClass.join(' ');

	const Items = () => {
		const result = props.data.map((item, i) => {
			return (
				<Container flex key={'step-item' + i}>
					<Container right="xsmall">
						<span>{i + 1}</span>
					</Container>
					<span>{item.tittle}</span>
				</Container>
			);
		});

		return result;
	};

	return (
		<Container className={clasName} flex justifyContent="space-betwen">
			<Items />
		</Container>
	);
};

Stepper.propTypes = {
	data: PropTypes.array.isRequired,
	size: PropTypes.string
};

export default Stepper;
