import InputCheckBox from 'components/Input/CheckBox/CheckBox';
import Input from 'components/Input/Text';
import TextArea from 'components/Input/TextArea';
import TimePicker from 'components/TimePicker';
import Container from 'Layout/Container';
import Grid from 'Layout/Grid';
import React from 'react';
import { useState } from 'react';

const InputTittle = () => {
	const [ value, setValue ] = useState();
	return <Input label="Tittle" status="error" />;
};

const InputBudget = () => {
	const [ value, setValue ] = useState();
	return <Input label="Budget / Pax" variant="budget" status="error" />;
};

const InputDesc = () => {
	const [ value, setValue ] = useState();
	return <TextArea label="Place Descrition" />;
};

const InputAmenites = () => {
	const [ value, setValue ] = useState();
	const data = [
		{ name: 'sun screen' },
		{ name: 'lunch' },
		{ name: 'lunch' },
		{ name: 'lunch' },
		{ name: 'lunch' },
		{ name: 'lunch' }
	];
	return <InputCheckBox label="Travel Amenities" data={data} />;
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
					<InputAmenites />
				</Grid>
			</Container>
			<Container bottom="medium">
				<InputDesc />
			</Container>
			<Container bottom="medium">
				<TimePicker size="large" />
			</Container>
		</Container>
	);
};

export default Desc;
