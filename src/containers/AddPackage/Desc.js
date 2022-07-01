import InputCheckBox from 'components/Input/CheckBox/CheckBox';

import TextArea from 'components/Input/TextArea/TextArea';
import TimePicker from 'components/TimePicker';
import Container from 'Layout/Container';
import Grid from 'Layout/Grid';
import React from 'react';
import InputBudget from 'components/Input/Budget/InputBudget';
import { useState } from 'react';
import InputText from 'components/Input/Text/InputText';
import Button from 'components/NewButton/Button';
import Icons from 'components/Icons';
import InputItinerary from 'components/DataDisplay/InputItinerary/InputItinerary';
import { useRef } from 'react';
import { useEffect } from 'react';
import Ta from 'components/Input/TA/Ta';

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
	return <TextArea min={20} label="Place Descrition" />;
};

const InputScheduleTA = () => {
	const [ val, setValue ] = useState('');

	useEffect(() => {
		console.log(val);
	});
	return (
		<Container bottom="medium">
			{/* <TextArea min={20} value={val} onChange={(e) => setValue(e.target.value)} /> */}
			<Ta value={val} onChange={(e) => setValue(e.target.value)} />
		</Container>
	);
};

const InputSchedule = () => {
	return (
		<Container bottom="medium">
			<Container bottom="small">
				<Container bottom="small">
					<InputItinerary />
				</Container>
				<TimePicker size="large" />
			</Container>
			<InputScheduleTA />
			<Button fullWidth size="large" variant="outline" justifyContent="center" label="Add Schedule" />
		</Container>
	);
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

const MoreThings = () => {
	return <TextArea min={20} label="More Things Visitors Must To Know" />;
};

const Desc = () => {
	return (
		<Container flex direction="column">
			<Container bottom="small">
				<InputTittle />
			</Container>
			<Container bottom="small">
				<Grid colGap={20}>
					<Budget />
					<InputAmenites />
				</Grid>
			</Container>
			<Container bottom="medium">
				<InputDesc />
			</Container>
			<InputSchedule />
			<Container bottom="medium">
				<MoreThings />
			</Container>
		</Container>
	);
};

export default Desc;
