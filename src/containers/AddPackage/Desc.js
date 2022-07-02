import InputCheckBox from 'components/Input/CheckBox/CheckBox';

import TextArea from 'components/Input/TextArea/TextArea';
import TimePicker from 'components/TimePicker/TimePicker';
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
import './styles.scss';

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
	const [ val, setVal ] = useState({ schedule: '' });

	useEffect(() => {
		console.log(val);
	});

	return <TextArea value={val.schedule} name="input-ta" onChange={(e) => setVal({ schedule: e.target.value })} />;
};

const InputSchedule = () => {
	const [ val, setVal ] = useState({ timeSchedlue: '', schedule: '' });
	const itineraryFormData = new FormData();

	useEffect(() => {
		// itineraryFormData.append('schedule', val.schedule);
		// itineraryFormData.append('timeSchedule', val.timeSchedlue);
		// itineraryFormData.get('timeSchedule');
		console.log(val);
	});

	return (
		<div className="mb-m">
			<div className="mb-s">
				<div className="mb-s">
					<InputItinerary />
				</div>
				<TimePicker
					size="large"
					onChange={(obj) => setVal((p) => ({ ...p, timeSchedlue: obj.tpStart + ' - ' + obj.tpEnd }))}
				/>
			</div>
			<div className="mb-s">
				<TextArea
					value={val.schedule}
					min={50}
					name="shcedule"
					onChange={(e) => setVal((p) => ({ ...p, schedule: e.target.value }))}
				/>
			</div>
			<Button fullWidth size="large" variant="outline" justifyContent="center" label="Add Schedule" />
		</div>
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
