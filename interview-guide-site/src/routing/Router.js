import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from 'pages/Home/Home';
import Chapters from 'pages/Chapters/Chapters';
import Exercises from 'pages/Exercises/Exercises';
import Contributions from 'pages/Contributions/Contributions';
import Header from 'components/Header/Header';


function AppRouter() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/chapters" element={<Chapters />} />
                <Route path="/exercises" element={<Exercises />} />
                <Route path="/contributions" element={<Contributions />} />
            </Routes>
        </Router>
    );
}

export default AppRouter;
