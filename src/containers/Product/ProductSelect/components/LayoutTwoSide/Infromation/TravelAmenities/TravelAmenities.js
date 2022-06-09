import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
import H from 'components/H';

const TravelAmenities = (props) => {
	return (
		<div id="travel-amenities">
			<H type="5" textGray childrend={'Amenities'} text600 />
			<div className="travel-amenities-items">
				<div className="items">
					{props.travelAmenities.map((item, i) => (
						<div className="item" key={'am' + i}>
							<img src={item.iconUrl} />
							<span>{item.name}</span>
						</div>
					))}
				</div>
				<label>Not Include</label>
				<div className="items">
					{props.travelAmenitiesNot.map((item, i) => (
						<div className="item" key={'amn' + i}>
							<img src={item.iconUrl} alt="" />
							<span className="not-include-tittle">{item.name}</span>
						</div>
					))}
				</div>
				<label>Language{props.language.length > 1 ? 's' : ''}</label>
				<div className="items-language">
					{props.language.map((item, i) => (
						<div key={'aml' + i}>
							<img src={item.iconUrl} alt="" />
							<span>{item.name}</span>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

TravelAmenities.propTypes = {
	travelAmenities: PropTypes.array.isRequired,
	travelAmenitiesNot: PropTypes.array.isRequired,
	language: PropTypes.array.isRequired
};

export default TravelAmenities;
