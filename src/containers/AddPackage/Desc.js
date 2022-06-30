import InputCheckBox from 'components/Input/CheckBox/CheckBox';

import TextArea from 'components/Input/TextArea/TextArea';
import TimePicker from 'components/TimePicker';
import Container from 'Layout/Container';
import Grid from 'Layout/Grid';
import React from 'react';
import InputBudget from 'components/Input/Budget/InputBudget';
import { useState } from 'react';
import InputText from 'components/Input/Text/InputText';

const InputTittle = () => {
	const [ value, setValue ] = useState();
	return <InputText label="Tittle" />;
};

const Budget = () => {
	const [ value, setValue ] = useState();
	return <InputBudget />;
};

const InputDesc = () => {
	const [ value, setValue ] = useState();
	return <TextArea min={10} label="Place Descrition" />;
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
					<Budget />
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
