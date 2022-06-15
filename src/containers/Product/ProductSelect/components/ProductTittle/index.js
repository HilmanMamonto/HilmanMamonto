import React from 'react';
import Button from 'components/Button';
import './styles.scss';
import PropTypes from 'prop-types';

const ProductTittle = (props) => {
	const handleClick = () => {};
	return (
		<div id="product-tittle">
			<div className="tittle-wraper">
				<div className="product-tittle-head">
					<label className="tittle">{props.tourName}</label>
					<span className="dot" />
					<label>
						max <span>{props.maxPax}</span> pax
					</label>
				</div>
				<div className="product-tittle-foot">
					<label>
						<img src="/bold-star.svg" alt="" />
						<Button type="a" href="/" children={props.rate} hasUnderline textGray />
					</label>
					<label>
						<img src="/person.svg" alt="" />
						<Button
							type="a"
							href="/"
							textGray
							children={'Reviews (' + props.sumOfReviews + ')'}
							hasUnderline
						/>
					</label>
					<label>
						<img src="/location.svg" alt="" />
						<Button type="a" href={props.locationSrc} textGray children={props.location} hasUnderline />
					</label>
					<span>Only you and your group</span>
				</div>
			</div>
			<Button
				className="btn-save"
				type="button"
				isBgWhite
				children={
					<div>
						<img src="/love-checked.svg" />
						<span>save</span>
					</div>
				}
				style={{ marginTop: 'auto' }}
				onClick={() => handleClick}
			/>
		</div>
	);
};

ProductTittle.propTypes = {
	tourName: PropTypes.string.isRequired,
	location: PropTypes.string.isRequired,
	locationSrc: PropTypes.string.isRequired,
	freePickup: PropTypes.bool.isRequired,
	maxPax: PropTypes.number.isRequired,
	sumOfReviews: PropTypes.number.isRequired
};

export default ProductTittle;
