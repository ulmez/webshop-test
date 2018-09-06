import React from 'react';
import './LoginPage.css';

class LoginPage extends React.Component {
    render() {
        return (
            <div className="row pt-3">
                <div className="login-page form-box-width mx-auto">
                    <div className="login-page main-headline pb-3">
                        Sign in
                    </div>
                    <div className="login-page smaller-headline pb-3">
                        <span className="login-page smaller-headline">Email</span>
                        <input type="text" className="login-page input-box-design" />
                    </div>
                    <div className="pb-3">
                        <span className="login-page smaller-headline">Password</span>
                        <input type="password" className="login-page input-box-design" />
                    </div>
                    <div className="login-page smaller-headline pb-2">
                        <button className="login-page button-design button-text button-background-color-gradient">Login</button>
                    </div>
                    <div className="login-page bottom-border-gray pb-3"></div>
                    <div className="pt-3 pb-3">
                        <button className="login-page button-design button-text button-background-color-gray">Create a new account here</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default LoginPage;