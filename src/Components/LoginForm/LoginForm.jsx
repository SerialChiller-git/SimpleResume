import { GiBossKey } from "react-icons/gi";
import { PiCowboyHatFill } from "react-icons/pi";
import './LoginForm.css';
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';

export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
  
    const handleSubmit = (event) => {
        event.preventDefault(); 
        
        const name = 'kek';
        const pass = 'kek';
  
        if (username === name && password === pass) {
            navigate('/dashboard'); 
        } else {
            alert('Incorrect username or password');
        }
    };

    return (
        
        <div className="wrapper">
            <div className="form-container">
            <form onSubmit={handleSubmit}> {}
                <h1>VERIFY YOURSELF BOSS</h1>
                <div className="form-box">
                    <input 
                        type="text" 
                        placeholder="name"
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                    <PiCowboyHatFill className="icon"/>
                </div>
                <div className="form-box">
                    <input 
                        type="text" 
                        placeholder="pass" 
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <GiBossKey className="icon"/>
                </div>
                <div className="login">
                    <button type="submit">Login</button> {}
                </div>
            </form>
            </div>
        </div>
    );
}
