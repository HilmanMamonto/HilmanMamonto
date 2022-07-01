import FormWrapper from 'components/FormWrapper';
import Stepper from 'components/Stepper';
import Typography from 'components/Typography';
import Container from 'Layout/Container';
import React from 'react';
import Desc from './Desc';
import Line from 'components/Line';
import H from 'components/H';
import { useEffect } from 'react';
import { useState } from 'react';
import Button from 'components/NewButton/Button';
import Icons from 'components/Icons';

const Header = () => (
	<Container flex justifyContent="center" bottom="small">
		<H as="h3" weight="500" childrend={'Add New Travel Package'} />
	</Container>
);

const StepperItems = () => {
	const [ items, setItems ] = useState([
		{ tittle: 'Desc', status: 'active' },
		{ tittle: 'Availability', status: 'disabled' },
		{ tittle: 'Photos', status: 'disabled' },
		{ tittle: 'Stay', status: 'disabled' },
		{ tittle: 'Review', status: 'disabled' }
	]);
	useEffect(
		() => {
			localStorage.setItem('stepperAddPackage', JSON.stringify(items));
		},
		[ items ]
	);
	console.log(localStorage.getItem('item'));
	return (
		<Container bottom="small">
			<Stepper data={items} size="small" />
			<Container top="small">
				<Line />
			</Container>
		</Container>
	);
};

const AddPackage = () => {
	return (
		<div className="add-package">
			<FormWrapper>
				<Container
					height="auto"
					flex
					padding={'1.5rem 1rem'}
					direction="column"
					left="small"
					right="small"
					borderRadius={14}
					maxWidth="500px"
				>
					<Header />
					<StepperItems />
					<Desc />
					<Container bottom="medium">
						<Button
							fullWidth
							size="large"
							shadow="small"
							justifyContent="space-betwen"
							label="Add Desc and Next"
							rightIcon={<Icons size="xlarge" variant="arrow-right-white-rounded" />}
						/>
					</Container>
				</Container>
			</FormWrapper>
		</div>
	);
};

export default AddPackage;
