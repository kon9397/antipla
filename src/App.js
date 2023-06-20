import React, { useState } from 'react';
import './App.css';
import Header from "./components/Header/Header";
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import HomePage from "./components/HomePage";
import HistoryPage from "./components/HistoryPage/HistoryPage";
import Dashboard from "./components/Dashboard/Dashboard";
import Login from "./components/Login/Login";

function App() {
    const [history, setHistory] = useState([]);
    const [isAuthenticated, setIsAuthenticated] = useState(!!sessionStorage.getItem('isAuthenticated'));

    return (
        <Router>
            <div className="App">
                <Header setIsAuthenticated={setIsAuthenticated}/>
                <Routes>
                    <Route path="/" exact element={<HomePage setHistory={setHistory}/>} />
                    <Route path="/history" element={<HistoryPage history={history} setHistory={setHistory} />}  />
                    <Route path="/login" element={<Login onLoginSuccess={() => setIsAuthenticated(true)} />} />
                    <Route path="/dashboard" element={isAuthenticated ? <Dashboard history={history} /> : <Navigate to="/login" />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
