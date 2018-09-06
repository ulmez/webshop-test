import React from 'react';
import axios from 'axios';
import ProductDescription from '../../../modal/ProductDescription';
import './StartPage.css';

class StartPage extends React.Component {
    componentWillMount() {
        // Make a request for a user with a given ID
        axios.get('/users')
        .then((response) => {
            // handle success
            console.log(response.data);
        })
        .catch((error) => {
            // handle error
            console.log(error);
        });

        /*this.state({
            users: 
        });*/
    }

    render() {
        return (
            <div className="row">
                <div className="col-12">
                    <div className="row">
                        <div className="pt-3 pb-3 col-12">
                            <div className="row">
                                <div className="start-page header col pb-3">Top 10 products</div>
                            </div>
                            <div className="start-page line-border row pt-3">
                                <div className="start-page smaller-header col-xl-3 col-lg-3 col-md-4 col-sm-6 mb-4">
                                    <div className="row">
                                        <div className="col-12">Product name</div>
                                        <div className="col-12">
                                            <i className="start-page star-gold fa fa-star"></i>
                                            <i className="start-page star-gold fa fa-star"></i>
                                            <i className="start-page star-gold fa fa-star"></i>
                                            <i className="start-page star-gold fa fa-star"></i>
                                            <i className="start-page star-gold fa fa-star"></i>
                                            <span className="start-page regular-text ml-1">34</span>
                                        </div>
                                        <div className="col-12">
                                            <img src="https://dummyimage.com/200/999999/000000" alt="dummy" className="start-page pointer-on-hover" data-toggle="modal" data-target="#myModal" />
                                        </div>
                                        <div className="col-12 pt-1">Description</div>
                                        <div className="start-page regular-text col-12">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum massa magna.</div>
                                        <div className="col-12 pt-1">Price</div>
                                        <div className="start-page regular-text col-12">250 kr</div>
                                    </div>
                                </div>
                                <div className="start-page smaller-header col-xl-3 col-lg-3 col-md-4 col-sm-6 mb-4">
                                    <div className="row">
                                        <div className="col-12">Product name</div>
                                        <div className="col-12">
                                            <i className="start-page star-gold fa fa-star"></i>
                                            <i className="start-page star-gold fa fa-star"></i>
                                            <i className="start-page star-gold fa fa-star"></i>
                                            <i className="start-page star-gold fa fa-star"></i>
                                            <i className="start-page star-gold fa fa-star"></i>
                                            <span className="start-page regular-text ml-1">34</span>
                                        </div>
                                        <div className="col-12">
                                            <img src="https://dummyimage.com/200/999999/000000" alt="dummy" className="start-page pointer-on-hover" data-toggle="modal" data-target="#myModal" />
                                        </div>
                                        <div className="col-12 pt-1">Description</div>
                                        <div className="start-page regular-text col-12">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum massa magna.</div>
                                        <div className="col-12 pt-1">Price</div>
                                        <div className="start-page regular-text col-12">250 kr</div>
                                    </div>
                                </div>
                                <div className="start-page smaller-header col-xl-3 col-lg-3 col-md-4 col-sm-6 mb-4">
                                    <div className="row">
                                        <div className="col-12">Product name</div>
                                        <div className="col-12">
                                            <i className="start-page star-gold fa fa-star"></i>
                                            <i className="start-page star-gold fa fa-star"></i>
                                            <i className="start-page star-gold fa fa-star"></i>
                                            <i className="start-page star-gold fa fa-star"></i>
                                            <i className="start-page star-gold fa fa-star"></i>
                                            <span className="start-page regular-text ml-1">34</span>
                                        </div>
                                        <div className="col-12">
                                            <img src="https://dummyimage.com/200/999999/000000" alt="dummy" className="start-page pointer-on-hover" data-toggle="modal" data-target="#myModal" />
                                        </div>
                                        <div className="col-12 pt-1">Description</div>
                                        <div className="start-page regular-text col-12">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum massa magna.</div>
                                        <div className="col-12 pt-1">Price</div>
                                        <div className="start-page regular-text col-12">250 kr</div>
                                    </div>
                                </div>
                                <div className="start-page smaller-header col-xl-3 col-lg-3 col-md-4 col-sm-6 mb-4">
                                    <div className="row">
                                        <div className="col-12">Product name</div>
                                        <div className="col-12">
                                            <i className="start-page star-gold fa fa-star"></i>
                                            <i className="start-page star-gold fa fa-star"></i>
                                            <i className="start-page star-gold fa fa-star"></i>
                                            <i className="start-page star-gold fa fa-star"></i>
                                            <i className="start-page star-gold fa fa-star"></i>
                                            <span className="start-page regular-text ml-1">34</span>
                                        </div>
                                        <div className="col-12">
                                            <img src="https://dummyimage.com/200/999999/000000" alt="dummy" className="start-page pointer-on-hover" data-toggle="modal" data-target="#myModal" />
                                        </div>
                                        <div className="col-12 pt-1">Description</div>
                                        <div className="start-page regular-text col-12">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum massa magna.</div>
                                        <div className="col-12 pt-1">Price</div>
                                        <div className="start-page regular-text col-12">250 kr</div>
                                    </div>
                                </div>
                                <div className="start-page smaller-header col-xl-3 col-lg-3 col-md-4 col-sm-6 mb-4">
                                    <div className="row">
                                        <div className="col-12">Product name</div>
                                        <div className="col-12">
                                            <i className="start-page star-gold fa fa-star"></i>
                                            <i className="start-page star-gold fa fa-star"></i>
                                            <i className="start-page star-gold fa fa-star"></i>
                                            <i className="start-page star-gold fa fa-star"></i>
                                            <i className="start-page star-gold fa fa-star"></i>
                                            <span className="start-page regular-text ml-1">34</span>
                                        </div>
                                        <div className="col-12">
                                            <img src="https://dummyimage.com/200/999999/000000" alt="dummy" className="start-page pointer-on-hover" data-toggle="modal" data-target="#myModal" />
                                        </div>
                                        <div className="col-12 pt-1">Description</div>
                                        <div className="start-page regular-text col-12">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum massa magna.</div>
                                        <div className="col-12 pt-1">Price</div>
                                        <div className="start-page regular-text col-12">250 kr</div>
                                    </div>
                                </div>
                                <div className="start-page smaller-header col-xl-3 col-lg-3 col-md-4 col-sm-6 mb-4">
                                    <div className="row">
                                        <div className="col-12">Product name</div>
                                        <div className="col-12">
                                            <i className="start-page star-gold fa fa-star"></i>
                                            <i className="start-page star-gold fa fa-star"></i>
                                            <i className="start-page star-gold fa fa-star"></i>
                                            <i className="start-page star-gold fa fa-star"></i>
                                            <i className="start-page star-gold fa fa-star"></i>
                                            <span className="start-page regular-text ml-1">34</span>
                                        </div>
                                        <div className="col-12">
                                            <img src="https://dummyimage.com/200/999999/000000" alt="dummy" className="start-page pointer-on-hover" data-toggle="modal" data-target="#myModal" />
                                        </div>
                                        <div className="col-12 pt-1">Description</div>
                                        <div className="start-page regular-text col-12">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum massa magna.</div>
                                        <div className="col-12 pt-1">Price</div>
                                        <div className="start-page regular-text col-12">250 kr</div>
                                    </div>
                                </div>
                                <div className="start-page smaller-header col-xl-3 col-lg-3 col-md-4 col-sm-6 mb-4">
                                    <div className="row">
                                        <div className="col-12">Product name</div>
                                        <div className="col-12">
                                            <i className="start-page star-gold fa fa-star"></i>
                                            <i className="start-page star-gold fa fa-star"></i>
                                            <i className="start-page star-gold fa fa-star"></i>
                                            <i className="start-page star-gold fa fa-star"></i>
                                            <i className="start-page star-gold fa fa-star"></i>
                                            <span className="start-page regular-text ml-1">34</span>
                                        </div>
                                        <div className="col-12">
                                            <img src="https://dummyimage.com/200/999999/000000" alt="dummy" className="start-page pointer-on-hover" data-toggle="modal" data-target="#myModal" />
                                        </div>
                                        <div className="col-12 pt-1">Description</div>
                                        <div className="start-page regular-text col-12">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum massa magna.</div>
                                        <div className="col-12 pt-1">Price</div>
                                        <div className="start-page regular-text col-12">250 kr</div>
                                    </div>
                                </div>
                                <div className="start-page smaller-header col-xl-3 col-lg-3 col-md-4 col-sm-6 mb-4">
                                    <div className="row">
                                        <div className="col-12">Product name</div>
                                        <div className="col-12">
                                            <i className="start-page star-gold fa fa-star"></i>
                                            <i className="start-page star-gold fa fa-star"></i>
                                            <i className="start-page star-gold fa fa-star"></i>
                                            <i className="start-page star-gold fa fa-star"></i>
                                            <i className="start-page star-gold fa fa-star"></i>
                                            <span className="start-page regular-text ml-1">34</span>
                                        </div>
                                        <div className="col-12">
                                            <img src="https://dummyimage.com/200/999999/000000" alt="dummy" className="start-page pointer-on-hover" data-toggle="modal" data-target="#myModal" />
                                        </div>
                                        <div className="col-12 pt-1">Description</div>
                                        <div className="start-page regular-text col-12">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum massa magna.</div>
                                        <div className="col-12 pt-1">Price</div>
                                        <div className="start-page regular-text col-12">250 kr</div>
                                    </div>
                                </div>
                                <div className="start-page smaller-header col-xl-3 col-lg-3 col-md-4 col-sm-6 mb-4">
                                    <div className="row">
                                        <div className="col-12">Product name</div>
                                        <div className="col-12">
                                            <i className="start-page star-gold fa fa-star"></i>
                                            <i className="start-page star-gold fa fa-star"></i>
                                            <i className="start-page star-gold fa fa-star"></i>
                                            <i className="start-page star-gold fa fa-star"></i>
                                            <i className="start-page star-gold fa fa-star"></i>
                                            <span className="start-page regular-text ml-1">34</span>
                                        </div>
                                        <div className="col-12">
                                            <img src="https://dummyimage.com/200/999999/000000" alt="dummy" className="start-page pointer-on-hover" data-toggle="modal" data-target="#myModal" />
                                        </div>
                                        <div className="col-12 pt-1">Description</div>
                                        <div className="start-page regular-text col-12">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum massa magna.</div>
                                        <div className="col-12 pt-1">Price</div>
                                        <div className="start-page regular-text col-12">250 kr</div>
                                    </div>
                                </div>
                                <div className="start-page smaller-header col-xl-3 col-lg-3 col-md-4 col-sm-6 mb-4">
                                    <div className="row">
                                        <div className="col-12">Product name</div>
                                        <div className="col-12">
                                            <i className="start-page star-gold fa fa-star"></i>
                                            <i className="start-page star-gold fa fa-star"></i>
                                            <i className="start-page star-gold fa fa-star"></i>
                                            <i className="start-page star-gold fa fa-star"></i>
                                            <i className="start-page star-gold fa fa-star"></i>
                                            <span className="start-page regular-text ml-1">34</span>
                                        </div>
                                        <div className="col-12">
                                            <img src="https://dummyimage.com/200/999999/000000" alt="dummy" className="start-page pointer-on-hover" data-toggle="modal" data-target="#myModal" />
                                        </div>
                                        <div className="col-12 pt-1">Description</div>
                                        <div className="start-page regular-text col-12">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum massa magna.</div>
                                        <div className="col-12 pt-1">Price</div>
                                        <div className="start-page regular-text col-12">250 kr</div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12 pt-2">
                                    <div className="row">
                                        <div className="start-page paging-text-gray col text-right">Previous</div>
                                        <div className="start-page my-paging-selector-bar col text-center">
                                            <span className="start-page paging-text-black">1 </span>
                                            <span className="start-page paging-text-blue">2 </span>
                                            <span className="start-page paging-text-blue">3 </span>
                                        </div>
                                        <div className="start-page paging-text-blue col text-left">Next</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <ProductDescription />
            </div>
        );
    }
}

export default StartPage;