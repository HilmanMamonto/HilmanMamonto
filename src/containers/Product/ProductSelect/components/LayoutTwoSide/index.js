import React from 'react';
import Itinerary from './Infromation/Itinerary/Itinerary';

import TravelAmenities from './Infromation/TravelAmenities/TravelAmenities';
import TourGuideTittle from './Infromation/TourGuideTittle/TourGuideTittle';
import './styles.scss';
import Staycations from './Infromation/Staycations';
import BookCard from './BookCard';
import MoreThings from './Infromation/MoreThings';
import PropTypes from 'prop-types';

const LayoutTwoSide = (props) => {
	return (
		<div id="product-body">
			<div className="body-left">
				<TourGuideTittle
					tourGuideName={props.tourGuideName}
					freePickup={props.freePickup}
					tourGuidePhoto={props.tourGuidePhoto}
				/>
				<TravelAmenities
					travelAmenities={props.travelAmenities}
					travelAmenitiesNot={props.travelAmenitiesNot}
					language={props.language}
				/>
				<Itinerary itinerary={props.itinerary} />
				<Staycations />
				<MoreThings />
			</div>
			<div className="body-right">
				<BookCard />
			</div>
		</div>
	);
};

LayoutTwoSide.propTypes = {
	tourGuideName: PropTypes.string.isRequired,
	freePickup: PropTypes.bool.isRequired,
	travelAmenities: PropTypes.array.isRequired,
	travelAmenitiesNot: PropTypes.array.isRequired,
	language: PropTypes.array.isRequired,
	itinerary: PropTypes.array.isRequired,
	tourGuidePhoto: PropTypes.string.isRequired
};

export default LayoutTwoSide;
