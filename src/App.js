import Header from './Components/Header'
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import './App.css';
import ProductListing from './Components/ProductListing';
import ProductDetails from './Components/ProductDetails';

function App() {
  return (
    <>
    <Router>
      <Header />
      <Routes>
      <Route path='/' exact element={<ProductListing/>} /> 
      <Route path='/product/:productId' exact element={<ProductDetails/>} /> 

      </Routes>
    </Router>
    </>
  );
}

export default App;
