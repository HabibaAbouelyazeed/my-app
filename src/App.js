// import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Products from "./components/Shop/Products";
import ProductDetails from "./components/Shop/ProductDetails";
import About from "./components/Shop/About";
import Counter from "./components/counter/Counter";
import "./App.css";

const App = () => {
  return (
    <Router>
      <div className="App">
        <NavBar />
      </div>

      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/details/:id" element={<ProductDetails />} />
        <Route path="/about" element={<About />} />
        <Route path="/counter" element={<Counter />} />
      </Routes>
    </Router>
  );
};

export default App;
