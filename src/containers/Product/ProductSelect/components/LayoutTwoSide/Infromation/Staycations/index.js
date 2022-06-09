import React from 'react';
import Button from 'components/Button';
import ScrollStaycations from './components/ScrollStaycations';
import './styles.scss';
import TittleSelectedStaycations from './components/Tittle';
import Desc from './components/Desc';
import LayoutImg from './components/LayoutImg';
import Amenities from './components/Amenities';
import CheckIn from './components/CheckIn';

const Staycations = () => {
	return (
		<div id="select-product-staycations">
			<label className="tittle">Staycations Thats Offers</label>
			<ScrollStaycations />
			<TittleSelectedStaycations />
			<LayoutImg />
			<Desc />
			<Amenities />
			<CheckIn />
		</div>
	);
};

export default Staycations;
