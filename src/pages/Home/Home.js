import Header from 'containers/Header';
import Hero from 'containers/Hero';
import ProductList from 'containers/Product/ProductList';
import React from 'react';
import _dataProductList from 'json/product-list.json';

export const Home = () => {
	return (
		<div>
			<Header type="home" hasCategories />
			<Hero />
			<ProductList data={_dataProductList} />
		</div>
	);
};
