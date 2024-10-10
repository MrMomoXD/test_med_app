import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar/Navbar'; // Assuming Navbar is already created
import Landing_Page from './Components/Landing_Page/Landing_Page'; // Import LandingPage component
import Login from './Components/Login/Login'; // Import Login component
import Sign_Up from './Components/Sign_Up/Sign_Up'; // Import Sign_Up component
import InstantConsultation from './Components/InstantConsultation/InstantConsultation';  

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar /> {/* Navbar will render on all pages */}
        <Routes>
          <Route path="/" element={<Landing_Page />} /> {/* Set LandingPage as the home route */}
          <Route path="/login" element={<Login />} /> {/* Set Login as a route */}
          <Route path="/signup" element={<Sign_Up />} /> {/* Set Sign_Up as a route */}
          <Route path="/instant-consultation" element={<InstantConsultation />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
