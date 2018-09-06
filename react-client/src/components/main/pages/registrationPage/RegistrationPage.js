import React from 'react';
import './RegistrationPage.css';

class RegistrationPage extends React.Component {
    render() {
        return (
            <div className="row pt-3">
                <div className="registration-page form-box-width mx-auto">
                    <div className="registration-page main-headline pb-3">
                        Create account
                    </div>
                    <div className="registration-page smaller-headline pb-3">
                        <span className="registration-page smaller-headline">Your name</span>
                        <input type="text" className="registration-page input-box-design" />
                    </div>
                    <div className="registration-page smaller-headline pb-3">
                        <span className="registration-page smaller-headline">Email</span>
                        <input type="text" className="registration-page input-box-design" />
                    </div>
                    <div className="pb-3">
                        <span className="registration-page smaller-headline">Password</span>
                        <input type="password" className="registration-page input-box-design" />
                        <span className="registration-page normal-text">* Password must be at least 6 characters.</span>
                    </div>
                    <div className="registration-page smaller-headline pb-3">
                        <span className="registration-page smaller-headline">Re-enter password</span>
                        <input type="password" className="registration-page input-box-design" />
                    </div>
                    <div className="registration-page smaller-headline pb-2">
                        <button className="registration-page button-design button-text button-background-color-gradient">Create your account</button>
                    </div>
                    <div className="registration-page bottom-border-gray pb-3">
                        <span className="registration-page normal-text">
                            By creating an account, you  agree to the sites <a href="/">Conditions of Use</a> and <a href="/">Privacy Notice</a>.
                        </span>
                    </div>
                    <div className="pt-3 pb-3">
                        <span className="registration-page normal-text">
                            Already have an account? <a href="/"><span className="registration-page sign-in-span-width">Sign in</span><i className="fa fa-caret-right"></i></a>
                        </span>
                    </div>
                </div>
            </div>
        );
    }
}

export default RegistrationPage;