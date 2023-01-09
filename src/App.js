import './App.css';
import './index.js'
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import Home from './components/Home';
import PetActionApp from './components/CRUD_pet/action_pet';
import BreedActionApp from './components/CRUD_breed/action_breed';
import ColorActionApp from './components/CRUD_color/action_color';
import PulseActionApp from './components/CRUD_pulse/action_pulse';
import SleepActionApp from './components/CRUD_sleep/action_sleep';
import TemperatureActionApp from './components/CRUD_temperature/action_temperature';
import UserActionApp from './components/CRUD_user/action_user';
import Stat_sleep from './components/Stat_sleep';
import Stat_temp from './components/Stat_temp';
import Stat_pulse from './components/Stat_pulse';
 

function App() {
  return (
    <Router>
    <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/Pet" element={<PetActionApp />} />
        <Route path="/Breed" element={<BreedActionApp />} />
        <Route path="/Color" element={<ColorActionApp />} />
        <Route path="/Pulse" element={<PulseActionApp />} />
        <Route path="/Sleep" element={<SleepActionApp />} />
        <Route path="/Temperature" element={<TemperatureActionApp />} />
        <Route path="/User" element={<UserActionApp />} />
        <Route path="/Stat_sleep" element={<Stat_sleep />} />
        <Route path="/Stat_temp" element={<Stat_temp />} />
        <Route path="/Stat_pulse" element={<Stat_pulse />} />
    </Routes>
  </Router>
  ) 
}

export default App;
