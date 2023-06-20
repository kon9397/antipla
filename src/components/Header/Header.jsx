import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Header.css';

const Header = ({setIsAuthenticated}) => {
    const navigate = useNavigate();
    const clearSessionStorage = (e) => {
        e.preventDefault();
        sessionStorage.removeItem('isAuthenticated');
        setIsAuthenticated(sessionStorage.getItem('isAuthenticated'));
        navigate('/dashboard');
    }

    return (
        <header className="app-header">
            <h1>Text Uniqueness Checker</h1>
            <nav>
                <ul className="nav-links">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/history">History</Link>
                    </li>
                    <li><Link to="/dashboard">Dashboard</Link></li>
                    {sessionStorage.getItem('isAuthenticated') ? <li><a onClick={clearSessionStorage}>Вийти</a></li> : undefined}
                </ul>
            </nav>
        </header>
    );
};

export default Header;
