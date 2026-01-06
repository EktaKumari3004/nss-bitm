import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        {/* landing page sections will go here */}
        <section id="home" className="min-h-[60vh]" />
      </main>
      <Footer />
    </>
  );
}
