import React from "react";
import logo from './logo.svg';
import LandingPage from "./components/landingPage/landingpage";
import './App.scss';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
    return (
        // Router goes here
        <Router>
            <Routes>
                <Route path="/" element={<LandingPage/>}/>
            </Routes>
        </Router>
    );
}

export default App;
