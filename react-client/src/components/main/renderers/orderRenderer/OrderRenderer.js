import React from 'react';
import MainContainer from '../../container/MainContainer';
import OrderPage from '../../pages/orderPage/OrderPage';

class OrderRenderer extends React.Component {
    render() {
        return (
            <MainContainer>
                <OrderPage />
            </MainContainer>
        );
    }
}

export default OrderRenderer;