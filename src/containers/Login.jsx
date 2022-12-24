import React from 'react';
import Image from 'next(image';
import '../styles/Login.scss';

const Login = () => {
    return (
        <div className="login">
            <div className="form-container">
                <Image src="./logos/logo_yard_sale.svg" alt="logo" className="logo"></Image>
            
                <h1 className="title">Create a new password</h1>
                <p className="subtitle">Enter a new passwrd for yue account</p>
            
                <form action="/" className="form">
                    <label htmlfor="password" className="label">Password</label>
                    <input type="password" id="password" placeholder="*********" className="input input-password"></input>
            
                    <label htmlfor="new-password" className="label">Password</label>
                    <input type="password" id="new-password" placeholder="*********" className="input input-password"></input>
            
                    <input type="submit" value="Confirm" className="primary-button login-button"></input>
                </form>
            </div>
        </div>
    );
};

export default Login;