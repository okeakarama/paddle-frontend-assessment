//dependencies
import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Provider} from 'react-redux'
import store from './redux/store';
import 'tachyons';

//components
import Layout from "./pages/Layout";
import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/Blog';
import Github from './Github';

//includes
import './index.css';
import './css/Style.css';


//runs

export default function App() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="blog" element={<Blog />} />
            <Route path="github" element={<Provider store={store}>
                                            <Github />
                                        </Provider>} />
            {/* <Route path="*" element={<NoPage />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    );
}
  
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);