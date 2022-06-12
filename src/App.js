import { Home } from 'pages/Home/Home';
import { Provider } from 'react-redux';
import store from 'redux/store';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductSelectedPage from 'pages/ProductSelected';

function App() {
	return (
		<Provider store={store}>
			<Router>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/:id" element={<ProductSelectedPage />} />
				</Routes>
			</Router>
		</Provider>
	);
}

export default App;
