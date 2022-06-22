import Input from 'components/Input';
import Container from 'Layout/Container';
import Grid from 'Layout/Grid';
import React from 'react';
import { useState } from 'react';

const InputTittle = () => {
	return <Input type="email" label="Tittle" status="success" size="small" />;
};

const InputBudget = () => {
	return <Input label="Budget / Pax" variant="money" size="small" />;
};

const InputPax = () => {
	return <Input label="Max Pax" size="small" />;
};

const InputAminities = () => {
	const [ value, setValue ] = useState();
	return <Input label="Travel Amenities" size="small" onChange={(e) => setValue(e.target.value)} value={value} />;
};

const InputDesc = () => {
	const [ value, setValue ] = useState();
	return (
		<Input
			label="Place Description"
			as="text-area"
			onChange={(e) => setValue(e.target.value)}
			value={value}
			min={20}
		/>
	);
};

const Desc = () => {
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
