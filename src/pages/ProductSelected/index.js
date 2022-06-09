import Header from 'containers/Header';
import ProductSelected from 'containers/Product/ProductSelect';
import React from 'react';

const ProductSelectedPage = () => {
	return (
		<>
			<Header type="selected product" />
			<ProductSelected />
		</>
	);
};

export default ProductSelectedPage;
