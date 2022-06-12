import Header from 'containers/Header';
import Hero from 'containers/Hero';
import ProductList from 'containers/Product/ProductList';
import React, {useEffect} from 'react';
import _dataProductList from 'json/product-list.json';

export const Home = () => {
	useEffect(() => {
		window.scroll(0, 0)
	})
	return (
		<>
			<Header type="home" hasCategories />
			<Hero />
			<ProductList data={_dataProductList} />
		</>
	);
};
