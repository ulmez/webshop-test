import React from 'react';
import MainContainer from '../../container/MainContainer';
import RegistrationPage from '../../pages/registrationPage/RegistrationPage';

class RegistrationRenderer extends React.Component {
    render() {
        return (
            <MainContainer>
                <RegistrationPage />
            </MainContainer>
        );
    }
}

export default RegistrationRenderer;