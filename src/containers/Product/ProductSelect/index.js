import React from 'react';
import LayoutTwoSide from './components/LayoutTwoSide';
import PlaceDesc from './components/PlaceDesc';
import ProductPictures from './components/ProductPictures';
import ProductTittle from './components/ProductTittle';
import Reviews from './components/Reviews';
import './styles.scss';
import _dataProduct from 'json/products.json';
import { useParams } from 'react-router-dom';

const ProductSelected = () => {
	let { id } = useParams();
	let dataProduct = _dataProduct.filter((item) => item.id === 'abcdabcd001');

	return dataProduct.map((item, i) => (
		<div key={'ps' + i} id="product-selected">
			<ProductTittle
				tourName={item.tourName}
				maxPax={item.maxPax}
				location={item.location}
				locationSrc={item.locationSrc}
				rate={item.rate}
				sumOfReviews={item.reviews.length}
				freePickup={item.freePickup}
			/>
			<ProductPictures imagesUrl={item.imagesUrl} sumOfPictures={item.imagesUrl.length} />
			<LayoutTwoSide
				tourGuideName={item.tourGuideName}
				tourGuidePhoto={item.tourGuidePhoto}
				freePickup={item.freePickup}
				travelAmenities={item.travelAmenities}
				travelAmenitiesNot={item.travelAmenitiesNot}
				language={item.language}
				itinerary={item.itinerary}
			/>
			<Reviews />
			<PlaceDesc />
		</div>
	));
};

export default ProductSelected;
