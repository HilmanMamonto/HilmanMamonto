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
import 'animate.css';

const InputTittle = () => {
	const [ value, setValue ] = useState();

	const handleChange = (data) => {
		// console.log(data);
	};

	return <InputText label="Tittle" min={2} onChange={handleChange} />;
};

const Budget = () => {
	const [ value, setValue ] = useState();
	return <InputBudget />;
};

const InputDesc = () => {
	const [ value, setValue ] = useState();
	return <TextArea min={20} label="Place Descrition" onChange={(values) => setValue(values.value)} />;
};

const InputSchedule = () => {
	const [ values, setValues ] = useState({ time: '', desc: '', status: '' });
	const [ valid, setValid ] = useState({ time: 'invalid', desc: 'invalid' });

	const getItinerary = JSON.parse(localStorage.getItem('itinerary'));
	const [ storage, setStorage ] = useState(getItinerary);

	const handleClick = () => {
		const getItinerary = JSON.parse(localStorage.getItem('itinerary'));
		const result = getItinerary && getItinerary.constructor === Array ? [ ...getItinerary, values ] : [ values ];

		if (validation()) {
			localStorage.setItem('itinerary', JSON.stringify(result));
			setStorage(result);
			setValues({ time: '', desc: '', status: '' });
		} else {
			alert('Opps! please input itinerary correctly');
		}
	};

	const handleChangeTimePicker = (data) => {
		setValues((p) => ({ ...p, time: data.tpStart + ' - ' + data.tpEnd }));
		setValid((p) => ({ ...p, time: data.status }));
	};

	const handleChangeTextArea = (data) => {
		setValues((p) => ({ ...p, desc: data.value }));
		setValid((p) => ({ ...p, desc: data.status }));
	};

	const handleReset = () => {
		localStorage.removeItem('itinerary');
		setStorage(null);
		setValues({ time: '', desc: '', status: '' });
	};

	const validation = () => {
		return valid.time === 'valid' && valid.desc === 'valid' ? true : false;
	};

	return (
		<div className="mb-m">
			<div className="mb-s">
				<div className="mb-s">
					<InputItinerary data={storage} onClickReset={handleReset} />
				</div>
				<TimePicker size="large" value={values.time} onChange={handleChangeTimePicker} />
			</div>
			<div className="mb-s">
				<TextArea
					placeholder={'Input schedule...'}
					value={values.desc}
					min={50}
					name="shcedule"
					onChange={handleChangeTextArea}
				/>
			</div>
			<Button
				fullWidth
				size="large"
				variant="outline"
				justifyContent="center"
				label="Add Schedule"
				onClick={handleClick}
			/>
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
	const [ value, setValue ] = useState();
	return (
		<TextArea min={20} label="More Things Visitors Must To Know" onChange={(values) => setValue(values.value)} />
	);
};

const Desc = () => {
	return (
		<Container flex direction="column" className="animate__animated animate__fadeIn">
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
