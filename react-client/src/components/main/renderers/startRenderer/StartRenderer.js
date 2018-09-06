import React from 'react';
import MainContainer from '../../container/MainContainer';
import StartPage from '../../pages/startPage/StartPage';

class StartRenderer extends React.Component {
    render() {
        return (
            <MainContainer>
                <StartPage />
            </MainContainer>
        );
    }
}

export default StartRenderer;