import Input from 'components/Input';
import React from 'react';

const Desc = () => {
	const inputTittle = (
		<Input
			type="text"
			label="Tittle"
			className="input-tittle"
			height={41}
			border={2}
			hasBordered
			borderRadius={4}
		/>
	);

	const inputBudget = (
		<Input
			label="Budget / Pax"
			variant="money"
			className="input-tittle"
			height={41}
			border={2}
			hasBordered
			borderRadius={4}
		/>
	);

	const inputPax = (
		<Input label="Max Pax" className="input-tittle" height={41} border={2} hasBordered borderRadius={4} />
	);

	return (
		<div id="add-package-desc">
			<div className="item">{inputTittle}</div>
			<div className="items">
				<div className="item">{inputBudget}</div>
				<div className="item">{inputPax}</div>
			</div>
			<div className="items">
				<div className="item">
					<label>Travel Amenities</label>
				</div>
				<div className="item">
					<label>Not Include</label>
				</div>
			</div>
		</div>
	);
};

export default Desc;
