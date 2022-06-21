import H from 'components/H';
import Stepper from 'components/Stepper';
import Container from 'Layout/Container';
import React from 'react';
import Desc from './Desc';

const Wrapper = ({ childrend }) => {
	return (
		<Container absolute z={1} fullWidth variant="transparent" flex justifyContent="center">
			<Container maxWidth={500} mxAuto top="large">
				<Container left="small" right="small" top="medium" bottom="medium">
					{childrend}
				</Container>
			</Container>
		</Container>
	);
};

const stepper = [
	{tittle: 'Desc' },
	{tittle: 'Availability' },
	{tittle: 'Photos' },
	{tittle: 'Stay' },
	{tittle: 'Review' }
];

const Items = () => {
	return(
		<>
		<Container flex justifyContent='center' bottom='small'>
			<H type="4" className="tittle" isGray text600 childrend={'Add New Travel Package'} />
		</Container>
		<Container bottom='small'>
			<Stepper data={stepper} size='small' />
		</Container>
		<Desc />
		</>
	)
}

const AddPackage = () => {


	return (
		<Wrapper childrend={<Items />}/>
	);
};

export default AddPackage;
