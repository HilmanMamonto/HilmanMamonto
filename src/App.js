import { Home } from 'pages/Home/Home';
import ProductSelected from 'pages/ProductSelected';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/product-travel-package" element={<ProductSelected />} />
			</Routes>
		</Router>
	);
}

export default App;
