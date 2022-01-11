import React from 'react';
import { Route, Routes } from 'react-router';
import Login from './components/Login';
import Home from './pages/Home';

const App = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/*" element={<Home />} />
    </Routes>
  );
};

export default App;
