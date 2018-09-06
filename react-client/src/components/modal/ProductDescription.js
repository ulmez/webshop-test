import React from 'react';
import './ProductDescription.css';

class ProductDescription extends React.Component {
    render() {
        return (
            <div className="modal fade" id="myModal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                <div className="vertical-alignment-helper">
                    <div className="product-description modal-width modal-dialog vertical-align-center">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h4 className="product-description headline modal-title" id="myModalLabel">Product name</h4>
                                <button type="button" className="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span className="sr-only">Close</span></button>
                            </div>
                            <div className="modal-body">
                                <div className="row">
                                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                                        <div className="product-description padding-bottom">
                                            <img className="product-description image-width-100-percent" src="https://dummyimage.com/400/999999/000000" alt="dummy" />
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                                        <div className="product-description padding-bottom">
                                            <button className="product-description button-design button-text button-background-color-gradient">Add to Cart</button>
                                        </div>
                                        <div>
                                            <div className="product-description headline-smaller">Quantity</div>
                                            <div className="product-description text-smaller padding-bottom">
                                                <select>
                                                    <option>1</option>
                                                    <option>2</option>
                                                    <option>3</option>
                                                </select>
                                            </div>
                                            <div className="product-description headline-smaller">Price</div>
                                            <div className="product-description text-smaller padding-bottom">250 kr</div>
                                            <div className="product-description headline-smaller">In stock</div>
                                            <div className="product-description text-smaller padding-bottom">12</div>
                                            <div className="product-description headline-smaller">Description</div>
                                            <div className="product-description text-smaller">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum massa magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum massa magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum massa magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum massa magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum massa magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum massa magna.</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProductDescription;