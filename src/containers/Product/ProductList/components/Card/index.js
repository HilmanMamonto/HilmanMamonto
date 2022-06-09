import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
import Button from 'components/Button';
import H from 'components/H';

const ProductCard = (props) => {
	return (
		<div id="product-card">
			<figure>
				<img src={props.imagesUrl[0].url} alt="" />
				<div className="card-dots">
					<span />
					<span />
					<span />
					<span />
					<span />
					<span />
				</div>
			</figure>
			<div className="description">
				<div className="description-head">
					<H type="4" text600 className="tittle" childrend={props.tittle} />
					<div>{props.rate}</div>
				</div>
				<div className="location">{props.location}</div>
				<div className="date">{props.date}</div>
				<div className="budget">
					${props.budget} / <span>person</span>
				</div>
			</div>
		</div>
	);
};

ProductCard.propTypes = {
	tittle: PropTypes.string
};

export default ProductCard;
