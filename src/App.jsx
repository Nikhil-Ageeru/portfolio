import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// Import your pages
import Home from './pages/Home';
import About from './pages/About';
import Works from './pages/Works';
import Contact from './pages/Contact';
import Header from './Components/Header';
import Footer from './Components/Footer';

function App() {

  return (
    <Router>
      < >
        <Header />



        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/works" element={<Works />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </>
    </Router>
  );
}

export default App;
