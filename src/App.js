// import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Products from './components/Shop/Products';
import ProductDetails from './components/Shop/ProductDetails';
import Info from './components/Info';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="App">
        <NavBar />
      </div>

      <Routes>
        <Route path='/' element={<Products/>}/>
        <Route path='/details/:id' element={<ProductDetails/>}/>
        <Route path='/info' element={<Info/>}/>
      </Routes>
    </Router>
  );
}

export default App;
