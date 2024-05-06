import React from "react";
import {BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// Pages
import Home from "./pages/Home"
import Projects from './pages/Projects';
import CV from './pages/CV';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="pages">
          <Routes>
            <Route 
              path="/"
              element={<Home />}
            />
            <Route 
              path="/projects"
              element={<Projects />}
            />
            <Route 
              path="/cv"
              element={<CV />}
            />
            <Route
              path="/contact"
              element={<Contact />}
            />
            <Route
              path="*"
              element={<NotFound />}
              />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
