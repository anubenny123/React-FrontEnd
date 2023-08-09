import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from './pages/Dashboard/Dashboard';
import Sidebar from './components/Sidebar';
import Doctor from './pages/Doctor/Doctor';
import Patience from './pages/Patience/Patience';
import Receptionist from './pages/Receptionsit/Receptionist';
import Login from './pages/Login/Login';
import MaybeShowNavBar from './components/MaybeShowNavBar/MaybeShowNavBar';




function App() {
  return (
    <div>
    
      <Router>
     <MaybeShowNavBar>
        <Navbar />
        </MaybeShowNavBar>
        <Sidebar />
    
         <Routes>
         <Route  exact path='/' element={<Login/>}/>
          <Route exact path='/dashboard' element={<Dashboard />} />
          <Route exact path='/doctor' element={<Doctor/>} />
          <Route exact path='/patince' element={<Patience />} />
          <Route exact path='/receptionist' element={<Receptionist />} />
        
        </Routes>
      </Router>
    </div>
  );
}

export default App;

















