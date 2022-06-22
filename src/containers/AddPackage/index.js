import FormWrapper from 'components/FormWrapper';
import H from 'components/H';
import Stepper from 'components/Stepper';
import Typography from 'components/Typography';
import Container from 'Layout/Container';
import React from 'react';
import Desc from './Desc';
import Line from 'components/Line';

const Header = () => (
	<Container flex justifyContent="center" bottom="small">
		<Typography variant="header" children={'Add Travel Package'} />
	</Container>
);

const StepperItems = () => {
	const stepperData = [
		{ tittle: 'Desc' },
		{ tittle: 'Availability' },
		{ tittle: 'Photos' },
		{ tittle: 'Stay' },
		{ tittle: 'Review' }
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
		<FormWrapper>
			<Container
				height="auto"
				flex
				padding={'1.5rem 1rem'}
				direction="column"
				left="small"
				right="small"
				borderRadius={14}
			>
				<Header />
				<StepperItems />
				<Desc />
			</Container>
		</FormWrapper>
	);
};

export default AddPackage;
