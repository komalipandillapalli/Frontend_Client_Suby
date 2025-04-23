import React from 'react'
import LandingPage from './suby/pages/LandingPage'
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from 'react-router-dom';
import ProductMenu from './suby/components/ProductMenu';

const App = () => {
  return (
    
    <div>
      <Routes>
        <Route path='/' element={<LandingPage/>} />
        <Route path='/product/:firmId/:firmName' element={<ProductMenu/>} />
      </Routes>
    </div>
  )
}

export default App