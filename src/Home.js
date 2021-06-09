import React, { Component } from "react";
import Navbar from './components/Navbar';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Products from './pages/Products';
import PopularPage from './pages/PopularPage';
import OrderPage from './pages/OrderPage';
import BookingPage from "./pages/BookingPage";

const Home = () => {
  return (
    <>
  <Router>
      <Navbar/>
      <Switch>
          <Route path='/' exact component={HomePage} />
          <Route path='/products' component={Products} />
          <Route path='/booking' component={BookingPage} />
          <Route path='/popular' component={PopularPage} />
          <Route path='/order' component={OrderPage} />
        </Switch>
      
      </Router>
    </>
  );
};

export default Home;
