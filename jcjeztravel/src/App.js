import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

import Navbar from './components/Navbar';
import Home from './components/Home';
import TravelDetails from './components/TravelDetails';
import Receipt from './components/UserReceipt';
import Error from './components/Error';
import UserLogin from './components/UserLogin';

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get('/travel/data');
        setData(result.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      <Router>
        <Navbar /> {/* Render Navbar component */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/travel/:name" element={<TravelDetails />} />
          <Route path="/travel/login" element={<UserLogin />} />
          <Route path="/travel/:name/receipt" element={<Receipt />} />
          <Route path="*" element={<Error />} /> {/* For 404 errors */}
        </Routes>
      </Router>
    </div>


  );
};

export default App;
