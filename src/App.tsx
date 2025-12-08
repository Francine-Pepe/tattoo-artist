import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navigation from "./components/Header";
import "./styles/styles.sass";
import Home from "./pages/Home";
import Work from "./pages/Work";
import BookingAndPrice from "./pages/BookingAndPrice";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./pages/Footer";

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<Work />} />
        <Route path="/price" element={<BookingAndPrice />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
