import { Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Notices from "./components/Notices";
import AboutUs from "./components/AboutUs";
import ActivityPage from "./components/ActivityPage";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <Notices />
          </>
        } />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/activity/:domainId" element={<ActivityPage />} />
      </Routes>
      <Footer />
    </div>
  );
}
