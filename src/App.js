import logo from './logo.svg';
import './App.css';
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/layout";
import Home from "./pages/home";
import Login from "./pages/login";
import Product from "./pages/products";
import Register from './pages/register';
import apiClient from './api';


function App() {
  const [loggedIn, setLoggedIn] = React.useState(
    sessionStorage.getItem('loggedIn') == 'true' || false
  );
  const login = () => {
    setLoggedIn(true);
    sessionStorage.setItem('loggedIn', true);
  };
  const logout = () => {
    apiClient.post('/logout').then(response => {
        if (response.status === 204) {
            setLoggedIn(false);
            sessionStorage.setItem('loggedIn', false);
        }
    })
  };
  return(
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/products" element={<Product />} />
        <Route path='/login' element={<Login/>} />
        <Route path="/register" element={<Register />} />
      </Route>
    </Routes>
  </BrowserRouter>
  )
}

export default App;
