import { Home } from 'pages/Home/Home';
import { Provider } from 'react-redux';
import store from 'redux/store';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductSelectedPage from 'pages/ProductSelected';
import DashboardPage from 'pages/Dashboard';
import Button from 'components/NewButton/Button';
import Icons from 'components/Icons';
import Loading from 'components/Loading/Loading';
import WalletInfo from 'components/DataDisplay/WalletInfo/WalletInfo';
import DashboardAvatar from 'components/DataDisplay/DashboradAvatar/DashboardAvatar';

const button = (
	<div>
		<Button
			loading
			fullWidth
			as="button"
			leftIcon={<Icons size="large" variant="checkmark" />}
			label="button"
			size="medium"
			shadow="medium"
		/>
		<Button loading as="button" label="button" size="medium" shadow="large" color="secondary" />
		<Button
			as="button"
			leftIcon={<Icons size="medium" variant="checkmark" />}
			label="button"
			size="small"
			color="lightGray"
			shadow="small"
		/>
		<Button
			leftIcon={<Icons size="small" variant="checkmark" />}
			as="button"
			label="button"
			size="xsmall"
			color="ultraLightGray"
			shadow="small"
		/>
		<Loading color="white" size="small" />
		<Loading color="white" size="medium" />
		<Loading color="white" size="large" />
		<Loading color="white" size="xlarge" />
		<WalletInfo />
		<DashboardAvatar imgUrl="/andy/andy.jpg" name="Andy" tittle="Tour Guide" />
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
