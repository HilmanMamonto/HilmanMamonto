import { Home } from "pages/Home/Home";
import { Provider } from "react-redux";
import store from "redux/store";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductSelectedPage from "pages/ProductSelected";
import DashboardPage from "pages/Dashboard/Dashboard";
import TourGuide from "pages/TourGuide/TourGuide";
import NotFound from "pages/NotFound/NotFound";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="tour-guide" element={<TourGuide />} />
          <Route path="/product/:id" element={<ProductSelectedPage />} />
          <Route path="dashboard/*" element={<DashboardPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
