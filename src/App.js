import Home from "./pages/home/Home";
import AboutUs from "./pages/aboutUs/AboutUs";
import TopNavbar from "./components/TopNavbar";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import Careers from "./pages/career/Careers";
import Portfolio from "./pages/portfolio/Portfolio";

export default function App() {
  return (
    <div>
      <TopNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<AboutUs />} />
        <Route path="career" element={<Careers />} />
        <Route path="portfolio" element={<Portfolio />} />
      </Routes>
      <Footer />
    </div>
  );
}
