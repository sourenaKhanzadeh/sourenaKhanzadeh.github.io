import React from "react";
import LandingPage from "./components/landingPage/landingpage";
import './App.scss';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Explore from "./components/explore/explore";

function App() {
    return (
        // Router goes here
        <Router>
            <Routes>
                <Route path="/" element={<LandingPage/>}/>
                <Route path="/explore" element={<Explore/>}/>
            </Routes>
        </Router>
    );
}

export default App;
