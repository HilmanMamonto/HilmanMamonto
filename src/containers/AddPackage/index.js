import FormWrapper from 'components/FormWrapper';
import Stepper from 'components/Stepper';
import Typography from 'components/Typography';
import Container from 'Layout/Container';
import React from 'react';
import Desc from './Desc';
import Line from 'components/Line';
import H from 'components/H';

const Header = () => (
	<Container flex justifyContent="center" bottom="small">
		<H as="h2" childrend={'Add New Travel Package'} />
	</Container>
);

const StepperItems = () => {
	const stepperData = [
		{ tittle: 'Desc', status: 'checkmark' },
		{ tittle: 'Availability', status: 'active' },
		{ tittle: 'Photos', status: 'disabled' },
		{ tittle: 'Stay', status: 'disabled' },
		{ tittle: 'Review', status: 'disabled' }
	];
	return (
		<Container bottom="small">
			<Stepper data={stepperData} size="small" />
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
					maxWidth="660px"
				>
					<Header />
					<StepperItems />
					<Desc />
				</Container>
			</FormWrapper>
		</div>
	);
};

export default AddPackage;
