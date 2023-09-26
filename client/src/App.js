import { Routes, Route } from "react-router-dom";
import './App.css';
import React from "react";
import LandingPage from './components/Landing/Landing';
import Home from './components/Home/Home';
import VideogameCreate from './components/VideogameCreate/VideogameCreate';
import Detail from "./components/Detail/Detail";
import About from "./components/About/About";
// import NavBar from "./components/NavBar/NavBar"; 

import axios from 'axios'
axios.defaults.baseURL= 'http://localhost:3001/'


function App() {
  // let { pathname } = useLocation()
  return (
    <div className="App">
      {/* {pathname !== '/' ? <NavBar /> : null} */}
      <Routes>
        <Route exact path='/' element={<LandingPage />} />
        <Route path='/home' element={<Home />} />
        <Route path='/videogame' element={<VideogameCreate />} />
        <Route path='/videogame/:id' element={<Detail />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </div>
  );
}

export default App;