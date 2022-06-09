import React from 'react';
import PropTypes from 'prop-types';
import H from 'components/H';
import Chart from './components/Chart';
import Reviewer from './components/Reviewer';
import './styles.scss';

const Reviews = (props) => {
	return (
		<div id="select-product-reviews">
			<div className="tittle">
				<div>
					<img />
					<H type="2" childrend={'4.8'} text600 />
				</div>
				<div>
					<img />
					<H type="2" childrend={'3 reviews'} text600 />
				</div>
			</div>
			<Chart />
			<Reviewer />
		</div>
	);
};

Reviews.propTypes = {};

export default Reviews;
