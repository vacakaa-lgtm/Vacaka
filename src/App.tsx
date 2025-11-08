import "./index.css";
import VacakaLanding from './homepage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Careers from './careers/carrers';
import AboutUs from "./aboutUs/aboutUs";
import EmotionBanner from "./blogs/blogs";
import ContactForm from "./query/contactForm";

function App() {
  return (
    <Router basename="/Vacaka">
      <Routes>
        <Route path="/" element={<VacakaLanding />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/blogs" element={<EmotionBanner/>} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/contact" element={<ContactForm />} />
      </Routes>
    </Router>
  )
}

export default App