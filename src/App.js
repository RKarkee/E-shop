import Header from './Components/Header'
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import './App.css';
// import ProductListing from './Components/ProductListing';
// import ProductDetails from './Components/ProductDetails';
import ProductComponent from './Components/ProductComponent';

function App() {
  return (
    <>
    <Router>
      <Header />
      <Routes>
      <Route path='/' exact element={<ProductComponent/>} /> 
      {/* <Route path='/product/:productId' exact element={<ProductDetails/>} />  */}

      </Routes>
    </Router>
    </>
  );
}

export default App;
