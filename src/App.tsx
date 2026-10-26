
import React from 'react';
import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './Navbar';
import Hero from './Hero';
import Benefits from './Benefits';
import FlashSale from './FlashSale';

import ReturnRefund from './pages/ReturnRefund';
import SecurePayment from './pages/SecurePayment';
import QualitySupport from './pages/QualitySupport';
import DailyOffers from './pages/DailyOffers';

function App() {
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
            </>
          }
        />

        <Route path="/returns" element={<ReturnRefund />} />
        <Route path="/payment" element={<SecurePayment />} />
        <Route path="/support" element={<QualitySupport />} />
        <Route path="/offers" element={<DailyOffers />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
