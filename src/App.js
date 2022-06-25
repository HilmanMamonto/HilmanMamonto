import { Home } from 'pages/Home/Home';
import { Provider } from 'react-redux';
import store from 'redux/store';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductSelectedPage from 'pages/ProductSelected';
import DashboardPage from 'pages/Dashboard';
import Button from 'components/NewButton/Button';
import Icons from 'components/Icons';
import Loading from 'components/Loading/Loading';

const button = (
	<div>
		<Button
			as="button"
			startIcon={<Icons size="large" variant="checkmark" />}
			label="button"
			size="large"
			shadow="medium"
		/>
		<Button as="button" label="button" size="medium" shadow="large" color="secondary" />
		<Button
			loading
			as="button"
			startIcon={<Icons size="medium" variant="checkmark" />}
			label="button"
			size="small"
			color="lightGray"
			shadow="small"
		/>
		<Button
			startIcon={<Icons size="small" variant="checkmark" />}
			as="button"
			label="button"
			size="xsmall"
			color="ultraLightGray"
			shadow="small"
		/>
		<Loading />
	</div>
);

function App() {
	return (
		<Provider store={store}>
			<Router>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/product/:id" element={<ProductSelectedPage />} />
					<Route path="dashboard/*" element={<DashboardPage />} />
					<Route path="test" element={button} />
				</Routes>
			</Router>
		</Provider>
	);
}

export default App;
