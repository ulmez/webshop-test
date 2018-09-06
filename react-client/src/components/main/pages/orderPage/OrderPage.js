import React from 'react';
import './OrderPage.css';

class OrderPage extends React.Component {
    render() {
        return (
            <div className="row">
                <div className="order-page border-bottom-black headline col-12 pt-3 pb-3">Order Information</div>
                <div className="col-12 pt-3">
                    <div className="order-page headline-smaller row-block-design mx-auto">
                        <div className="order-page headline-smaller pb-1">Cart</div>
                        <div className="order-page product-info-block float-left-new">
                            <div className="order-page float-left pr-3">
                                <img src="https://dummyimage.com/50/999999/000000" alt="dummy" />
                            </div>
                            <div>
                                <a href="/">Product name</a>
                            </div>
                        </div>
                        <div className="order-page headline-smaller text-right">
                            <i className="order-page border-icon fa fa-minus"></i>
                            <span className="order-page border-quantity-text">1</span>
                            <i className="order-page border-icon fa fa-plus"></i>
                            <i className="order-page border-icon fa fa-trash margin-left"></i>
                            <span className="order-page text-color-red padding-left">125 kr</span>
                        </div>
                    </div>
                </div>
                <div className="col-12 pt-3">
                    <div className="order-page headline-smaller row-block-design mx-auto">
                        <div className="order-page headline-smaller pb-1">Cart</div>
                        <div className="order-page product-info-block float-left-new">
                            <div className="order-page float-left pr-3">
                                <img src="https://dummyimage.com/50/999999/000000" alt="dummy" />
                            </div>
                            <div>
                                <a href="/">Product name</a>
                            </div>
                        </div>
                        <div className="order-page headline-smaller text-right">
                            <i className="order-page border-icon fa fa-minus"></i>
                            <span className="order-page border-quantity-text">1</span>
                            <i className="order-page border-icon fa fa-plus"></i>
                            <i className="order-page border-icon fa fa-trash margin-left"></i>
                            <span className="order-page text-color-red padding-left">125 kr</span>
                        </div>
                    </div>
                </div>
                <div className="col-12 pt-3">
                    <div className="order-page headline-smaller row-block-design mx-auto">
                        <div className="order-page headline-smaller pb-1">Cart</div>
                        <div className="order-page product-info-block float-left-new">
                            <div className="order-page float-left pr-3">
                                <img src="https://dummyimage.com/50/999999/000000" alt="dummy" />
                            </div>
                            <div>
                                <a href="/">Product name</a>
                            </div>
                        </div>
                        <div className="order-page headline-smaller text-right">
                            <i className="order-page border-icon fa fa-minus"></i>
                            <span className="order-page border-quantity-text">1</span>
                            <i className="order-page border-icon fa fa-plus"></i>
                            <i className="order-page border-icon fa fa-trash margin-left"></i>
                            <span className="order-page text-color-red padding-left">125 kr</span>
                        </div>
                    </div>
                </div>
                <div className="col-12 pt-3">
                    <div className="order-page headline-smaller row-block-design mx-auto">
                        <div className="order-page summary-block float-right">
                            <div className="order-page headline-smaller">
                                <div className="order-page float-left text-left pb-2">
                                    <span className="order-page">Summary</span>
                                </div>
                                <div className="text-right">
                                    <span className="order-page text-color-red padding-left">375 kr</span>
                                </div>
                                <div>
                                    <button className="order-page button-design button-text button-background-color-gradient">Make order</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default OrderPage;