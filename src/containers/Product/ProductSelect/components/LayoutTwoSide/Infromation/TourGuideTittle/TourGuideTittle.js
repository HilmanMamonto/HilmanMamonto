import React from 'react';
import PropTypes from 'prop-types';
import './TourGuideTittle.css';

const TourGuideTittle = (props) => {
	return (
		<div id="tour-guide-tittle">
			<div>
				<label className="tittle">
					Travel Package By <span>{props.tourGuideName}</span>
				</label>
				<div className="sub-tittle">
					<label>1 day</label>
					<span />
					<label>4 places</label>
					<span />
					<label>{props.freePickup ? 'free pick-up services' : ''}</label>
				</div>
			</div>
			<img src={props.tourGuidePhoto} />
		</div>
	);
};

TourGuideTittle.propTypes = {
	tourGuideName: PropTypes.string.isRequired,
	freePickup: PropTypes.bool.isRequired,
	tourGuidePhoto: PropTypes.string.isRequired
};

export default TourGuideTittle;
