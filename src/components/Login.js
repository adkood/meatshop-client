import axios from "axios";
import React, { useEffect, useState } from "react";
import { API_URL } from '../utils/Constants';

const Login = () => {
    const [pass, setPass] = useState('');

    const call = async (password) => {
        try {
            const requestData = {
                password
            };
            const headers = {
                'Content-Type': 'application/json'
            };

            await axios.post(`${API_URL}/login`, requestData, { headers });
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className="login">
            <label className="login__label">Enter the key :</label>
            <input
                type="password"
                onChange={(e) => setPass(e.target.value)}
                className="login__input"
            />
            <button onClick={() => { call(pass) }}>click</button>
        </div>
    );
}

export default Login;
