import Header from 'containers/Header';
import ProductSelected from 'containers/Product/ProductSelect';
import React, {useEffect} from 'react';

const ProductSelectedPage = () => {
	useEffect(() => {
		window.scroll(0, 0)
	})
	
	return (
		<>
			<Header type="product selected" />
			<ProductSelected />
		</>
	);
};

export default ProductSelectedPage;
