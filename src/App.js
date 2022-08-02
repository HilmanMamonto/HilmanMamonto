import { Home } from "pages/Home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductSelectedPage from "pages/ProductSelected";
import DashboardPage from "pages/Dashboard/Dashboard";
import TourGuide from "pages/TourGuide/TourGuide";
import NotFound from "pages/NotFound/NotFound";
import { createBrowserHistory } from "history";

function App() {
  const history = createBrowserHistory({ basename: process.env.PUBLIC_URL });

  return (
    <Router history={history} basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/tour-guide/*" element={<TourGuide />} />
        <Route path="/product/*" element={<ProductSelectedPage />} />
        <Route path="/dashboard/*" element={<DashboardPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
