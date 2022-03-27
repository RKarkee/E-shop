import Header from './Components/Header'
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import './App.css';
// import ProductListing from './Components/ProductListing';
// import ProductDetails from './Components/ProductDetails';
import ProductComponent from './Components/ProductComponent';
import React, { useState,useEffect } from 'react'


function App() {
  const cartAddData=[]
  const[allData,setAllData]=useState()
  const addCartData=(details)=>{
    if(details){
      setAllData(details)
      cartAddData.push(allData)
      console.log('add to cart data after click', cartAddData)
    }
  }

  return (
    <>
    <Router>
      <Header />
      <Routes>
      <Route path='/' exact element={<ProductComponent returnData={addCartData}/>} /> 
      {/* <Route path='/product/:productId' exact element={<ProductDetails/>} />  */}

      </Routes>
    </Router>
    </>
  );
}

export default App;
