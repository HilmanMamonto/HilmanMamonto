import { Home } from "pages/Home/Home";
import { Provider } from "react-redux";
import store from "redux/store";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductSelectedPage from "pages/ProductSelected";
import DashboardPage from "pages/Dashboard";
import AddPackage from "containers/AddPackage";
import { SelectMultiple } from "components/Input/SelectMultiple/SelectMultiple";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          {/* <Route path="/product/:id" element={<ProductSelectedPage />} /> */}
          {/* <Route path="dashboard/*" element={<DashboardPage />} /> */}
          <Route path="test" element={<AddPackage />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
