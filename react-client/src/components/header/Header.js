import React from 'react';

import './Header.css';

class Header extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            dropdownSelection: 'All'
        };
    }

    selectedCategory(item) {
        console.log(item.target.text);
        this.setState({
            dropdownSelection: item.target.text
        });
    }

    searchButton() {
        console.log("Gick den in...");
    }

    render() {
        return (
            <div>
                <header className="container-fluid">
                    <div className="row">
                        <div className="header background-white col">
                            <div className="row pt-3 pb-2">
                                <div className="header hide-block col text-right"></div>
                                <div className="header my-search-bar col">
                                    <div className="header my-icon-width">
                                        <img src="https://dummyimage.com/80x32/999999/000000" alt="dummy" />
                                    </div>
                                    <div className="header my-search-bar-width input-group">
                                        <div className="input-group-prepend">
                                            <button className="header dropdown-list btn btn-light dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">{this.state.dropdownSelection}</button>
                                            <div className="header dropdown-list dropdown-menu" onClick={(e) => this.selectedCategory(e)}>
                                                <a className="dropdown-item">All</a>
                                                <a className="dropdown-item">Books</a>
                                                <a className="dropdown-item">Sports</a>
                                            </div>
                                        </div>
                                        <input type="text" className="header dropdown-list form-control" placeholder="Search..." aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                        <div className="input-group-append">
                                            <span className="header search-button input-group-text mr-4" id="basic-addon2" onClick={this.searchButton}>
                                                <i className="fa fa-search"></i>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col text-left"></div>
                            </div>
                        </div>
                    </div>
                </header>
                <nav className="header navbar navbar-expand-lg navbar-dark bg-dark-blue">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="/" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Books</a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <a className="dropdown-item" href="/">Children</a>
                                    <a className="dropdown-item" href="/">Fantasy</a>
                                    <a className="dropdown-item" href="/">Science Fiction</a>
                                </div>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="/" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Movies</a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <a className="dropdown-item" href="/">Drama</a>
                                    <a className="dropdown-item" href="/">Comedy</a>
                                    <a className="dropdown-item" href="/">Nature</a>
                                </div>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="/" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Musics</a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <a className="dropdown-item" href="/">Drama</a>
                                    <a className="dropdown-item" href="/">Comedy</a>
                                    <a className="dropdown-item" href="/">Nature</a>
                                </div>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="/" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Games</a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <a className="dropdown-item" href="/">Drama</a>
                                    <a className="dropdown-item" href="/">Comedy</a>
                                    <a className="dropdown-item" href="/">Nature</a>
                                </div>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="/" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Clothes</a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <a className="dropdown-item" href="/">Drama</a>
                                    <a className="dropdown-item" href="/">Comedy</a>
                                    <a className="dropdown-item" href="/">Nature</a>
                                </div>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="/" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Sports</a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <a className="dropdown-item" href="/">Drama</a>
                                    <a className="dropdown-item" href="/">Comedy</a>
                                    <a className="dropdown-item" href="/">Nature</a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </nav>
                <div className="header background-white cart-block-position">
                    <span className="header medium-text bold-text">
                        <i className="header larger-text fa fa-shopping-cart"></i> Cart
                    </span>
                </div>
            </div>
        );
    }
}

export default Header;