import H from 'components/H';
import React from 'react';
import Desc from './Desc';
import './styles.scss';

const AddPackage = () => {
	const stepper = [
		{ step: 1, tittle: 'Desc' },
		{ step: 2, tittle: 'Availability' },
		{ step: 3, tittle: 'Photos' },
		{ step: 4, tittle: 'Stay' },
		{ step: 5, tittle: 'Review' }
	];
	return (
		<div id="add-package">
			<div className="wrapper">
				<div className="head">
					<H type="4" className="tittle" isGray text600 childrend={'Add New Travel Package'} />
					<div className="stepper">
						{stepper.map((item, i) => {
							return (
								<div key={'stepper-' + i}>
									<label>{item.step}</label>
									<span>{item.tittle}</span>
								</div>
							);
						})}
					</div>
				</div>
				<Desc />
			</div>
		</div>
	);
};

export default AddPackage;
