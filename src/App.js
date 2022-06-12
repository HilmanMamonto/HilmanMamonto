import { Home } from 'pages/Home/Home';
import ProductSelected from 'pages/ProductSelected';
import { Provider } from 'react-redux';
import store from 'redux/store';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
	return (
		<Provider store={store}>
			<Router>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/product-travel-package" element={<ProductSelected />} />
				</Routes>
			</Router>
		</Provider>
	);
}

export default App;
