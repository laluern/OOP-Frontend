import React from 'react';
import { useEffect, useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// Components
import FirstPage from './pages/FirstPage';
import Navbar from './components/Navbar'
import Login from './pages/Login'
import SearchFlights from './pages/SearchFlights'
import SearchResult from './pages/SearchResult';

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
          path="/search/flights"
          element={<SearchFlights/>}
        />
        <Route
          path="/search/flights/results"
          element={<SearchResult/>}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App