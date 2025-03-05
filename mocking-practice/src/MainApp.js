import React from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';

function MainAppComponent() {
    const navigate = useNavigate();

    const handleLogin = () => {
        navigate('/info');
    }

    return (
        <div className="bg">
            <div className="container">
                <div className="square">
                    <h2>Login</h2>
                    <input type="text" name="login" placeholder="Login" className="input" />
                    <input type="password" name="password" placeholder="Password" className="input" />
                    <button className="button" onClick={handleLogin}>Login</button>
                </div>
            </div>
        </div>
    );
}

export default MainAppComponent;
