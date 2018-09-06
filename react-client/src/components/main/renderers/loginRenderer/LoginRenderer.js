import React from 'react';
import MainContainer from '../../container/MainContainer';
import LoginPage from '../../pages/loginPage/LoginPage';

class LoginRenderer extends React.Component {
    render() {
        return (
            <MainContainer>
                <LoginPage />
            </MainContainer>
        );
    }
}

export default LoginRenderer;