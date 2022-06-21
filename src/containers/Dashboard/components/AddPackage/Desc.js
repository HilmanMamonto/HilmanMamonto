import Input from 'components/Input';
import Container from 'Layout/Container';
import Grid from 'Layout/Grid';
import React from 'react';

const Desc = () => {
	const InputTittle = () => {
		return <Input type="email" label="Tittle" status="filed" />;
	};

	const InputBudget = () => {
		return <Input label="Budget / Pax" variant="money" />;
	};

	const InputPax = () => {
		return <Input label="Max Pax" />;
	};

	const InputAminities = () => {
		return <Input label="Travel Amenities" />;
	};

	const InputDesc = () => {
		return <Input label="Place Description" />;
	};

	return (
		<Container flex direction="column">
			<Container bottom="medium">
				<InputTittle />
			</Container>
			<Container bottom="medium">
				<Grid colGap={20}>
					<InputBudget />
					<InputPax />
				</Grid>
			</Container>
			<Container bottom="medium">
				<Grid colGap={20}>
					<InputAminities />
					<InputPax />
				</Grid>
			</Container>
			<Container bottom="medium">
				<InputDesc />
			</Container>
		</Container>
	);
};

export default Desc;
