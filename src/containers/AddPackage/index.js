import FormWrapper from 'components/FormWrapper';
import Stepper from 'components/Stepper/Stepper';
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
import Availability from './Availability';
import Images from './Images';
import Stays from './Stays';

const Header = () => (
	<Container flex justifyContent="center" bottom="small">
		<H as="h3" weight="500" childrend={'Add New Travel Package'} />
	</Container>
);

const StepperItems = ({ currentStep }) => {
	const data = [ 'Desc', 'Availability', 'Photos', 'Stay', 'Review' ];

	return (
		<Container bottom="small">
			<Stepper data={data} currentStep={currentStep} size="small" />
			<Container top="small">
				<Line />
			</Container>
		</Container>
	);
};

const AddPackage = () => {
	const [ step, setStep ] = useState(0);

	const content =
		step === 0 ? (
			<Desc onStatus={() => ''} />
		) : step === 1 ? (
			<Availability />
		) : step === 2 ? (
			<Images />
		) : step === 3 ? (
			<Stays />
		) : (
			''
		);
	const btnBack =
		step > 0 ? (
			<Button
				fullWidth
				variant="outline"
				size="large"
				justifyContent="space-betwen"
				label="Back"
				rightIcon={<Icons size="xlarge" variant="arrow-right-white-rounded" />}
				onClick={() => setStep(step - 1)}
			/>
		) : null;

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
					<StepperItems currentStep={step} />
					{content}
					<Container bottom="small">
						<Button
							fullWidth
							size="large"
							shadow="medium"
							justifyContent="space-betwen"
							label="Add Desc and Next"
							rightIcon={<Icons size="xlarge" variant="arrow-right-white-rounded" />}
							onClick={() => setStep(step + 1)}
						/>
					</Container>
					{btnBack}
				</Container>
			</FormWrapper>
		</div>
	);
};

export default AddPackage;
