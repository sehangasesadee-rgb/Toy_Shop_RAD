
import React, { useState } from 'react';
import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './Navbar';
import Hero from './Hero';
import Benefits from './Benefits';
import FlashSale from './FlashSale';
import AgeRange from './AgeRange';
import DealsSection from './DealsSection';
import TrendingItems from './TrendingItems';



import ReturnRefund from './pages/ReturnRefund';
import SecurePayment from './pages/SecurePayment';
import QualitySupport from './pages/QualitySupport';
import DailyOffers from './pages/DailyOffers';
import Products from './Products';
import PopularBrands from './PopularBrands';



function App() {
  const [selectedBrand, setBrand] = useState("All");

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Hero />
              <Benefits />
              <FlashSale/>
              <AgeRange/>
              <DealsSection/>
              <TrendingItems/>
              <PopularBrands setBrand={setBrand}/>
              
              
              
            </>
          }
        />

        <Route path="/returns" element={<ReturnRefund />} />
        <Route path="/payment" element={<SecurePayment />} />
        <Route path="/support" element={<QualitySupport />} />
        <Route path="/offers" element={<DailyOffers />} />
        <Route path='/product' element={<Products/>} />


      </Routes>
    </BrowserRouter>
  );
}

export default App;
