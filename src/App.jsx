import React from 'react';
import { useEffect, useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// Components
import FirstPage from './pages/FirstPage';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import SearchFlights from './pages/SearchFlights';
import SearchResult from './pages/SearchResult';
import AddOn from './pages/AddOn';
import Payment from './pages/Payment';
import PayByCard from './pages/PayByCard';
import PayByMobile from './pages/PayByMobile';
// <<<<<<< HEAD
import Account from './pages/Account';
// =======
import FillInfo from './pages/FillInfo';
// >>>>>>> fb54e9c26843b250c90893941673e30b42ced558

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route
          exact
          path="/"
          element={<FirstPage/>}
        />
        <Route
          path="/login"
          element={<Login/>}
        />
        <Route
          path="/home"
          element={<Home/>}
        />
        <Route
          path="/search/flights"
          element={<SearchFlights/>}
        />
        <Route
          path="/search/flights_results"
          element={<SearchResult/>}
        />
        <Route
          path="add_on"
          element={<AddOn/>}
        />          
        <Route
          path="fill_info"
          element={<FillInfo/>}
        />
        <Route
          path="/register"
          element={<Register/>}
        />
        <Route
          path="/payment"
          element={<Payment/>}
        />
        <Route
          path="/payment/card"
          element={<PayByCard/>}
        />
        <Route
          path="/payment/mobile"
          element={<PayByMobile/>}
        />
        <Route
          path="/account"
          element={<Account/>}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App