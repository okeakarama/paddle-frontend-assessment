import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Layout from "./pages/Layout";
import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/Blog';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import './App.css';

// function App() {
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes className="main">

          <Route path='*' component={<Navbar />} />
          <Route index path='/' component={<Home />} />
          <Route path='/about' component={<About />} />
          <Route path='/blog' component={<Blog />} />
          <Route path='*' component={<Footer />} />
          
          {/* <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/blog' component={Blog} /> */}
                  
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;