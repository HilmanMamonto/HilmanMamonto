import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const InputItinerary = (props) => {
	const data = [
		{
			time: '00:15 - 00:30',
			desc: 'Pick up in Malang areas can be done to hotels  '
		},
		{ time: '00:15 - 00:30', desc: 'Pick up in Malang areas' },
		{ time: '00:15 - 00:30', desc: 'Pick up in Malang areas' },
		{ time: '00:15 - 00:30', desc: 'Pick up in Malang areas' }
	];

	const items = data.map((item, i) => {
		const dotClass = i === data.length - 1 ? 'iit-dot iit-dot-last' : 'iit-dot';
		return (
			<div key={'iit-item' + i} className="iit-item">
				<div className="iit-item-left">
					<div className={dotClass} />
					<label className="iit-desc">
						<label>{item.time}</label>
						{item.desc}
					</label>
				</div>
				<button className="btn-iit">Change</button>
			</div>
		);
	});

	return (
		<div className="input-itinerary">
			<div className="iit-head">
				<label>Itinerary</label>
				<button className="btn-iit">Reset</button>
			</div>
			<div className="iit-items">{items}</div>
		</div>
	);
};

InputItinerary.propTypes = {};

export default InputItinerary;
