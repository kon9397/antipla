import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

function Login({ onLoginSuccess }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        // Это просто для демонстрации, не используйте это в продакшене
        if (username === 'admin' && password === 'qwerty') {
            sessionStorage.setItem('isAuthenticated', 'true');
            onLoginSuccess();
            navigate('/dashboard');
        }
    }

    return (
        <form onSubmit={handleSubmit} className="login-form">
            <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={e => setUsername(e.target.value)}
                className="login-input"
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                className="login-input"
            />
            <button type="submit" className="login-button">Login</button>
        </form>
    );
}

export default Login;
