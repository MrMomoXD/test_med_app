import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar/Navbar'; // Assuming Navbar is already created
import Landing_Page from './Components/Landing_Page/LandingPage'; // Import LandingPage component

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar /> {/* Navbar will render on all pages */}
        <Routes>
          <Route path="/" element={<Landing_Page />} /> {/* Set LandingPage as the home route */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
