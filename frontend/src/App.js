import Home from "./pages/home";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductDetail from "./pages/ProductDetail";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
     
      <Router>
        <div>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<Home />} />
            <Route path="/product/:id" element={<ProductDetail/>} />
            <Route path="/contact" element={<Contact />} />
             
          </Routes>
          <Footer />
        </div>
      </Router>
     
    </div>
  );
}

export default App;
