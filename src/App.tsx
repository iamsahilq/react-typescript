import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import logging from './config/logging';
// import routes from './config/routes';
import './App.css';

import Assignment1 from './pages/Assignment1';
import Assignment2 from './pages/Assignment2';
import LoginPage from './pages/LoginPage';
import { NavBar } from './components/NavBar';

// TODO:
// 1. Routing for Assignment1 and Assignment2 [*]
// 2. Add a link to the top of the page to go to Assignment1 [*]
// 3. Add a link to the top of the page to go to Assignment2 [*]
// Add all sub components in components folder [*]
// add assignment 1 and 2 in pages folder [*]
// Add styles using bootstrap
// use destructuring to pass props to components[*]

function App() {
  useEffect(() => {
    logging.info('Loading application.');
  }, []);

  return (
    <div className="container bg-secondary bg-gradient">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/1" element={<Assignment1 />} />
          <Route path="/2" element={<Assignment2 />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
