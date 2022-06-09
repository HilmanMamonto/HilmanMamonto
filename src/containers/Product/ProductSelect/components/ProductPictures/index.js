import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
import Button from 'components/Button';

const ProductPictures = (props) => {
	if (props.sumOfPictures > 1) {
		return (
			<div id="product-pictures">
				<div className="product-picture-left">
					<img src={props.imagesUrl[0].url} alt="" />
				</div>
				<div className="product-picture-right">
					<img src={props.imagesUrl[1].url} alt="" />
					<Button
						className="btn-see-all-photos"
						type="a"
						href="/"
						textWhite
						stye={{ fontSize: '14px' }}
						children={'see all photos'}
					/>
				</div>
			</div>
		);
	}
};

ProductPictures.propTypes = {
	sumOfPictures: PropTypes.number.isRequired,
	imagesUrl: PropTypes.array.isRequired
};

export default ProductPictures;
