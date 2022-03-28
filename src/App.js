import Header from './Components/Header'
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import './App.css';
// import ProductListing from './Components/ProductListing';
// import ProductDetails from './Components/ProductDetails';
import ProductComponent from './Components/ProductComponent';
import React, { useState,useEffect } from 'react'
import Cart from './Components/Cart';

function App() {
  const [productCounter,setProductCounter]=useState(0)
  // const cartAddData=[]
  const[allData,setAllData]=useState([])
  const addCartData=(details)=>{
    if(details){
      setAllData([...allData,details])
      // cartAddData.push(allData)
      setProductCounter(allData.length+1)
      // console.log('add to cart data after click', cartAddData)
    }
  }

  return (
    <>
    <Router>
      <Header count={productCounter} wholeData={allData}/>
      <Routes>
      <Route path='/' exact element={<ProductComponent returnData={addCartData}/>} /> 
      {/* <Route path='/product/:productId' exact element={<ProductDetails/>} />  */}
      <Route path='/cart' exact element={<Cart details={allData} />} /> 
      </Routes>
    </Router>
    </>
  );
}

export default App;
