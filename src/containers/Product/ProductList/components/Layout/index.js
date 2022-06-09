import Button from 'components/Button';
import React from 'react';
import ProductCard from '../Card';
import './styles.scss';

const ProductListLayout = (props) => {
	const _data = props.data;
	_data.map((item) => {
		console.log(item.tourName);
	});
	return (
		<div id="product-grid">
			{_data.map((item, i) => {
				return (
					<ProductCard
						key={'product-list' + i}
						tittle={item.tourName}
						rate={4.8}
						location={item.location}
						date={item.availibility}
						budget={item.budget}
						imagesUrl={item.imagesUrl}
					/>
				);
			})}
		</div>
	);
};

export default ProductListLayout;
