import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const Desc = (props) => {
	return (
		<div id="desc-product-selected-staycation">
			Immerse yourself in the wilderness, still within reach of civilization! WonderINN is literally a hidden gem;
			the unique design of the mirrored glass blends into the landscape so you can retreat to comfort and luxury
			as you watch the world pass by.
		</div>
	);
};
Desc.propTypes = {
	value: PropTypes.string
};

export default Desc;
