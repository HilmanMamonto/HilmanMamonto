import { Home } from 'pages/Home/Home';
import { Provider } from 'react-redux';
import store from 'redux/store';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductSelectedPage from 'pages/ProductSelected';
import DashboardPage from 'pages/Dashboard';
import WalletInfo from 'components/DataDisplay/WalletInfo/WalletInfo';
import Statistic from 'containers/Statistic/Statistic';
import ButtonToggle from 'components/ButtonToggle/ButtonToggle';
import AddPackage from 'containers/AddPackage';
import InputBudget from 'components/Input/Budget/InputBudget';
import { useState } from 'react';
import { useEffect } from 'react';
import Container from 'Layout/Container';
import { Input } from 'components/Input/Input/Input';

function App() {
	return (
		<Provider store={store}>
			<Router>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/product/:id" element={<ProductSelectedPage />} />
					<Route path="dashboard/*" element={<DashboardPage />} />
					<Route path="test" element={<AddPackage />} />
				</Routes>
			</Router>
		</Provider>
	);
}

export default App;
