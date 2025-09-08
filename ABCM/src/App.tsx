import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigationbar from "./Navigationbar";
import LandingPage from "./Landing.tsx";
import Footer from "./Footer";
function App() {
  return (
    <Router>
      <Navigationbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
