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

const Test = () => {
	// return <AddPackage />;

	const [ data, setData ] = useState({ name: '', age: '' });
	const [ current, setCurrent ] = useState(0);

	const handleSubmit = (e) => {
		e.preventDefault();
		setCurrent((p) => p + 1);
		console.log('current ' + current);
	};

	return (
		<div>
			<form className="form" action="test" onSubmit={handleSubmit}>
				{current === 0 && (
					<div>
						<div className="mb-s">
							<label htmlFor="name">name</label>
							<input
								id="name"
								name="name"
								onChange={(e) => setData((p) => ({ ...p, name: e.target.value }))}
								value={data.name}
								type="text"
								required
							/>
						</div>
						{/* <input type="button" value="button" onClick={handleClick} /> */}
					</div>
				)}
				{current === 1 && (
					<div className="mb-s">
						<label htmlFor="num">number</label>
						<input
							type="password"
							minLength="2"
							maxLength="4"
							name="num"
							placeholder="enter your pasword..."
							required
							value={data.age}
							onChange={(e) => setData((p) => ({ ...p, age: e.target.value }))}
						/>
					</div>
				)}
				{current === 1 && <input onClick={() => setCurrent(0)} type="button" value="back" />}
				<input type="submit" value="next" />
			</form>
		</div>
	);
};

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
