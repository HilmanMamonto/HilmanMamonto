import React from 'react';
import './Itinerary.scss';
import PropTypes from 'prop-types';
const Itinerary = (props) => {
	return (
		<div id="itinerary">
			<div className="tittle">Itinerary</div>
			<div className="items">
				<div className="dash">
					<span />
				</div>
				{props.itinerary.map((item, i) => (
					<div key={'itnr' + i} className="item">
						<div className="dot">
							<span />
						</div>
						<div className="info">
							<label>{item.time}</label>
							<span>{item.do}</span>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

Itinerary.propTypes = {
	itinerary: PropTypes.array.isRequired
};

export default Itinerary;
